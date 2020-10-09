import Web3 from 'web3'
import { DSA } from '../src/index'
require('dotenv').config()

let web3: Web3
let dsa: DSA

// TODO: Use beforeEach if nessecary or define individually
beforeAll(() => {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
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
  let usdc_address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

  let myAddr = process.env.PUBLIC_ADDRESS;

  let spells = dsa.Spell();

    spells.add({
    connector: "basic",
    method: "withdraw",
    args: [usdc_address, dsa.maxValue, myAddr, 0, 0]
    });
    
    await dsa.setAccount(Number(process.env.DSA_ID)); 
    console.log(await dsa.encodeCastABI(spells))

    await dsa.cast(spells)
})
// test.todo('Add some tests')
