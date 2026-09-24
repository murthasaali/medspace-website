import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Connect",
    icon: "sync_alt",
    description: "Ingest live EHR feeds, ambient audio, cellular devices, and clinical records via native FHIR R4 & HL7 v2 connectors.",
  },
  {
    num: "02",
    title: "Structure",
    icon: "account_tree",
    description: "Normalize free text, vitals, and documents into an authenticated topological clinical graph with ICD-10, SNOMED, and LOINC bindings.",
  },
  {
    num: "03",
    title: "Understand",
    icon: "psychology",
    description: "Traverse multi-hop relationships to detect drug interactions, chronic decompensation triggers, and verifiable evidence paths.",
  },
  {
    num: "04",
    title: "Act",
    icon: "task_alt",
    description: "Deliver signed clinical notes, RPM alerts, automated billing codes, and triage actions directly into clinician and patient workflows.",
  },
];

const useCases = [
  {
    title: "Clinical Documentation",
    badge: "AMBIENT SCRIBE",
    description: "Convert clinical conversations into structured documentation and connected clinical data.",
    href: "/products/medscribe",
    anchor: "Explore MedScribe Graph",
  },
  {
    title: "Remote Patient Monitoring",
    badge: "DEVICE TELEMETRY",
    description: "Connect device data with clinical context for monitoring, trends and clinician review.",
    href: "/products/vitalgraph",
    anchor: "Explore VitalGraph RPM",
  },
  {
    title: "Clinic Scheduling & Operations",
    badge: "AUTOMATION",
    description: "Streamline patient intake, reminders, and operational workflows for clinics.",
    href: "/products/clinicops",
    anchor: "Explore ClinicOps Graph",
  },
  {
    title: "Patient Health Engagement",
    badge: "PATIENT PORTAL",
    description: "Help patients understand health information, medications and follow-up instructions.",
    href: "/products/patientgraph",
    anchor: "Explore PatientGraph",
  },
  {
    title: "Clinical Data & Cohort Research",
    badge: "RESEARCH ENCLAVE",
    description: "Access governed clinical data for research, cohort analysis and population health.",
    href: "/products/clinicalkg-enterprise",
    anchor: "Explore ClinicalKG Research",
  },
  {
    title: "Enterprise Clinical Intelligence",
    badge: "HEALTH SYSTEMS",
    description: "Connect enterprise data sources through a governed clinical knowledge graph.",
    href: "/products/clinicalkg-enterprise",
    anchor: "Explore Enterprise Intelligence",
  },
];

const personas = [
  {
    title: "Doctors & Physicians",
    icon: "stethoscope",
    description: "Reclaim evenings by automating charting, ambient encounter transcription, and ICD-10 crosswalks.",
    href: "/industries/clinics",
  },
  {
    title: "Outpatient Clinics",
    icon: "medical_services",
    description: "Eliminate appointment leaks, reduce no-show rates, and scale practice revenue with cellular RPM.",
    href: "/industries/clinics",
  },
  {
    title: "Hospitals",
    icon: "local_hospital",
    description: "Coordinate multidisciplinary care teams with zero-hallucination graph reasoning across departments.",
    href: "/industries/hospitals",
  },
  {
    title: "Health Systems",
    icon: "apartment",
    description: "Deploy a single governed knowledge fabric across distributed hospital networks and ambulatory centers.",
    href: "/industries/health-systems",
  },
  {
    title: "Clinical Researchers",
    icon: "science",
    description: "Query longitudinal real-world evidence (RWE) with deterministic mathematical provenance assertions.",
    href: "/industries/research",
  },
  {
    title: "Healthcare Organizations",
    icon: "corporate_fare",
    description: "Deploy enterprise-wide intelligence and compliance.",
    href: "/industries/healthcare-organizations",
  },
];

const industries = [
  { label: "Primary Care", href: "/industries/clinics" },
  { label: "Specialty Clinics", href: "/industries/clinics" },
  { label: "Hospitals & Inpatient", href: "/industries/hospitals" },
  { label: "Health Systems", href: "/industries/health-systems" },
  { label: "Chronic Disease Management", href: "/solutions/remote-patient-monitoring" },
  { label: "Remote & Ambulatory Care", href: "/solutions/remote-patient-monitoring" },
  { label: "Clinical Trials & Research", href: "/industries/research" },
  { label: "Healthcare Technology", href: "/platform/apis" },
];

const integrationsSupported = [
  "FHIR R4",
  "HL7 v2",
  "EHR Webhooks",
  "REST APIs",
  "Cellular 4G LTE-M",
  "Bluetooth LE",
  "PDF & OCR",
  "Structured CSV",
  "WhatsApp & SMS",
  "Secure Web",
];

const integrationsPlanned = [
  "DICOM Imaging",
  "ANSI X12 837/835",
  "C-CDA Standards",
  "Apple HealthKit",
];

