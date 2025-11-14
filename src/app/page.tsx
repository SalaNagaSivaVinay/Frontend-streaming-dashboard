import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";

const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL!;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY!;

export default async function Home() {
  const trending = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  ).then((res) => res.json());

  return (
    <main className="p-4 space-y-8">
      <HeroBanner movie={trending.results[0]} />
      <MovieRow title="Trending Now" movies={trending.results} />
    </main>
  );
}
