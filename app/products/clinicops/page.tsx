"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";

interface OperationalScenario {
  id: string;
  tabLabel: string;
  title: string;
  channel: string;
  situation: string;
  action: string;
  result: string;
  savedBenefit: string;
}

const SCENARIOS: OperationalScenario[] = [
  {
    id: "noshow",
    tabLabel: "1. Preventing a Missed Visit",
    title: "Marcus Vance (Cardiology Follow-Up)",
    channel: "WhatsApp / SMS",
    situation: "Marcus often gets stuck in morning commute traffic and was likely to miss his Monday 9:00 AM slot.",
    action: "ClinicOps automatically sent a friendly WhatsApp message on Saturday offering a 1-tap option to switch to Tuesday afternoon.",
    result: "Marcus switched to Tuesday at 2:30 PM. His open Monday slot was instantly offered to Elena on the waitlist, who gladly took it.",
    savedBenefit: "1 appointment saved · $180 revenue protected · Zero staff phone calls",
  },
  {
    id: "intake",
    tabLabel: "2. Fast Tablet Check-In",
    title: "David K. (New Patient Intake)",
    channel: "Reception Kiosk Tablet",
    situation: "New patients traditionally spend 15 minutes standing at reception filling out paper clipboard forms.",
    action: "David tapped his phone on the reception kiosk QR code, entered his details, and signed his consent form digitally.",
    result: "His insurance was verified and his medical intake was saved directly into the doctor's schedule before he sat down.",
    savedBenefit: "14 minutes of front-desk paperwork eliminated per patient",
  },
  {
    id: "claim",
    tabLabel: "3. Catching a Billing Mistake",
    title: "Elena R. (Complex Visit Claim)",
    channel: "Billing Queue Check",
    situation: "Doctor completed a complex consultation, but the note was missing one specific condition detail required by the payer.",
    action: "ClinicOps cross-referenced the clinical note against insurance rules before the claim was generated and sent an alert.",
    result: "The attending doctor confirmed the secondary diagnosis with a single click. The claim went out clean the first time.",
    savedBenefit: "100% clean claim acceptance · Prevented an expensive 60-day denial appeal",
  },
];

const FAQS = [
  {
    q: "Do we have to replace our current scheduling software or EHR?",
    a: "No. ClinicOps connects directly alongside your current software (Epic, Cerner, AthenaHealth, or any standard calendar). There is zero software rip-and-replace required.",
  },
  {
    q: "Do patients need to download an app?",
    a: "Never. Patients receive reminders and intake links through channels they already use daily, such as WhatsApp, SMS, or web browsers on their phones. They don't have to create a new account or password.",
  },
  {
    q: "How does ClinicOps catch billing rejections before they happen?",
    a: "Before bills are sent to insurance companies, ClinicOps compares the doctor's visit notes with the billing codes. If a required clinical detail or diagnosis is missing, it alerts the clinic staff immediately so it can be fixed before submission.",
  },
  {
    q: "What does the 14-day clinic pilot look like?",
    a: "We can connect ClinicOps to your appointment schedule in about 48 hours without disrupting your daily clinic operations. You will see an immediate drop in missed appointments and front-desk phone calls within the first week.",
  },
];

