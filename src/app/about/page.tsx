import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, Users, Heart, ArrowRight, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About CliniqTurkey — Who We Are & Why We Built This",
  description:
    "CliniqTurkey is an independent medical tourism comparison platform. We are not a clinic or agency — we are on your side. Learn why we built this and how we verify clinics.",
};

const values = [
  {
    icon: Shield,
    title: "Independence",
    desc: "We are not owned by or affiliated with any clinic. Our reviews, rankings and recommendations are based solely on patient outcomes and accreditation — not on what clinics pay us.",
  },
  {
    icon: CheckCircle,
    title: "Transparency",
    desc: "We publish real prices, genuine reviews (including negative ones), and clear explanations of how we earn money. No hidden fees, no inflated 'savings' claims.",
  },
  {
    icon: Heart,
    title: "Patient First",
    desc: "Every decision we make is filtered through one question: is this good for the patient? If a clinic consistently produces poor outcomes, we remove them regardless of commercial relationships.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We are building a community of informed medical travellers who share their real experiences. Every verified review helps the next patient make a better decision.",
  },
];

const stats = [
  { value: "18", label: "Verified Clinics Listed" },
  { value: "4", label: "Destinations Covered" },
  { value: "8+", label: "Countries Served" },
  { value: "Free", label: "For Patients" },
];

const team = [
  {
    name: "Founder",
    initials: "TW",
    bio: "Founded CliniqTurkey after personally struggling to find reliable, independent information when researching treatment options in Turkey. Built the platform to give patients the transparent, unbiased resource that didn't exist.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="container max-w-3xl">
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              We&apos;re on your side. <br />
              Not the clinic&apos;s.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              CliniqTurkey was built because finding honest, independent
              information about medical tourism was too hard. Every site we found
              was either run by a clinic, an agency, or was clearly prioritising
              the highest-paying advertisers over the best patient outcomes. We
              decided to build the platform we wished had existed.
            </p>
          </div>
        </section>

        {/* Stats */}
        <div className="bg-blue-600 text-white py-8">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold">{s.value}</div>
                  <div className="text-blue-200 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <div className="prose text-slate-600 leading-relaxed space-y-4">
              <p>
                Hundreds of thousands of people from the UK, Germany, Netherlands
                and across Europe choose to have medical procedures in Turkey every
                year. Most save between 50-75% compared to home country prices —
                often without sacrificing any quality.
              </p>
              <p>
                But the information landscape is broken. Clinic websites are
                marketing materials. Online forums are full of sponsored posts.
                &ldquo;Comparison&rdquo; sites are often just lead-generation tools with no
                real curation. Patients are left making life-changing medical
                decisions without reliable information.
              </p>
              <p>
                <strong className="text-slate-900">
                  CliniqTurkey exists to fix that.
                </strong>{" "}
                We verify clinics before listing them, display their real Google
                ratings, and give patients everything they need to contact clinics
                directly — no middleman, no coordinator, no hidden referral fees.
                We make money from clinic listing fees, not from your booking.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white border border-slate-200 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <v.icon size={18} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we verify */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              How We Verify Clinics
            </h2>
            <p className="text-slate-500 mb-8">
              Every clinic on CliniqTurkey goes through a multi-stage
              verification before being listed — and we continue to monitor them
              after listing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Valid Turkish Ministry of Health licence confirmed",
                "Physical clinic visit or video audit by our team",
                "Accreditation certificates verified (JCI, ISO etc.)",
                "Doctor qualifications and memberships checked",
                "Minimum 20 patient reviews collected before listing",
                "Price transparency — no hidden fee structures",
                "Complaint response time tested (must be under 48h)",
                "Ongoing monitoring — listed clinics can be delisted",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 p-4 border border-slate-200 rounded-xl text-sm"
                >
                  <CheckCircle
                    size={14}
                    className="text-green-500 mt-0.5 shrink-0"
                  />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-slate-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              The Team
            </h2>
            <div className="flex flex-col gap-5">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trustpilot-style CTA */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="container max-w-xl">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} className="text-yellow-300 fill-yellow-300" />
              ))}
            </div>
            <h2 className="text-3xl font-bold mb-3">
              Find the Right Clinic for You
            </h2>
            <p className="text-blue-100 mb-6">
              Browse verified clinics from the UK, Germany, Netherlands and
              across Europe — compare prices, read real Google reviews, contact directly.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors"
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
