"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const features = [
  {
    eyebrow: "Unified Graph",
    title: "Relational Fabric",
    description: "Connects patients, encounters, notes, and telemetry in one auditable graph.",
  },
  {
    eyebrow: "Deterministic",
    title: "Source Attribution",
    description: "Every inference backed by exact node and source chunk citations.",
  },
  {
    eyebrow: "Modular",
    title: "Five Products",
    description: "Documentation, RPM, clinic operations, patient companion, and enterprise.",
  },
  {
    eyebrow: "Deploy Anywhere",
    title: "Cloud, Hybrid, On-premise",
    description: "Flexible deployment models that respect your data boundaries.",
  },
];

export default function ClinicalArchitectureOverview() {
  return (
    <section className="w-full py-16 px-6 lg:px-12 max-w-8xl mx-auto" id="architecture">
      {/* Headline */}
      <div className="max-w-3xl mb-10">
        <h2 className="font-body text-headline-xl text-forest-deep tracking-tight font-extralight">
          What is <span className="font-body font-light text-terracotta-accent">MedSpace AI?</span>
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-3">
          Healthcare data is fractured across EHRs, devices, and manual notes. MedSpace AI organizes it into a single governed clinical knowledge layer — maintaining active relationships between clinicians, patients, documents, and real-time telemetry.
        </p>
      </div>

      {/* Compact Grid - 4 cards in a row on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={clsx(
              "group relative p-6 rounded-xl",
              "bg-surface-container-lowest shadow-sm border border-border-tactile",
              "hover:shadow-md hover:border-terracotta-accent/30 transition-all duration-300"
            )}
          >
            <span className="font-code-badge text-[10px] text-terracotta-accent font-bold uppercase block mb-2">
              {feature.eyebrow}
            </span>
            <p className="font-headline text-headline-sm text-forest-deep mb-1.5">
              {feature.title}
            </p>
            <p className="font-body-sm text-body-sm text-text-muted leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8">
        <Link
          href="/platform"
          className="link-ember-underline inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group font-semibold"
        >
          <span>Explore the full MedSpace Platform</span>
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}