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
    args: [ethAddr, amt, 0, 0],
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
    args: [daiAddr, amt, 0, 0],
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
    args: [daiAddr, amt, 0, 0],
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
    args: [ethAddr, amt, 0, 0],
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
    args: [ethAddr, amt, 0, 0],
  })
  spells.add({
    connector: 'compound',
    method: 'borrow',
    args: [daiAddr, amt2, 0, 0],
  })
  spells.add({
    connector: 'compound',
    method: 'payback',
    args: [daiAddr, dsa.maxValue, 0, 0],
  })
  spells.add({
    connector: 'compound',
    method: 'withdraw',
    args: [ethAddr, dsa.maxValue, 0, 0],
  })

  const gas = await spells.estimateCastGas({ from: account })
  expect(gas).toBeDefined()

  const txHash = await spells.cast({ from: account })
  expect(txHash).toBeDefined()
})
