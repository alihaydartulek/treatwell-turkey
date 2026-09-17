"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Star, ShieldCheck, MapPin } from "lucide-react";
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

// Two real, top-rated clinics for the hero comparison preview.
const previewClinics = [...clinics]
  .sort((a, b) => (b.googleRating ?? b.rating) - (a.googleRating ?? a.rating) || (b.googleReviewCount ?? b.reviewCount) - (a.googleReviewCount ?? a.reviewCount))
  .slice(0, 2);

function PreviewCard({ clinic, muted = false }: { clinic: typeof clinics[number]; muted?: boolean }) {
  const rating = clinic.googleRating ?? clinic.rating;
  const reviews = clinic.googleReviewCount ?? clinic.reviewCount;
  return (
    <div
      className={`rounded-2xl border bg-white p-5 ${
        muted
          ? "border-slate-200 shadow-sm"
          : "border-slate-200 shadow-[0_12px_40px_rgba(15,60,50,0.14)]"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Star size={14} className="text-amber-500 fill-amber-500" />
          <span className="font-semibold text-slate-900 text-sm">{rating}</span>
          <span className="text-xs text-slate-400">({reviews.toLocaleString()})</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-full">
          <ShieldCheck size={11} /> Verified
        </span>
      </div>
      <div className="font-semibold text-slate-900 leading-snug">{clinic.name}</div>
      <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
        <MapPin size={12} /> {clinic.district}, {clinic.city}
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
        <span className="text-xs text-slate-500">{clinic.treatments[0]}</span>
        <span className="text-sm font-semibold text-slate-900">
          from €{clinic.priceFrom.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

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
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left — the message + the action */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-teal-700/60" />
              <span className="text-sm font-medium text-teal-800 dark:text-teal-300">
                An independent guide to medical treatment in Turkey
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.06] text-slate-900 mb-5">
              Find a clinic in Turkey you can trust.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-9">
              Compare verified, licensed clinics for hair transplants, dental,
              cosmetic surgery and more — with honest prices, real ratings, and no
              middleman between you and the clinic.
            </p>

            <div
              className={`bg-white rounded-xl border p-2 flex flex-col sm:flex-row gap-2 shadow-sm transition-colors ${
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

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-600">
              <span>
                <strong className="font-semibold text-slate-900">{clinics.length}</strong> verified clinics
              </span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <span>Ministry-of-Health licensed</span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <span>No commission</span>
            </div>
          </div>

          {/* Right — a real comparison preview (what the product does) */}
          <div className="hidden lg:block">
            <div className="relative rounded-3xl bg-teal-50/50 border border-teal-100/70 p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-semibold text-slate-900">Compare, side by side</span>
                <span className="text-xs text-teal-700 bg-white border border-teal-100 px-2.5 py-1 rounded-full">
                  {clinics.length} clinics
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {previewClinics.map((c, i) => (
                  <div key={c.slug} className={i === 1 ? "ml-8" : "mr-8"}>
                    <PreviewCard clinic={c} muted={i === 1} />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-5 text-center">
                Real ratings, transparent prices, and direct contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
