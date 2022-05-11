import { AbiItem } from 'web3-utils'

export const UNISWAP_V3_SWAP_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'buyToken', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sellToken', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'buyAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'sellAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogBuy',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'buyToken', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sellToken', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'buyAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'sellAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogSell',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'address', name: '_buyAddr', type: 'address' },
      { internalType: 'address', name: '_sellAddr', type: 'address' },
      { internalType: 'uint24', name: '_fee', type: 'uint24' },
      { internalType: 'uint256', name: '_unitAmt', type: 'uint256' },
      { internalType: 'uint256', name: '_buyAmt', type: 'uint256' },
      { internalType: 'uint256', name: '_getId', type: 'uint256' },
      { internalType: 'uint256', name: '_setId', type: 'uint256' },
    ],
    name: 'buy',
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
  {
    inputs: [
      { internalType: 'address', name: '_buyAddr', type: 'address' },
      { internalType: 'address', name: '_sellAddr', type: 'address' },
      { internalType: 'uint24', name: '_fee', type: 'uint24' },
      { internalType: 'uint256', name: '_unitAmt', type: 'uint256' },
      { internalType: 'uint256', name: '_sellAmt', type: 'uint256' },
      { internalType: 'uint256', name: '_getId', type: 'uint256' },
      { internalType: 'uint256', name: '_setId', type: 'uint256' },
    ],
    name: 'sell',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
]
