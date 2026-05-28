import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TreatWell Turkey — Compare Top Clinics & Save Up to 70%",
  description:
    "Compare verified clinics in Turkey for hair transplant, dental, bariatric surgery and more. Free quotes, real reviews, dedicated patient coordinators.",
  keywords:
    "medical tourism turkey, hair transplant turkey, dental turkey, bariatric surgery turkey, compare clinics turkey",
  openGraph: {
    title: "TreatWell Turkey — Compare Top Clinics & Save Up to 70%",
    description:
      "Compare verified clinics in Turkey for hair transplant, dental, bariatric surgery and more.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
