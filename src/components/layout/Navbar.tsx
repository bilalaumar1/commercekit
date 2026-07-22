import { NavLink } from "react-router-dom";
import { ShoppingBag, LayoutDashboard } from "lucide-react";

import Container from "./Container";
import Logo from "./Logo";
import ConnectWallet from "./ConnectWallet";

export default function Navbar() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `transition ${
      isActive
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/marketplace" className={navClass}>
            Marketplace
          </NavLink>

          <NavLink to="/dashboard" className={navClass}>
            Dashboard
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Marketplace */}
          <NavLink
            to="/marketplace"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400"
                : "text-gray-300 transition hover:text-white"
            }
          >
            <ShoppingBag size={22} />
          </NavLink>

          {/* Dashboard */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400"
                : "text-gray-300 transition hover:text-white"
            }
          >
            <LayoutDashboard size={22} />
          </NavLink>

          <ConnectWallet />
        </div>
      </Container>
    </header>
  );
}