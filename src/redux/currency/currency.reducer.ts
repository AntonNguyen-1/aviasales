import { CurrencyActionType } from "./currency.action-types";
import { Currency, CurrencyInfo } from "./types/types";

type CurrencyAction = {
  type: CurrencyActionType;
  payload: CurrencyInfo;
};

const defaultState = {
  currentCurrency: Currency.RUB,
  conversation_rate: 1,
};

export function currencyReducer(state = defaultState, action: CurrencyAction) {
  switch (action.type) {
    case CurrencyActionType.UPDATE_CURRENCY_INFO: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
