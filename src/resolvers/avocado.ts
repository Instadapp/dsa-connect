import { DSA, ChainId } from '../dsa'
import { Spells } from '../spells'

import { Version } from '../internal'
import { Addresses } from '../addresses'
import { Abi } from '../abi'
import { hasKey } from '../utils/typeHelper'

const AvoConnectorMapping: Record<ChainId, Record<string, string>> = {
    1: {
        "AAVE-V2-IMPORT-C": "0xbDBa11D5A89ED8CA542F801F785270c1d773B3F0",
        "AAVE-V3-IMPORT-A": "0x1852C8b7FD63D8D8749cA8DBd98d9fad9Ccc7AC7",
        "COMPOUND-IMPORT-D": "0xfcC6De9477DfcaB473021F4743FA0ec5Cec73417",
        "EULER-IMPORT-A": "0x1Df3C8AC7BA672F060DbC088352965dB862f98d8",
        "AAVE-V3-IMPORT-PERMIT-A": "0x20F2ad8531c7aF639659b867518e15fE57550bBA"
    },
    137: {
        "AAVE-V2-IMPORT-C": "0x5F337be2294Fe4244e61177508EA9314851998a0",
        "AAVE-V3-IMPORT-A": "0x6F836B972129a525615452b1Bd80a0F4EcF94fEd",
        "AAVE-V3-IMPORT-PERMIT-A": "0xa3770b566c8C14b3191eD46c3E1BE1B2d153CFFC",
    },
    42161: {
        "AAVE-V3-IMPORT-A": "0x6773Ee66207B2322053C399C670973C63Aa80BFc",
        "AAVE-V3-IMPORT-PERMIT-A": "0xFc563b347874a4A456dD389F9dE56fbe55e6E196"
    },
    43114: {
        "AAVE-V2-IMPORT-C": "0xF0f037538B583F1B61288343D208218f90C30029",
        "AAVE-V3-IMPORT-A": "0xa066Bd18446cb56C020623784A1B86A69d6DA45d",
        "AAVE-V3-IMPORT-PERMIT-A": "0x67a3C4Df395c01CfB107eD9447242C136D1523A6"
    },
    10: {
        "AAVE-V3-IMPORT-A": "0x0030D79aF00325A5B4577a7d5976492A93db114B",
        "AAVE-V3-IMPORT-PERMIT-A": "0x1814d6E8E85bd58C6fccC9Bdf82a6d1931A825Bd"
    },
    250: {},
    8453: {},
}

const FLA_AVOCADO_ADDRESS = "0x8d8B52e9354E2595425D00644178E2bA2257f42a" // Avocado
const FLA_FLUID_ADDRESS = "0xAB50Dd1C57938218627Df2311ef65b4e2e84aF48" // Fluid
const MULTI_PAYBACK_ADDRESS = "0xb03922E93c386B045b2a7f7e6732Ef4F3B93f993"

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
  async convertToActions(spells: Spells, version: Version, chainId: ChainId, isFluid: Boolean = false) {
    const encodeSpellsData = this.dsa.internal.encodeSpells(spells, version, chainId);
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
            throw new Error(`Error: not able to resolver connectorName: ${err}`)
        }
    }
    const flaAvocadoOrFluidABI = {"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"uint256","name":"_route","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"},{"internalType":"bytes","name":"_instadata","type":"bytes"}],"name":"flashLoan","outputs":[],"stateMutability":"nonpayable","type":"function"}
    const multiTransferABI = {"inputs":[{"internalType":"address","name":"flashloanAggregator_","type":"address"},{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"payback","outputs":[],"stateMutability":"nonpayable","type":"function"}

    
    const actions: AvocadoAction[] =  targets.flatMap((target, i) => {
        const isFlashloanSpell = spells.data[i].connector === "INSTAPOOL-C" || spells.data[i].connector === "INSTAPOOL-D"
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
                    target: isFluid ? FLA_FLUID_ADDRESS : FLA_AVOCADO_ADDRESS,
                    data: this.dsa.web3.eth.abi.encodeFunctionCall(flaAvocadoOrFluidABI as any, params),
                    operation: 2,
                    value: 0
                }
            } else {
                return {
                    data: this.dsa.web3.eth.abi.encodeFunctionCall(
                        multiTransferABI as any,
                        [
                            isFluid ? FLA_FLUID_ADDRESS : FLA_AVOCADO_ADDRESS,
                            tokens,
                            amounts
                        ]
                    ),
                    target: MULTI_PAYBACK_ADDRESS,
                    operation: 1,
                    value: 0
                }
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

  async encodeFlashCastData(spells: Spells, version: Version, chainId: ChainId, isFluid: Boolean = false) {
    const flashloanActions = await this.convertToActions(spells, version, chainId, isFluid)

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
