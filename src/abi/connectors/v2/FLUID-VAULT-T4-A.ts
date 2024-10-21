import { AbiItem } from 'web3-utils'

export const FLUID_VAULT_T4_A: AbiItem[] = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"vaultAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"nftId","type":"uint256"},{"indexed":false,"internalType":"int256","name":"perfectColShares_","type":"int256"},{"indexed":false,"internalType":"int256","name":"token0DepositOrWithdraw","type":"int256"},{"indexed":false,"internalType":"int256","name":"token1DepositOrWithdraw","type":"int256"},{"indexed":false,"internalType":"int256","name":"perfectDebtShares_","type":"int256"},{"indexed":false,"internalType":"int256","name":"token0BorrowOrPayback","type":"int256"},{"indexed":false,"internalType":"int256","name":"token1BorrowOrPayback","type":"int256"},{"indexed":false,"internalType":"uint256","name":"getNftId_","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"setIds","type":"uint256[]"}],"name":"LogOperatePerfectWithIds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"vaultAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"nftId","type":"uint256"},{"indexed":false,"internalType":"int256","name":"newColToken0","type":"int256"},{"indexed":false,"internalType":"int256","name":"newColToken1","type":"int256"},{"indexed":false,"internalType":"int256","name":"colSharesMinMax","type":"int256"},{"indexed":false,"internalType":"int256","name":"newDebtToken0","type":"int256"},{"indexed":false,"internalType":"int256","name":"newDebtToken1","type":"int256"},{"indexed":false,"internalType":"int256","name":"debtSharesMinMax","type":"int256"},{"indexed":false,"internalType":"uint256[]","name":"getIds","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"setIds","type":"uint256[]"}],"name":"LogOperateWithIds","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"vaultAddress","type":"address"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"int256","name":"perfectColShares","type":"int256"},{"internalType":"int256","name":"colToken0MinMax","type":"int256"},{"internalType":"int256","name":"colToken1MinMax","type":"int256"},{"internalType":"int256","name":"perfectDebtShares","type":"int256"},{"internalType":"int256","name":"debtToken0MinMax","type":"int256"},{"internalType":"int256","name":"debtToken1MinMax","type":"int256"},{"internalType":"uint256","name":"getNftId","type":"uint256"},{"internalType":"uint256[]","name":"setIds","type":"uint256[]"}],"internalType":"struct FluidVaultT4Connector.ColDebtHelper","name":"helper_","type":"tuple"}],"name":"operatePerfectWithIds","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"vaultAddress","type":"address"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"int256","name":"newColToken0","type":"int256"},{"internalType":"int256","name":"newColToken1","type":"int256"},{"internalType":"int256","name":"colSharesMinMax","type":"int256"},{"internalType":"int256","name":"newDebtToken0","type":"int256"},{"internalType":"int256","name":"newDebtToken1","type":"int256"},{"internalType":"int256","name":"debtSharesMinMax","type":"int256"},{"internalType":"uint256[]","name":"getIds","type":"uint256[]"},{"internalType":"uint256[]","name":"setIds","type":"uint256[]"}],"internalType":"struct FluidVaultT4Connector.OperateWIthIdsHelper","name":"helper_","type":"tuple"}],"name":"operateWithIds","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"}]