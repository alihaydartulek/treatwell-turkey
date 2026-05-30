"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingDown, Plane, Hotel, CheckCircle } from "lucide-react";

type Treatment = {
  label: string;
  slug: string;
  emoji: string;
  basePrice: number;
  pricePerUnit?: { unit: string; min: number; max: number; pricePerUnit: number };
  countryPrices: Record<string, number>;
};

const treatments: Treatment[] = [
  {
    label: "Hair Transplant",
    slug: "hair-transplant",
    emoji: "💇",
    basePrice: 1600,
    pricePerUnit: { unit: "grafts", min: 1000, max: 5000, pricePerUnit: 0.4 },
    countryPrices: { UK: 8000, DE: 9500, NL: 8500, BE: 8000, CH: 11000, SE: 9000, NO: 10000, FR: 8500 },
  },
  {
    label: "Dental Veneers (per tooth)",
    slug: "dental",
    emoji: "🦷",
    basePrice: 220,
    pricePerUnit: { unit: "teeth", min: 1, max: 20, pricePerUnit: 220 },
    countryPrices: { UK: 800, DE: 900, NL: 850, BE: 800, CH: 1200, SE: 950, NO: 1050, FR: 850 },
  },
  {
    label: "Dental Implants (per tooth)",
    slug: "dental",
    emoji: "🦷",
    basePrice: 650,
    pricePerUnit: { unit: "implants", min: 1, max: 8, pricePerUnit: 650 },
    countryPrices: { UK: 2800, DE: 3200, NL: 2900, BE: 2800, CH: 4000, SE: 3200, NO: 3500, FR: 3000 },
  },
  {
    label: "Gastric Sleeve",
    slug: "bariatric",
    emoji: "⚖️",
    basePrice: 3800,
    countryPrices: { UK: 12000, DE: 13000, NL: 11000, BE: 11500, CH: 15000, SE: 13000, NO: 14000, FR: 12000 },
  },
  {
    label: "Rhinoplasty",
    slug: "cosmetic",
    emoji: "👃",
    basePrice: 2800,
    countryPrices: { UK: 8500, DE: 9000, NL: 8000, BE: 8000, CH: 12000, SE: 9000, NO: 10000, FR: 8500 },
  },
  {
    label: "LASIK (both eyes)",
    slug: "eye-surgery",
    emoji: "👁️",
    basePrice: 950,
    countryPrices: { UK: 3500, DE: 3800, NL: 3400, BE: 3200, CH: 4500, SE: 3800, NO: 4200, FR: 3500 },
  },
  {
    label: "IVF (own eggs)",
    slug: "ivf",
    emoji: "🌸",
    basePrice: 2500,
    countryPrices: { UK: 8000, DE: 7500, NL: 7000, BE: 7500, CH: 10000, SE: 8000, NO: 9000, FR: 7000 },
  },
];

const countries = [
  { code: "UK", label: "🇬🇧 United Kingdom", currency: "£", flightCost: 150, hotelPerNight: 80 },
  { code: "DE", label: "🇩🇪 Germany", currency: "€", flightCost: 120, hotelPerNight: 80 },
  { code: "NL", label: "🇳🇱 Netherlands", currency: "€", flightCost: 130, hotelPerNight: 80 },
  { code: "BE", label: "🇧🇪 Belgium", currency: "€", flightCost: 140, hotelPerNight: 80 },
  { code: "CH", label: "🇨🇭 Switzerland", currency: "CHF", flightCost: 180, hotelPerNight: 80 },
  { code: "SE", label: "🇸🇪 Sweden", currency: "kr", flightCost: 160, hotelPerNight: 80 },
  { code: "NO", label: "🇳🇴 Norway", currency: "kr", flightCost: 170, hotelPerNight: 80 },
  { code: "FR", label: "🇫🇷 France", currency: "€", flightCost: 130, hotelPerNight: 80 },
];

