import { Abi } from '../abi'
import { DSA } from '../dsa'
import { Addresses } from '../data/addresses'
import { TokenInfo } from '../data/token-info'
import * as Math from './math';
import { TransactionConfig } from 'web3-core'
import { GetTransactionConfigParams } from '../internal'
import { Contract } from 'web3-eth-contract';

type ErcInputParams = {
  amount: string,
  from?: string | number,
  gas?: string | number,
  gasPrice?: string | number,
  nonce?: number,
  to?: string,
  token: keyof typeof TokenInfo,
}

/**
 * generic ERC20 token methods
 */

 export class Erc20 {
   constructor(private dsa: DSA) {}
    /**
     * Transfer
     */
   async transfer(params: ErcInputParams): Promise<string> {
    const txObj: TransactionConfig = await this.transferTxObj(params);
    
    return this.dsa.sendTransaction(txObj);
   }

   /**
    * Transfer Tx object
    */
   async transferTxObj(params: ErcInputParams): Promise<TransactionConfig> {
    if (!params.to) {
      params.to = this.dsa.instance.address;

      if (params.to === Addresses.genesis) {
        throw new Error("'to' is not defined and instance is not set.")
      }
    }

    if (!Number.isNaN(params.amount)) {
      throw new Error("'amount' is not a number")
    }
    
    if(!params.from) {
      params.from = await this.dsa.internal.getAddress()
    }

    let txObj: TransactionConfig;

    if (["eth", TokenInfo.eth.address].includes(params.token.toLowerCase())) {
      if (["-1", this.dsa.maxValue].includes(params.amount)) {
        throw new Error("ETH amount value cannot be passed as '-1'.")
      }

      txObj = await this.dsa.internal.getTransactionConfig({
        from: params.from,
        to: params.to,
        data: "0x",
        gas: params.gas,
        gasPrice: params.gasPrice,
        nonce: params.nonce,
        value: params.amount,
      } as GetTransactionConfigParams)
    } else {
      const toAddr: string = params.to;
      params.to = this.dsa.internal.filterAddress(params.token)
      const contract: Contract = new this.dsa.web3.eth.Contract(Abi.basics.erc20, params.to)

      if (["-1", this.dsa.maxValue].includes(params.amount)) {
        await contract.methods
          .balanceOf(params.from)
          .call()
          .then((bal: any) => (params.amount = bal))
          .catch((err: any) => {
            throw new Error(`Error while getting token balance: ${err}`);
          });
      }
      const data: string = contract.methods
        .transfer(toAddr, Math.bigNumInString(Number(params.amount)))
        .encodeABI();

      txObj = await this.dsa.internal.getTransactionConfig({
        from: params.from,
        to: params.to,
        data: data,
        gas: params.gas,
        gasPrice: params.gasPrice,
        nonce: params.nonce,
        value: params.amount,
      } as GetTransactionConfigParams);
    }

    return txObj;
   }

   /**
    * Approve
    */
   async approve(params: ErcInputParams): Promise<string> {
    const txObj: TransactionConfig = await this.approveTxObj(params);
    
    return this.dsa.sendTransaction(txObj);
   }

   /**
    * Approve Token Tx Obj
    */
   async approveTxObj(params: ErcInputParams): Promise<TransactionConfig> {
     if (!params.to) {
       throw new Error("Parameter 'to' is missing")
     }
     if (!params.from) {
       params.from = await this.dsa.internal.getAddress()
     }

     let txObj: TransactionConfig;

     if (["eth", TokenInfo.eth.address].includes(params.token.toLowerCase())) {
       throw new Error("ETH does not require approve.") 
     } else {
       const toAddr: string = params.to
       params.to = this.dsa.internal.filterAddress(params.token)
       const contract = new this.dsa.web3.eth.Contract(Abi.basics.erc20, params.to)
       const data: string = contract.methods
         .approve(toAddr, params.amount)
         .encodeABI()

       txObj = await this.dsa.internal.getTransactionConfig({
        from: params.from,
        to: params.to,
        data: data,
        gas: params.gas,
        gasPrice: params.gasPrice,
        nonce: params.nonce,
        value: params.amount,
      } as GetTransactionConfigParams)
     }

     return txObj
   }
 }