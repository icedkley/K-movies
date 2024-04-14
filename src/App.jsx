import { useEffect, useState } from "react";
import { Movie } from "./Movies";
import { Pages } from "./Pages";
import { Footer } from "./footer";
import { Home } from "./Home";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState("popular"); //for URL varialbe change
  const [displayList, setDisplayList] = useState("Popular"); // for display title of movie list
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [displaySearch, setDisplaySearch] = useState("");
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

  function demoHandleSearch(e) {
    const newSearchTerm = e.target.value;

    if (newSearchTerm !== "") {
      setDisplaySearch(`Search results for: ${newSearchTerm}`);
      setSearchTerm(newSearchTerm);
    } else {
      setDisplaySearch("");
      setSearchTerm("");
    }
  }

  function demoHandleInput(buttonValue) {
    if (buttonValue == "popular") {
      setDisplayList("Popular");
      setMovieList(buttonValue);
    } else if (buttonValue == "now_playing") {
      setMovieList(buttonValue);
      setDisplayList("Playing Now");
    } else if (buttonValue == "top_rated") {
      setMovieList(buttonValue);
      setDisplayList("Top Rated");
    } else if (buttonValue == "upcoming") {
      setMovieList(buttonValue);
      setDisplayList("Upcoming");
    }
  }

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-white">test</h1>
      <Home onButtonClick={demoHandleInput} onInputChange={demoHandleSearch}>
        {" "}
      </Home>

      <h1 className="text-white pl-10 text-4xl font-bold">
        {displaySearch ? displaySearch : displayList}
      </h1>

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
