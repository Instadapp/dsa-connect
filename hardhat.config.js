/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-web3");

task("accounts", "Prints accounts", async (_, { web3 }) => {

  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [process.env.PUBLIC_ADDRESS]}
  )
  
  console.log(await web3.eth.getAccounts())

  await web3.eth.sendTransaction({from: process.env.PUBLIC_ADDRESS, to: process.env.PUBLIC_ADDRESS, value: 1000})
  
});


module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ETH_NODE_URL,
      },
      blockGasLimit: 12000000,
    },
  },
};
