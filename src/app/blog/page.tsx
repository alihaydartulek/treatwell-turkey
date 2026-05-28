import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Patient Guides & Resources — TreatWell Turkey",
  description:
    "In-depth guides for patients considering medical treatment in Turkey — hair transplant, dental, bariatric surgery, IVF and more. Honest, independent advice.",
};

const categories = ["All", "Hair Transplant", "Dental", "Bariatric", "Destination Guide", "Patient Guide"];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-900 text-white py-14">
          <div className="container">
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
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
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((c) => (
                <button
                  key={c}
                  className="px-4 py-2 rounded-xl text-sm font-medium border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Featured post */}
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-10 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-56 md:h-auto bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-8xl opacity-40">{featured.coverEmoji}</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock size={11} />
                      {featured.readTime} min read
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {featured.excerpt}
                  </p>
                  <span className="flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Read guide <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Rest of posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <div className="h-36 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <span className="text-6xl opacity-40">{post.coverEmoji}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock size={10} />
                        {post.readTime} min
                      </span>
                    </div>
                    <h2 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-600 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
