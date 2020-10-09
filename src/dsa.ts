import Web3 from 'web3'
import { TransactionConfig } from 'web3-core'
import { Abi } from './abi'
import { Accounts } from './accounts'
import { CastHelpers } from './cast-helpers'
import { Addresses } from './data/addresses'
import { Internal } from './internal'
import { Spells } from './spells'
import { Transaction } from './transaction'
import { wrapIfSpells } from './utils'

type DSAConfig =
  | {
      web3: Web3
      mode: 'node'
      privateKey: string
    }
  | {
      web3: Web3
      mode?: 'browser'
    }

interface Instance {
  id: number
  address: string
  version: number
}

/**
 * @param _d.spells the spells instance
 * @param _d.origin (optional)
 * @param _d.to (optional)
 * @param _d.from (optional)
 * @param _d.value (optional)
 * @param _d.gasPrice (optional only for "browser" mode)
 * @param _d.gas (optional)
 * @param {number|string} _d.nonce (optional) txn nonce (mostly for node implementation)
 */
type CastParams = {
  spells: Spells
  origin: string
} & Pick<TransactionConfig, 'from' | 'to' | 'value' | 'gas' | 'gasPrice' | 'nonce'>

/**
 * @param {address} _d.authority (optional)
 * @param {address} _d.origin (optional)
 * @param {address} _d.from (optional)
 * @param {number} _d.version (optional)
 * @param {number|string} _d.gasPrice (optional) not optional in "node"
 * @param {number|string} _d.gas (optional) not optional in "node"
 * @param {number|string} _d.nonce (optional) not optional in "node"
 */
type BuildParams = {
  authority?: string
  origin?: string
  version?: Instance['version']
} & Pick<TransactionConfig, 'from' | 'gas' | 'gasPrice' | 'nonce'>

export class DSA {
  readonly config: DSAConfig

  get web3() {
    return this.config.web3
  }
  get mode() {
    return this.config.mode
  }
  get privateKey() {
    if (this.config.mode === 'node') return this.config.privateKey
    return undefined
  }

  origin: string = Addresses.genesis

  /**
   * Sets the origin of interactions.
   *
   * @param origin The origin address for affiliation and on-chain analytics.
   */
  setOrigin(origin: string) {
    this.origin = origin
  }

  instance: Instance = {
    id: 0,
    address: Addresses.genesis,
    version: 1,
  }

  // value of uint(-1).
  public readonly maxValue = '115792089237316195423570985008687907853269984665640564039457584007913129639935'

  readonly internal: Internal
  private readonly castHelpers: CastHelpers
  private readonly accounts: Accounts
  private readonly transaction: Transaction

  public sendTransaction: Transaction['send']
  public encodeSpells: Internal['encodeSpells']
  public encodeCastABI: CastHelpers['encodeABI']
  public estimateCastGas: CastHelpers['estimateGas']
  public count: Accounts['count']
  public getAccounts: Accounts['getAccounts']
  public getAuthById: Accounts['getAuthoritiesById']

  /**
   * @param config A `web3` instance or a DSAConfig
   */
  constructor(config: Web3 | DSAConfig) {
    this.config = getDSAConfig(config)

    this.internal = new Internal(this)
    this.castHelpers = new CastHelpers(this)
    this.transaction = new Transaction(this)
    this.accounts = new Accounts(this)

    this.sendTransaction = this.transaction.send // send transaction // node || browser
    this.encodeSpells = this.internal.encodeSpells
    this.encodeCastABI = this.castHelpers.encodeABI
    this.estimateCastGas = this.castHelpers.estimateGas
    this.count = this.accounts.count
    this.getAccounts = this.accounts.getAccounts
    this.getAuthById = this.accounts.getAuthoritiesById
  }

  /**
   * Sets the current DSA instance.
   */
  public async setInstance(id: number) {
    if (!id) throw new Error('`id` of DSA is not defined.')

    if (!isFinite(id)) throw new Error(`Invaild id '${id}' for DSA.`)

    const accountDetails = await this.getAcocuntIdDetails(id)

    this.instance = accountDetails

    return this.instance
  }

  public async getAcocuntIdDetails(instanceId: Instance['id']) {
    try {
      const contract = new this.web3.eth.Contract(Abi.read.core, Addresses.read.core)
      const [id, address, version] = await contract.methods.getAccountIdDetails(instanceId).call()

      return { id, address, version }
    } catch (err) {
      const count = await this.accounts.count()
      if (count < instanceId) {
        throw new Error('dsaId does not exist. Run `dsa.build()` to create a new DSA.')
      }

      throw err
    }
  }

  /**
   * Sets the current DSA ID instance.
   *
   * @param id DSA ID
   */
  async setAccount(id: number) {
    return this.setInstance(id)
  }

