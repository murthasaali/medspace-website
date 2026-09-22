"use client";

import Link from "next/link";

const products = [
  {
    icon: "mic",
    badge: "FOR CLINICIANS",
    title: "MedScribe Graph",
    href: "/products/medscribe",
    description: "Ambient clinical documentation that captures patient encounters in real-time, generating structured notes and billing codes automatically.",
    metric: "1.5-2 hrs",
    metricLabel: "saved per clinician daily",
    footerLabel: "Ambient Transcription",
  },
  {
    icon: "vital_signs",
    badge: "HARDWARE-LINKED",
    title: "VitalGraph RPM",
    href: "/products/vitalgraph",
    description: "Remote patient monitoring with continuous biometric streaming, connecting home devices to the clinical knowledge graph.",
    metric: "CPT 99453/54",
    metricLabel: "reimbursement ready",
    footerLabel: "Continuous Telemetry",
    isTerracotta: true,
  },
  {
    icon: "calendar_month",
    badge: "MANAGEMENT",
    title: "ClinicOps Graph",
    href: "/products/clinicops",
    description: "Practice management automation that optimizes scheduling, revenue cycle, and operational workflows.",
    metric: "-30% to 50%",
    metricLabel: "operational improvement",
    footerLabel: "Practice Automation",
  },
  {
    icon: "diversity_1",
    badge: "FOR PATIENTS",
    title: "PatientGraph Companion",
    href: "/products/patientgraph",
    description: "Patient-facing portal with personalized health insights, appointment management, and medication tracking.",
    metric: "Grade 6",
    metricLabel: "reading level",
    footerLabel: "Patient Experience",
  },
];

const sovereignFeatures = [
  { label: "Query Engine", value: "Cypher & SPARQL" },
  { label: "De-ID Level", value: "k=25 Guaranteed" },
  { label: "Compliance", value: "Zero Cloud Egress" },
];

export default function ProductLadder() {
  return (
    <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="products">
      <div className="mb-12">
        <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
          Integrated Platform
        </span>
        <h2 className="font-headline text-headline-xl text-forest-deep">
          The Clinical Ladder:{" "}
          <span className="italic text-terracotta-accent">
            5 Interlocking Systems
          </span>
        </h2>
        <p className="font-body-md text-body-md text-text-muted max-w-xl mt-4">
          Deploy modularly or as an end-to-end unified intelligence suite. Each
          product strengthens the central VeritasGraph knowledge model with shared clinical context.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.title}
            href={product.href}
            className="group bg-surface-container-lowest p-7 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-surface-matcha flex items-center justify-center text-forest-deep group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">
                    {product.icon}
                  </span>
                </span>
                <span
                  className={product.isTerracotta ? "px-3 py-1 rounded-full font-code-badge text-[11px] font-bold bg-terracotta-accent/15 text-terracotta-accent" : "px-3 py-1 rounded-full font-code-badge text-[11px] font-bold bg-secondary-container text-forest-deep"}
                >
                  {product.badge}
                </span>
              </div>
              <h3 className="font-headline text-headline-md text-forest-deep group-hover:text-primary transition-colors mb-2">
                {product.title}
              </h3>
              <p className="font-body-sm text-body-sm text-text-muted mb-6">
                {product.description}
              </p>
              <div
                className={product.isTerracotta ? "p-3.5 rounded-2xl mb-6 bg-terracotta-accent/10" : "p-3.5 rounded-2xl mb-6 bg-surface-container-low"}
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className={product.isTerracotta ? "font-headline text-headline-md text-terracotta-accent" : "font-headline text-headline-md text-forest-deep"}
                  >
                    {product.metric}
                  </span>
                  <span className="font-body-sm text-body-sm text-text-muted">
                    {product.metricLabel}
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between text-forest-deep group-hover:text-primary">
              <span className="font-label-md text-label-md font-semibold">
                {product.footerLabel}
              </span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </Link>
        ))}

        <Link
          href="/products/clinicalkg-enterprise"
          className="group col-span-1 md:col-span-2 lg:col-span-2 bg-surface-matcha/40 p-8 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-surface-matcha flex items-center justify-center text-forest-deep group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px]">
                  hub
                </span>
              </span>
              <span className="px-3 py-1 rounded-full bg-forest-deep text-on-primary font-code-badge text-[11px] font-bold">
                HOSPITALS & RESEARCH
              </span>
            </div>
            <h3 className="font-headline text-headline-lg text-forest-deep group-hover:text-primary transition-colors mb-2">
              ClinicalKG Enterprise &bull; Sovereign Node
            </h3>
            <p className="font-body-lg text-body-lg text-text-muted max-w-xl mb-6">
              On-premise deployment for health systems requiring full data
              sovereignty with institutional knowledge graph capabilities, multi-hop queries, and guaranteed de-identification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {sovereignFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="p-3.5 rounded-2xl bg-surface-matcha/60"
                >
                  <span className="font-code-badge text-code-badge text-forest-deep block mb-1">
                    {feature.label}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                    {feature.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 flex items-center justify-between text-forest-deep group-hover:text-primary">
            <span className="font-label-md text-label-md font-semibold">
              Explore ClinicalKG Enterprise
            </span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </Link>
      </div>

      {/* Shared Knowledge Layer Callout */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-surface-container-low border border-border-tactile">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-forest-deep"></span>
          <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
            All 5 products share a common clinical data and knowledge foundation, normalizing disparate feeds across standard ontologies.
          </span>
        </div>
        <Link
          href="/platform/clinical-knowledge-graph"
          className="inline-flex items-center gap-1.5 font-label-md text-label-md text-forest-deep hover:text-primary transition-colors font-semibold group"
        >
          <span>How the clinical knowledge graph works</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}