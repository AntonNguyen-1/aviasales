import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Currency } from "../redux/currency/types/types";
import { RootState } from "../redux/store";
import { fetchCurrencyRates } from "../redux/currency/currency.api";
import "./CurrencyFilter.style.scss";

export default function CurrencyFilter() {
  const dispatch = useDispatch();
  const currency = useSelector(
    (state: RootState) => state.currency.currentCurrency
  );

  const handleOnClick = (currency: Currency) => {
    dispatch(fetchCurrencyRates(currency));
  };

  return (
    <div className="currency-filter-container">
      <h3 className="filter-title">Валюта</h3>
      <div className="button-wrapper">
        <button
          onClick={() => handleOnClick(Currency.RUB)}
          className={`${
            currency === Currency.RUB ? "selected " : ""
          }currency-btn`}
          disabled={currency === Currency.RUB}
        >
          RUB
        </button>
        <button
          onClick={() => handleOnClick(Currency.USD)}
          className={`${
            currency === Currency.USD ? "selected " : ""
          }currency-btn`}
          disabled={currency === Currency.USD}
        >
          USD
        </button>
        <button
          onClick={() => handleOnClick(Currency.EUR)}
          className={`${
            currency === Currency.EUR ? "selected " : ""
          }currency-btn`}
          disabled={currency === Currency.EUR}
        >
          EUR
        </button>
      </div>
    </div>
  );
}
