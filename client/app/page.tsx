import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <header className="mb-8 flex items-center justify-between">
        <nav className="space-x-4 text-sm">
          <Link
            href="/register"
            className="rounded bg-blue-500 px-3 py-2 text-white"
          >
            Create account
          </Link>
          <Link
            href="/about"
            className="rounded bg-blue-500 px-3 py-2 text-white"
          >
            About
          </Link>
        </nav>
      </header>
    </main>
  );
}
