"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AddWorkoutForm() {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    console.log("Submitting:", {
      exercise,
      sets,
      reps,
      weight,
    });

    const { data, error } = await supabase
      .from("workouts")
      .insert([
        {
          exercise: exercise,
          sets: Number(sets),
          reps: Number(reps),
          weight: Number(weight),
        },
      ])
      .select();

    console.log("Inserted Data:", data);
    console.log("Error:", error);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Workout saved!");

setExercise("");
setSets("");
setReps("");
setWeight("");

router.refresh();
  }

  return (
    <div className="rounded-xl border border-zinc-800 p-4 mb-8">
      <h2 className="text-xl font-bold mb-4">
        Add Workout
      </h2>

      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Exercise"
        className="w-full p-2 mb-3 bg-zinc-900 rounded"
      />

      <input
        type="number"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        placeholder="Sets"
        className="w-full p-2 mb-3 bg-zinc-900 rounded"
      />

      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        placeholder="Reps"
        className="w-full p-2 mb-3 bg-zinc-900 rounded"
      />

      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight"
        className="w-full p-2 mb-3 bg-zinc-900 rounded"
      />

      <button
        onClick={handleSubmit}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Save Workout
      </button>
    </div>
  );
}