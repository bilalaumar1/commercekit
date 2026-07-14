type FilterBarProps = {
  selected: string;
  onSelect: (category: string) => void;
};

const filters = [
  "All",
  "AI",
  "Web Design",
  "Developer",
  "Analytics",
  "Education",
  "Productivity",
];

export default function FilterBar({
  selected,
  onSelect,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`
            rounded-full
            border
            px-5
            py-2
            text-sm
            transition
            ${
              selected === filter
                ? "border-blue-500 bg-blue-600 text-white"
                : "border-white/10 bg-white/5 text-white hover:border-blue-500 hover:bg-blue-600"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}