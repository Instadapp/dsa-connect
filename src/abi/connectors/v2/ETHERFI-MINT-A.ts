import { AbiItem } from 'web3-utils'

export const ETHERFI_MINT_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'depositAmount_', type: 'uint256' },
      { indexed: true, internalType: 'uint256', name: 'eEthAmount_', type: 'uint256' }
    ],
    name: 'LogMintEtherfi',
    type: 'event'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'depositAmount_', type: 'uint256' }],
    name: 'mintEethFromStEth',
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
