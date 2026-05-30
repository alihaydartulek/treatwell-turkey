import type { Metadata } from "next";
import Link from "next/link";
import { TrendingDown, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Turkey vs UK Medical Costs — Treatment Price Comparisons",
  description:
    "Compare the real cost of medical treatments in Turkey vs UK and Germany. Hair transplant, dental veneers, bariatric surgery, LASIK and more — see exactly how much you save.",
  alternates: { canonical: "https://www.cliniqturkey.com/compare" },
};

const comparisons = [
  {
    slug: "hair-transplant-turkey-vs-uk",
    title: "Hair Transplant: Turkey vs UK",
    ukPrice: "GBP 6,000 - 12,000",
    turkeyPrice: "from EUR 1,200",
    saving: "Up to 80%",
    treatment: "hair-transplant",
  },
  {
    slug: "dental-veneers-turkey-vs-uk",
    title: "Dental Veneers: Turkey vs UK",
    ukPrice: "GBP 600 - 1,200 per tooth",
    turkeyPrice: "from EUR 150 per tooth",
    saving: "Up to 75%",
    treatment: "dental",
  },
  {
    slug: "bariatric-surgery-turkey-vs-uk",
    title: "Bariatric Surgery: Turkey vs UK",
    ukPrice: "GBP 8,000 - 15,000",
    turkeyPrice: "from EUR 3,500",
    saving: "Up to 70%",
    treatment: "bariatric",
  },
  {
    slug: "lasik-turkey-vs-uk",
    title: "LASIK Eye Surgery: Turkey vs UK",
    ukPrice: "GBP 1,800 - 3,500 per eye",
    turkeyPrice: "from EUR 800 per eye",
    saving: "Up to 65%",
    treatment: "eye-surgery",
  },
  {
    slug: "rhinoplasty-turkey-vs-uk",
    title: "Rhinoplasty: Turkey vs UK",
    ukPrice: "GBP 5,000 - 10,000",
    turkeyPrice: "from EUR 2,500",
    saving: "Up to 65%",
    treatment: "cosmetic",
  },
  {
    slug: "ivf-turkey-vs-uk",
    title: "IVF Treatment: Turkey vs UK",
    ukPrice: "GBP 3,500 - 6,000 per cycle",
    turkeyPrice: "from EUR 2,000 per cycle",
    saving: "Up to 55%",
    treatment: "ivf",
  },
];

export default function ComparePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Turkey vs UK: Real Treatment Cost Comparisons
            </h1>
            <p className="text-lg text-slate-300">
              Honest, up-to-date price comparisons for the most popular medical
              treatments abroad. See exactly how much you can save at verified
              Turkish clinics.
            </p>
          </div>
        </section>

        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <h2 className="font-bold text-slate-900 text-lg mb-4 group-hover:text-blue-600 transition-colors">
                  {c.title}
                </h2>
                <div className="flex flex-col gap-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">UK private</span>
                    <span className="line-through text-slate-400">{c.ukPrice}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-slate-700">Turkey</span>
                    <span className="text-blue-600">{c.turkeyPrice}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-lg px-3 py-1.5 text-sm font-semibold text-green-700">
                    <TrendingDown size={14} />
                    Save {c.saving}
                  </div>
                  <span className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                    Full comparison <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <CheckCircle size={32} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              All prices verified from real clinic quotes
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              We source prices directly from verified clinics on our platform.
              No inflated UK prices, no unrealistic Turkey estimates.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Get Your Free Personal Quote
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
