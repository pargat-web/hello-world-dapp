const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  let greeter;
  let owner;
  let addr1;
  
  // Deploy a new Greeter contract before each test
  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    
    const Greeter = await ethers.getContractFactory("Greeter");
    greeter = await Greeter.deploy("Hello, World!");
    // In newer Hardhat versions, we don't need to call deployed()
  });

  describe("Deployment", function () {
    it("Should set the initial greeting correctly", async function () {
      expect(await greeter.greet()).to.equal("Hello, World!");
    });
  });

  describe("Interactions", function () {
    it("Should update the greeting when setGreeting is called", async function () {
      const newGreeting = "Hello, Blockchain!";
      
      await greeter.setGreeting(newGreeting);
      expect(await greeter.greet()).to.equal(newGreeting);
    });

    it("Should allow different accounts to update the greeting", async function () {
      const newGreeting = "Greetings from another account!";
      
      // Connect with a different account and update the greeting
      await greeter.connect(addr1).setGreeting(newGreeting);
      expect(await greeter.greet()).to.equal(newGreeting);
    });
  });
}); 