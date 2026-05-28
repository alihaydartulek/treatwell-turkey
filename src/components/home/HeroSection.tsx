"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Shield, Star, Users } from "lucide-react";

const treatmentOptions = [
  "Hair Transplant",
  "Dental Veneers",
  "Dental Implants",
  "Bariatric Surgery",
  "Rhinoplasty",
  "IVF & Fertility",
  "Eye Surgery (LASIK)",
  "Breast Augmentation",
  "Tummy Tuck",
  "Other",
];

const cityOptions = ["Istanbul", "Ankara", "Izmir", "Antalya", "Any City"];

export default function HeroSection() {
  const router = useRouter();
  const [treatment, setTreatment] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!treatment) return;
    const slug = treatment.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    router.push(`/treatments/${slug}${city ? `?city=${city}` : ""}`);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <Star size={14} className="text-yellow-300 fill-yellow-300" />
            <span>Trusted by 10,000+ patients from UK, Germany &amp; Europe</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Compare Top Clinics in Turkey.{" "}
            <span className="text-yellow-300">Save Up to 70%.</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-xl mx-auto">
            Hair transplant, dental, bariatric surgery and more — find verified
            clinics, real prices, and free expert guidance.
          </p>

          {/* Search box */}
          <div className="bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl max-w-2xl mx-auto">
            <select
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="flex-1 px-4 py-3 text-slate-800 bg-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Treatment</option>
              {treatmentOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <div className="hidden md:block w-px bg-slate-200 my-2" />

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 px-4 py-3 text-slate-800 bg-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Any City</option>
              {cityOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              <Search size={16} />
              Compare Clinics
            </button>
          </div>

          {/* Trust micro-text */}
          <p className="text-blue-200 text-xs mt-4">
            Free to use &middot; No commitment &middot; Results in 60 seconds
          </p>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Shield, value: "18", label: "Verified Clinics" },
            { icon: Star, value: "4.7★", label: "Avg. Google Rating" },
            { icon: Users, value: "50–75%", label: "Average Savings" },
            { icon: Search, value: "40+", label: "Treatments Covered" },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-white/10 border border-white/20 rounded-xl p-4 text-center"
            >
              <Icon size={20} className="mx-auto mb-2 text-blue-200" />
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-xs text-blue-200 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
