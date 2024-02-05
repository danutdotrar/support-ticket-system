const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @description Get current tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
    const ticket = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name,
    };

    res.status(200).json({ message: "get tickets" });
});

// @description Create new tickets
// @route POST /api/tickets/
// @access Private
const createTicket = asyncHandler(async (req, res) => {
    const newTicket = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name,
    };

    res.status(200).json({ message: "Create tickets" });
});

module.exports = { getTickets, createTicket };
