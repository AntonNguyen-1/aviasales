import { combineReducers } from "redux";
import { ticketReducer } from "./ticket/ticket.reducer";
import { currencyReducer } from "./currency/currency.reducer";
import { stopsFilterReducer } from "./stopsFilter/stopsFilter.reducer";

export const rootReducer = combineReducers({
  stops: stopsFilterReducer,
  currency: currencyReducer,
  tickets: ticketReducer,
});
