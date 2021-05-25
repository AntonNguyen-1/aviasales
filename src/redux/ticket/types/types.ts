export interface Ticket {
  id: number;
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
  currentCurrency?: Currency;
}

export enum Currency {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}

export interface RatesError {
  result: string;
  "error-type": string;
}

export interface StopsFilters {
  "non-stop": boolean;
  "one-transfer": boolean;
  "two-transfers": boolean;
  "three-transfers": boolean;
}

export interface RatesData {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: ConversionRates;
}

interface ConversionRates {
  USD: number;
  AED: number;
  AFN: number;
  ALL: number;
  AMD: number;
  ANG: number;
  AOA: number;
  ARS: number;
  AUD: number;
  AWG: number;
  AZN: number;
  BAM: number;
  BBD: number;
  BDT: number;
  BGN: number;
  BHD: number;
  BIF: number;
  BMD: number;
  BND: number;
  BOB: number;
  BRL: number;
  BSD: number;
  BTN: number;
  BWP: number;
  BYN: number;
  BZD: number;
  CAD: number;
  CDF: number;
  CHF: number;
  CLP: number;
  CNY: number;
  COP: number;
  CRC: number;
  CUC: number;
  CUP: number;
  CVE: number;
  CZK: number;
  DJF: number;
  DKK: number;
  DOP: number;
  DZD: number;
  EGP: number;
  ERN: number;
  ETB: number;
  EUR: number;
  FJD: number;
  FKP: number;
  FOK: number;
  GBP: number;
  GEL: number;
  GGP: number;
  GHS: number;
  GIP: number;
  GMD: number;
  GNF: number;
  GTQ: number;
  GYD: number;
  HKD: number;
  HNL: number;
  HRK: number;
  HTG: number;
  HUF: number;
  IDR: number;
  ILS: number;
  IMP: number;
  INR: number;
  IQD: number;
  IRR: number;
  ISK: number;
  JMD: number;
  JOD: number;
  JPY: number;
  KES: number;
  KGS: number;
  KHR: number;
  KID: number;
  KMF: number;
  KRW: number;
  KWD: number;
  KYD: number;
  KZT: number;
  LAK: number;
  LBP: number;
  LKR: number;
  LRD: number;
  LSL: number;
  LYD: number;
  MAD: number;
  MDL: number;
  MGA: number;
  MKD: number;
  MMK: number;
  MNT: number;
  MOP: number;
  MRU: number;
  MUR: number;
  MVR: number;
  MWK: number;
  MXN: number;
  MYR: number;
  MZN: number;
  NAD: number;
  NGN: number;
  NIO: number;
  NOK: number;
  NPR: number;
  NZD: number;
  OMR: number;
  PAB: number;
  PEN: number;
  PGK: number;
  PHP: number;
  PKR: number;
  PLN: number;
  PYG: number;
  QAR: number;
  RON: number;
  RSD: number;
  RUB: number;
  RWF: number;
  SAR: number;
  SBD: number;
  SCR: number;
  SDG: number;
  SEK: number;
  SGD: number;
  SHP: number;
  SLL: number;
  SOS: number;
  SRD: number;
  SSP: number;
  STN: number;
  SYP: number;
  SZL: number;
  THB: number;
  TJS: number;
  TMT: number;
  TND: number;
  TOP: number;
  TRY: number;
  TTD: number;
  TVD: number;
  TWD: number;
  TZS: number;
  UAH: number;
  UGX: number;
  UYU: number;
  UZS: number;
  VES: number;
  VND: number;
  VUV: number;
  WST: number;
  XAF: number;
  XCD: number;
  XDR: number;
  XOF: number;
  XPF: number;
  YER: number;
  ZAR: number;
  ZMW: number;
}
