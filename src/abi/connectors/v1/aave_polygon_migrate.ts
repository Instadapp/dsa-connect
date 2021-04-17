import { AbiItem } from 'web3-utils';

export const aave_polygon_migrate: AbiItem[] = [
    {
    anonymous: false,
    inputs: [
    {
    indexed: true,
    internalType: "address",
    name: "user",
    type: "address"
    },
    {
    indexed: true,
    internalType: "address",
    name: "targetDsa",
    type: "address"
    },
    {
    indexed: false,
    internalType: "address[]",
    name: "supplyTokens",
    type: "address[]"
    },
    {
    indexed: false,
    internalType: "address[]",
    name: "borrowTokens",
    type: "address[]"
    }
    ],
    name: "LogAaveV2Migrate",
    type: "event"
    },
    {
    inputs: [ ],
    name: "connectorID",
    outputs: [
    {
    internalType: "uint256",
    name: "_type",
    type: "uint256"
    },
    {
    internalType: "uint256",
    name: "_id",
    type: "uint256"
    }
    ],
    stateMutability: "pure",
    type: "function"
    },
    {
    inputs: [
    {
    internalType: "address",
    name: "targetDsa",
    type: "address"
    },
    {
    internalType: "address[]",
    name: "supplyTokens",
    type: "address[]"
    },
    {
    internalType: "address[]",
    name: "borrowTokens",
    type: "address[]"
    },
    {
    internalType: "uint256[]",
    name: "variableBorrowAmts",
    type: "uint256[]"
    },
    {
    internalType: "uint256[]",
    name: "stableBorrowAmts",
    type: "uint256[]"
    },
    {
    internalType: "uint256[]",
    name: "supplyAmts",
    type: "uint256[]"
    },
    {
    internalType: "uint256",
    name: "ethAmt",
    type: "uint256"
    }
    ],
    name: "migrate",
    outputs: [ ],
    stateMutability: "payable",
    type: "function"
    },
    {
    inputs: [ ],
    name: "name",
    outputs: [
    {
    internalType: "string",
    name: "",
    type: "string"
    }
    ],
    stateMutability: "view",
    type: "function"
    }
    ]