"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { trackTreatmentSearch } from "@/lib/analytics";
import { clinics } from "@/lib/clinics";

const treatmentOptions = [
  { label: "Hair Transplant",       slug: "hair-transplant" },
  { label: "Dental Veneers",        slug: "dental" },
  { label: "Dental Implants",       slug: "dental" },
  { label: "Bariatric Surgery",     slug: "bariatric" },
  { label: "Rhinoplasty",           slug: "cosmetic" },
  { label: "Cosmetic Surgery",      slug: "cosmetic" },
  { label: "IVF & Fertility",       slug: "ivf" },
  { label: "Eye Surgery (LASIK)",   slug: "eye-surgery" },
];

const cityOptions = ["Istanbul", "Ankara", "Izmir", "Antalya", "Any City"];

export default function HeroSection() {
  const router = useRouter();
  const [treatment, setTreatment] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (!treatment) {
      setError(true);
      setTimeout(() => setError(false), 2500);
      return;
    }
    setError(false);
    trackTreatmentSearch(treatment, city && city !== "Any City" ? city.toLowerCase() : undefined);
    router.push(`/treatments/${treatment}${city && city !== "Any City" ? `?city=${city.toLowerCase()}` : ""}`);
  };

  return (
    <section className="border-b border-slate-200 dark:border-slate-800">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Positioning line — quiet, sentence case, with a short rule */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-teal-700/60" />
            <span className="text-sm font-medium text-teal-800 dark:text-teal-300">
              An independent guide to medical treatment in Turkey
            </span>
          </div>

          {/* The hero is the headline: editorial serif, no single-word accent */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.06] text-slate-900 mb-5">
            Find a clinic in Turkey you can trust.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-9">
            Compare verified, licensed clinics for hair transplants, dental,
            cosmetic surgery and more — with honest prices, real ratings, and no
            middleman between you and the clinic.
          </p>

          {/* Find-a-clinic action */}
          <div
            className={`bg-white rounded-xl border p-2 flex flex-col sm:flex-row gap-2 max-w-2xl shadow-sm transition-colors ${
              error ? "border-red-300 ring-2 ring-red-200" : "border-slate-200"
            }`}
          >
            <select
              value={treatment}
              onChange={(e) => { setTreatment(e.target.value); setError(false); }}
              aria-label="Select treatment"
              className={`flex-1 px-4 py-3 bg-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 ${treatment ? "text-slate-800" : "text-slate-400"}`}
            >
              <option value="">Which treatment?</option>
              {treatmentOptions.map((t) => (
                <option key={t.slug + t.label} value={t.slug}>{t.label}</option>
              ))}
            </select>

            <div className="hidden sm:block w-px bg-slate-200 my-2" />

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              aria-label="Select city"
              className="flex-1 px-4 py-3 text-slate-800 bg-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              <option value="">Any city</option>
              {cityOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              <Search size={16} />
              Compare clinics
            </button>
          </div>

          <p className={`text-xs mt-3 ${error ? "text-red-500 font-medium" : "text-slate-500"}`}>
            {error
              ? "Please choose a treatment to compare."
              : "Free to use. No sign-up. You contact the clinic directly."}
          </p>

          {/* Quiet proof — facts inline, not boxed stat cards */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-600">
            <span>
              <strong className="font-semibold text-slate-900">{clinics.length}</strong> verified clinics
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span>Ministry-of-Health licensed</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span>Independent — we take no commission</span>
          </div>
        </div>
      </div>
    </section>
  );
}
