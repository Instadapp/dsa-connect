import { TransactionConfig } from 'web3-core'
import { DSA } from './dsa'
import { Abi } from './abi'
import { Addresses } from './data/addresses'
import { Spells } from './spells'
import { wrapIfSpells } from './utils'

type EncodeAbiParams = {
  spells: Spells
  origin?: string
} & Pick<TransactionConfig, 'to'>

export class CastHelpers {
  constructor(private dsa: DSA) {}

  /**
   * Returns the estimated gas cost.
   *
   * @param params.from the from address
   * @param params.to the to address
   * @param params.value eth value
   * @param params.spells cast spells
   */
  estimateGas = async (
    dsa: DSA,
    params: { spells: Spells } & Required<Pick<TransactionConfig, 'from' | 'to' | 'value'>>
  ) => {
    const to = params.to ?? dsa.instance.address

    if (to === Addresses.genesis)
      throw new Error(
        `Please configure the DSA instance by calling dsa.setInstance(dsaId). More details: https://docs.instadapp.io/setup`
      )

    const { targets, spells } = this.dsa.internal.encodeSpells(params)

    const args = [targets, spells, dsa.origin]
    const from = params.from ?? (await this.dsa.internal.getAddress())
    const value = params.value ?? '0'
    const abi = this.dsa.internal.getInterface(Abi.core.account, 'cast')

    if (!abi) throw new Error('Abi is not defined.')

    const estimatedGas = await this.dsa.internal.estimateGas({ abi, to, from, value, args })

    return estimatedGas
  }

  /**
   * Returns the encoded cast ABI byte code to send via a transaction or call.
   *
   * @param params.spells The spells instance
   * @param params.to (optional) the address of the smart contract to call
   * @param params.origin (optional) the transaction origin source
   */
  encodeABI = async (params: Spells | EncodeAbiParams) => {
    const defaults = {
      to: this.dsa.instance.address,
      origin: this.dsa.origin,
    }

    const mergedParams = Object.assign(defaults, wrapIfSpells(params)) as EncodeAbiParams

    if (mergedParams.to === Addresses.genesis)
      throw new Error(
        `Please configure the DSA instance by calling dsa.setInstance(dsaId). More details: https://docs.instadapp.io/setup`
      )

    const contract = new this.dsa.config.web3.eth.Contract(Abi.core.account, mergedParams.to)

    const { targets, spells } = this.dsa.internal.encodeSpells(mergedParams.spells)
    //TODO @thrilok: check about return type.
    const encodedAbi: string = contract.methods.cast(targets, spells, mergedParams.origin).encodeABI()

    return encodedAbi
  }
}
