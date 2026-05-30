"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Currency = "EUR" | "GBP" | "USD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (eur: number) => string;
}

const rates: Record<Currency, number> = {
  EUR: 1,
  GBP: 0.86,
  USD: 1.08,
};

const symbols: Record<Currency, string> = {
  EUR: "€",
  GBP: "£",
  USD: "$",
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "EUR",
  setCurrency: () => {},
  format: (n) => `€${n.toLocaleString()}`,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("EUR");

  useEffect(() => {
    const saved = localStorage.getItem("currency") as Currency;
    if (saved && ["EUR", "GBP", "USD"].includes(saved)) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("currency", c);
  };

  const format = (eur: number) => {
    const converted = Math.round(eur * rates[currency]);
    return `${symbols[currency]}${converted.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();
  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as Currency)}
      aria-label="Select currency"
      className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
    >
      <option value="EUR">€ EUR</option>
      <option value="GBP">£ GBP</option>
      <option value="USD">$ USD</option>
    </select>
  );
}
