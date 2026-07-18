import { Link } from "react-router-dom";
import {
  Wallet,
  ShoppingBag,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  Database,
} from "lucide-react";
import Container from "../components/layout/Container";

export default function GuidePage() {
  return (
    <section className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 py-28">

        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <Container>

  <Link
    to="/"
    className="-mt-16 mb-12 flex w-fit items-center gap-3"
  >
    <img
      src="/logo.png"
      alt="CommerceKit"
      className="h-14 w-14 object-contain shrink-0"
    />

    <h2 className="text-2xl font-bold text-white">
      CommerceKit
    </h2>
  </Link>

  <nav className="mb-12 flex items-center gap-3 text-sm">

  <Link
    to="/"
    className="rounded-lg px-2 py-1 text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-blue-400"
  >
    Home
  </Link>

  <span className="text-gray-600">
    /
  </span>

  <span className="font-medium text-white">
    Guid
  </span>

</nav>

  <p className="font-semibold uppercase tracking-[0.2em] text-blue-400">
    CommerceKit GUIDE
  </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-bold leading-tight">
            Build a Premium Marketplace
            <br />
            on Arc Testnet
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Learn how CommerceKit was designed and built using
            React, TypeScript, TailwindCSS, Wagmi and Arc Testnet.
            This guide explains the architecture, workflow and
            development process behind the project.
          </p>

          <div className="mt-12 flex gap-5">

            <Link
              to="/marketplace"
              className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              Open Marketplace
            </Link>

            <a
              href="https://github.com/bilalaumar1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-7 py-4 transition hover:border-blue-500 hover:bg-white/5"
            >
              View GitHub
            </a>

          </div>

        </Container>
      </section>

      {/* OVERVIEW */}

      <section className="py-24">

        <Container>

          <div className="mb-16 text-center">

            <p className="font-semibold uppercase tracking-[0.2em] text-blue-400">
              PROJECT OVERVIEW
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              What is CommerceKit?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              CommerceKit demonstrates how digital products can be
              sold through a modern wallet-native marketplace powered
              by Arc Testnet and USDC.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-blue-400 font-semibold">
                PURPOSE
              </p>

              <h3 className="mt-5 text-3xl font-bold">
                Marketplace
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Build a premium digital marketplace where users can
                discover, purchase and manage products using their
                crypto wallet.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-blue-400 font-semibold">
                TECHNOLOGY
              </p>

              <h3 className="mt-5 text-3xl font-bold">
                Wallet Native
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Authentication, payments and ownership are connected
                directly to the user's wallet through Arc Testnet.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-blue-400 font-semibold">
                GOAL
              </p>

              <h3 className="mt-5 text-3xl font-bold">
                Showcase
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Demonstrate a clean developer experience while
                showcasing modern Web3 commerce built on Arc.
              </p>
            </div>

          </div>

        </Container>

      </section>
{/* ARCHITECTURE */}

<section className="border-y border-white/10 bg-white/[0.02] py-24">

  <Container>

    <div className="mb-16 text-center">

      <p className="font-semibold uppercase tracking-[0.2em] text-blue-400">
        ARCHITECTURE
      </p>

      <h2 className="mt-5 text-5xl font-bold">
        How CommerceKit Works
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        Every purchase follows a simple wallet-native flow powered by
        Arc Testnet.
      </p>

    </div>

    <div className="grid gap-6 lg:grid-cols-7">

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-blue-500/40">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
      <Wallet className="h-8 w-8 text-blue-400" />
    </div>

    <h3 className="text-xl font-semibold">
      Wallet
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-400">
      Connect your wallet
    </p>
  </div>

  <div className="flex items-center justify-center">
    <ArrowRight className="h-8 w-8 text-blue-400" />
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-blue-500/40">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
      <ShoppingBag className="h-8 w-8 text-blue-400" />
    </div>

    <h3 className="text-xl font-semibold">
      Marketplace
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-400">
      Browse products
    </p>
  </div>

  <div className="flex items-center justify-center">
    <ArrowRight className="h-8 w-8 text-blue-400" />
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-blue-500/40">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
      <CreditCard className="h-8 w-8 text-blue-400" />
    </div>

    <h3 className="text-xl font-semibold">
      Checkout
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-400">
      Pay with USDC
    </p>
  </div>

  <div className="flex items-center justify-center">
    <ArrowRight className="h-8 w-8 text-blue-400" />
  </div>

  <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-6 text-center transition hover:border-blue-400">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
      <ShieldCheck className="h-8 w-8 text-blue-300" />
    </div>

    <h3 className="text-xl font-semibold">
      Arc Testnet
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-300">
      Transaction confirmed
    </p>
  </div>

</div>

      

    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="text-3xl font-bold">
          Purchase Flow
        </h3>

        <div className="mt-8 space-y-5">

          <div className="rounded-2xl bg-[#0B1020] p-5">
            Connect Wallet
          </div>

          <div className="text-center text-blue-400">
            ↓
          </div>

          <div className="rounded-2xl bg-[#0B1020] p-5">
            Browse Marketplace
          </div>

          <div className="text-center text-blue-400">
            ↓
          </div>

          <div className="rounded-2xl bg-[#0B1020] p-5">
            Complete Checkout
          </div>

          <div className="text-center text-blue-400">
            ↓
          </div>

          <div className="rounded-2xl bg-[#0B1020] p-5">
            Store Purchase
          </div>

          <div className="text-center text-blue-400">
            ↓
          </div>

          <div className="rounded-2xl bg-[#0B1020] p-5">
            Dashboard Access
          </div>

        </div>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="text-3xl font-bold">
          Core Components
        </h3>

        <div className="mt-8 grid gap-5">

  <div className="flex items-center gap-4 rounded-2xl bg-[#0B1020] p-5">
    <Wallet className="h-5 w-5 text-blue-400" />
    <span>Wallet Authentication</span>
  </div>

  <div className="flex items-center gap-4 rounded-2xl bg-[#0B1020] p-5">
    <ShoppingBag className="h-5 w-5 text-blue-400" />
    <span>Product Marketplace</span>
  </div>

  <div className="flex items-center gap-4 rounded-2xl bg-[#0B1020] p-5">
    <Database className="h-5 w-5 text-blue-400" />
    <span>Search & Filters</span>
  </div>

  <div className="flex items-center gap-4 rounded-2xl bg-[#0B1020] p-5">
    <CreditCard className="h-5 w-5 text-blue-400" />
    <span>Checkout System</span>
  </div>

  <div className="flex items-center gap-4 rounded-2xl bg-[#0B1020] p-5">
    <Database className="h-5 w-5 text-blue-400" />
    <span>Purchase Storage</span>
  </div>

  <div className="flex items-center gap-4 rounded-2xl bg-[#0B1020] p-5">
    <ShieldCheck className="h-5 w-5 text-blue-400" />
    <span>User Dashboard</span>
  </div>

</div>

      </div>

    </div>

  </Container>

</section>
{/* ================= TECH STACK ================= */}

<section className="mt-32">

  <div className="text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
      TECHNOLOGY STACK
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">
      Built With Modern Web3 Technologies
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
      CommerceKit combines modern frontend technologies with
      Arc Testnet infrastructure to deliver a fast, secure and
      wallet-native marketplace experience.
    </p>
  </div>

  <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-blue-500">
      <h3 className="text-xl font-bold text-white">
        Frontend
      </h3>

      <ul className="mt-6 space-y-3 text-gray-400">
        <li>React 19</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>React Router</li>
      </ul>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-blue-500">
      <h3 className="text-xl font-bold text-white">
        Web3
      </h3>

      <ul className="mt-6 space-y-3 text-gray-400">
        <li>Wagmi</li>
        <li>RainbowKit</li>
        <li>Viem</li>
        <li>Wallet Connect</li>
      </ul>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-blue-500">
      <h3 className="text-xl font-bold text-white">
        Blockchain
      </h3>

      <ul className="mt-6 space-y-3 text-gray-400">
        <li>Arc Testnet</li>
        <li>USDC Payments</li>
        <li>ArcScan</li>
        <li>Smart Contracts</li>
      </ul>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-blue-500">
      <h3 className="text-xl font-bold text-white">
        Deployment
      </h3>

      <ul className="mt-6 space-y-3 text-gray-400">
        <li>Vite</li>
        <li>GitHub</li>
        <li>Vercel Ready</li>
        <li>Responsive UI</li>
      </ul>
    </div>

  </div>

</section>
{/* ================= PROJECT STRUCTURE ================= */}

<section className="mt-32">

  <div className="text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
      PROJECT STRUCTURE
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">
      Organized For Scalability
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
      CommerceKit follows a modular architecture where pages,
      reusable components and blockchain utilities are separated
      for maintainability and future expansion.
    </p>
  </div>

  <div className="mt-16 rounded-3xl border border-white/10 bg-[#0B1020] p-8">

    <pre className="overflow-x-auto text-base leading-9 text-gray-300">

{`src
│
├── components
│   ├── layout
│   ├── marketplace
│   └── ui
│
├── pages
│   ├── HomePage
│   ├── MarketplacePage
│   ├── ProductPage
│   ├── CheckoutPage
│   ├── DashboardPage
│   └── GuidePage
│
├── routes
│
├── hooks
│
├── context
│
├── config
│
├── lib
│   ├── products
│   ├── purchases
│   └── storage
│
└── main.tsx`}

    </pre>

  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">
        Components
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        Reusable UI blocks shared across every page to keep the
        interface consistent.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">
        Pages
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        Each user flow is isolated into its own page for easier
        routing and maintenance.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">
        Blockchain Logic
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        Wallet connection, purchases and storage are separated
        from the interface logic.
      </p>
    </div>

  </div>

</section>
{/* ================= USER JOURNEY ================= */}

<section className="mt-32">

  <div className="text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
      USER JOURNEY
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">
      Complete Purchase Flow
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
      Every interaction inside CommerceKit follows a simple,
      intuitive and wallet-native experience from product
      discovery to ownership.
    </p>
  </div>

  <div className="mt-20 flex flex-col items-center gap-5">

    {[
      "Landing Page",
      "Marketplace",
      "Product Details",
      "Checkout",
      "Wallet Confirmation",
      "Dashboard",
      "Download Product",
    ].map((step, index) => (
      <div
        key={step}
        className="flex w-full max-w-xl flex-col items-center"
      >
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-blue-500 hover:bg-white/10">
          <h3 className="text-xl font-semibold">
            {index + 1}. {step}
          </h3>
        </div>

        {index !== 6 && (
          <div className="my-3 text-3xl text-blue-400">
            ↓
          </div>
        )}
      </div>
    ))}

  </div>

</section>
{/* ================= WHY ARC ================= */}

<section className="mt-32">

  <div className="text-center">

    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
      WHY ARC
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">
      Why Arc Testnet?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
      CommerceKit was built on Arc Testnet to demonstrate how
      wallet-native commerce can deliver a modern, seamless and
      developer-friendly experience.
    </p>

  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-blue-500">

      <h3 className="text-2xl font-bold">
        Wallet Native
      </h3>

      <p className="mt-5 leading-8 text-gray-400">
        Authentication and purchases are performed directly
        from the connected wallet without traditional accounts.
      </p>

    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-blue-500">

      <h3 className="text-2xl font-bold">
        USDC Payments
      </h3>

      <p className="mt-5 leading-8 text-gray-400">
        Digital products are purchased using USDC on
        Arc Testnet for a simple checkout experience.
      </p>

    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-blue-500">

      <h3 className="text-2xl font-bold">
        Developer Experience
      </h3>

      <p className="mt-5 leading-8 text-gray-400">
        Arc provides a clean environment for developers
        to prototype, build and test Web3 applications.
      </p>

    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-blue-500">

      <h3 className="text-2xl font-bold">
        Scalable Foundation
      </h3>

      <p className="mt-5 leading-8 text-gray-400">
        The project was designed with reusable components
        and a scalable architecture ready for future growth.
      </p>

    </div>

  </div>

</section>
{/* ================= ROADMAP ================= */}

<section className="mt-32">

  <div className="text-center">

    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
      ROADMAP
    </p>

    <h2 className="mt-4 text-5xl font-bold">
      What's Next?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
      CommerceKit is designed with future expansion in mind.
      The current marketplace is only the first milestone.
    </p>

  </div>

  <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-7">
      <p className="text-sm font-semibold text-green-400">
        COMPLETED
      </p>

      <h3 className="mt-4 text-2xl font-bold">
        Marketplace
      </h3>
    </div>

    <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-7">
      <p className="text-sm font-semibold text-green-400">
        COMPLETED
      </p>

      <h3 className="mt-4 text-2xl font-bold">
        Dashboard
      </h3>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
      <p className="text-sm font-semibold text-blue-400">
        NEXT
      </p>

      <h3 className="mt-4 text-2xl font-bold">
        Creator Portal
      </h3>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
      <p className="text-sm font-semibold text-blue-400">
        FUTURE
      </p>

      <h3 className="mt-4 text-2xl font-bold">
        NFT Ownership
      </h3>
    </div>

  </div>

</section>
    </section>
  );
}