import { AbiItem } from 'web3-utils'

export const AAVE_V2_AUTOMATION_STAGING_A: AbiItem[] = [
  { anonymous: false, inputs: [], name: 'LogCancelAutomation', type: 'event' },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'safeHF', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'thresholdHF', type: 'uint256' }
    ],
    name: 'LogSubmitAutomation',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'safeHF', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'thresholdHF', type: 'uint256' }
    ],
    name: 'LogUpdateAutomation',
    type: 'event'
  },
  {
    inputs: [],
    name: 'cancelAutomationRequest',
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
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'safeHealthFactor', type: 'uint256' },
      { internalType: 'uint256', name: 'thresholdHealthFactor', type: 'uint256' }
    ],
    name: 'submitAutomationRequest',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'safeHealthFactor', type: 'uint256' },
      { internalType: 'uint256', name: 'thresholdHealthFactor', type: 'uint256' }
    ],
    name: 'updateAutomationRequest',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  }
]
