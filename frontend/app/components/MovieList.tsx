// src/components/MovieList.tsx
"use client";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../utils/movieapi";
import { Movie } from "../types";
import { redirect } from "next/navigation";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("token")) redirect("/login");
    const getMovies = async () => {
      try {
        const movies = await fetchMovies();
        setMovies(movies);
        console.log(movies);
      } catch (err) {
        setError("Failed to fetch movies");
        localStorage.removeItem("token");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <div
          key={movie._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">{movie.title}</h2>
            <p>{movie.plot}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
