import { AbiItem } from 'web3-utils'

export const HOP_A: AbiItem[] = [
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'address', name: 'hopRouter', type: 'address' },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'chainId', type: 'uint256' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'uint256', name: 'bonderFee', type: 'uint256' },
          { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
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
