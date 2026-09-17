import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CostCalculatorTool from "@/components/tools/CostCalculatorTool";

export const metadata: Metadata = {
  title: "Medical Tourism Cost Calculator — How Much Can You Save in Turkey?",
  description:
    "Calculate exactly how much you could save on hair transplant, dental, bariatric surgery and more in Turkey vs UK, Germany, Netherlands and other European countries.",
};

export default function CostCalculatorPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero-band border-b border-slate-200 dark:border-slate-800 py-16">
          <div className="container text-center max-w-2xl mx-auto">
            <span className="text-sm font-medium text-teal-700">
              Free Tool
            </span>
            <h1 className="text-4xl md:text-5xl text-slate-900 mt-2 mb-4">
              Cost Calculator
            </h1>
            <p className="text-lg text-slate-600">
              See exactly how much you could save by having your treatment in
              Turkey — including a realistic flight &amp; hotel estimate.
            </p>
          </div>
        </section>
        <CostCalculatorTool />
      </main>
      <Footer />
    </>
  );
}
