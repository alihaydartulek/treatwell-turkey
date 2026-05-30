import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Phone,
  Plane,
  CheckCircle,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Mail,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Browse verified Turkish clinics, compare prices and contact them directly via phone or email. No middleman, no coordinator — just transparent information.",
};

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Search & Compare Clinics",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    description:
      "Browse our directory of verified clinics across Istanbul, Ankara, Izmir and Antalya. Filter by treatment type, city, accreditation, price and patient rating. Read detailed clinic profiles with doctor information, treatment details and Google review scores.",
    sub: [
      "All listed clinics have a valid Turkish Ministry of Health licence",
      "Google ratings displayed — sourced publicly, not curated by us",
      "Real price ranges from each clinic",
      "Side-by-side clinic comparison tool",
    ],
  },
  {
    icon: Phone,
    number: "02",
    title: "Contact the Clinic Directly",
    color: "bg-green-50 text-green-600 border-green-100",
    description:
      "Every clinic on our platform has a phone number and email address on their profile. You contact them directly — no form to fill in, no intermediary, no coordinator. The clinic's own international patient team responds to you personally.",
    sub: [
      "phone or email — your choice",
      "You speak directly with the clinic, not with us",
      "No account or sign-up required",
      "Your personal data stays between you and the clinic",
    ],
  },
  {
    icon: Clock,
    number: "03",
    title: "Get a Personalised Quote",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    description:
      "The clinic's international patient team will ask for details about your case (photos if needed, medical history) and provide a personalised quote. Most clinics respond within a few hours during business hours. You can contact multiple clinics and compare their quotes directly.",
    sub: [
      "Send your photos or medical records directly to the clinic",
      "Ask the clinic any questions — pricing, techniques, recovery",
      "Compare quotes from multiple clinics side by side",
      "No obligation — take as long as you need",
    ],
  },
  {
    icon: Plane,
    number: "04",
    title: "Travel & Get Treated",
    color: "bg-orange-50 text-orange-600 border-orange-100",
    description:
      "Once you have chosen a clinic and agreed a date, the clinic's international patient team handles the logistics — airport transfer, accommodation advice, pre-treatment consultation on arrival. Most established clinics offer all-inclusive packages.",
    sub: [
      "Airport transfer arranged by the clinic (most packages)",
      "Pre-treatment consultation on day of arrival",
      "Clinic team is your point of contact throughout",
      "Payments made directly to the clinic — we never handle money",
    ],
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Aftercare via the Clinic",
    color: "bg-teal-50 text-teal-600 border-teal-100",
    description:
      "After you return home, the clinic's aftercare team stays in contact via phone or email. Follow-up video consultations are standard at all established Turkish clinics. You remain in direct contact with the clinical team throughout your recovery.",
    sub: [
      "Direct aftercare with the clinic's medical team",
      "Video follow-up consultations included in most packages",
      "Direct line to the clinic — not via a platform",
      "Leave a Google review to help future patients",
    ],
  },
];

const faqs = [
  {
    q: "Is CliniqTurkey a clinic or an agency?",
    a: "Neither. We are an independent directory and comparison platform. We list clinics, display their ratings and prices, and let you contact them directly. We have no financial relationship with the outcome of your treatment — we make money from clinic listing fees, not patient referrals.",
  },
  {
    q: "Do I have to go through you to contact a clinic?",
    a: "No. Every clinic on our platform has its own website, phone and email. You can contact them directly at any time, with or without using CliniqTurkey. We just make it easier to find and compare them.",
  },
  {
    q: "How do you make money if it is free for patients?",
    a: "We charge clinics a fee to be listed and featured on the platform. Patients always pay clinics directly — we never handle patient payments and have no referral commission.",
  },
  {
    q: "Can I trust the information on your platform?",
    a: "We display publicly available Google ratings and review counts for each clinic. Clinic descriptions are based on publicly verifiable information (their websites, accreditation bodies, Google Business profiles). We note clearly when information has been verified versus when it is self-reported by the clinic.",
  },
  {
    q: "What if something goes wrong during or after treatment?",
    a: "Your relationship is directly with the clinic, not with us. If there is a complication, you contact the clinic's aftercare team directly. For serious issues, you can also contact the Turkish Ministry of Health or the clinic's accreditation body (e.g. JCI). We recommend checking that your travel insurance covers medical procedures abroad before travelling.",
  },
  {
    q: "Do I need to contact only the clinics you suggest?",
    a: "No. Browse our full directory, use our comparison tool, and contact as many clinics as you like. Our role is to give you the information — the decision is entirely yours.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
          <div className="container text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              Transparent Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              How It Works
            </h1>
            <p className="text-lg text-slate-300">
              Browse verified clinics, compare prices, and contact them directly.
              No middleman. No coordinator. No hidden fees.
            </p>
          </div>
        </section>

        {/* Trust strip */}
        <div className="bg-blue-600 text-white py-4">
          <div className="container flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: Shield, text: "Free for patients" },
              { icon: CheckCircle, text: "Verified clinic listings" },
              { icon: Mail, text: "Direct clinic contact" },
              { icon: Star, text: "Real Google ratings" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon size={14} className="text-blue-200" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <section className="py-20 bg-white">
          <div className="container max-w-3xl mx-auto">
            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <div key={step.number} className="flex gap-5">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${step.color}`}
                    >
                      <step.icon size={20} />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-slate-200 my-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-slate-300">
                        STEP {step.number}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {step.sub.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle
                            size={13}
                            className="text-green-500 mt-0.5 shrink-0"
                          />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:bg-slate-50 list-none">
                    {faq.q}
                    <ArrowRight
                      size={15}
                      className="text-slate-400 group-open:rotate-90 transition-transform shrink-0"
                    />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <div className="pt-4">{faq.a}</div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="container max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Ready to Start?</h2>
            <p className="text-blue-100 mb-6">
              Browse our verified clinic directory — free, no sign-up required.
            </p>
            <Link
              href="/clinics"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors"
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
