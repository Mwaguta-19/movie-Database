// MovieItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-auto rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{movie.Title}</h3>
      <p className="text-gray-400">{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="text-red-500 mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieItem;
