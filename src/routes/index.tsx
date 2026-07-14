import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuidePage from "../pages/GuidePage";
import HomePage from "../pages/HomePage";
import MarketplacePage from "../pages/MarketplacePage";
import CheckoutPage from "../pages/CheckoutPage";
import DashboardPage from "../pages/DashboardPage";
import ProductPage from "../pages/ProductPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/guide" element={<GuidePage />} />
        <Route
  path="/product/:id"
  element={<ProductPage />}
/>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        
        <Route path="/checkout/:id" element={<CheckoutPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}