import { CurrencyActionType } from "./currency.action-types";
import { CurrencyInfo } from "./types/types";

export function updateCurrencyInfo(currencyInfo: CurrencyInfo) {
  return {
    type: CurrencyActionType.UPDATE_CURRENCY_INFO,
    payload: currencyInfo,
  };
}
