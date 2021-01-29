import { DSA } from '../dsa'
import { Spells } from '../spells'


export class Instapool_v2 {
  constructor(private dsa: DSA) {}

   /**
   * Encode Instapool_v2 flashBorrowWithCast calldata arg.
   *
   * @param spells The spells instance
   */
  encodeFlashCastData(spells: Spells) {
    let encodeSpellsData = this.dsa.internal.encodeSpells(spells);
    let argTypes = ["address[]", "bytes[]"];
    return this.dsa.web3.eth.abi.encodeParameters(argTypes, [encodeSpellsData.targets, encodeSpellsData.spells]);
  }
}
