import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { addItems } from "./ticket.action";
import { Currency } from "../currency/types/types";
import { Ticket } from "./types/types";

export const fetchTickets =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const response = await fetch("/src/data/tickets.json");
    const data: { tickets: Ticket[] } = await response.json();
    const tickets = data.tickets.map((t) => {
      return { ...t, currentCurrency: Currency.RUB };
    });
    dispatch(addItems(tickets));
  };
