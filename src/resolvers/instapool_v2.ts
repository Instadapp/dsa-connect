import { DSA } from '../dsa'
import { Spells } from '../spells'

import { Version } from '../internal'

export class Instapool_v2 {
  constructor(private dsa: DSA) {}

   /**
   * Encode Instapool_v2 flashBorrowWithCast calldata arg.
   *
   * @param spells The spells instance
   */
  encodeFlashCastData(spells: Spells, version: Version = this.dsa.instance.version) {
    const encodeSpellsData = this.dsa.internal.encodeSpells(spells, version);
    const targetType = Number(version) === 1 ? "address[]" : "string[]"
    let argTypes = [targetType, "bytes[]"];
    return this.dsa.web3.eth.abi.encodeParameters(argTypes, [encodeSpellsData.targets, encodeSpellsData.spells]);
  }
}
