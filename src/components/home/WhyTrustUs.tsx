import Link from "next/link";
import { ShieldCheck, Star, MessageSquare, XOctagon, ArrowRight, ClipboardCheck, BookOpen } from "lucide-react";
import { clinics } from "@/lib/clinics";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Verified, licensed clinics",
    body: "Every clinic we list holds a Turkish Ministry of Health licence. We record accreditations from official and public sources.",
  },
  {
    icon: Star,
    title: "Honest, sourced ratings",
    body: "Ratings come from independent platforms like Google and Trustpilot — labelled with their source. We never inflate a score.",
  },
  {
    icon: MessageSquare,
    title: "Direct contact, no middleman",
    body: "You contact clinics yourself using the phone and email on their profile. No coordinator, no referral commission.",
  },
  {
    icon: XOctagon,
    title: "No fake reviews, ever",
    body: "We don't write, buy or invent reviews. Where a clinic has reviews, we point you to the real ones on Google.",
  },
];

const links = [
  { label: "How We Verify Clinics", href: "/how-we-verify", icon: ShieldCheck },
  { label: "Clinic Question Checklist", href: "/clinic-checklist", icon: ClipboardCheck },
  { label: "Medical Glossary", href: "/glossary", icon: BookOpen },
];

export default function WhyTrustUs() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
            Independent &amp; Transparent
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Why patients trust CliniqTurkey
          </h2>
          <p className="text-slate-500">
            We list {clinics.length}&nbsp;verified clinics — and we&apos;re open
            about exactly how we check them and how we make our money.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white border border-slate-200 rounded-2xl p-6 card-glow"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                <Icon size={20} className="text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:border-teal-200 hover:text-teal-700 hover:bg-teal-50 transition-colors"
            >
              <Icon size={16} className="text-teal-600" />
              {label}
              <ArrowRight size={14} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
