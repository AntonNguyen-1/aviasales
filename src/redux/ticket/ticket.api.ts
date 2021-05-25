import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import mockResponse from "../../data/tickets.json";
import { addItems } from "./ticket.action";
import { Currency } from "../currency/types/types";

export const fetchTickets =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const data = mockResponse;
    const tickets = data.tickets.map((t) => {
      return { ...t, currentCurrency: Currency.RUB };
    });
    dispatch(addItems(tickets));
  };
