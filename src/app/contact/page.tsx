import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us — CliniqTurkey",
  description: "Get in touch with the CliniqTurkey team.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-white">
        <div className="container max-w-2xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h1>
          <p className="text-slate-500 mb-10">
            Questions about the platform, clinic listings, or partnership enquiries — get in touch below.
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <a
              href="mailto:hello@cliniqturkey.com"
              className="flex items-center gap-3 p-5 border border-slate-200 rounded-2xl hover:border-blue-300 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Mail size={18} className="text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Email</div>
                <div className="text-sm text-blue-600">hello@cliniqturkey.com</div>
              </div>
            </a>

            <div className="flex items-center gap-3 p-5 border border-slate-200 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                <MapPin size={18} className="text-slate-500" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Location</div>
                <div className="text-sm text-slate-500">Istanbul, Turkey</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900 mb-1">Looking for a clinic?</p>
            <p>We don&apos;t arrange medical procedures — patients contact clinics directly. Browse our <a href="/clinics" className="text-blue-600 hover:underline">clinic directory</a> to find and contact the right clinic for you.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
