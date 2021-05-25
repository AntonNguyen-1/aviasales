import React, { useState } from "react";
import { Ticket } from "../redux/ticket/types/types";
import { Currency } from "../redux/currency/types/types";
import ModalBuyWindow from "./ModalBuyWindow";

interface TicketItemProps {
  ticket: Ticket;
  currentCurrency: Currency;
}

export default function TicketItem({
  ticket,
  currentCurrency,
}: TicketItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const currencyIcon = (currency = Currency.RUB) => {
    switch (currency) {
      case Currency.RUB: {
        return "\u20BD";
      }
      case Currency.USD: {
        return "\u0024";
      }
      case Currency.EUR: {
        return "\u20AC";
      }
      default: {
        return "";
      }
    }
  };

  const handleOnClick = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <li className="ticket-list-item">
      {isModalOpen && <ModalBuyWindow handleOnClick={handleOnClick} />}
      <div className="layout-position">
        <img
          className="airline-logo"
          src="/src/assets/turkish-airline-logo.png"
          alt="turkish-airline-logo"
        />
        <button onClick={() => handleOnClick()} className="btn btn-buy">
          Купить за {ticket.price + currencyIcon(currentCurrency)}
        </button>
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
