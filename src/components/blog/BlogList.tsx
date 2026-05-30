"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";

const categories = ["All", "Hair Transplant", "Dental", "Bariatric", "IVF", "Eye Surgery", "Cosmetic Surgery", "Orthopaedics", "Destination Guide", "Patient Guide"];

export default function BlogList() {
  const [active, setActive] = useState("All");

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const filtered = active === "All"
    ? sorted
    : sorted.filter((p) => p.category === active);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
              active === c
                ? "bg-teal-600 text-white border-teal-600"
                : "border-slate-200 text-slate-700 hover:border-teal-400 hover:text-teal-600"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400 text-sm">
          No posts in this category yet.
        </div>
      )}

      {/* Featured post */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-10 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-teal-200 transition-all"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-56 md:h-auto bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
              <span className="text-8xl opacity-40">{featured.coverEmoji}</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock size={11} />
                  {featured.readTime} min read
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-3">
                {featured.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {featured.excerpt}
              </p>
              <span className="flex items-center gap-1 text-sm font-semibold text-teal-600">
                Read guide <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* Rest of posts */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-teal-200 transition-all"
            >
              <div className="h-36 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <span className="text-6xl opacity-40">{post.coverEmoji}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock size={10} />
                    {post.readTime} min
                  </span>
                </div>
                <h2 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-teal-600 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
