import { AbiItem } from 'web3-utils'

export const MERKLE_CLAIM_LRT_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'merkleContract', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'bytes32', name: 'expectedMerkleRoot', type: 'bytes32' },
      { indexed: false, internalType: 'uint256', name: 'setId', type: 'uint256' }
    ],
    name: 'LogClaimed',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: 'merkleContract', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'bytes32', name: 'expectedMerkleRoot', type: 'bytes32' },
      { internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' }
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
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  }
]
