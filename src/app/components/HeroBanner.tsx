export default function HeroBanner({ movie }: any) {
  return (
    <div
      className="h-[400px] w-full bg-cover bg-center rounded-xl flex items-end p-6"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <h1 className="text-4xl font-bold drop-shadow-lg">{movie.title}</h1>
    </div>
  );
}
