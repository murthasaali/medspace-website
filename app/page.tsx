import HeroSection from "@/components/HeroSection";
import PartnerTrustStrip from "@/components/home/PartnerTrustStrip";
import ClinicalArchitectureOverview from "@/components/home/ClinicalArchitectureOverview";
import StructuralShift from "@/components/StructuralShift";
import FoundationShowcase from "@/components/FoundationShowcase";
import ProductLadder from "@/components/ProductLadder";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorks from "@/components/home/HowItWorks";
import ClinicalObservatory from "@/components/home/ClinicalObservatory";
import DeploymentSection from "@/components/DeploymentSection";
import BenchmarksPanel from "@/components/BenchmarksPanel";
import FAQAccordion from "@/components/home/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata = {
  title: "MedSpace AI — Clinical Intelligence, Connected",
  description:
    "MedSpace AI connects clinical data, patient information, medical devices and healthcare workflows through a governed clinical knowledge graph. Five products for documentation, remote patient monitoring, clinic operations, patient engagement and enterprise clinical intelligence.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Editorial scroll progress indicator & observer */}
      <ScrollObserver />

      {/* 1. Hero (Incoming Video Hero) */}
      <HeroSection />

      {/* 2. Partner Logo & Interoperability Strip */}
      <PartnerTrustStrip />

      {/* 3. What is MedSpace AI — Platform definition */}
      <div className="reveal-on-scroll">
        <ClinicalArchitectureOverview />
      </div>

      {/* 3b. 3D Infrastructure Showcase */}
      <div className="reveal-on-scroll">
        <FoundationShowcase />
      </div>

      {/* 4. The Structural Shift — pain-point persuasion */}
      <section className="reveal-on-scroll w-full bg-surface-cream py-20 px-6 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <StructuralShift />
        </div>
      </section>

      {/* Wave Accent Divider */}
      <div className="w-full h-12 overflow-hidden flex items-center justify-center opacity-30">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 48">
          <path d="M0 24 C360 0, 720 48, 1080 12 C1260 -6, 1380 36, 1440 24" stroke="#0F3E17" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 5. Five Products — the navigation hub */}
      <div className="reveal-on-scroll">
        <ProductLadder />
      </div>

      {/* 5b. Product Carousel (Incoming from murthasaali) */}
      <div className="reveal-on-scroll">
        <ServicesSection />
      </div>

      {/* 6. How It Works — 4-step process */}
      <div className="reveal-on-scroll">
        <HowItWorks />
      </div>

      {/* 7. Ventriloc Editorial Data Observatory */}
      <ClinicalObservatory />

      {/* 8. Deployment — 3-tier sovereignty */}
      <div className="reveal-on-scroll">
        <DeploymentSection />
      </div>

      {/* 9. Scientific Benchmarks + FAQ */}
      <div className="reveal-on-scroll">
        <BenchmarksPanel />
      </div>
      <div className="reveal-on-scroll">
        <FAQAccordion />
      </div>

      {/* 10. Final CTA */}
      <div className="reveal-on-scroll">
        <FinalCTA />
      </div>
    </div>
  );
}
