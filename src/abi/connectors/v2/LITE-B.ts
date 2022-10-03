import { AbiItem } from 'web3-utils'

export const LITE_B: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'flashTkn', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'flashAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'route', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'stEthAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'wethAmt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'iEthAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256[]', name: 'getIds', type: 'uint256[]' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'LogImport',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'address', name: 'flashTkn_', type: 'address' },
      { internalType: 'uint256', name: 'flashAmt_', type: 'uint256' },
      { internalType: 'uint256', name: 'route_', type: 'uint256' },
      { internalType: 'uint256', name: 'stEthAmt_', type: 'uint256' },
      { internalType: 'uint256', name: 'wethAmt_', type: 'uint256' },
      { internalType: 'uint256[]', name: 'getIds', type: 'uint256[]' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'importPosition',
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
