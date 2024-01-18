// Initialize express
const express = require("express");

// Initialize app
const app = express();

// Initialize dotenv
const dotenv = require("dotenv").config();

// Define the port
const PORT = process.env.PORT || 8000;

// Create a GET route with express
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the support desk API" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// Listen to a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
