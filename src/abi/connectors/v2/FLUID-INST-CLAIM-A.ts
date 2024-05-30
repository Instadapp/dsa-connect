import { AbiItem } from 'web3-utils'
export const FLUID_INST_CLAIM_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'cumulativeAmount', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'fToken', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'cycle', type: 'uint256' },
      { indexed: false, internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
      { indexed: false, internalType: 'uint256', name: 'rewardsClaimed', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogClaim',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'recipient_', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'cumulativeAmount', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'fToken', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'cycle', type: 'uint256' },
      { indexed: false, internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
      { indexed: false, internalType: 'uint256', name: 'rewardsClaimed', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogClaimOnBehalf',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'cumulativeAmount_', type: 'uint256' },
      { internalType: 'address', name: 'fToken_', type: 'address' },
      { internalType: 'uint256', name: 'cycle_', type: 'uint256' },
      { internalType: 'bytes32[]', name: 'merkleProof_', type: 'bytes32[]' },
      { internalType: 'uint256', name: 'setId_', type: 'uint256' }
    ],
    name: 'claim',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'recipient_', type: 'address' },
      { internalType: 'uint256', name: 'cumulativeAmount_', type: 'uint256' },
      { internalType: 'address', name: 'fToken_', type: 'address' },
      { internalType: 'uint256', name: 'cycle_', type: 'uint256' },
      { internalType: 'bytes32[]', name: 'merkleProof_', type: 'bytes32[]' },
      { internalType: 'uint256', name: 'setId_', type: 'uint256' }
    ],
    name: 'claimOnBehalf',
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
