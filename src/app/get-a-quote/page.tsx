import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadCaptureSection from "@/components/home/LeadCaptureSection";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Quote — Compare Clinics in Turkey",
  description:
    "Submit your treatment request and receive personalised quotes from 2-3 verified Turkish clinics within 24 hours. Free, no commitment, GDPR compliant.",
};

const trustPoints = [
  {
    icon: CheckCircle,
    title: "100% Free",
    desc: "Completely free for patients. Clinics pay a fixed listing fee — we take no commission from bookings.",
  },
  {
    icon: Clock,
    title: "Direct Contact",
    desc: "Contact clinics directly via phone or email — no middleman, no waiting for a third party to relay your request.",
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    desc: "Your data is encrypted and never shared without your explicit consent.",
  },
  {
    icon: Users,
    title: "No Commitment",
    desc: "Contacting clinics is free and non-binding. Take your time and compare at your own pace.",
  },
];

export default async function GetAQuotePage({
  searchParams,
}: {
  searchParams: Promise<{ treatment?: string; clinic?: string }>;
}) {
  const { treatment, clinic } = await searchParams;

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Trust strip */}
        <section className="bg-slate-50 border-b border-slate-200 py-10">
          <div className="container">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Get Your Free Clinic Matches
              </h1>
              <p className="text-slate-500 max-w-lg mx-auto">
                Tell us about your treatment — we match you to the most suitable
                verified clinics and send you personalised quotes within 24 hours.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {trustPoints.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeadCaptureSection initialTreatment={treatment ?? ""} initialClinic={clinic ?? ""} />
      </main>
      <Footer />
    </>
  );
}
