"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";

type Persona = "all" | "doctors" | "clinics" | "patients" | "hospitals";

interface Product {
  id: string;
  name: string;
  audience: string;
  personas: Persona[];
  status: "Active Pilot" | "Pilot" | "Pilot / Pre-Order" | "Waitlist" | "Enterprise Ingestion";
  statusColor: string;
  outcome: string;
  hardware: string;
  proof: string;
  href: string;
  tag: string;
  features: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "clinicops",
    name: "ClinicOps Graph",
    audience: "For Clinic Management & Operations",
    personas: ["clinics", "hospitals"],
    status: "Active Pilot",
    statusColor: "bg-surface-matcha/60 text-forest-deep border-forest-deep/20",
    outcome: "Fewer patient no-shows, automated front desk triage, and pre-submission claim denial audit.",
    hardware: "Reception check-in tablet kiosk, dynamic queue display screens (space-sign.ai).",
    proof: "Pilot Target: −30% to −50% no-shows; recovers 1 full front-desk FTE workload.",
    href: "/products/clinicops",
    tag: "01 · FRONT DESK AI",
    features: [
      "Omnichannel AI receptionist (WhatsApp, web chat, phone)",
      "Automated intake forms & dynamic rescheduling",
      "Pre-submission claim audit cross-referenced against notes",
      "Real-time room occupancy & doctor throughput analytics",
    ],
  },
  {
    id: "medscribe",
    name: "MedScribe Graph",
    audience: "For Physicians, Specialists & Practices",
    personas: ["doctors", "clinics"],
    status: "Pilot",
    statusColor: "bg-surface-matcha/60 text-forest-deep border-forest-deep/20",
    outcome: "Ambient consultation audio converted into structured SOAP notes with verified ICD-10 & RxNorm coding.",
    hardware: "Room microphone array, dictation pen, or local Clinic AI Box GPU.",
    proof: "Pilot Target: saves ~1.5–2 hours/doctor/day; pays for itself with 1 extra visit/week.",
    href: "/products/medscribe",
    tag: "02 · AMBIENT SCRIBE",
    features: [
      "100% on-premise local GPU inference (zero cloud data egress)",
      "Clinical Contradiction Detection (HPI vs. problem list discrepancies)",
      "Exact span citations back to transcript audio segments",
      "Native export to Epic, Cerner, Athenahealth, or FHIR R4",
    ],
  },
  {
    id: "vitalgraph",
    name: "VitalGraph RPM",
    audience: "For Chronic Care Management, Cardiology & Pulmonology",
    personas: ["doctors", "clinics", "hospitals"],
    status: "Pilot / Pre-Order",
    statusColor: "bg-surface-cream text-terracotta-accent border-terracotta-accent/30",
    outcome: "Continuous physiological telemetry fused with patient graph for predictive risk alerts & CPT billing.",
    hardware: "RPM Starter Kit (pre-paired BLE gateway, BP cuff, glucometer, smart scale, pulse-ox).",
    proof: "Retrospective AUROC 0.93 on EHR cohort; recurring reimbursement under US CPT 99453/4/7/8.",
    href: "/products/vitalgraph",
    tag: "03 · TELEMETRY & RPM",
    features: [
      "Bluetooth & cellular gateway telemetry fusion with longitudinal graph",
      "Explainable predictive decompensation alerts with clinical graph evidence",
      "Automated documentation for monthly Medicare/commercial RPM claims",
      "Plain-language patient trend nudges & medication reminders",
    ],
  },
  {
    id: "patientgraph",
    name: "PatientGraph Companion",
    audience: "For Patients, Families & Care Partners",
    personas: ["patients", "clinics"],
    status: "Waitlist",
    statusColor: "bg-fog text-steel border-mist",
    outcome: "Line-cited lab report explanations, medication interaction checks, and direct clinic appointment booking.",
    hardware: "Pulls automatically from VitalGraph home RPM devices and patient smartphones.",
    proof: "Viral acquisition funnel: free patient utility drives inbound clinic adoption and zero phone triage burden.",
    href: "/products/patientgraph",
    tag: "04 · PATIENT COMPANION",
    features: [
      "Upload lab reports & prescriptions for line-by-line plain English explanations",
      "RxNorm drug-drug and food-drug interaction warnings",
      "Symptom triage routing directly into your clinic's booking calendar",
      "White-label clinic branding and secure patient portal",
    ],
  },
  {
    id: "clinicalkg-enterprise",
    name: "ClinicalKG Enterprise",
    audience: "For Health Systems, Hospital Chains, Insurers & Research",
    personas: ["hospitals"],
    status: "Enterprise Ingestion",
    statusColor: "bg-fog text-graphite border-graphite/20",
    outcome: "Governed topological clinical knowledge graph, Safe Harbor de-ID vault, and multi-hop cohort discovery.",
    hardware: "Air-gapped on-premise GPU server rack or private cloud enclave appliance.",
    proof: "Research cohort discovery in seconds vs. weeks; comprehensive HIPAA & SOC 2 audit readiness.",
    href: "/products/clinicalkg-enterprise",
    tag: "05 · ENTERPRISE PLATFORM",
    features: [
      "Multi-hop graph queries (e.g., 'Metformin + eGFR < 45 without nephrology referral')",
      "Safe Harbor de-identification vault with k-anonymity scoring",
      "Model Context Protocol (MCP) server & REST APIs for enterprise tooling",
      "Bi-directional FHIR R4, HL7 v2, and bulk clinical note ingestion",
    ],
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Primary User",
    p3: "Clinic Manager / Reception",
    p1: "Physician / Scribe",
    p2: "Care Team / RPM Nurse",
    p4: "Patient / Family",
    p5: "CMIO / Researcher / CISO",
  },
  {
    feature: "Core Clinical Problem",
    p3: "No-shows & Front-desk overload",
    p1: "2+ hours daily note burden",
    p2: "Unmonitored chronic deterioration",
    p4: "Confusing lab PDFs & phone calls",
    p5: "Siloed EHRs & slow cohort discovery",
  },
  {
    feature: "Hardware Linked",
    p3: "Check-in Tablet Kiosk & Signage",
    p1: "Room Mic Array / Clinic AI Box",
    p2: "BLE BP Cuff, Scale, Glucometer",
    p4: "Patient Smartphone / RPM feed",
    p5: "On-Prem GPU Server Rack",
  },
  {
    feature: "Citation Grounding",
    p3: "Schedule & Claim rule citation",
    p1: "Span-level transcript audio citation",
    p2: "Topological telemetry evidence path",
    p4: "Line-by-line report citation",
    p5: "Full multi-hop provenance graph",
  },
  {
    feature: "Deployment Boundary",
    p3: "Cloud Sovereign or On-Prem",
    p1: "100% On-Premise GPU or Hybrid",
    p2: "Cloud / Cellular Gateway / Enclave",
    p4: "Mobile App / Web (Zero PHI Egress)",
    p5: "Air-Gapped Private GPU Enclave",
  },
  {
    feature: "Economic / Pricing Model",
    p3: "Per-clinic / month (tiered)",
    p1: "Per-doctor / month + hardware box",
    p2: "Per-monitored-patient / month",
    p4: "Free patient tier / Clinic white-label",
    p5: "Annual enterprise license + implementation",
  },
  {
    feature: "Availability Status",
    p3: "Active Pilot",
    p1: "Pilot",
    p2: "Pilot / Pre-Order",
    p4: "Waitlist",
    p5: "Enterprise Ingestion",
  },
];

