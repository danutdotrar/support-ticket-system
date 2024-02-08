import axios from "axios";

const API_URL = "/api/tickets/";

// Create new Ticket
const createTicket = async (ticketData, token) => {
    // The token needs to be in the headers in Authorization field
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(API_URL, ticketData, config);

    return response.data;
};

const ticketService = {
    createTicket,
};

export default ticketService;
