import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
      <img
        src="/logo.png"
        alt="CommerceKit"
        className="h-24 w-24 object-contain shrink-0"
      />

      <div className="leading-tight">
        <h1 className="text-2xl font-bold text-white">
          CommerceKit
        </h1>

        <p className="text-sm text-gray-400">
          Digital Marketplace
        </p>
      </div>
    </Link>
  );
}