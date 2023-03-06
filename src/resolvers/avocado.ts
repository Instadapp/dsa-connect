import { DSA, ChainId } from '../dsa'
import { Spells } from '../spells'

import { Version } from '../internal'
import { Addresses } from '../addresses'
import { Abi } from '../abi'
import { connector } from '../abi/core/v1/connector'
import { hasKey } from '../utils/typeHelper'

interface AvoConnectorMapping {
    [key: string]: string;
}

const AvoConnectorMapping: AvoConnectorMapping = {
    "AAVE-V3-IMPORT-A": "0x6F836B972129a525615452b1Bd80a0F4EcF94fEd",
    "INSTAPOOL-C": "0xb00e715E0752232dB3AC121ed86c6e23422a5675"
}

export interface AvocadoAction {
    target: string;
    data: string;
    value: number | string;
    operation: number | string;
}

export class Avocado {
  constructor(private dsa: DSA) {}


   /**
   * Convert DSA spells into Avocado Action
   *
   * @param spells The spells instance
   */
  async convertToActions(spells: Spells, version: Version, chainId: ChainId) {
    const encodeSpellsData = this.dsa.internal.encodeSpells(spells, version);
    let targets: string[];
    if (version === 1) {
        if (encodeSpellsData.targets.length === 0) throw new Error("Targets length is zero")
        targets = encodeSpellsData.targets
    } else {
        try {
            // let spellsDSA = spells.data

            // InstaConnectorsV2 Contract
            const contract = new this.dsa.web3.eth.Contract(
                Abi.core.versions[2].connectors,
                Addresses.core[chainId].versions[version].connectors
            )

            let {isOk, _connectors} = await contract.methods.isConnectors(encodeSpellsData.targets).call()
            if (!isOk) throw new Error("Connector not found on registry")
            
            // If the connector matches the key in AvoConnectorMapping, replace the target address
            // with the Avocado connector address.
            _connectors = _connectors.map((a: string, i: number) => {
                hasKey(AvoConnectorMapping, spells.data[i].connector)
                    ? AvoConnectorMapping[encodeSpellsData.targets[i]]
                    : a
            })

            targets = _connectors;
        } catch (err) {
            throw new Error("Error: not able to resolver connectorName")
        }
    }
    const actions: AvocadoAction[] = targets.map((target, i) => ({
        target,
        data: encodeSpellsData.spells[i],
        operation: 1,
        value: 0
    }))

    return actions;
  }
}
