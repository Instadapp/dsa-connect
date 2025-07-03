import { AbiItem } from 'web3-utils'

export const SPK_CLAIM_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'claimType', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'epoch', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'account', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'cumulativeAmount', type: 'uint256' },
      { indexed: false, internalType: 'bytes32', name: 'expectedMerkleRoot', type: 'bytes32' },
      { indexed: false, internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' }
    ],
    name: 'LogClaim',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'claimType', type: 'uint256' },
      { internalType: 'uint256', name: 'epoch', type: 'uint256' },
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'cumulativeAmount', type: 'uint256' },
      { internalType: 'bytes32', name: 'expectedMerkleRoot', type: 'bytes32' },
      { internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' }
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
