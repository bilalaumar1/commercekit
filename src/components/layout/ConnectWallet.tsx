import { ConnectButton } from "@rainbow-me/rainbowkit";
import { toast } from "sonner";
import { useEffect, useRef } from "react";
import { useAccount } from "wagmi";

export default function ConnectWallet() {
  const { isConnected } = useAccount();

  const previousState = useRef(isConnected);

  useEffect(() => {
    if (previousState.current !== isConnected) {
      if (isConnected) {
        toast.success("Wallet connected successfully!");
      } else {
        toast.info("Wallet disconnected.");
      }

      previousState.current = isConnected;
    }
  }, [isConnected]);

  return (
    <ConnectButton.Custom>
      {({ openConnectModal, account, chain, mounted }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <>
            {!connected ? (
              <button
                onClick={openConnectModal}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
              >
                Connect Wallet
              </button>
            ) : (
              <ConnectButton />
            )}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
}