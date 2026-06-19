export default function Home() {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">
        Life Dashboard Setup Complete 🚀
      </h1>
    </main>
  );
}