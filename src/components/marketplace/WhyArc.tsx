import Container from "../layout/Container";
import {
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Payments",
    description:
      "Purchase digital products instantly using USDC on Arc Testnet with seamless checkout.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Ownership",
    description:
      "Every purchase is linked to your wallet, giving verifiable ownership of your digital assets.",
  },

  {
    icon: Wallet,
    title: "Wallet Native",
    description:
      "Connect your wallet once and manage purchases, downloads and history from one dashboard.",
  },
];

export default function WhyArc() {
  return (
    <section className="relative py-28">

      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-2xl font-extrabold uppercase tracking-[0.2em] text-blue-400">
  WHY CommerceKit
</p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Built for the Future
            <br />
            of Digital Commerce
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            CommerceKit combines wallet-native payments,
            instant ownership and a premium marketplace
            experience designed specifically for the Arc
            ecosystem.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/40
                "
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15">
                  <Icon
                    className="text-blue-400"
                    size={28}
                  />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}