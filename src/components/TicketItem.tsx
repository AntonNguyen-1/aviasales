import React from "react";
import { Ticket } from "../redux/ticket/types/types";

interface TicketItemProps {
  ticket: Ticket;
}

export default function TicketItem({ ticket }: TicketItemProps) {
  const changeWordEnding = (stops: number) => {
    switch (stops) {
      case 1: {
        return "1 пересадка";
      }
      case 2:
      case 3: {
        return `${stops} пересадки`;
      }
      default: {
        return "3+ пересадки";
      }
    }
  };

  return (
    <li className="ticket-list-item">
      <div className="layout-position">
        <img
          className="airline-logo"
          src="/src/assets/turkish-airline-logo.png"
          alt="turkish-airline-logo"
        />
        <button className="btn btn-buy">Купить за {ticket.price}</button>
      </div>
      <div className="layout-position">
        <div className="dp-country-info">
          <p className="time">{ticket.departure_time}</p>
          <p className="country-name">
            {ticket.origin}, {ticket.origin_name}
          </p>
          <p className="date">{ticket.departure_date}</p>
        </div>
        <div className="ar-country-info">
          <p className="time">{ticket.arrival_time}</p>
          <p className="country-name">
            {ticket.destination}, {ticket.destination_name}
          </p>
          <p className="date">{ticket.arrival_date}</p>
        </div>
        <p className="stops">
          {ticket.stops ? changeWordEnding(ticket.stops) : "без пересадок"}
        </p>
      </div>
    </li>
  );
}
