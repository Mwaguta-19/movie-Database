import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

   // Fetch movie data based on search query
  useEffect(() => {
    if (!query) return; // If there's no query, don't fetch

    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=tt3896198&apikey=6bbdde88`
        );
        if (response.data.Response === "True") {
          setMovies(response.data.Search); // Store movie results
        } else {
          setMovies([]);
          setError(response.data.Error); // Handle errors (no results found)
        }
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
      }
    };

    fetchMovies();
  }, [query]); // Trigger fetch whenever the query changes

  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <div className="container mx-auto p-4">
          <SearchBar searchTerm={query} setQuery={setQuery} />
          {error && <ErrorMessage message={error} />}
          {/* Movie List will be displayed below the search bar */}
          <MovieList movies={movies} />
        </div>
      </div>
    </Router>
  );
};

export default App;