"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight, Shield, MessageCircle } from "lucide-react";
import { faqSections, type FAQ } from "@/lib/faq-data";

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-sm leading-snug">
          {faq.question}
        </span>
        {open ? (
          <ChevronUp size={18} className="text-blue-600 shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-slate-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQContent() {
  return (
    <>
      {/* FAQ Sections */}
      <div className="container max-w-3xl py-16 space-y-16">
        {faqSections.map((section) => (
          <div
            key={section.title}
            id={section.title.toLowerCase().replace(/\s+/g, "-")}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{section.icon}</span>
              <h2 className="text-2xl font-bold text-slate-900">
                {section.title}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {section.faqs.map((faq) => (
                <FAQItem key={faq.question} faq={faq} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <section className="bg-slate-50 border-t border-slate-200 py-14">
        <div className="container max-w-2xl text-center">
          <Shield size={32} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Still have questions?
          </h2>
          <p className="text-slate-500 mb-6 text-sm">
            Browse our verified clinic directory and contact any clinic
            directly — they can answer procedure-specific questions for free,
            with no commitment.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/clinics"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              Browse Clinics <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:hello@cliniqturkey.com"
              className="flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 font-medium rounded-xl transition-colors"
            >
              <MessageCircle size={16} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
