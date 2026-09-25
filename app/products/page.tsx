"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";

type Persona = "all" | "doctors" | "clinics" | "patients" | "hospitals";

interface Product {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: string;
  audience: string;
  personas: Persona[];
  description: string;
  highlights: string[];
  badge: string;
  badgeStyle: string;
  href: string;
  integration: string;
}

const PRODUCTS: Product[] = [
  {
    id: "clinicops",
    number: "01",
    name: "ClinicOps Graph",
    tagline: "An automated front-desk that patients actually love.",
    category: "Front-Desk & Operations",
    audience: "For Practice Managers & Clinic Staff",
    personas: ["clinics", "hospitals"],
    description: "Cuts missed appointments in half, automates patient check-in on tablets or WhatsApp, and catches billing mistakes before claims are submitted.",
    highlights: [
      "Automated WhatsApp & SMS reminders that make rescheduling effortless",
      "Touchless kiosk and mobile check-in in under 20 seconds",
      "Audits visit notes against payer rules to prevent insurance claim denials",
    ],
    badge: "Active Pilot",
    badgeStyle: "bg-surface-matcha/60 text-forest-deep border-forest-deep/20",
    href: "/products/clinicops",
    integration: "Connects beside Epic, Cerner, AthenaHealth & Google Calendar",
  },
  {
    id: "medscribe",
    number: "02",
    name: "MedScribe Graph",
    tagline: "Less time typing. More time with patients.",
    category: "Ambient Clinical Scribe",
    audience: "For Doctors, Surgeons & Clinicians",
    personas: ["doctors", "clinics"],
    description: "Listens quietly during your patient visits and writes complete, accurate medical charts in seconds—while catching chart contradictions before you sign.",
    highlights: [
      "Saves 1.5 to 2 hours of daily charting (eliminates after-hours pajama time)",
      "Alerts you if patient statements conflict with past medical history or medications",
      "100% on-premise private processing with zero cloud data egress",
    ],
    badge: "Active Pilot",
    badgeStyle: "bg-surface-matcha/60 text-forest-deep border-forest-deep/20",
    href: "/products/medscribe",
    integration: "1-click export to Epic, Cerner, AthenaHealth & FHIR R4",
  },
  {
    id: "vitalgraph",
    number: "03",
    name: "VitalGraph RPM",
    tagline: "Continuous care for chronic patients at home.",
    category: "Remote Patient Monitoring",
    audience: "For Cardiologists, Primary Care & Care Teams",
    personas: ["doctors", "clinics", "hospitals"],
    description: "Pre-configured smart health devices (blood pressure cuffs, glucose monitors, and weight scales) that alert your clinic before minor issues become hospital emergencies.",
    highlights: [
      "Zero-setup cellular devices that work right out of the box (no Wi-Fi needed)",
      "Smart trend alerts that spot sudden health declines days in advance",
      "Automates monthly insurance reimbursement documentation (CPT 99453/4/7)",
    ],
    badge: "Pilot / Pre-Order",
    badgeStyle: "bg-surface-cream text-terracotta-accent border-terracotta-accent/30",
    href: "/products/vitalgraph",
    integration: "Includes cellular gateway, BP cuff, glucometer & smart scale",
  },
  {
    id: "patientgraph",
    number: "04",
    name: "PatientGraph Companion",
    tagline: "Plain-language medical answers for patients and families.",
    category: "Patient Portal & Lab Explainer",
    audience: "For Patients, Caregivers & Families",
    personas: ["patients", "clinics"],
    description: "Translates complex lab reports and medical jargon into calm, easy-to-understand explanations with questions patients can bring to their next appointment.",
    highlights: [
      "Upload lab test PDFs for instant, line-by-line plain English summaries",
      "Friendly WhatsApp assistant that helps patients prepare for clinic visits",
      "Reduces panic phone calls to front-desk receptionists",
    ],
    badge: "Waitlist",
    badgeStyle: "bg-fog text-steel border-mist",
    href: "/products/patientgraph",
    integration: "Free web utility & WhatsApp assistant for patients",
  },
  {
    id: "clinicalkg-enterprise",
    number: "05",
    name: "ClinicalKG Enterprise",
    tagline: "One unified knowledge graph for your entire health system.",
    category: "Hospital Platform & API",
    audience: "For Health Systems, Hospital CIOs & Researchers",
    personas: ["hospitals"],
    description: "Connects fragmented electronic health records, lab systems, and billing archives into one queryable, privacy-safe intelligence engine.",
    highlights: [
      "Query millions of patient records in seconds for clinical research and cohort discovery",
      "Safe Harbor de-identification vault ensuring complete patient privacy compliance",
      "Modern Model Context Protocol (MCP) and REST APIs for health-tech developers",
    ],
    badge: "Enterprise",
    badgeStyle: "bg-fog text-graphite border-graphite/20",
    href: "/products/clinicalkg-enterprise",
    integration: "Deploy on private cloud VPC or air-gapped on-premise servers",
  },
];

