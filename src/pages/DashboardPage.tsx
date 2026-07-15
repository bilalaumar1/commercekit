import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";
import Container from "../components/layout/Container";
import { getPurchases } from "../lib/storage";

export default function DashboardPage() {
  const { address } = useAccount();

  const purchases = address
    ? getPurchases(address)
    : [];

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
  doc.addImage("/logo.png", "PNG", 20, 9, 14, 14);
  doc.setFontSize(24);
  doc.text("Arc Commerce", 36, 18);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Digital Purchase Receipt", 20, 28);

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
  return (
    <section className="min-h-screen bg-[#050816] pt-6 pb-20 text-white">
      <Container>

        {/* Logo */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Arc Commerce"
              className="h-11 w-11 object-contain"
            />

            <h2 className="text-2xl font-bold text-white">
              Arc Commerce
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