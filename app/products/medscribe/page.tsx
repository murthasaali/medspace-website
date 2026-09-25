"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";

interface Scenario {
  id: string;
  tabLabel: string;
  patientName: string;
  context: string;
  spokenDialogue: {
    doctor: string;
    patient: string;
  };
  chartDiscovery: {
    title: string;
    detail: string;
  };
  alertMessage: string;
  noteSummary: string[];
  outcome: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "diabetes",
    tabLabel: "1. Hidden Diabetes History",
    patientName: "Robert J., 58 (Annual Wellness Check)",
    context: "Patient forgot about past blood sugar issues during the routine visit.",
    spokenDialogue: {
      doctor: "Any personal or family history of blood sugar problems or diabetes, Robert?",
      patient: "No doc, my blood sugar has always been completely fine.",
    },
    chartDiscovery: {
      title: "Past EHR Chart Found",
      detail: "Prescribed Metformin 500mg last year. Recent HbA1c was 7.8% (elevated).",
    },
    alertMessage: "Patient verbally denied diabetes, but historical records confirm Type 2 Diabetes with active Metformin therapy.",
    noteSummary: [
      "Subjective: Patient reports feeling well; verbally denied glycemic history.",
      "Objective: Past lab records reviewed (HbA1c 7.8%).",
      "Assessment: Type 2 Diabetes (E11.9) reconciled with patient during visit.",
      "Plan: Continue Metformin 500mg BID; repeat HbA1c lab in 90 days.",
    ],
    outcome: "Diagnostic error avoided · Accurate chart saved in 25 seconds",
  },
  {
    id: "allergy",
    tabLabel: "2. Penicillin Allergy Warning",
    patientName: "Clara M., 42 (Sinus Infection)",
    context: "Doctor suggested a common antibiotic, unaware of a severe reaction 3 years ago.",
    spokenDialogue: {
      doctor: "Looks like a bacterial sinus infection. Let's prescribe Amoxicillin.",
      patient: "Sounds great, doctor. I'll pick it up on my way home.",
    },
    chartDiscovery: {
      title: "Allergy Registry Found",
      detail: "Documented severe Penicillin allergy: hives, facial swelling, and shortness of breath in 2021.",
    },
    alertMessage: "Amoxicillin belongs to the Penicillin class. High risk of severe allergic reaction.",
    noteSummary: [
      "Subjective: 10 days of severe facial pressure and nasal congestion.",
      "Objective: Maxillary sinus tenderness confirmed on exam.",
      "Assessment: Acute sinusitis (J01.00); severe Penicillin allergy verified.",
      "Plan: Substituted Azithromycin (Z-Pak) 250mg. Saline rinse twice daily.",
    ],
    outcome: "Adverse drug reaction prevented · Safe alternative prescribed instantly",
  },
  {
    id: "billing",
    tabLabel: "3. Complete Documentation",
    patientName: "Arthur P., 67 (Cardiology Follow-Up)",
    context: "Complex patient with multiple conditions often under-documented due to rush.",
    spokenDialogue: {
      doctor: "Arthur, how has the shortness of breath been on the stairs?",
      patient: "Worse lately, and my socks leave deep marks on my ankles by evening.",
    },
    chartDiscovery: {
      title: "Chronic Condition Review",
      detail: "History of hypertension and emerging mild fluid retention.",
    },
    alertMessage: "All elements for Level-4 visit complexity detected: multi-system review, medication adjustment, and echo order.",
    noteSummary: [
      "Subjective: Progressive exertional dyspnea and bilateral leg swelling.",
      "Objective: BP 146/90. Bilateral 1+ pitting edema on lower legs.",
      "Assessment: Hypertension, uncontrolled; mild fluid retention.",
      "Plan: Increased Lisinopril to 20mg; ordered echocardiogram (ultrasound).",
    ],
    outcome: "Full clinical detail captured · Appropriate reimbursement guaranteed",
  },
];

const FAQS = [
  {
    q: "Do I have to change my current EHR or computer software?",
    a: "Not at all. MedScribe works alongside whatever system you currently use (Epic, Cerner, AthenaHealth, or any other EHR). You can send notes directly via standard connections or paste them in with one click.",
  },
  {
    q: "How does MedScribe catch mistakes that other AI scribes miss?",
    a: "Standard AI tools only transcribe the words spoken in the room. If a patient misremembers or forgets a medication, generic AI writes down the mistake. MedScribe connects to the patient's past medical history and alerts you immediately if something said conflicts with past records.",
  },
  {
    q: "Can this run without internet access for complete patient privacy?",
    a: "Yes. When paired with our compact Clinic AI Box, all speech recognition and note generation run locally on a small computer in your clinic. No voice recordings or patient data ever leave your building or travel over the cloud.",
  },
  {
    q: "How much time does it actually save?",
    a: "Most clinicians save between 1.5 to 2 hours every day. Instead of spending 10 to 15 minutes typing notes after every patient visit, you simply review and sign a completed draft in about 30 seconds.",
  },
  {
    q: "What does the 14-day doctor trial involve?",
    a: "We set up MedScribe on a clinic laptop or workstation in under 30 minutes. You can test it on your everyday patient visits with zero contract commitment and full support from our team.",
  },
];

