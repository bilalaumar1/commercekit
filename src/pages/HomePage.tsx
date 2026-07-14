import Navbar from "../components/layout/Navbar";

import Hero from "../components/marketplace/Hero";
import Stats from "../components/marketplace/Stats";
import Categories from "../components/marketplace/Categories";
import FeaturedProducts from "../components/marketplace/FeaturedProducts";
import WhyArc from "../components/marketplace/WhyArc";
import CTA from "../components/marketplace/CTA";
import Footer from "../components/marketplace/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <Stats />

      <Categories />

      <FeaturedProducts />

      <WhyArc />

      <CTA />

      <Footer />
    </div>
  );
}