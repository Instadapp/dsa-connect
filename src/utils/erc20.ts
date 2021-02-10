import { DSA } from '../dsa'
import { Addresses } from '../data/addresses'
import { TokenInfo } from '../data/token-info'

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
      if (["-1", ].includes(params.amount)) {
        throw new Error("ETH amount value cannot be passed as '-1'.")
      }
    }
   }
 }