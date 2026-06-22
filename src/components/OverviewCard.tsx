export default function OverviewCard() {
  return (
    <div
      className="
        mt-8
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
        backdrop-blur-xl
        p-8
      "
    >
      <h2 className="text-2xl font-bold">
        Weekly Progress
      </h2>

      <p className="text-zinc-400 mt-2">
        Keep pushing forward.
      </p>

      <div className="mt-6 h-3 rounded-full bg-zinc-800">
        <div className="h-3 w-[68%] rounded-full bg-white" />
      </div>

      <p className="mt-4 text-zinc-400">
        68% of weekly goals completed
      </p>
    </div>
  );
}