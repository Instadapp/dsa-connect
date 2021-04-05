import { TransactionConfig } from 'web3-core'
import { AbiItem } from 'web3-utils'
import DSA from '.'
import { Abi } from './abi'
import { Connector } from "./abi/connectors";
import { Addresses } from './addresses'
import { TokenInfo } from './data/token-info'
import { EstimatedGasException } from './exceptions/estimated-gas-exception'
import { Spells } from './spells'
import { hasKey } from './utils/typeHelper'
import connectorV2Mapping from "./data/connectorsV2_M1_mapping";

export interface GetTransactionConfigParams {
  from: NonNullable<TransactionConfig['from']>
  to: NonNullable<TransactionConfig['to']>
  data: NonNullable<TransactionConfig['data']>
  value?: TransactionConfig['value']
  gas?: TransactionConfig['gas']
  gasPrice?: TransactionConfig['gasPrice']
  nonce?: TransactionConfig['nonce']
}

export type Version = keyof typeof Abi.connectors.versions
export { Connector } from './abi/connectors';

export type EstimateGasParams = {
  abi: AbiItem
  args: any
} & Required<Pick<TransactionConfig, 'from' | 'to' | 'value'>>

export class Internal {
  constructor(private dsa: DSA) {}

  /**
   * Returns TransactionObject for any calls.
   *
   * Parameter `gasPrice` must be defined in mode `node` and is optional in mode `browser`.
   *
   * Parameter `nonce` only takes effect in mode `node`.
   *
   * @param params.from
   * @param params.to
   * @param params.callData
   * @param params.value (optional)
   * @param params.gas (optional)
   * @param params.gasPrice (optional only for "browser" mode)
   * @param params.nonce (optional) mostly for "node" mode
   */
  getTransactionConfig = async (params: GetTransactionConfigParams) => {
    if (!params.from) throw new Error("Parameter 'from' is not defined.")
    if (!params.to) throw new Error("Parameter 'to' is not defined.")
    if (!params.data) throw new Error("Parameter 'data' is not defined.")

    const from = params.from
    const to = params.to
    const data = params.data !== '0x' ? params.data : '0x'
    const value = params.value ?? 0
    const gas = params.gas ?? (await this.getGas({ from, to, data, value }))

    const transactionConfig: TransactionConfig = { from, to, data, value, gas }

    if (params.gasPrice) {
      transactionConfig.gasPrice = params.gasPrice
    }

    if (this.dsa.mode === 'node') {
      if (!params.gasPrice) throw new Error("Parameter 'gasPrice' must be defined when using mode 'node'.")

      transactionConfig.nonce = params.nonce ?? (await this.getNonce(from))
    }

    return transactionConfig
  }

  private getNonce = async (from: string | number) => {
    return await this.dsa.web3.eth.getTransactionCount(String(from))
  }

  private getGas = async (transactionConfig: TransactionConfig) => {
    return ((await this.dsa.web3.eth.estimateGas(transactionConfig)) * 1.1).toFixed(0) // increasing gas cost by 10% for margin
  }

  /**
   * Returns the ABI interface for any DSA contract.
   */
  getInterface = (abiItems: AbiItem[], method: string) => {
    const abiItem = abiItems.find((abiItem) => abiItem.name === method)

    if (!abiItem) {
      console.error(`${method} is an invalid method.`)
      return
    }

    return abiItem
  }

  /**
   * Returns encoded data of any calls.
   */
  encodeMethod = (params: { connector: Connector; method: string; args: string[] }, version: Version=1) => {
    
    // type check that object has the required properties
    if (!(hasKey(Abi.connectors.versions, version) && hasKey(Abi.connectors.versions[version], params.connector))) {
      throw new Error(`ConnectorInterface '${params.method}' not found`)
    }

    // Abi.connectors.versions[version]
    const connectorInterface = this.getInterface(Abi.connectors.versions[version][params.connector], params.method)

    if (!connectorInterface) throw new Error(`ConnectorInterface '${params.method}' not found`)

    return this.dsa.web3.eth.abi.encodeFunctionCall(connectorInterface, params.args)
  }

  /**
   * Returns encoded data of spells (used via cast() mostly).
   *
   * @param params the spells instance
   * OR
   * @param params.spells the spells instance
   */
  encodeSpells = (params: Spells | { spells: Spells }) => {
    const spells = this.dsa.castHelpers.flashBorrowSpellsConvert(this.getSpells(params))

  
    const targets = spells.data.map(
      Number(this.dsa.instance.version) === 1 ?
        (spell) => this.getTarget(spell.connector) :
        (spell) => 
        this.getTarget(
          hasKey(connectorV2Mapping, spell.connector) ? 
          connectorV2Mapping[spell.connector] as Connector : spell.connector
        )
    )

    
    const encodedMethods = spells.data.map((spell) => this.encodeMethod(spell))

    return { targets, spells: encodedMethods }
  }

  private getSpells = (params: Spells | { spells: Spells }) => {
    return params instanceof Spells ? params : params.spells
  }

  /**
   * Returns the input interface required for cast().
   */
  private getTarget = (connector: Connector) => {
    const version = this.dsa.instance.version;
    
    // type check that object has the required properties
    if (
      !(hasKey(Addresses.connectors.versions, version) && hasKey(Addresses.connectors.versions[version], connector))
    ) {
      return console.error(`${connector} is invalid connector.`)
    } 

    const target = Addresses.connectors.versions[version][connector]

    if (!target) return console.error(`${connector} is invalid connector.`)

    // return target address for version 1 and connector name for version 2
    return version === 1 ? target : connector;
  }

  /**
   * Returns the input interface required for cast().
   */
  getAddress = async () => {
    // otherwise, browser
    const addresses = await this.dsa.web3.eth.getAccounts()

    if (!addresses.length) {
      console.log('No ethereum address detected.')
      return
    }

    return addresses[0]
  }

  /**
   * Returns the address from token key OR checksum the address if not.
   */
  filterAddress = (token: keyof typeof TokenInfo | string) => {
    var isAddress = this.dsa.web3.utils.isAddress(token.toLowerCase())
    if (isAddress) {
      return this.dsa.web3.utils.toChecksumAddress(token.toLowerCase())
    } else {
      const info = TokenInfo[token as keyof typeof TokenInfo]

      if (!info) throw new Error("'token' symbol not found.")

      return this.dsa.web3.utils.toChecksumAddress(info.address)
    }
  }

  /**
   * Returns the estimated gas cost.
   *
   * @param params.from the from address
   * @param params.to the to address
   * @param params.abi the ABI method single interface
   * @param params.args the method arguments
   * @param params.value the call ETH value
   */
  estimateGas = async (params: EstimateGasParams) => {
    const data = this.dsa.web3.eth.abi.encodeFunctionCall(params.abi, params.args)

    try {
      const estimatedGas = await this.dsa.web3.eth.estimateGas({
        from: params.from,
        to: params.to,
        data: data,
        value: params.value,
      })

      return estimatedGas
    } catch (error) {
      throw new EstimatedGasException(error, { ...params, data })
    }
  }
}
