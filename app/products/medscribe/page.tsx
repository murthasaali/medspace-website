"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";

interface EncounterCase {
  id: string;
  badge: string;
  title: string;
  specialty: string;
  patient: string;
  dialogueSnippet: {
    speaker: string;
    text: string;
    timestamp: string;
  }[];
  chartDiscrepancy: {
    label: string;
    source: string;
    detail: string;
  };
  contradictionAlert: {
    severity: "warning" | "danger" | "verified";
    title: string;
    description: string;
    graphAnchor: string;
  };
  soapNote: {
    subjective: string;
    objective: string;
    assessment: string;
    plan: string;
  };
  billingCodes: {
    icd10: string[];
    cpt: string[];
    rxnorm: string[];
  };
  timeSaved: string;
}

const CASES: EncounterCase[] = [
  {
    id: "contradiction",
    badge: "Contradiction Flagged",
    title: "Type 2 Diabetes Discrepancy",
    specialty: "Outpatient Internal Medicine",
    patient: "Robert Jenkins, 58 (Annual Wellness Review)",
    dialogueSnippet: [
      {
        speaker: "Dr. Chen",
        text: "How have you been feeling overall, Robert? Any changes in chronic conditions, or history of diabetes?",
        timestamp: "01:42",
      },
      {
        speaker: "Robert (Patient)",
        text: "Doing pretty good! No doc, my blood sugar has always been completely fine. Never had diabetes.",
        timestamp: "02:14",
      },
      {
        speaker: "Dr. Chen",
        text: "Got it. Let me review your routine lab panel from last quarter.",
        timestamp: "02:30",
      },
    ],
    chartDiscrepancy: {
      label: "Longitudinal EHR Problem List",
      source: "AthenaHealth FHIR • Encounter #7391 (May 2024)",
      detail: "Active Problem: Type 2 Diabetes Mellitus (E11.9). Rx: Metformin 500mg BID. Last HbA1c: 7.8% (Sept 2024).",
    },
    contradictionAlert: {
      severity: "danger",
      title: "Active Contradiction Intercepted",
      description: "Patient verbally denies diabetes [audio#02:14], but longitudinal problem list confirms established T2DM with Metformin therapy [chart#rx-942] and elevated HbA1c (7.8%) [chart#lab-318].",
      graphAnchor: "VeritasGraph Entity #T2DM-882",
    },
    soapNote: {
      subjective: "Patient presents for annual wellness check. Reports good energy. Verbally denies history of glycemic disorders [audio#02:14].",
      objective: "Vitals: BP 128/82 mmHg, HR 72, BMI 28.4. Historical review demonstrates HbA1c 7.8% [chart#lab-318].",
      assessment: "Type 2 diabetes mellitus without complications (E11.9) [chart#rx-942], suboptimally controlled; history reconciled with patient during visit.",
      plan: "1. Reinforce Metformin 500mg PO BID compliance [rxnorm#6809]. 2. Repeat HbA1c panel in 90 days. 3. Diabetic foot and retinal exam referral.",
    },
    billingCodes: {
      icd10: ["E11.9 (Type 2 DM)", "Z00.00 (General Exam)"],
      cpt: ["99214 (E/M Level 4)"],
      rxnorm: ["Metformin 500mg (6809)"],
    },
    timeSaved: "22 minutes saved · Audit-proof chart reconciled",
  },
  {
    id: "allergy",
    badge: "Drug Safety Alert",
    title: "Penicillin Allergy Interception",
    specialty: "Urgent Care & Family Medicine",
    patient: "Clara Morales, 42 (Acute Sinus Congestion)",
    dialogueSnippet: [
      {
        speaker: "Dr. Chen",
        text: "Based on the maxillary tenderness and 10 days of purulent discharge, I'll prescribe a course of Amoxicillin-Clavulanate.",
        timestamp: "04:18",
      },
      {
        speaker: "Clara (Patient)",
        text: "Sounds good, doctor. I'll pick it up from my local pharmacy this afternoon.",
        timestamp: "04:31",
      },
    ],
    chartDiscrepancy: {
      label: "EHR Allergy & Adverse Reaction Registry",
      source: "Epic EHR • Encounter #4409 (June 2021)",
      detail: "Severe Penicillin allergy documented: diffuse urticaria, periorbital edema, and wheezing.",
    },
    contradictionAlert: {
      severity: "warning",
      title: "Drug-Allergy Cross-Reaction Warning",
      description: "Physician vocalized Amoxicillin regimen [audio#04:18], but patient chart carries severe Penicillin class anaphylactoid reaction [chart#alg-07]. Immediate substitution recommended.",
      graphAnchor: "VeritasGraph Cross-Check #ALLG-071",
    },
    soapNote: {
      subjective: "Patient reports 10 days of severe facial pressure, nasal obstruction, and discolored rhinorrhea [audio#00:45]. Denies fever.",
      objective: "Nasal mucosa erythematous with mucopurulent exudate. Tenderness over bilateral maxillary sinuses.",
      assessment: "Acute bacterial maxillary rhinosinusitis (J01.00). Severe Penicillin allergy verified [chart#alg-07].",
      plan: "Amoxicillin contraindicated due to documented Penicillin urticaria. Prescribe Azithromycin 500mg PO Day 1, followed by 250mg PO Days 2–5 [rxnorm#18631]. Saline nasal irrigation BID.",
    },
    billingCodes: {
      icd10: ["J01.00 (Acute Maxillary Sinusitis)", "Z88.0 (Allergy to Penicillin)"],
      cpt: ["99213 (E/M Level 3)"],
      rxnorm: ["Azithromycin 250mg (18631)"],
    },
    timeSaved: "Adverse drug event prevented · Instant safe substitution",
  },
  {
    id: "coding",
    badge: "E/M Level-4 Verified",
    title: "Complexity & Medical Decision Making",
    specialty: "Cardiology & Geriatrics",
    patient: "Arthur Pendelton, 67 (Hypertension & Dyspnea)",
    dialogueSnippet: [
      {
        speaker: "Dr. Chen",
        text: "Arthur, how has the shortness of breath been when walking up the stairs at home?",
        timestamp: "01:10",
      },
      {
        speaker: "Arthur (Patient)",
        text: "A bit more difficult lately, and I noticed my socks leaving deep rings on my ankles in the evening.",
        timestamp: "01:28",
      },
      {
        speaker: "Dr. Chen",
        text: "I want to step up your Lisinopril to 20mg daily, add low-dose Furosemide, and order a resting transthoracic echocardiogram.",
        timestamp: "03:40",
      },
    ],
    chartDiscrepancy: {
      label: "Cardiology Longitudinal Timeline",
      source: "Cerner Millennium • Problem List (Oct 2024)",
      detail: "Essential Hypertension (I10). Mild bilateral peripheral edema noted on prior exam.",
    },
    contradictionAlert: {
      severity: "verified",
      title: "Medical Decision-Making Complexity Validated",
      description: "Multi-system review, prescription drug management, and diagnostic imaging order meet AMA CPT 2024 Level 4 Medical Decision Making requirements without documentation omissions.",
      graphAnchor: "VeritasGraph CPT Engine #EM-99214",
    },
    soapNote: {
      subjective: "Patient notes progressive exertional dyspnea (NYHA Class II) and worsening bilateral lower extremity edema [audio#01:28].",
      objective: "BP 146/90 mmHg. Cardiovascular: S1/S2 present, no murmurs. Extremities: 1+ pitting edema bilateral lower shins.",
      assessment: "1. Essential hypertension (I10), uncontrolled. 2. Exertional dyspnea with mild fluid retention (R06.02).",
      plan: "1. Up-titrate Lisinopril to 20mg PO daily [rxnorm#29046]. 2. Initiate Furosemide 20mg PO daily morning [rxnorm#4603]. 3. Order 2D transthoracic echocardiogram (CPT 93306) to evaluate ejection fraction. 4. Clinic re-evaluation in 3 weeks.",
    },
    billingCodes: {
      icd10: ["I10 (Essential HTN)", "R06.02 (Shortness of Breath)", "R60.0 (Localized Edema)"],
      cpt: ["99214 (E/M Level 4)", "93306 (TTE Complete)"],
      rxnorm: ["Lisinopril 20mg", "Furosemide 20mg"],
    },
    timeSaved: "Clean Level-4 reimbursement protected · Zero downcoding risk",
  },
];

