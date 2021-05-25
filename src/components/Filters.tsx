import React from "react";
import StopsFilter from "./StopsFilter";
import CurrencyFilter from "./CurrencyFilter";
import "./Filters.style.scss";

export default function Filters() {
  return (
    <div>
      <CurrencyFilter />
      <StopsFilter />
    </div>
  );
}
