import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchTickets } from "../redux/ticket/ticket.api";
import TicketItem from "./TicketItem";

export default function TicketList() {
  const dispatch = useDispatch();

  const currency = useSelector((state: RootState) => state.currency);
  const tickets = useSelector((state: RootState) => {
    const selectedStops = state.stops.selectedStops;
    return state.tickets
      .filter((t) => selectedStops.includes(t.stops))
      .map((t) => {
        return {
          ...t,
          price: Number((t.price / currency.conversation_rate).toFixed(1)),
        };
      });
  });

  useEffect(() => {
    if (tickets.length) return;
    dispatch(fetchTickets());
  }, []);

  return (
    <ul className="ticket-list">
      {tickets
        .sort((a, b) => b.price - a.price)
        .map((ticket) => (
          <TicketItem
            key={ticket.id}
            ticket={ticket}
            currentCurrency={currency.currentCurrency}
          />
        ))}
    </ul>
  );
}
