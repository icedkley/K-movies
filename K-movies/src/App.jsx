import { Home } from "./Home";
import { useEffect, useState } from "react";
import { Movie } from "./Movies";
import { Pages } from "./Pages";
import { Footer } from "./footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState("popular");
  const [displayList, setDisplayList] = useState("Popular");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const pagesArr = Array.from({ length: 10 });

  const url = searchTerm
    ? `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&language=en-US&page=${page}`
    : `https://api.themoviedb.org/3/movie/${movieList}?language=en-US&page=${page}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTY4MWJiMjYwMjcyZjEyN2IzNDM2MWI0ZWYzMTNmZCIsInN1YiI6IjY2MTBmMGNiYjMzOTAzMDE3YjZlN2E5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rIeIpp2tUXAihPJcueIbr0HLZda5PYiHkIxNDcUdr6Y",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error("error:" + err));
  }, [page, movieList, searchTerm]);

  function handlePageClick(i) {
    setPage(i);
  }

  function handleMovieListOnClick(list) {
    setPage(1);
    setMovieList(list);

    if (list == "popular") {
      setDisplayList("Popular");
    } else if (list == "now_playing") {
      setDisplayList("Playing Now");
    } else if (list == "upcoming") {
      setDisplayList("Upcoming");
    } else if (list == "top_rated") {
      setDisplayList("Top Rated");
    }
  }

  return (
    <div className="flex flex-col items-center ">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
      />
      <Home onButtonClick={handleMovieListOnClick}></Home>

      <h1 className="text-white pl-10 text-4xl font-bold">{displayList}</h1>

      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-10  ">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>

      <div>
        {pagesArr.map((_, index) => (
          <Pages
            key={index}
            page={index + 1}
            handleClick={() => handlePageClick(index + 1)}
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
