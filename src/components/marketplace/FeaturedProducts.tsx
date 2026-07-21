import Container from "../layout/Container";
import ProductCard from "../ui/ProductCard";
import { products } from "../../lib/products";

export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <Container>

        <div className="mb-14 text-center">

          <p className="font-semibold text-blue-400">
            Featured
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Trending Products
          </h2>

          <p className="mt-4 text-gray-400">
            Discover the most popular products on CommerceKit.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              rating={product.rating}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}