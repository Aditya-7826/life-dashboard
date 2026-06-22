type StatCardProps = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border border-zinc-800
        bg-zinc-900/50
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:border-zinc-700
      "
    >
      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}