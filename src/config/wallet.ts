import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { defineChain } from "viem";

export const arcTestnet = defineChain({
  id: 5042002,
  name: "Arc Testnet",
  nativeCurrency: {
    name: "USDC",
    symbol: "USDC",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.arc.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Arc Explorer",
      url: "https://testnet.arcscan.app",
    },
  },
  testnet: true,
});

export const config = getDefaultConfig({
  appName: "Arc Commerce",
  projectId: "6a5d8af912406dacd02c12c0358a5037",
  chains: [arcTestnet],
  transports: {
    [arcTestnet.id]: http(),
  },
});