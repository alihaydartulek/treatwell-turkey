"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  CheckCircle,
  SlidersHorizontal,
  Search,
  X,
  GitCompareArrows,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { clinics } from "@/lib/clinics";
import { useCurrency } from "@/components/ui/CurrencyProvider";

const categoryFallbackImages: Record<string, string> = {
  "hair-transplant": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=70",
  "dental": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=70",
  "bariatric": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=70",
  "cosmetic": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=70",
  "eye-surgery": "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=70",
  "ivf": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=70",
};

function getFallbackImage(treatmentSlugs: string[]): string {
  for (const slug of treatmentSlugs) {
    if (categoryFallbackImages[slug]) return categoryFallbackImages[slug];
  }
  return "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=70";
}

const allCities = ["All Cities", "Istanbul", "Ankara", "İzmir", "Antalya"];
const allTreatments = [
  "All Treatments",
  "Hair Transplant",
  "Dental",
  "Bariatric Surgery",
  "Cosmetic Surgery",
  "IVF & Fertility",
  "Eye Surgery",
];
const sortOptions = [
  { value: "rating", label: "Highest Rated" },
  { value: "reviews", label: "Most Reviewed" },
  { value: "price", label: "Lowest Price" },
];

export default function ClinicsPage() {
  const { format } = useCurrency();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All Cities");
  const [treatment, setTreatment] = useState("All Treatments");
  const [sort, setSort] = useState("rating");
  const [jciOnly, setJciOnly] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [compareList, setCompareList] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let list = [...clinics];

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q) ||
          c.treatments.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (city !== "All Cities") {
      list = list.filter((c) => c.city === city || c.city === city.replace("İ", "I"));
    }

    if (treatment !== "All Treatments") {
      list = list.filter((c) =>
        c.treatments.some((t) =>
          t.toLowerCase().includes(treatment.toLowerCase().split(" ")[0].toLowerCase())
        )
      );
    }

    if (jciOnly) {
      list = list.filter((c) =>
        c.accreditations.some((a) => a.toLowerCase().includes("jci"))
      );
    }

    list.sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "reviews") return b.reviewCount - a.reviewCount;
      if (sort === "price") return a.priceFrom - b.priceFrom;
      return 0;
    });

    return list;
  }, [search, city, treatment, sort, jciOnly]);

  const activeFilters = [
    city !== "All Cities" && city,
    treatment !== "All Treatments" && treatment,
    jciOnly && "JCI Only",
  ].filter(Boolean) as string[];

  const toggleCompare = (slug: string) => {
    setCompareList((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= 3) return prev;
      return [...prev, slug];
    });
  };

  const handleCompareNow = () => {
    if (compareList.length >= 2) {
      router.push(`/clinics/compare?slugs=${compareList.join(",")}`);
    }
  };

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-2">Browse All Clinics</h1>
            <p className="text-slate-400">
              {clinics.length} verified clinics across Turkey — filter, compare and contact directly.
            </p>
          </div>
        </section>

        <div className="container py-8">
          {/* Search + Sort bar */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search clinics, cities or treatments…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort clinics"
              className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  Sort: {o.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <SlidersHorizontal size={15} />
              Filters
              {activeFilters.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                  {activeFilters.length}
                </span>
              )}
            </button>
          </div>

          {/* Filter panel */}
          {filtersOpen && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    City
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allCities.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCity(c)}
                        className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                          city === c
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-slate-700 border-slate-200 hover:border-blue-300"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Treatment
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allTreatments.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTreatment(t)}
                        className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                          treatment === t
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-slate-700 border-slate-200 hover:border-blue-300"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Accreditation
                  </label>
                  <button
                    onClick={() => setJciOnly((v) => !v)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                      jciOnly
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-slate-700 border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <CheckCircle size={13} />
                    JCI Accredited Only
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Active filter chips */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeFilters.map((f) => (
                <span
                  key={f}
                  className="flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"
                >
                  {f}
                  <button
                    onClick={() => {
                      if (f === city) setCity("All Cities");
                      if (f === treatment) setTreatment("All Treatments");
                      if (f === "JCI Only") setJciOnly(false);
                    }}
                    className="hover:text-red-500 transition-colors"
                  >
                    <X size={11} />
                  </button>
                </span>
              ))}
              <button
                onClick={() => {
                  setCity("All Cities");
                  setTreatment("All Treatments");
                  setJciOnly(false);
                }}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Results count + compare hint */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-slate-500">
              Showing <strong className="text-slate-900">{filtered.length}</strong>{" "}
              clinic{filtered.length !== 1 ? "s" : ""}
            </p>
            {compareList.length === 0 && (
              <p className="text-xs text-slate-400 hidden md:block">
                Tip: click <strong>Compare</strong> on any clinic to compare side by side
              </p>
            )}
          </div>

          {/* Clinic grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <p className="text-lg font-medium text-slate-700 mb-2">No clinics match your filters</p>
              <p className="text-sm mb-5">Try broadening your search or removing a filter</p>
              <button
                onClick={() => { setSearch(""); setCity("All Cities"); setTreatment("All Treatments"); setJciOnly(false); }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((clinic) => {
                const inCompare = compareList.includes(clinic.slug);
                const compareDisabled = !inCompare && compareList.length >= 3;
                return (
                  <div
                    key={clinic.id}
                    className={`card-glow bg-white border-2 rounded-2xl overflow-hidden transition-all group ${
                      inCompare
                        ? "border-blue-500 shadow-md"
                        : "border-slate-200 hover:border-blue-200"
                    }`}
                  >
                    {/* Cover image */}
                    <div className="h-44 relative overflow-hidden">
                      <Image
                        src={clinic.coverImage ?? getFallbackImage(clinic.treatmentSlugs)}
                        alt={clinic.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/15 to-transparent" />
                      <span
                        className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${clinic.badgeColor}`}
                      >
                        {clinic.badge}
                      </span>
                      {/* Compare toggle */}
                      <button
                        onClick={() => toggleCompare(clinic.slug)}
                        disabled={compareDisabled}
                        className={`absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border transition-all ${
                          inCompare
                            ? "bg-blue-600 text-white border-blue-600"
                            : compareDisabled
                            ? "bg-white/60 text-slate-400 border-slate-200 cursor-not-allowed"
                            : "bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600"
                        }`}
                      >
                        <GitCompareArrows size={11} />
                        {inCompare ? "Selected" : "Compare"}
                      </button>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h2 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                          {clinic.name}
                        </h2>
                      </div>

                      <div className="flex items-center gap-1 text-slate-500 text-xs mb-3">
                        <MapPin size={11} />
                        {clinic.district}, {clinic.city}
                      </div>

                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Star size={13} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-semibold text-slate-800">
                            {clinic.googleRating ?? clinic.rating}
                          </span>
                          <span className="text-xs text-slate-400">
                            ({(clinic.googleReviewCount ?? clinic.reviewCount).toLocaleString()})
                          </span>
                          <span className="text-xs text-slate-300">·</span>
                          <span className="text-xs text-slate-400">Est. {clinic.established}</span>
                        </div>
                        <div className="w-full h-1 bg-slate-100 rounded-full">
                          <div
                            className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                            style={{ width: `${((clinic.googleRating ?? clinic.rating) / 5) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {clinic.treatments.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                        {clinic.treatments.length > 3 && (
                          <span className="text-xs text-slate-400 px-1">
                            +{clinic.treatments.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {clinic.accreditations.slice(0, 2).map((a) => (
                          <span
                            key={a}
                            className="badge-glow flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full"
                          >
                            <CheckCircle size={10} />
                            {a}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="bg-blue-50 border border-blue-100 rounded-xl px-3 py-1.5">
                          <span className="text-xs text-blue-500 block leading-none mb-0.5">From</span>
                          <span className="text-base font-bold text-blue-700 leading-none">
                            {format(clinic.priceFrom)}
                          </span>
                        </div>
                        <Link
                          href={`/clinics/${clinic.slug}`}
                          className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors btn-glow"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Sticky compare bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl">
            <div className="container py-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-semibold text-slate-700 shrink-0">
                  Compare ({compareList.length}/3):
                </span>
                <div className="flex items-center gap-2 flex-1 flex-wrap">
                  {compareList.map((slug) => {
                    const c = clinics.find((cl) => cl.slug === slug);
                    if (!c) return null;
                    return (
                      <span
                        key={slug}
                        className="flex items-center gap-1.5 text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full"
                      >
                        {c.name}
                        <button
                          onClick={() => toggleCompare(slug)}
                          className="hover:text-red-500 transition-colors"
                          aria-label={`Remove ${c.name} from comparison`}
                        >
                          <X size={12} />
                        </button>
                      </span>
                    );
                  })}
                  {compareList.length < 3 && (
                    <span className="text-xs text-slate-400">
                      + select {3 - compareList.length} more (or compare now)
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setCompareList([])}
                    className="text-sm text-slate-400 hover:text-slate-600 px-3 py-1.5"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleCompareNow}
                    disabled={compareList.length < 2}
                    className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white text-sm font-semibold rounded-xl transition-colors"
                  >
                    <GitCompareArrows size={15} />
                    Compare Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      {/* Extra bottom padding when compare bar is visible */}
      {compareList.length > 0 && <div className="h-20" />}
      <Footer />
    </>
  );
}