export default function WorkflowsAndEnvironments() {
  return (
    <>
      {/* ─── HOW IT WORKS (PROCESS) ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-8xl mx-auto" id="how-it-works">
        <div className="max-w-3xl mb-12">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
            Clinical Process
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            From fragmented data to <span className="italic text-terracotta-accent">deterministic context.</span>
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-3">
            How raw patient data is ingested, normalized, verified, and translated into immediate clinical action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-surface-container-lowest p-7 rounded-3xl shadow-sm border border-border-tactile flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-code-badge text-headline-md font-bold text-terracotta-accent">
                    {step.num}
                  </span>
                  <span className="w-9 h-9 rounded-xl bg-surface-matcha/40 flex items-center justify-center text-forest-deep group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                  </span>
                </div>
                <h3 className="font-headline text-headline-md text-forest-deep mb-2">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-tactile">
                <span className="font-code-badge text-[11px] text-forest-deep font-semibold uppercase tracking-wider">
                  Step {step.num} &bull; VeritasGraph
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── USE CASES (HEALTHCARE WORKFLOWS) ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-8xl mx-auto" id="use-cases">
        <div className="max-w-3xl mb-12">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
            Targeted Workflows
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            Engineered for <span className="italic text-terracotta-accent">real clinical environments.</span>
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-3">
            Every product workflow is purpose-built around clinicians, operations staff, and patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block p-7 rounded-3xl bg-surface-container-lowest border border-border-tactile shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block font-code-badge text-[10px] px-2.5 py-1 rounded bg-surface-container text-text-muted uppercase tracking-wider mb-3">
                  {item.badge}
                </span>
                <h3 className="font-headline text-headline-md text-forest-deep mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-text-muted leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <div className="pt-4 border-t border-border-tactile flex items-center justify-between text-forest-deep group-hover:text-primary">
                <span className="font-label-md text-label-md font-semibold">
                  {item.anchor}
                </span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── PERSONAS & HEALTHCARE ENVIRONMENTS ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-8xl mx-auto bg-surface-cream rounded-3xl border border-border-tactile" id="who">
        <div className="max-w-3xl mb-12">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
            Clinical Stakeholders
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            Designed for every scale of <span className="italic text-terracotta-accent">healthcare delivery.</span>
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-3">
            From single-physician specialty practices to multi-facility university hospital networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {personas.map((persona) => (
            <Link
              key={persona.title}
              href={persona.href}
              className="group p-6 rounded-2xl bg-surface-container-lowest border border-border-tactile shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-surface-matcha/40 flex items-center justify-center text-forest-deep mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">{persona.icon}</span>
                </div>
                <h3 className="font-headline text-headline-sm text-forest-deep mb-2 group-hover:text-primary transition-colors">
                  {persona.title}
                </h3>
                <p className="font-body-sm text-body-sm text-text-muted leading-relaxed">
                  {persona.description}
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-1 text-forest-deep font-label-sm text-label-sm font-semibold group-hover:text-primary">
                <span>View environment solutions</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Industry Chips */}
        <div className="pt-8 border-t border-border-tactile">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-4">
            Practice Disciplines &amp; Settings
          </span>
          <div className="flex flex-wrap gap-2.5">
            {industries.map((ind) => (
              <Link
                key={ind.label}
                href={ind.href}
                className="font-body-sm text-body-sm text-forest-deep bg-surface-container-lowest px-4 py-2.5 rounded-full border border-border-tactile shadow-sm hover:bg-forest-deep hover:text-on-primary transition-all"
              >
                {ind.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SYSTEM INTEGRATIONS ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-8xl mx-auto" id="integrations">
        <div className="max-w-3xl mb-12">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
            Interoperability
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            Works with the healthcare systems <span className="italic text-terracotta-accent">you already rely on.</span>
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-3">
            Zero rip-and-replace. MedSpace bridges legacy EHR silos, clinical messaging, and patient telemetry into one coherent knowledge layer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-surface-container-lowest p-8 lg:p-10 rounded-3xl border border-border-tactile shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-forest-deep"></span>
              <span className="font-code-badge text-code-badge text-forest-deep font-bold uppercase tracking-wider">
                Production-Ready Integrations
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {integrationsSupported.map((item) => (
                <span
                  key={item}
                  className="font-code-badge text-code-badge text-forest-deep bg-surface-container-low px-3.5 py-2 rounded-xl border border-border-tactile flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-deep"></span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-sage-muted"></span>
              <span className="font-code-badge text-code-badge text-text-muted font-bold uppercase tracking-wider">
                Planned Standard Connectors
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {integrationsPlanned.map((item) => (
                <span
                  key={item}
                  className="font-code-badge text-code-badge text-text-muted bg-surface-cream/70 px-3.5 py-2 rounded-xl border border-dashed border-outline-variant"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Link
            href="/integrations/fhir"
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group font-semibold"
          >
            <span>Explore technical integration documentation</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
