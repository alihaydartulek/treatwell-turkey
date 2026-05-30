import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, Star, TrendingDown, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getTreatmentBySlug, getAllTreatmentSlugs } from "@/lib/treatments";
import { clinics } from "@/lib/clinics";
import PriceDisplay from "@/components/ui/PriceDisplay";

const validCities = ["istanbul", "ankara", "izmir", "antalya"];

const cityLabels: Record<string, string> = {
  istanbul: "Istanbul",
  ankara: "Ankara",
  izmir: "Izmir",
  antalya: "Antalya",
};

const cityDescriptions: Record<string, string> = {
  istanbul: "Istanbul is Turkey's medical capital, home to the majority of internationally accredited clinics. With world-class facilities, experienced surgeons, and easy direct flights from the UK and Europe, Istanbul is the top destination for medical tourism.",
  ankara: "Ankara, Turkey's capital city, offers excellent medical facilities with lower patient volumes, meaning more personalised care and shorter waiting times. Many clinics offer competitive pricing compared to Istanbul.",
  izmir: "Izmir combines high-quality medical care with a relaxed Mediterranean atmosphere. Ideal for patients who want to combine their treatment with a coastal recovery stay. Direct flights from major European cities.",
  antalya: "Antalya is a growing medical tourism hub on Turkey's turquoise coast. Recover in a resort-quality setting while benefiting from modern, accredited clinics and highly competitive pricing.",
};

export async function generateStaticParams() {
  const slugs = getAllTreatmentSlugs();
  const params = [];
  for (const slug of slugs) {
    for (const city of validCities) {
      params.push({ slug, city });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment || !validCities.includes(city)) return {};

  const cityLabel = cityLabels[city];
  return {
    title: `${treatment.name} in ${cityLabel}, Turkey — Cost & Clinics 2025`,
    description: `Compare verified clinics for ${treatment.name} in ${cityLabel}, Turkey. Prices from EUR ${treatment.priceFrom.toLocaleString()}. Save up to 70% vs UK prices. Real Google reviews, direct contact.`,
    alternates: {
      canonical: `https://www.cliniqturkey.com/treatments/${slug}/${city}`,
    },
    openGraph: {
      title: `${treatment.name} in ${cityLabel} — Cost & Clinics`,
      description: `Find verified clinics for ${treatment.name} in ${cityLabel}, Turkey. Compare prices and save up to 70% vs UK.`,
      url: `https://www.cliniqturkey.com/treatments/${slug}/${city}`,
      type: "website",
    },
  };
}

function savingPct(home: number, turkey: number) {
  return Math.round(((home - turkey) / home) * 100);
}

export default async function TreatmentCityPage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment || !validCities.includes(city)) notFound();

  const cityLabel = cityLabels[city];
  const saving = savingPct(treatment.ukPrice, treatment.priceFrom);

  const cityClinics = clinics.filter(
    (c) =>
      c.city.toLowerCase() === cityLabel.toLowerCase() &&
      c.treatmentSlugs.includes(slug)
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-4 flex-wrap">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight size={13} />
                <Link href="/treatments" className="hover:text-white">Treatments</Link>
                <ChevronRight size={13} />
                <Link href={`/treatments/${slug}`} className="hover:text-white">{treatment.name}</Link>
                <ChevronRight size={13} />
                <span className="text-white">{cityLabel}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {treatment.name} in {cityLabel}, Turkey
              </h1>
              <p className="text-lg text-slate-300 mb-6 max-w-xl">
                Compare verified clinics for {treatment.name} in {cityLabel}. Real prices, real reviews — no middleman.
              </p>

              {/* Price pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm">
                  <span className="text-slate-400">UK average</span>
                  <div className="text-lg font-bold text-slate-300 line-through">
                    &pound;{treatment.ukPrice.toLocaleString()}
                  </div>
                </div>
                <div className="bg-green-500/20 border border-green-400/40 rounded-xl px-4 py-3 text-sm">
                  <span className="text-green-300">{cityLabel}, Turkey from</span>
                  <div className="text-lg font-bold text-white">
                    <PriceDisplay eurAmount={treatment.priceFrom} />
                  </div>
                </div>
                <div className="bg-green-600/20 border border-green-500/40 rounded-xl px-4 py-3 text-sm flex items-center gap-2">
                  <TrendingDown size={16} className="text-green-400" />
                  <div>
                    <div className="text-green-300 text-xs">You save</div>
                    <div className="text-white font-bold">{saving}% vs UK</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/get-a-quote"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                >
                  Get Free Quotes in {cityLabel}
                </Link>
                <Link
                  href={`/treatments/${slug}`}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-colors"
                >
                  All Turkey Clinics
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-12">

              {/* Why this city */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why Choose {cityLabel} for {treatment.name}?
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {cityDescriptions[city]}
                </p>
              </section>

              {/* Clinics in this city */}
              {cityClinics.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Top Clinics for {treatment.name} in {cityLabel}
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
                              {clinic.city}, Turkey
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-xs text-slate-400">From</div>
                            <div className="text-xl font-bold text-slate-900">
                              <PriceDisplay eurAmount={clinic.priceFrom} />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <Star size={13} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-semibold">{clinic.rating}</span>
                          <span className="text-sm text-slate-400">({clinic.reviewCount} reviews)</span>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {clinic.accreditations.map((a) => (
                            <span key={a} className="flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
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

              {cityClinics.length === 0 && (
                <section>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                    <p className="text-slate-600 mb-4">
                      We are currently verifying clinics for {treatment.name} in {cityLabel}. Browse all Turkey clinics below.
                    </p>
                    <Link
                      href={`/treatments/${slug}`}
                      className="inline-block px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      View All {treatment.name} Clinics
                    </Link>
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
                        <span className="text-slate-400 group-open:rotate-180 transition-transform shrink-0 text-lg">&#8964;</span>
                      </summary>
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <div className="pt-4">{faq.a}</div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Other cities */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {treatment.name} in Other Turkish Cities
                </h2>
                <div className="flex flex-wrap gap-3">
                  {validCities.filter((c) => c !== city).map((c) => (
                    <Link
                      key={c}
                      href={`/treatments/${slug}/${c}`}
                      className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 rounded-xl text-sm text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                    >
                      <MapPin size={13} />
                      {treatment.name} in {cityLabels[c]}
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              <div className="bg-blue-600 text-white rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-2">
                  Get Quotes from {cityLabel} Clinics
                </h3>
                <p className="text-blue-100 text-sm mb-5">
                  Tell us about your case and we&apos;ll match you with verified clinics in {cityLabel} within 24 hours.
                </p>
                <ul className="flex flex-col gap-2 mb-5">
                  {["100% free — no hidden fees", "No commitment to book", "Reply within 2 hours", "GDPR compliant"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-blue-100">
                      <CheckCircle size={13} className="text-green-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-a-quote"
                  className="block text-center py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Get Free Quotes
                </Link>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-900 mb-4">Price Summary</h3>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">UK (private)</span>
                    <span className="line-through text-slate-400">&pound;{treatment.ukPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Germany (private)</span>
                    <span className="line-through text-slate-400">&euro;{treatment.dePrice.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-slate-100 pt-3 flex justify-between font-semibold">
                    <span className="text-slate-900">{cityLabel}, Turkey from</span>
                    <span className="text-blue-600"><PriceDisplay eurAmount={treatment.priceFrom} /></span>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex justify-between font-semibold text-green-700">
                    <span>Your saving</span>
                    <span>{saving}% vs UK</span>
                  </div>
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
