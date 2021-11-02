import { AbiItem } from 'web3-utils'

export const BENQI_A: AbiItem[] = [
    {
       "type": "event",
       "name": "LogBorrow",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address",
             "indexed": true
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "tokenAmt",
             "internalType": "uint256",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "getId",
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
       "name": "LogDeposit",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address",
             "indexed": true
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "tokenAmt",
             "internalType": "uint256",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "getId",
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
       "name": "LogDepositQiToken",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address",
             "indexed": true
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "tokenAmt",
             "internalType": "uint256",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "qiTokenAmt",
             "internalType": "uint256",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "getId",
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
       "name": "LogLiquidate",
       "inputs": [
          {
             "type": "address",
             "name": "borrower",
             "internalType": "address",
             "indexed": true
          },
          {
             "type": "address",
             "name": "tokenToPay",
             "internalType": "address",
             "indexed": true
          },
          {
             "type": "address",
             "name": "tokenInReturn",
             "internalType": "address",
             "indexed": true
          },
          {
             "type": "uint256",
             "name": "tokenAmt",
             "internalType": "uint256",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "getId",
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
       "name": "LogPayback",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address",
             "indexed": true
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "tokenAmt",
             "internalType": "uint256",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "getId",
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
       "name": "LogWithdraw",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address",
             "indexed": true
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "tokenAmt",
             "internalType": "uint256",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "getId",
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
       "name": "LogWithdrawQiToken",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address",
             "indexed": true
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "tokenAmt",
             "internalType": "uint256",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "qiTokenAmt",
             "internalType": "uint256",
             "indexed": false
          },
          {
             "type": "uint256",
             "name": "getId",
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
       "name": "borrow",
       "inputs": [
          {
             "type": "string",
             "name": "tokenId",
             "internalType": "string"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "borrowRaw",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address"
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "deposit",
       "inputs": [
          {
             "type": "string",
             "name": "tokenId",
             "internalType": "string"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "depositQiToken",
       "inputs": [
          {
             "type": "string",
             "name": "tokenId",
             "internalType": "string"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "depositQiTokenRaw",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address"
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "depositRaw",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address"
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "liquidate",
       "inputs": [
          {
             "type": "address",
             "name": "borrower",
             "internalType": "address"
          },
          {
             "type": "string",
             "name": "tokenIdToPay",
             "internalType": "string"
          },
          {
             "type": "string",
             "name": "tokenIdInReturn",
             "internalType": "string"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "liquidateRaw",
       "inputs": [
          {
             "type": "address",
             "name": "borrower",
             "internalType": "address"
          },
          {
             "type": "address",
             "name": "tokenToPay",
             "internalType": "address"
          },
          {
             "type": "address",
             "name": "qiTokenPay",
             "internalType": "address"
          },
          {
             "type": "address",
             "name": "tokenInReturn",
             "internalType": "address"
          },
          {
             "type": "address",
             "name": "qiTokenColl",
             "internalType": "address"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "payback",
       "inputs": [
          {
             "type": "string",
             "name": "tokenId",
             "internalType": "string"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "paybackRaw",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address"
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "withdraw",
       "inputs": [
          {
             "type": "string",
             "name": "tokenId",
             "internalType": "string"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "withdrawQiToken",
       "inputs": [
          {
             "type": "string",
             "name": "tokenId",
             "internalType": "string"
          },
          {
             "type": "uint256",
             "name": "qiTokenAmt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "withdrawQiTokenRaw",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address"
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address"
          },
          {
             "type": "uint256",
             "name": "qiTokenAmt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
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
       "name": "withdrawRaw",
       "inputs": [
          {
             "type": "address",
             "name": "token",
             "internalType": "address"
          },
          {
             "type": "address",
             "name": "qiToken",
             "internalType": "address"
          },
          {
             "type": "uint256",
             "name": "amt",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "getId",
             "internalType": "uint256"
          },
          {
             "type": "uint256",
             "name": "setId",
             "internalType": "uint256"
          }
       ]
    }
 ]