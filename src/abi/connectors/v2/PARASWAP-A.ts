import { AbiItem } from 'web3-utils'

export const PARASWAP_A: AbiItem[] = [
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'buyAddr', type: 'address' },
      { internalType: 'address', name: 'sellAddr', type: 'address' },
      { internalType: 'uint256', name: 'sellAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'unitAmt', type: 'uint256' },
      { internalType: 'bytes', name: 'callData', type: 'bytes' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
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
