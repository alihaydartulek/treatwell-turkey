import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using the CliniqTurkey platform.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Use</h1>
          <p className="text-sm text-slate-400 mb-10">Last updated: May 2025</p>

          <div className="prose-sm space-y-8 text-slate-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. What CliniqTurkey Is</h2>
              <p>CliniqTurkey is an independent directory and comparison platform that lists Turkish medical clinics for informational purposes. We are not a medical provider, travel agency or intermediary. We do not arrange, book or guarantee any medical procedure.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Clinic Information</h2>
              <p>Clinic information displayed on this platform is sourced from publicly available sources (clinic websites, Google Business, accreditation body registries) and from information provided by the clinics themselves. We make reasonable efforts to ensure accuracy but cannot guarantee that all information is current.</p>
              <p className="mt-2">Google ratings shown on clinic profiles are publicly sourced at the time of listing and may not reflect the most current rating. Always verify directly with the clinic before making any decisions.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Not Medical Advice</h2>
              <p>Nothing on this platform constitutes medical advice. Price estimates, treatment descriptions and recovery timelines are general information only. Always consult a qualified medical professional before deciding on any procedure. Individual results vary.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Your Relationship with Clinics</h2>
              <p>When you contact a clinic via this platform, you enter into a direct relationship with that clinic. CliniqTurkey is not a party to any agreement between you and a clinic. Any contractual terms, payment arrangements and medical liability are entirely between you and the clinic.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Cost Calculator</h2>
              <p>The cost calculator on this platform provides approximate estimates based on average market prices. Actual treatment costs vary significantly based on individual assessment, technique, clinic and timing. Flight and hotel costs are indicative only. Always obtain a personalised quote from the clinic before making any financial decisions.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Limitation of Liability</h2>
              <p>CliniqTurkey is not liable for any medical outcomes, complications, financial losses or other damages arising from procedures carried out at clinics listed on this platform. Use this platform as one of several sources of information when making your decision.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Intellectual Property</h2>
              <p>All content on this platform (text, design, code) is the property of CliniqTurkey. Clinic names, logos and trademarks belong to their respective owners.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Changes</h2>
              <p>We may update these terms. Continued use of the platform after changes constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact</h2>
              <p>Questions about these terms: <a href="mailto:cliniqturkey@gmail.com" className="text-blue-600 hover:underline">cliniqturkey@gmail.com</a></p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
