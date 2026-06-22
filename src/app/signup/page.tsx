"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully!");

    router.push("/login");
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Signup</h1>

      <br />

     <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded text-white"
/>

<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded text-white"
/>

      <br />
      <br />

      <button onClick={handleSignup}>
        Signup
      </button>
    </main>
  );
}