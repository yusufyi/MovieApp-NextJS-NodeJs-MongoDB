const mongoose = require("mongoose");

// Define the schema for tasks
const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { collection: "tasks" }
); // Specify the collection name

// Create a model from the schema
const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
