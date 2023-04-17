import {
    AbiItem
} from 'web3-utils'

export const AVO_MAKER_STAGING_A: AbiItem[] = [{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "uint256",
        "name": "vault",
        "type": "uint256"
    }, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "ilk",
        "type": "bytes32"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "avoAddress",
        "type": "address"
    }],
    "name": "LogTransferToAvo",
    "type": "event"
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
        "name": "vaultId",
        "type": "uint256"
    }],
    "name": "transferToAvo",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "payable",
    "type": "function"
}]