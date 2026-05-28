import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Star,
  CheckCircle,
  Globe,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getClinicBySlug, getAllClinicSlugs } from "@/lib/clinics";

export async function generateStaticParams() {
  return getAllClinicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);
  if (!clinic) return {};
  const ogImage = clinic.coverImage
    ? clinic.coverImage
    : "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=630&auto=format&fit=crop&q=80";
  return {
    title: `${clinic.name} — ${clinic.city} Reviews & Prices`,
    description: `Read verified patient reviews for ${clinic.name} in ${clinic.city}. Treatments from €${clinic.priceFrom.toLocaleString()}. ${clinic.accreditations.slice(0, 2).join(", ")}. Compare and contact directly.`,
    alternates: { canonical: `https://www.treatwellturkey.com/clinics/${clinic.slug}` },
    openGraph: {
      title: `${clinic.name} — ${clinic.city} | TreatWell Turkey`,
      description: `${clinic.tagline} Treatments from €${clinic.priceFrom.toLocaleString()}. ${clinic.googleReviewCount ?? clinic.reviewCount} Google reviews.`,
      url: `https://www.treatwellturkey.com/clinics/${clinic.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: clinic.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${clinic.name} — ${clinic.city}`,
      description: `Treatments from €${clinic.priceFrom.toLocaleString()} · ${clinic.googleRating ?? clinic.rating}★ · ${clinic.city}`,
      images: [ogImage],
    },
  };
}


const slugToTreatmentName: Record<string, string> = {
  "hair-transplant": "Hair Transplant",
  "dental": "Dental Veneers",
  "bariatric": "Bariatric Surgery",
  "cosmetic": "Cosmetic Surgery",
  "eye-surgery": "Eye Surgery",
  "ivf": "IVF & Fertility",
};

