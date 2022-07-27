import { AbiItem } from 'web3-utils'

export const INSTA_DEX_SIMULATION_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'sellToken', type: 'address' },
      { indexed: false, internalType: 'address', name: 'buyToken', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'sellAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'buyAmount', type: 'uint256' },
    ],
    name: 'LogSimulateSwap',
    type: 'event',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'sellToken', type: 'address' },
      { internalType: 'address', name: 'buyToken', type: 'address' },
      { internalType: 'uint256', name: 'sellAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'buyAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
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
