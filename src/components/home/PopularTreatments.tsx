"use client";

import Link from "next/link";
import {
  ArrowRight,
  Scissors,
  Smile,
  HeartPulse,
  Sparkles,
  Eye,
  Baby,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { treatments } from "@/lib/treatments";
import { useCurrency } from "@/components/ui/CurrencyProvider";

const treatmentIcons: Record<string, LucideIcon> = {
  "hair-transplant": Scissors,
  dental: Smile,
  bariatric: HeartPulse,
  cosmetic: Sparkles,
  "eye-surgery": Eye,
  ivf: Baby,
};

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
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
              Most Popular
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Popular Treatments in Turkey
            </h2>
          </div>
          <Link
            href="/treatments"
            className="flex items-center gap-1 text-sm font-medium text-teal-600 hover:underline shrink-0"
          >
            View All Treatments <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((t) => {
            const Icon = treatmentIcons[t.slug] ?? Stethoscope;
            return (
            <Link
              key={t.slug}
              href={`/treatments/${t.slug}`}
              className="card-glow group bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-200 transition-all block"
            >
              <div className="flex items-start justify-between gap-2 mb-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <Icon size={22} />
                </span>
                {popularSlugs.has(t.slug) && (
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-2.5 py-0.5 rounded-full shrink-0">
                    Most Popular
                  </span>
                )}
              </div>
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-teal-600 transition-colors leading-snug mb-2">
                {t.name}
              </h3>
              <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-2">
                {t.tagline}
              </p>
              <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                <div className="bg-teal-50 border border-teal-100 rounded-xl px-3 py-1.5">
                  <span className="text-xs text-teal-500 block leading-none mb-0.5">Turkey from</span>
                  <span className="text-base font-bold text-teal-700 leading-none">
                    {format(t.priceFrom)}
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                  {savingLabels[t.slug] ?? "Save up to 70%"}
                </span>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
