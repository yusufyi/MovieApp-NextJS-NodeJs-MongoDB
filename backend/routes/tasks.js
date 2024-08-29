const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// Create a task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().limit(1);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
