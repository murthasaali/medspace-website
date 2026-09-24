"use client";
import { ServiceCarousel, type Service } from "@/components/ui/services-card";
import { Activity, Heart, Stethoscope, Brain, Shield, BarChart3 } from "lucide-react";

const medspaceServices: Service[] = [
  {
    number: "001",
    title: "Clinical Documentation",
    description: "Autonomous ambient documentation that captures the clinical conversation and structures it into coded data.",
    icon: Stethoscope,
    gradient: "from-emerald-900/80 to-emerald-800/60",
  },
  {
    number: "002",
    title: "Remote Patient Monitoring",
    description: "Continuous telemetry ingestion, anomaly detection, and proactive billing for RPM codes.",
    icon: Activity,
    gradient: "from-teal-900/80 to-cyan-800/60",
  },
  {
    number: "003",
    title: "Clinic Operations",
    description: "Scheduling intelligence, resource allocation, and operational analytics for clinic efficiency.",
    icon: BarChart3,
    gradient: "from-blue-900/80 to-indigo-800/60",
  },
  {
    number: "004",
    title: "Patient Engagement",
    description: "Personalized patient companion that extends care beyond the visit with intelligent follow-ups.",
    icon: Heart,
    gradient: "from-purple-900/80 to-pink-800/60",
  },
  {
    number: "005",
    title: "Enterprise Intelligence",
    description: "Cross-organization clinical insights, population health analytics, and governance controls.",
    icon: Brain,
    gradient: "from-rose-900/80 to-orange-800/60",
  },
  {
    number: "006",
    title: "Security & Compliance",
    description: "On-premise deployment, air-gapped options, and full audit trails for healthcare data sovereignty.",
    icon: Shield,
    gradient: "from-slate-900/80 to-gray-800/60",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-16 px-6 lg:px-12 max-w-8xl mx-auto" id="services">
      <div className="max-w-3xl mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-forest-deep font-code-badge text-code-badge mb-3">
          <span className="w-2 h-2 rounded-full bg-terracotta-accent"></span>
          PRODUCT SUITE
        </span>
        <h2 className="font-headline text-headline-xl text-forest-deep tracking-tight">
          Five Products. <span className="italic text-terracotta-accent">One Platform.</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
          Each product operates independently or as a unified suite, all built on the same governed clinical knowledge graph.
        </p>
      </div>
      <ServiceCarousel services={medspaceServices} />
    </section>
  );
}
