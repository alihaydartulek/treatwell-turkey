import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PopularTreatments from "@/components/home/PopularTreatments";
import FeaturedClinics from "@/components/home/FeaturedClinics";
import CostComparison from "@/components/home/CostComparison";
import Testimonials from "@/components/home/Testimonials";
import DestinationGuides from "@/components/home/DestinationGuides";
import LeadCaptureSection from "@/components/home/LeadCaptureSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <PopularTreatments />
        <CostComparison />
        <FeaturedClinics />
        <Testimonials />
        <DestinationGuides />
        <LeadCaptureSection />
      </main>
      <Footer />
    </>
  );
}
