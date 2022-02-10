const hre = require("hardhat");

async function main() {
  // Tell the script we want to deploy the NFT.sol contract
  const contract = await hre.ethers.getContractFactory("NFT");

  // Deploy it
  const deployedContract = await contract.deploy();
  // Wait for deployment to finish
  await deployedContract.deployed();

  console.log("nft contract deployed to: ", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
