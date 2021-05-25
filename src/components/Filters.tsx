import React from "react";
import StopsFilter from "./StopsFilter";
import CurrencyFilter from "./CurrencyFilter";

export default function Filters() {
  return (
    <div>
      <CurrencyFilter />
      <StopsFilter />
    </div>
  );
}