export default function ClinicOpsPage() {
  const [activeScenario, setActiveScenario] = useState<OperationalScenario>(SCENARIOS[0]);

  return (
    <div className="min-h-screen bg-surface-porcelain">
      <ScrollObserver />

      {/* ───────────────── 1. HERO SECTION ───────────────── */}
      <section className="w-full pt-12 pb-16 md:pb-24 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs font-code-badge text-slate">
            <Link href="/" className="hover:text-forest-deep transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-forest-deep transition-colors">Products</Link>
            <span>/</span>
            <span className="text-graphite font-semibold">ClinicOps</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Left: Human, Clear Copy */}
            <div className="reveal-on-scroll lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-cream text-forest-deep font-code-badge text-xs font-medium border border-border-tactile">
                <span className="w-2 h-2 rounded-full bg-forest-deep" />
                <span>Smart Clinic Operations &bull; For Practice Managers</span>
              </div>

              <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight leading-[1.12]">
                An automated front-desk that{" "}
                <span className="italic font-headline text-terracotta-accent block sm:inline">
                  patients actually love.
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-steel max-w-xl leading-relaxed">
                ClinicOps cuts missed appointments in half, lets patients check in on a tablet or phone in seconds,
                and catches billing mistakes before claims are submitted to insurance.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-forest-deep text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm gap-2 group cursor-pointer"
                >
                  <span>Start a Free 14-Day Pilot</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-canvas-white text-graphite font-label-md text-label-md hover:bg-fog transition-colors shadow-sm border border-mist"
                >
                  <span>See How It Works</span>
                </a>
              </div>

              {/* 3 Simple, Clear Benefit Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-mist">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-forest-deep font-semibold font-headline text-base">
                    <span className="material-symbols-outlined text-[20px]">trending_down</span>
                    <span>Cut Missed Visits</span>
                  </div>
                  <p className="text-xs text-slate font-body-sm leading-relaxed">
                    Automated WhatsApp and SMS reminders make confirming or rescheduling effortless.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-terracotta-accent font-semibold font-headline text-base">
                    <span className="material-symbols-outlined text-[20px]">tablet</span>
                    <span>Touchless Check-In</span>
                  </div>
                  <p className="text-xs text-slate font-body-sm leading-relaxed">
                    Patients check in on an entry tablet or phone before entering the exam room.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-graphite font-semibold font-headline text-base">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                    <span>Clean Billing</span>
                  </div>
                  <p className="text-xs text-slate font-body-sm leading-relaxed">
                    Double-checks notes against payer rules to stop claim rejections before submission.
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Right: Clean, Visual Product Preview Card */}
            <div className="reveal-scale lg:col-span-5 bg-canvas-white rounded-2xl p-6 md:p-7 border border-mist shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-mist">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-forest-deep animate-pulse" />
                  <span className="font-code-badge text-xs uppercase font-bold text-graphite">
                    ClinicOps Active Dispatch
                  </span>
                </div>
                <span className="font-code-badge text-[11px] text-slate">Live Calendar Sync</span>
              </div>

              {/* WhatsApp Bubble */}
              <div className="p-4 rounded-xl bg-surface-cream border border-border-tactile space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-code-badge text-[10px] text-brass uppercase font-bold">
                    WhatsApp Message Sent
                  </span>
                  <span className="font-code-badge text-[10px] text-slate">2m ago</span>
                </div>
                <p className="text-xs text-forest-deep leading-relaxed">
                  "Hi Elena! Dr. Chen has an open slot tomorrow at 2:00 PM. Would you like to confirm your cardiology review?"
                </p>
                <div className="flex items-center gap-1.5 text-[10.5px] font-code-badge text-forest-deep font-semibold pt-1">
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>
                  <span>Patient confirmed with 1 tap &bull; No app download required</span>
                </div>
              </div>

              {/* Pre-Claim Check Bubble */}
              <div className="p-3.5 rounded-xl bg-fog border border-mist space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-code-badge text-[10.5px] text-graphite uppercase font-bold">
                    Pre-Submission Billing Audit
                  </span>
                  <span className="font-code-badge text-[10px] text-forest-deep font-bold">Clean</span>
                </div>
                <p className="text-xs text-steel leading-relaxed">
                  Encounter #8492 verified: Clinical notes and complexity match insurance guidelines.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-code-badge text-slate border-t border-mist">
                <span>Works with Epic, Cerner &amp; Athena</span>
                <span className="text-forest-deep font-semibold">Zero Double-Booking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 2. INTERACTIVE STORYBOARD: SEE IT IN ACTION ───────────────── */}
      <section className="w-full bg-ash py-16 md:py-24 px-6 lg:px-12 border-b border-mist" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-on-scroll max-w-2xl mb-10">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block mb-2">
              Real-World Examples
            </span>
            <h2 className="font-headline text-headline-xl text-graphite tracking-tight">
              See how ClinicOps solves your biggest daily headaches.
            </h2>
            <p className="font-body-md text-body-md text-steel mt-2">
              Explore three common clinic challenges and see how automated triage keeps doctors fully booked and on time.
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {SCENARIOS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveScenario(s)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-code-badge font-semibold transition-all cursor-pointer ${
                  activeScenario.id === s.id
                    ? "bg-forest-deep text-white border-forest-deep shadow-sm"
                    : "bg-canvas-white text-steel border-mist hover:text-graphite hover:border-slate/40"
                }`}
              >
                {s.tabLabel}
              </button>
            ))}
          </div>

          {/* Interactive Scenario Card */}
          <div className="bg-canvas-white rounded-2xl border border-mist shadow-sm overflow-hidden p-6 md:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-mist">
              <div>
                <span className="font-code-badge text-xs text-brass uppercase font-bold block mb-0.5">
                  Live Clinic Simulation
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                  {activeScenario.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-fog border border-mist text-xs font-code-badge text-slate font-medium">
                Channel: {activeScenario.channel}
              </span>
            </div>

            {/* 3 Step Story Progression */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-fog border border-mist space-y-2">
                <span className="font-code-badge text-[10.5px] uppercase text-slate font-bold block">
                  1. The Situation
                </span>
                <p className="text-xs text-steel leading-relaxed">
                  {activeScenario.situation}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-cream border border-border-tactile space-y-2">
                <span className="font-code-badge text-[10.5px] uppercase text-terracotta-accent font-bold block">
                  2. What ClinicOps Did
                </span>
                <p className="text-xs text-forest-deep leading-relaxed font-medium">
                  {activeScenario.action}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-matcha/20 border border-forest-deep/20 space-y-2">
                <span className="font-code-badge text-[10.5px] uppercase text-forest-deep font-bold block">
                  3. The Outcome
                </span>
                <p className="text-xs text-forest-deep leading-relaxed">
                  {activeScenario.result}
                </p>
              </div>
            </div>

            {/* Bottom Benefit Strip */}
            <div className="pt-4 border-t border-mist flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-forest-deep font-code-badge text-xs font-semibold">
                <span className="material-symbols-outlined text-[18px]">payments</span>
                <span>{activeScenario.savedBenefit}</span>
              </div>

              <Link
                href="/company/contact"
                className="text-xs font-code-badge font-bold text-forest-deep hover:underline"
              >
                Plan a pilot for your clinic &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 3. SIMPLE 3-STEP WORKFLOW ───────────────── */}
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-on-scroll max-w-2xl mb-12">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block mb-2">
              Implementation
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              How ClinicOps works beside your team.
            </h2>
            <p className="font-body-md text-body-md text-steel mt-2">
              Zero software replacement. ClinicOps acts as a real-time operational layer connecting patients and your existing calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-surface-cream text-forest-deep flex items-center justify-center font-headline text-xl font-bold">
                1
              </div>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Connects to Your Calendar
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                Plugs into whatever system you use today (Epic, Cerner, AthenaHealth, or Google Calendar). There is no
                need to train staff on a new appointment book.
              </p>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-surface-matcha/40 text-forest-deep flex items-center justify-center font-headline text-xl font-bold">
                2
              </div>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Engages Patients Naturally
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                Sends friendly reminders, collects intake forms, and offers 1-tap reschedule options via WhatsApp or SMS.
                Cancelled slots are immediately offered to waiting patients.
              </p>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-fog text-graphite flex items-center justify-center font-headline text-xl font-bold">
                3
              </div>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Audits Before Billing
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                Scans doctor notes against proposed billing codes before claims leave your office, preventing costly
                insurance rejections and long payment delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 4. HARDWARE PAIRING: RECEPTION KIOSK ───────────────── */}
      <section className="w-full bg-surface-cream py-16 md:py-24 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="reveal-on-scroll lg:col-span-7 space-y-5">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block">
              Physical Check-In
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              Modern reception kiosk. Zero waiting in line.
            </h2>
            <p className="font-body-md text-body-md text-steel leading-relaxed">
              Pair ClinicOps with our pre-configured hardware bundle: an antimicrobial 10.5" touchscreen tablet and sturdy
              reception stand. Patients check in, verify insurance, and sign consent in under 20 seconds.
            </p>

            <div className="space-y-3 pt-2 font-body-sm text-xs text-steel">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-forest-deep text-[20px]">check_circle</span>
                <span><strong>Instant Self Check-In:</strong> Patients scan a QR code or enter their phone number on the tablet.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-forest-deep text-[20px]">check_circle</span>
                <span><strong>Digital Waiting Queue:</strong> Live waiting room queue screen keeps patients informed and calm.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-forest-deep text-[20px]">check_circle</span>
                <span><strong>Works on Wi-Fi or Local Server:</strong> Fully compatible with local Clinic AI Box installations.</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-1.5 font-label-md text-xs text-forest-deep font-semibold hover:underline"
              >
                <span>Learn more about Front-Desk Kiosk hardware</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="reveal-scale lg:col-span-5 bg-canvas-white rounded-2xl p-8 border border-mist shadow-sm text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-surface-matcha/50 flex items-center justify-center text-forest-deep">
              <span className="material-symbols-outlined text-[32px]">tablet</span>
            </div>
            <div>
              <span className="font-code-badge text-[11px] uppercase text-slate font-bold block mb-1">
                Optional Hardware Add-On
              </span>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Front-Desk Touchscreen Kiosk
              </h3>
              <p className="font-body-sm text-xs text-steel mt-1 max-w-xs mx-auto">
                10.5" Medical-grade touchscreen with heavy aluminum countertop stand.
              </p>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-fog border border-mist font-code-badge text-xs text-forest-deep font-semibold">
              Pre-configured for ClinicOps
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 5. WORKS BETTER TOGETHER (CROSS-SELL) ───────────────── */}
      <section className="w-full py-16 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-on-scroll max-w-2xl mb-8">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest block mb-1 font-semibold">
              Connected Platform
            </span>
            <h2 className="font-headline text-headline-lg text-graphite">
              ClinicOps works better with the rest of your clinic.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/products/medscribe"
              className="p-6 rounded-2xl bg-canvas-white border border-mist shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-code-badge text-[11px] text-terracotta-accent uppercase font-bold block mb-1">
                  For Doctors &amp; Clinicians
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium group-hover:text-forest-deep transition-colors mb-1.5">
                  MedScribe Graph &rarr;
                </h3>
                <p className="font-body-sm text-xs text-steel leading-relaxed">
                  Writes clinical visit notes in seconds, feeding structured records directly into ClinicOps to prevent billing denials.
                </p>
              </div>
              <span className="font-code-badge text-xs text-forest-deep font-semibold mt-4 block">
                Saves doctors 2 hours/day
              </span>
            </Link>

            <Link
              href="/products/vitalgraph"
              className="p-6 rounded-2xl bg-canvas-white border border-mist shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-code-badge text-[11px] text-brass uppercase font-bold block mb-1">
                  For Chronic Care Management
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium group-hover:text-forest-deep transition-colors mb-1.5">
                  VitalGraph RPM &rarr;
                </h3>
                <p className="font-body-sm text-xs text-steel leading-relaxed">
                  Automatically schedules follow-up visits inside ClinicOps whenever a patient's home readings trigger health alerts.
                </p>
              </div>
              <span className="font-code-badge text-xs text-terracotta-accent font-semibold mt-4 block">
                Continuous monitoring between visits
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────── 6. FAQ ───────────────── */}
      <section className="w-full bg-ash py-16 md:py-24 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block">
              Frequently Asked Questions
            </span>
            <h2 className="font-headline text-headline-xl text-graphite">
              Questions practice managers ask us most.
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-canvas-white rounded-2xl p-5 md:p-6 border border-mist shadow-sm transition-all open:shadow-md"
              >
                <summary className="font-headline text-base text-forest-deep cursor-pointer list-none flex items-center justify-between gap-4 select-none">
                  <span className="group-hover:text-primary transition-colors font-medium">{faq.q}</span>
                  <span className="w-7 h-7 rounded-full bg-fog flex items-center justify-center text-forest-deep shrink-0 transition-transform duration-200 group-open:rotate-180">
                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                  </span>
                </summary>
                <div className="font-body-sm text-xs text-steel mt-3 pt-3 border-t border-mist leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── 7. FINAL PILOT CTA ───────────────── */}
      <section className="w-full py-16 md:py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-forest-deep rounded-3xl p-8 md:p-14 text-on-primary text-center space-y-5">
          <span className="font-code-badge text-xs text-secondary-container uppercase tracking-widest block font-semibold">
            Zero Disruption Setup
          </span>
          <h2 className="font-headline text-headline-2xl text-on-primary max-w-xl mx-auto leading-tight">
            Cut no-shows in half. Try ClinicOps for 14 days.
          </h2>
          <p className="font-body-md text-on-primary/80 max-w-lg mx-auto leading-relaxed">
            See fewer missed visits and happier front-desk staff within 48 hours. No software replacement required to start.
          </p>
          <div className="pt-2">
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-terracotta-accent text-white font-label-md text-label-md hover:bg-terracotta-accent/90 transition-all shadow-md gap-2"
            >
              <span>Request a 14-Day Clinic Pilot</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
