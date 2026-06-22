"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

type Props = {
  table: string;
};

export default function GenericList({
  table,
}: Props) {
  const [data, setData] = useState<any[]>([]);

  async function loadData() {
    const { data } = await supabase
      .from(table)
      .select("*")
      .order("id", {
        ascending: false,
      });

    setData(data || []);
  }

  async function handleDelete(id: number) {
    const confirmed = confirm(
      "Delete this record?"
    );

    if (!confirmed) return;

    await supabase
      .from(table)
      .delete()
      .eq("id", id);

    loadData();
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="space-y-4 mt-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="border border-zinc-800 rounded-xl p-4"
        >
          <pre>
            {JSON.stringify(
              item,
              null,
              2
            )}
          </pre>

          <button
            onClick={() =>
              handleDelete(item.id)
            }
            className="mt-3 px-3 py-2 bg-red-600 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}