export default function MedScribePage() {
  const [activeScenario, setActiveScenario] = useState<Scenario>(SCENARIOS[0]);
  const [resolved, setResolved] = useState(false);

  const handleSelectScenario = (s: Scenario) => {
    setActiveScenario(s);
    setResolved(false);
  };

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
            <span className="text-graphite font-semibold">MedScribe</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Left: Human, Clear Copy */}
            <div className="reveal-on-scroll lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-cream text-forest-deep font-code-badge text-xs font-medium border border-border-tactile">
                <span className="w-2 h-2 rounded-full bg-forest-deep" />
                <span>Ambient Clinical Scribe &bull; For Doctors</span>
              </div>

              <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight leading-[1.12]">
                Less time typing.{" "}
                <span className="italic font-headline text-terracotta-accent block sm:inline">
                  More time with patients.
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-steel max-w-xl leading-relaxed">
                MedScribe listens quietly during your visits and writes clear, accurate medical charts in seconds—while
                alerting you if a patient statement conflicts with their past medical history.
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
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                    <span>Save 2 Hours / Day</span>
                  </div>
                  <p className="text-xs text-slate font-body-sm leading-relaxed">
                    Finish your notes before you leave the clinic. No more typing late at night.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-terracotta-accent font-semibold font-headline text-base">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                    <span>Catches Contradictions</span>
                  </div>
                  <p className="text-xs text-slate font-body-sm leading-relaxed">
                    Flags when spoken answers conflict with past records or medications.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-graphite font-semibold font-headline text-base">
                    <span className="material-symbols-outlined text-[20px]">shield</span>
                    <span>100% Private</span>
                  </div>
                  <p className="text-xs text-slate font-body-sm leading-relaxed">
                    Audio and patient charts can run entirely on-site. Zero data leaves your clinic.
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Right: Clean, Visual Product Preview Card */}
            <div className="reveal-scale lg:col-span-5 bg-canvas-white rounded-2xl p-6 md:p-7 border border-mist shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-mist">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-terracotta-accent animate-pulse" />
                  <span className="font-code-badge text-xs uppercase font-bold text-graphite">
                    Exam Room Listening
                  </span>
                </div>
                <span className="font-code-badge text-[11px] text-slate">Auto-Drafting Note</span>
              </div>

              {/* Dialogue Bubble */}
              <div className="p-4 rounded-xl bg-fog border border-mist space-y-2">
                <span className="font-code-badge text-[10px] text-slate uppercase block font-semibold">
                  Spoken During Visit
                </span>
                <p className="text-xs text-steel leading-relaxed">
                  <strong className="text-graphite font-medium">Doctor:</strong> "Any history of diabetes?"<br />
                  <strong className="text-graphite font-medium">Patient:</strong> "No doc, my blood sugar has always been fine."
                </p>
              </div>

              {/* Contradiction Alert Pill */}
              <div className="p-3.5 rounded-xl bg-surface-cream border border-border-tactile flex items-start gap-3">
                <span className="material-symbols-outlined text-terracotta-accent text-[20px] shrink-0 mt-0.5">
                  warning
                </span>
                <div>
                  <span className="font-code-badge text-[10.5px] uppercase font-bold text-terracotta-accent block">
                    Chart Contradiction Detected
                  </span>
                  <p className="text-xs text-forest-deep font-medium mt-0.5 leading-snug">
                    Patient denied diabetes, but active chart lists Metformin 500mg and HbA1c 7.8%.
                  </p>
                </div>
              </div>

              {/* Final Note Preview */}
              <div className="p-3.5 rounded-xl bg-surface-matcha/20 border border-forest-deep/20 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-code-badge text-[10.5px] uppercase font-bold text-forest-deep">
                    Completed Chart Ready
                  </span>
                  <span className="font-code-badge text-[10px] text-forest-deep font-semibold">30s Review</span>
                </div>
                <p className="text-xs text-forest-deep leading-relaxed">
                  Clean SOAP note created with accurate diagnosis (Type 2 Diabetes, E11.9) reconciled with patient.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-code-badge text-slate border-t border-mist">
                <span>EHR Sync: 1-Click Send</span>
                <span className="text-forest-deep font-semibold">Zero Hallucinations</span>
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
              The MedScribe Difference
            </span>
            <h2 className="font-headline text-headline-xl text-graphite tracking-tight">
              Why transcription alone is not enough.
            </h2>
            <p className="font-body-md text-body-md text-steel mt-2">
              Other AI tools blindly type whatever is said in the room. MedScribe checks the patient's past chart in real
              time to catch forgotten facts and dangerous drug interactions.
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {SCENARIOS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSelectScenario(s)}
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

          {/* Interactive Split Card */}
          <div className="bg-canvas-white rounded-2xl border border-mist shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: What Happened in the Room */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="font-code-badge text-xs text-brass uppercase font-bold block mb-1">
                    Encounter Story
                  </span>
                  <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                    {activeScenario.patientName}
                  </h3>
                  <p className="font-body-sm text-xs text-slate mt-0.5">{activeScenario.context}</p>
                </div>

                {/* Conversation Box */}
                <div className="p-4 rounded-xl bg-fog border border-mist space-y-2">
                  <span className="font-code-badge text-[10.5px] uppercase text-slate font-bold block">
                    What was said in the room
                  </span>
                  <div className="space-y-1.5 text-xs text-steel font-body-sm leading-relaxed">
                    <p><strong className="text-graphite">Doctor:</strong> "{activeScenario.spokenDialogue.doctor}"</p>
                    <p><strong className="text-graphite">Patient:</strong> "{activeScenario.spokenDialogue.patient}"</p>
                  </div>
                </div>

                {/* Historical Chart Box */}
                <div className="p-4 rounded-xl bg-surface-cream border border-border-tactile space-y-1">
                  <span className="font-code-badge text-[10.5px] uppercase text-brass font-bold block">
                    {activeScenario.chartDiscovery.title}
                  </span>
                  <p className="text-xs text-forest-deep font-medium leading-relaxed">
                    {activeScenario.chartDiscovery.detail}
                  </p>
                </div>

                {/* The Alert */}
                <div
                  className={`p-4 rounded-xl border transition-all ${
                    resolved
                      ? "bg-surface-matcha/30 border-forest-deep/30 text-forest-deep"
                      : "bg-surface-cream border-terracotta-accent/40 text-graphite"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 font-code-badge text-xs font-bold text-terracotta-accent">
                        <span className="material-symbols-outlined text-[18px]">
                          {resolved ? "task_alt" : "notification_important"}
                        </span>
                        <span>{resolved ? "Discrepancy Reconciled" : "MedScribe Flagged This"}</span>
                      </div>
                      <p className="text-xs text-steel leading-relaxed">
                        {resolved
                          ? "The doctor addressed this with the patient and documented the verified diagnosis in the final chart."
                          : activeScenario.alertMessage}
                      </p>
                    </div>

                    <button
                      onClick={() => setResolved(!resolved)}
                      className="shrink-0 px-3 py-1.5 rounded-lg font-code-badge text-xs font-semibold bg-canvas-white border border-mist hover:bg-fog text-forest-deep transition-colors cursor-pointer"
                    >
                      {resolved ? "Reset" : "1-Click Verify"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: The Clean, Generated Medical Chart */}
              <div className="lg:col-span-6 bg-fog rounded-xl p-6 border border-mist space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-mist">
                  <div>
                    <span className="font-code-badge text-[10px] text-slate uppercase font-bold block">
                      Generated Note
                    </span>
                    <h4 className="font-headline text-base font-semibold text-graphite">
                      Complete SOAP Chart (Ready to Sign)
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-canvas-white text-forest-deep border border-forest-deep/20 text-[10.5px] font-code-badge font-bold">
                    Accurate &amp; Cited
                  </span>
                </div>

                <div className="space-y-2.5">
                  {activeScenario.noteSummary.map((line, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-canvas-white border border-mist text-xs text-steel leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-mist flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-forest-deep font-code-badge text-xs font-semibold">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>{activeScenario.outcome}</span>
                  </div>

                  <Link
                    href="/company/contact"
                    className="text-xs font-code-badge font-bold text-forest-deep hover:underline"
                  >
                    Test with your visits &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 3. SIMPLE 3-STEP WORKFLOW ───────────────── */}
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-on-scroll max-w-2xl mb-12">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block mb-2">
              Simple Workflow
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              As simple as having a conversation.
            </h2>
            <p className="font-body-md text-body-md text-steel mt-2">
              No special dictation codes, no wake words, and no disruption to your bedside manner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-surface-cream text-forest-deep flex items-center justify-center font-headline text-xl font-bold">
                1
              </div>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Talk Naturally
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                Leave your room mic or phone on your desk and talk with your patient as you normally would. MedScribe
                understands who is speaking and ignores background clinic noise.
              </p>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-surface-matcha/40 text-forest-deep flex items-center justify-center font-headline text-xl font-bold">
                2
              </div>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Instant Verification
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                As the visit wraps up, MedScribe organizes everything into a structured chart while verifying facts
                against past medical history to prevent forgotten details or errors.
              </p>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-fog text-graphite flex items-center justify-center font-headline text-xl font-bold">
                3
              </div>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                One-Click Sign-Off
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                Review your draft in about 30 seconds. One click sends the note straight into your EHR (Epic, Cerner,
                Athena, or any other system) and your charting is done for the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 4. PRIVACY & LOCAL HARDWARE (CLINIC AI BOX) ───────────────── */}
      <section className="w-full bg-surface-cream py-16 md:py-24 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="reveal-on-scroll lg:col-span-7 space-y-5">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block">
              100% Data Privacy
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              Your patient data never leaves your building.
            </h2>
            <p className="font-body-md text-body-md text-steel leading-relaxed">
              For practices with strict privacy standards or healthcare networks with air-gapped policies, MedScribe runs
              on a dedicated, compact mini-computer right in your office.
            </p>

            <div className="space-y-3 pt-2 font-body-sm text-xs text-steel">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-forest-deep text-[20px]">check_circle</span>
                <span><strong>Zero Cloud Streaming:</strong> Audio processing and note generation stay on your physical network.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-forest-deep text-[20px]">check_circle</span>
                <span><strong>Runs Without Internet:</strong> Keep charting smoothly even if your clinic Wi-Fi drops.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-forest-deep text-[20px]">check_circle</span>
                <span><strong>Whisper Quiet:</strong> Fanless aluminum enclosure designed specifically for quiet exam rooms.</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-1.5 font-label-md text-xs text-forest-deep font-semibold hover:underline"
              >
                <span>Learn more about Clinic AI Box hardware</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="reveal-scale lg:col-span-5 bg-canvas-white rounded-2xl p-8 border border-mist shadow-sm text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-surface-cream border border-border-tactile flex items-center justify-center text-forest-deep">
              <span className="material-symbols-outlined text-[32px]">memory</span>
            </div>
            <div>
              <span className="font-code-badge text-[11px] uppercase text-slate font-bold block mb-1">
                On-Premise Hardware Bundle
              </span>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Clinic AI Box &amp; Smart Room Mic
              </h3>
              <p className="font-body-sm text-xs text-steel mt-1 max-w-xs mx-auto">
                Plug-and-play local processing unit with physical hardware mute button.
              </p>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-fog border border-mist font-code-badge text-xs text-forest-deep font-semibold">
              Complete HIPAA &amp; Patient Privacy
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
              MedScribe connects with the rest of your clinic.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/products/clinicops"
              className="p-6 rounded-2xl bg-canvas-white border border-mist shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-code-badge text-[11px] text-forest-deep uppercase font-bold block mb-1">
                  For Front-Desk &amp; Billing
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium group-hover:text-forest-deep transition-colors mb-1.5">
                  ClinicOps Graph &rarr;
                </h3>
                <p className="font-body-sm text-xs text-steel leading-relaxed">
                  Checks your consultation notes against billing rules to stop insurance rejections before claims leave your office.
                </p>
              </div>
              <span className="font-code-badge text-xs text-terracotta-accent font-semibold mt-4 block">
                Cuts no-shows &amp; claim denials
              </span>
            </Link>

            <Link
              href="/products/vitalgraph"
              className="p-6 rounded-2xl bg-canvas-white border border-mist shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-code-badge text-[11px] text-brass uppercase font-bold block mb-1">
                  For Chronic Patient Monitoring
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium group-hover:text-forest-deep transition-colors mb-1.5">
                  VitalGraph RPM &rarr;
                </h3>
                <p className="font-body-sm text-xs text-steel leading-relaxed">
                  Diagnoses like high blood pressure or diabetes automatically trigger smart home device kits for patients.
                </p>
              </div>
              <span className="font-code-badge text-xs text-forest-deep font-semibold mt-4 block">
                Continuous care between office visits
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
              Questions clinicians ask us most.
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

      {/* ───────────────── 7. FINAL DOCTOR PILOT CTA ───────────────── */}
      <section className="w-full py-16 md:py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-forest-deep rounded-3xl p-8 md:p-14 text-on-primary text-center space-y-5">
          <span className="font-code-badge text-xs text-secondary-container uppercase tracking-widest block font-semibold">
            Zero Obligation Trial
          </span>
          <h2 className="font-headline text-headline-2xl text-on-primary max-w-xl mx-auto leading-tight">
            Stop charting at dinner. Try MedScribe for 14 days.
          </h2>
          <p className="font-body-md text-on-primary/80 max-w-lg mx-auto leading-relaxed">
            Reclaim 2 hours every single day with accurate, contradiction-proof clinical notes. No software installation
            or EHR modification needed to begin.
          </p>
          <div className="pt-2">
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-terracotta-accent text-white font-label-md text-label-md hover:bg-terracotta-accent/90 transition-all shadow-md gap-2"
            >
              <span>Request a 14-Day Doctor Pilot</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
