import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, TrendingDown, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type ComparisonData = {
  slug: string;
  title: string;
  treatment: string;
  ukPrice: number;
  dePrice: number;
  turkeyFrom: number;
  unit: string;
  saving: number;
  ukIncludes: string[];
  turkeyIncludes: string[];
  ukExcludes: string[];
  summary: string;
};

const comparisons: ComparisonData[] = [
  {
    slug: "hair-transplant-turkey-vs-uk",
    title: "Hair Transplant: Turkey vs UK Cost Comparison",
    treatment: "hair-transplant",
    ukPrice: 8500,
    dePrice: 9500,
    turkeyFrom: 1500,
    unit: "procedure (3,000 grafts FUE)",
    saving: 82,
    ukIncludes: ["Surgeon fee", "Clinic overheads", "High property costs"],
    turkeyIncludes: [
      "Full FUE or DHI procedure",
      "PRP therapy",
      "Medication kit",
      "Airport transfers",
      "Hotel night (most packages)",
      "Follow-up consultation",
    ],
    ukExcludes: ["Airport transfers", "Accommodation", "PRP (often extra)"],
    summary:
      "Hair transplant in Turkey costs 70-82% less than in the UK. Istanbul clinics perform hundreds of procedures per month with the same FUE and DHI techniques used in UK clinics. The difference is driven by lower labour and property costs, not lower quality.",
  },
  {
    slug: "dental-veneers-turkey-vs-uk",
    title: "Dental Veneers: Turkey vs UK Cost Comparison",
    treatment: "dental",
    ukPrice: 900,
    dePrice: 1000,
    turkeyFrom: 200,
    unit: "per tooth (e.max porcelain)",
    saving: 78,
    ukIncludes: ["Dentist fee", "Lab fee", "Temporary veneers"],
    turkeyIncludes: [
      "Full consultation and X-rays",
      "Digital smile design",
      "Tooth preparation",
      "Temporary veneers",
      "Permanent e.max porcelain veneers",
      "Final fitting and adjustments",
    ],
    ukExcludes: ["Digital smile design (often extra)", "X-rays sometimes extra"],
    summary:
      "Dental veneers in Turkey cost 75-80% less per tooth than in the UK, using identical e.max Ivoclar materials and the same digital workflow. Top Istanbul dental clinics have treated thousands of UK patients and are equipped to the same standard as leading UK private practices.",
  },
  {
    slug: "bariatric-surgery-turkey-vs-uk",
    title: "Bariatric Surgery: Turkey vs UK Cost Comparison",
    treatment: "bariatric",
    ukPrice: 11000,
    dePrice: 13000,
    turkeyFrom: 3500,
    unit: "gastric sleeve (laparoscopic)",
    saving: 68,
    ukIncludes: ["Surgery", "Hospital stay (2-3 nights)", "Surgeon fee"],
    turkeyIncludes: [
      "All pre-operative tests",
      "Surgeon consultation",
      "Laparoscopic procedure",
      "3-4 nights private hospital room",
      "Post-operative dietary plan",
      "Vitamin protocol",
      "Airport transfers",
      "12-month follow-up",
    ],
    ukExcludes: ["Pre-op tests (often billed separately)", "Long-term follow-up", "Dietitian (often extra)"],
    summary:
      "Bariatric surgery in Turkey costs 60-70% less than UK private hospitals, and typically includes significantly more comprehensive post-operative support. JCI-accredited Turkish hospitals meet the same international quality standards as the best UK private hospitals.",
  },
  {
    slug: "lasik-turkey-vs-uk",
    title: "LASIK Eye Surgery: Turkey vs UK Cost Comparison",
    treatment: "eye-surgery",
    ukPrice: 2500,
    dePrice: 2800,
    turkeyFrom: 900,
    unit: "per eye (wavefront LASIK)",
    saving: 64,
    ukIncludes: ["Pre-op assessment", "Procedure", "Post-op drops (1 month)"],
    turkeyIncludes: [
      "Comprehensive pre-operative assessment",
      "Corneal mapping and topography",
      "Procedure (LASIK or SMILE)",
      "Post-operative drops",
      "Follow-up appointments",
      "Enhancement guarantee (most clinics)",
    ],
    ukExcludes: ["Enhancement (re-treatment) often charged extra", "Long-term follow-up varies"],
    summary:
      "LASIK eye surgery in Turkey costs 60-65% less than in the UK using the same Zeiss, Alcon WaveLight, and Johnson & Johnson laser platforms. The technology is global — the price difference reflects market economics, not clinical standards.",
  },
  {
    slug: "rhinoplasty-turkey-vs-uk",
    title: "Rhinoplasty: Turkey vs UK Cost Comparison",
    treatment: "cosmetic",
    ukPrice: 7500,
    dePrice: 8500,
    turkeyFrom: 2800,
    unit: "full rhinoplasty",
    saving: 63,
    ukIncludes: ["Surgeon fee", "Anaesthesia", "Hospital stay (1 night)"],
    turkeyIncludes: [
      "Surgeon consultation",
      "3D imaging and simulation",
      "Full rhinoplasty procedure",
      "Anaesthesia",
      "1-2 nights hospital stay",
      "Post-operative care kit",
      "Follow-up appointments",
    ],
    ukExcludes: ["3D simulation (often extra)", "Revision consultations"],
    summary:
      "Rhinoplasty in Turkey costs 60-65% less than in the UK. Istanbul has developed a particularly strong reputation for rhinoplasty, with surgeons performing high volumes of international cases and offering advanced 3D simulation technology as standard.",
  },
  {
    slug: "ivf-turkey-vs-uk",
    title: "IVF Treatment: Turkey vs UK Cost Comparison",
    treatment: "ivf",
    ukPrice: 5000,
    dePrice: 5500,
    turkeyFrom: 2000,
    unit: "per IVF cycle",
    saving: 60,
    ukIncludes: ["Egg retrieval", "Fertilisation", "Embryo transfer"],
    turkeyIncludes: [
      "Initial consultation and assessment",
      "Hormone monitoring",
      "Egg retrieval procedure",
      "Fertilisation and embryo culture",
      "Embryo transfer",
      "Embryo freezing (first year)",
      "Follow-up support",
    ],
    ukExcludes: ["Medications (significant additional cost)", "Embryo freezing (usually extra)", "ICSI (often extra)"],
    summary:
      "IVF in Turkey costs 50-60% less per cycle than in the UK. Turkish fertility clinics combine experienced embryologists, modern laboratory technology, and high success rates. Medications are a significant additional cost in both countries.",
  },
];

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = comparisons.find((c) => c.slug === slug);
  if (!data) return {};
  const year = new Date().getFullYear();
  return {
    title: `${data.title} ${year} | CliniqTurkey`,
    description: data.summary,
    alternates: { canonical: `https://www.cliniqturkey.com/compare/${slug}` },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = comparisons.find((c) => c.slug === slug);
  if (!data) notFound();

  const year = new Date().getFullYear();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cliniqturkey.com" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.cliniqturkey.com/compare" },
      { "@type": "ListItem", position: 3, name: data.title, item: `https://www.cliniqturkey.com/compare/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container max-w-3xl">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/compare" className="hover:text-white">Compare</Link>
              <span>/</span>
              <span className="text-white">{data.title.split(":")[0]}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title} {year}</h1>
            <p className="text-slate-300 text-lg">{data.summary}</p>
          </div>
        </section>

        <div className="container py-16 max-w-4xl">
          {/* Price comparison table */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-slate-100 rounded-2xl p-6 text-center">
              <div className="text-sm text-slate-500 mb-1">United Kingdom</div>
              <div className="text-2xl font-bold text-slate-400 line-through">
                &pound;{data.ukPrice.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1">per {data.unit}</div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-6 text-center">
              <div className="text-sm text-slate-500 mb-1">Germany</div>
              <div className="text-2xl font-bold text-slate-400 line-through">
                &euro;{data.dePrice.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1">per {data.unit}</div>
            </div>
            <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-6 text-center">
              <div className="text-sm text-green-600 font-semibold mb-1">Turkey from</div>
              <div className="text-2xl font-bold text-green-700">
                &euro;{data.turkeyFrom.toLocaleString()}
              </div>
              <div className="text-xs text-green-600 mt-1">per {data.unit}</div>
            </div>
          </div>

          {/* Saving banner */}
          <div className="bg-green-600 text-white rounded-2xl p-6 flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <TrendingDown size={32} className="text-green-200" />
              <div>
                <div className="text-2xl font-bold">Save up to {data.saving}% vs UK</div>
                <div className="text-green-200 text-sm">
                  Save &pound;{(data.ukPrice - data.turkeyFrom).toLocaleString()}+ per {data.unit}
                </div>
              </div>
            </div>
            <Link
              href="/get-a-quote"
              className="px-5 py-2.5 bg-white text-green-700 font-semibold rounded-xl hover:bg-green-50 transition-colors shrink-0"
            >
              Get Free Quote
            </Link>
          </div>

          {/* What's included comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="border border-slate-200 rounded-2xl p-6">
              <h2 className="font-bold text-slate-900 mb-4 text-lg">
                What Turkey Typically Includes
              </h2>
              <ul className="flex flex-col gap-2">
                {data.turkeyIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6">
              <h2 className="font-bold text-slate-900 mb-4 text-lg">
                What UK Typically Excludes
              </h2>
              <ul className="flex flex-col gap-2">
                {data.ukExcludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <X size={15} className="text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 mt-4">
                * Inclusions vary by clinic. Always confirm in writing before booking.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-teal-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Ready to see your personal quote?
            </h2>
            <p className="text-teal-100 mb-6">
              Tell us about your case and we will match you with 2-3 verified
              clinics and send you real quotes within 24 hours. Free, no commitment.
            </p>
            <Link
              href={`/treatments/${data.treatment}`}
              className="inline-block px-8 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition-colors"
            >
              Browse Verified Clinics →
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/treatments/${data.treatment}`}
              className="text-teal-600 hover:underline text-sm"
            >
              Browse verified clinics for this treatment &rarr;
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
