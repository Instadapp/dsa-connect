import { AbiItem } from 'web3-utils'

export const AAVE_V2_IMPORT_B: AbiItem[] = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_instaAaveV2Merkle",
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
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "convertStable",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "supplyTokens",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "borrowTokens",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "supplyAmts",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "stableBorrowAmts",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "variableBorrowAmts",
          "type": "uint256[]"
        }
      ],
      "name": "LogAaveV2Import",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAccount",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "address[]",
              "name": "supplyTokens",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "borrowTokens",
              "type": "address[]"
            },
            {
              "internalType": "bool",
              "name": "convertStable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "times",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isFlash",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
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
          "internalType": "struct AaveImportHelpers.ImportInputData",
          "name": "inputData",
          "type": "tuple"
        }
      ],
      "name": "importAave",
      "outputs": [
        {
          "internalType": "string",
          "name": "_eventName",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_eventParam",
          "type": "bytes"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address[]",
              "name": "supplyTokens",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "borrowTokens",
              "type": "address[]"
            },
            {
              "internalType": "bool",
              "name": "convertStable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "times",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isFlash",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
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
          "internalType": "struct AaveImportHelpers.ImportInputData",
          "name": "inputData",
          "type": "tuple"
        }
      ],
      "name": "migrateAave",
      "outputs": [
        {
          "internalType": "string",
          "name": "_eventName",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_eventParam",
          "type": "bytes"
        }
      ],
      "stateMutability": "payable",
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