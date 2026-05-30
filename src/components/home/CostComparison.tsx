"use client";

import Link from "next/link";
import { ArrowRight, TrendingDown } from "lucide-react";
import { useCurrency } from "@/components/ui/CurrencyProvider";

const comparisons = [
  {
    treatment: "Hair Transplant (3000 grafts)",
    uk: 8000,
    de: 9500,
    turkey: 1500,
  },
  {
    treatment: "Dental Veneers (10 teeth)",
    uk: 7500,
    de: 8000,
    turkey: 2000,
  },
  {
    treatment: "Gastric Sleeve",
    uk: 12000,
    de: 13000,
    turkey: 3800,
  },
  {
    treatment: "Rhinoplasty",
    uk: 8500,
    de: 9000,
    turkey: 2800,
  },
  {
    treatment: "LASIK (both eyes)",
    uk: 3500,
    de: 3800,
    turkey: 900,
  },
];

function savingPct(home: number, turkey: number) {
  return Math.round(((home - turkey) / home) * 100);
}

export default function CostComparison() {
  const { format } = useCurrency();
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
            Real Price Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            How Much Can You Save?
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Prices in Turkey include the procedure, consultation, and usually
            transfers. Compare honestly against UK &amp; German private costs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-slate-500 font-medium">
                  Treatment
                </th>
                <th className="text-right py-3 px-4 text-slate-500 font-medium">
                  🇬🇧 UK
                </th>
                <th className="text-right py-3 px-4 text-slate-500 font-medium">
                  🇩🇪 Germany
                </th>
                <th className="text-right py-3 px-4 text-teal-700 font-semibold">
                  🇹🇷 Turkey
                </th>
                <th className="text-right py-3 px-4 text-green-600 font-semibold">
                  You Save
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr
                  key={row.treatment}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-4 font-medium text-slate-800">
                    {row.treatment}
                  </td>
                  <td className="py-4 px-4 text-right text-slate-500">
                    £{row.uk.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right text-slate-500">
                    €{row.de.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right font-bold text-teal-700">
                    {format(row.turkey)}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="inline-flex items-center gap-1 font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs">
                      <TrendingDown size={12} />
                      {savingPct(row.uk, row.turkey)}% less
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 mt-3 px-4">
          * Prices are approximate averages. Actual quotes depend on individual
          assessment. Turkey prices shown in EUR for clarity.
        </p>

        <div className="mt-10 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">
            Want to know your exact saving?
          </h3>
          <p className="text-teal-100 mb-6">
            Use our free cost calculator — enter your treatment and home country
            to get a personalised estimate in 30 seconds.
          </p>
          <Link
            href="/cost-calculator"
            className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
          >
            Open Cost Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
