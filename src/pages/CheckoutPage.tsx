import { savePurchase } from "../lib/storage";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAccount, useWalletClient } from "wagmi";

import { products } from "../lib/products";
import Container from "../components/layout/Container";
import {
  MERCHANT_ADDRESS,
  getProductValue,
} from "../lib/purchase";

export default function CheckoutPage() {
  const { id } = useParams();

  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const product = products.find((p) => p.id === id);

if (!product) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
      <h1 className="text-4xl font-bold">
        Product Not Found
      </h1>
    </div>
  );
}

const currentProduct = product;

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  async function handlePurchase() {
  if (!walletClient || !address) {
    alert("Please connect your wallet.");
    return;
  }

  try {
    setIsLoading(true);

    const hash = await walletClient.sendTransaction({
      account: address,
      to: MERCHANT_ADDRESS,
      value: getProductValue(currentProduct.price),
    });

    savePurchase(address, {
      id: currentProduct.id,
title: currentProduct.title,
price: currentProduct.price,
      txHash: hash,
      date: new Date().toISOString(),
    });

    setTxHash(hash);
    setShowSuccess(true);
  } catch (err) {
    console.error(err);
    alert("Transaction cancelled.");
  } finally {
    setIsLoading(false);
  }
}

  return (
    <>
      <section className="min-h-screen bg-[#050816] py-20 text-white">
        <Container>
          <Link
            to="/marketplace"
            className="mb-10 inline-flex text-gray-400 transition hover:text-blue-400"
          >
            ← Back to Marketplace
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            {/* Product */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-2xl"
              />

              <h2 className="mt-6 text-3xl font-bold">
                {product.title}
              </h2>

              <p className="mt-3 text-gray-400">
                {product.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-gray-400">
                  Price
                </span>

                <span className="text-3xl font-bold">
                  {product.price}
                </span>
              </div>
            </div>

            {/* Checkout */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-bold">
                Checkout
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Product
                  </span>

                  <span>{product.title}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Network
                  </span>

                  <span>Arc Testnet</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Wallet
                  </span>

                  <span>
                    {address
                      ? `${address.slice(0, 6)}...${address.slice(-4)}`
                      : "Not Connected"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Total
                  </span>

                  <span className="text-2xl font-bold">
                    {product.price}
                  </span>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                disabled={isLoading}
                className="
                  mt-10
                  w-full
                  rounded-xl
                  bg-blue-600
                  py-4
                  text-lg
                  font-semibold
                  transition
                  hover:bg-blue-500
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {isLoading
                  ? "Processing Transaction..."
                  : "Confirm Purchase"}
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#0B1020] p-8 text-white">

            <div className="mb-5 text-center text-6xl">
              ✅
            </div>

            <h2 className="text-center text-3xl font-bold">
              Purchase Successful
            </h2>

            <p className="mt-4 text-center text-gray-400">
              Your payment has been confirmed on Arc Testnet.
            </p>

            <div className="mt-8 rounded-xl bg-white/5 p-4">
              <p className="mb-2 text-sm text-gray-400">
                Transaction Hash
              </p>

              <p className="break-all text-sm">
                {txHash}
              </p>
            </div>

            <div className="mt-8 space-y-3">

              <button
                onClick={() =>
                  window.open(
                    `https://testnet.arcscan.app/tx/${txHash}`,
                    "_blank"
                  )
                }
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-500"
              >
                View on ArcScan
              </button>

              <Link
                to="/marketplace"
                className="block w-full rounded-xl border border-white/10 py-4 text-center font-semibold transition hover:bg-white/5"
              >
                Continue Shopping
              </Link>

            </div>
          </div>
        </div>
      )}
    </>
  );
}