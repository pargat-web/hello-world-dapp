require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337 // Local network
    }
  },
  paths: {
    artifacts: "./frontend/src/artifacts",
  },
};
