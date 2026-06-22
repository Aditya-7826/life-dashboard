import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      className="
        w-72
        border-r
        border-zinc-800
        bg-zinc-950
        p-6
        flex
        flex-col
      "
    >
      <h1 className="text-3xl font-bold mb-10">
        Life Dashboard
      </h1>

      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition">
          🏠 Dashboard
        </Link>

        <Link href="/gym" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition">
          🏋️ Gym
        </Link>

        <Link href="/dsa" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition">
          💻 DSA
        </Link>

        <Link href="/goals" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition">
          🎯 Goals
        </Link>

        <Link href="/habits" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition">
          🔥 Habits
        </Link>

        <Link href="/certifications" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition">
          📜 Certifications
        </Link>

        <Link href="/placements" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition">
          💼 Placements
        </Link>

        <Link href="/linkedin" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition">
          📈 LinkedIn
        </Link>

        <Link href="/calendar" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition">
          📅 Calendar
        </Link>

        <Link href="/analytics" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition">
          📊 Analytics
        </Link>
      </nav>
    </aside>
  );
}