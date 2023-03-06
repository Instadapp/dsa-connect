import { DSA, ChainId } from '../dsa'
import { Spells } from '../spells'

import { Version } from '../internal'
import { Addresses } from '../addresses'
import { Abi } from '../abi'
import { hasKey } from '../utils/typeHelper'

const AvoConnectorMapping: Record<ChainId, Record<string, string>> = {
    1: {},
    137: {
        "AAVE-V3-IMPORT-A": "0x6F836B972129a525615452b1Bd80a0F4EcF94fEd",
    },
    42161: {},
    43114: {},
    10: {},
    250: {}
}

const FLA_V2_ADDRESS = "0x8d8B52e9354E2595425D00644178E2bA2257f42a"

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
            // InstaConnectorsV2 Contract
            const contract = new this.dsa.web3.eth.Contract(
                Abi.core.versions[2].connectors,
                Addresses.core[chainId].versions[version].connectors
            )

            let {isOk, _connectors} = await contract.methods.isConnectors(encodeSpellsData.targets).call()
            if (!isOk) throw new Error("Connector not found on registry")
            
            // If the connector matches the key in AvoConnectorMapping, replace the target address
            // with the Avocado connector address.
            targets = _connectors.map((a: string, i: number) => 
                (hasKey(AvoConnectorMapping[chainId], spells.data[i].connector)
                    ? AvoConnectorMapping[chainId][encodeSpellsData.targets[i]]
                    : a)
            )
        } catch (err) {
            throw new Error("Error: not able to resolver connectorName")
        }
    }
    const flaV2ABI = {"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"uint256","name":"_route","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"},{"internalType":"bytes","name":"_instadata","type":"bytes"}],"name":"flashLoan","outputs":[],"stateMutability":"nonpayable","type":"function"}
    const erc20ABI = {"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}
    
    const actions: AvocadoAction[] =  targets.flatMap((target, i) => {
        const isFlashloanSpell = spells.data[i].connector === "INSTAPOOL-C"
        const isMultiFlashloanSpell = spells.data[i].method === "flashMultiBorrowAndCast" || spells.data[i].method === "flashMultiPayback"
        const isPaybackFlashloanSpell = spells.data[i].method === "flashPayback" || spells.data[i].method === "flashMultiPayback"
        
        if (isFlashloanSpell) {
            const spellsArgs = spells.data[i].args
            const tokens = isMultiFlashloanSpell ? spellsArgs[0] : [spellsArgs[0]]
            const amounts = isMultiFlashloanSpell ? spellsArgs[1] : [spellsArgs[1]]

            if (!isPaybackFlashloanSpell) {
                const params = [
                    tokens,
                    amounts,
                    spellsArgs[2],
                    spellsArgs[3],
                    spellsArgs[4],
                ]
    
                return  { 
                    target: FLA_V2_ADDRESS,
                    data: this.dsa.web3.eth.abi.encodeFunctionCall(flaV2ABI as any, params),
                    operation: 2,
                    value: 0
                }
            } else {
                return tokens.map((token: string, i: number) => {
                    return {
                        data: this.dsa.web3.eth.abi.encodeFunctionCall(erc20ABI as any, [FLA_V2_ADDRESS, amounts[i]]),
                        target: token,
                        operation: 0,
                        value: 0
                    }
                })
            }
        } else {
            return {
                target,
                data: encodeSpellsData.spells[i],
                operation: 1,
                value: 0
            }
        }
    })
    return actions
  }

  async encodeFlashCastData(spells: Spells, version: Version, chainId: ChainId) {
    const flashloanActions = await this.convertToActions(spells, version, chainId)

    const actionsType = [{
        components: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "operation",
                type: "uint256"
            }
        ],
        internalType: "struct IAvoWalletV2.Action[]",
        name: "actions",
        type: "tuple[]"
    }]

    return this.dsa.web3.eth.abi.encodeParameters(actionsType, [flashloanActions]);
  }
}
