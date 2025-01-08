import { AbiItem } from 'web3-utils'

export const AAVE_MERIT_CLAIM_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'distributor', type: 'address' },
      { indexed: false, internalType: 'address[]', name: 'tokens', type: 'address[]' },
      { indexed: false, internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
      { indexed: false, internalType: 'bytes32[][]', name: 'merkleProofs', type: 'bytes32[][]' }
    ],
    name: 'LogClaimAll',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: 'distributor', type: 'address' },
      { internalType: 'address[]', name: 'tokens', type: 'address[]' },
      { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
      { internalType: 'bytes32[][]', name: 'merkleProofs', type: 'bytes32[][]' }
    ],
    name: 'claimAll',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'nonpayable',
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
