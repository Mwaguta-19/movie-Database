import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import ErrorMessage from "../components/ErrorMessage";
import Pagination from "../components/Pagination";

const MovieHome = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("movie");
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=8b4e4941&s=${search}&page=${page}`
      );
      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      setError("Something went wrong while fetching movies.");
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    getMovies();
  };

  return (
    <div className="bg-black min-h-screen p-4 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Watch your favorite movie here
          </h1>
          <p className="text-sm md:text-base max-w-3xl mx-auto">
            Explore and search a wide variety of movies!
          </p>
        </div>

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSearch={handleSearch}
        />

        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <MovieList movies={movies} />
        )}

        {!error && (
          <Pagination
            currentPage={page}
            onNext={() => setPage((prev) => prev + 1)}
            onPrevious={() => setPage((prev) => Math.max(prev - 1, 1))}
          />
        )}
      </div>
    </div>
  );
};

export default MovieHome;
