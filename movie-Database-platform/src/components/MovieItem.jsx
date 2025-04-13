import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="mt-4 text-lg font-semibold">{movie.Title}</h2>
    </div>
  );
};

export default MovieItem;
