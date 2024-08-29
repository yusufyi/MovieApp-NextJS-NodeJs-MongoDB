const mongoose = require("mongoose");

// Define the schema for movies
const MovieSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    year: Number,
    rated: String,
    released: String,
    runtime: String,
    genres: [String],
    directors: [String],
    actors: [String],
    plot: String,
    language: String,
    country: String,
    awards: String,
    poster: String,
    ratings: [
      {
        source: String,
        value: String,
      },
    ],
    metascore: Number,
    imdb: {
      rating: Number,
      votes: Number,
      id: String,
    },
    type: String,
    dvd: String,
    boxOffice: String,
    production: String,
    website: String,
  },
  { collection: "movies" }
); // Specify the collection name

// Create a model from the schema
const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