const FAQS = [
  {
    q: "How does MedScribe detect contradictions that other AI scribes miss?",
    a: "Traditional ambient scribes only transcribe what is spoken inside the exam room. MedScribe connects directly to your clinic's VeritasGraph knowledge layer. It continuously cross-checks spoken claims against longitudinal problem lists, historical lab results, medication registries, and prior clinical encounters in real time, alerting you before you sign the note.",
  },
  {
    q: "Can MedScribe operate 100% on-premise without cloud data egress?",
    a: "Yes. When paired with our Clinic AI Box (CAB-2026), all speech-to-text diarization, clinical knowledge graph reconciliation, and SOAP note generation run locally on high-performance quantized inference hardware. Zero audio bytes and zero protected health information (PHI) leave your clinic's physical network.",
  },
  {
    q: "How do span-level citations protect against AI hallucinations?",
    a: "Every single assertion in the generated SOAP note is hyperlinked to its exact origin: either a millisecond-precision audio timestamp [audio#02:14] or an authenticated EHR document chunk [chart#rx-942]. Physicians can click any sentence in the note to instantly hear the exact 5-second audio snippet or view the source chart element.",
  },
  {
    q: "What EHR systems does MedScribe sync with?",
    a: "MedScribe supports bidirectional integration via FHIR R4 DocumentReference, HL7 MDM feeds, and direct certified EHR integrations for Epic, Cerner, AthenaHealth, NextGen, and eClinicalWorks. In practices with legacy software, physicians use our 1-click Smart Paste floating widget.",
  },
  {
    q: "What does the 14-day physician pilot look like?",
    a: "We deploy MedScribe on a trial workstation or laptop in your clinic in under 30 minutes. You can test it on 10 to 20 real patient encounters per day with zero contract commitment and full technical support from our clinical informatics team.",
  },
];

