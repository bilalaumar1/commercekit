const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("CommerceKitAchievements");

  const nft = await NFT.deploy();

  await nft.waitForDeployment();

  console.log("NFT deployed:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});