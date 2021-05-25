import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Currency } from "../redux/ticket/types/types";
import { updateTicketsPriceByCurrency } from "../redux/ticket/ticket.api";
import "./CurrencyFilter.style.scss";
import { RootState } from "../redux/store";

export default function CurrencyFilter() {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.ticket);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    Currency.RUB
  );

  const handleOnClick = (currency: Currency) => {
    setSelectedCurrency(currency);
    dispatch(updateTicketsPriceByCurrency(currency, tickets));
  };

  return (
    <div className="currency-filter-container">
      <h3 className="filter-title">Валюта</h3>
      <div className="button-wrapper">
        <button
          onClick={() => handleOnClick(Currency.RUB)}
          className={`${
            selectedCurrency === Currency.RUB ? "selected " : ""
          }currency-btn`}
          disabled={selectedCurrency === Currency.RUB}
        >
          RUB
        </button>
        <button
          onClick={() => handleOnClick(Currency.USD)}
          className={`${
            selectedCurrency === Currency.USD ? "selected " : ""
          }currency-btn`}
          disabled={selectedCurrency === Currency.USD}
        >
          USD
        </button>
        <button
          onClick={() => handleOnClick(Currency.EUR)}
          className={`${
            selectedCurrency === Currency.EUR ? "selected " : ""
          }currency-btn`}
          disabled={selectedCurrency === Currency.EUR}
        >
          EUR
        </button>
      </div>
    </div>
  );
}
