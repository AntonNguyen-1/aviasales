import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import mockResponse from "../../data/tickets.json";
import { addItems } from "./ticket.action";

export const fetchTickets =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const data = mockResponse;
    dispatch(addItems(data.tickets));
  };
