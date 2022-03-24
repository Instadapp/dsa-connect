import { AbiItem } from 'web3-utils'

export const COMPOUND_IMPORT_D: AbiItem[] = [
  {
    inputs: [
      { internalType: 'address', name: '_userAccount', type: 'address' },
      { internalType: 'string[]', name: '_supplyIds', type: 'string[]' },
      { internalType: 'string[]', name: '_borrowIds', type: 'string[]' },
      { internalType: 'uint256[]', name: '_flashLoanFees', type: 'uint256[]' },
    ],
    name: 'importCompound',
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
