import {
    AbiItem
} from 'web3-utils'

export const ARB_CLAIM_A: AbiItem[] = [{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "claimable",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogArbAirdropClaimed",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "delegatee",
        "type": "address"
    }],
    "name": "LogArbTokensDelegated",
    "type": "event"
}, {
    "inputs": [],
    "name": "ARBITRUM_TOKEN_DISTRIBUTOR",
    "outputs": [{
        "internalType": "contract IArbitrumTokenDistributor",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ARB_TOKEN_CONTRACT",
    "outputs": [{
        "internalType": "contract IArbTokenContract",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "claimAirdrop",
    "outputs": [{
        "internalType": "string",
        "name": "eventName_",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "eventParam_",
        "type": "bytes"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "user",
        "type": "address"
    }],
    "name": "claimableArbTokens",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "delegatee",
        "type": "address"
    }],
    "name": "delegate",
    "outputs": [{
        "internalType": "string",
        "name": "eventName_",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "eventParam_",
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
}]