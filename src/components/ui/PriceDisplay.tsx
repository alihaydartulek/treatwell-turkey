"use client";

import { useCurrency } from "@/components/ui/CurrencyProvider";

type Props = {
  eurAmount: number;
  className?: string;
  /** If true, show as strikethrough (home country price) */
  strikethrough?: boolean;
};

/**
 * Client island: renders a price in the user's selected currency.
 * Use in server components to display reactive, converted prices.
 */
export default function PriceDisplay({ eurAmount, className = "", strikethrough = false }: Props) {
  const { format } = useCurrency();
  const formatted = format(eurAmount);

  if (strikethrough) {
    return <span className={`line-through text-slate-400 ${className}`}>{formatted}</span>;
  }
  return <span className={className}>{formatted}</span>;
}
