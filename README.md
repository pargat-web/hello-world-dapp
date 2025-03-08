# Hello World DApp

A simple decentralized application (DApp) that demonstrates the basics of Ethereum smart contract development and integration with a React frontend. This project allows users to store and update a greeting message on the blockchain.

## Features

- Solidity smart contract for storing a greeting message
- React frontend for interacting with the contract
- MetaMask integration for wallet connection
- Ability to read and update the greeting stored on the blockchain

## Tech Stack

- **Smart Contract:** Solidity, Hardhat
- **Blockchain Interaction:** Ethers.js
- **Frontend:** React (JavaScript), Node.js
- **Wallet Connection:** MetaMask

## Prerequisites

- Node.js and npm installed
- MetaMask extension installed in your browser
- (Optional) Alchemy or Infura account for deploying to testnet

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/hello-world-dapp.git
   cd hello-world-dapp
   ```

2. Install dependencies:
   ```
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   SEPOLIA_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
   PRIVATE_KEY=your-wallet-private-key
   ```

## Deployment and Setup

### 1. Compile the Smart Contract

```
npx hardhat compile
```

### 2. Deploy to Local Network

```
npx hardhat node
```

In a new terminal:
```
npx hardhat run scripts/deploy.js --network localhost
```

### 3. Deploy to Sepolia Testnet (Optional)

```
npx hardhat run scripts/deploy.js --network sepolia
```

### 4. Update Contract Address

After deployment, update the `CONTRACT_ADDRESS` in `frontend/src/App.js` with the deployed contract address.

### 5. Start the Frontend

```
cd frontend
npm start
```

## Usage

1. Open the application in your browser (typically at http://localhost:3000)
2. Connect your MetaMask wallet by clicking "Connect to MetaMask"
3. View the current greeting stored on the blockchain
4. Enter a new greeting and submit to update it on the blockchain

## Testing

```
npx hardhat test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Hardhat - https://hardhat.org/
- Ethers.js - https://docs.ethers.io/
- React - https://reactjs.org/
- MetaMask - https://metamask.io/
