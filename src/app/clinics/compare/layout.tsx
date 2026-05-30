import type { Metadata } from "next";

// The compare page is an interactive tool driven by ?slugs= query params,
// so it has no canonical static content to index. Keep it out of search
// results (and out of the sitemap) to avoid thin/duplicate pages.
export const metadata: Metadata = {
  title: "Compare Clinics Side by Side",
  description:
    "Compare verified Turkey clinics side by side on rating, price, accreditations and more.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.cliniqturkey.com/clinics" },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
