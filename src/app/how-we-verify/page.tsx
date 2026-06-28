import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, Star, XCircle, Search, ArrowRight, Mail } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { clinics, DATA_LAST_REVIEWED } from "@/lib/clinics";

export const metadata: Metadata = {
  title: "How We Verify Clinics — Our Methodology",
  description:
    "How CliniqTurkey checks the clinics it lists: Ministry of Health licensing, publicly sourced ratings (never curated by us), no fake reviews, and direct patient–clinic contact with no middleman.",
  alternates: { canonical: "https://www.cliniqturkey.com/how-we-verify" },
};

const faqs = [
  {
    q: "What does 'verified' mean on CliniqTurkey?",
    a: "Every clinic we list holds a valid Turkish Ministry of Health licence to operate. We record each clinic's accreditations, treatments, languages and contact details from official and public sources, and show the date the data was last reviewed.",
  },
  {
    q: "Where do the ratings come from?",
    a: "Ratings are sourced publicly — from Google, Trustpilot or other independent review platforms — and we label the source on each profile. We do not write, buy, edit or curate reviews, and we never inflate a score.",
  },
  {
    q: "Do you take a commission for referrals?",
    a: "No. We are not a coordinator or middleman. You contact clinics directly using the phone and email on their profile. We do not insert ourselves into your treatment or take a cut of it.",
  },
  {
    q: "How can a clinic get listed or correct its information?",
    a: "Clinics can contact us to be considered for listing or to correct details. Listing is based on licensing and public information — not on payment. Email cliniqturkey@gmail.com.",
  },
];

const principles = [
  {
    icon: Shield,
    title: "1. A valid licence is the minimum",
    body: "Every clinic we list holds a Turkish Ministry of Health licence to operate. We record additional accreditations (ISHRS, ISO, JCI and similar) where a clinic holds them. A licence is the floor, not the ceiling — it is the first thing we check, never the last.",
  },
  {
    icon: Star,
    title: "2. Ratings are public and labelled",
    body: "Ratings come from independent platforms — Google, Trustpilot, Trustindex — and we show the source next to the number. We never write, buy or edit reviews, and we do not curate scores to make a clinic look better than it is.",
  },
  {
    icon: Search,
    title: "3. We show our sources and the date",
    body: `Each clinic profile reflects information from official and public sources. Prices and ratings were last reviewed in ${DATA_LAST_REVIEWED}, and that date is shown on every profile so you know how fresh the data is.`,
  },
  {
    icon: CheckCircle,
    title: "4. You contact clinics directly",
    body: "Every profile has the clinic's own phone and email. You speak to the clinic's international patient team yourself — there is no form that routes through us, no coordinator, and no commission. Your data stays between you and the clinic.",
  },
];

const neverDo = [
  "Write, buy or invent patient reviews",
  "Take a commission or referral fee on your treatment",
  "Let clinics pay to rank higher or hide negative information",
  "Insert a coordinator or middleman between you and the clinic",
  "Publish ratings without showing where they came from",
];

export default function HowWeVerifyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-mesh text-white">
          <div className="container py-16 md:py-20 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <Shield size={14} className="text-teal-200" />
              <span>Our methodology</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              How we verify the clinics we list
            </h1>
            <p className="text-lg text-teal-100 leading-relaxed">
              Choosing a clinic abroad is a serious decision. Here is exactly how
              we check the clinics on CliniqTurkey — and the things we refuse to do.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="container py-14 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-2xl p-6 card-glow"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-teal-600" />
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">{title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What we never do */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="container py-14 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              What we never do
            </h2>
            <ul className="flex flex-col gap-3">
              {neverDo.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4"
                >
                  <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 mt-6">
              We currently list{" "}
              <strong className="text-slate-700">{clinics.length} verified clinics</strong>{" "}
              across Istanbul, Ankara, Izmir and Antalya. Read more about who we are
              on our <Link href="/about" className="text-teal-600 hover:underline">About page</Link>,
              or see the full <Link href="/clinics" className="text-teal-600 hover:underline">clinic directory</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="container py-14 max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="bg-white border border-slate-200 rounded-xl p-5 group"
              >
                <summary className="font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-teal-600 group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-50 border-t border-slate-200">
          <div className="container py-12 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Start comparing verified clinics
            </h2>
            <p className="text-slate-600 mb-6">
              Browse {clinics.length} licensed clinics, compare honest prices and
              contact them directly.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/clinics"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors"
              >
                Browse Clinics <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:cliniqturkey@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Mail size={18} /> Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
