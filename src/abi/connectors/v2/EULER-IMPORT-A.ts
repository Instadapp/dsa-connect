import {
    AbiItem
} from 'web3-utils'

export const EULER_IMPORT_A: AbiItem[] = [{
    "inputs": [{
        "internalType": "address",
        "name": "primary",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "subAccountId",
        "type": "uint256"
    }],
    "name": "getSubAccountAddress",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "pure",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "userAccount",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "sourceId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "targetId",
        "type": "uint256"
    }, {
        "components": [{
            "internalType": "address[]",
            "name": "_supplyTokens",
            "type": "address[]"
        }, {
            "internalType": "address[]",
            "name": "_borrowTokens",
            "type": "address[]"
        }, {
            "internalType": "bool[]",
            "name": "_enterMarket",
            "type": "bool[]"
        }],
        "internalType": "struct EulerHelpers.ImportInputData",
        "name": "inputData",
        "type": "tuple"
    }],
    "name": "importEuler",
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
}]