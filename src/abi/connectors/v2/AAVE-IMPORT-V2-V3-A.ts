import { AbiItem } from 'web3-utils'

export const AAVE_IMPORT_V2_V3_A: AbiItem[] = [
  {
    inputs: [
      { internalType: 'address', name: 'userAccount', type: 'address' },
      {
        components: [
          { internalType: 'address[]', name: 'supplyTokens', type: 'address[]' },
          { internalType: 'address[]', name: 'borrowTokens', type: 'address[]' },
          { internalType: 'bool', name: 'convertStable', type: 'bool' },
          { internalType: 'uint256[]', name: 'flashLoanFees', type: 'uint256[]' },
        ],
        internalType: 'struct Helper.ImportInputData',
        name: 'inputData',
        type: 'tuple',
      },
    ],
    name: 'importAaveV2ToV3',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address[]', name: 'supplyTokens', type: 'address[]' },
          { internalType: 'address[]', name: 'borrowTokens', type: 'address[]' },
          { internalType: 'bool', name: 'convertStable', type: 'bool' },
          { internalType: 'uint256[]', name: 'flashLoanFees', type: 'uint256[]' },
        ],
        internalType: 'struct Helper.ImportInputData',
        name: 'inputData',
        type: 'tuple',
      },
    ],
    name: 'migrateAaveV2ToV3',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
]
