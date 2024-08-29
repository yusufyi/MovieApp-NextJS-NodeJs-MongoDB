// src/utils/movieapi.tsx

import { Movie } from "../types";

export const fetchMovies = async (): Promise<Movie[]> => {
  //with token
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:5001/api/movies/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
};
