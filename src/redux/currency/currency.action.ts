import { CurrencyActionType } from "./currency.action-types";
import { Currency } from "./types/types";

export function changeCurrency(currency: Currency) {
  return {
    type: CurrencyActionType.CHANGE_CURRENT_CURRENCY,
    payload: currency,
  };
}
