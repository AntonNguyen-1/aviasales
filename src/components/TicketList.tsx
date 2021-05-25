import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchTickets } from "../redux/ticket/ticket.api";
import TicketItem from "./TicketItem";

export default function TicketList() {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.ticket);

  useEffect(() => {
    if (tickets.length) return;
    dispatch(fetchTickets());
  }, []);

  return (
    <ul className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  );
}
