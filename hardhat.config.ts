/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import "dotenv/config"
import "@nomiclabs/hardhat-web3"

const mnemonic = 'west cricket tenant memory offer burger crumble snow solid mushroom wish solid';

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
      },
      chainId: 1,
      forking: {
        url: process.env.ETH_NODE_URL,
      },
      blockGasLimit: 12000000,
    },
  },
};
