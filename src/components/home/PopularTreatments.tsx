"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { treatments } from "@/lib/treatments";
import { useCurrency } from "@/components/ui/CurrencyProvider";

const featuredSlugs = [
  "hair-transplant",
  "dental",
  "bariatric",
  "cosmetic",
  "eye-surgery",
  "ivf",
];

const savingLabels: Record<string, string> = {
  "hair-transplant": "Save up to £6,500",
  "dental":          "Save up to £4,000",
  "bariatric":       "Save up to £9,000",
  "cosmetic":        "Save up to £5,500",
  "eye-surgery":     "Save up to £2,500",
  "ivf":             "Save up to £8,000",
};

const popularSlugs = new Set(["hair-transplant", "dental"]);

export default function PopularTreatments() {
  const { format } = useCurrency();

  const featured = featuredSlugs
    .map((slug) => treatments.find((t) => t.slug === slug))
    .filter(Boolean) as typeof treatments;

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Most Popular
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Popular Treatments in Turkey
            </h2>
          </div>
          <Link
            href="/treatments"
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline shrink-0"
          >
            View All Treatments <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((t) => (
            <Link
              key={t.slug}
              href={`/treatments/${t.slug}`}
              className="card-glow group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 transition-all block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors leading-snug">
                  {t.name}
                </h3>
                {popularSlugs.has(t.slug) && (
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full shrink-0 ml-2">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-2">
                {t.tagline}
              </p>
              <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                <div className="bg-blue-50 border border-blue-100 rounded-xl px-3 py-1.5">
                  <span className="text-xs text-blue-500 block leading-none mb-0.5">Turkey from</span>
                  <span className="text-base font-bold text-blue-700 leading-none">
                    {format(t.priceFrom)}
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                  {savingLabels[t.slug] ?? "Save up to 70%"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
