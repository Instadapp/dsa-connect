import { AbiItem } from 'web3-utils'
export const FLUID_MERKLE_CLAIM_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'merkleDistributorContract', type: 'address' },
      { indexed: false, internalType: 'address', name: 'rewardToken', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'cumulativeAmount', type: 'uint256' },
      { indexed: false, internalType: 'bytes32', name: 'positionId', type: 'bytes32' },
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
      { indexed: false, internalType: 'address', name: 'merkleDistributorContract', type: 'address' },
      { indexed: false, internalType: 'address', name: 'rewardToken', type: 'address' },
      { indexed: false, internalType: 'address', name: 'recipient_', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'cumulativeAmount', type: 'uint256' },
      { indexed: false, internalType: 'bytes32', name: 'positionId', type: 'bytes32' },
      { indexed: false, internalType: 'uint256', name: 'cycle', type: 'uint256' },
      { indexed: false, internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
      { indexed: false, internalType: 'uint256', name: 'rewardsClaimed', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogClaimOnBehalf',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'merkleDistributorContract', type: 'address' },
      { indexed: false, internalType: 'address', name: 'rewardToken', type: 'address' },
      { indexed: false, internalType: 'address', name: 'recipient_', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'cumulativeAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint8', name: 'positonType', type: 'uint8' },
      { indexed: false, internalType: 'bytes32', name: 'positionId', type: 'bytes32' },
      { indexed: false, internalType: 'uint256', name: 'cycle', type: 'uint256' },
      { indexed: false, internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
      { indexed: false, internalType: 'bytes', name: 'metadata', type: 'bytes' },
      { indexed: false, internalType: 'uint256', name: 'rewardsClaimed', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogClaimOnBehalfV2',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'merkleDistributorContract', type: 'address' },
      { indexed: false, internalType: 'address', name: 'rewardToken', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'cumulativeAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint8', name: 'positonType', type: 'uint8' },
      { indexed: false, internalType: 'bytes32', name: 'positionId', type: 'bytes32' },
      { indexed: false, internalType: 'uint256', name: 'cycle', type: 'uint256' },
      { indexed: false, internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
      { indexed: false, internalType: 'bytes', name: 'metadata', type: 'bytes' },
      { indexed: false, internalType: 'uint256', name: 'rewardsClaimed', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogClaimV2',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: 'merkleDistributorContract', type: 'address' },
      { internalType: 'address', name: 'rewardToken', type: 'address' },
      { internalType: 'uint256', name: 'cumulativeAmount_', type: 'uint256' },
      { internalType: 'bytes32', name: 'positionId_', type: 'bytes32' },
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
      { internalType: 'address', name: 'merkleDistributorContract', type: 'address' },
      { internalType: 'address', name: 'rewardToken', type: 'address' },
      { internalType: 'address', name: 'recipient_', type: 'address' },
      { internalType: 'uint256', name: 'cumulativeAmount_', type: 'uint256' },
      { internalType: 'bytes32', name: 'positionId_', type: 'bytes32' },
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
    inputs: [
      { internalType: 'address', name: 'merkleDistributorContract', type: 'address' },
      { internalType: 'address', name: 'rewardToken', type: 'address' },
      { internalType: 'address', name: 'recipient_', type: 'address' },
      { internalType: 'uint256', name: 'cumulativeAmount_', type: 'uint256' },
      { internalType: 'uint8', name: 'positonType_', type: 'uint8' },
      { internalType: 'bytes32', name: 'positionId_', type: 'bytes32' },
      { internalType: 'uint256', name: 'cycle_', type: 'uint256' },
      { internalType: 'bytes32[]', name: 'merkleProof_', type: 'bytes32[]' },
      { internalType: 'bytes', name: 'metadata_', type: 'bytes' },
      { internalType: 'uint256', name: 'setId_', type: 'uint256' }
    ],
    name: 'claimOnBehalfV2',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'merkleDistributorContract', type: 'address' },
      { internalType: 'address', name: 'rewardToken', type: 'address' },
      { internalType: 'uint256', name: 'cumulativeAmount_', type: 'uint256' },
      { internalType: 'uint8', name: 'positonType_', type: 'uint8' },
      { internalType: 'bytes32', name: 'positionId_', type: 'bytes32' },
      { internalType: 'uint256', name: 'cycle_', type: 'uint256' },
      { internalType: 'bytes32[]', name: 'merkleProof_', type: 'bytes32[]' },
      { internalType: 'bytes', name: 'metadata_', type: 'bytes' },
      { internalType: 'uint256', name: 'setId_', type: 'uint256' }
    ],
    name: 'claimV2',
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
