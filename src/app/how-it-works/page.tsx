import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  MessageSquare,
  Plane,
  CheckCircle,
  Shield,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "How It Works — TreatWell Turkey",
  description:
    "Learn how TreatWell Turkey connects you with verified clinics, handles your quote requests, and supports you every step of the way — completely free.",
};

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Search & Compare Clinics",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    numColor: "text-blue-100",
    description:
      "Browse our directory of 150+ verified clinics across Istanbul, Ankara, Izmir and Antalya. Filter by treatment type, city, accreditation, price and patient rating. Read detailed clinic profiles including doctor CVs, before/after galleries and verified patient reviews.",
    sub: [
      "All clinics personally vetted by our team",
      "Verified patient reviews — we never edit feedback",
      "Real price ranges, not misleading 'from' prices",
      "Side-by-side clinic comparison tool",
    ],
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Submit Your Request",
    color: "bg-green-50 text-green-600 border-green-100",
    numColor: "text-green-100",
    description:
      "Fill in our simple multi-step form — it takes under 2 minutes. Tell us your treatment, your home country, and when you're thinking of travelling. You can upload photos if relevant (e.g. for hair transplant or dental work). Your dedicated coordinator will review your case personally.",
    sub: [
      "No sign-up or account required",
      "Your data is encrypted and GDPR compliant",
      "We only share your info with clinics you choose to contact",
      "Zero commitment — you're just requesting information",
    ],
  },
  {
    icon: Clock,
    number: "03",
    title: "Receive Matched Quotes",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    numColor: "text-purple-100",
    description:
      "Within 24 hours (usually 2 hours during working hours), your coordinator sends you personalised quotes from 2-3 matched clinics. Each quote is tailored to your specific case — not a generic price list. We explain the differences and help you ask the right questions.",
    sub: [
      "Personalised quotes based on your case",
      "Coordinator explains differences between clinics",
      "Free video consultation with the clinic arranged if wanted",
      "No pressure — take as long as you need",
    ],
  },
  {
    icon: Plane,
    number: "04",
    title: "Travel & Get Treated",
    color: "bg-orange-50 text-orange-600 border-orange-100",
    numColor: "text-orange-100",
    description:
      "Once you choose a clinic, your coordinator helps with any remaining questions and passes your confirmed details to the clinic. The clinic's international patient team takes over — arranging your airport transfer, accommodation advice, and a pre-treatment consultation on arrival.",
    sub: [
      "Clinic handles airport transfer (most packages)",
      "Pre-treatment consultation on day of arrival",
      "Coordinator remains your point of contact throughout",
      "Emergency support line available 24/7",
    ],
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Aftercare & Follow-up",
    color: "bg-teal-50 text-teal-600 border-teal-100",
    numColor: "text-teal-100",
    description:
      "After you return home, the clinic's aftercare team stays in touch via WhatsApp or email. Follow-up video consultations are included in all our partner clinic packages. Our platform coordinator also checks in at 1 month and 3 months to ensure you're happy with your results.",
    sub: [
      "WhatsApp aftercare with the clinic",
      "Video follow-up consultations included",
      "TreatWell coordinator check-ins at 1 and 3 months",
      "Leave a verified review to help future patients",
    ],
  },
];

const faqs = [
  {
    q: "How is TreatWell Turkey different from booking directly with a clinic?",
    a: "Booking directly, you have no independent verification, no price comparison, and no advocate if problems arise. We pre-vet every clinic, give you objective comparisons, negotiate on your behalf, and remain your independent point of contact throughout.",
  },
  {
    q: "How do you make money if it's free for patients?",
    a: "We charge clinics a referral fee only when a patient they've been matched with actually books a procedure. Patients always pay clinics directly — we never handle patient payments.",
  },
  {
    q: "What if something goes wrong during or after treatment?",
    a: "We are your advocate. If there's a complication or dispute, your coordinator escalates directly with the clinic. All our partner clinics have written complaints procedures and are required to respond within 48 hours to any escalation from our team.",
  },
  {
    q: "Can I trust the reviews on your platform?",
    a: "Yes — our reviews are from patients who were matched through our platform. We verify each review by confirming the reviewer had a consultation with the clinic in question. We never edit, filter or remove negative reviews.",
  },
  {
    q: "Do I have to choose from the clinics you suggest?",
    a: "No. Our suggested clinics are recommendations based on your case. You can ask us to add other clinics to your comparison, or contact any clinic independently — we're here to help, not to restrict your options.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
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
              From your first search to your final follow-up — here&apos;s exactly
              what happens, step by step.
            </p>
          </div>
        </section>

        {/* Trust strip */}
        <div className="bg-blue-600 text-white py-4">
          <div className="container flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: Shield, text: "100% free for patients" },
              { icon: CheckCircle, text: "All clinics independently verified" },
              { icon: Star, text: "No edited or filtered reviews" },
              { icon: Clock, text: "Reply within 2 hours" },
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
            <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6">
              It takes under 2 minutes. No account needed. No commitment.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get My Free Clinic Matches <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
