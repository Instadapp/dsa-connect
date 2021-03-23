import { config } from 'dotenv'
import Web3 from 'web3'
// import hre from 'hardhat'
// import "@nomiclabs/hardhat-ethers"
// import '@nomiclabs/hardhat-web3'
import DSA from '../src'

config()

let web3: Web3
let dsa: DSA
let account: string

const ethAddr = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
const usdcAddr = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
const daiAddr = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

beforeAll(() => {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  dsa = new DSA(web3)
})

test('initalization of DSA', () => {
  expect(dsa).toBeDefined()
})

test('get web3 accounts', async () => {
  const [accountOne, accountTwo] = await web3.eth.getAccounts()

  expect(accountOne).toBeDefined()
  expect(accountTwo).toBeDefined()

  account = accountOne
})

test('create new dsa', async () => {
  let dsaAccounts = await dsa.accounts.getAccounts(account)
  const accountCount = dsaAccounts.length

  console.log(dsaAccounts)
  
  await dsa.build({})

  dsaAccounts = await dsa.accounts.getAccounts(account)
  expect(dsaAccounts.length).toEqual(accountCount + 1)

  const createdDSA = dsaAccounts[dsaAccounts.length - 1]

  await dsa.setAccount(createdDSA.id)
  expect(dsa.instance.id).toEqual(createdDSA.id)
})

test('Cast with flashloan', async () => {
  const usdc_address = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

  const spells = dsa.Spell()

  spells.add({
    connector: 'basic',
    method: 'withdraw',
    args: [usdc_address, 0, account, 0, 0],
  })

  spells.add({
    connector: 'instapool_v2',
    method: 'flashBorrow',
    args: [usdc_address, "10000000", 0],
  })
  
  spells.add({
    connector: "instapool_v2",
    method: "flashPayback",
    args: [usdc_address, "10000000", 0, 0]
  })

  const calldata = await dsa.encodeCastABI(spells)
  expect(calldata).toBeDefined()

  const txHash = await dsa.cast({ spells: spells, from: account })
  expect(txHash).toBeDefined()
})

test('Cast with flashloan with multiple', async () => {
  const spells = dsa.Spell()

  spells.add({
    connector: 'basic',
    method: 'withdraw',
    args: [usdcAddr, 0, account, 0, 0],
  })

  spells.add({
    connector: 'instapool_v2',
    method: 'flashBorrow',
    args: [usdcAddr, "10000000", 0],
  })
  

  spells.add({
    connector: 'compound',
    method: 'withdraw',
    args: [ethAddr, "100000000000", 0, 0],
  })

  spells.add({
    connector: 'instapool_v2',
    method: 'flashBorrow',
    args: [daiAddr, "1000000000000000", 0],
  })

  spells.add({
    connector: 'aave',
    method: 'borrow',
    args: [daiAddr, "1000000000000000", 0, 0],
  })

  spells.add({
    connector: "instapool_v2",
    method: "flashPayback",
    args: [daiAddr, "1000000000000000", 0, 0]
  })

  spells.add({
    connector: "instapool_v2",
    method: "flashPayback",
    args: [usdcAddr, "10000000", 0, 0]
  })

  const calldata = await dsa.encodeCastABI(spells)
  expect(calldata).toBeDefined()

  // const txHash = await dsa.cast({ spells: spells, from: process.env.PUBLIC_ADDRESS }) // Throws error due to connector

})

test('Deposit 10 ETH to DSA', async () => {
  const amt = web3.utils.toWei("10", "ether")
  const data = {
    token: ethAddr,
    amount: amt,
    to: dsa.instance.address,
    from: account
  }
  await dsa.erc20.transfer(data)

  const balance = await web3.eth.getBalance(dsa.instance.address)
  expect(balance).toEqual(amt.toString())
})

