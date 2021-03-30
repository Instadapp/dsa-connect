import { AbiItem } from 'web3-utils';

export const fee: AbiItem[] = [
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'fee', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setIdAmtMinusFee', type: 'uint256' },
      { internalType: 'uint256', name: 'setIdFee', type: 'uint256' },
    ],
    name: 'calculateAmtMinusFee',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'fee', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
      { internalType: 'uint256', name: 'setIdFee', type: 'uint256' },
    ],
    name: 'calculateFee',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    name: 'connectorID',
    inputs: [],
    type: 'function',
    stateMutability: 'pure',
    outputs: [
      { internalType: 'uint256', name: '_type', type: 'uint256' },
      { internalType: 'uint256', name: '_id', type: 'uint256' },
    ],
  },
  {
    name: 'name',
    inputs: [],
    type: 'function',
    stateMutability: 'view',
    outputs: [
      { internalType: 'string', name: '', type: 'string' },
    ],
  },
];