export function Home({ onButtonClick }) {
  return (
    <div className=" flex flex-col items-center justify-center w-full ">
      <h1 className="text-slate-50 sm:text-2xl md:text-4xl lg:text-6xl p-5 font-semibold">
        K-Movies
      </h1>

      <div className="w-full  flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 w-1/2"
        />
        <button className="bg-sky-500 p-2 hover:bg-sky-700">Search</button>
      </div>
      <div className="text-white flex flex-col sm:flex-row md:flex-row lg:flex-row p-5 gap-3  w-3/4 justify-center ">
        <button
          className="border px-5 py-1 hover:bg-slate-500 "
          onClick={(value) => onButtonClick("popular")}
        >
          Popular
        </button>
        <button
          className="border px-5 py-1 hover:bg-slate-500"
          onClick={(value) => onButtonClick("now_playing")}
        >
          Playing Now
        </button>
        <button
          className="border px-5 py-1 hover:bg-slate-500"
          onClick={(value) => onButtonClick("top_rated")}
        >
          Top Rated
        </button>
        <button
          className="border px-5 py-1 hover:bg-slate-500"
          onClick={(value) => onButtonClick("upcoming")}
        >
          Upcoming
        </button>
      </div>
    </div>
  );
}
