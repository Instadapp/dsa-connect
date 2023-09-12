import { AbiItem } from 'web3-utils'

export const CRV_USD_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'collateral', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'amt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogAddCollateral',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'collateral', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'amt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { indexed: true, internalType: 'uint256', name: 'debt', type: 'uint256' }
    ],
    name: 'LogBorrowMore',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'collateral', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'debt', type: 'uint256' },
      { indexed: true, internalType: 'uint256', name: 'numBands', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogCreateLoan',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'collateral', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'min_x', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogLiquidate',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'collateral', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'amt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogRemoveCollateral',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'collateral', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'amt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'getId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogRepay',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: 'collateral', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'addCollateral',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'collateral', type: 'address' },
      { internalType: 'uint256', name: 'colAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'debtAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'addCollateralAndBorrowMore',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'collateral', type: 'address' },
      { internalType: 'uint256', name: 'debtAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'borrowMore',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'collateral', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'debtAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'numBands', type: 'uint256' },
      { internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'createLoan',
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
  },
  {
    inputs: [
      { internalType: 'address', name: 'collateral', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'removeCollateral',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'collateral', type: 'address' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'repay',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'collateral', type: 'address' },
      { internalType: 'uint256', name: 'minReceiveAmt', type: 'uint256' },
      { internalType: 'uint256', name: 'controllerVersion', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'selfLiquidate',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' }
    ],
    stateMutability: 'payable',
    type: 'function'
  }
]
