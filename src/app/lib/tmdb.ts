const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL!;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY!;

export async function getTrendingMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return res.json();
}
