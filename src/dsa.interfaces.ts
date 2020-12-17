import { TransactionConfig } from 'web3-core'
import Web3 from 'web3'
import { Spells } from './spells'

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
  origin?: string
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

export { DSAConfig, Instance, CastParams, BuildParams }
