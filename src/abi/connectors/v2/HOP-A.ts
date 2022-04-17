import { AbiItem } from 'web3-utils'

export const HOP_A: AbiItem[] = [
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'address', name: 'router', type: 'address' },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'targetChainId', type: 'uint256' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'uint256', name: 'bonderFee', type: 'uint256' },
          { internalType: 'uint256', name: 'sourceAmountOutMin', type: 'uint256' },
          { internalType: 'uint256', name: 'sourceDeadline', type: 'uint256' },
          { internalType: 'uint256', name: 'destinationAmountOutMin', type: 'uint256' },
          { internalType: 'uint256', name: 'destinationDeadline', type: 'uint256' },
        ],
        internalType: 'struct Helpers.BridgeParams',
        name: 'params',
        type: 'tuple',
      },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
    ],
    name: 'bridge',
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
