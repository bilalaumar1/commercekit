import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../components/layout/Container";
import { products } from "../lib/products";

export default function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#050816] py-20 text-white">
      <Container>
        <div className="mb-10">
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 text-gray-400 transition hover:text-blue-400"
          >
            ← Back to Marketplace
          </Link>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Product Image */}

          <div
            className="
              flex
              items-center
              justify-center
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-2
            "
          >
            <img
              src={product.image}
              alt={product.title}
              className="
                w-full
                max-h-[520px]
                rounded-3xl
                object-contain
              "
            />
          </div>

          {/* Product Info */}

          <div>
            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-300">
              {product.category}
            </span>

            <h1 className="mt-6 text-5xl font-bold">
              {product.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              {product.description}
            </p>

            <div className="mt-8 flex items-center gap-6">
              <span className="text-4xl font-bold">
                {product.price}
              </span>

              <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-300">
                ★ {product.rating}
              </span>
            </div>

            {/* Features */}

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="font-bold text-emerald-400">✓</span>
                Lifetime Access
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <span className="font-bold text-emerald-400">✓</span>
                Full Source Code Included
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <span className="font-bold text-emerald-400">✓</span>
                Documentation Included
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <span className="font-bold text-emerald-400">✓</span>
                Free Future Updates
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-10 flex gap-4">
              <button
                onClick={() => navigate(`/checkout/${product.id}`)}
                className="
                  rounded-xl
                  bg-blue-600
                  px-8
                  py-4
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-blue-500
                  hover:shadow-xl
                  hover:shadow-blue-500/30
                "
              >
                Buy Now
              </button>

              <button
                className="
                  rounded-xl
                  border
                  border-white/10
                  px-8
                  py-4
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-white/5
                "
              >
                Add to Wishlist
              </button>
            </div>

            {/* Creator Card */}

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Creator
              </p>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
                  AC
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Arc Commerce Studio
                  </h3>

                  <p className="mt-1 text-gray-400">
                    42 Premium Products
                  </p>

                  <div className="mt-2 text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}