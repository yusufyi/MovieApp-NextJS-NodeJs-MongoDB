const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { router: authRouter, authenticate } = require("./routes/auth");

dotenv.config();

const app = express();

const uri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// // Connect to MongoDB

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//     // Create database and collections
//     const db = client.db("taskmanager"); // Create or switch to 'taskmanager' database
//     const tasksCollection = db.collection("tasks"); // Create or switch to 'tasks' collection
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define Routes
const moviesRoute = require("./routes/movies");
app.use("/api/movies", authenticate, moviesRoute); // Protect movie routes
//app.use("/api/movies", moviesRoute);
app.use("/api/auth", authRouter); // Authentication routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
