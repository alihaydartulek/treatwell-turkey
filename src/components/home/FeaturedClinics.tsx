"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { clinics } from "@/lib/clinics";
import { useCurrency } from "@/components/ui/CurrencyProvider";

const featuredSlugs = [
  "cosmedica-clinic-istanbul",
  "dentakay-istanbul",
  "memorial-hospital-istanbul",
];

const featuredClinics = featuredSlugs
  .map((slug) => clinics.find((c) => c.slug === slug))
  .filter(Boolean) as (typeof clinics)[number][];

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

export default function FeaturedClinics() {
  const { format } = useCurrency();
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Real Clinics, Verified Data
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Featured Clinics
            </h2>
          </div>
          <Link
            href="/clinics"
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline shrink-0"
          >
            Browse All Clinics <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredClinics.map((clinic) => (
            <div
              key={clinic.slug}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all group"
            >
              {/* Cover image */}
              <div className="h-44 relative overflow-hidden">
                {clinic.coverImage ? (
                  <>
                    <Image
                      src={clinic.coverImage}
                      alt={clinic.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </>
                ) : (
                  <>
                    <Image
                      src={getFallbackImage(clinic.treatmentSlugs)}
                      alt={clinic.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10" />
                  </>
                )}
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${clinic.badgeColor}`}
                >
                  {clinic.badge}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {clinic.name}
                  </h3>
                  <div className="flex items-center gap-1 text-slate-500 text-xs shrink-0">
                    <MapPin size={11} />
                    {clinic.city}
                  </div>
                </div>

                {/* Google rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star size={13} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-slate-800">
                      {clinic.googleRating ?? clinic.rating}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    ({(clinic.googleReviewCount ?? clinic.reviewCount).toLocaleString()} Google reviews)
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {clinic.treatments.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {clinic.accreditations.slice(0, 2).map((a) => (
                    <span
                      key={a}
                      className="flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full"
                    >
                      <CheckCircle size={10} />
                      {a}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-400">From</span>
                    <div className="text-lg font-bold text-slate-900">
                      {format(clinic.priceFrom)}
                    </div>
                  </div>
                  <Link
                    href={`/clinics/${clinic.slug}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <CheckCircle size={15} className="text-green-500" />
          <span>
            Google ratings shown are publicly sourced. Platform verification independent.
          </span>
        </div>
      </div>
    </section>
  );
}
