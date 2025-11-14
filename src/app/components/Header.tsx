"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 sticky top-0 z-10">
      <h1 className="text-2xl font-bold">🎬 StreamX</h1>
      <nav className="space-x-6">
        <a href="/" className="hover:text-red-500">Home</a>
        <a href="/movies" className="hover:text-red-500">Movies</a>
      </nav>
    </header>
  );
}
