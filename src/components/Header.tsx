export default function Header() {
  const today = new Date().toLocaleDateString();

  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
        backdrop-blur-xl
        px-6
        py-4
        mb-8
      "
    >
      <div>
        <p className="text-zinc-400 text-sm">
          Today
        </p>

        <h2 className="text-lg font-semibold">
          {today}
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <div>
          <p className="text-zinc-400 text-sm">
            Productivity
          </p>

          <h2 className="font-bold">
            82%
          </h2>
        </div>

        <div
          className="
            h-10
            w-10
            rounded-full
            bg-gradient-to-br
            from-purple-500
            to-blue-500
          "
        />
      </div>
    </div>
  );
}