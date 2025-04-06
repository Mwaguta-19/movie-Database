import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './searchBar';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Pagination from './Pagination';
import ErrorMessage from './ErrorMessage';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMovies = async (searchTerm, page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=7110a383260a3c5e8d9bce9ef8276499`
      );
      setMovies(response.data.Search || []);
      setError(response.data.Error || null);
    } catch (err) {
      setError("An error occurred while fetching the movies.");
    }
    setLoading(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm, currentPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchMovies(searchTerm, page);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <SearchBar
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          handleSearchSubmit={handleSearchSubmit}
        />
        <ErrorMessage message={error} />
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            <MovieList movies={movies} />
            <Pagination
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </>
        )}
      </div>
      <Routes>
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;