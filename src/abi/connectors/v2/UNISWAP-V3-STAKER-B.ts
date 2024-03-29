import { AbiItem } from 'web3-utils'

export const UNISWAP_V3_STAKER_B: AbiItem[] = [
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'LogDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: false, internalType: 'bytes32', name: 'incentiveId', type: 'bytes32' },
    ],
    name: 'LogDepositAndStake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'LogDepositTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'bytes32', name: 'incentiveId', type: 'bytes32' },
      { indexed: false, internalType: 'address', name: 'poolAddr', type: 'address' },
      { indexed: false, internalType: 'address', name: 'refundee', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'endTime', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256' },
    ],
    name: 'LogIncentiveCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'rewardToken', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'LogRewardClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: false, internalType: 'bytes32', name: 'incentiveId', type: 'bytes32' },
    ],
    name: 'LogStake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: false, internalType: 'bytes32', name: 'incentiveId', type: 'bytes32' },
    ],
    name: 'LogUnstake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'LogWithdraw',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'address', name: '_rewardToken', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
    ],
    name: 'claimRewards',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_rewardToken', type: 'address' },
      { internalType: 'uint256', name: '_startTime', type: 'uint256' },
      { internalType: 'uint256', name: '_endTime', type: 'uint256' },
      { internalType: 'address', name: '_refundee', type: 'address' },
      { internalType: 'address', name: '_poolAddr', type: 'address' },
      { internalType: 'uint256', name: '_reward', type: 'uint256' },
    ],
    name: 'createIncentive',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
    name: 'deposit',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_rewardToken', type: 'address' },
      { internalType: 'uint256', name: '_startTime', type: 'uint256' },
      { internalType: 'uint256', name: '_endTime', type: 'uint256' },
      { internalType: 'address', name: '_refundee', type: 'address' },
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
    ],
    name: 'depositAndStake',
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
      { internalType: 'address', name: '_rewardToken', type: 'address' },
      { internalType: 'uint256', name: '_startTime', type: 'uint256' },
      { internalType: 'uint256', name: '_endTime', type: 'uint256' },
      { internalType: 'address', name: '_refundee', type: 'address' },
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
    ],
    name: 'stake',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'address', name: '_to', type: 'address' },
    ],
    name: 'transferDeposit',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_rewardToken', type: 'address' },
      { internalType: 'uint256', name: '_startTime', type: 'uint256' },
      { internalType: 'uint256', name: '_endTime', type: 'uint256' },
      { internalType: 'address', name: '_refundee', type: 'address' },
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
    ],
    name: 'unstake',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
    name: 'withdraw',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
]
