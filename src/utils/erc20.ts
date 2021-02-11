import { Abi } from '../abi'
import { DSA } from '../dsa'
import { Addresses } from '../data/addresses'
import { TokenInfo } from '../data/token-info'
import * as Math from './math';

/**
 * generic ERC20 token methods
 */

 export class Erc20 {
   constructor(private dsa: DSA) {}

   /**
    * Transfer Tx object
    */
   async transferTxObj(params: any) {
    if (!params.token) {
      throw new Error("Parameter 'token' is not defined.")
    }

    let to;
    let from;

    if (!params.to) {
      to = this.dsa.instance.address;

      if (to === Addresses.genesis) {
        throw new Error("'to' is not defined and instance is not set.")
      }
    }

    if (!params.amount) {
      throw new Error("'amount' is not defined");
    }
    if(!params.from) {
      from = await this.dsa.internal.getAddress()
    }

    let txObj;

    if (["eth", TokenInfo.eth.address].includes(params.token.toLowerCase())) {
      if (["-1", this.dsa.maxValue].includes(params.amount)) {
        throw new Error("ETH amount value cannot be passed as '-1'.")
      }

      params.value = params.amount
      params.callData = "0x"

      txObj = await this.dsa.internal.getTransactionConfig({
        from: from,
        to,
        data: "0x",
        gas: params.gas,
        gasPrice: params.gasPrice,
        nonce: params.nonce,
      } as any)
    } else {
      params.toAddr = to
      to = this.dsa.internal.filterAddress(params.token)
      const contract = new this.dsa.web3.eth.Contract(Abi.basics.erc20, to)

      if (["-1", this.dsa.maxValue].includes(params.amount)) {
        await contract.methods
          .balanceOf(params.from)
          .call()
          .then((bal: any) => (params.amount = bal))
          .catch((err: any) => {
            throw new Error(`Error while getting token balance: ${err}`);
          });
      }
      params.callData = contract.methods
        .transfer(params.toAddr, Math.bigNumInString(params.amount))
        .encodeABI();
      txObj = await this.dsa.internal.getTransactionConfig(params);
    }

    return txObj;
   }

   /**
    * Approve Token Tx Obj
    */
   async approveTxObj(params: any) {
     if (!params.token) {
       throw new Error("Parameter 'token' is missing")
     }
     if (!params.to) {
       throw new Error("Parameter 'to' is missing")
    }
     if (!params.amount) {
       throw new Error("Parameter 'amount' is missing")
     }
     if (!params.from) {
       params.from = await this.dsa.internal.getAddress()
     }

     let txObj;

     if (["eth", TokenInfo.eth.address].includes(params.token.toLowerCase())) {
       throw new Error("ETH does not require approve.") 
     } else {
       params.toAddr = params.to
       params.to = this.dsa.internal.filterAddress(params.token)
       const contract = new this.dsa.web3.eth.Contract(Abi.basics.erc20, params.to)
       params.callData = contract.methods
         .approve(params.toAddr, params.amount)
         .encodeABI()

       txObj = await this.dsa.internal.getTransactionConfig(params)
     }

     return txObj
   }
 }