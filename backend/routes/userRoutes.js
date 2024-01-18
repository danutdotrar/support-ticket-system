const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");

// register
router.post("/", registerUser);

// login
router.post("/login", loginUser);

module.exports = router;
