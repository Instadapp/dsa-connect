import { AbiItem } from 'web3-utils'

export const COMPOUND_V3_REWARDS_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'rewardsClaimed', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogRewardsClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'market', type: 'address' },
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'rewardsClaimed', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogRewardsClaimedOnBehalf',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'claimRewards',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'claimRewardsOnBehalfOf',
    outputs: [
      { internalType: 'string', name: 'eventName_', type: 'string' },
      { internalType: 'bytes', name: 'eventParam_', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
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
