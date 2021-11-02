import { AbiItem } from 'web3-utils'

export const QI_A: AbiItem[] = [
    {
       "type": "event",
       "name": "LogClaimedReward",
       "inputs": [
          {
             "type": "uint256",
             "name": "rewardAmt",
             "internalType": "uint256",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "setId",
             "internalType": "uint256",
             "indexed": false
          }
       ],
       "anonymous": false
    },
    {
       "type": "event",
       "name": "LogDelegate",
       "inputs": [
          {
             "type": "address",
             "name": "delegatee",
             "internalType": "address",
             "indexed": false
          }
       ],
       "anonymous": false
    },
    {
       "type": "function",
       "stateMutability": "payable",
       "outputs": [
          {
             "type": "string",
             "name": "_eventName",
             "internalType": "string"
          },
          {
             "type": "bytes",
             "name": "_eventParam",
             "internalType": "bytes"
          }
       ],
       "name": "ClaimReward",
       "inputs": [
          {
             "type": "uint256",
             "name": "setId",
             "internalType": "uint256"
          }
       ]
    },
    {
       "type": "function",
       "stateMutability": "payable",
       "outputs": [
          {
             "type": "string",
             "name": "_eventName",
             "internalType": "string"
          },
          {
             "type": "bytes",
             "name": "_eventParam",
             "internalType": "bytes"
          }
       ],
       "name": "ClaimRewardThree",
       "inputs": [
          {
             "type": "string[]",
             "name": "supplyTokenIds",
             "internalType": "string[]"
          },
          {
             "type": "string[]",
             "name": "borrowTokenIds",
             "internalType": "string[]"
          },
          {
             "type": "uint256",
             "name": "setId",
             "internalType": "uint256"
          }
       ]
    },
    {
       "type": "function",
       "stateMutability": "payable",
       "outputs": [
          {
             "type": "string",
             "name": "_eventName",
             "internalType": "string"
          },
          {
             "type": "bytes",
             "name": "_eventParam",
             "internalType": "bytes"
          }
       ],
       "name": "ClaimRewardTwo",
       "inputs": [
          {
             "type": "string[]",
             "name": "tokenIds",
             "internalType": "string[]"
          },
          {
             "type": "uint256",
             "name": "setId",
             "internalType": "uint256"
          }
       ]
    },
    {
       "type": "function",
       "stateMutability": "payable",
       "outputs": [
          {
             "type": "string",
             "name": "_eventName",
             "internalType": "string"
          },
          {
             "type": "bytes",
             "name": "_eventParam",
             "internalType": "bytes"
          }
       ],
       "name": "delegate",
       "inputs": [
          {
             "type": "address",
             "name": "delegatee",
             "internalType": "address"
          }
       ]
    },
    {
       "type": "function",
       "stateMutability": "view",
       "outputs": [
          {
             "type": "string",
             "name": "",
             "internalType": "string"
          }
       ],
       "name": "name",
       "inputs": []
    }
 ]