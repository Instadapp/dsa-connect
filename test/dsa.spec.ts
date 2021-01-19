import { config } from 'dotenv'
import Web3 from 'web3'
import DSA from '../src'

config()

let web3: Web3
let dsa: DSA

// TODO: Use beforeEach if nessecary or define individually
beforeAll(() => {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  dsa = new DSA({ web3 })
})

test('initalization of DSA', () => {
  expect(dsa).toBeDefined()
})

test('get web3 accounts', async () => {
  const [accountOne, accountTwo] = await web3.eth.getAccounts()

  expect(accountOne).toBeDefined()
  expect(accountTwo).toBeDefined()
})

test('Cast', async () => {
  const usdc_address = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

  const myAddr = process.env.PUBLIC_ADDRESS

  const spells = dsa.Spell()

  spells.add({
    connector: 'basic',
    method: 'withdraw',
    args: [usdc_address, dsa.maxValue, myAddr, 0, 0],
  })

  await dsa.setAccount(Number(process.env.DSA_ID))
  const calldata = await dsa.encodeCastABI(spells)
  expect(calldata).toBeDefined()

  const txHash = await dsa.cast({ spells: spells, from: process.env.PUBLIC_ADDRESS })

})

test('Object-oriented Spells', async () => {
  const usdc_address = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

  const myAddr = process.env.PUBLIC_ADDRESS

  const spells = dsa.Spell()

  spells.add({
    connector: 'basic',
    method: 'withdraw',
    args: [usdc_address, dsa.maxValue, myAddr, 0, 0],
  })

  await dsa.setAccount(Number(process.env.DSA_ID))
  const calldata = await dsa.encodeCastABI(spells)
  expect(calldata).toBeDefined()

  const txHash = await spells.cast({ from: process.env.PUBLIC_ADDRESS })
  expect(txHash).toBeDefined()

  const gas = await spells.estimateCastGas({ from: process.env.PUBLIC_ADDRESS })
  expect(gas).toBeDefined()
})

test('Cast with fluid api', async () => {
  const usdc_address = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

  const myAddr = process.env.PUBLIC_ADDRESS

  await dsa.setAccount(Number(process.env.DSA_ID))

  const txHash = await dsa
    .Spell()
    .add({
      connector: 'basic',
      method: 'withdraw',
      args: [usdc_address, dsa.maxValue, myAddr, 0, 0],
    })
    .cast({ from: process.env.PUBLIC_ADDRESS })

  expect(txHash).toBeDefined()
})

test('get transaction count', async () => {
  const nonce = await dsa.transaction.getTransactionCount(process.env.PUBLIC_ADDRESS as string)

  expect(nonce).toBeDefined()
})


// test('test', async () => {
//   var usdc_address = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
//   await dsa.setAccount(5); 

//   var spells = dsa.Spell();

//   spells.add({
//       connector: "compound",
//       method: "withdraw",
//       args: [usdc_address, dsa.maxValue, 0, 0] // withdraw all USDC
//   });

//   console.log(await dsa.encodeCastABI(spells))
//   console.log(await dsa.estimateCastGas({spells, from: '0x03d70891b8994feB6ccA7022B25c32be92ee3725'})) //. Error over here.

//   await dsa.cast(spells)
// })
