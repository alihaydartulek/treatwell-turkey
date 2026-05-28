import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — CliniqTurkey",
  description: "How CliniqTurkey collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-400 mb-10">Last updated: May 2025</p>

          <div className="prose-sm space-y-8 text-slate-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who We Are</h2>
              <p>CliniqTurkey is an independent medical tourism directory and comparison platform. We connect patients with verified Turkish clinics but do not act as a medical provider, agency or intermediary. Our platform is free for patients to use.</p>
              <p className="mt-2">Contact: <a href="mailto:hello@cliniqturkey.com" className="text-blue-600 hover:underline">hello@cliniqturkey.com</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Data We Collect</h2>
              <p>CliniqTurkey does not require account registration. We collect minimal data:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Usage data</strong> — pages visited, browser type, country of origin (via standard analytics)</li>
                <li><strong>Contact form data</strong> — if you use our contact form: name, email address, message content</li>
                <li><strong>Cookies</strong> — see our <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link></li>
              </ul>
              <p className="mt-2">We do <strong>not</strong> collect medical information. If you send medical information directly to a clinic via WhatsApp or email, that data is between you and the clinic — not us.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Data</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>To respond to contact form enquiries</li>
                <li>To analyse platform usage and improve the service (anonymised)</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="mt-2">We do not sell your data. We do not share your data with clinics unless you contact them directly.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Legal Basis (GDPR)</h2>
              <p>We process data under the following lawful bases:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Legitimate interest</strong> — for analytics and platform improvement</li>
                <li><strong>Contract performance</strong> — to respond to your enquiries</li>
                <li><strong>Legal obligation</strong> — where required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Your Rights</h2>
              <p>Under GDPR you have the right to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing</li>
                <li>Lodge a complaint with your national data protection authority</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, email <a href="mailto:hello@cliniqturkey.com" className="text-blue-600 hover:underline">hello@cliniqturkey.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Third-Party Links</h2>
              <p>Our platform links to clinic websites and WhatsApp. Once you leave our platform, their own privacy policies apply. We are not responsible for third-party data practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Changes to This Policy</h2>
              <p>We may update this policy. Material changes will be noted at the top of this page with an updated date.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
