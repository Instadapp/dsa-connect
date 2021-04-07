import { Abi } from './abi'
import { Addresses } from './addresses'
import { DSA } from './dsa'

export class Accounts {
  constructor(private dsa: DSA) {}

  /**
   * Global number of DSAs.
   */
  count = async () => {
    const contract = new this.dsa.web3.eth.Contract(Abi.core.list, Addresses.core[this.dsa.instance.chainId].list)
    const count = await contract.methods.accounts().call({ from: Addresses.genesis })

    return count
  }

  /**
   * Returns accounts in a simple array of objects for addresses owned by the address.
   *
   * @param authority The ethereum address or .eth name
   */
  getAccounts = async (authority: string) => {
    const address = await this.getAuthorityAddress(authority)
    const contract = new this.dsa.web3.eth.Contract(Abi.core.read, Addresses.core[this.dsa.instance.chainId].read)

    // TODO: Check if type is correct here (string/number?)
    const authorityDetails: {
      IDs: number[]
      accounts: string[]
      versions: number[]
    } = await contract.methods.getAuthorityDetails(address).call({ from: Addresses.genesis })

    const accounts = authorityDetails.IDs.map((id, index) => ({
      id,
      address: authorityDetails.accounts[index],
      version: authorityDetails.versions[index],
    }))

    return accounts
  }

  private getAuthorityAddress = async (authority: string) => {
    if (!authority) return await this.dsa.internal.getAddress()

    if (authority.includes('.eth')) return await this.dsa.web3.eth.ens.getAddress(authority)

    return authority
  }

  /**
   * Returns accounts in a simple array of objects.
   *
   * @param id The DSA ID.
   */
  getAuthoritiesById = async (id: number) => {
    const contract = new this.dsa.web3.eth.Contract(Abi.core.read, Addresses.core[this.dsa.instance.chainId].read)

    // TODO: Return type instead of any?
    const authorities: any = await contract.methods.getIDAuthorities(id).call({ from: Addresses.genesis })

    return authorities
  }

  /**
   * Returns accounts in a simple array of objects.
   *
   * @param address The DSA address
   */
  private getAuthoritiesByAddress = async (address: string) => {
    
    const contract = new this.dsa.web3.eth.Contract(Abi.core.read, Addresses.core[this.dsa.instance.chainId].read)

    // TODO: Return type instead of any?
    const authorities: any = await contract.methods.getAccountAuthorities(address).call({ from: Addresses.genesis })

    return authorities
  }

  /**
   * Returns authorities with its type in a simple array of objects.
   *
   * @param address The DSA address.
   */
  private getAuthoritiesTypes = async (address: string) => {
    const contract = new this.dsa.web3.eth.Contract(Abi.core.read, Addresses.core[this.dsa.instance.chainId].read)

    // TODO: Return type instead of any?
    const authorities: any = contract.methods.getAccountAuthoritiesTypes(address).call({ from: Addresses.genesis })

    return authorities
  }
}
