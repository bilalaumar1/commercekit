import Container from "../layout/Container";

const stats = [
  {
    number: "10K+",
    label: "Products",
  },
  {
    number: "500+",
    label: "Creators",
  },
  {
    number: "25K+",
    label: "Transactions",
  },
  {
    number: "99.9%",
    label: "Success Rate",
  },
];

export default function Stats() {
  return (
    <section className="py-24">
      <Container>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              text-center
              transition
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/40
              hover:bg-white/10
              "
            >

              <h2 className="text-5xl font-bold text-white">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-400">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}