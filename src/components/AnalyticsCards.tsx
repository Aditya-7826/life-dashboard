export default function AnalyticsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="rounded-xl border border-zinc-800 p-6">
        <h3 className="text-zinc-400">Workouts</h3>
        <p className="text-3xl font-bold">12</p>
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        <h3 className="text-zinc-400">DSA Solved</h3>
        <p className="text-3xl font-bold">48</p>
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        <h3 className="text-zinc-400">Goals</h3>
        <p className="text-3xl font-bold">5</p>
      </div>

      <div className="rounded-xl border border-zinc-800 p-6">
        <h3 className="text-zinc-400">Applications</h3>
        <p className="text-3xl font-bold">10</p>
      </div>
    </div>
  );
}