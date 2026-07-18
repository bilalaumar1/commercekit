import { Link } from "react-router-dom";
import Container from "../layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] md:items-start">
          {/* Brand */}
          <div className="self-start -mt-6">
            <div className="flex items-start gap-0 -ml-6">
              <img
                src="/logo.png"
                alt="CommerceKit"
                className="h-24 w-24 object-contain shrink-0"
              />

              <div className="pt-6">
                <h2 className="text-3xl font-bold text-white leading-none">
                  CommerceKit
                </h2>

                
              </div>
            </div>

            <p className="-mt-1 max-w-xs leading-8 text-gray-400">
              A premium marketplace built for the Arc ecosystem.
              Buy, sell and own digital products with wallet-native
              payments.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/bilalaumar1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.35 22.95c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.55-3.87-1.55-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.19a11.08 11.08 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.6.24 2.78.12 3.07.74.81 1.19 1.85 1.19 3.11 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65.5 12 .5Z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com/bili_6_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23 22h-6.18l-4.84-6.33L6.4 22H3.3l7.24-8.27L1 2h6.33l4.38 5.74L18.9 2Zm-1.08 18h1.72L6.4 3.9H4.56L17.82 20Z" />
                </svg>
              </a>
            </div>
          </div>
                    {/* Marketplace */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Marketplace
            </h3>

            <div className="space-y-3 text-gray-400">
              <Link
                to="/marketplace"
                className="block transition-all hover:translate-x-1 hover:text-blue-400"
              >
                Browse Products
              </Link>

              <Link
                to="/dashboard"
                className="block transition-all hover:translate-x-1 hover:text-blue-400"
              >
                Dashboard
              </Link>

              <Link
                to="/"
                className="block transition-all hover:translate-x-1 hover:text-blue-400"
              >
                Home
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <div className="space-y-3 text-gray-400">
              <a
                href="https://docs.arc.network"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all hover:translate-x-1 hover:text-blue-400"
              >
                Documentation
              </a>

              <a
                href="https://faucet.circle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all hover:translate-x-1 hover:text-blue-400"
              >
                USDC Faucet
              </a>

              <a
                href="https://testnet.arcscan.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all hover:translate-x-1 hover:text-blue-400"
              >
                Arc Explorer
              </a>
            </div>
          </div>

          {/* Built On */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Built On
            </h3>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Network
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-white">
                    Arc Testnet
                  </h4>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>

                  <span className="text-sm font-medium text-green-400">
                    Online
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">
                    Payment
                  </span>

                  <span className="font-medium text-white">
                    USDC
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">
                    Ownership
                  </span>

                  <span className="font-medium text-white">
                    Wallet Native
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">
                    Explorer
                  </span>

                  <a
                    href="https://testnet.arcscan.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-400 transition hover:text-blue-300"
                  >
                    ArcScan →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© 2026 CommerceKit. All rights reserved.</p>

          <p>Built on Arc Testnet</p>
        </div>
      </Container>
    </footer>
  );
}