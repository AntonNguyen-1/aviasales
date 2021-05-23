import React from "react";
import ConnectionFilter from "./ConnectionFilter";
import CurrencyFilter from "./CurrencyFilter";

export default function Filters() {
  return (
    <div>
      <CurrencyFilter />
      <ConnectionFilter />
    </div>
  );
}