const FAQS = [
  {
    q: "Do the products require replacing our existing EHR system?",
    a: "No. MedSpace AI is strictly a side-by-side intelligence layer. It connects via standard FHIR R4 APIs, HL7 v2 feeds, or simple direct exports without modifying your core EHR or practice management database.",
  },
  {
    q: "Which product keeps clinical data 100% on-premise?",
    a: "All MedSpace products can operate in 100% on-premise air-gapped mode using our pre-configured Clinic AI Box or hospital GPU servers. Patient health information (PHI) never leaves your local area network.",
  },
  {
    q: "How does RPM billing work under VitalGraph?",
    a: "In the United States, VitalGraph automates audit-ready clinical documentation for Medicare CPT codes 99453 (initial device setup), 99454 (monthly transmission of daily vitals), and 99457/99458 (interactive clinical monitoring time), creating new recurring reimbursed revenue.",
  },
  {
    q: "What is the recommended entry point on the product ladder?",
    a: "Solo practitioners and small practices typically start with P1 MedScribe (saving 2 hours daily on notes) or P3 ClinicOps (eliminating front-desk no-shows). As coded chronic patients accumulate in the graph, clinics add P2 VitalGraph RPM with zero new software integration.",
  },
  {
    q: "How does VeritasGraph prevent AI hallucinations?",
    a: "VeritasGraph enforces a deterministic topological boundary: every generated claim must be anchored to an authenticated node and source chunk citation [doc#chunk]. If a statement cannot prove an unbroken provenance walk, the inference engine deterministically rejects it.",
  },
];

