import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  TrendingDown,
  ChevronDown,
  MapPin,
  Star,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getTreatmentBySlug, getAllTreatmentSlugs } from "@/lib/treatments";
import { getClinicsByTreatmentSlug } from "@/lib/clinics";

export async function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};
  return {
    title: `${treatment.name} in Turkey — Cost, Clinics & Reviews 2025`,
    description: `Compare verified clinics for ${treatment.name} in Turkey. Prices from €${treatment.priceFrom.toLocaleString()}. Save up to 70% vs UK & Germany. Real Google reviews, direct clinic contact.`,
    alternates: { canonical: `https://www.treatwellturkey.com/treatments/${treatment.slug}` },
    openGraph: {
      title: `${treatment.name} in Turkey — Cost & Clinics | TreatWell Turkey`,
      description: `Prices from €${treatment.priceFrom.toLocaleString()} — save up to 70% vs UK. Compare verified clinics for ${treatment.name} in Turkey.`,
      url: `https://www.treatwellturkey.com/treatments/${treatment.slug}`,
      images: [{ url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=630&auto=format&fit=crop&q=80", width: 1200, height: 630 }],
      type: "website",
    },
  };
}

function savingPct(home: number, turkey: number) {
  return Math.round(((home - turkey) / home) * 100);
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const matchedClinics = getClinicsByTreatmentSlug(slug);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/treatments" className="hover:text-white">Treatments</Link>
                <span>/</span>
                <span className="text-white">{treatment.name}</span>
              </div>
              <div className="text-5xl mb-4">{treatment.emoji}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {treatment.name} in Turkey
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                {treatment.tagline}
              </p>

              {/* Price compare pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm">
                  <span className="text-slate-400">🇬🇧 UK average</span>
                  <div className="text-lg font-bold text-slate-300 line-through">
                    £{treatment.ukPrice.toLocaleString()}
                  </div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm">
                  <span className="text-slate-400">🇩🇪 Germany avg</span>
                  <div className="text-lg font-bold text-slate-300 line-through">
                    €{treatment.dePrice.toLocaleString()}
                  </div>
                </div>
                <div className="bg-green-500/20 border border-green-400/40 rounded-xl px-4 py-3 text-sm">
                  <span className="text-green-300">🇹🇷 Turkey from</span>
                  <div className="text-lg font-bold text-white">
                    €{treatment.priceFrom.toLocaleString()}
                  </div>
                </div>
                <div className="bg-green-600/20 border border-green-500/40 rounded-xl px-4 py-3 text-sm flex items-center gap-2">
                  <TrendingDown size={16} className="text-green-400" />
                  <div>
                    <div className="text-green-300 text-xs">You save</div>
                    <div className="text-white font-bold">
                      {savingPct(treatment.ukPrice, treatment.priceFrom)}% vs UK
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/get-a-quote"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                >
                  Get Free Quotes
                </Link>
                <Link
                  href="/cost-calculator"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-colors"
                >
                  Calculate My Saving
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick facts bar */}
        <section className="bg-white border-b border-slate-200 py-4">
          <div className="container">
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-blue-500" />
                <span>
                  <strong>Procedure:</strong> {treatment.durationDays} day
                  {treatment.durationDays !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-blue-500" />
                <span>
                  <strong>Recovery:</strong> {treatment.recoveryDays} day
                  {treatment.recoveryDays !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-green-500" />
                <span>
                  <strong>{matchedClinics.length}+ verified clinics</strong> available
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingDown size={15} className="text-green-500" />
                <span>
                  Save up to{" "}
                  <strong>
                    {savingPct(treatment.ukPrice, treatment.priceFrom)}%
                  </strong>{" "}
                  vs UK prices
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              {/* About */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why Choose Turkey for {treatment.name}?
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {treatment.description}
                </p>
              </section>

              {/* What's included */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What&apos;s Typically Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatment.includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 p-3 bg-green-50 border border-green-100 rounded-xl text-sm"
                    >
                      <CheckCircle
                        size={15}
                        className="text-green-500 mt-0.5 shrink-0"
                      />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  * Exact inclusions vary by clinic and package. Always confirm
                  with your chosen clinic before booking.
                </p>
              </section>

              {/* Matched clinics */}
              {matchedClinics.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Top Clinics for {treatment.name}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {matchedClinics.map((clinic) => (
                      <div
                        key={clinic.slug}
                        className="border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:border-blue-200 transition-all"
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-slate-900">
                                {clinic.name}
                              </h3>
                              <span
                                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${clinic.badgeColor}`}
                              >
                                {clinic.badge}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-slate-500">
                              <MapPin size={12} />
                              {clinic.city}, Turkey
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
                          <Star
                            size={13}
                            className="text-yellow-400 fill-yellow-400"
                          />
                          <span className="text-sm font-semibold">
                            {clinic.rating}
                          </span>
                          <span className="text-sm text-slate-400">
                            ({clinic.reviewCount} reviews)
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
                            View Full Profile
                          </Link>
                          <Link
                            href="/get-a-quote"
                            className="flex-1 text-center py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
                          >
                            Get Quote
                          </Link>
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
                  {treatment.faqs.map((faq) => (
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
              {/* CTA card */}
              <div className="bg-blue-600 text-white rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-2">
                  Get Your Free Clinic Matches
                </h3>
                <p className="text-blue-100 text-sm mb-5">
                  Tell us about your case and we&apos;ll send you quotes from
                  2-3 verified clinics within 24 hours.
                </p>
                <ul className="flex flex-col gap-2 mb-5">
                  {[
                    "100% free — no hidden fees",
                    "No commitment to book",
                    "Reply within 2 hours",
                    "GDPR compliant",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-blue-100"
                    >
                      <CheckCircle size={13} className="text-green-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-a-quote"
                  className="block text-center py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Get Free Quotes →
                </Link>
              </div>

              {/* Price summary card */}
              <div className="border border-slate-200 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Price Summary
                </h3>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">🇬🇧 UK (private)</span>
                    <span className="line-through text-slate-400">
                      £{treatment.ukPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">🇩🇪 Germany (private)</span>
                    <span className="line-through text-slate-400">
                      €{treatment.dePrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t border-slate-100 pt-3 flex justify-between font-semibold">
                    <span className="text-slate-900">🇹🇷 Turkey from</span>
                    <span className="text-blue-600">
                      €{treatment.priceFrom.toLocaleString()}
                    </span>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex justify-between font-semibold text-green-700">
                    <span>Your saving</span>
                    <span>
                      {savingPct(treatment.ukPrice, treatment.priceFrom)}% vs UK
                    </span>
                  </div>
                </div>
                <Link
                  href="/cost-calculator"
                  className="block text-center text-sm text-blue-600 hover:underline mt-3"
                >
                  Calculate exact saving →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
