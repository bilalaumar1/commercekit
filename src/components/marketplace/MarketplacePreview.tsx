import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { products } from "../../lib/products";

export default function MarketplacePreview() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products
      .filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 2);
  }, [search]);

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">
            Marketplace
          </h3>

          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">
            Arc Testnet
          </span>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="
            mb-5
            w-full
            rounded-xl
            border
            border-white/10
            bg-[#0B1220]
            px-4
            py-3
            text-white
            placeholder:text-gray-500
            outline-none
            focus:border-blue-500
          "
        />

        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-white/10 p-6 text-center text-gray-400">
              No products found.
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <h4 className="font-semibold text-white">
                  {product.title}
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  {product.category}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-white">
                    {product.price}
                  </span>

                  <Link
                    to={`/product/${product.id}`}
                    className="rounded-lg bg-blue-600 px-3 py-1 text-sm transition hover:bg-blue-500"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}