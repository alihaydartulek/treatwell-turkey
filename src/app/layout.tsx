import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "CliniqTurkey — Compare Verified Clinics & Save Up to 75%",
    template: "%s | CliniqTurkey",
  },
  description:
    "Compare 18 verified clinics in Turkey for hair transplant, dental veneers, bariatric surgery, IVF and more. Real Google ratings, transparent prices, direct clinic contact.",
  keywords: [
    "medical tourism turkey",
    "hair transplant turkey",
    "dental veneers turkey",
    "dental turkey",
    "bariatric surgery turkey",
    "gastric sleeve turkey",
    "IVF turkey",
    "compare clinics turkey",
    "istanbul clinics",
    "turkey medical tourism cost",
  ],
  metadataBase: new URL("https://www.cliniqturkey.com"),
  openGraph: {
    title: "CliniqTurkey — Compare Verified Clinics & Save Up to 75%",
    description:
      "Compare 18 verified clinics in Turkey. Real Google ratings, transparent prices, direct contact — no middleman.",
    type: "website",
    locale: "en_GB",
    siteName: "CliniqTurkey",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=630&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "CliniqTurkey — Compare Medical Clinics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CliniqTurkey — Compare Verified Clinics & Save Up to 75%",
    description:
      "Compare 18 verified clinics in Turkey. Real Google ratings, transparent prices, direct contact.",
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=630&auto=format&fit=crop&q=80"],
  },
  alternates: {
    canonical: "https://www.cliniqturkey.com",
  },
  verification: {
    google: "GSHUh0pkcK4QVH6KkbPSHdHa5c94Kyy_phdJhRM1Kwg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <GoogleAnalytics gaId="G-L0B915Z4FQ" />
      </body>
    </html>
  );
}
