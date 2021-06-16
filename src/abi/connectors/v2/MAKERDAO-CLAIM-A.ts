import { AbiItem } from 'web3-utils'

export const MAKERDAO_CLAIM_A: AbiItem[] = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_instaMakerMerkle",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "vaultId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "LogClaim",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "vaultId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "rewardAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "networthAmount",
          "type": "uint256"
        },
        {
          "internalType": "bytes32[]",
          "name": "merkleProof",
          "type": "bytes32[]"
        }
      ],
      "name": "claim",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "_eventName",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "_eventParam",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "instaList",
      "outputs": [
        {
          "internalType": "contract InstaListInterface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "instaMakerMerkle",
      "outputs": [
        {
          "internalType": "contract InstaMakerMerkleInterface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "managerContract",
      "outputs": [
        {
          "internalType": "contract ManagerLike",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]