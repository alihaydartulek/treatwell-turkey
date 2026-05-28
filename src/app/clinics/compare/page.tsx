"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle,
  X,
  MessageCircle,
  Mail,
  ExternalLink,
  ArrowLeft,
  MapPin,
  Globe,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { clinics, type Clinic } from "@/lib/clinics";

const rows: { label: string; render: (c: Clinic) => React.ReactNode }[] = [
  {
    label: "Location",
    render: (c) => (
      <span className="flex items-center gap-1 text-slate-600">
        <MapPin size={13} className="text-slate-400 shrink-0" />
        {c.district}, {c.city}
      </span>
    ),
  },
  {
    label: "Google Rating",
    render: (c) => (
      <span className="flex items-center gap-1">
        <Star size={14} className="text-yellow-400 fill-yellow-400" />
        <span className="font-semibold text-slate-900">{c.googleRating ?? c.rating}</span>
        <span className="text-xs text-slate-400">
          ({(c.googleReviewCount ?? c.reviewCount).toLocaleString()} reviews)
        </span>
      </span>
    ),
  },
  {
    label: "Starting Price",
    render: (c) => (
      <span className="text-lg font-bold text-slate-900">
        €{c.priceFrom.toLocaleString()}
      </span>
    ),
  },
  {
    label: "Established",
    render: (c) => <span className="text-slate-600">{c.established}</span>,
  },
  {
    label: "Accreditations",
    render: (c) => (
      <div className="flex flex-col gap-1">
        {c.accreditations.map((a) => (
          <span key={a} className="flex items-center gap-1 text-xs text-green-700">
            <CheckCircle size={11} className="shrink-0" />
            {a}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: "Languages",
    render: (c) => (
      <div className="flex flex-wrap gap-1">
        {c.languages.map((l) => (
          <span key={l} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
            {l}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: "Treatments",
    render: (c) => (
      <div className="flex flex-col gap-1">
        {c.treatments.slice(0, 5).map((t) => (
          <span key={t} className="text-xs text-slate-600">• {t}</span>
        ))}
        {c.treatments.length > 5 && (
          <span className="text-xs text-slate-400">+{c.treatments.length - 5} more</span>
        )}
      </div>
    ),
  },
  {
    label: "Highlights",
    render: (c) => (
      <div className="flex flex-col gap-1">
        {c.highlights.slice(0, 3).map((h) => (
          <span key={h} className="text-xs text-slate-600 flex items-start gap-1">
            <CheckCircle size={11} className="text-blue-500 mt-0.5 shrink-0" />
            {h}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: "Website",
    render: (c) => (
      <a
        href={c.website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
      >
        <Globe size={11} />
        Visit website
      </a>
    ),
  },
  {
    label: "Contact",
    render: (c) => (
      <div className="flex flex-col gap-2">
        <a
          href={`https://wa.me/${c.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition-colors"
        >
          <MessageCircle size={12} />
          WhatsApp
        </a>
        <a
          href={`mailto:${c.email}`}
          className="flex items-center justify-center gap-1.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors"
        >
          <Mail size={12} />
          Email
        </a>
        <Link
          href={`/clinics/${c.slug}`}
          className="flex items-center justify-center gap-1.5 py-2 border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 text-xs font-semibold rounded-lg transition-colors"
        >
          <ExternalLink size={11} />
          Full Profile
        </Link>
      </div>
    ),
  },
];

function CompareTable() {
  const searchParams = useSearchParams();
  const slugParam = searchParams.get("slugs") ?? "";
  const slugs = slugParam.split(",").filter(Boolean).slice(0, 3);
  const selected = slugs
    .map((s) => clinics.find((c) => c.slug === s))
    .filter(Boolean) as Clinic[];

  if (selected.length < 2) {
    return (
      <div className="container py-20 text-center">
        <p className="text-slate-500 mb-4">Select at least 2 clinics to compare.</p>
        <Link
          href="/clinics"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          <ArrowLeft size={14} />
          Back to clinics
        </Link>
      </div>
    );
  }

  const colWidth = selected.length === 2 ? "w-1/2" : "w-1/3";

  return (
    <div className="container py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/clinics"
          className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to clinics
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-sm text-slate-700 font-medium">Comparing {selected.length} clinics</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Clinic headers */}
          <thead>
            <tr>
              <th className="w-32 md:w-44" />
              {selected.map((clinic) => (
                <th key={clinic.slug} className={`${colWidth} pb-6 px-3 align-top`}>
                  <div className="bg-white border-2 border-blue-200 rounded-2xl p-4 text-left">
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${clinic.badgeColor}`}>
                      {clinic.badge}
                    </span>
                    <div className="font-bold text-slate-900 text-base leading-tight mb-0.5">
                      {clinic.name}
                    </div>
                    <div className="text-xs text-slate-400">{clinic.city}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-slate-50/60" : "bg-white"}
              >
                <td className="py-4 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider align-top w-32 md:w-44">
                  {row.label}
                </td>
                {selected.map((clinic) => (
                  <td key={clinic.slug} className={`py-4 px-3 align-top ${colWidth}`}>
                    {row.render(clinic)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add more clinics CTA */}
      {selected.length < 3 && (
        <div className="mt-8 p-5 border-2 border-dashed border-slate-200 rounded-2xl text-center">
          <p className="text-sm text-slate-500 mb-3">
            Add one more clinic to compare up to 3 side by side
          </p>
          <Link
            href="/clinics"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            <X size={13} className="rotate-45" />
            Add another clinic
          </Link>
        </div>
      )}
    </div>
  );
}

export default function ComparePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-900 text-white py-10">
          <div className="container">
            <h1 className="text-3xl font-bold mb-1">Side-by-Side Comparison</h1>
            <p className="text-slate-400 text-sm">
              Compare clinics on rating, price, accreditations, languages and more.
            </p>
          </div>
        </section>
        <Suspense fallback={<div className="container py-20 text-center text-slate-400">Loading...</div>}>
          <CompareTable />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