test('Swap 1 ETH to USDC', async () => {
  const spells = dsa.Spell()
  const amt = web3.utils.toWei("1", "ether")
  spells.add({
    connector: 'uniswap',
    method: 'sell',
    args: [usdcAddr, ethAddr, amt, 0, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Withdraw USDC from DSA', async () => {
  const spells = dsa.Spell()

  spells.add({
    connector: 'basic',
    method: 'withdraw',
    args: [usdcAddr, dsa.maxValue, account, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Give USDC allowance', async () => {
  var data = {
    token: usdcAddr,
    amount: "1000000000000",
    to: dsa.instance.address
  }
  await dsa.erc20.approve(data)

  const spells = dsa.Spell()

  spells.add({
    connector: 'basic',
    method: 'deposit',
    args: [usdcAddr, dsa.maxValue, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Swap 1 ETH to USDC #2', async () => {
  const spells = dsa.Spell()
  const amt = web3.utils.toWei("1", "ether")
  spells.add({
    connector: 'uniswap',
    method: 'sell',
    args: [usdcAddr, ethAddr, amt, 0, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Deposit ETH to Compound', async () => {
  const spells = dsa.Spell()
  const amt = web3.utils.toWei("1", "ether")
  spells.add({
    connector: 'compound',
    method: 'deposit',
    args: ['ETH-A', amt, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Borrow DAI from Compound', async () => {
  const spells = dsa.Spell()
  const amt = web3.utils.toWei("10", "ether")
  spells.add({
    connector: 'compound',
    method: 'borrow',
    args: ["DAI-A", amt, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Payback DAI to Compound', async () => {
  const spells = dsa.Spell()
  const amt = web3.utils.toWei("10", "ether")
  spells.add({
    connector: 'compound',
    method: 'payback',
    args: ["DAI-A", amt, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Withdraw ETH from Compound', async () => {
  const spells = dsa.Spell()
  const amt = web3.utils.toWei("0.9", "ether")
  spells.add({
    connector: 'compound',
    method: 'withdraw',
    args: ["ETH-A", amt, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Swap 1 ETH to DAI', async () => {
  const spells = dsa.Spell()
  const amt = web3.utils.toWei("1", "ether")
  spells.add({
    connector: 'uniswap',
    method: 'sell',
    args: [daiAddr, ethAddr, amt, 0, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Deposit ETH, Borrow DAI, Payback DAI, Withdraw ETH', async () => {
  const spells = dsa.Spell()
  const amt = web3.utils.toWei("1", "ether")
  const amt2 = web3.utils.toWei("100", "ether")
  spells.add({
    connector: 'compound',
    method: 'deposit',
    args: ["ETH-A", amt, 0, 0],
  })
  spells.add({
    connector: 'compound',
    method: 'borrow',
    args: ["DAI-A", amt2, 0, 0],
  })
  spells.add({
    connector: 'compound',
    method: 'payback',
    args: ["DAI-A", dsa.maxValue, 0, 0],
  })
  spells.add({
    connector: 'compound',
    method: 'withdraw',
    args: ["ETH-A", dsa.maxValue, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Object-oriented Spells', async () => {
  const spells = dsa.Spell()

  spells.add({
    connector: 'basic',
    method: 'withdraw',
    args: [daiAddr, dsa.maxValue, account, 0, 0],
  })

  const calldata = await dsa.encodeCastABI(spells)
  expect(calldata).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()
})

test('Swap 1 ETH to USDC #3', async () => {
  const spells = dsa.Spell()
  const amt = web3.utils.toWei("1", "ether")
  spells.add({
    connector: 'uniswap',
    method: 'sell',
    args: [usdcAddr, ethAddr, amt, 0, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Cast with fluid api', async () => {
  const txHash = await dsa
    .Spell()
    .add({
      connector: 'basic',
      method: 'withdraw',
      args: [usdcAddr, dsa.maxVal(), account, 0, 0],
    })
    .cast({ from: account })

  expect(txHash).toBeDefined()
})

test('get transaction count', async () => {
  const nonce = await dsa.transaction.getTransactionCount(account as string)

  expect(nonce).toBeDefined()
})

test('Swap 1 ETH to USDC #4', async () => {
  const spells = dsa.Spell()
  const amt = web3.utils.toWei("1", "ether")
  spells.add({
    connector: 'uniswap',
    method: 'sell',
    args: [usdcAddr, ethAddr, amt, 0, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})

test('Transfer -1 USDC from DSA', async () => {
  var data = {
    token: usdcAddr,
    amount: dsa.maxValue,
    to: account,
  }
  await dsa.erc20.transfer(data)
})

test('Transfer -1 USDC to DSA', async () => {
  var data = {
    token: usdcAddr,
    amount: dsa.maxValue,
    to: dsa.instance.address,
  }
  await dsa.erc20.transfer(data)
})

test('Give -1 DAI allowance', async () => {
  var data = {
    token: daiAddr,
    amount: dsa.maxValue,
    to: dsa.instance.address
  }
  await dsa.erc20.approve(data)
})
