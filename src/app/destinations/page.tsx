import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Plane, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Medical Tourism Destinations in Turkey — Istanbul, Ankara, Izmir & Antalya",
  description:
    "Compare Turkey's top medical tourism cities. Istanbul leads for hair transplant and cosmetic surgery, Ankara for orthopaedics, Izmir for dental care, and Antalya for combined treatment and holiday packages.",
  alternates: { canonical: "https://www.cliniqturkey.com/destinations" },
};

const cities = [
  {
    slug: "istanbul",
    name: "Istanbul",
    emoji: "🕌",
    tagline: "Europe's medical tourism capital",
    clinicCount: "80+",
    topFor: ["Hair Transplant", "Rhinoplasty", "Dental Veneers", "Bariatric Surgery"],
    flightTime: "3.5–4.5h from UK",
    gradient: "from-blue-600 to-blue-800",
    highlights: [
      "Most JCI-accredited hospitals in Turkey",
      "Direct flights from 60+ European cities",
      "Widest choice of treatments and clinics",
    ],
  },
  {
    slug: "ankara",
    name: "Ankara",
    emoji: "🏛️",
    tagline: "Turkey's capital — hospital-grade care",
    clinicCount: "30+",
    topFor: ["Orthopaedics", "Bariatric Surgery", "IVF", "Eye Surgery"],
    flightTime: "4–5h from UK",
    gradient: "from-slate-700 to-slate-900",
    highlights: [
      "Turkey's largest teaching hospitals",
      "Strong orthopaedic and cardiac centres",
      "Lower prices than Istanbul",
    ],
  },
  {
    slug: "izmir",
    name: "Izmir",
    emoji: "🌊",
    tagline: "Aegean charm with world-class dentistry",
    clinicCount: "25+",
    topFor: ["Dental Veneers", "Dental Implants", "IVF", "Cosmetic Surgery"],
    flightTime: "3.5–4h from UK",
    gradient: "from-cyan-600 to-blue-700",
    highlights: [
      "Particularly strong dental tourism reputation",
      "Relaxed, coastal atmosphere for recovery",
      "Direct flights from major UK airports",
    ],
  },
  {
    slug: "antalya",
    name: "Antalya",
    emoji: "🏖️",
    tagline: "Treatment meets the Mediterranean",
    clinicCount: "20+",
    topFor: ["Dental Veneers", "Hair Transplant", "Eye Surgery", "Cosmetic Surgery"],
    flightTime: "4–4.5h from UK",
    gradient: "from-orange-500 to-rose-600",
    highlights: [
      "Combine treatment with a beach holiday",
      "Lower cost of living than Istanbul",
      "Year-round flights from UK",
    ],
  },
];

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container max-w-3xl">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Destinations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Medical Tourism Destinations in Turkey
            </h1>
            <p className="text-lg text-slate-300">
              Turkey's four main medical tourism cities each offer distinct
              advantages. Compare them to find the right fit for your treatment
              and travel preferences.
            </p>
          </div>
        </section>

        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/destinations/${city.slug}`}
                className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div
                  className={`bg-gradient-to-br ${city.gradient} text-white p-6`}
                >
                  <div className="text-4xl mb-2">{city.emoji}</div>
                  <h2 className="text-2xl font-bold group-hover:opacity-90 transition-opacity">
                    {city.name}
                  </h2>
                  <p className="text-white/70 text-sm mt-1">{city.tagline}</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {city.topFor.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5 mb-5">
                    {city.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                        <span className="text-slate-600">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-4 text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {city.clinicCount} clinics
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane size={13} />
                        {city.flightTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-blue-600 font-semibold">
                      Explore <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick comparison table */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Quick Destination Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">City</th>
                    <th className="text-left py-3 px-4 font-semibold">Best For</th>
                    <th className="text-left py-3 px-4 font-semibold">Flight Time</th>
                    <th className="text-left py-3 px-4 font-semibold">Price Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-slate-100">
                    <td className="py-3 px-4 font-semibold text-slate-900">Istanbul</td>
                    <td className="py-3 px-4 text-slate-600">Hair transplant, cosmetic, dental</td>
                    <td className="py-3 px-4 text-slate-600">3.5–4.5h</td>
                    <td className="py-3 px-4 text-slate-600">Mid</td>
                  </tr>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <td className="py-3 px-4 font-semibold text-slate-900">Ankara</td>
                    <td className="py-3 px-4 text-slate-600">Orthopaedics, bariatric, IVF</td>
                    <td className="py-3 px-4 text-slate-600">4–5h</td>
                    <td className="py-3 px-4 text-slate-600">Lower</td>
                  </tr>
                  <tr className="bg-white border-b border-slate-100">
                    <td className="py-3 px-4 font-semibold text-slate-900">Izmir</td>
                    <td className="py-3 px-4 text-slate-600">Dental, IVF, cosmetic</td>
                    <td className="py-3 px-4 text-slate-600">3.5–4h</td>
                    <td className="py-3 px-4 text-slate-600">Lower</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-semibold text-slate-900">Antalya</td>
                    <td className="py-3 px-4 text-slate-600">Dental, hair, combined holidays</td>
                    <td className="py-3 px-4 text-slate-600">4–4.5h</td>
                    <td className="py-3 px-4 text-slate-600">Lowest</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Not sure which city is right for you?
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Tell us your treatment and preferences and we will recommend the
              best-matched clinics — across all cities.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get Free Clinic Recommendations
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
