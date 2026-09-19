import HeroSection from "@/components/HeroSection";
import GraphTopologyPanel from "@/components/GraphTopologyPanel";
import StructuralShift from "@/components/StructuralShift";
import ProductLadder from "@/components/ProductLadder";
import QueryInspector from "@/components/QueryInspector";
import HardwareSection from "@/components/HardwareSection";
import ROICalculator from "@/components/ROICalculator";
import DeploymentSection from "@/components/DeploymentSection";
import BenchmarksPanel from "@/components/BenchmarksPanel";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <GraphTopologyPanel />

      <section className="w-full bg-surface-cream py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <StructuralShift />
        </div>
      </section>

      <div className="w-full h-12 overflow-hidden flex items-center justify-center opacity-30">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 48">
          <path d="M0 24 C360 0, 720 48, 1080 12 C1260 -6, 1380 36, 1440 24" stroke="#0F3E17" strokeWidth="1.5" />
        </svg>
      </div>

      <ProductLadder />
      <QueryInspector />
      <HardwareSection />

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

      <DeploymentSection />
      <BenchmarksPanel />
      <FinalCTA />
    </div>
  );
}
