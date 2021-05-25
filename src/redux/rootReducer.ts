import { combineReducers } from "redux";
import { ticketReducer } from "./ticket/ticket.reducer";

export const rootReducer = combineReducers({
  ticket: ticketReducer,
});
