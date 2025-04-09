// MovieList.jsx
import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies = [] }) => {  // Default movies to an empty array
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <p>No movies found. Try a different search.</p> // Display a message if no movies found
      )}
    </div>
  );
};

export default MovieList;
