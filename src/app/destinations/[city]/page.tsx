import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Plane,
  Clock,
  Globe,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getDestinationBySlug, getAllDestinationSlugs } from "@/lib/destinations";
import { getClinicsByCity } from "@/lib/clinics";
import { Star } from "lucide-react";

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const dest = getDestinationBySlug(city);
  if (!dest) return {};
  return {
    title: `Medical Tourism in ${dest.city}, Turkey — Clinics, Costs & Travel Guide | CliniqTurkey`,
    description: `Complete guide to medical tourism in ${dest.city}. ${dest.clinicCount}+ verified clinics, top treatments, practical travel info and patient tips.`,
    alternates: { canonical: `https://www.cliniqturkey.com/destinations/${city}` },
    openGraph: {
      title: `Medical Tourism in ${dest.city}, Turkey — Clinics & Travel Guide`,
      description: `Complete guide to medical tourism in ${dest.city}. ${dest.clinicCount}+ verified clinics, top treatments, practical travel info.`,
      url: `https://www.cliniqturkey.com/destinations/${city}`,
      type: "website",
      images: [{ url: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&h=630&auto=format&fit=crop&q=80", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Medical Tourism in ${dest.city}, Turkey`,
      description: `Complete guide to medical tourism in ${dest.city}. ${dest.clinicCount}+ verified clinics.`,
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const dest = getDestinationBySlug(city);
  if (!dest) notFound();

  const cityClinics = getClinicsByCity(dest.city);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section
          className={`bg-gradient-to-br ${dest.gradient} text-white py-20`}
        >
          <div className="container">
            <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/destinations" className="hover:text-white">Destinations</Link>
              <span>/</span>
              <span className="text-white">{dest.city}</span>
            </div>

            <div className="max-w-3xl">
              <div className="text-6xl mb-4">{dest.emoji}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Medical Tourism in {dest.city}
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-xl">
                {dest.tagline}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm">
                  <span className="opacity-70">Clinics</span>
                  <div className="font-bold">{dest.clinicCount}+ verified</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm">
                  <span className="opacity-70">Flight time</span>
                  <div className="font-bold">{dest.practicalInfo.flightTime}</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm">
                  <span className="opacity-70">Best for</span>
                  <div className="font-bold">{dest.topTreatments[0]}, {dest.topTreatments[1]}</div>
                </div>
              </div>

              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                Find Clinics in {dest.city} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 flex flex-col gap-12">

              {/* About */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why {dest.city} for Medical Tourism?
                </h2>
                <p className="text-slate-600 leading-relaxed">{dest.description}</p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Key Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dest.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-2 p-4 bg-green-50 border border-green-100 rounded-xl text-sm"
                    >
                      <CheckCircle size={15} className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{h}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Top treatments */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Top Treatments in {dest.city}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {dest.topTreatments.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm rounded-xl"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              {/* Neighbourhoods */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Best Areas to Stay
                </h2>
                <div className="flex flex-col gap-3">
                  {dest.neighborhoods.map((n) => (
                    <div key={n.name} className="flex gap-3 p-4 border border-slate-200 rounded-xl">
                      <MapPin size={18} className="text-blue-500 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-slate-900">{n.name}</h3>
                        <p className="text-sm text-slate-500 mt-0.5">{n.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Clinics in this city */}
              {cityClinics.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Verified Clinics in {dest.city}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {cityClinics.map((clinic) => (
                      <div
                        key={clinic.slug}
                        className="border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:border-blue-200 transition-all"
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-slate-900">{clinic.name}</h3>
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${clinic.badgeColor}`}>
                                {clinic.badge}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-slate-500">
                              <MapPin size={12} />
                              {clinic.district}, {clinic.city}
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-xs text-slate-400">From</div>
                            <div className="text-xl font-bold text-slate-900">
                              €{clinic.priceFrom.toLocaleString()}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <Star size={13} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-semibold">
                            {clinic.googleRating ?? clinic.rating}
                          </span>
                          <span className="text-sm text-slate-400">
                            ({(clinic.googleReviewCount ?? clinic.reviewCount).toLocaleString()} reviews)
                          </span>
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

                        <div className="flex gap-3">
                          <Link
                            href={`/clinics/${clinic.slug}`}
                            className="flex-1 text-center py-2 text-sm font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-xl transition-colors"
                          >
                            View Profile
                          </Link>
                          <a
                            href={`https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl transition-colors"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="flex flex-col gap-3">
                  {dest.faqs.map((faq) => (
                    <details
                      key={faq.q}
                      className="group border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:bg-slate-50 list-none">
                        {faq.q}
                        <ChevronDown
                          size={16}
                          className="text-slate-400 group-open:rotate-180 transition-transform shrink-0"
                        />
                      </summary>
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <div className="pt-4">{faq.a}</div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              {/* CTA */}
              <div className="bg-blue-600 text-white rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-2">
                  Find Clinics in {dest.city}
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get personalised quotes from verified clinics in {dest.city}
                  — free, no commitment.
                </p>
                <Link
                  href="/get-a-quote"
                  className="block text-center py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Get Free Quotes →
                </Link>
              </div>

              {/* Practical info */}
              <div className="border border-slate-200 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Practical Information
                </h3>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Plane size={14} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-slate-700">Flight time</div>
                      <div className="text-slate-500">{dest.practicalInfo.flightTime}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Plane size={14} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-slate-700">Direct flights from</div>
                      <div className="text-slate-500">
                        {dest.practicalInfo.directFlights.join(", ")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe size={14} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-slate-700">Language</div>
                      <div className="text-slate-500">{dest.practicalInfo.language}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock size={14} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-slate-700">Timezone</div>
                      <div className="text-slate-500">{dest.practicalInfo.timezone}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-slate-700">Best time to visit</div>
                      <div className="text-slate-500">{dest.practicalInfo.bestTime}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other destinations */}
              <div className="border border-slate-200 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Other Destinations
                </h3>
                <div className="flex flex-col gap-2">
                  {["istanbul", "ankara", "izmir", "antalya"]
                    .filter((s) => s !== dest.slug)
                    .map((s) => (
                      <Link
                        key={s}
                        href={`/destinations/${s}`}
                        className="text-sm text-blue-600 hover:underline capitalize"
                      >
                        → {s.charAt(0).toUpperCase() + s.slice(1)}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
