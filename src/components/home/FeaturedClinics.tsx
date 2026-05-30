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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          className={
            i <= Math.round(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-slate-200 fill-slate-200"
          }
        />
      ))}
    </div>
  );
}

export default function FeaturedClinics() {
  const { format } = useCurrency();
  return (
    <section className="py-20 bg-white">
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
          {featuredClinics.map((clinic) => {
            const rating = clinic.googleRating ?? clinic.rating;
            const reviewCount = clinic.googleReviewCount ?? clinic.reviewCount;
            const img = clinic.coverImage ?? getFallbackImage(clinic.treatmentSlugs);

            return (
              <Link
                key={clinic.slug}
                href={`/clinics/${clinic.slug}`}
                className="card-glow bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-all group block"
              >
                {/* Cover image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={img}
                    alt={clinic.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Deep gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                  {/* Badge top-left */}
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm ${clinic.badgeColor}`}>
                    {clinic.badge}
                  </span>

                  {/* City top-right */}
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                    <MapPin size={10} />
                    {clinic.city}
                  </span>

                  {/* Rating pinned to bottom of image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <StarRating rating={rating} />
                    <span className="text-white text-sm font-bold drop-shadow">{rating}</span>
                    <span className="text-white/70 text-xs">({reviewCount.toLocaleString()})</span>
                  </div>
                </div>

                <div className="p-5">
                  {/* Name */}
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors mb-1 leading-snug">
                    {clinic.name}
                  </h3>

                  {/* Rating bar */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full mb-4">
                    <div
                      className="h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                      style={{ width: `${(rating / 5) * 100}%` }}
                    />
                  </div>

                  {/* Accreditation badges */}
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

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl px-3 py-1.5">
                      <span className="text-xs text-blue-500 block leading-none mb-0.5">From</span>
                      <span className="text-base font-bold text-blue-700 leading-none">
                        {format(clinic.priceFrom)}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                      View Profile <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <CheckCircle size={15} className="text-green-500" />
          <span>Google ratings shown are publicly sourced. Platform verification independent.</span>
        </div>
      </div>
    </section>
  );
}
