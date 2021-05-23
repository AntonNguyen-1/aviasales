import React from "react";

export default function CurrencyFilter() {
  return (
    <div className="currency-filter-container">
      <h3 className="filter-title">Валюта</h3>
      <div className="button-wrapper">
        <button className="btn btn-RUB">RUB</button>
        <button className="btn btn-USD">USD</button>
        <button className="btn btn-EUR">EUR</button>
      </div>
    </div>
  );
}
