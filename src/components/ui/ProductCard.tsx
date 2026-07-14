import type { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

type ProductCardProps = {
  id: string;
  image: string;
  title: string;
  category: string;
  price: string;
  rating: string;
};

export default function ProductCard({
  id,
  image,
  title,
  category,
  price,
  rating,
}: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="
      group
      cursor-pointer
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500/40
      hover:shadow-2xl
      hover:shadow-blue-500/10
      "
    >
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
          h-full
          w-full
          object-cover
          transition-all
          duration-500
          group-hover:scale-105
          "
        />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
            {category}
          </span>

          <span className="font-semibold text-yellow-400">
            ★ {rating}
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
          {title}
        </h3>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Price
            </p>

            <p className="text-xl font-bold text-white">
              {price}
            </p>
          </div>

          <Button
  onClick={(e: MouseEvent) => {
    e.stopPropagation();
    navigate(`/checkout/${id}`);
  }}
>
  Buy
</Button>
        </div>
      </div>
    </div>
  );
}