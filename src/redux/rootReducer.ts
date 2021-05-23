import { combineReducers } from "redux";
import { currencyReducer } from "./currency/currency.reducer";
import { ticketReducer } from "./ticket/ticket.reducer";

export const rootReducer = combineReducers({
  currency: currencyReducer,
  ticket: ticketReducer,
});
