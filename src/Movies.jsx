export function Movie({ movie }) {
  return (
    <div className="flex flex-col  justify-center m-1 text-slate-400 hover:scale-110 transition-all">
      <h2 className="text-xl overflow-hidden max-h-8 bold font-serif my-2 ">
        {movie.title}
      </h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}
