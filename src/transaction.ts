import { TransactionConfig } from 'web3-core'
import { Addresses } from './data/addresses'
import { DSA } from './dsa'

export class Transaction {
  constructor(private dsa: DSA) {}

  /**
   * Send transaction and get transaction hash.
   */
  send = async (transactionConfig: TransactionConfig): Promise<string> => {
    if (transactionConfig.to == Addresses.genesis)
      throw Error(
        `Please configure the DSA instance by calling dsa.setInstance(dsaId). More details: https://docs.instadapp.io/setup`
      )

    if (this.dsa.config.mode == 'node') {
      const signedTransaction = await this.dsa.web3.eth.accounts.signTransaction(
        transactionConfig,
        this.dsa.config.privateKey
      )

      if (!signedTransaction.rawTransaction)
        throw new Error('Error while signing transaction. Please contact our support: https://docs.instadapp.io/')

      const transactionReceipt = await this.dsa.web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)

      return transactionReceipt.transactionHash
    } else {
      const transactionReceipt = await this.dsa.web3.eth.sendTransaction(transactionConfig)

      return transactionReceipt.transactionHash
    }
  }

  /**
   * Cancel transaction.
   *
   * @param params.nonce
   * @param params.gasPrice .
   * @returns Transaction hash.
   */
  cancel = async (params: Required<Pick<TransactionConfig, 'nonce' | 'gasPrice'>>) => {
    if (!params.nonce) throw new Error("Parameter 'nonce' not defined.")
    if (!params.gasPrice) throw new Error("Parameter 'gasPrice' not defined.")

    const userAddress = await this.dsa.internal.getAddress()
    const transactionConfig: TransactionConfig = {
      from: userAddress,
      to: userAddress,
      value: 0,
      data: '0x',
      gasPrice: params.gasPrice,
      gas: '27500',
      nonce: params.nonce,
    }

    const transactionHash = await this.send(transactionConfig)

    return transactionHash
  }

  /**
   * Speed up transaction.
   *
   * @param params.transactionHash - Transaction hash.
   * @param params.gasPrice - Transaction hash.
   * @returns Transaction hash.
   */
  speedUp = async (
    dsa: DSA,
    params: { transactionHash: string; gasPrice: NonNullable<TransactionConfig['gasPrice']> }
  ) => {
    if (!params.transactionHash) throw new Error("Parameter 'transactionHash' is not defined.")
    if (!params.gasPrice) throw new Error("Parameter 'gasPrice' is not defined.")

    const userAddress = await this.dsa.internal.getAddress()

    if (!userAddress) throw new Error('User address is not defined.')

    const transaction = await this.dsa.web3.eth.getTransaction(params.transactionHash)

    if (transaction.from.toLowerCase() !== userAddress.toLowerCase()) throw new Error("'from' address doesnt match.")

    const gasPrice = typeof params.gasPrice !== 'number' ? params.gasPrice : params.gasPrice.toFixed(0)

    const transactionConfig: TransactionConfig = {
      from: transaction.from,
      to: transaction.to ?? undefined,
      value: transaction.value,
      data: transaction.input,
      gasPrice: gasPrice,
      gas: transaction.gas,
      nonce: transaction.nonce,
    }

    const transactionHash = await this.send(transactionConfig)

    return transactionHash
  }

  /**
   * Get transaction Nonce.
   *
   * @param transactionHash Transaction hash to get nonce.
   */
  getNonce = async (transactionHash: string) => {
    const transaction = await this.dsa.web3.eth.getTransaction(transactionHash)

    return transaction.nonce
  }

  /**
   * Get transaction count.
   *
   * @param address Address to get transaction count for.
   * @returns Transaction count for address
   */
  getTransactionCount = async (address: string) => {
    const transactionCount = await this.dsa.web3.eth.getTransactionCount(address)

    return transactionCount
  }
}
