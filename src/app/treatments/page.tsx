import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingDown,
  CheckCircle,
  Scissors,
  Smile,
  HeartPulse,
  Sparkles,
  Eye,
  Baby,
  Bone,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { treatments } from "@/lib/treatments";
import PriceDisplay from "@/components/ui/PriceDisplay";

const treatmentIcons: Record<string, LucideIcon> = {
  "hair-transplant": Scissors,
  dental: Smile,
  bariatric: HeartPulse,
  cosmetic: Sparkles,
  "eye-surgery": Eye,
  ivf: Baby,
  orthopaedics: Bone,
};

export const metadata: Metadata = {
  title: "All Treatments in Turkey — Compare Clinics & Prices",
  description:
    "Browse 40+ medical treatments available in Turkey. Compare verified clinics, real prices, and patient reviews for hair transplant, dental, bariatric surgery, IVF and more.",
};

const categories = [
  { label: "All", value: "all" },
  { label: "Hair", value: "Hair" },
  { label: "Dental", value: "Dental" },
  { label: "Weight Loss", value: "Weight Loss" },
  { label: "Cosmetic", value: "Cosmetic" },
  { label: "Eye", value: "Eye" },
  { label: "Fertility", value: "Fertility" },
];

function savingPct(home: number, turkey: number) {
  return Math.round(((home - turkey) / home) * 100);
}

export default function TreatmentsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-14">
          <div className="container">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-teal-300 uppercase tracking-wider">
                40+ Treatments Available
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                All Treatments in Turkey
              </h1>
              <p className="text-slate-300 text-lg">
                Browse every treatment category — compare verified clinics,
                real prices, and see exactly how much you save vs home.
              </p>
            </div>
          </div>
        </section>

        {/* Why Turkey strip */}
        <div className="bg-teal-600 text-white py-4">
          <div className="container flex flex-wrap justify-center gap-6 text-sm">
            {[
              "Save 50–75% vs UK & German prices",
              "JCI & ISO accredited clinics",
              "English-speaking medical teams",
              "Direct clinic contact — no middleman",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-teal-200" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container">
            {/* Category filter — client-side not needed, use anchor links */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((c) => (
                <a
                  key={c.value}
                  href={c.value === "all" ? "#all" : `#${c.value.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 rounded-xl text-sm font-medium border border-slate-200 text-slate-700 hover:border-teal-400 hover:text-teal-600 transition-colors"
                >
                  {c.label}
                </a>
              ))}
            </div>

            {/* All treatments grid */}
            <div id="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {treatments.map((t) => {
                const Icon = treatmentIcons[t.slug] ?? Stethoscope;
                return (
                <Link
                  key={t.slug}
                  href={`/treatments/${t.slug}`}
                  className="group border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-teal-200 transition-all bg-white"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </span>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full shrink-0">
                      {t.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                    {t.name}
                  </h2>

                  {/* Tagline */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2">
                    {t.tagline}
                  </p>

                  {/* Price comparison */}
                  <div className="border-t border-slate-100 pt-4">
                    <div className="flex items-end justify-between mb-2">
                      <div>
                        <span className="text-xs text-slate-400 block">Turkey from</span>
                        <span className="text-2xl font-bold text-slate-900">
                          <PriceDisplay eurAmount={t.priceFrom} />
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">🇬🇧 UK avg</span>
                        <span className="text-sm text-slate-400 line-through">
                          £{t.ukPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Saving badge */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <TrendingDown size={13} className="text-green-500" />
                      <span className="text-sm font-semibold text-green-600">
                        Save up to {savingPct(t.ukPrice, t.priceFrom)}% vs UK
                      </span>
                    </div>
                  </div>

                  {/* Duration chips */}
                  <div className="flex gap-2 mt-4">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-lg">
                      {t.durationDays}d procedure
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-lg">
                      {t.recoveryDays}d recovery
                    </span>
                    <span className="flex items-center gap-1 text-xs text-teal-600 font-medium ml-auto group-hover:translate-x-0.5 transition-transform">
                      View clinics <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="container text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Not sure which treatment is right for you?
            </h2>
            <p className="text-slate-500 mb-6 text-sm">
              Browse our full clinic directory, filter by treatment and city,
              and contact clinics directly — no middleman, no commitment.
            </p>
            <Link
              href="/clinics"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors"
            >
              Browse All Clinics <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
