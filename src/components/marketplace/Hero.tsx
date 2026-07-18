import { Link } from "react-router-dom";

import MarketplacePreview from "./MarketplacePreview";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-32">
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute top-60 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[150px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 font-semibold text-blue-400">
              CommerceKit
            </p>

            <h1 className="max-w-5xl text-6xl font-bold leading-tight text-white">
              The Marketplace Built
              <br />
              for the Arc Ecosystem
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-gray-400">
              Discover products, creators, and digital assets with seamless
              wallet-native payments Built on Arc Testnet.
            </p>

            <div className="mt-10 flex gap-4">
              <Link to="/marketplace">
                <Button>
                  Explore Marketplace
                </Button>
              </Link>

              <Link
                to="/guide"
                className="rounded-xl border border-white/20 px-6 py-3 text-white transition hover:border-blue-500 hover:bg-white/10"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <MarketplacePreview />
        </div>
      </Container>
    </section>
  );
}