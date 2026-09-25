"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";

const SCENARIOS = [
  {
    id: "noshow",
    title: "No-Show Predictive Triage",
    channel: "WhatsApp / SMS",
    patient: "Marcus Vance (Cardiology Follow-up)",
    context: "Historical pattern: 2 prior missed Monday morning appointments. Long commute detected.",
    action: "Autonomous multi-channel 48h interactive check-in sent with 1-click reschedule options.",
    result: "Patient rescheduled to Tuesday 2:30 PM. Open Monday 9:00 AM slot instantly offered to waitlist.",
    recovered: "1.0 appointment slot saved · $180 revenue protected",
  },
  {
    id: "claim",
    title: "Pre-Submission Claim Audit",
    channel: "EHR Billing Queue",
    patient: "Elena Rostova (E/M Level 4 Visit)",
    context: "Target CPT: 99214. Clinical documentation lacked explicit medical decision-making complexity rationale.",
    action: "Cross-referenced MedScribe clinical graph output before claim generation. Flagged missing chronic condition element.",
    result: "Physician prompted with 1-click confirmation of secondary hypertension management. Claim audited & validated.",
    recovered: "100% clean claim acceptance · $142 denial appeal avoided",
  },
  {
    id: "intake",
    title: "Kiosk Touchless Intake",
    channel: "Reception Kiosk Tablet",
    patient: "David K. (New Patient Intake)",
    context: "Walk-in patient checked in via QR code on reception kiosk stand.",
    action: "Insurance eligibility real-time verified, medical history captured, consent signed on tablet.",
    result: "Chart populated into topological graph before patient entered exam room. Zero front-desk manual data entry.",
    recovered: "14 minutes front-desk staff time saved per patient",
  },
];

const FAQS = [
  {
    q: "How does ClinicOps integrate with our current scheduling system?",
    a: "ClinicOps connects beside your current scheduling software via bidirectional FHIR R4 Schedule/Slot APIs, HL7 SIU feeds, or certified EHR connectors (Epic, Cerner, Athenahealth). No calendar rip-and-replace required.",
  },
  {
    q: "Can patients interact without downloading an app?",
    a: "Yes. Patients interact via native channels they already use daily: WhatsApp, Telegram, SMS, or web browsers. They receive interactive appointment reminders, intake forms, and reschedule links without creating an account or downloading an app.",
  },
  {
    q: "How does the pre-submission claim audit cut denials?",
    a: "ClinicOps actively parses the structured clinical graph generated during the consultation (from MedScribe or EHR notes). Before billing codes are batched to the clearinghouse, it verifies that clinical complexity, ICD-10 specificity, and documentation requirements match payer rules.",
  },
  {
    q: "What is required for the 14-day clinic pilot?",
    a: "A 14-day pilot requires zero software modification. We can configure automated appointment reminders and intake workflows using a de-identified schedule export or direct API sandbox within 48 hours.",
  },
];

