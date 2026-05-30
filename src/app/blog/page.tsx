import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Patient Guides & Resources",
  description:
    "In-depth guides for patients considering medical treatment in Turkey — hair transplant, dental, bariatric surgery, IVF and more. Honest, independent advice.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-slate-900 text-white py-14">
          <div className="container">
            <span className="text-sm font-semibold text-teal-300 uppercase tracking-wider">
              Independent Guides
            </span>
            <h1 className="text-4xl font-bold mt-2 mb-3">Patient Guides</h1>
            <p className="text-slate-400 max-w-xl">
              Everything you need to make an informed decision — written by our
              editorial team, not by clinics.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container">
            <BlogList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
