import Container from "../layout/Container";

const nfts = [
  {
    title: "Explorer Badge",
    requirement: "Purchase 3 Products",
    rarity: "Rare",
    image: "/nfts/explorer.png",
  },
  {
    title: "Builder Badge",
    requirement: "Purchase 5 Products",
    rarity: "Epic",
    image: "/nfts/builder.png",
  },
  {
    title: "Genesis Badge",
    requirement: "Purchase 6 Products",
    rarity: "Legendary",
    image: "/nfts/genesis.png",
  },
];

export default function AchievementNFTs() {
  return (
    <section className="py-24">
      <Container>

        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold text-white">
            Achievement NFTs
          </h2>

          <p className="mt-4 text-gray-400">
            Unlock exclusive NFT achievements as you grow your CommerceKit collection.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {nfts.map((nft) => (
            <div
              key={nft.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <img
  src={nft.image}
  alt={nft.title}
  className="w-full rounded-2xl object-contain bg-[#111827] p-4 aspect-square"
/>

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold text-white">
                  {nft.title}
                </h3>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                  Locked
                </span>

              </div>

              <p className="mt-5 text-gray-400">
                Unlock Requirement
              </p>

              <p className="mt-2 font-semibold text-white">
                {nft.requirement}
              </p>

              <div className="mt-6 flex items-center justify-between">

  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
    {nft.rarity}
  </span>

  <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">
    Locked
  </span>

</div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}