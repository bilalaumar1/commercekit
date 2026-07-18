import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Container from "../components/layout/Container";
import SearchBar from "../components/marketplace/SearchBar";
import FilterBar from "../components/marketplace/FilterBar";
import ProductGrid from "../components/marketplace/ProductGrid";

import { products } from "../lib/products";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <section className="pt-4 pb-24">
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
            className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-400"
          >
            Home
            <span className="text-gray-600">/</span>
            <span className="text-white">
              Marketplace
            </span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white">
            Marketplace
          </h1>

          <p className="mt-3 text-gray-400">
            Discover premium digital products built for the Arc ecosystem.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <FilterBar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <ProductGrid
            products={filteredProducts}
          />
        </div>

      </Container>
    </section>
  );
}