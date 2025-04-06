import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/default-poster.jpg'}
        alt={movie.Title}
        className="w-full h-60 object-cover rounded-md"
      />
      <h3 className="mt-2 text-xl font-semibold">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="mt-2 inline-block text-blue-500"
      >
        More Info
      </Link>
    </div>
  );
};

export default MovieItem;