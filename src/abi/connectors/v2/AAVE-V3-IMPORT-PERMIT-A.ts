import { AbiItem } from 'web3-utils'

export const AAVE_V3_IMPORT_PERMIT_A: AbiItem[] = [
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
      {
        components: [
          { internalType: 'uint8[]', name: 'v', type: 'uint8[]' },
          { internalType: 'bytes32[]', name: 'r', type: 'bytes32[]' },
          { internalType: 'bytes32[]', name: 's', type: 'bytes32[]' },
          { internalType: 'uint256[]', name: 'expiry', type: 'uint256[]' },
        ],
        internalType: 'struct Helper.SignedPermits',
        name: 'permitData',
        type: 'tuple',
      },
    ],
    name: 'importAave',
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
