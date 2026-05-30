import type { Metadata } from "next";
import Link from "next/link";
import { Home, Search, Stethoscope, Building2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/clinics", label: "Browse Clinics", icon: Building2 },
  { href: "/treatments", label: "Explore Treatments", icon: Stethoscope },
  { href: "/get-a-quote", label: "Get a Free Quote", icon: Search },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="container py-24 text-center max-w-xl">
          <p className="text-6xl font-extrabold text-blue-600 mb-3">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            We couldn&apos;t find that page
          </h1>
          <p className="text-slate-500 mb-8">
            The link may be broken or the page may have moved. Here are some
            useful places to continue.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 text-slate-700 font-medium rounded-xl transition-colors"
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            <Home size={16} />
            Back to Home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
