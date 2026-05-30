import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How CliniqTurkey uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Cookie Policy</h1>
          <p className="text-sm text-slate-400 mb-10">Last updated: May 2025</p>

          <div className="prose-sm space-y-8 text-slate-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use the platform.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden mt-2">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left py-2 px-4 font-semibold text-slate-700 border-b border-slate-200">Type</th>
                      <th className="text-left py-2 px-4 font-semibold text-slate-700 border-b border-slate-200">Purpose</th>
                      <th className="text-left py-2 px-4 font-semibold text-slate-700 border-b border-slate-200">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-2 px-4 text-slate-600 border-b border-slate-100">Essential</td>
                      <td className="py-2 px-4 text-slate-600 border-b border-slate-100">Site functionality (e.g. filter preferences)</td>
                      <td className="py-2 px-4 text-slate-600 border-b border-slate-100">Session</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="py-2 px-4 text-slate-600 border-b border-slate-100">Analytics</td>
                      <td className="py-2 px-4 text-slate-600 border-b border-slate-100">Understanding usage patterns (anonymised)</td>
                      <td className="py-2 px-4 text-slate-600 border-b border-slate-100">Up to 12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">We do not use advertising or tracking cookies. We do not share cookie data with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Managing Cookies</h2>
              <p>You can control cookies through your browser settings. Disabling cookies may affect some site functionality. Most browsers allow you to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>View cookies stored on your device</li>
                <li>Delete cookies</li>
                <li>Block cookies from specific sites or all sites</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">More Information</h2>
              <p>See our <Link href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</Link> for full details on how we handle your data. Questions: <a href="mailto:cliniqturkey@gmail.com" className="text-teal-600 hover:underline">cliniqturkey@gmail.com</a></p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
