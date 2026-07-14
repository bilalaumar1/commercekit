import { parseEther } from "viem";

export const MERCHANT_ADDRESS =
  "0x639281fb3cDB7Ce3314AB009D0cb250Ae8354D3E";

export function getProductValue(price: string) {
  // Example: "49 USDC" -> 49
  const amount = price.split(" ")[0];

  return parseEther(amount);
}