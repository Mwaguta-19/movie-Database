import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-64 md:w-96 h-auto rounded-md shadow-lg"
        />
        <div className="ml-4">
          <h2 className="text-3xl font-bold">{movie.Title}</h2>
          <p className="text-gray-600">{movie.Released}</p>
          <p className="my-2">{movie.Plot}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Cast:</strong> {movie.Actors}</p>
          <p><strong>Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
