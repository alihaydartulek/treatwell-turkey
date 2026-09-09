import Link from "next/link";
import { Star, MapPin, ArrowRight } from "lucide-react";
import type { Clinic } from "@/lib/clinics";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  clinics: Clinic[];
  bg?: "white" | "slate";
};

export default function ClinicStrip({ eyebrow, title, subtitle, clinics, bg = "white" }: Props) {
  return (
    <section className={bg === "slate" ? "py-16 bg-slate-50 border-y border-slate-200" : "py-16 bg-white"}>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
              {eyebrow}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">{title}</h2>
            {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
          </div>
          <Link
            href="/clinics"
            className="flex items-center gap-1 text-sm font-medium text-teal-600 hover:underline shrink-0"
          >
            Browse All Clinics <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clinics.map((c) => (
            <Link
              key={c.slug}
              href={`/clinics/${c.slug}`}
              className="group flex flex-col gap-2 p-5 bg-white border border-slate-200 rounded-2xl hover:border-teal-200 card-glow"
            >
              <div className="flex items-center gap-1.5">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-slate-900 text-sm">
                  {c.googleRating ?? c.rating}
                </span>
                <span className="text-xs text-slate-400">
                  ({(c.googleReviewCount ?? c.reviewCount).toLocaleString()})
                </span>
              </div>
              <h3 className="font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                {c.name}
              </h3>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <MapPin size={12} />
                {c.district}, {c.city}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {c.treatments.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-teal-600">
                View profile <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
