// Initialize express
const express = require("express");

// Initialize app
const app = express();

// Initialize dotenv
const dotenv = require("dotenv").config();

// Define the port
const PORT = process.env.PORT || 8000;

// Listen to a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
