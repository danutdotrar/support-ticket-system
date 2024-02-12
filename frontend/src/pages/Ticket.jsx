import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, closeTicket } from "../features/tickets/ticketSlice";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { getNotes, reset as notesReset } from "../features/notes/noteSlice";

const Ticket = () => {
    const { ticket, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.tickets
    );

    const { notes, isLoading: notesIsLoading } = useSelector(
        (state) => state.notes
    );

    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Get ticket id
    const { ticketId } = useParams();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        dispatch(getTicket(ticketId));
        dispatch(getNotes(ticketId));
    }, [isError, message, ticketId]);

    // Close ticket
    const onTicketClose = () => {
        dispatch(closeTicket(ticketId));
        toast.success("Ticket closed");
        navigate("/tickets");
    };

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h3>Something went wrong...</h3>;
    }

    return (
        <div className="ticket-page">
            <header className="ticket-header">
                <BackButton url="/tickets" />
                <h2>
                    Ticket ID: {ticket._id}
                    <span className={`status status-${ticket.status}`}>
                        {ticket.status}
                    </span>
                </h2>
                <h3>
                    Date submitted:{" "}
                    {new Date(ticket.createdAt).toLocaleString("en-uk")}
                </h3>
                <h3>Product: {ticket.product}</h3>
                <hr />
                <div className="ticket-desc">
                    <h3>Description of Issue</h3>
                    <p>{ticket.description}</p>
                </div>
            </header>
            {ticket.status !== "closed" && (
                <button
                    className="btn btn-block btn-danger"
                    onClick={() => onTicketClose()}
                >
                    Close Ticket
                </button>
            )}
        </div>
    );
};

export default Ticket;
