import { Home } from "./Home";
import { url, options } from "./API";
import { useEffect, useState } from "react";
import { Movie } from "./Movies";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className="">
      <Home></Home>

      <h1 className="text-white pl-10 text-4xl font-bold">Popular</h1>

      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-10  ">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
