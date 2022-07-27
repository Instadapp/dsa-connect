import { AbiItem } from 'web3-utils'

export const DSA_SPELL_A: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'string[]', name: 'connectors', type: 'string[]' },
      { indexed: false, internalType: 'string', name: 'connectorName', type: 'string' },
      { indexed: false, internalType: 'string', name: 'eventName', type: 'string' },
      { indexed: false, internalType: 'bytes', name: 'eventParam', type: 'bytes' },
    ],
    name: 'LogCastAny',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'targetDSA', type: 'address' },
      { indexed: false, internalType: 'string[]', name: 'connectors', type: 'string[]' },
      { indexed: false, internalType: 'bytes[]', name: 'datas', type: 'bytes[]' },
    ],
    name: 'LogCastOnDSA',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'string[]', name: 'connectors', type: 'string[]' },
      { internalType: 'bytes[]', name: 'datas', type: 'bytes[]' },
    ],
    name: 'castAny',
    outputs: [
      { internalType: 'string', name: 'eventName', type: 'string' },
      { internalType: 'bytes', name: 'eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'targetDSA', type: 'address' },
      { internalType: 'string[]', name: 'connectors', type: 'string[]' },
      { internalType: 'bytes[]', name: 'datas', type: 'bytes[]' },
    ],
    name: 'castOnDSA',
    outputs: [
      { internalType: 'string', name: '_eventName', type: 'string' },
      { internalType: 'bytes', name: '_eventParam', type: 'bytes' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
]