export default async function ClinicProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);
  if (!clinic) notFound();

  const primarySlug = clinic.treatmentSlugs[0] ?? "";
  const treatmentName = slugToTreatmentName[primarySlug] ?? "";
  const quoteUrl = treatmentName
    ? `/get-a-quote?treatment=${encodeURIComponent(treatmentName)}&clinic=${clinic.slug}`
    : "/get-a-quote";

  const clinicJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    description: clinic.description.slice(0, 300),
    url: `https://www.treatwellturkey.com/clinics/${clinic.slug}`,
    ...(clinic.coverImage ? { image: clinic.coverImage } : {}),
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.district,
      addressLocality: clinic.city,
      addressCountry: "TR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(clinic.googleRating ?? clinic.rating),
      reviewCount: String(clinic.googleReviewCount ?? clinic.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: clinic.priceFrom < 500 ? "€" : clinic.priceFrom < 2000 ? "€€" : "€€€",
    foundingDate: String(clinic.established),
    ...(clinic.reviews.length > 0
      ? {
          review: clinic.reviews.slice(0, 3).map((r) => ({
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: String(r.rating) },
            author: { "@type": "Person", name: r.name },
            reviewBody: r.text,
          })),
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
      />
      <Header />
      <main>
        {/* Cover */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          {/* Cover photo strip */}
          {clinic.coverImage && (
            <div className="relative h-52 md:h-72 overflow-hidden">
              <Image
                src={clinic.coverImage}
                alt={clinic.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-slate-900/80" />
            </div>
          )}

          <div className="container py-10">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/clinics" className="hover:text-white">Clinics</Link>
              <span>/</span>
              <span className="text-white">{clinic.name}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{clinic.name}</h1>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${clinic.badgeColor}`}>
                    {clinic.badge}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-400 mb-4">
                  <MapPin size={14} />
                  <span className="text-sm">
                    {clinic.district}, {clinic.city}, Turkey
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <strong className="text-white">{clinic.rating}</strong>
                    <span>({clinic.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>Est. {clinic.established}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} />
                    <span>{clinic.patientCount} patients treated</span>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="flex flex-col gap-2 shrink-0">
                <Link
                  href={quoteUrl}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors text-center"
                >
                  Get Free Quote
                </Link>
                <a
                  href={`https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl text-sm transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations bar */}
        <div className="bg-green-50 border-b border-green-200 py-3">
          <div className="container flex flex-wrap gap-3 items-center">
            <span className="text-sm font-semibold text-green-800">
              Accreditations:
            </span>
            {clinic.accreditations.map((a) => (
              <span
                key={a}
                className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-white border border-green-200 px-3 py-1 rounded-full"
              >
                <CheckCircle size={11} />
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 flex flex-col gap-12">

              {/* About */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Clinic</h2>
                <p className="text-slate-600 leading-relaxed">{clinic.description}</p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose {clinic.name}?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {clinic.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm">
                      <CheckCircle size={15} className="text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{h}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Treatments & prices */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Treatments & Prices</h2>
                <div className="border border-slate-200 rounded-2xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="text-left py-3 px-4 text-slate-600 font-semibold">Treatment</th>
                        <th className="text-right py-3 px-4 text-blue-700 font-semibold">Price (€)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clinic.treatments.map((t, i) => (
                        <tr key={t} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                          <td className="py-3 px-4 text-slate-700">{t}</td>
                          <td className="py-3 px-4 text-right font-medium text-slate-900">
                            From €{(clinic.priceFrom + i * 150).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2 px-1">
                  * Prices are indicative. Exact quotes depend on individual assessment. Request a free personalised quote.
                </p>
              </section>

              {/* Doctors */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Medical Team</h2>
                <div className="flex flex-col gap-5">
                  {clinic.doctors.map((doc) => (
                    <div key={doc.name} className="flex gap-4 p-5 border border-slate-200 rounded-2xl">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-bold text-slate-900">{doc.name}</h3>
                          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                            {doc.title}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 mb-1">
                          {doc.specialty} · {doc.experience} years experience
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">{doc.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Reviews */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Patient Reviews
                  </h2>
                  {clinic.googleRating && (
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.09 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-xl font-bold text-slate-900">{clinic.googleRating}</span>
                      <span className="text-slate-500 text-sm">
                        ({clinic.googleReviewCount?.toLocaleString()} Google reviews)
                      </span>
                    </div>
                  )}
                </div>

                {clinic.reviews.length > 0 ? (
                  <>
                    <div className="flex flex-col gap-4">
                      {clinic.reviews.map((review) => (
                        <div key={review.name} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                                {review.name[0]}
                              </div>
                              <div>
                                <div className="font-semibold text-slate-900 text-sm">{review.name}</div>
                                <div className="text-xs text-slate-500">{review.country}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex gap-0.5 justify-end mb-0.5">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                                ))}
                              </div>
                              <div className="text-xs text-slate-400">{review.date}</div>
                            </div>
                          </div>
                          {review.verified && (
                            <div className="flex items-center gap-1 text-xs text-green-600 mb-2">
                              <CheckCircle size={11} />
                              Verified patient
                            </div>
                          )}
                          <p className="text-sm text-slate-700 leading-relaxed">{review.text}</p>
                        </div>
                      ))}
                    </div>
                    {clinic.googleReviewCount && (
                      <div className="mt-4 text-center">
                        <a
                          href={`https://www.google.com/search?q=${encodeURIComponent(clinic.name + " " + clinic.city + " reviews")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
                        >
                          View all {clinic.googleReviewCount.toLocaleString()} Google Reviews →
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-10 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
                    <p className="text-sm font-medium text-slate-600 mb-1">
                      No reviews added yet
                    </p>
                    <p className="text-xs text-slate-400 mb-4">
                      This clinic has{" "}
                      {clinic.googleReviewCount?.toLocaleString()} reviews on Google.
                    </p>
                    {clinic.website && (
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(clinic.name + " " + clinic.city + " reviews")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline font-medium"
                      >
                        View Google Reviews →
                      </a>
                    )}
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5 sticky top-24 self-start">
              {/* CTA */}
              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">
                  Request a Free Quote
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get a personalised quote from {clinic.name} within 24 hours.
                  No commitment.
                </p>
                <Link
                  href={quoteUrl}
                  className="block text-center py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors mb-3"
                >
                  Get Free Quote
                </Link>
                <a
                  href={`https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Contact info */}
              <div className="border border-slate-200 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-3 text-sm">
                  <a href={`tel:${clinic.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
                    <Phone size={14} className="shrink-0" />
                    {clinic.phone}
                  </a>
                  <a href={`mailto:${clinic.email}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
                    <Mail size={14} className="shrink-0" />
                    {clinic.email}
                  </a>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Globe size={14} className="shrink-0" />
                    <span className="flex flex-wrap gap-1">
                      {clinic.languages.map((l) => (
                        <span key={l} className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">{l}</span>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin size={14} className="shrink-0" />
                    {clinic.district}, {clinic.city}
                  </div>
                </div>
              </div>

              {/* Accreditations */}
              <div className="border border-slate-200 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Award size={16} className="text-blue-500" />
                  Accreditations
                </h3>
                <div className="flex flex-col gap-2">
                  {clinic.accreditations.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle size={13} className="text-green-500 shrink-0" />
                      {a}
                    </div>
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
