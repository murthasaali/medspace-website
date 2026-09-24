import Link from "next/link";
import HardwareSection from "@/components/HardwareSection";

export const metadata = {
  title: "Hardware | MedSpace AI",
  description:
    "MedSpace AI-compatible hardware kits — RPM Starter Kit, Front-Desk Kit, and Clinic AI Box. Plug-and-play devices for remote monitoring, patient intake, and on-premise AI inference.",
  alternates: { canonical: "/hardware" },
};

export default function HardwarePage() {
  return (
    <div className="min-h-screen bg-surface-porcelain">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-forest-deep mb-8 transition-colors"
        >
          <span>&larr;</span>
          <span>Back to Home</span>
        </Link>

        <div className="max-w-3xl mb-16">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-3">
            Device Integration
          </span>
          <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight">
            Hardware that{" "}
            <span className="italic text-terracotta-accent">connects to the graph.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            Plug-and-play device kits pre-paired with the MedSpace AI clinical knowledge graph. BP cuffs, glucometers,
            ECG patches, clinic kiosks, and on-premise GPU inference boxes — all vendor-agnostic.
          </p>
        </div>
      </div>

      {/* Hardware device cards */}
      <HardwareSection />
    </div>
  );
}