export default function ClinicOpsPage() {
  const [activeScenario, setActiveScenario] = useState(SCENARIOS[0]);

  return (
    <div className="min-h-screen bg-surface-porcelain">
      <ScrollObserver />

      {/* ───────────────── 1. HERO SECTION ───────────────── */}
      <section className="w-full pt-10 pb-16 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-8xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs font-code-badge text-slate">
            <Link href="/" className="hover:text-forest-deep transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-forest-deep transition-colors">Products</Link>
            <span>/</span>
            <span className="text-graphite font-semibold">ClinicOps Graph</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="reveal-on-scroll lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-matcha/60 text-forest-deep font-code-badge text-code-badge font-semibold border border-forest-deep/20">
                  <span className="w-2 h-2 rounded-full bg-forest-deep animate-pulse" />
                  ACTIVE PILOT &bull; SPRINT 1 WINNER
                </span>
                <span className="font-code-badge text-xs text-brass uppercase font-semibold">
                  P3 &bull; For Clinic Management
                </span>
              </div>

              <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight leading-[1.08]">
                Autonomous Front-Desk, Scheduling &amp;{" "}
                <span className="italic font-headline text-terracotta-accent">Claim Denial AI.</span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Slash patient no-shows by 30% to 50%, automate reception intake, and cross-reference billing codes
                against clinical notes before claims are submitted. The quickest pilot ROI in healthcare.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-forest-deep text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-md gap-2 group cursor-pointer"
                >
                  <span>Start a 14-Day Clinic Pilot</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
                <a
                  href="#simulator"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-canvas-white text-graphite font-label-md text-label-md hover:bg-fog transition-colors shadow-sm border border-mist"
                >
                  <span>Test Operations Simulator</span>
                </a>
              </div>

              {/* Pilot KPI Strip */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-mist font-code-badge text-xs">
                <div>
                  <span className="text-slate block mb-0.5 uppercase tracking-wider">No-Show Reduction:</span>
                  <span className="text-forest-deep font-bold text-base">&minus;30% to &minus;50%</span>
                  <span className="text-[10px] text-slate block">(Pilot Target)</span>
                </div>
                <div>
                  <span className="text-slate block mb-0.5 uppercase tracking-wider">Front-Desk Load:</span>
                  <span className="text-graphite font-bold text-base">&minus;1 FTE</span>
                  <span className="text-[10px] text-slate block">(Workload Saved)</span>
                </div>
                <div>
                  <span className="text-slate block mb-0.5 uppercase tracking-wider">Pilot Onboarding:</span>
                  <span className="text-terracotta-accent font-bold text-base">48 Hours</span>
                  <span className="text-[10px] text-slate block">(Non-Invasive)</span>
                </div>
              </div>
            </div>

            {/* Hero Right: Live Interactive Card Preview */}
            <div className="reveal-scale lg:col-span-5 bg-canvas-white rounded-2xl p-7 border border-mist shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-mist">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-forest-deep" />
                  <span className="font-code-badge text-xs uppercase font-bold text-graphite">
                    ClinicOps Active Dispatch
                  </span>
                </div>
                <span className="text-[11px] font-code-badge text-slate">Live Triage Queue</span>
              </div>

              <div className="space-y-3 font-body-sm text-xs">
                <div className="p-3.5 rounded-xl bg-surface-cream border border-border-tactile">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-code-badge font-bold text-forest-deep">WhatsApp Intake Engine</span>
                    <span className="text-[10px] font-code-badge text-slate">2m ago</span>
                  </div>
                  <p className="text-steel">
                    "Hi Elena! Dr. Chen has an open slot tomorrow at 2:00 PM. Would you like to confirm your cardiology review?"
                  </p>
                  <span className="text-[10px] font-code-badge text-forest-deep font-semibold mt-1 block">
                    &bull; Patient confirmed via WhatsApp (No app download required)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-fog border border-mist">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-code-badge font-bold text-graphite">Pre-Claim Audit Alert</span>
                    <span className="text-[10px] font-code-badge text-terracotta-accent font-semibold">Action Required</span>
                  </div>
                  <p className="text-steel">
                    Encounter #8492: CPT 99214 lacks explicit secondary diagnosis documentation in SOAP note.
                  </p>
                  <span className="text-[10px] font-code-badge text-slate mt-1 block">
                    Auto-prompt routed to attending physician prior to clearinghouse submission.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-code-badge text-slate border-t border-mist">
                <span>EHR Sync: Athena &amp; Epic R4</span>
                <span className="text-forest-deep font-semibold">100% Clean Audit Trail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 2. INTERACTIVE SIMULATOR (P3 DEMO) ───────────────── */}
      <section className="w-full bg-ash py-20 px-6 lg:px-12 border-b border-mist" id="simulator">
        <div className="max-w-8xl mx-auto">
          <div className="reveal-on-scroll max-w-3xl mb-12">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
              Live Operations Simulator &bull; Interactive Triage
            </span>
            <h2 className="font-headline text-headline-xl text-graphite tracking-tight">
              See How ClinicOps <span className="italic text-forest-deep">Rescues Clinic Revenue.</span>
            </h2>
            <p className="font-body-md text-body-md text-steel mt-3">
              Explore real-world operational bottlenecks and how the clinical knowledge graph resolves them in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Scenario Selector Tabs */}
            <div className="reveal-on-scroll lg:col-span-4 flex flex-col gap-3">
              {SCENARIOS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveScenario(s)}
                  className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                    activeScenario.id === s.id
                      ? "bg-canvas-white border-forest-deep shadow-sm"
                      : "bg-fog/60 border-mist hover:bg-canvas-white text-steel"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-headline text-sm font-semibold text-graphite">{s.title}</span>
                    <span className="font-code-badge text-[10px] px-2 py-0.5 rounded-full bg-surface-matcha/40 text-forest-deep">
                      {s.channel}
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-slate line-clamp-2">{s.context}</p>
                </button>
              ))}
            </div>

            {/* Scenario Detail Display */}
            <div className="reveal-on-scroll lg:col-span-8 bg-canvas-white rounded-2xl p-8 border border-mist shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-mist">
                  <div>
                    <span className="font-code-badge text-xs text-brass uppercase font-bold block mb-1">
                      Active Encounter Simulation
                    </span>
                    <h3 className="font-headline text-headline-sm text-graphite font-medium">
                      {activeScenario.title}
                    </h3>
                  </div>
                  <span className="font-code-badge text-xs px-3 py-1 rounded-full bg-fog border border-mist text-graphite">
                    Target: {activeScenario.patient}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body-sm">
                  <div className="p-4 rounded-xl bg-fog border border-mist space-y-1.5">
                    <span className="font-code-badge uppercase text-slate text-[11px] block font-semibold">
                      Detected Bottleneck:
                    </span>
                    <p className="text-steel leading-relaxed">{activeScenario.context}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-cream border border-border-tactile space-y-1.5">
                    <span className="font-code-badge uppercase text-terracotta-accent text-[11px] block font-semibold">
                      Graph Autonomous Action:
                    </span>
                    <p className="text-forest-deep leading-relaxed">{activeScenario.action}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-matcha/20 border border-forest-deep/20 space-y-1.5">
                  <span className="font-code-badge uppercase text-forest-deep text-[11px] block font-bold">
                    Autonomous Outcome:
                  </span>
                  <p className="text-forest-deep text-sm font-medium leading-relaxed">
                    {activeScenario.result}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-mist flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-forest-deep text-[18px]">payments</span>
                  <span className="font-code-badge text-xs text-forest-deep font-bold">
                    {activeScenario.recovered}
                  </span>
                </div>

                <Link
                  href="/company/contact"
                  className="inline-flex items-center gap-1.5 font-label-md text-xs text-forest-deep hover:underline font-semibold"
                >
                  <span>Request a custom pilot for your clinic</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 3. 3-STEP CLINICAL WORKFLOW ───────────────── */}
      <section className="w-full py-20 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-8xl mx-auto">
          <div className="reveal-on-scroll max-w-3xl mb-14">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
              Implementation Mechanism &bull; 3-Step Flow
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              How ClinicOps Works <span className="italic text-terracotta-accent">Beside Your EHR.</span>
            </h2>
            <p className="font-body-md text-body-md text-text-muted mt-3">
              Zero rip-and-replace. ClinicOps acts as a real-time autonomous operational layer connecting patients and staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-badge text-headline-md font-bold text-terracotta-accent block mb-3">01</span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium mb-2">
                  Omnichannel Intake &amp; Triage
                </h3>
                <p className="font-body-sm text-sm text-steel leading-relaxed">
                  Patients interact naturally through WhatsApp, SMS, web chat, or the reception check-in tablet.
                  Demographics, insurance verification, and chief complaints are normalized automatically.
                </p>
              </div>
              <span className="font-code-badge text-[11px] text-slate pt-4 mt-4 border-t border-mist block">
                Channels: WhatsApp &bull; SMS &bull; Web &bull; Kiosk
              </span>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-badge text-headline-md font-bold text-forest-deep block mb-3">02</span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium mb-2">
                  Topological Schedule Optimization
                </h3>
                <p className="font-body-sm text-sm text-steel leading-relaxed">
                  Continuously calculates no-show probabilities based on history, weather, appointment types, and transit.
                  Dynamically moves high-probability no-shows to optimal slots and activates waitlist fills.
                </p>
              </div>
              <span className="font-code-badge text-[11px] text-slate pt-4 mt-4 border-t border-mist block">
                Engine: VeritasGraph Predictive Triage
              </span>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-badge text-headline-md font-bold text-terracotta-accent block mb-3">03</span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium mb-2">
                  Pre-Submission Denial Audit
                </h3>
                <p className="font-body-sm text-sm text-steel leading-relaxed">
                  Scans clinical consultation notes against proposed billing codes. Catches documentation gaps
                  and E/M coding discrepancies before claims leave your practice.
                </p>
              </div>
              <span className="font-code-badge text-[11px] text-slate pt-4 mt-4 border-t border-mist block">
                Integration: Native FHIR R4 &bull; HL7 Billing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 4. HARDWARE PAIRING: FRONT-DESK KIT ───────────────── */}
      <section className="w-full bg-surface-cream py-20 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="reveal-on-scroll lg:col-span-6 space-y-5">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest font-semibold block">
              Physical Clinical Pairing
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              The Front-Desk Kit. <span className="italic text-terracotta-accent">Antimicrobial &amp; Plug-and-Play.</span>
            </h2>
            <p className="font-body-md text-body-md text-text-muted leading-relaxed">
              Pair ClinicOps with our pre-configured hardware bundle: a 10.5" medical-grade touchscreen tablet, sturdy
              counter or floor stand, and dynamic queue status display monitors. Pre-paired out of the box.
            </p>

            <ul className="space-y-3 font-body-sm text-sm text-steel pt-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">check_circle</span>
                <span>Self-check-in via QR code or patient phone number in under 20 seconds</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">check_circle</span>
                <span>Dynamic waiting room queue display powered by space-sign.ai</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">check_circle</span>
                <span>Local Clinic AI Box support for 100% on-premise air-gapped intake</span>
              </li>
            </ul>

            <div className="pt-3">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-2 font-label-md text-sm text-forest-deep font-semibold hover:underline"
              >
                <span>Inspect Front-Desk Kit hardware specs</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="reveal-scale lg:col-span-6 bg-canvas-white rounded-2xl p-8 border border-mist shadow-sm">
            <div className="rounded-xl bg-fog p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-surface-matcha/50 flex items-center justify-center text-forest-deep">
                <span className="material-symbols-outlined text-[32px]">tablet</span>
              </div>
              <div>
                <span className="font-code-badge text-xs uppercase text-slate font-bold block mb-1">
                  Bundle Code: FDK-2026
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                  Front-Desk Touchscreen Kiosk
                </h3>
                <p className="font-body-sm text-xs text-steel max-w-sm mt-1">
                  10.5" Antimicrobial Touchscreen &bull; Heavy-duty aluminum lock stand &bull; Thermal printer support
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-canvas-white border border-mist font-code-badge text-xs text-forest-deep font-bold">
                Pre-configured for ClinicOps Graph
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 5. WORKS BETTER TOGETHER (CROSS-SELL) ───────────────── */}
      <section className="w-full py-16 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-8xl mx-auto">
          <div className="reveal-on-scroll max-w-3xl mb-10">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
              The Product Ladder &bull; Cross-Sell Engine
            </span>
            <h2 className="font-headline text-headline-lg text-graphite">
              ClinicOps Works Better With <span className="italic text-forest-deep">The Shared Graph.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/products/medscribe"
              className="p-6 rounded-2xl bg-canvas-white border border-mist shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-code-badge text-xs text-terracotta-accent uppercase font-bold block mb-1">
                  Next Step in Ladder &bull; P1
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium group-hover:text-forest-deep transition-colors mb-2">
                  MedScribe Graph &rarr;
                </h3>
                <p className="font-body-sm text-sm text-steel">
                  Feeds structured SOAP notes directly into ClinicOps pre-claim auditor to eliminate billing denials automatically.
                </p>
              </div>
              <span className="font-code-badge text-xs text-forest-deep font-semibold mt-4 block">
                Saves 1.5–2 hours/doctor/day
              </span>
            </Link>

            <Link
              href="/products/vitalgraph"
              className="p-6 rounded-2xl bg-canvas-white border border-mist shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-code-badge text-xs text-brass uppercase font-bold block mb-1">
                  Next Step in Ladder &bull; P2
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium group-hover:text-forest-deep transition-colors mb-2">
                  VitalGraph RPM &rarr;
                </h3>
                <p className="font-body-sm text-sm text-steel">
                  Automatically schedules follow-up visits inside ClinicOps whenever home vitals trigger chronic risk alerts.
                </p>
              </div>
              <span className="font-code-badge text-xs text-terracotta-accent font-semibold mt-4 block">
                Unlocks recurring CPT reimbursement
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────── 6. FAQ & FINAL CTA ───────────────── */}
      <section className="w-full bg-ash py-20 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block">
              ClinicOps FAQ
            </span>
            <h2 className="font-headline text-headline-xl text-graphite">
              Common Questions From Clinic Directors
            </h2>
          </div>

          <div className="space-y-4">
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

      {/* Final Pilot CTA */}
      <section className="w-full py-20 px-6 lg:px-12 max-w-8xl mx-auto">
        <div className="bg-forest-deep rounded-3xl p-8 lg:p-14 text-on-primary text-center space-y-6">
          <span className="font-code-badge text-xs text-secondary-container uppercase tracking-widest block font-semibold">
            READY TO ELIMINATE NO-SHOWS?
          </span>
          <h2 className="font-headline text-headline-2xl text-on-primary max-w-2xl mx-auto leading-[1.12]">
            Launch a 14-day ClinicOps pilot in your practice.
          </h2>
          <p className="font-body-lg text-on-primary/80 max-w-xl mx-auto leading-relaxed">
            See measurable reductions in missed appointments within 48 hours. No software installation required to start.
          </p>
          <div className="pt-2">
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center h-14 px-9 rounded-full bg-terracotta-accent text-white font-label-lg text-label-lg hover:bg-terracotta-accent/90 transition-all shadow-md gap-2"
            >
              <span>Request 14-Day Pilot Onboarding</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
