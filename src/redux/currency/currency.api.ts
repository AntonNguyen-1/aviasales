import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Currency } from "./types/types";
import { updateCurrencyInfo } from "./currency.action";

export const fetchCurrencyRates =
  (currency: Currency): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${
        import.meta.env.VITE_EXCHANGE_RATE_API_KEY
      }/latest/${currency}`
    );
    const ratesData = await response.json();
    if (ratesData.result === "error") return;
    dispatch(
      updateCurrencyInfo({
        currentCurrency: currency,
        conversation_rate: ratesData.conversion_rates[Currency.RUB],
      })
    );
  };
