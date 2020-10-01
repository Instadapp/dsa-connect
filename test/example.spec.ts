import { provider } from 'ganache-cli'
import Web3 from 'web3'
import { DSA } from '../src/index'

let web3: Web3

// TODO: Use beforeEach if nessecary or define individually
beforeAll(() => (web3 = new Web3(provider())))

test('initalization of DSA', () => {
  const dsa = new DSA({ web3 })

  expect(dsa).toBeDefined()
})

test('get web3 accounts', async () => {
  const [accountOne, accountTwo] = await web3.eth.getAccounts()

  expect(accountOne).toBeDefined()
  expect(accountTwo).toBeDefined()
})

test.todo('Add some tests')
