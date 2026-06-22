import DeleteWorkoutButton from "@/components/DeleteWorkoutButton";
import DashboardLayout from "@/components/DashboardLayout";
import AddWorkoutForm from "@/components/AddWorkoutForm";
import { supabase } from "@/lib/supabase";

export default async function GymPage() {
  const { data: workouts } = await supabase
    .from("workouts")
    .select("*")
    .order("id", { ascending: false });

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Gym Tracker
      </h1>

      <AddWorkoutForm />

      <div className="space-y-4">
        {workouts?.map((workout) => (
          <div
            key={workout.id}
            className="rounded-xl border border-zinc-800 p-4"
          >
            <h2 className="text-xl font-bold">
              {workout.exercise}
            </h2>

            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weight: {workout.weight} kg</p>
            <DeleteWorkoutButton
  id={workout.id}
/>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}