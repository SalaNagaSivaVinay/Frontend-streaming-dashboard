interface MoviePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetails({ params }: MoviePageProps) {
  // 🔥 FIX: params must be awaited
  const { id } = await params;

  const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!BASE_URL || !API_KEY) {
    console.error("Missing environment variables");
    return <h1>Missing API configuration</h1>;
  }

  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

  if (!res.ok) {
    console.error("Movie details fetch failed");
    return <h1>Failed to load movie details</h1>;
  }

  const movie = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ borderRadius: "10px", width: "300px" }}
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
    </div>
  );
}
