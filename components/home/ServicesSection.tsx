"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ServiceCard, type Service } from "@/components/ui/services-card";
import { Activity, Heart, Stethoscope, Brain, Shield, BarChart3 } from "lucide-react";

const medspaceServices: Service[] = [
  {
    number: "001",
    title: "Clinical Documentation",
    description: "Autonomous ambient documentation that captures the clinical conversation and structures it into coded data.",
    icon: Stethoscope,
    gradient: "from-emerald-900/80 to-emerald-800/60",
    image: "/1.png",
  },
  {
    number: "002",
    title: "Remote Patient Monitoring",
    description: "Continuous telemetry ingestion, anomaly detection, and proactive billing for RPM codes.",
    icon: Activity,
    gradient: "from-teal-900/80 to-cyan-800/60",
    image: "/2.png",
  },
  {
    number: "003",
    title: "Clinic Operations",
    description: "Scheduling intelligence, resource allocation, and operational analytics for clinic efficiency.",
    icon: BarChart3,
    gradient: "from-blue-900/80 to-indigo-800/60",
    image: "/3.png",
  },
  {
    number: "004",
    title: "Patient Engagement",
    description: "Personalized patient companion that extends care beyond the visit with intelligent follow-ups.",
    icon: Heart,
    gradient: "from-purple-900/80 to-pink-800/60",
    image: "/4.png",
  },
  {
    number: "005",
    title: "Enterprise Intelligence",
    description: "Cross-organization clinical insights, population health analytics, and governance controls.",
    icon: Brain,
    gradient: "from-rose-900/80 to-orange-800/60",
    image: "/5.png",
  },
  {
    number: "006",
    title: "Security & Compliance",
    description: "On-premise deployment, air-gapped options, and full audit trails for healthcare data sovereignty.",
    icon: Shield,
    gradient: "from-slate-900/80 to-gray-800/60",
    image: "/6.png",
  },
];

const CARD_WIDTH = 380;
const CARD_GAP = 24;
const LEAD_PAD_DESKTOP = 48;

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [maxShift, setMaxShift] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (typeof window === "undefined") return;
      const viewport = window.innerWidth;
      const trackWidth = medspaceServices.length * CARD_WIDTH + (medspaceServices.length - 1) * CARD_GAP;
      const rightGap = viewport * 0.08;
      setMaxShift(Math.max(0, trackWidth + LEAD_PAD_DESKTOP - (viewport - rightGap)));
    };
    measure();
    const t = window.setTimeout(measure, 300);
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
    mass: 0.2,
    restDelta: 0.00005,
  });

  const x = useTransform(smoothProgress, [0.05, 0.95], [0, -maxShift]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] overflow-hidden bg-surface-porcelain"
      id="services"
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <div className="w-full max-w-8xl mx-auto px-6 lg:px-12 pt-12 lg:pt-16 shrink-0">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-forest-deep font-code-badge text-code-badge mb-3">
            <span className="w-2 h-2 rounded-full bg-terracotta-accent"></span>
            PRODUCT SUITE
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep tracking-tight">
            Five Products. <span className="italic text-terracotta-accent">One Platform.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl">
            Each product operates independently or as a unified suite, all built on the same governed clinical knowledge graph.
          </p>
        </div>

        {/* Horizontal scroll strip — fills the rest of the viewport, no empty space */}
        <div className="min-h-0 flex-1 flex items-center">
          <motion.div
            style={{ x }}
            className="flex w-max items-stretch will-change-transform h-full pl-6 lg:pl-12 pr-[8vw]"
          >
            {medspaceServices.map((service, i) => (
              <div
                key={service.title}
                className="shrink-0 h-full"
                style={{ width: CARD_WIDTH, marginRight: i < medspaceServices.length - 1 ? CARD_GAP : 0 }}
              >
                <div className="p-1.5 h-full">
                  <ServiceCard service={service} index={i} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}