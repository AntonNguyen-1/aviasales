import { CurrencyActionType } from "./currency.action-types";
import { Currency } from "./types/types";

const defaultState = {
  currentCurrency: Currency.RUB,
};

type CurrencyAction = {
  type: CurrencyActionType;
  payload: Currency;
};

export function currencyReducer(state = defaultState, action: CurrencyAction) {
  switch (action.type) {
    case CurrencyActionType.CHANGE_CURRENT_CURRENCY: {
      return { ...state, currentCurrency: action.payload };
    }
    default: {
      return state;
    }
  }
}
