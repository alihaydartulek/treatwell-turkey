import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  Star,
  BarChart3,
  MessageSquare,
  ArrowRight,
  Zap,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "List Your Clinic on TreatWell Turkey — Reach 10,000+ International Patients",
  description:
    "Join 150+ verified clinics and connect with qualified leads from the UK, Germany, Netherlands and across Europe. Flexible listing plans, no upfront commitment.",
};

const benefits = [
  {
    icon: Globe,
    title: "Reach European Patients",
    desc: "We drive qualified traffic from the UK, Germany, Netherlands, Belgium, Scandinavia and more. Our SEO reaches patients actively searching for your treatments.",
  },
  {
    icon: Users,
    title: "Pre-Qualified Leads",
    desc: "Every patient request goes through our coordinator team before reaching you. You only receive leads that match your treatments, pricing and availability.",
  },
  {
    icon: TrendingUp,
    title: "Pay for Results",
    desc: "Our lead-based model means you only pay when you receive a qualified enquiry. No large upfront fees, no paying for traffic that doesn't convert.",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    desc: "Verified patient reviews published on your profile. Positive reviews compound over time — clinics with 100+ reviews receive 4x more leads than new listings.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "See how many patients viewed your profile, which treatments they searched for, where they're from, and your lead conversion rate — all in one dashboard.",
  },
  {
    icon: MessageSquare,
    title: "Dedicated Account Manager",
    desc: "Every listed clinic gets a dedicated account manager who speaks your language (English, German, Turkish) and helps you optimise your profile.",
  },
];

const plans = [
  {
    name: "Standard Listing",
    price: "Free",
    priceNote: "Pay per lead",
    highlight: false,
    features: [
      "Basic clinic profile page",
      "Up to 5 treatment listings",
      "Patient reviews enabled",
      "Lead inbox",
      "Per-lead fee: €45-95",
      "Standard placement in search results",
    ],
    cta: "Get Listed Free",
    ctaHref: "/for-clinics/apply",
  },
  {
    name: "Premium Listing",
    price: "€199",
    priceNote: "/ month + reduced lead fees",
    highlight: true,
    features: [
      "Full clinic profile (unlimited content)",
      "Unlimited treatment listings",
      "Doctor profiles & before/after gallery",
      "Priority placement in search results",
      "Reduced lead fee: €25-65",
      "Monthly performance report",
      "Dedicated account manager",
      "Featured badge on profile",
    ],
    cta: "Start Premium",
    ctaHref: "/for-clinics/apply?plan=premium",
  },
  {
    name: "Featured Clinic",
    price: "€499",
    priceNote: "/ month — limited spots",
    highlight: false,
    features: [
      "Everything in Premium",
      "Featured on homepage & treatment pages",
      "Top of search results in your speciality",
      "Co-branded content (patient guides)",
      "Email campaign inclusion",
      "Lowest lead fees: €15-45",
      "Quarterly strategy call",
    ],
    cta: "Apply for Featured",
    ctaHref: "/for-clinics/apply?plan=featured",
  },
];

const steps = [
  {
    number: "01",
    title: "Apply Online",
    desc: "Fill in our clinic application form. We review accreditation documents, licence and patient reviews within 3 working days.",
  },
  {
    number: "02",
    title: "Profile Setup",
    desc: "Your account manager helps you build your profile — treatments, prices, doctor bios, photos. Most clinics are live within 5 days.",
  },
  {
    number: "03",
    title: "Receive Leads",
    desc: "Patient enquiries are routed to your lead inbox. You have 4 hours to respond — speed of response is the #1 factor in conversion.",
  },
  {
    number: "04",
    title: "Track & Grow",
    desc: "Monitor your profile views, lead volume and conversion in your dashboard. Your account manager provides monthly optimisation advice.",
  },
];

export default function ForClinicsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 bg-blue-900/40 border border-blue-800 rounded-full px-3 py-1 mb-4">
                <Zap size={13} />
                For Clinics & Hospitals
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Reach Thousands of <br />
                Pre-Qualified European Patients
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Join 150+ verified clinics on TreatWell Turkey — the leading
                independent platform for UK, German, Dutch and Scandinavian
                patients seeking treatment in Turkey.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                {[
                  "10,000+ patients per month",
                  "UK, DE, NL, BE, SE, NO markets",
                  "Pay only for qualified leads",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle size={14} className="text-green-400" />
                    {t}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/for-clinics/apply"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                >
                  Apply to List Your Clinic
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-colors"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Why List on TreatWell Turkey?
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto">
                We drive high-intent traffic from patients who are ready to
                book — not just browsing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-6 border border-slate-200 rounded-2xl hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <b.icon size={18} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Simple, Transparent Pricing
              </h2>
              <p className="text-slate-500">
                No hidden fees. No long-term contracts. Cancel anytime.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 flex flex-col ${
                    plan.highlight
                      ? "bg-blue-600 text-white border-2 border-blue-600 shadow-xl"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  {plan.highlight && (
                    <span className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-3">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={`font-bold text-lg mb-1 ${
                      plan.highlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-5">
                    <span
                      className={`text-3xl font-bold ${
                        plan.highlight ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ml-1 ${
                        plan.highlight ? "text-blue-200" : "text-slate-400"
                      }`}
                    >
                      {plan.priceNote}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle
                          size={13}
                          className={`mt-0.5 shrink-0 ${
                            plan.highlight ? "text-blue-200" : "text-green-500"
                          }`}
                        />
                        <span
                          className={
                            plan.highlight ? "text-blue-100" : "text-slate-600"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.ctaHref}
                    className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                      plan.highlight
                        ? "bg-white text-blue-700 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works for clinics */}
        <section className="py-20 bg-white">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Getting Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {steps.map((s) => (
                <div
                  key={s.number}
                  className="p-5 border border-slate-200 rounded-2xl"
                >
                  <div className="text-3xl font-bold text-slate-100 mb-3">
                    {s.number}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="container max-w-xl">
            <h2 className="text-3xl font-bold mb-3">
              Ready to Grow Your International Patient Base?
            </h2>
            <p className="text-blue-100 mb-6">
              Applications reviewed within 3 working days. Most clinics go
              live within 5 days of approval.
            </p>
            <Link
              href="/for-clinics/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors"
            >
              Apply Now — It&apos;s Free <ArrowRight size={18} />
            </Link>
            <p className="text-blue-200 text-sm mt-4">
              Questions? Email us at{" "}
              <a
                href="mailto:clinics@treatwellturkey.com"
                className="underline text-white"
              >
                clinics@treatwellturkey.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
