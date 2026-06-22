import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import OverviewCard from "@/components/OverviewCard";
import { supabase } from "@/lib/supabase";

export default async function DashboardPage() {
  const { count: workoutsCount } = await supabase
    .from("workouts")
    .select("*", { count: "exact", head: true });

  const { count: dsaCount } = await supabase
    .from("dsa_problems")
    .select("*", { count: "exact", head: true });

  const { count: goalsCount } = await supabase
    .from("goals")
    .select("*", { count: "exact", head: true });

  const { count: habitsCount } = await supabase
    .from("habits")
    .select("*", { count: "exact", head: true });

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <Header />

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Welcome back 🚀
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <StatCard
            title="Gym Workouts"
            value={String(workoutsCount ?? 0)}
          />

          <StatCard
            title="DSA Problems"
            value={String(dsaCount ?? 0)}
          />

          <StatCard
            title="Goals"
            value={String(goalsCount ?? 0)}
          />

          <StatCard
            title="Habits"
            value={String(habitsCount ?? 0)}
          />
        </div>

        <OverviewCard />
      </main>
    </div>
  );
}