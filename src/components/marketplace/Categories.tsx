import Container from "../layout/Container";
import {
  Bot,
  LayoutTemplate,
  Code2,
  BarChart3,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const categories = [
  {
    title: "AI Agents",
    products: "245 Products",
    icon: Bot,
  },
  {
    title: "Templates",
    products: "180 Products",
    icon: LayoutTemplate,
  },
  {
    title: "Developer Tools",
    products: "320 Products",
    icon: Code2,
  },
  {
    title: "Analytics",
    products: "95 Products",
    icon: BarChart3,
  },
  {
    title: "Education",
    products: "140 Products",
    icon: GraduationCap,
  },
  {
    title: "Productivity",
    products: "210 Products",
    icon: Briefcase,
  },
];

export default function Categories() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 text-center">
          <p className="font-semibold text-blue-400">
            Categories
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Browse Marketplace
          </h2>

          <p className="mt-4 text-gray-400">
            Discover digital products across multiple categories.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="
                cursor-pointer
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:bg-white/10
              "
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
                <category.icon className="h-7 w-7 text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {category.products}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}