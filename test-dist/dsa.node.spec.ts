import { config } from 'dotenv'
import Web3 from 'web3'
// import hre from 'hardhat'
// import "@nomiclabs/hardhat-ethers"
// import '@nomiclabs/hardhat-web3'
import DSA from '../dist';

config()

let web3: Web3
let dsa: DSA
let account: string
let gasPrice: string = "20000000000"

const accountPrivateKey: string = "0xdc68bafd6461c12ab15e8ac77dad9a74960bf308a7522a2bda798396500c028e"

const ethAddr = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
const usdcAddr = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
const daiAddr = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

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

describe('DSA v1', function () {

  test('create new dsa v1', async () => {
    let dsaAccounts = await dsa.accounts.getAccounts(account)
    const accountCount = dsaAccounts.length

    console.log(dsaAccounts)
    
    await dsa.build({gasPrice})

    dsaAccounts = await dsa.accounts.getAccounts(account)
    expect(dsaAccounts.length).toEqual(accountCount + 1)

    const createdDSA = dsaAccounts[dsaAccounts.length - 1]

    await dsa.setAccount(createdDSA.id)
    expect(dsa.instance.id).toEqual(createdDSA.id)
    expect(dsa.instance.version).toEqual(1)
  })
});