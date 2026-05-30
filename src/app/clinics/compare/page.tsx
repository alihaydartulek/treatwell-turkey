"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle,
  X,
  Phone,
  Mail,
  ExternalLink,
  ArrowLeft,
  MapPin,
  Globe,
  Users,
  Clock,
  Stethoscope,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { clinics, type Clinic } from "@/lib/clinics";
import PriceDisplay from "@/components/ui/PriceDisplay";
import { trackClinicCall, trackClinicEmail } from "@/lib/analytics";

const currentYear = new Date().getFullYear();

type RowCtx = { bestPrice: number; bestRating: number };

function buildRows({
  bestPrice,
  bestRating,
}: RowCtx): { label: string; render: (c: Clinic) => React.ReactNode }[] {
  return [
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
    render: (c) => {
      const r = c.googleRating ?? c.rating;
      const isBest = r === bestRating;
      return (
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-slate-900">{r}</span>
            <span className="text-xs text-slate-400">
              ({(c.googleReviewCount ?? c.reviewCount).toLocaleString()} reviews)
            </span>
          </span>
          {isBest && (
            <span className="self-start text-[11px] font-semibold text-yellow-700 bg-yellow-50 border border-yellow-200 px-1.5 py-0.5 rounded-full">
              ★ Top rated
            </span>
          )}
        </div>
      );
    },
  },
  {
    label: "Starting Price",
    render: (c) => {
      const isBest = c.priceFrom === bestPrice;
      return (
        <div className="flex flex-col gap-1">
          <PriceDisplay eurAmount={c.priceFrom} className="text-lg font-bold text-slate-900" />
          {isBest && (
            <span className="self-start text-[11px] font-semibold text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 rounded-full">
              Lowest price
            </span>
          )}
        </div>
      );
    },
  },
  {
    label: "Patients Treated",
    render: (c) => (
      <span className="flex items-center gap-1.5 text-slate-700 font-medium">
        <Users size={13} className="text-slate-400 shrink-0" />
        {c.patientCount}
      </span>
    ),
  },
  {
    label: "Experience",
    render: (c) => (
      <span className="flex items-center gap-1.5 text-slate-600">
        <Clock size={13} className="text-slate-400 shrink-0" />
        {currentYear - c.established} years
        <span className="text-xs text-slate-400">(est. {c.established})</span>
      </span>
    ),
  },
  {
    label: "Medical Team",
    render: (c) => (
      <div className="flex flex-col gap-0.5">
        <span className="flex items-center gap-1.5 text-slate-700 font-medium text-sm">
          <Stethoscope size={13} className="text-slate-400 shrink-0" />
          {c.doctors.length} specialist{c.doctors.length !== 1 ? "s" : ""}
        </span>
        {c.doctors[0] && (
          <span className="text-xs text-slate-400 leading-tight">
            Lead: {c.doctors[0].name}
          </span>
        )}
      </div>
    ),
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
          href={`tel:${c.phone}`}
          onClick={() => trackClinicCall(c.slug, "compare-tool")}
          className="flex items-center justify-center gap-1.5 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition-colors"
        >
          <Phone size={12} />
          Call
        </a>
        <a
          href={`mailto:${c.email}`}
          onClick={() => trackClinicEmail(c.slug, "compare-tool")}
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
}

// Visual grouping of the comparison rows into logical sections.
const ROW_GROUPS: { title: string; labels: string[] }[] = [
  {
    title: "Overview",
    labels: ["Location", "Google Rating", "Starting Price", "Patients Treated", "Experience"],
  },
  {
    title: "Medical & Services",
    labels: ["Medical Team", "Accreditations", "Treatments", "Highlights"],
  },
  {
    title: "Languages & Contact",
    labels: ["Languages", "Website", "Contact"],
  },
];

function CompareTable() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slugParam = searchParams.get("slugs") ?? "";
  const slugs = slugParam.split(",").filter(Boolean).slice(0, 3);
  const selected = slugs
    .map((s) => clinics.find((c) => c.slug === s))
    .filter(Boolean) as Clinic[];

  const removeClinic = (slug: string) => {
    const next = slugs.filter((s) => s !== slug);
    router.push(
      next.length ? `/clinics/compare?slugs=${next.join(",")}` : "/clinics",
    );
  };

  // The frozen label column and the scrollable clinic columns are rendered
  // as two separate tables so the label column physically lives outside the
  // horizontal scroll container (robust on every browser, unlike sticky
  // table cells which Safari/iOS handle poorly). We sync row heights so the
  // two tables stay perfectly aligned.
  const labelTableRef = useRef<HTMLTableElement>(null);
  const dataTableRef = useRef<HTMLTableElement>(null);

  const useIsoEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsoEffect(() => {
    const syncHeights = () => {
      const lt = labelTableRef.current;
      const dt = dataTableRef.current;
      if (!lt || !dt) return;
      const lRows = [
        lt.tHead?.rows[0],
        ...Array.from(lt.tBodies[0]?.rows ?? []),
      ].filter(Boolean) as HTMLTableRowElement[];
      const dRows = [
        dt.tHead?.rows[0],
        ...Array.from(dt.tBodies[0]?.rows ?? []),
      ].filter(Boolean) as HTMLTableRowElement[];
      const n = Math.min(lRows.length, dRows.length);
      for (let i = 0; i < n; i++) {
        lRows[i].style.height = "auto";
        dRows[i].style.height = "auto";
      }
      for (let i = 0; i < n; i++) {
        const h = Math.max(
          lRows[i].getBoundingClientRect().height,
          dRows[i].getBoundingClientRect().height,
        );
        lRows[i].style.height = `${h}px`;
        dRows[i].style.height = `${h}px`;
      }
    };
    syncHeights();
    const ro = new ResizeObserver(syncHeights);
    if (labelTableRef.current) ro.observe(labelTableRef.current);
    if (dataTableRef.current) ro.observe(dataTableRef.current);
    window.addEventListener("resize", syncHeights);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugParam]);

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

  // Highlight the winning cell for price (lowest) and rating (highest).
  const bestPrice = Math.min(...selected.map((c) => c.priceFrom));
  const bestRating = Math.max(
    ...selected.map((c) => c.googleRating ?? c.rating),
  );
  const rows = buildRows({ bestPrice, bestRating });
  const rowsByLabel = new Map(rows.map((r) => [r.label, r.render]));

  // Flatten the grouped rows into a single ordered list shared by both
  // tables so the row indexes line up 1:1 for height syncing. `bg` carries
  // the zebra striping (only data rows are striped; group headers are bands).
  type VisualRow =
    | { kind: "group"; title: string; bg: string }
    | { kind: "data"; label: string; bg: string };
  const visualRows: VisualRow[] = [];
  let dataCount = 0;
  for (const group of ROW_GROUPS) {
    const labels = group.labels.filter((l) => rowsByLabel.has(l));
    if (!labels.length) continue;
    visualRows.push({ kind: "group", title: group.title, bg: "" });
    for (const label of labels) {
      visualRows.push({
        kind: "data",
        label,
        bg: dataCount % 2 === 0 ? "bg-slate-50" : "bg-white",
      });
      dataCount++;
    }
  }

  // Per-clinic column min width forces horizontal scroll (of the clinic
  // columns only) on small screens instead of squashing the columns.
  const dataMinWidth = selected.length * 240;

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

      <div className="flex items-start">
        {/* Frozen label column — its own table, outside the scroll area */}
        <table
          ref={labelTableRef}
          className="shrink-0 w-32 md:w-44 table-fixed border-separate border-spacing-0 border-r border-slate-100"
        >
          <thead>
            <tr>
              <th className="pb-6 align-bottom" />
            </tr>
          </thead>
          <tbody>
            {visualRows.map((row, i) =>
              row.kind === "group" ? (
                <tr key={i}>
                  <td className="pl-1 pr-3 pt-6 pb-2 align-bottom text-xs font-bold text-blue-700 uppercase tracking-wider">
                    {row.title}
                  </td>
                </tr>
              ) : (
                <tr key={i} className={row.bg}>
                  <td className="py-4 pl-1 pr-3 align-top text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {row.label}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>

        {/* Scrollable clinic columns */}
        <div className="overflow-x-auto pb-2 flex-1">
          <table
            ref={dataTableRef}
            className="w-full table-fixed border-separate border-spacing-0"
            style={{ minWidth: dataMinWidth }}
          >
            <colgroup>
              {selected.map((c) => (
                <col key={c.slug} />
              ))}
            </colgroup>

            <thead>
              <tr>
                {selected.map((clinic) => (
                  <th key={clinic.slug} className="pb-6 px-2 align-bottom">
                    <div className="relative bg-white border-2 border-blue-200 rounded-2xl p-4 text-left h-full">
                      <button
                        type="button"
                        onClick={() => removeClinic(clinic.slug)}
                        aria-label={`Remove ${clinic.name} from comparison`}
                        className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <X size={14} />
                      </button>
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${clinic.badgeColor}`}>
                        {clinic.badge}
                      </span>
                      <div className="font-bold text-slate-900 text-base leading-tight mb-0.5 pr-6 break-words">
                        {clinic.name}
                      </div>
                      <div className="text-xs text-slate-400">{clinic.city}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {visualRows.map((row, i) =>
                row.kind === "group" ? (
                  <tr key={i}>
                    <td colSpan={selected.length} className="pt-6 pb-2" />
                  </tr>
                ) : (
                  <tr key={i} className={row.bg}>
                    {selected.map((clinic) => (
                      <td key={clinic.slug} className="py-4 px-2 align-top break-words">
                        {rowsByLabel.get(row.label)!(clinic)}
                      </td>
                    ))}
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
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
      <main id="main-content">
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
