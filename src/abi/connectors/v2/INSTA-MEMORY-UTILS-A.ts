import { AbiItem } from 'web3-utils'

export const INSTA_MEMORY_UTILS_A: AbiItem[] = [
  {
    inputs: [
      { internalType: 'uint256[]', name: 'getIds_', type: 'uint256[]' },
      { internalType: 'uint256', name: 'setId_', type: 'uint256' },
    ],
    name: 'addGetIds',
    outputs: [{ internalType: 'string', name: '_eventName', type: 'string' }, { internalType: 'bytes', name: '_eventParam', type: 'bytes' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
