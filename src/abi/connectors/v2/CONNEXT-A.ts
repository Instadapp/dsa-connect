import {
    AbiItem
} from 'web3-utils'

export const CONNEXT_A: AbiItem[] = [{
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
        "components": [{
            "internalType": "uint32",
            "name": "destination",
            "type": "uint32"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "asset",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "delegate",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "slippage",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "relayerFee",
            "type": "uint256"
        }, {
            "internalType": "bytes",
            "name": "callData",
            "type": "bytes"
        }],
        "internalType": "struct Helpers.XCallParams",
        "name": "params",
        "type": "tuple"
    }, {
        "internalType": "uint256",
        "name": "getId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "xcall",
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