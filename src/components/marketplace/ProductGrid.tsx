import ProductCard from "../ui/ProductCard";

type Product = {
  id: string;
  image: string;
  title: string;
  category: string;
  price: string;
  rating: string;
};

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
        <h2 className="text-2xl font-bold text-white">
          No products found
        </h2>

        <p className="mt-3 text-gray-400">
          Try another keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
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
  );
}