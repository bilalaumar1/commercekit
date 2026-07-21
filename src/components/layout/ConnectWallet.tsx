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

        if (!connected) {
          return (
            <button
              onClick={openConnectModal}
              className="
                rounded-xl
                bg-blue-600
                px-3 py-2
                text-sm
                font-semibold
                transition
                hover:bg-blue-500
                md:px-6 md:py-3 md:text-base
              "
            >
              <span className="hidden sm:inline">
                Connect Wallet
              </span>

              <span className="sm:hidden">
                Connect
              </span>
            </button>
          );
        }

        return (
          <div className="scale-90 md:scale-100 origin-right">
            <ConnectButton />
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}