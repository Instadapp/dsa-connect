import { AbiItem } from 'web3-utils'

export const CURVE_USD_A: AbiItem[] = [
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'uint256', name: 'version', type: 'uint256' },
      { internalType: 'uint256', name: 'collateral', type: 'uint256' },
      { internalType: 'uint256', name: 'debt', type: 'uint256' },
      { internalType: 'uint256', name: 'bandNumber', type: 'uint256' }
    ],
    name: 'getBandRangeAndLiquidationRange',
    outputs: [
      { internalType: 'int256[2]', name: 'range', type: 'int256[2]' },
      { internalType: 'uint256[2]', name: 'liquidation', type: 'uint256[2]' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'uint256', name: 'index', type: 'uint256' }
    ],
    name: 'getMarketDetails',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'totalDebt', type: 'uint256' },
          { internalType: 'uint256', name: 'basePrice', type: 'uint256' },
          { internalType: 'uint256', name: 'oraclePrice', type: 'uint256' },
          { internalType: 'uint256', name: 'A', type: 'uint256' },
          { internalType: 'uint256', name: 'loanLen', type: 'uint256' },
          { internalType: 'uint256', name: 'fractionPerSecond', type: 'uint256' },
          { internalType: 'int256', name: 'sigma', type: 'int256' },
          { internalType: 'uint256', name: 'targetDebtFraction', type: 'uint256' },
          { internalType: 'address', name: 'controller', type: 'address' },
          { internalType: 'address', name: 'AMM', type: 'address' },
          { internalType: 'address', name: 'monetary', type: 'address' },
          { internalType: 'uint256', name: 'borrowable', type: 'uint256' },
          {
            components: [
              { internalType: 'address', name: 'coin0', type: 'address' },
              { internalType: 'address', name: 'coin1', type: 'address' },
              { internalType: 'uint8', name: 'coin0Decimals', type: 'uint8' },
              { internalType: 'uint8', name: 'coin1Decimals', type: 'uint8' },
              { internalType: 'uint256', name: 'coin0Amount', type: 'uint256' },
              { internalType: 'uint256', name: 'coin1Amount', type: 'uint256' }
            ],
            internalType: 'struct Coins',
            name: 'coins',
            type: 'tuple'
          },
          { internalType: 'int256', name: 'minBand', type: 'int256' },
          { internalType: 'int256', name: 'maxBand', type: 'int256' }
        ],
        internalType: 'struct MarketConfig',
        name: 'marketConfig',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'markets', type: 'address[]' },
      { internalType: 'uint256[]', name: 'indexes', type: 'uint256[]' }
    ],
    name: 'getMarketDetailsAll',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'totalDebt', type: 'uint256' },
          { internalType: 'uint256', name: 'basePrice', type: 'uint256' },
          { internalType: 'uint256', name: 'oraclePrice', type: 'uint256' },
          { internalType: 'uint256', name: 'A', type: 'uint256' },
          { internalType: 'uint256', name: 'loanLen', type: 'uint256' },
          { internalType: 'uint256', name: 'fractionPerSecond', type: 'uint256' },
          { internalType: 'int256', name: 'sigma', type: 'int256' },
          { internalType: 'uint256', name: 'targetDebtFraction', type: 'uint256' },
          { internalType: 'address', name: 'controller', type: 'address' },
          { internalType: 'address', name: 'AMM', type: 'address' },
          { internalType: 'address', name: 'monetary', type: 'address' },
          { internalType: 'uint256', name: 'borrowable', type: 'uint256' },
          {
            components: [
              { internalType: 'address', name: 'coin0', type: 'address' },
              { internalType: 'address', name: 'coin1', type: 'address' },
              { internalType: 'uint8', name: 'coin0Decimals', type: 'uint8' },
              { internalType: 'uint8', name: 'coin1Decimals', type: 'uint8' },
              { internalType: 'uint256', name: 'coin0Amount', type: 'uint256' },
              { internalType: 'uint256', name: 'coin1Amount', type: 'uint256' }
            ],
            internalType: 'struct Coins',
            name: 'coins',
            type: 'tuple'
          },
          { internalType: 'int256', name: 'minBand', type: 'int256' },
          { internalType: 'int256', name: 'maxBand', type: 'int256' }
        ],
        internalType: 'struct MarketConfig[]',
        name: 'marketConfig',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'uint256', name: 'version', type: 'uint256' },
      { internalType: 'uint256', name: 'collateralAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'bandNumber', type: 'uint256' }
    ],
    name: 'getMaxDebt',
    outputs: [{ internalType: 'uint256', name: 'debt', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'uint256', name: 'version', type: 'uint256' },
      { internalType: 'uint256', name: 'debt', type: 'uint256' },
      { internalType: 'uint256', name: 'bandNumber', type: 'uint256' }
    ],
    name: 'getMinCollateral',
    outputs: [{ internalType: 'uint256', name: 'collateral', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'address', name: 'market', type: 'address' },
      { internalType: 'uint256', name: 'index', type: 'uint256' }
    ],
    name: 'getPosition',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'supply', type: 'uint256' },
          { internalType: 'uint256', name: 'borrow', type: 'uint256' },
          { internalType: 'uint256', name: 'N', type: 'uint256' },
          { internalType: 'bool', name: 'existLoan', type: 'bool' },
          { internalType: 'uint256', name: 'health', type: 'uint256' },
          {
            components: [
              { internalType: 'uint256', name: 'upper', type: 'uint256' },
              { internalType: 'uint256', name: 'lower', type: 'uint256' }
            ],
            internalType: 'struct UserPrices',
            name: 'prices',
            type: 'tuple'
          },
          { internalType: 'uint256', name: 'loanId', type: 'uint256' },
          { internalType: 'int256[2]', name: 'userTickNumber', type: 'int256[2]' }
        ],
        internalType: 'struct PositionData',
        name: 'positionData',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'uint256', name: 'totalDebt', type: 'uint256' },
          { internalType: 'uint256', name: 'basePrice', type: 'uint256' },
          { internalType: 'uint256', name: 'oraclePrice', type: 'uint256' },
          { internalType: 'uint256', name: 'A', type: 'uint256' },
          { internalType: 'uint256', name: 'loanLen', type: 'uint256' },
          { internalType: 'uint256', name: 'fractionPerSecond', type: 'uint256' },
          { internalType: 'int256', name: 'sigma', type: 'int256' },
          { internalType: 'uint256', name: 'targetDebtFraction', type: 'uint256' },
          { internalType: 'address', name: 'controller', type: 'address' },
          { internalType: 'address', name: 'AMM', type: 'address' },
          { internalType: 'address', name: 'monetary', type: 'address' },
          { internalType: 'uint256', name: 'borrowable', type: 'uint256' },
          {
            components: [
              { internalType: 'address', name: 'coin0', type: 'address' },
              { internalType: 'address', name: 'coin1', type: 'address' },
              { internalType: 'uint8', name: 'coin0Decimals', type: 'uint8' },
              { internalType: 'uint8', name: 'coin1Decimals', type: 'uint8' },
              { internalType: 'uint256', name: 'coin0Amount', type: 'uint256' },
              { internalType: 'uint256', name: 'coin1Amount', type: 'uint256' }
            ],
            internalType: 'struct Coins',
            name: 'coins',
            type: 'tuple'
          },
          { internalType: 'int256', name: 'minBand', type: 'int256' },
          { internalType: 'int256', name: 'maxBand', type: 'int256' }
        ],
        internalType: 'struct MarketConfig',
        name: 'marketConfig',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'address[]', name: 'markets', type: 'address[]' },
      { internalType: 'uint256[]', name: 'indexes', type: 'uint256[]' }
    ],
    name: 'getPositionAll',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'supply', type: 'uint256' },
          { internalType: 'uint256', name: 'borrow', type: 'uint256' },
          { internalType: 'uint256', name: 'N', type: 'uint256' },
          { internalType: 'bool', name: 'existLoan', type: 'bool' },
          { internalType: 'uint256', name: 'health', type: 'uint256' },
          {
            components: [
              { internalType: 'uint256', name: 'upper', type: 'uint256' },
              { internalType: 'uint256', name: 'lower', type: 'uint256' }
            ],
            internalType: 'struct UserPrices',
            name: 'prices',
            type: 'tuple'
          },
          { internalType: 'uint256', name: 'loanId', type: 'uint256' },
          { internalType: 'int256[2]', name: 'userTickNumber', type: 'int256[2]' }
        ],
        internalType: 'struct PositionData[]',
        name: 'positionData',
        type: 'tuple[]'
      },
      {
        components: [
          { internalType: 'uint256', name: 'totalDebt', type: 'uint256' },
          { internalType: 'uint256', name: 'basePrice', type: 'uint256' },
          { internalType: 'uint256', name: 'oraclePrice', type: 'uint256' },
          { internalType: 'uint256', name: 'A', type: 'uint256' },
          { internalType: 'uint256', name: 'loanLen', type: 'uint256' },
          { internalType: 'uint256', name: 'fractionPerSecond', type: 'uint256' },
          { internalType: 'int256', name: 'sigma', type: 'int256' },
          { internalType: 'uint256', name: 'targetDebtFraction', type: 'uint256' },
          { internalType: 'address', name: 'controller', type: 'address' },
          { internalType: 'address', name: 'AMM', type: 'address' },
          { internalType: 'address', name: 'monetary', type: 'address' },
          { internalType: 'uint256', name: 'borrowable', type: 'uint256' },
          {
            components: [
              { internalType: 'address', name: 'coin0', type: 'address' },
              { internalType: 'address', name: 'coin1', type: 'address' },
              { internalType: 'uint8', name: 'coin0Decimals', type: 'uint8' },
              { internalType: 'uint8', name: 'coin1Decimals', type: 'uint8' },
              { internalType: 'uint256', name: 'coin0Amount', type: 'uint256' },
              { internalType: 'uint256', name: 'coin1Amount', type: 'uint256' }
            ],
            internalType: 'struct Coins',
            name: 'coins',
            type: 'tuple'
          },
          { internalType: 'int256', name: 'minBand', type: 'int256' },
          { internalType: 'int256', name: 'maxBand', type: 'int256' }
        ],
        internalType: 'struct MarketConfig[]',
        name: 'marketConfig',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  }
]
