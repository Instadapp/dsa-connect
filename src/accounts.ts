import { Abi } from './abi'
import { Addresses } from './data/addresses'
import { DSA } from './dsa'

/**
 * Account resolver.
 */
export class Accounts {
  /**
   * @param dsa The DSA instance to access data stores.
   */
  constructor(private dsa: DSA) {}

  /**
   * Global number of DSAs.
   */
  async count() {
    const contract = new this.dsa.web3.eth.Contract(Abi.core.list, Addresses.core.list)
    const count = await contract.methods.accounts().call({ from: Addresses.genesis })

    return count
  }

  /**
   * Returns accounts in a simple array of objects for addresses owned by the address.
   *
   * @param authority The ethereum address or .eth name
   */
  async getAccounts(authority: string) {
    const address = await this.getAddress(authority)

    const contract = new this.dsa.web3.eth.Contract(Abi.read.core, Addresses.read.core)

    // TODO: Check if type is correct here (string/number?)
    const authorityDetails: {
      IDs: number[]
      accounts: string[]
      versions: number[]
    } = contract.methods.getAuthorityDetails(address).call({ from: Addresses.genesis })

    const accounts = authorityDetails.IDs.map((id, index) => ({
      id,
      address: authorityDetails.accounts[index],
      version: authorityDetails.versions[index],
    }))

    return accounts
  }

  private async getAddress(authority: string) {
    if (!authority) return await this.dsa.internal.getAddress()

    if (authority.includes('.eth')) return await this.dsa.web3.eth.ens.getAddress(authority)

    return authority
  }

  /**
   * Returns accounts in a simple array of objects.
   *
   * @param id The DSA ID.
   */
  async getAuthoritiesById(id: number) {
    const contract = new this.dsa.web3.eth.Contract(Abi.read.core, Addresses.read.core)

    // TODO: Return type instead of any?
    const authorities: any = await contract.methods.getIDAuthorities(id).call({ from: Addresses.genesis })

    return authorities
  }

  /**
   * Returns accounts in a simple array of objects.
   *
   * @param address The DSA address
   */
  async getAuthoritiesByAddress(address: string) {
    const contract = new this.dsa.web3.eth.Contract(Abi.read.core, Addresses.read.core)

    // TODO: Return type instead of any?
    const authorities: any = await contract.methods.getAccountAuthorities(address).call({ from: Addresses.genesis })

    return authorities
  }

  /**
   * Returns authorities with its type in a simple array of objects.
   *
   * @param address The DSA address.
   */
  async getAuthoritiesTypes(address: string) {
    const contract = new this.dsa.web3.eth.Contract(Abi.read.core, Addresses.read.core)

    // TODO: Return type instead of any?
    const authorities: any = contract.methods.getAccountAuthoritiesTypes(address).call({ from: Addresses.genesis })

    return authorities
  }
}
