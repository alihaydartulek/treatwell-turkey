import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const destinations = [
  {
    city: "Istanbul",
    slug: "istanbul",
    tagline: "Europe's medical tourism capital",
    clinicCount: 80,
    highlights: ["World-class hospitals", "Direct flights from 50+ cities", "Rich culture & cuisine"],
    gradient: "from-teal-600 to-teal-800",
    emoji: "🕌",
  },
  {
    city: "Ankara",
    slug: "ankara",
    tagline: "Modern facilities, lower prices",
    clinicCount: 35,
    highlights: ["Lower costs than Istanbul", "Less touristy", "Strong bariatric specialists"],
    gradient: "from-purple-600 to-purple-800",
    emoji: "🏛️",
  },
  {
    city: "Izmir",
    slug: "izmir",
    tagline: "Sun, sea & surgery",
    clinicCount: 22,
    highlights: ["Coastal recovery", "Cosmetic surgery hub", "Relaxed atmosphere"],
    gradient: "from-teal-600 to-teal-800",
    emoji: "🌊",
  },
  {
    city: "Antalya",
    slug: "antalya",
    tagline: "Combine treatment with a holiday",
    clinicCount: 18,
    highlights: ["5-star recovery resorts", "Dental & hair speciality", "Year-round sunshine"],
    gradient: "from-orange-500 to-orange-700",
    emoji: "🌴",
  },
];

export default function DestinationGuides() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
            City Guides
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Choose Your Destination
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Each city has its own character, specialties, and price range. Our
            guides help you pick the right one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className={`group relative bg-gradient-to-br ${d.gradient} rounded-2xl p-6 text-white overflow-hidden hover:scale-[1.02] transition-transform`}
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">
                {d.emoji}
              </div>

              <div className="flex items-center gap-1.5 mb-3">
                <MapPin size={13} className="opacity-70" />
                <span className="text-xs opacity-70">Turkey</span>
              </div>

              <h3 className="text-xl font-bold mb-1">{d.city}</h3>
              <p className="text-sm opacity-80 mb-4">{d.tagline}</p>

              <div className="flex flex-col gap-1 mb-5">
                {d.highlights.map((h) => (
                  <span key={h} className="text-xs opacity-75">
                    · {h}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="text-xs font-semibold opacity-90">
                  {d.clinicCount}+ clinics
                </span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
