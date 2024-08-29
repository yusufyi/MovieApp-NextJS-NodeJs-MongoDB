const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Generate a JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    "your_jwt_secret",
    { expiresIn: "1h" }
  );
};

// Register User
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Middleware to protect routes
const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }

  jwt.verify(token, "your_jwt_secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = { router, authenticate };
