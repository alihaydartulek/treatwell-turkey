import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { glossaryTerms, getGlossaryCategories } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Medical Tourism Glossary — Hair, Dental & Treatment Terms",
  description:
    "Plain-English definitions of the terms you meet when researching treatment in Turkey: FUE, DHI, grafts, veneers, crowns, LASIK, IVF, accreditation and more.",
  alternates: { canonical: "https://www.cliniqturkey.com/glossary" },
};

export default function GlossaryPage() {
  const categories = getGlossaryCategories();

  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "CliniqTurkey Medical Tourism Glossary",
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-mesh text-white">
          <div className="container py-16 md:py-20 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <BookOpen size={14} className="text-teal-200" />
              <span>Glossary</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Medical tourism terms, explained simply
            </h1>
            <p className="text-lg text-teal-100 leading-relaxed">
              Researching treatment abroad means meeting a lot of jargon. Here are
              clear, plain-English definitions of the words you will come across.
            </p>
          </div>
        </section>

        {/* Category nav */}
        <section className="border-b border-slate-200 bg-slate-50 sticky top-0 z-10">
          <div className="container py-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c}
                href={`#${c.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-colors"
              >
                {c}
              </a>
            ))}
          </div>
        </section>

        {/* Terms by category */}
        <section className="container py-12 max-w-3xl">
          {categories.map((category) => (
            <div
              key={category}
              id={category.toLowerCase().replace(/[^a-z]+/g, "-")}
              className="mb-12 scroll-mt-20"
            >
              <h2 className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-5">
                {category}
              </h2>
              <dl className="flex flex-col gap-5">
                {glossaryTerms
                  .filter((t) => t.category === category)
                  .map((t) => (
                    <div
                      key={t.slug}
                      id={t.slug}
                      className="bg-white border border-slate-200 rounded-2xl p-5 scroll-mt-24"
                    >
                      <dt className="font-bold text-slate-900 mb-1.5">{t.term}</dt>
                      <dd className="text-sm text-slate-600 leading-relaxed">
                        {t.definition}
                      </dd>
                    </div>
                  ))}
              </dl>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-slate-50 border-t border-slate-200">
          <div className="container py-12 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Ready to compare clinics?
            </h2>
            <p className="text-slate-600 mb-6">
              Now you know the terms — browse verified clinics and see real prices.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/clinics"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors"
              >
                Browse Clinics <ArrowRight size={18} />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
              >
                Read Patient Guides
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
