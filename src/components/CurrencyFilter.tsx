import React, { useState } from "react";
import { Currency } from "../redux/currency/types/types";
import './CurrencyFilter.style.scss';

export default function CurrencyFilter() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(Currency.RUB);

  const handleOnClick = (currency: Currency) => {
    setSelectedCurrency(currency);
  }

  return (
    <div className="currency-filter-container">
      <h3 className="filter-title">Валюта</h3>
      <div className="button-wrapper">
        <button onClick={() => handleOnClick(Currency.RUB)} className={`${selectedCurrency === Currency.RUB ? 'selected ' : ''}currency-btn`}>RUB</button>
        <button onClick={() => handleOnClick(Currency.USD)} className={`${selectedCurrency === Currency.USD ? 'selected ' : ''}currency-btn`}>USD</button>
        <button onClick={() => handleOnClick(Currency.EUR)} className={`${selectedCurrency === Currency.EUR ? 'selected ' : ''}currency-btn`}>EUR</button>
      </div>
    </div>
  );
}
