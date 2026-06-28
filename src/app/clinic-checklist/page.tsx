import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PrintButton from "@/components/ui/PrintButton";

export const metadata: Metadata = {
  title: "Questions to Ask a Clinic in Turkey — Free Checklist",
  description:
    "A free, printable checklist of the questions to ask before booking treatment in Turkey — covering the surgeon, the procedure, pricing, aftercare and safety.",
  alternates: { canonical: "https://www.cliniqturkey.com/clinic-checklist" },
};

const sections = [
  {
    title: "The surgeon & team",
    items: [
      "Who exactly performs the procedure — a qualified surgeon, or technicians?",
      "What are the surgeon's qualifications and how many of these cases do they do?",
      "Can I speak to the surgeon (not only a sales coordinator) before I book?",
      "Which professional bodies is the surgeon a member of (e.g. ISHRS)?",
    ],
  },
  {
    title: "The clinic",
    items: [
      "Do you hold a current Turkish Ministry of Health licence?",
      "What other accreditations do you have (ISO, JCI)?",
      "Can I see before-and-after photos of real patients at 12+ months?",
      "Where can I read independent reviews (Google, Trustpilot)?",
    ],
  },
  {
    title: "The procedure",
    items: [
      "Which technique do you recommend for my case, and why?",
      "What is the realistic expected result and timeline?",
      "What are the risks and possible complications?",
      "How long will I need to stay in Turkey?",
    ],
  },
  {
    title: "Price & what's included",
    items: [
      "What is the total price in writing for my specific case?",
      "Exactly what is included — transfers, hotel, medication, aftercare?",
      "Are there any costs that are NOT included?",
      "What is your policy if a revision or touch-up is needed?",
    ],
  },
  {
    title: "Aftercare & safety",
    items: [
      "What aftercare do you provide once I am back home?",
      "Who do I contact if I have a problem or concern afterwards?",
      "Will I get my treatment records and details of materials used?",
      "What language will my clinical conversations be in?",
    ],
  },
];

export default function ClinicChecklistPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-mesh text-white print:hidden">
          <div className="container py-16 md:py-20 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <ClipboardCheck size={14} className="text-teal-200" />
              <span>Free checklist</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Questions to ask before you book
            </h1>
            <p className="text-lg text-teal-100 leading-relaxed">
              Print this checklist and take it to every clinic consultation. The
              clinics worth choosing will be happy to answer all of it.
            </p>
          </div>
        </section>

        {/* Print bar */}
        <section className="container max-w-3xl pt-8 print:pt-0">
          <div className="flex items-center justify-between gap-4 mb-8 print:mb-4">
            <h2 className="text-xl font-bold text-slate-900 hidden print:block">
              Clinic question checklist — cliniqturkey.com
            </h2>
            <PrintButton />
          </div>

          {/* Checklist */}
          <div className="flex flex-col gap-8 pb-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 print:border-slate-300 print:break-inside-avoid"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded border-2 border-slate-300 shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500 border-t border-slate-200 pt-6 mb-12 print:hidden">
            For more on spotting a trustworthy clinic, read our guide on{" "}
            <Link href="/blog/how-to-choose-verify-clinic-turkey" className="text-teal-600 hover:underline">
              how to choose and verify a clinic in Turkey
            </Link>
            , or see{" "}
            <Link href="/how-we-verify" className="text-teal-600 hover:underline">
              how we verify the clinics we list
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <section className="bg-slate-50 border-t border-slate-200 print:hidden">
          <div className="container py-12 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Ready to start asking?
            </h2>
            <p className="text-slate-600 mb-6">
              Browse verified clinics and contact them directly with your questions.
            </p>
            <Link
              href="/clinics"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors"
            >
              Browse Clinics <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