export default function ProductsPage() {
  const [selectedPersona, setSelectedPersona] = useState<Persona>("all");
  const [hoveredDoor, setHoveredDoor] = useState<string | null>(null);

  // Quick ROI Calculator State
  const [doctors, setDoctors] = useState(3);
  const [visitsPerDay, setVisitsPerDay] = useState(20);
  const [noShowRate, setNoShowRate] = useState(18);

  const hoursSavedPerYear = Math.round(doctors * 1.75 * 5 * 48);
  const recoveredNoShowRevenue = Math.round(doctors * visitsPerDay * (noShowRate / 100) * 0.4 * 140 * 5 * 48);

  const filteredProducts = PRODUCTS.filter(
    (p) => selectedPersona === "all" || p.personas.includes(selectedPersona)
  );

  return (
    <div className="min-h-screen bg-surface-porcelain">
      <ScrollObserver />

      {/* ───────────────── SECTION 1: HERO & PERSONA SWITCHER ───────────────── */}
      <section className="w-full pt-10 pb-16 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-8xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs font-code-badge text-slate">
            <Link href="/" className="hover:text-forest-deep transition-colors">Home</Link>
            <span>/</span>
            <span className="text-graphite font-semibold">Products</span>
          </div>

          <div className="reveal-on-scroll max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container text-forest-deep shadow-sm w-max mb-5">
              <span className="w-2 h-2 rounded-full bg-ember-orange animate-pulse" />
              <span className="font-code-badge text-code-badge font-medium">
                VeritasGraph™ Architecture &bull; 100% On-Premise Sovereign
              </span>
            </div>

            <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight leading-[1.08] mb-5">
              One Knowledge Graph.<br />
              Five Clinic{" "}
              <span className="italic font-headline text-terracotta-accent">Superpowers.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Every product operates independently or integrates seamlessly on the same governed clinical knowledge graph.
              Every assertion cited with span-level provenance.
            </p>
          </div>

          {/* Interactive Persona Filter Switcher */}
          <div className="reveal-on-scroll flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-mist">
            <div className="flex items-center gap-2">
              <span className="font-code-badge text-xs uppercase tracking-wider text-brass font-semibold">
                Filter by Audience:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Products" },
                { id: "doctors", label: "For Doctors" },
                { id: "clinics", label: "For Clinics" },
                { id: "patients", label: "For Patients" },
                { id: "hospitals", label: "For Hospitals & Research" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedPersona(tab.id as Persona)}
                  className={`px-4 py-2 rounded-full font-code-badge text-xs transition-all duration-200 cursor-pointer ${
                    selectedPersona === tab.id
                      ? "bg-forest-deep text-on-primary font-semibold shadow-sm"
                      : "bg-canvas-white text-steel hover:bg-fog border border-mist"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 2: THE 5-PRODUCT LADDER CARDS ───────────────── */}
      <section className="w-full py-16 px-6 lg:px-12" id="ladder">
        <div className="max-w-8xl mx-auto space-y-8">
          <div className="flex items-center justify-between mb-4">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold">
              The Product Ladder &bull; Ordered by Entry Point
            </span>
            <span className="text-xs font-code-badge text-slate hidden sm:inline">
              Showing {filteredProducts.length} of {PRODUCTS.length} modular products
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="reveal-on-scroll bg-canvas-white rounded-2xl border border-mist p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Col: Tag, Title, Outcome, Proof, Status */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-code-badge text-[11px] font-bold text-terracotta-accent uppercase tracking-wider">
                      {p.tag}
                    </span>
                    <span className="text-slate text-xs">&bull;</span>
                    <span className="font-code-badge text-[11px] text-steel">
                      {p.audience}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-code-badge border font-semibold ml-auto sm:ml-0 ${p.statusColor}`}>
                      {p.status}
                    </span>
                  </div>

                  <h2 className="font-headline text-headline-lg text-graphite tracking-tight font-medium">
                    {p.name}
                  </h2>

                  <p className="font-body-md text-body-md text-steel leading-relaxed">
                    {p.outcome}
                  </p>

                  {/* Standardized Hardware & Proof Fields */}
                  <div className="pt-2 space-y-2 border-t border-mist font-body-sm text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-code-badge text-xs text-slate uppercase w-24 shrink-0 pt-0.5">Hardware:</span>
                      <span className="text-graphite font-medium">{p.hardware}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-code-badge text-xs text-slate uppercase w-24 shrink-0 pt-0.5">Proof / ROI:</span>
                      <span className="text-forest-deep font-semibold">{p.proof}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={p.href}
                      className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-forest-deep text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm gap-2 group"
                    >
                      <span>Explore {p.name}</span>
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                    <Link
                      href="/company/contact"
                      className="link-ember-underline text-graphite font-body-sm text-sm font-medium"
                    >
                      Request Pilot / Waitlist
                    </Link>
                  </div>
                </div>

                {/* Right Col: Feature Highlights Box */}
                <div className="lg:col-span-5 bg-fog rounded-xl p-6 border border-mist space-y-3">
                  <span className="font-code-badge text-xs uppercase tracking-wider text-slate block mb-1 font-semibold">
                    Standard Capabilities:
                  </span>
                  <ul className="space-y-2.5 text-sm font-body-sm text-steel">
                    {p.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest-deep mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 3: "ONE GRAPH, FIVE DOORS" TOPOLOGY ───────────────── */}
      <section className="w-full bg-ash py-20 px-6 lg:px-12 border-y border-mist">
        <div className="max-w-8xl mx-auto">
          <div className="reveal-on-scroll max-w-3xl mb-12">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
              The Architecture Moat &bull; Shared Knowledge Layer
            </span>
            <h2 className="font-headline text-headline-xl text-graphite tracking-tight">
              One Graph, Five Doors. <span className="italic text-forest-deep">The Shared Upsell Engine.</span>
            </h2>
            <p className="font-body-md text-body-md text-steel mt-3 leading-relaxed">
              In MedSpace, products are not isolated silos. Each product acts as an ingestion door that deposits clean,
              normalized entities into VeritasGraph, making all other products progressively smarter with zero extra integrations.
            </p>
          </div>

          {/* Interactive Topology Visual */}
          <div className="reveal-on-scroll bg-canvas-white rounded-2xl p-8 lg:p-12 border border-mist shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {[
                { id: "p1", name: "P1: MedScribe", role: "Doctor Audio", desc: "Transcripts & Notes" },
                { id: "p2", name: "P2: VitalGraph", role: "RPM Telemetry", desc: "BLE Vitals Stream" },
                { id: "p3", name: "P3: ClinicOps", role: "Front Desk", desc: "Intake & Schedules" },
                { id: "p4", name: "P4: Companion", role: "Patient App", desc: "Lab PDFs & Symptoms" },
                { id: "p5", name: "P5: Enterprise", role: "Hospital Vault", desc: "FHIR / HL7 Feeds" },
              ].map((door) => (
                <div
                  key={door.id}
                  onMouseEnter={() => setHoveredDoor(door.id)}
                  onMouseLeave={() => setHoveredDoor(null)}
                  className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                    hoveredDoor === door.id
                      ? "bg-forest-deep text-on-primary border-forest-deep shadow-md -translate-y-1"
                      : "bg-fog text-graphite border-mist hover:border-slate/40"
                  }`}
                >
                  <span className={`font-code-badge text-[10px] uppercase font-bold block mb-1 ${hoveredDoor === door.id ? "text-secondary-container" : "text-terracotta-accent"}`}>
                    {door.role}
                  </span>
                  <span className="font-headline text-sm font-semibold block">{door.name}</span>
                  <span className={`text-[11px] font-code-badge block mt-1 ${hoveredDoor === door.id ? "text-on-primary/80" : "text-slate"}`}>
                    {door.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Central Graph Box */}
            <div className="bg-surface-cream rounded-xl p-6 lg:p-8 border border-border-tactile flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-ember-orange animate-pulse" />
                  <span className="font-code-badge text-xs font-bold uppercase tracking-wider text-forest-deep">
                    VeritasGraph™ Clinical Knowledge Engine
                  </span>
                </div>
                <p className="font-headline text-headline-sm text-forest-deep font-medium">
                  De-identify &bull; Normalize (ICD-10, SNOMED, RxNorm, LOINC) &bull; Reconcile &bull; Cite
                </p>
                <p className="font-body-sm text-body-sm text-text-muted max-w-2xl">
                  Every answer returns a deterministic reasoning path with span-level [doc#chunk] citations. No black-box guesses.
                </p>
              </div>

              <Link
                href="/technology"
                className="link-ember-underline text-graphite font-body-sm text-sm font-medium shrink-0"
              >
                Inspect Graph Architecture &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 4: TOOLS & ADD-ONS (LEAD MAGNETS) ───────────────── */}
      <section className="w-full py-20 px-6 lg:px-12" id="tools">
        <div className="max-w-8xl mx-auto">
          <div className="reveal-on-scroll max-w-3xl mb-12">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
              Free Utilities &bull; Clinical Add-ons
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              Standalone Clinical Tools &amp; <span className="italic text-terracotta-accent">Lead Calculators.</span>
            </h2>
            <p className="font-body-md text-body-md text-text-muted mt-3">
              Lightweight tools and interactive engines built directly from our core models, available independently for practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive ROI Calculator Card */}
            <div className="reveal-on-scroll lg:col-span-7 bg-canvas-white rounded-2xl p-8 border border-mist shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-mist mb-6">
                  <div>
                    <span className="font-code-badge text-[11px] text-terracotta-accent font-bold uppercase block">
                      Lead Magnet 01
                    </span>
                    <h3 className="font-headline text-headline-sm text-graphite font-medium">
                      Practice ROI &amp; Reclaimed Hours Calculator
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-fog border border-mist text-[10.5px] font-code-badge text-slate uppercase">
                    Interactive
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-code-badge mb-1.5">
                      <span className="text-slate uppercase">Practicing Physicians:</span>
                      <span className="text-graphite font-bold">{doctors} doctors</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="25"
                      value={doctors}
                      onChange={(e) => setDoctors(Number(e.target.value))}
                      className="w-full accent-forest-deep cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-code-badge mb-1.5">
                      <span className="text-slate uppercase">Patient Encounters / Day / Doctor:</span>
                      <span className="text-graphite font-bold">{visitsPerDay} visits</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={visitsPerDay}
                      onChange={(e) => setVisitsPerDay(Number(e.target.value))}
                      className="w-full accent-forest-deep cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-code-badge mb-1.5">
                      <span className="text-slate uppercase">Current No-Show Rate:</span>
                      <span className="text-graphite font-bold">{noShowRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="35"
                      value={noShowRate}
                      onChange={(e) => setNoShowRate(Number(e.target.value))}
                      className="w-full accent-forest-deep cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic Readout */}
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-mist bg-fog rounded-xl p-4">
                <div>
                  <span className="font-code-badge text-[11px] text-slate block mb-1 uppercase">
                    Documentation Time Saved:
                  </span>
                  <span className="font-code-badge text-xl font-bold text-forest-deep">
                    {hoursSavedPerYear.toLocaleString()} <span className="text-xs font-normal text-slate">hrs/year</span>
                  </span>
                </div>
                <div>
                  <span className="font-code-badge text-[11px] text-slate block mb-1 uppercase">
                    Recoverable No-Show Revenue:
                  </span>
                  <span className="font-code-badge text-xl font-bold text-graphite">
                    ${recoveredNoShowRevenue.toLocaleString()} <span className="text-xs font-normal text-slate">/year</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Standalone Add-on Tools Column */}
            <div className="reveal-on-scroll lg:col-span-5 flex flex-col gap-4">
              <div className="bg-canvas-white rounded-xl p-6 border border-mist shadow-sm">
                <span className="font-code-badge text-[10.5px] text-terracotta-accent uppercase font-bold block mb-1">
                  Add-on 02 &bull; Free B2C Web Utility
                </span>
                <h4 className="font-headline text-headline-sm text-graphite font-medium mb-1.5">
                  Free Lab Report Explainer
                </h4>
                <p className="font-body-sm text-xs text-steel leading-relaxed mb-3">
                  Upload patient bloodwork or metabolic panels for a plain-English explanation citing exact report line values.
                </p>
                <Link href="/products/patientgraph" className="link-ember-underline text-xs font-code-badge font-semibold text-graphite">
                  Preview Lab Explainer Demo &rarr;
                </Link>
              </div>

              <div className="bg-canvas-white rounded-xl p-6 border border-mist shadow-sm">
                <span className="font-code-badge text-[10.5px] text-brass uppercase font-bold block mb-1">
                  Add-on 03 &bull; Practice Ops Tool
                </span>
                <h4 className="font-headline text-headline-sm text-graphite font-medium mb-1.5">
                  Pre-Claim Denial Auditor
                </h4>
                <p className="font-body-sm text-xs text-steel leading-relaxed mb-3">
                  Scans consultation documentation against billing codes to catch missing E/M criteria before claim submission.
                </p>
                <Link href="/products/clinicops" className="link-ember-underline text-xs font-code-badge font-semibold text-graphite">
                  Explore Claim Auditor &rarr;
                </Link>
              </div>

              <div className="bg-canvas-white rounded-xl p-6 border border-mist shadow-sm">
                <span className="font-code-badge text-[10.5px] text-forest-deep uppercase font-bold block mb-1">
                  Add-on 04 &bull; Clinical Safety Engine
                </span>
                <h4 className="font-headline text-headline-sm text-graphite font-medium mb-1.5">
                  Contradiction Detection Inspector
                </h4>
                <p className="font-body-sm text-xs text-steel leading-relaxed mb-3">
                  Real-time assertion reconciler catching discrepancies between clinical notes, vitals, and medication histories.
                </p>
                <Link href="/products/medscribe" className="link-ember-underline text-xs font-code-badge font-semibold text-graphite">
                  View Contradiction Inspector &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 5: HARDWARE KITS SHOWCASE STRIP ───────────────── */}
      <section className="w-full bg-surface-cream py-20 px-6 lg:px-12 border-t border-mist">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
                Physical Device Ecosystem
              </span>
              <h2 className="font-headline text-headline-xl text-forest-deep">
                Turnkey Hardware Kits. <span className="italic text-terracotta-accent">Pre-Paired.</span>
              </h2>
            </div>
            <Link
              href="/hardware"
              className="inline-flex items-center gap-2 font-label-md text-sm text-forest-deep font-semibold hover:underline"
            >
              <span>View complete hardware catalog</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-fog border border-mist text-graphite font-code-badge text-[11px] uppercase font-semibold block w-max mb-4">
                  Cellular 4G LTE-M
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium mb-2">
                  RPM Starter Kit
                </h3>
                <p className="font-body-sm text-sm text-steel mb-4 leading-relaxed">
                  Pre-paired cellular/BLE hub, clinical BP cuff, Bluetooth glucometer, and smart weight scale for immediate chronic care monitoring.
                </p>
              </div>
              <Link href="/hardware" className="link-ember-underline text-xs font-code-badge font-semibold text-graphite">
                Inspect Kit Specs &rarr;
              </Link>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-fog border border-mist text-graphite font-code-badge text-[11px] uppercase font-semibold block w-max mb-4">
                  Clinic Reception
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium mb-2">
                  Front-Desk Kiosk Kit
                </h3>
                <p className="font-body-sm text-sm text-steel mb-4 leading-relaxed">
                  Antimicrobial 10.5" self-check-in touchscreen tablet with floor stand and dynamic patient queue status display monitors.
                </p>
              </div>
              <Link href="/hardware" className="link-ember-underline text-xs font-code-badge font-semibold text-graphite">
                Inspect Kiosk Specs &rarr;
              </Link>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-surface-matcha/60 border border-forest-deep/20 text-forest-deep font-code-badge text-[11px] uppercase font-semibold block w-max mb-4">
                  100% Air-Gapped GPU
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium mb-2">
                  Clinic AI Box
                </h3>
                <p className="font-body-sm text-sm text-steel mb-4 leading-relaxed">
                  Fanless on-premise mini GPU workstation preloaded with local Ollama runtime and VeritasGraph. Zero cloud data egress.
                </p>
              </div>
              <Link href="/hardware" className="link-ember-underline text-xs font-code-badge font-semibold text-graphite">
                Inspect On-Prem Box &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 6: SOVEREIGN DEPLOYMENT TIERS ───────────────── */}
      <section className="w-full py-20 px-6 lg:px-12 border-t border-mist" id="deployment">
        <div className="max-w-8xl mx-auto">
          <div className="reveal-on-scroll max-w-3xl mb-12">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
              Deployment Sovereignty &bull; Data Boundaries
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              Three Deployment Models. <span className="italic text-terracotta-accent">Same Shared Codebase.</span>
            </h2>
            <p className="font-body-md text-body-md text-text-muted mt-3">
              Deploy MedSpace AI across the exact security and regulatory boundaries your hospital compliance team mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-canvas-white rounded-2xl p-8 border border-mist shadow-sm">
              <span className="font-code-badge text-xs text-slate uppercase block mb-1">Tier 01</span>
              <h3 className="font-headline text-headline-sm text-graphite font-medium mb-3">Cloud Sovereign</h3>
              <p className="font-body-sm text-sm text-steel leading-relaxed mb-4">
                Fast 48-hour pilot onboarding. Identifiable PHI is automatically de-identified before graph analysis in a dedicated single-tenant enclave.
              </p>
              <span className="font-code-badge text-[11px] text-forest-deep font-semibold">Best for: Fast 14-day ambulatory pilots</span>
            </div>

            <div className="bg-canvas-white rounded-2xl p-8 border border-mist shadow-sm">
              <span className="font-code-badge text-xs text-slate uppercase block mb-1">Tier 02</span>
              <h3 className="font-headline text-headline-sm text-graphite font-medium mb-3">Hybrid Enclave</h3>
              <p className="font-body-sm text-sm text-steel leading-relaxed mb-4">
                All patient health information remains strictly inside your clinic LAN. Knowledge graph embeddings are processed through encrypted channels.
              </p>
              <span className="font-code-badge text-[11px] text-forest-deep font-semibold">Best for: Multi-provider specialty clinics</span>
            </div>

            <div className="bg-canvas-white rounded-2xl p-8 border border-mist shadow-sm border-t-2 border-t-forest-deep">
              <span className="font-code-badge text-xs text-forest-deep uppercase block mb-1 font-bold">Tier 03 &bull; Air-Gapped</span>
              <h3 className="font-headline text-headline-sm text-graphite font-medium mb-3">100% On-Premise</h3>
              <p className="font-body-sm text-sm text-steel leading-relaxed mb-4">
                Local GPU inference on the Clinic AI Box or hospital data center. Zero internet connectivity required. Immutable local audit trail.
              </p>
              <span className="font-code-badge text-[11px] text-terracotta-accent font-semibold">Best for: Health systems & hospital networks</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 7: FULL CAPABILITY & COMPARISON MATRIX ───────────────── */}
      <section className="w-full bg-ash py-20 px-6 lg:px-12 border-t border-mist" id="matrix">
        <div className="max-w-8xl mx-auto">
          <div className="reveal-on-scroll max-w-3xl mb-12">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
              Specification Matrix &bull; Cross-Product Comparison
            </span>
            <h2 className="font-headline text-headline-xl text-graphite tracking-tight">
              Compare MedSpace <span className="italic text-forest-deep">Product Capabilities.</span>
            </h2>
          </div>

          <div className="reveal-on-scroll overflow-x-auto bg-canvas-white rounded-2xl border border-mist shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-mist bg-fog/60">
                  <th className="p-4 pl-6 font-code-badge text-xs uppercase text-slate w-1/6">Feature</th>
                  <th className="p-4 font-headline text-sm text-graphite font-semibold">ClinicOps</th>
                  <th className="p-4 font-headline text-sm text-graphite font-semibold">MedScribe</th>
                  <th className="p-4 font-headline text-sm text-graphite font-semibold">VitalGraph RPM</th>
                  <th className="p-4 font-headline text-sm text-graphite font-semibold">PatientGraph</th>
                  <th className="p-4 pr-6 font-headline text-sm text-graphite font-semibold">ClinicalKG Ent.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist font-body-sm text-steel">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-fog/30 transition-colors">
                    <td className="p-4 pl-6 font-code-badge text-xs uppercase text-slate font-semibold">
                      {row.feature}
                    </td>
                    <td className="p-4 text-graphite">{row.p3}</td>
                    <td className="p-4 text-graphite">{row.p1}</td>
                    <td className="p-4 text-graphite">{row.p2}</td>
                    <td className="p-4 text-graphite">{row.p4}</td>
                    <td className="p-4 pr-6 text-graphite font-medium">{row.p5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 8: REGULATORY, SAFETY & EVIDENCE STRIP ───────────────── */}
      <section className="w-full py-16 px-6 lg:px-12 border-t border-mist">
        <div className="max-w-8xl mx-auto">
          <div className="bg-canvas-white rounded-2xl p-8 border border-mist shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[20px]">verified_user</span>
                <span className="font-code-badge text-xs uppercase tracking-wider text-forest-deep font-bold">
                  Clinical Safety &amp; Regulatory Posture
                </span>
              </div>
              <p className="font-body-sm text-sm text-steel leading-relaxed">
                MedSpace AI provides clinician-in-the-loop decision support and administrative acceleration. It does not replace
                licensed physician judgment or emergency medical triage. All AUROC predictive benchmarks (0.93 decompensation,
                0.83 in-hospital mortality) represent retrospective clinical validation cohorts.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-code-badge text-slate pt-1">
                <span>&bull; HIPAA BAA Executed Prior to Ingestion</span>
                <span>&bull; Safe Harbor De-Identification</span>
                <span>&bull; US CPT 99453/4 &amp; International Equivalents</span>
              </div>
            </div>

            <Link
              href="/evidence"
              className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-fog text-graphite hover:bg-ash transition-colors font-code-badge text-xs border border-mist shrink-0"
            >
              <span>View Scientific Evidence &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 9: PRICING & GEO FAQ ───────────────── */}
      <section className="w-full bg-surface-cream py-20 px-6 lg:px-12 border-t border-mist" id="faq">
        <div className="max-w-8xl mx-auto">
          <div className="reveal-on-scroll max-w-3xl mb-12">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
              Evaluation &bull; FAQ
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              Frequently Asked Questions About <span className="italic text-terracotta-accent">MedSpace Products.</span>
            </h2>
          </div>

          <div className="reveal-on-scroll max-w-4xl space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-canvas-white rounded-2xl p-6 border border-mist shadow-sm transition-all open:shadow-md"
              >
                <summary className="font-headline text-headline-sm text-forest-deep cursor-pointer list-none flex items-center justify-between gap-4 select-none">
                  <span className="group-hover:text-primary transition-colors">{faq.q}</span>
                  <span className="w-8 h-8 rounded-full bg-fog flex items-center justify-center text-forest-deep flex-shrink-0 transition-transform duration-200 group-open:rotate-180">
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                  </span>
                </summary>
                <div className="font-body-md text-body-md text-steel mt-4 pt-4 border-t border-mist leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── SECTION 10: FINAL CTA HUB ───────────────── */}
      <section className="w-full py-20 px-6 lg:px-12 max-w-8xl mx-auto" id="pilot">
        <div className="bg-forest-deep rounded-3xl p-8 lg:p-16 text-on-primary relative overflow-hidden shadow-lg">
          <div className="max-w-2xl relative z-10 space-y-6">
            <span className="font-code-badge text-xs text-secondary-container uppercase tracking-widest block font-semibold">
              START A 14-DAY CLINICAL PILOT
            </span>
            <h2 className="font-headline text-headline-2xl text-on-primary tracking-tight leading-[1.08]">
              Bring auditable clinical intelligence into <span className="italic text-terracotta-accent">patient care.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed">
              Experience the power of a governed clinical knowledge graph. Test ambient SOAP notes, deploy remote patient monitoring,
              or eliminate clinic front-desk bottlenecks with guaranteed zero PHI cloud egress.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/company/contact"
                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-terracotta-accent text-white font-label-lg text-label-lg hover:bg-terracotta-accent/90 transition-all shadow-md gap-2 group cursor-pointer"
              >
                <span>Request 14-Day Pilot</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                href="/hardware"
                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg transition-colors border border-white/20"
              >
                <span>Explore Hardware Kits</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-code-badge text-on-primary/60">
              <span>&bull; HIPAA BAA Signed</span>
              <span>&bull; 100% On-Premise Air-Gapped Ready</span>
              <span>&bull; Works Beside Any EHR</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
