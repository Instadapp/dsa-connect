import { AbiItem } from 'web3-utils'

export const SWAP_AGGREGATE_A: AbiItem[] = [
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string[]', name: '_connectors', type: 'string[]' },
      { internalType: 'bytes[]', name: '_data', type: 'bytes[]' },
    ],
    name: 'swap',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
]
