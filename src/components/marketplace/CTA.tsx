import { Link } from "react-router-dom";
import Container from "../layout/Container";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <Container>
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 px-10 py-20 backdrop-blur-xl">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-2xl font-extrabold uppercase tracking-[0.2em] text-blue-400">
              START TODAY
            </p>

            <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
              Ready to Explore
              <br />
              CommerceKit?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Discover premium digital products, purchase securely with your
              wallet and manage everything from one powerful dashboard built
              for the Arc ecosystem.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                to="/marketplace"
                className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500"
              >
                Explore Marketplace
              </Link>

              <Link
                to="/dashboard"
                className="rounded-xl border border-white/15 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Open Dashboard
              </Link>

            </div>

          </div>

        </div>
      </Container>

    </section>
  );
}