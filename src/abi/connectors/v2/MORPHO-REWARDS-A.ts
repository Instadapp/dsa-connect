import {
    AbiItem
} from 'web3-utils'

export const MORPHO_REWARDS_A: AbiItem[] = [{
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address[]",
        "name": "poolTokenAddresses",
        "type": "address[]"
    }, {
        "indexed": false,
        "internalType": "bool",
        "name": "tradeForMorphoToken",
        "type": "bool"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountOfRewards",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogClaimedAave",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address[]",
        "name": "poolTokenAddresses",
        "type": "address[]"
    }, {
        "indexed": false,
        "internalType": "bool",
        "name": "tradeForMorphoToken",
        "type": "bool"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountOfRewards",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogClaimedCompound",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "claimable",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "setId",
        "type": "uint256"
    }],
    "name": "LogClaimedMorpho",
    "type": "event"
}, {
    "inputs": [],
    "name": "MORPHO_AAVE",
    "outputs": [{
        "internalType": "contract IMorphoCore",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "MORPHO_COMPOUND",
    "outputs": [{
        "internalType": "contract IMorphoCore",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "MORPHO_REWARDS",
    "outputs": [{
        "internalType": "contract IMorphoRewardsDistributor",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address[]",
        "name": "_poolTokenAddresses",
        "type": "address[]"
    }, {
        "internalType": "bool",
        "name": "_tradeForMorphoToken",
        "type": "bool"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "claimAave",
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
    "inputs": [{
        "internalType": "address[]",
        "name": "_poolTokenAddresses",
        "type": "address[]"
    }, {
        "internalType": "bool",
        "name": "_tradeForMorphoToken",
        "type": "bool"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "claimCompound",
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
    "inputs": [{
        "internalType": "address",
        "name": "_account",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_claimable",
        "type": "uint256"
    }, {
        "internalType": "bytes32[]",
        "name": "_proof",
        "type": "bytes32[]"
    }, {
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
    }],
    "name": "claimMorpho",
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