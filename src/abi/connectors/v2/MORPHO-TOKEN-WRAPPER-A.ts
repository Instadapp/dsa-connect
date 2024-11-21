import { AbiItem } from 'web3-utils'
export const MORPHO_TOKEN_WRAPPER_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'uint256', name: 'newTokensReceived', type: 'uint256' }],
    name: 'LogConvertToNewMorpho',
    type: 'event'
  },
  {
    inputs: [],
    name: 'convertToNewMorpho',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  }
]
