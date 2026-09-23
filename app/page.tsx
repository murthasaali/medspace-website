import HeroSection from "@/components/HeroSection";
import ClinicalArchitectureOverview from "@/components/home/ClinicalArchitectureOverview";
import StructuralShift from "@/components/StructuralShift";
import ProductLadder from "@/components/ProductLadder";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesSection from "@/components/home/ServicesSection";
import DeploymentSection from "@/components/DeploymentSection";
import BenchmarksPanel from "@/components/BenchmarksPanel";
import FAQAccordion from "@/components/home/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "MedSpace AI — Clinical Intelligence, Connected",
  description:
    "MedSpace AI connects clinical data, patient information, medical devices and healthcare workflows through a governed clinical knowledge graph. Five products for documentation, remote patient monitoring, clinic operations, patient engagement and enterprise clinical intelligence.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. What is MedSpace AI — Platform definition */}
      <ClinicalArchitectureOverview />

      {/* 3. The Structural Shift — pain-point persuasion */}
      <section className="w-full bg-surface-cream py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <StructuralShift />
        </div>
      </section>

      {/* Wave Accent Divider */}
      <div className="w-full h-12 overflow-hidden flex items-center justify-center opacity-30">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 48">
          <path d="M0 24 C360 0, 720 48, 1080 12 C1260 -6, 1380 36, 1440 24" stroke="#0F3E17" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 4. Five Products — the navigation hub */}
      <ProductLadder />

      {/* 4b. Product Carousel */}
      <ServicesSection />

{/* 5. How It Works — 4-step process */}
      <HowItWorks />

      {/* 6. Deployment — 3-tier sovereignty */}
      <DeploymentSection />

      {/* 8. Scientific Benchmarks + FAQ */}
      <BenchmarksPanel />
      <FAQAccordion />

      {/* 9. Final CTA */}
      <FinalCTA />
    </div>
  );
}
