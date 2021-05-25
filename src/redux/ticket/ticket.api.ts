import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import mockResponse from "../../data/tickets.json";
import { addItems, updateItems } from "./ticket.action";
import { RatesData, Currency } from "./types/types";

export const fetchTickets =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const data = mockResponse;
    data.tickets.map((t) => {
      return { ...t, currentCurrency: Currency.RUB };
    });
    dispatch(addItems(data.tickets));
  };

export const updateTicketsPriceByCurrency =
  (currency: Currency): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${
        import.meta.env.VITE_EXCHANGE_RATE_API_KEY
      }/latest/${currency}`
    );
    const ratesData: RatesData = await response.json();
    if (ratesData.result === "error") return;
    const data = mockResponse;
    const tickets = data.tickets.map((t) => {
      return {
        ...t,
        price: Number(
          (t.price / ratesData.conversion_rates[Currency.RUB]).toFixed(1)
        ),
        currentCurrency: currency,
      };
    });
    dispatch(updateItems(tickets));
  };