export default function MedScribePage() {
  const [activeCase, setActiveCase] = useState<EncounterCase>(CASES[0]);
  const [resolvedAlert, setResolvedAlert] = useState(false);

  const handleSelectCase = (c: EncounterCase) => {
    setActiveCase(c);
    setResolvedAlert(false);
  };

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
            <span className="text-graphite font-semibold">MedScribe Graph</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="reveal-on-scroll lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-matcha/60 text-forest-deep font-code-badge text-code-badge font-semibold border border-forest-deep/20">
                  <span className="w-2 h-2 rounded-full bg-forest-deep animate-pulse" />
                  ACTIVE PILOT &bull; SPRINT 2 DEPLOYMENT
                </span>
                <span className="font-code-badge text-xs text-brass uppercase font-semibold">
                  P1 &bull; For Doctors &amp; Clinicians
                </span>
              </div>

              <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight leading-[1.08]">
                Ambient Clinical Notes with Real-Time{" "}
                <span className="italic font-headline text-terracotta-accent">Contradiction Detection.</span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Save 1.5 to 2 hours of charting every day. MedScribe listens during encounters, flags discrepancies
                against historical charts, cites every SOAP assertion to the exact audio second, and runs 100% on-premise.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-forest-deep text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-md gap-2 group cursor-pointer"
                >
                  <span>Start a 14-Day Doctor Pilot</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
                <a
                  href="#inspector"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-canvas-white text-graphite font-label-md text-label-md hover:bg-fog transition-colors shadow-sm border border-mist"
                >
                  <span>Inspect Contradiction Engine</span>
                </a>
              </div>

              {/* Doctor ROI Metric Strip */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-mist font-code-badge text-xs">
                <div>
                  <span className="text-slate block mb-0.5 uppercase tracking-wider">Charting Time Saved:</span>
                  <span className="text-forest-deep font-bold text-base">1.5–2.0 Hrs/Day</span>
                  <span className="text-[10px] text-slate block">(Doctor Pilot Target)</span>
                </div>
                <div>
                  <span className="text-slate block mb-0.5 uppercase tracking-wider">Breakeven Economics:</span>
                  <span className="text-graphite font-bold text-base">1 Extra Visit/Wk</span>
                  <span className="text-[10px] text-slate block">(Pays for Entire License)</span>
                </div>
                <div>
                  <span className="text-slate block mb-0.5 uppercase tracking-wider">Note Grounding:</span>
                  <span className="text-terracotta-accent font-bold text-base">100% Cited</span>
                  <span className="text-[10px] text-slate block">([audio#] &amp; [chart#] Spans)</span>
                </div>
              </div>
            </div>

            {/* Hero Right: Live Ambient Documentation Capsule */}
            <div className="reveal-scale lg:col-span-5 bg-canvas-white rounded-2xl p-7 border border-mist shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-mist">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-terracotta-accent animate-ping" />
                  <span className="font-code-badge text-xs uppercase font-bold text-graphite">
                    Ambient Consultation Audio Live
                  </span>
                </div>
                <span className="font-code-badge text-[11px] px-2 py-0.5 rounded-full bg-surface-cream text-forest-deep border border-border-tactile">
                  Exam Room 4
                </span>
              </div>

              {/* Live Transcript Bubble */}
              <div className="space-y-3 font-body-sm text-xs">
                <div className="p-3.5 rounded-xl bg-fog border border-mist">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-code-badge font-bold text-forest-deep">Ambient Speech Stream</span>
                    <span className="text-[10px] font-code-badge text-slate">02:14</span>
                  </div>
                  <p className="text-steel italic">
                    "Patient states: 'No doc, my blood sugar has always been completely fine...'"
                  </p>
                </div>

                {/* Graph Interception Badge */}
                <div className="p-3.5 rounded-xl bg-surface-cream border border-border-tactile">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-code-badge font-bold text-terracotta-accent flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px]">warning</span>
                      VeritasGraph Contradiction Flag
                    </span>
                    <span className="text-[10px] font-code-badge text-slate">Live Chart Cross-Check</span>
                  </div>
                  <p className="text-forest-deep text-xs font-medium">
                    HPI denies diabetes, but EHR problem list lists Type 2 DM [chart#rx-942] with Metformin 500mg.
                  </p>
                  <span className="text-[10px] font-code-badge text-slate mt-1 block">
                    Flagged for physician sign-off &bull; Zero hallucinated consensus
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-matcha/30 border border-forest-deep/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-code-badge font-bold text-forest-deep">Draft Note Generated</span>
                    <span className="text-[10px] font-code-badge text-forest-deep font-semibold">Ready in 28s</span>
                  </div>
                  <p className="text-steel text-[11px]">
                    Structured Subjective, Objective, Assessment, Plan populated with ICD-10 (E11.9) and CPT (99214).
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-code-badge text-slate border-t border-mist">
                <span>Data Mode: On-Premise Enclave</span>
                <span className="text-forest-deep font-semibold">Zero Cloud PHI Egress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 2. INTERACTIVE CONTRADICTION & CITATION INSPECTOR ───────────────── */}
      <section className="w-full bg-ash py-20 px-6 lg:px-12 border-b border-mist" id="inspector">
        <div className="max-w-8xl mx-auto">
          <div className="reveal-on-scroll max-w-3xl mb-12">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
              The Moat &bull; Interactive Contradiction Inspector
            </span>
            <h2 className="font-headline text-headline-xl text-graphite tracking-tight">
              Why Transcription Alone Is <span className="italic text-terracotta-accent">Dangerous.</span>
            </h2>
            <p className="font-body-md text-body-md text-steel mt-3">
              Standard AI scribes blindly repeat what the patient says. MedScribe's VeritasGraph cross-references
              ambient speech against historical patient records, catching dangerous contradictions before notes are signed.
            </p>
          </div>

          {/* Encounter Case Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {CASES.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelectCase(c)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeCase.id === c.id
                    ? "bg-canvas-white border-forest-deep shadow-md"
                    : "bg-canvas-white/60 border-mist hover:bg-canvas-white text-steel"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-code-badge text-[10px] px-2 py-0.5 rounded-full bg-surface-cream text-forest-deep border border-border-tactile font-semibold">
                    {c.badge}
                  </span>
                  <span className="text-[11px] font-code-badge text-slate">{c.specialty}</span>
                </div>
                <h3 className="font-headline text-headline-sm font-semibold text-graphite mb-1">
                  {c.title}
                </h3>
                <p className="font-body-sm text-xs text-slate">{c.patient}</p>
              </button>
            ))}
          </div>

          {/* Interactive Workspace Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Ambient Conversation + Historical Discrepancy */}
            <div className="lg:col-span-6 space-y-6">
              {/* Dialogue Transcript Panel */}
              <div className="bg-canvas-white rounded-2xl p-6 border border-mist shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-mist">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-forest-deep text-[18px]">mic</span>
                    <span className="font-code-badge text-xs uppercase font-bold text-graphite">
                      Live Ambient Audio Stream
                    </span>
                  </div>
                  <span className="font-code-badge text-xs text-slate">Exact Audio Span Markers</span>
                </div>

                <div className="space-y-3">
                  {activeCase.dialogueSnippet.map((line, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-fog border border-mist flex flex-col gap-1 transition-all hover:border-forest-deep/30"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-code-badge text-xs font-bold text-forest-deep">
                          {line.speaker}
                        </span>
                        <span className="font-code-badge text-[11px] px-2 py-0.5 rounded bg-canvas-white border border-mist text-slate font-medium">
                          audio#{line.timestamp}
                        </span>
                      </div>
                      <p className="font-body-sm text-xs text-steel leading-relaxed">
                        "{line.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historical Chart Source Panel */}
              <div className="bg-canvas-white rounded-2xl p-6 border border-mist shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-mist">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-terracotta-accent text-[18px]">history_edu</span>
                    <span className="font-code-badge text-xs uppercase font-bold text-graphite">
                      {activeCase.chartDiscrepancy.label}
                    </span>
                  </div>
                  <span className="font-code-badge text-[10px] text-slate">Longitudinal Graph</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-cream border border-border-tactile space-y-1">
                  <span className="font-code-badge text-[10px] text-brass uppercase font-bold block">
                    Source: {activeCase.chartDiscrepancy.source}
                  </span>
                  <p className="font-body-sm text-xs text-forest-deep font-medium leading-relaxed">
                    {activeCase.chartDiscrepancy.detail}
                  </p>
                </div>
              </div>

              {/* VeritasGraph Contradiction Engine Alert Box */}
              <div
                className={`p-5 rounded-2xl border transition-all ${
                  resolvedAlert
                    ? "bg-surface-matcha/30 border-forest-deep/30"
                    : activeCase.contradictionAlert.severity === "danger"
                    ? "bg-surface-cream border-terracotta-accent/50 shadow-sm"
                    : activeCase.contradictionAlert.severity === "warning"
                    ? "bg-surface-cream border-brass/50 shadow-sm"
                    : "bg-surface-matcha/20 border-forest-deep/30"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-terracotta-accent">
                        {resolvedAlert ? "task_alt" : "gpp_maybe"}
                      </span>
                      <span className="font-code-badge text-xs uppercase font-bold text-graphite">
                        {resolvedAlert ? "Contradiction Reconciled" : activeCase.contradictionAlert.title}
                      </span>
                    </div>
                    <p className="font-body-sm text-xs text-steel leading-relaxed">
                      {resolvedAlert
                        ? "Physician accepted the reconciled clinical graph. The discrepancy was addressed and documented in the final SOAP note without clinical ambiguity."
                        : activeCase.contradictionAlert.description}
                    </p>
                    <span className="font-code-badge text-[10px] text-slate block pt-1">
                      Anchor: {activeCase.contradictionAlert.graphAnchor}
                    </span>
                  </div>

                  <button
                    onClick={() => setResolvedAlert(!resolvedAlert)}
                    className="flex-shrink-0 px-3 py-1.5 rounded-full font-code-badge text-xs font-semibold border transition-all cursor-pointer bg-canvas-white hover:bg-fog text-forest-deep border-mist"
                  >
                    {resolvedAlert ? "Reset" : "1-Click Reconcile"}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Grounded SOAP Note + Exact Citations */}
            <div className="lg:col-span-6 bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-mist">
                <div>
                  <span className="font-code-badge text-[10px] text-brass uppercase font-bold block mb-0.5">
                    Audit-Ready Output
                  </span>
                  <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                    Grounded SOAP Note with Span Citations
                  </h3>
                </div>
                <span className="font-code-badge text-xs px-2.5 py-1 rounded-full bg-surface-matcha/40 text-forest-deep border border-forest-deep/20 font-bold">
                  Zero Hallucination
                </span>
              </div>

              {/* SOAP Note Sections */}
              <div className="space-y-4 font-body-sm text-xs">
                <div className="space-y-1">
                  <span className="font-code-badge text-xs uppercase text-slate font-bold block">
                    Subjective (S)
                  </span>
                  <div className="p-3.5 rounded-xl bg-fog border border-mist leading-relaxed text-steel">
                    {activeCase.soapNote.subjective}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-code-badge text-xs uppercase text-slate font-bold block">
                    Objective (O)
                  </span>
                  <div className="p-3.5 rounded-xl bg-fog border border-mist leading-relaxed text-steel">
                    {activeCase.soapNote.objective}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-code-badge text-xs uppercase text-slate font-bold block">
                    Assessment (A)
                  </span>
                  <div className="p-3.5 rounded-xl bg-surface-cream border border-border-tactile leading-relaxed text-forest-deep font-medium">
                    {activeCase.soapNote.assessment}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-code-badge text-xs uppercase text-slate font-bold block">
                    Plan (P)
                  </span>
                  <div className="p-3.5 rounded-xl bg-fog border border-mist leading-relaxed text-steel">
                    {activeCase.soapNote.plan}
                  </div>
                </div>
              </div>

              {/* Standardized Billing Codes Strip */}
              <div className="pt-4 border-t border-mist space-y-3">
                <span className="font-code-badge text-[11px] text-slate uppercase font-bold block">
                  Automated Clinical Ontologies Generated
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-2.5 rounded-lg bg-fog border border-mist">
                    <span className="font-code-badge text-[10px] text-slate block mb-1">ICD-10-CM</span>
                    {activeCase.billingCodes.icd10.map((code, idx) => (
                      <span key={idx} className="font-code-badge text-xs text-graphite font-semibold block">
                        {code}
                      </span>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-lg bg-fog border border-mist">
                    <span className="font-code-badge text-[10px] text-slate block mb-1">CPT Coding</span>
                    {activeCase.billingCodes.cpt.map((code, idx) => (
                      <span key={idx} className="font-code-badge text-xs text-forest-deep font-semibold block">
                        {code}
                      </span>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-lg bg-fog border border-mist">
                    <span className="font-code-badge text-[10px] text-slate block mb-1">RxNorm Meds</span>
                    {activeCase.billingCodes.rxnorm.map((code, idx) => (
                      <span key={idx} className="font-code-badge text-xs text-terracotta-accent font-semibold block">
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Doctor Feedback Strip */}
              <div className="pt-4 border-t border-mist flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-forest-deep text-[18px]">timer</span>
                  <span className="font-code-badge text-xs text-forest-deep font-bold">
                    {activeCase.timeSaved}
                  </span>
                </div>

                <Link
                  href="/company/contact"
                  className="inline-flex items-center gap-1.5 font-label-md text-xs text-forest-deep hover:underline font-semibold"
                >
                  <span>Test with your clinic's charts</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 3. 3-STEP CLINICAL DOCUMENTATION PIPELINE ───────────────── */}
      <section className="w-full py-20 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-8xl mx-auto">
          <div className="reveal-on-scroll max-w-3xl mb-14">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest block mb-2 font-semibold">
              The Engine &bull; 3-Step Flow
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              How Ambient Speech Becomes an <span className="italic text-terracotta-accent">Audit-Proof Note.</span>
            </h2>
            <p className="font-body-md text-body-md text-text-muted mt-3">
              Zero dictation prompts or wake words. Speak naturally with your patient while MedScribe takes care of the chart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-badge text-headline-md font-bold text-terracotta-accent block mb-3">01</span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium mb-2">
                  Ambient Multi-Speaker Ingestion
                </h3>
                <p className="font-body-sm text-sm text-steel leading-relaxed">
                  Captures natural clinical dialogue using room mic arrays or our dictation pen. Advanced diarization
                  separates clinician questions from patient replies even in noisy exam environments.
                </p>
              </div>
              <span className="font-code-badge text-[11px] text-slate pt-4 mt-4 border-t border-mist block">
                Latency: Real-time &bull; Multi-language diarization
              </span>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-badge text-headline-md font-bold text-forest-deep block mb-3">02</span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium mb-2">
                  VeritasGraph Reasoning &amp; Audit
                </h3>
                <p className="font-body-sm text-sm text-steel leading-relaxed">
                  Extracts medical entities into SNOMED-CT, RxNorm, and ICD-10 ontologies. Concurrently queries
                  longitudinal EHR records to intercept clinical contradictions, allergies, and omissions.
                </p>
              </div>
              <span className="font-code-badge text-[11px] text-slate pt-4 mt-4 border-t border-mist block">
                Engine: Multi-agent medical reasoning &bull; Zero hallucination
              </span>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-badge text-headline-md font-bold text-brass block mb-3">03</span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium mb-2">
                  1-Click EHR Sync &amp; Billing Feed
                </h3>
                <p className="font-body-sm text-sm text-steel leading-relaxed">
                  Review the structured SOAP note in under 30 seconds. One click pushes the note and codes
                  via FHIR R4 to Epic, Cerner, or Athenahealth, and triggers ClinicOps for pre-submission claim audit.
                </p>
              </div>
              <span className="font-code-badge text-[11px] text-slate pt-4 mt-4 border-t border-mist block">
                Delivery: FHIR R4 DocumentReference &bull; Smart Paste
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 4. ON-PREMISE DATA SOVEREIGNTY & HARDWARE PAIRING ───────────────── */}
      <section className="w-full bg-surface-cream py-20 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="reveal-on-scroll lg:col-span-6 space-y-5">
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest font-semibold block">
              Data Sovereignty Enclave
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              The Clinic AI Box. <span className="italic text-terracotta-accent">100% On-Premise Inference.</span>
            </h2>
            <p className="font-body-md text-body-md text-text-muted leading-relaxed">
              For practices with strict privacy standards or air-gapped clinical networks, MedScribe runs
              locally on our dedicated Clinic AI Box. Audio streams and clinical graphs never leave your clinic walls.
            </p>

            <ul className="space-y-3 font-body-sm text-sm text-steel pt-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">verified_user</span>
                <span>Zero cloud PHI transmission: All LLM reasoning executes locally</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">verified_user</span>
                <span>Sub-second note generation powered by quantized local medical models</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">verified_user</span>
                <span>Fanless, whisper-quiet aluminum chassis designed for clinical exam rooms</span>
              </li>
            </ul>

            <div className="pt-3 flex items-center gap-4">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-2 font-label-md text-sm text-forest-deep font-semibold hover:underline"
              >
                <span>Inspect Clinic AI Box (CAB-2026) specs</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="reveal-scale lg:col-span-6 bg-canvas-white rounded-2xl p-8 border border-mist shadow-sm">
            <div className="rounded-xl bg-fog p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-surface-cream border border-border-tactile flex items-center justify-center text-forest-deep">
                <span className="material-symbols-outlined text-[32px]">memory</span>
              </div>
              <div>
                <span className="font-code-badge text-xs uppercase text-slate font-bold block mb-1">
                  Hardware Bundle: CAB-2026 + MSP-2026
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                  Clinic AI Box &amp; Smart Acoustic Mic
                </h3>
                <p className="font-body-sm text-xs text-steel max-w-sm mt-1">
                  Local GPU Inference Mini Workstation &bull; 4-Capsule Directional Room Mic Array &bull; Hardware Mute Switch
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-canvas-white border border-mist font-code-badge text-xs text-forest-deep font-bold">
                100% HIPAA, ABDM &amp; GDPR Compliant Air-Gap
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
              MedScribe Connects Across <span className="italic text-forest-deep">The Shared Graph.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/products/clinicops"
              className="p-6 rounded-2xl bg-canvas-white border border-mist shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-code-badge text-xs text-forest-deep uppercase font-bold block mb-1">
                  Operational Pairing &bull; P3
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium group-hover:text-forest-deep transition-colors mb-2">
                  ClinicOps Graph &rarr;
                </h3>
                <p className="font-body-sm text-sm text-steel">
                  Feeds structured consultation notes straight into ClinicOps pre-submission audit, catching coding gaps before insurance billing.
                </p>
              </div>
              <span className="font-code-badge text-xs text-terracotta-accent font-semibold mt-4 block">
                Reduces no-shows and eliminates billing denials
              </span>
            </Link>

            <Link
              href="/products/vitalgraph"
              className="p-6 rounded-2xl bg-canvas-white border border-mist shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-code-badge text-xs text-brass uppercase font-bold block mb-1">
                  Chronic Care Extension &bull; P2
                </span>
                <h3 className="font-headline text-headline-sm text-graphite font-medium group-hover:text-forest-deep transition-colors mb-2">
                  VitalGraph RPM &rarr;
                </h3>
                <p className="font-body-sm text-sm text-steel">
                  Diagnoses like Hypertension (I10) or T2DM (E11) automatically trigger VitalGraph home device kits for continuous remote patient monitoring.
                </p>
              </div>
              <span className="font-code-badge text-xs text-forest-deep font-semibold mt-4 block">
                Unlocks CPT 99453, 99454, 99457 recurring billing
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────── 6. FAQ & FINAL DOCTOR PILOT CTA ───────────────── */}
      <section className="w-full bg-ash py-20 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block">
              Doctor FAQ
            </span>
            <h2 className="font-headline text-headline-xl text-graphite">
              Questions From Attending Clinicians
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

      {/* Final Doctor Pilot CTA */}
      <section className="w-full py-20 px-6 lg:px-12 max-w-8xl mx-auto">
        <div className="bg-forest-deep rounded-3xl p-8 lg:p-14 text-on-primary text-center space-y-6">
          <span className="font-code-badge text-xs text-secondary-container uppercase tracking-widest block font-semibold">
            STOP CHARTING AT DINNER
          </span>
          <h2 className="font-headline text-headline-2xl text-on-primary max-w-2xl mx-auto leading-[1.12]">
            Launch a 14-day MedScribe pilot in your exam room.
          </h2>
          <p className="font-body-lg text-on-primary/80 max-w-xl mx-auto leading-relaxed">
            Reclaim 2 hours every day with audit-proof notes and real-time contradiction detection. Zero EHR modification required to test.
          </p>
          <div className="pt-2">
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center h-14 px-9 rounded-full bg-terracotta-accent text-white font-label-lg text-label-lg hover:bg-terracotta-accent/90 transition-all shadow-md gap-2"
            >
              <span>Request 14-Day Doctor Pilot</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
