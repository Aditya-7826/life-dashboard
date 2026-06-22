"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Props = {
  table: string;
  title: string;
  fields: {
    name: string;
    placeholder: string;
  }[];
};

export default function GenericForm({
  table,
  title,
  fields,
}: Props) {
  const router = useRouter();

  const [formData, setFormData] = useState<Record<string, string>>({});
  async function handleSubmit() {
    console.log(formData);
    
    const { error } = await supabase
      .from(table)
      .insert([formData]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Saved!");

    setFormData({});

    router.refresh();
  }

  return (
    <div className="rounded-xl border border-zinc-800 p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>

      {fields.map((field) => (
        <input
          key={field.name}
          placeholder={field.placeholder}
          value={formData[field.name] || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              [field.name]: e.target.value,
            })
          }
          className="w-full p-2 mb-3 bg-zinc-900 rounded"
        />
      ))}

      <button
        onClick={handleSubmit}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}