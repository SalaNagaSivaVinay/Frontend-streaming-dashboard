"use client";

import Link from "next/link";

export default function MovieCard({ movie }: any) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="w-[150px] cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="rounded-xl hover:scale-105 transition"
        />
        <p className="mt-2 text-sm">{movie.title}</p>
      </div>
    </Link>
  );
}
