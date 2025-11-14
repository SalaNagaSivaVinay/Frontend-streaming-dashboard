"use client";

import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }: any) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
