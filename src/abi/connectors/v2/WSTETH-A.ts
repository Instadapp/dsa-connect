import {
    AbiItem
} from 'web3-utils'

export const WSTETH_A: AbiItem[] = [{
    "inputs": [{
        "internalType": "uint256",
        "name": "stethAmt",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "deposit",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "wstethAmt",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "withdraw",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}]