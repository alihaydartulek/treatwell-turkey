import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title}`,
    description: post.excerpt,
    alternates: { canonical: `https://www.cliniqturkey.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.cliniqturkey.com/blog/${slug}`,
      type: "article",
      images: [{ url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=630&auto=format&fit=crop&q=80", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-2">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-slate-900 mt-4 mb-1">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("| ")) {
      // Table — collect all table lines
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0]
        .split("|")
        .filter((c) => c.trim())
        .map((c) => c.trim());
      const rows = tableLines.slice(2).map((row) =>
        row
          .split("|")
          .filter((c) => c.trim())
          .map((c) => c.trim())
      );
      elements.push(
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                {headers.map((h, j) => (
                  <th key={j} className="text-left py-2 px-4 font-semibold text-slate-700 border-b border-slate-200">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  {row.map((cell, k) => (
                    <td key={k} className="py-2 px-4 text-slate-600 border-b border-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith("- [ ] ")) {
      elements.push(
        <div key={i} className="flex items-start gap-2 py-1">
          <span className="w-4 h-4 mt-0.5 border-2 border-slate-300 rounded shrink-0" />
          <span className="text-sm text-slate-700">{line.replace("- [ ] ", "")}</span>
        </div>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-slate-600 text-sm leading-relaxed ml-4 list-disc">
          {line.replace("- ", "")}
        </li>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      // Regular paragraph — handle inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={i} className="text-slate-600 leading-relaxed my-2">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-slate-900 font-semibold">
                {part.replace(/\*\*/g, "")}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-slate-900 text-white py-14">
          <div className="container max-w-3xl">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white">Guides</Link>
              <span>/</span>
              <span className="text-slate-300 truncate">{post.title}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-blue-300 bg-blue-900/40 border border-blue-800 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock size={11} />
                {post.readTime} min read
              </span>
              <span className="text-xs text-slate-500">{post.publishDate}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              {post.title}
            </h1>
            <p className="text-slate-300 text-lg">{post.excerpt}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <article className="lg:col-span-2 prose-sm max-w-none">
                {renderMarkdown(post.content)}
              </article>

              {/* Sidebar */}
              <aside className="flex flex-col gap-5">
                {/* CTA */}
                <div className="bg-blue-600 text-white rounded-2xl p-6 sticky top-24">
                  <h3 className="font-bold text-lg mb-2">
                    Ready to Get Quotes?
                  </h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Free, personalised quotes from verified clinics in 24 hours.
                  </p>
                  <Link
                    href="/get-a-quote"
                    className="block text-center py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Get Free Quotes ›
                  </Link>
                </div>

                {/* Related treatment */}
                {post.relatedTreatment && (
                  <div className="border border-slate-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-3">
                      Related Treatment
                    </h3>
                    <Link
                      href={`/treatments/${post.relatedTreatment}`}
                      className="flex items-center justify-between text-sm text-blue-600 hover:underline font-medium"
                    >
                      Compare clinics & prices
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}

                {/* Related posts */}
                {related.length > 0 && (
                  <div className="border border-slate-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-3">
                      Related Guides
                    </h3>
                    <div className="flex flex-col gap-3">
                      {related.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/blog/${r.slug}`}
                          className="text-sm text-blue-600 hover:underline leading-snug"
                        >
                          {r.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        {/* Back */}
        <div className="container py-6 border-t border-slate-200">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to all guides
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
