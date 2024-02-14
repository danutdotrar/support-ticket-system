// Initialize express
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const path = require("path");
const { connectDB } = require("./config/db");

// Connect to DB
connectDB();

// Initialize app
const app = express();

// Allows us to send raw json
app.use(express.json());
// Accept the urlencoded form
app.use(express.urlencoded({ extended: false }));

// Initialize dotenv
const dotenv = require("dotenv").config();

// Define the port
const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

// Serve Frontend
if (process.env.NODE_ENV === "production") {
    // Set build folder
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    //
    app.get("*", (req, res) =>
        res.sendFile(__dirname, "../", "frontend", "build", "index.html")
    );
} else {
    // Create a GET route with express
    app.get("/", (req, res) => {
        res.status(200).json({ message: "Welcome to the support desk API" });
    });
}

app.use(errorHandler);

// Listen to a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
