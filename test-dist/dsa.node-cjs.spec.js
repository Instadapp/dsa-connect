
require("dotenv").config();
const Web3 = require("web3");
// import hre from 'hardhat'
// import "@nomiclabs/hardhat-ethers"
// import '@nomiclabs/hardhat-web3'
const DSA = require("../dist");


let web3
let dsa
let account

const accountPrivateKey = "0xdc68bafd6461c12ab15e8ac77dad9a74960bf308a7522a2bda798396500c028e"


beforeAll(() => {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  dsa = new DSA({web3, mode: "node", privateKey: accountPrivateKey})
})

describe('Basic', function () {
  test('initalization of DSA', () => {
    expect(dsa).toBeDefined()
  })
  
  test('get web3 accounts', async () => {
    const [accountOne, accountTwo] = await web3.eth.getAccounts()
  
    expect(accountOne).toBeDefined()
    expect(accountTwo).toBeDefined()
    const dsa_account = await dsa.internal.getAddress()
    console.log(dsa_account, accountOne, accountTwo)
    account = accountTwo
  })
})
