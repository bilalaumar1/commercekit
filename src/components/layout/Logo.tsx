import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 md:gap-3 shrink-0"
    >
      <img
        src="/logo.png"
        alt="CommerceKit"
        className="h-16 w-16 md:h-24 md:w-24 object-contain shrink-0"
      />

      <div className="leading-tight">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          CommerceKit
        </h1>

        <p className="hidden md:block text-sm text-gray-400">
          Digital Marketplace
        </p>
      </div>
    </Link>
  );
}