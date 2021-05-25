export enum Currency {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}

export interface CurrencyInfo {
  currentCurrency: Currency;
  conversation_rate: number;
}
