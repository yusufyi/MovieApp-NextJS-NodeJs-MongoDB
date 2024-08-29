const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find().limit(10);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
