import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQContent from "@/components/faq/FAQContent";
import { faqSections } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "FAQ — Medical Treatment in Turkey: Safety, Costs & Planning",
  description:
    "Answers to the most common questions about medical tourism in Turkey — is it safe, how much does it cost, how do I plan, and how does CliniqTurkey work.",
  alternates: { canonical: "https://www.cliniqturkey.com/faq" },
  openGraph: {
    title: "FAQ — Medical Treatment in Turkey",
    description:
      "Everything you need to know about medical tourism in Turkey — safety, costs, planning and more.",
    url: "https://www.cliniqturkey.com/faq",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections.flatMap((section) =>
    section.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container max-w-3xl">
            <span className="text-sm font-semibold text-teal-300 uppercase tracking-wider">
              Patient Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl">
              Everything you need to know about medical treatment in Turkey —
              safety, costs, planning, and how our platform works.
            </p>
          </div>
        </section>

        {/* Quick links */}
        <div className="bg-teal-600 text-white py-4">
          <div className="container flex flex-wrap gap-3 justify-center text-sm">
            {faqSections.map((s) => (
              <a
                key={s.title}
                href={`#${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-full transition-colors"
              >
                <span>{s.icon}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Interactive accordion (client component) */}
        <FAQContent />
      </main>
      <Footer />
    </>
  );
}
