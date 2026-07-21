import { Link } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";
import Container from "../components/layout/Container";
import { getPurchases } from "../lib/storage";
import { products } from "../lib/products";
import { ethers } from "ethers";
import {
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
} from "../contracts/CommerceKitAchievements";
export default function DashboardPage() {
  const { address } = useAccount();

  const [wishlist, setWishlist] = useState<any[]>([]);
const [alreadyMinted, setAlreadyMinted] = useState(false);
  const purchases = address
    ? getPurchases(address)
    : [];

  useEffect(() => {
    const key = address
      ? `wishlist_${address}`
      : "wishlist_guest";

    const items = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    setWishlist(items);
  }, [address]);


  const totalSpent = useMemo(() => {
    return purchases.reduce((total, purchase) => {
      return total + Number(purchase.price.split(" ")[0]);
    }, 0);
  }, [purchases]);

  const downloadReceipt = async (purchase: any) => {
  const doc = new jsPDF();

  // Header
  doc.setFillColor(5, 8, 22);
  doc.rect(0, 0, 210, 42, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.addImage("/logo.png", "PNG", 20, 10, 20, 20);
  doc.setFontSize(24);
  doc.text("CommerceKit", 36, 18);

  doc.setFontSize(12);
doc.setTextColor(255, 255, 255);
doc.text("Digital Purchase Receipt", 37, 24);

  // Status
  doc.setFillColor(34, 197, 94);

// Green badge
doc.roundedRect(158, 10, 32, 12, 2, 2, "F");

// White text
doc.setTextColor(255, 255, 255);
doc.setFont("helvetica", "bold");
doc.setFontSize(11);

// Center the text inside the badge
doc.text("PAID", 174, 18, {
  align: "center",
});

  // Reset
  doc.setTextColor(20, 20, 20);

  // Product
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(purchase.title, 20, 60);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  doc.text(`Price`, 20, 78);
  doc.text(purchase.price, 70, 78);

  doc.text(`Network`, 20, 88);
  doc.text("Arc Testnet", 70, 88);

  doc.text(`Wallet`, 20, 98);
  doc.text(
    address
      ? `${address.slice(0, 6)}...${address.slice(-4)}`
      : "Unknown",
    70,
    98
  );

  doc.text(`Purchase Date`, 20, 108);
  doc.text(
    new Date(purchase.date).toLocaleString(),
    70,
    108
  );

  const receiptId = `ARC-REC-${purchase.txHash.slice(2, 10).toUpperCase()}`;

doc.text("Receipt ID", 20, 118);
doc.text(receiptId, 70, 118);

  doc.text(`Transaction`, 20, 132);

  doc.setFontSize(9);
  doc.text(
    purchase.txHash,
    20,
    140,
    {
      maxWidth: 170,
    }
  );

  // Line
  doc.setDrawColor(220);
  doc.line(20, 160, 190, 160);

  // Footer
  doc.setFontSize(10);
  doc.setTextColor(120);

  doc.setDrawColor(220);
doc.line(20, 165, 190, 165);

doc.setFontSize(10);
doc.setTextColor(120);


doc.text("Built on Arc Testnet", 20, 185);

doc.text(
  "This receipt verifies your digital purchase.",
  20,
  195
);
const qr = await QRCode.toDataURL(
  `https://testnet.arcscan.app/tx/${purchase.txHash}`
);

doc.addImage(
  qr,
  "PNG",
  150,   // X
  170,   // Y
  35,    // Width
  35     // Height
);

doc.setFontSize(9);
doc.setTextColor(120);

doc.setFontSize(9);
doc.setTextColor(120);

doc.text(
  "Scan to view transaction",
  167.5,
  210,
  {
    align: "center",
  }
);
  doc.save(`${purchase.title}-Receipt.pdf`);
};
const nextReward = useMemo(() => {
  if (purchases.length >= 6) {
    return {
      title: "Genesis NFT",
      description: "You have unlocked the Genesis NFT.",
      button: "Mint NFT",
      eligible: true,
    };
  }

  if (purchases.length >= 5) {
    return {
      title: "Builder NFT",
      description: "You have unlocked the Builder NFT.",
      button: "Mint NFT",
      eligible: true,
    };
  }

  if (purchases.length >= 3) {
    return {
      title: "Explorer NFT",
      description: "You have unlocked the Explorer NFT.",
      button: "Mint NFT",
      eligible: true,
    };
  }

  return {
    title: "Explorer NFT",
    description: `Buy ${3 - purchases.length} more product${
      3 - purchases.length > 1 ? "s" : ""
    } to unlock Explorer.`,
    button: "Browse Marketplace",
    eligible: false,
  };
}, [purchases]);
async function mintAchievement() {
  try {
    if (!window.ethereum) {
      alert("Please install MetaMask.");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );

    let tx;

if (purchases.length >= 6) {
  tx = await contract.mintGenesis();
} else if (purchases.length >= 5) {
  tx = await contract.mintBuilder();
} else if (purchases.length >= 3) {
  tx = await contract.mintExplorer();
} else {
  alert("You are not eligible yet.");
  return;
}

    await tx.wait();

    alert("NFT Minted Successfully!");
  } catch (err) {
    console.error(err);
    alert("Mint failed.");
  }
}
useEffect(() => {
  async function checkMintStatus() {
    if (!address) return;

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        provider
      );

      let minted = false;

      if (purchases.length >= 6) {
        minted = await contract.hasGenesis(address);
      } else if (purchases.length >= 5) {
        minted = await contract.hasBuilder(address);
      } else if (purchases.length >= 3) {
        minted = await contract.hasExplorer(address);
      }

      setAlreadyMinted(minted);
    } catch (err) {
      console.error(err);
    }
  }

  checkMintStatus();
}, [address, purchases.length]);
  return (
    <section className="min-h-screen bg-[#050816] pt-6 pb-20 text-white">
      <Container>

        {/* Logo */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="CommerceKit"
              className="h-14 w-14 object-contain shrink-0"
            />

            <h2 className="text-2xl font-bold text-white">
              CommerceKit
            </h2>
          </div>

          <Link
            to="/"
            className="mt-3 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-400"
          >
            Home
            <span className="text-gray-600">/</span>
            <span className="text-white">
              Dashboard
            </span>
          </Link>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold">
              Dashboard
            </h1>

            <p className="mt-3 text-gray-400">
              Manage your purchases and monitor your Arc activity.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-400">
              Connected Wallet
            </p>

            <p className="mt-2 font-semibold">
              {address
                ? `${address.slice(0, 6)}...${address.slice(-4)}`
                : "Not Connected"}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-gray-400">
              Purchases
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              {purchases.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-gray-400">
              Total Spent
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              {totalSpent} USDC
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-gray-400">
              Network
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Arc Testnet
            </h2>
          </div>
        </div>
<div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">

  <div className="flex items-center justify-between">

    <div>
      <h2 className="text-3xl font-bold">
        Commerce Journey
      </h2>

      <p className="mt-2 text-gray-400">
        Unlock achievements and exclusive rewards as you grow your collection.
      </p>
    </div>

    <span className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-300">
      {purchases.length} / 6 Products
    </span>

  </div>

  <div className="mt-8">

    <div className="mb-3 flex justify-between">

      <span className="text-gray-400">
        Overall Progress
      </span>

      <span>
        {Math.min(purchases.length, 6)} / 6
      </span>

    </div>

    <div className="h-5 overflow-hidden rounded-full bg-[#111827] border border-white/10">

      <div
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-700"
        style={{
          width: `${Math.min((purchases.length / 6) * 100, 100)}%`,
        }}
      />

    </div>

  </div>
<div className="mt-8 grid gap-6 lg:grid-cols-2">

  <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

    <p className="text-sm text-gray-400">
      Current Level
    </p>

    <h3 className="mt-2 text-3xl font-bold text-white">
      {purchases.length >= 6
        ? "Genesis"
        : purchases.length >= 5
        ? "Builder"
        : purchases.length >= 3
        ? "Explorer"
        : "Starter"}
    </h3>

    <p className="mt-4 text-gray-400">
      Keep purchasing products to unlock new achievements and exclusive NFT rewards.
    </p>

  </div>

  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

  <p className="text-sm text-blue-300">
    Next Reward
  </p>

  <h3 className="mt-2 text-2xl font-bold">
    {nextReward.title}
  </h3>

  <p className="mt-4 text-gray-400">
    {nextReward.description}
  </p>

  {nextReward.eligible ? (
  alreadyMinted ? (
    <button
      disabled
      className="mt-6 inline-flex cursor-not-allowed rounded-xl bg-gray-600 px-5 py-3 font-medium text-white"
    >
      ✓ Already Minted
    </button>
  ) : (
    <button
      onClick={mintAchievement}
      className="mt-6 inline-flex rounded-xl bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-500"
    >
      {nextReward.button}
    </button>
  )
) : (
    <Link
      to="/marketplace"
      className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500"
    >
      {nextReward.button}
    </Link>
  )}
</div>
</div>
</div>
        {/* Purchase History */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-3xl font-bold">
            Purchase History
          </h2>

          {purchases.length === 0 ? (
            <p className="text-gray-400">
              No purchases yet.
            </p>
          ) : (
            <div className="space-y-4">
              {purchases.map((purchase) => (
                <div
                  key={purchase.txHash}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1020] p-5"
                >
                  <div>
                    <h3 className="font-semibold">
                      {purchase.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {new Date(purchase.date).toLocaleString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      {purchase.price}
                    </p>

                    <button
                      onClick={() =>
                        window.open(
                          `https://testnet.arcscan.app/tx/${purchase.txHash}`,
                          "_blank"
                        )
                      }
                      className="mt-2 text-sm text-blue-400 hover:text-blue-300"
                    >
                      View on ArcScan →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
{/* Wishlist */}
<div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
  <h2 className="mb-8 text-3xl font-bold">
    Wishlist
  </h2>

  {wishlist.length === 0 ? (
    <p className="text-gray-400">
      Your wishlist is empty.
    </p>
  ) : (
    <div className="grid gap-5 md:grid-cols-2">
      {wishlist.map((item: any) => (
        <div
          key={item.id}
          className="rounded-2xl border border-white/10 bg-[#0B1020] p-6"
        >
          <h3 className="text-xl font-semibold">
            {item.title}
          </h3>

          <p className="mt-2 text-gray-400">
            {item.price}
          </p>

          <div className="mt-6 flex gap-3">

            <Link
              to={`/product/${item.id}`}
              className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium transition hover:bg-blue-500"
            >
              View Product
            </Link>

            <button
              onClick={() => {
                const updated = wishlist.filter(
                  (p: any) => p.id !== item.id
                );

                setWishlist(updated);

                const key = address
                  ? `wishlist_${address}`
                  : "wishlist_guest";

                localStorage.setItem(
                  key,
                  JSON.stringify(updated)
                );
              }}
              className="rounded-xl border border-red-500 px-5 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
            >
              Remove
            </button>

          </div>
        </div>
      ))}
    </div>
  )}
</div>
        {/* Owned Products */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-3xl font-bold">
            Owned Products
          </h2>

          {purchases.length === 0 ? (
            <p className="text-gray-400">
              You haven't purchased any products yet.
            </p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {purchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="rounded-2xl border border-white/10 bg-[#0B1020] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {purchase.title}
                      </h3>

                      <p className="mt-2 text-sm text-green-400">
                        Purchased
                      </p>
                    </div>

                    <button
  onClick={() => downloadReceipt(purchase)}
  className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium transition hover:bg-blue-500"
>
  Download Receipt
</button>
{purchase.id === "arc-house-companion" ? (
  <a
    href="https://arc-house-companion.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-3 rounded-xl border border-blue-500 px-5 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/10"
  >
    Open Website
  </a>
) : (
  <a
    href={products.find((p) => p.id === purchase.id)?.downloadUrl}
    download
    className="ml-3 rounded-xl border border-green-500 px-5 py-2 text-sm font-medium text-green-400 transition hover:bg-green-500/10"
  >
    Download Product
  </a>
)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </Container>
    </section>
  );
}