const FAQS = [
  {
    q: "Do we have to replace our existing EHR or clinic software?",
    a: "No. MedSpace AI is designed to work right beside whatever software you use today (Epic, Cerner, AthenaHealth, or standard calendars). There is zero need to rip and replace existing databases.",
  },
  {
    q: "Can clinical data remain 100% on-premise for privacy?",
    a: "Yes. All MedSpace products can run entirely inside your clinic's physical network using our compact Clinic AI Box. Patient data and audio recordings never travel over the internet.",
  },
  {
    q: "Where should our clinic start on the product ladder?",
    a: "Most outpatient practices start with either MedScribe (to give doctors 2 hours of daily time back) or ClinicOps (to stop no-shows and automate check-in). As chronic patients are identified, clinics easily turn on VitalGraph RPM with zero new software installation.",
  },
  {
    q: "How does MedSpace prevent AI from making up facts?",
    a: "Every single note, alert, or code produced by MedSpace is tied to an exact source citation—such as an exact audio recording timestamp [audio#02:14] or patient chart document [chart#rx-942]. If a fact cannot be proven from the records, the system will not guess.",
  },
];

export default function ProductsPage() {
  const [selectedPersona, setSelectedPersona] = useState<Persona>("all");

  // Simple ROI Calculator State
  const [doctors, setDoctors] = useState(3);
  const [visitsPerDay, setVisitsPerDay] = useState(20);

  const hoursSavedPerYear = Math.round(doctors * 2 * 5 * 48);
  const recoveredRevenue = Math.round(doctors * visitsPerDay * 0.15 * 0.4 * 140 * 5 * 48);

  const filteredProducts = PRODUCTS.filter(
    (p) => selectedPersona === "all" || p.personas.includes(selectedPersona)
  );

  return (
    <div className="min-h-screen bg-surface-porcelain">
      <ScrollObserver />

      {/* ───────────────── 1. HERO SECTION ───────────────── */}
      <section className="w-full pt-12 pb-16 md:pb-20 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs font-code-badge text-slate">
            <Link href="/" className="hover:text-forest-deep transition-colors">Home</Link>
            <span>/</span>
            <span className="text-graphite font-semibold">Products</span>
          </div>

          <div className="reveal-on-scroll max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-cream text-forest-deep font-code-badge text-xs font-medium border border-border-tactile">
              <span className="w-2 h-2 rounded-full bg-forest-deep" />
              <span>The MedSpace AI Product Suite</span>
            </div>

            <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight leading-[1.12]">
              One clinical brain. Five superpowers for{" "}
              <span className="italic font-headline text-terracotta-accent">your practice.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-steel max-w-2xl leading-relaxed">
              Start with the tool you need today—whether that's cutting no-shows, eliminating evening charting,
              or monitoring chronic patients at home. Every product works seamlessly together on one unified knowledge graph.
            </p>
          </div>

          {/* Persona Filter Switcher */}
          <div className="reveal-on-scroll pt-8 mt-8 border-t border-mist flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-code-badge text-xs uppercase tracking-wider text-brass font-bold">
              View for your role:
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Products" },
                { id: "doctors", label: "For Clinicians" },
                { id: "clinics", label: "For Practice Managers" },
                { id: "patients", label: "For Patients" },
                { id: "hospitals", label: "For Hospitals" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedPersona(tab.id as Persona)}
                  className={`px-4 py-2 rounded-full font-code-badge text-xs font-medium transition-all cursor-pointer ${
                    selectedPersona === tab.id
                      ? "bg-forest-deep text-white shadow-sm"
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

      {/* ───────────────── 2. THE 5 PRODUCTS (STREAMLINED CARDS) ───────────────── */}
      <section className="w-full py-16 md:py-20 px-6 lg:px-12" id="products">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold">
              The Product Ladder
            </span>
            <span className="text-xs font-code-badge text-slate">
              Showing {filteredProducts.length} of {PRODUCTS.length} tools
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="reveal-on-scroll bg-canvas-white rounded-2xl border border-mist p-6 md:p-8 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: Product Info */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-code-badge text-xs font-bold text-terracotta-accent">
                      {p.number}
                    </span>
                    <span className="text-slate text-xs">&bull;</span>
                    <span className="font-code-badge text-xs text-steel">
                      {p.category}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-code-badge border font-semibold ml-auto sm:ml-0 ${p.badgeStyle}`}>
                      {p.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-headline text-headline-md text-graphite font-semibold">
                      {p.name}
                    </h2>
                    <p className="font-body-sm text-sm text-terracotta-accent font-medium mt-0.5">
                      {p.tagline}
                    </p>
                  </div>

                  <p className="font-body-sm text-xs text-steel leading-relaxed">
                    {p.description}
                  </p>

                  <div className="text-xs font-code-badge text-slate pt-2 border-t border-mist">
                    {p.integration}
                  </div>

                  {/* CTAs */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={p.href}
                      className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-forest-deep text-white font-label-md text-xs hover:bg-primary transition-all shadow-sm gap-2 group cursor-pointer"
                    >
                      <span>Explore {p.name}</span>
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                    <Link
                      href="/company/contact"
                      className="text-xs font-code-badge font-bold text-forest-deep hover:underline"
                    >
                      Request a 14-Day Pilot &rarr;
                    </Link>
                  </div>
                </div>

                {/* Right: 3 Key Highlights */}
                <div className="lg:col-span-5 bg-fog rounded-xl p-6 border border-mist space-y-3">
                  <span className="font-code-badge text-[11px] uppercase tracking-wider text-slate block font-bold">
                    Key Highlights
                  </span>
                  <ul className="space-y-2.5 text-xs font-body-sm text-steel">
                    {p.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-forest-deep text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── 3. HOW THEY WORK TOGETHER (LADDER JOURNEY) ───────────────── */}
      <section className="w-full bg-ash py-16 md:py-24 px-6 lg:px-12 border-y border-mist">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="reveal-on-scroll max-w-2xl space-y-2">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block">
              The Connected Platform
            </span>
            <h2 className="font-headline text-headline-xl text-graphite tracking-tight">
              Start with one product. Grow into the suite.
            </h2>
            <p className="font-body-md text-body-md text-steel">
              You don't need to adopt everything on day one. Most practices climb a natural ladder:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <span className="font-code-badge text-xs text-terracotta-accent uppercase font-bold block">
                Step 1 &bull; Front-Desk Win
              </span>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Fix No-Shows &amp; Intake
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                Deploy <strong>ClinicOps</strong> in 48 hours to cut missed visits in half and automate front-desk check-in, paying for itself immediately.
              </p>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <span className="font-code-badge text-xs text-forest-deep uppercase font-bold block">
                Step 2 &bull; Physician Win
              </span>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Eliminate Charting Burnout
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                Add <strong>MedScribe</strong> to save 2 hours per doctor every day with ambient AI notes that catch patient chart contradictions before signing.
              </p>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <span className="font-code-badge text-xs text-brass uppercase font-bold block">
                Step 3 &bull; Continuous Care
              </span>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Monitor at Home
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                As chronic conditions (like hypertension or diabetes) are diagnosed, turn on <strong>VitalGraph RPM</strong> to monitor patient vitals from home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 4. SIMPLE PRACTICE ROI CALCULATOR ───────────────── */}
      <section className="w-full py-16 md:py-24 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="reveal-on-scroll lg:col-span-6 space-y-4">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block">
              Quick Calculator
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              Calculate your practice time and revenue savings.
            </h2>
            <p className="font-body-md text-body-md text-steel leading-relaxed">
              See how much time your doctors can reclaim from typing notes, and how much appointment revenue
              you can protect by preventing patient no-shows.
            </p>
            <div className="pt-2">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-1.5 font-label-md text-xs text-forest-deep font-semibold hover:underline"
              >
                <span>Request a tailored clinic assessment</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Interactive Calculator Card */}
          <div className="reveal-scale lg:col-span-6 bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-code-badge mb-1.5">
                  <span className="text-slate uppercase font-semibold">Practicing Physicians:</span>
                  <span className="text-graphite font-bold">{doctors} doctors</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={doctors}
                  onChange={(e) => setDoctors(Number(e.target.value))}
                  className="w-full accent-forest-deep cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-code-badge mb-1.5">
                  <span className="text-slate uppercase font-semibold">Patient Visits / Doctor / Day:</span>
                  <span className="text-graphite font-bold">{visitsPerDay} visits</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="35"
                  value={visitsPerDay}
                  onChange={(e) => setVisitsPerDay(Number(e.target.value))}
                  className="w-full accent-forest-deep cursor-pointer"
                />
              </div>
            </div>

            {/* Clear Output Results */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-mist bg-fog rounded-xl p-4">
              <div>
                <span className="font-code-badge text-[10.5px] text-slate block mb-1 uppercase">
                  Doctor Time Saved:
                </span>
                <span suppressHydrationWarning className="font-code-badge text-lg md:text-xl font-bold text-forest-deep">
                  {hoursSavedPerYear.toLocaleString("en-US")} <span className="text-xs font-normal text-slate">hrs/year</span>
                </span>
              </div>

              <div>
                <span className="font-code-badge text-[10.5px] text-slate block mb-1 uppercase">
                  Protected Revenue:
                </span>
                <span suppressHydrationWarning className="font-code-badge text-lg md:text-xl font-bold text-graphite">
                  ${recoveredRevenue.toLocaleString("en-US")} <span className="text-xs font-normal text-slate">/year</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 5. HARDWARE & PRIVACY HIGHLIGHT ───────────────── */}
      <section className="w-full bg-surface-cream py-16 md:py-24 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="reveal-on-scroll max-w-2xl space-y-2">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block">
              Physical Devices &amp; Security
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              Optional hardware. 100% data privacy.
            </h2>
            <p className="font-body-md text-body-md text-steel">
              MedSpace pairs with plug-and-play physical devices, or runs on existing tablets and laptops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <span className="font-code-badge text-[11px] text-slate uppercase font-bold block">
                Reception Check-In
              </span>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Front-Desk Kiosk
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                Antimicrobial 10.5" touchscreen tablet stand where patients scan a QR code to check in and verify insurance in 20 seconds.
              </p>
              <Link href="/hardware" className="text-xs font-code-badge font-bold text-forest-deep hover:underline block pt-2">
                Inspect Kiosk Specs &rarr;
              </Link>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <span className="font-code-badge text-[11px] text-forest-deep uppercase font-bold block">
                100% On-Premise Privacy
              </span>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                Clinic AI Box
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                A silent, compact mini-computer that runs speech recognition and notes entirely on your clinic network. Zero cloud streaming.
              </p>
              <Link href="/hardware" className="text-xs font-code-badge font-bold text-forest-deep hover:underline block pt-2">
                Inspect Clinic AI Box &rarr;
              </Link>
            </div>

            <div className="bg-canvas-white rounded-2xl p-7 border border-mist shadow-sm space-y-3">
              <span className="font-code-badge text-[11px] text-terracotta-accent uppercase font-bold block">
                Home Patient Monitoring
              </span>
              <h3 className="font-headline text-headline-sm text-graphite font-semibold">
                RPM Device Kit
              </h3>
              <p className="font-body-sm text-xs text-steel leading-relaxed">
                Pre-paired cellular blood pressure cuffs and weight scales that automatically stream vitals to your clinic without any patient Wi-Fi setup.
              </p>
              <Link href="/hardware" className="text-xs font-code-badge font-bold text-forest-deep hover:underline block pt-2">
                Inspect RPM Kit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 6. FAQ ───────────────── */}
      <section className="w-full bg-ash py-16 md:py-24 px-6 lg:px-12 border-b border-mist">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold block">
              Evaluation &bull; FAQ
            </span>
            <h2 className="font-headline text-headline-xl text-graphite">
              Frequently asked questions.
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
            14-Day Practice Pilot
          </span>
          <h2 className="font-headline text-headline-2xl text-on-primary max-w-xl mx-auto leading-tight">
            Bring intelligent, private AI to your clinic.
          </h2>
          <p className="font-body-md text-on-primary/80 max-w-lg mx-auto leading-relaxed">
            Test ambient clinical notes, eliminate front-desk no-shows, or deploy remote patient monitoring with zero
            software replacement.
          </p>
          <div className="pt-2">
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-terracotta-accent text-white font-label-md text-label-md hover:bg-terracotta-accent/90 transition-all shadow-md gap-2"
            >
              <span>Request a 14-Day Pilot</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
