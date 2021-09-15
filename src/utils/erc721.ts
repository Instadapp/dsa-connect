import { Abi } from '../abi'
import { DSA } from '../dsa'
import { Addresses } from '../addresses'
import { TokenInfo } from '../data/token-info'
import * as Math from './math';
import { TransactionConfig } from 'web3-core'
import { GetTransactionConfigParams } from '../internal'
import { Contract } from 'web3-eth-contract';

/**
 * @param {address} _d.token token address or symbol
 * @param {string} _d.tokenId token id
 * @param {address|string} _d.from (optional) token 
 * @param {number|string} _d.to (optional) 
 * @param {number|string} _d.gasPrice (optional) not optional in "node"
 * @param {number|string} _d.gas (optional) not optional in "node"
 * @param {number|string} _d.nonce (optional) not optional in "node"
 */
type Erc721InputParams = {
  token: keyof typeof TokenInfo | string,
  tokenId: number,
} & Pick<TransactionConfig, 'from' | 'gas' | 'gasPrice' | 'nonce' | 'to'>

/**
 * generic ERC20 token methods
 */

 export class Erc721 {
   constructor(private dsa: DSA) {}
    /**
     * Transfer
     */
   async transfer(params: Erc721InputParams): Promise<string> {
    const txObj: TransactionConfig = await this.transferTxObj(params);
    
    return this.dsa.sendTransaction(txObj);
   }

   /**
    * Transfer Tx object
    */
   async transferTxObj(params: Erc721InputParams): Promise<TransactionConfig> {
    if (!params.to) {
      params.to = this.dsa.instance.address;
    }

    if (params.to === Addresses.genesis) {
      throw new Error("'to' is not defined and instance is not set.")
    }

    if (!params.tokenId) {
      throw new Error("'tokenId' is not a number")
    }
    
    if(!params.from) {
      params.from = await this.dsa.internal.getAddress()
    }

    let txObj: TransactionConfig;

    const toAddr: string = params.to;
    params.to = this.dsa.internal.filterAddress(params.token)
    const contract: Contract = new this.dsa.web3.eth.Contract(Abi.basics.erc721, params.to)

    const data: string = contract.methods
    .safeTransferFrom(params.from, toAddr, params.tokenId)
    .encodeABI();

    txObj = await this.dsa.internal.getTransactionConfig({
    from: params.from,
    to: params.to,
    data: data,
    gas: params.gas,
    gasPrice: params.gasPrice,
    nonce: params.nonce,
    value: 0
    } as GetTransactionConfigParams);

    return txObj;
   }

   /**
    * Approve
    */
   async approve(params: Erc721InputParams): Promise<string> {
    const txObj: TransactionConfig = await this.approveTxObj(params);
    
    return this.dsa.sendTransaction(txObj);
   }

   /**
    * Approve Token Tx Obj
    */
   async approveTxObj(params: Erc721InputParams): Promise<TransactionConfig> {
     if (!params.to) {
       throw new Error("Parameter 'to' is missing")
     }
     if (!params.from) {
       params.from = await this.dsa.internal.getAddress()
     }

     let txObj: TransactionConfig;

      const toAddr: string = params.to
      params.to = this.dsa.internal.filterAddress(params.token)
      const contract = new this.dsa.web3.eth.Contract(Abi.basics.erc20, params.to)
      const data: string = contract.methods
        .approve(toAddr, params.tokenId)
        .encodeABI()

      txObj = await this.dsa.internal.getTransactionConfig({
      from: params.from,
      to: params.to,
      data: data,
      gas: params.gas,
      gasPrice: params.gasPrice,
      nonce: params.nonce,
      value: 0,
    } as GetTransactionConfigParams)

    return txObj
   }
 }