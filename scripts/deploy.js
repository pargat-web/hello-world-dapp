// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  
  // Deploy the contract with the initial greeting
  const greeter = await Greeter.deploy("Hello, World!");

  // Wait for the contract to be mined
  await greeter.waitForDeployment();

  // Get the contract address
  const address = await greeter.getAddress();
  
  console.log("Greeter deployed to:", address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 