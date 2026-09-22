import HeroSection from "@/components/HeroSection";
import ClinicalArchitectureOverview from "@/components/home/ClinicalArchitectureOverview";
import StructuralShift from "@/components/StructuralShift";
import ProductLadder from "@/components/ProductLadder";
import HowItWorks from "@/components/home/HowItWorks";
import ROICalculator from "@/components/ROICalculator";
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

      {/* 5. How It Works — 4-step process */}
      <HowItWorks />

      {/* 6. Interactive Practice ROI Calculator */}
      <section className="w-full bg-surface-cream py-20 px-6 lg:px-12" id="roi-calc">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
              Clinical Financial Impact
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              Calculate Your Practice{" "}
              <span className="italic text-terracotta-accent">ROI &amp; Hours Reclaimed</span>
            </h2>
            <p className="font-body-md text-body-md text-text-muted mt-3">
              See the tangible financial and operational uplift from autonomous ambient documentation, proactive RPM
              billing, and reduced no-shows.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* 7. Deployment — 3-tier sovereignty */}
      <DeploymentSection />

      {/* 8. Scientific Benchmarks + FAQ */}
      <BenchmarksPanel />
      <FAQAccordion />

      {/* 9. Final CTA */}
      <FinalCTA />
    </div>
  );
}
