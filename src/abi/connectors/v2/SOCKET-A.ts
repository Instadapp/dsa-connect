import { AbiItem } from 'web3-utils'

export const SOCKET_A: AbiItem[] = [
  {
    inputs: [
      { internalType: 'address', name: '_token', type: 'address' },
      { internalType: 'bytes', name: '_txData', type: 'bytes' },
      { internalType: 'uint256', name: '_route', type: 'uint256' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      { internalType: 'uint256', name: '_targetChain', type: 'uint256' },
      { internalType: 'address', name: '_recipient', type: 'address' },
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