export default function CostCalculatorTool() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [quantity, setQuantity] = useState(2500);
  const [nights, setNights] = useState(3);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    if (selectedTreatment && selectedCountry) setShowResult(true);
  };

  const turkeyPrice = selectedTreatment
    ? selectedTreatment.pricePerUnit
      ? quantity * selectedTreatment.pricePerUnit.pricePerUnit
      : selectedTreatment.basePrice
    : 0;

  const homePrice = selectedTreatment
    ? selectedTreatment.pricePerUnit
      ? quantity * selectedTreatment.countryPrices[selectedCountry.code]
      : selectedTreatment.countryPrices[selectedCountry.code]
    : 0;

  const travelCost = selectedCountry.flightCost + nights * selectedCountry.hotelPerNight;
  const totalTurkeyCost = turkeyPrice + travelCost;
  const saving = homePrice - totalTurkeyCost;
  const savingPct = homePrice > 0 ? Math.round((saving / homePrice) * 100) : 0;

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          {!showResult ? (
            <div className="p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Step 1 — Select your treatment
              </h2>

              {/* Treatment grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {treatments.map((t) => (
                  <button
                    key={t.label}
                    onClick={() => {
                      setSelectedTreatment(t);
                      setShowResult(false);
                      if (t.pricePerUnit) {
                        setQuantity(
                          Math.round((t.pricePerUnit.min + t.pricePerUnit.max) / 2)
                        );
                      }
                    }}
                    aria-pressed={selectedTreatment?.label === t.label}
                    className={`p-3 rounded-xl text-sm font-medium border-2 text-left transition-all ${
                      selectedTreatment?.label === t.label
                        ? "border-teal-600 bg-teal-50 text-teal-700"
                        : "border-slate-200 text-slate-700 hover:border-teal-300"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Quantity slider */}
              {selectedTreatment?.pricePerUnit && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    How many {selectedTreatment.pricePerUnit.unit}?
                  </h2>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={selectedTreatment.pricePerUnit.min}
                      max={selectedTreatment.pricePerUnit.max}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      aria-label={`Number of ${selectedTreatment.pricePerUnit.unit}`}
                      aria-valuemin={selectedTreatment.pricePerUnit.min}
                      aria-valuemax={selectedTreatment.pricePerUnit.max}
                      aria-valuenow={quantity}
                      className="flex-1 accent-teal-600"
                    />
                    <span className="text-2xl font-bold text-teal-600 w-20 text-right">
                      {quantity.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>{selectedTreatment.pricePerUnit.min.toLocaleString()}</span>
                    <span>{selectedTreatment.pricePerUnit.max.toLocaleString()}</span>
                  </div>
                </div>
              )}

              {/* Country */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Your country
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => setSelectedCountry(c)}
                      className={`p-3 rounded-xl text-sm font-medium border-2 transition-all ${
                        selectedCountry.code === c.code
                          ? "border-teal-600 bg-teal-50 text-teal-700"
                          : "border-slate-200 text-slate-700 hover:border-teal-300"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nights */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  How many nights in Turkey?
                </h2>
                <div className="flex gap-3">
                  {[2, 3, 5, 7, 10].map((n) => (
                    <button
                      key={n}
                      onClick={() => setNights(n)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all ${
                        nights === n
                          ? "border-teal-600 bg-teal-50 text-teal-700"
                          : "border-slate-200 text-slate-700 hover:border-teal-300"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleCalculate}
                disabled={!selectedTreatment}
                className="w-full flex items-center justify-center gap-2 py-4 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 text-white font-bold text-lg rounded-xl transition-colors"
              >
                Calculate My Saving <ArrowRight size={20} />
              </button>
            </div>
          ) : (
            /* Results */
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Your Estimated Saving
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                  <div className="text-slate-500 text-sm mb-1">
                    {selectedCountry.label} (home)
                  </div>
                  <div className="text-3xl font-bold text-slate-400 line-through">
                    {selectedCountry.currency}{homePrice.toLocaleString()}
                  </div>
                </div>

                <div className="p-5 bg-teal-50 border border-teal-200 rounded-2xl text-center">
                  <div className="text-teal-600 text-sm mb-1 font-medium">
                    🇹🇷 Turkey (treatment + travel)
                  </div>
                  <div className="text-3xl font-bold text-teal-700">
                    €{totalTurkeyCost.toLocaleString()}
                  </div>
                  <div className="text-xs text-teal-500 mt-1">
                    incl. ~€{travelCost} flights &amp; hotel
                  </div>
                </div>

                <div className="p-5 bg-green-50 border border-green-200 rounded-2xl text-center">
                  <TrendingDown size={20} className="mx-auto mb-1 text-green-500" />
                  <div className="text-green-600 text-sm mb-1 font-medium">You save</div>
                  <div className="text-3xl font-bold text-green-700">
                    {selectedCountry.currency}{saving.toLocaleString()}
                  </div>
                  <div className="text-sm font-semibold text-green-600 mt-1">
                    {savingPct}% less than home
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="border border-slate-200 rounded-2xl p-5 mb-6 text-sm">
                <h3 className="font-semibold text-slate-900 mb-3">Cost Breakdown</h3>
                <div className="flex flex-col gap-2 text-slate-600">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <span className="text-base">{selectedTreatment!.emoji}</span>
                      Treatment in Turkey
                    </span>
                    <span className="font-medium text-slate-900">€{turkeyPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <Plane size={14} />
                      Flights (estimate)
                    </span>
                    <span>€{selectedCountry.flightCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <Hotel size={14} />
                      Hotel ({nights} nights)
                    </span>
                    <span>€{(nights * selectedCountry.hotelPerNight)}</span>
                  </div>
                  <div className="border-t border-slate-100 pt-2 flex justify-between font-semibold text-slate-900">
                    <span>Total Turkey cost</span>
                    <span className="text-teal-700">€{totalTurkeyCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href={selectedTreatment ? `/treatments/${selectedTreatment.slug}` : "/clinics"}
                  className="flex items-center justify-center gap-2 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors"
                >
                  Find {selectedTreatment?.label ?? ""} Clinics <ArrowRight size={18} />
                </Link>
                <button
                  onClick={() => setShowResult(false)}
                  className="py-3 text-sm text-slate-500 hover:text-slate-700"
                >
                  ← Recalculate
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-5 text-xs text-slate-400">
                {["Free to use", "No commitment", "Results in 24h", "GDPR compliant"].map((t) => (
                  <span key={t} className="flex items-center gap-1">
                    <CheckCircle size={11} className="text-green-500" />
                    {t}
                  </span>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-4 text-xs text-amber-700">
                <strong>Approximate estimate only.</strong> Treatment prices are market averages and vary by clinic, technique, and individual assessment. Flight costs depend on season and booking time. Hotel at ~€80/night mid-range Istanbul. Always get a personalised quote from the clinic before booking.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