  /**
   * Build a new DSA.
   */
  async build(params: BuildParams) {
    const defaultAddress = await this.internal.getAddress()

    const defaults = {
      from: defaultAddress,
      authority: defaultAddress,
      origin: Addresses.genesis,
      version: 1,
    }

    const mergedParams = Object.assign(defaults, params) as BuildParams

    const to = Addresses.core.index

    const contract = new this.web3.eth.Contract(Abi.core.index, Addresses.core.index)
    const data = contract.methods.build(mergedParams.authority, mergedParams.version, mergedParams.origin).encodeABI()

    if (!mergedParams.from) throw new Error("Parameter 'from' is not defined.")

    const transactionConfig = await this.internal.getTransactionConfig({
      from: mergedParams.from,
      to,
      data,
      gas: mergedParams.gas,
      gasPrice: mergedParams.gasPrice,
      nonce: mergedParams.nonce,
    })

    const transaction = await this.sendTransaction(transactionConfig)

    return transaction
  }

  /**
   * Build new DSA transactionConfiguration.
   *
   * @param {address} _d.authority (optional)
   * @param {address} _d.origin (optional)
   * @param {number|string} _d.gasPrice (optional) not optional in "node"
   * @param {number|string} _d.gas (optional) not optional in "node"
   * @param {number|string} _d.nonce (optional) not optional in "node"
   */
  async buildTransactionConfig(
    params: {
      authority?: string
      origin?: string
    } & Pick<TransactionConfig, 'from' | 'gasPrice' | 'gas' | 'nonce'>
  ) {
    const defaultAddress = await this.internal.getAddress()

    const defaults = {
      version: 1,
      origin: this.origin,
      authority: defaultAddress,
    }

    const mergedParams = Object.assign(defaults, params)

    if (!mergedParams.from) throw new Error(`Parameter 'from' is not defined.`)

    const to = Addresses.core.index

    const contracts = new this.web3.eth.Contract(Abi.core.index, Addresses.core.index)
    const data = contracts.methods.build(mergedParams.authority, mergedParams.version, mergedParams.origin).encodeABI()

    const transactionConfig = await this.internal.getTransactionConfig({
      from: mergedParams.from,
      to,
      data,
      gas: mergedParams.gas,
      gasPrice: mergedParams.gasPrice,
      nonce: mergedParams.nonce,
    })

    return transactionConfig
  }

  /**
   * Creates a Spells instance.
   *
   * Example usage:
   *
   * ```
   * dsa.Spell()
   *  .add(...)
   *  .add(...)
   *  .cast(...)
   * ```
   */
  public Spell() {
    const vm = this

    // Add cast functionality for fluid API through anonymous class.
    return new (class DSASpells extends Spells {
      constructor() {
        super()
      }

      cast(params?: Omit<CastParams, 'spells'>) {
        if (!this.data.length) {
          console.warn('No spells casted. Add spells with `.add(...)`.')
          return
        }

        vm.cast(!!params ? { ...params, spells: this } : this)
      }
    })()
  }

  async cast(params: Spells | CastParams) {
    const defaults = {
      to: this.instance.address,
      from: await this.internal.getAddress(),
      origin: this.origin,
    }

    const mergedParams = Object.assign(defaults, wrapIfSpells(params)) as CastParams

    if (!mergedParams.from) throw new Error(`Parameter 'from' is not defined.`)
    if (!mergedParams.to) throw new Error(`Parameter 'to' is not defined.`)

    const data = await this.getData(mergedParams)

    const transactionConfig = await this.internal.getTransactionConfig({
      from: mergedParams.from,
      to: mergedParams.to,
      gas: mergedParams.gas,
      gasPrice: mergedParams.gasPrice,
      nonce: mergedParams.nonce,
      value: mergedParams.value,
      data: data,
    })

    console.log('Casting spells to DSA.')

    const transaction = await this.sendTransaction(transactionConfig)

    return transaction
  }

  private async getData(params: { spells: Spells; origin: string }) {
    const encodedSpells = this.internal.encodeSpells(params)
    const contract = new this.web3.eth.Contract(Abi.core.account, this.instance.address)
    const data = contract.methods.cast(encodedSpells.targets, encodedSpells.spells, params.origin).encodeABI()

    return data
  }
}

// Used defined Typeguard
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
function isWeb3(config: Web3 | DSAConfig): config is Web3 {
  return !!(config as Web3).version
}

function getDSAConfig(config: Web3 | DSAConfig): DSAConfig {
  if (!config) throw new Error('Invalid config. Pass web3 instance or DSAConfig.')

  if (isWeb3(config)) return { web3: config, mode: 'browser' }

  if (config.mode === 'node') {
    if (!config.privateKey) throw new Error(`Property 'privateKey' is not defined in config.`)

    const privateKey = config.privateKey.slice(0, 2) != '0x' ? '0x' + config.privateKey : config.privateKey

    return {
      web3: config.web3,
      mode: config.mode,
      privateKey,
    }
  } else if (!config.mode || config.mode === 'browser') {
    return {
      web3: config.web3,
      mode: 'browser',
    }
  } else {
    throw new Error(`Mode '${config.mode}' not recognized. Use 'node' or 'browser' as mode.`)
  }
}
