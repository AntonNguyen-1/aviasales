import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import mockResponse from "../../data/tickets.json";
import { addItems, updateItems } from "./ticket.action";
import { RatesData, Currency, StopsFilters, Ticket } from "./types/types";

export const fetchTickets =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const data = mockResponse;
    const tickets = data.tickets.map((t) => {
      return { ...t, currentCurrency: Currency.RUB };
    });
    dispatch(addItems(tickets));
  };

export const updateTicketsPriceByCurrency =
  (currency: Currency, prevTickets: Ticket[]): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${
        import.meta.env.VITE_EXCHANGE_RATE_API_KEY
      }/latest/${currency}`
    );
    const ratesData: RatesData = await response.json();
    if (ratesData.result === "error") return;
    const data = mockResponse;
    const tickets = data.tickets
      .map((t) => {
        return {
          ...t,
          price: Number(
            (t.price / ratesData.conversion_rates[Currency.RUB]).toFixed(1)
          ),
          currentCurrency: currency,
        };
      })
      .filter((t) => prevTickets.some((prevTicket) => prevTicket.id === t.id));
    dispatch(updateItems(tickets));
  };

export const fetchTicketsByFilters =
  (filters: StopsFilters): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    const data = mockResponse;
    const selectedStops: number[] = Object.keys(filters)
      .map((f) => {
        if (!filters[f as keyof StopsFilters]) return -1;
        switch (f) {
          case "non-stop": {
            return 0;
          }
          case "one-transfer": {
            return 1;
          }
          case "two-transfers": {
            return 2;
          }
          case "three-transfers": {
            return 3;
          }
          default: {
            return -1;
          }
        }
      })
      .filter((s) => s >= 0);
    if (selectedStops.length) {
      const tickets = data.tickets.filter((t) =>
        selectedStops.includes(t.stops)
      );
      dispatch(updateItems(tickets));
      return;
    }
    dispatch(updateItems(data.tickets));
  };
