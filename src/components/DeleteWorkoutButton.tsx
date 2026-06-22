"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
};

export default function DeleteWorkoutButton({
  id,
}: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm(
      "Delete this workout?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("workouts")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="mt-3 px-3 py-1 rounded bg-red-600 text-white"
    >
      Delete
    </button>
  );
}