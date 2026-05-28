import Link from "next/link";
import { Star, MapPin, CheckCircle, ArrowRight } from "lucide-react";

const clinics = [
  {
    name: "Cosmedica Clinic",
    city: "Istanbul",
    slug: "cosmedica-clinic-istanbul",
    specialties: ["FUE Hair Transplant", "DHI", "PRP Therapy"],
    rating: 4.8,
    reviewCount: 3200,
    priceFrom: 1500,
    badge: "Top Rated",
    badgeColor: "bg-yellow-100 text-yellow-700",
    accreditations: ["Turkish MOH", "ISO 9001"],
    established: 2006,
    ratingSource: "Google",
  },
  {
    name: "Dentakay",
    city: "Istanbul",
    slug: "dentakay-istanbul",
    specialties: ["Veneers", "Implants", "Hollywood Smile"],
    rating: 4.7,
    reviewCount: 5400,
    priceFrom: 190,
    badge: "Most Reviewed",
    badgeColor: "bg-green-100 text-green-700",
    accreditations: ["Turkish MOH", "ISO 9001"],
    established: 2010,
    ratingSource: "Google",
  },
  {
    name: "Memorial Hospital",
    city: "Istanbul",
    slug: "memorial-hospital-istanbul",
    specialties: ["Bariatric Surgery", "Orthopaedics", "IVF"],
    rating: 4.6,
    reviewCount: 8900,
    priceFrom: 4000,
    badge: "JCI Accredited",
    badgeColor: "bg-blue-100 text-blue-700",
    accreditations: ["JCI Accredited", "ISO 9001"],
    established: 1998,
    ratingSource: "Google",
  },
];

export default function FeaturedClinics() {
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
          {clinics.map((clinic) => (
            <div
              key={clinic.slug}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all group"
            >
              <div className="h-44 bg-gradient-to-br from-blue-100 to-blue-200 relative flex items-center justify-center">
                <span className="text-5xl opacity-30">🏥</span>
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
                      {clinic.rating}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    ({clinic.reviewCount.toLocaleString()} Google reviews)
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {clinic.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {clinic.accreditations.map((a) => (
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
                      €{clinic.priceFrom.toLocaleString()}
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
