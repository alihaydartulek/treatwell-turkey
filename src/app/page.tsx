import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PopularTreatments from "@/components/home/PopularTreatments";
import FeaturedClinics from "@/components/home/FeaturedClinics";
import CostComparison from "@/components/home/CostComparison";
import WhyTrustUs from "@/components/home/WhyTrustUs";
import ClinicStrip from "@/components/home/ClinicStrip";
import LeadCaptureSection from "@/components/home/LeadCaptureSection";
import { clinics } from "@/lib/clinics";

const topRatedClinics = [...clinics]
  .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
  .slice(0, 4);

const newestClinics = [...clinics].sort((a, b) => b.id - a.id).slice(0, 4);

export const metadata: Metadata = {
  title: "Compare Medical Clinics in Turkey — Hair Transplant, Dental & More",
  description:
    `Find and compare ${clinics.length} verified clinics in Turkey for hair transplant, dental veneers, bariatric surgery, IVF and cosmetic surgery. Save 50–75% vs UK prices. Real clinic reviews, direct clinic contact.`,
  alternates: { canonical: "https://www.cliniqturkey.com" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CliniqTurkey",
  url: "https://www.cliniqturkey.com",
  description:
    "Independent medical tourism comparison platform — compare verified clinics in Turkey for hair transplant, dental, bariatric surgery and more.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.cliniqturkey.com/clinics?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CliniqTurkey",
  url: "https://www.cliniqturkey.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "cliniqturkey@gmail.com",
    contactType: "customer support",
    availableLanguage: ["English", "German"],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <PopularTreatments />
        <CostComparison />
        <FeaturedClinics />
        <ClinicStrip
          eyebrow="Highest Rated"
          title="Top Rated Clinics"
          subtitle="Ranked by real, publicly sourced Google ratings — not by payment."
          clinics={topRatedClinics}
          bg="slate"
        />
        <ClinicStrip
          eyebrow="Just Added"
          title="New on CliniqTurkey"
          subtitle="The most recently verified clinics to join the directory."
          clinics={newestClinics}
          bg="white"
        />
        <WhyTrustUs />
        <HowItWorks />
        <LeadCaptureSection />
      </main>
      <Footer />
    </>
  );
}
