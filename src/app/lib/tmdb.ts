export async function getTrendingMovies() {
  const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!BASE_URL || !API_KEY) {
    throw new Error("Missing TMDB API environment variables");
  }

  const res = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return res.json();
}
