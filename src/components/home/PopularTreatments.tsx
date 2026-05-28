import Link from "next/link";
import { ArrowRight } from "lucide-react";

const treatments = [
  {
    title: "Hair Transplant",
    slug: "hair-transplant",
    priceFrom: 1200,
    saving: "Save up to £6,500",
    popular: true,
    desc: "FUE & DHI techniques from world-renowned Istanbul clinics.",
  },
  {
    title: "Dental Veneers",
    slug: "dental",
    priceFrom: 180,
    saving: "Save up to £4,000",
    popular: true,
    desc: "Porcelain & zirconia veneers with natural-looking results.",
  },
  {
    title: "Bariatric Surgery",
    slug: "bariatric",
    priceFrom: 3500,
    saving: "Save up to £9,000",
    popular: false,
    desc: "Gastric sleeve, bypass and band by accredited surgeons.",
  },
  {
    title: "Rhinoplasty",
    slug: "cosmetic",
    priceFrom: 2500,
    saving: "Save up to £5,000",
    popular: false,
    desc: "Nose reshaping and functional correction at top clinics.",
  },
  {
    title: "Eye Surgery",
    slug: "eye-surgery",
    priceFrom: 800,
    saving: "Save up to £2,000",
    popular: false,
    desc: "LASIK, PRK and lens implants for permanent clear vision.",
  },
  {
    title: "IVF & Fertility",
    slug: "ivf",
    priceFrom: 2200,
    saving: "Save up to £8,000",
    popular: false,
    desc: "IVF, egg donation and fertility treatments at certified clinics.",
  },
];

export default function PopularTreatments() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Most Popular
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Popular Treatments in Turkey
            </h2>
          </div>
          <Link
            href="/treatments"
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline shrink-0"
          >
            View All Treatments <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {treatments.map((t) => (
            <Link
              key={t.slug}
              href={`/treatments/${t.slug}`}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                  {t.title}
                </h3>
                {t.popular && (
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full shrink-0 ml-2">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                {t.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs text-slate-400">From</span>
                  <div className="text-lg font-bold text-slate-900">
                    €{t.priceFrom.toLocaleString()}
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  {t.saving}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
