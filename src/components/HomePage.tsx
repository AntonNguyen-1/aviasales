import React from "react";
import Filters from "./Filters";
import TicketList from "./TicketList";
import AviasalesLogo from "../assets/logo.svg";
import "./HomePage.style.scss";

export default function HomePage() {
  return (
    <div>
      <img
        id="logo"
        src={AviasalesLogo}
        alt="logo.png"
        width="75"
        height="75"
      />
      <Filters />
      <TicketList />
    </div>
  );
}
