export default function Home() {
  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1>Environment Test</h1>

      <p>
        URL:
        {process.env.NEXT_PUBLIC_SUPABASE_URL
          ? " FOUND"
          : " MISSING"}
      </p>

      <p>
        KEY:
        {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
          ? " FOUND"
          : " MISSING"}
      </p>
    </main>
  );
}