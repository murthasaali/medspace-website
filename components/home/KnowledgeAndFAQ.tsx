import Link from "next/link";

const securityTopics = [
  { title: "Data Governance", icon: "verified_user", desc: "Granular access policies and BAA compliance." },
  { title: "De-identification (k=25)", icon: "enhanced_encryption", desc: "Cryptographic anonymization before inference." },
  { title: "Role-Based Access", icon: "admin_panel_settings", desc: "Physician, nurse, admin, and patient boundaries." },
  { title: "Immutable Audit Trails", icon: "history", desc: "Every graph traversal logged with SHA-256." },
  { title: "Deployment Control", icon: "tune", desc: "Cloud, hybrid, or 100% air-gapped on-premise." },
  { title: "Model Governance", icon: "gavel", desc: "Zero third-party telemetry egress to generic LLMs." },
  { title: "Evidence Attribution", icon: "link", desc: "Every clinical claim tied to source document spans." },
  { title: "Strict Data Boundaries", icon: "shield", desc: "Institutional data never leaves hospital servers." },
];

const evidenceTopics = [
  { title: "Research Publications", desc: "Peer-reviewed multi-relational graph topology architectures." },
  { title: "Benchmarks & Evaluation", desc: "0.83 PhysioNet mortality & 0.93 EHR decompensation AUROC." },
  { title: "Evaluation Methodology", desc: "Zero-hallucination graph validation frameworks." },
  { title: "Technical Papers", desc: "Span-level topological embeddings and deterministic traversals." },
  { title: "Clinical AI Safety", desc: "Deterministic constraint checks and drug interaction rules." },
  { title: "Knowledge Graph Methodology", desc: "Automated ICD-10, SNOMED, and LOINC semantic crosswalks." },
];

const resourceArticles = [
  {
    title: "What is a Clinical Knowledge Graph?",
    category: "FOUNDATION GUIDE",
    desc: "Understanding why relational graphs outperform vector databases and generic LLMs in medical care.",
    href: "/resources/guides",
  },
  {
    title: "How Clinical AI Documentation Works",
    category: "CLINICAL GUIDE",
    desc: "From ambient bedside acoustic models to signed SOAP notes and auto-adjudicated billing crosswalks.",
    href: "/resources/guides",
  },
  {
    title: "FHIR R4 and Healthcare Interoperability",
    category: "INTEGRATION GUIDE",
    desc: "Bridging legacy EHR silos with modern RESTful health data exchanges and streaming telemetry.",
    href: "/resources/guides",
  },
  {
    title: "Remote Patient Monitoring Explained",
    category: "OPERATIONS GUIDE",
    desc: "Deploying cellular cuffs, continuous glucometry, and automated CPT 99453/54 billing workflows.",
    href: "/resources/guides",
  },
  {
    title: "GraphRAG in Healthcare Environments",
    category: "TECHNICAL RESEARCH",
    desc: "Combining graph topology with retrieval-augmented generation for zero-hallucination clinical answers.",
    href: "/resources/research",
  },
  {
    title: "AI Governance for Clinical Systems",
    category: "COMPLIANCE GUIDE",
    desc: "Establishing audit-ready AI guardrails, BAA agreements, and defense-grade air-gapped security.",
    href: "/resources/guides",
  },
];

const faqs = [
  {
    q: "What is MedSpace AI?",
    a: "MedSpace AI is a healthcare technology platform that connects clinical data, patient information, medical devices, and healthcare workflows through a governed clinical knowledge graph. Its five products support clinical documentation, remote patient monitoring, clinic operations, patient engagement, and enterprise clinical intelligence.",
  },
  {
    q: "What is a clinical knowledge graph?",
    a: "A clinical knowledge graph is a structured, mathematically relational representation of healthcare information that maintains persistent connections between patients, clinicians, documents, devices, medications, and clinical events. It enables contextual reasoning across disconnected healthcare data sources without hallucination.",
  },
  {
    q: "What products does MedSpace AI offer?",
    a: "MedSpace AI offers five specialized clinical products: MedScribe Graph (ambient documentation), VitalGraph (remote patient monitoring), ClinicOps Graph (clinic operations & scheduling), PatientGraph Companion (patient engagement), and ClinicalKG Enterprise (governed enterprise intelligence).",
  },
  {
    q: "What is MedScribe Graph?",
    a: "MedScribe Graph converts bedside clinical conversations into structured SOAP documentation and connected clinical data in real-time. It supports ambient and dictated workflows with full span-level source attribution and automated ICD-10 coding.",
  },
  {
    q: "What is VitalGraph?",
    a: "VitalGraph connects patient-generated and cellular device telemetry with clinical context to support continuous biometric monitoring, longitudinal trend analysis, and proactive clinician alerts qualified for CPT reimbursement.",
  },
  {
    q: "What is ClinicOps Graph?",
    a: "ClinicOps Graph automates scheduling, reminder cadences, patient intake, AI-assisted communication, and operational workflows to cut clinic no-shows by up to 45% and optimize practice revenue cycles.",
  },
  {
    q: "What is PatientGraph Companion?",
    a: "PatientGraph Companion is a patient-facing health assistant that explains medical terminology, lab results, and care instructions at a 6th-grade reading level, while helping patients manage medications and follow-up care.",
  },
  {
    q: "What is ClinicalKG Enterprise?",
    a: "ClinicalKG Enterprise is a governed clinical knowledge graph platform for large health systems, hospital networks, and research enclaves, featuring multi-hop Cypher/SPARQL queries, k=25 de-identification, and air-gapped deployment.",
  },
  {
    q: "How does MedSpace AI connect healthcare data?",
    a: "MedSpace AI normalizes heterogeneous healthcare data using standard clinical terminologies (ICD-10, SNOMED-CT, RxNorm, LOINC) and connects entities in an authenticated topological graph that maintains relationships between all nodes.",
  },
  {
    q: "Does MedSpace AI integrate with FHIR and HL7?",
    a: "Yes. MedSpace AI provides native connectors for FHIR R4, HL7 v2, CSV, PDF OCR, BLE devices, and REST APIs, ensuring plug-and-play interoperability with Epic, Cerner, AthenaHealth, and custom EHRs.",
  },
  {
    q: "Can MedSpace AI run completely on-premise or air-gapped?",
    a: "Yes. MedSpace AI supports dedicated sovereign cloud enclaves (AWS GovCloud / Azure), hybrid models, and 100% on-premise air-gapped hardware nodes where zero patient data or telemetry ever leaves your hospital perimeter.",
  },
  {
    q: "How does MedSpace AI handle sensitive healthcare information?",
    a: "MedSpace AI enforces zero third-party cloud data egress, role-based access control, cryptographic k-anonymity (k=25), immutable audit trails, and signed Business Associate Agreements (BAAs) compliant with HIPAA and ONC standards.",
  },
  {
    q: "Is MedSpace AI a medical diagnosis system?",
    a: "No. MedSpace AI is designed as a clinical intelligence and workflow acceleration platform to support clinician decision-making. It does not replace qualified healthcare professionals or emergency medical services.",
  },
];

export default function KnowledgeAndFAQ() {
  return (
    <>
      {/* ─── SECURITY & TRUST ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="security">
        <div className="max-w-3xl mb-12">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
            Governance &amp; Trust
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            Built from the ground up for <span className="italic text-terracotta-accent">protected health information.</span>
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-3">
            Every layer of the MedSpace architecture enforces deterministic data privacy, strict access controls, and verifiable auditability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityTopics.map((topic) => (
            <Link
              key={topic.title}
              href="/security"
              className="group block p-6 rounded-2xl bg-surface-container-lowest border border-border-tactile shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-matcha/40 flex items-center justify-center text-forest-deep mb-4 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px]">{topic.icon}</span>
              </div>
              <h3 className="font-label-lg text-label-lg text-forest-deep group-hover:text-primary transition-colors mb-1.5 font-semibold">
                {topic.title}
              </h3>
              <p className="font-body-sm text-body-sm text-text-muted leading-relaxed">
                {topic.desc}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group font-semibold"
          >
            <span>View full security, BAA, &amp; compliance documentation</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ─── EVIDENCE & RESEARCH ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto bg-surface-cream rounded-3xl border border-border-tactile" id="evidence">
        <div className="max-w-3xl mb-12">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
            Clinical Rigor
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            Evidence and <span className="italic text-terracotta-accent">clinical AI research.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
            We believe clinical AI systems must be mathematically verifiable and transparent about their capabilities, safety constraints, and validation methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evidenceTopics.map((topic) => (
            <Link
              key={topic.title}
              href="/evidence"
              className="group block p-6 rounded-2xl bg-surface-container-lowest border border-border-tactile shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-code-badge text-[10px] text-terracotta-accent uppercase font-bold tracking-wider block mb-2">
                  Validation Artifact
                </span>
                <h3 className="font-headline text-headline-sm text-forest-deep group-hover:text-primary transition-colors mb-2">
                  {topic.title}
                </h3>
                <p className="font-body-sm text-body-sm text-text-muted leading-relaxed">
                  {topic.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-1 text-forest-deep font-label-sm text-label-sm font-semibold group-hover:text-primary">
                <span>View evidence dossier</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/evidence"
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group font-semibold"
          >
            <span>Access complete clinical evidence portal</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ─── RESOURCES & GUIDES ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="resources">
        <div className="max-w-3xl mb-12">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
            Knowledge Base
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            Healthcare AI <span className="italic text-terracotta-accent">guides and primers.</span>
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-3">
            In-depth architectural explainers on clinical knowledge graphs, ambient documentation, and sovereign healthcare infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceArticles.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block p-7 rounded-3xl bg-surface-container-lowest border border-border-tactile shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-code-badge text-[10px] px-2.5 py-1 rounded bg-surface-container text-text-muted font-bold uppercase tracking-wider block w-max mb-3">
                  {item.category}
                </span>
                <h3 className="font-headline text-headline-sm text-forest-deep group-hover:text-primary transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-text-muted leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-border-tactile flex items-center justify-between text-forest-deep group-hover:text-primary font-label-md text-label-md font-semibold">
                <span>Read guide</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/resources/guides"
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group font-semibold"
          >
            <span>Browse all clinical resources and case studies</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ─── FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="faq">
        <div className="max-w-3xl mb-12">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            Answers to common questions about <span className="italic text-terracotta-accent">MedSpace AI.</span>
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-3">
            Understand how our clinical graph architecture operates, connects to existing systems, and guarantees sovereign compliance.
          </p>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-surface-container-lowest rounded-2xl p-6 border border-border-tactile shadow-sm transition-all open:shadow-md"
            >
              <summary className="font-headline text-headline-sm text-forest-deep cursor-pointer list-none flex items-center justify-between gap-4 select-none">
                <span className="group-hover:text-primary transition-colors">{faq.q}</span>
                <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-forest-deep flex-shrink-0 transition-transform duration-200 group-open:rotate-180">
                  <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </span>
              </summary>
              <div className="font-body-md text-body-md text-on-surface-variant mt-4 pt-4 border-t border-border-tactile leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ─── ABOUT MEDSPACE AI (COMPANY) ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto bg-surface-cream rounded-3xl border border-border-tactile mb-16" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block">
              About the Company
            </span>
            <h2 className="font-headline text-headline-xl text-forest-deep">
              Pioneering sovereign <span className="italic text-terracotta-accent">clinical intelligence.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              MedSpace AI builds healthcare technology that connects clinical data, patient context, medical devices, and operational workflows through a governed clinical knowledge graph.
            </p>
            <p className="font-body-md text-body-md text-text-muted leading-relaxed">
              Our mission is to eliminate clinician administrative burnout and prevent clinical data fragmentation without ever compromising patient privacy or data sovereignty.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/company/about"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-forest-deep text-on-primary font-label-md text-label-md hover:bg-primary shadow-sm transition-all gap-2 group"
              >
                <span>About MedSpace AI</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                href="/company/team"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-surface-container-lowest text-forest-deep font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm border border-border-tactile"
              >
                <span>Leadership &amp; Clinical Advisors</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-surface-container-lowest p-6 rounded-2xl border border-border-tactile space-y-3">
            <span className="font-code-badge text-[11px] text-forest-deep font-bold uppercase tracking-wider block">
              Core Principles
            </span>
            <div className="flex items-center gap-2.5 text-sm text-on-surface">
              <span className="material-symbols-outlined text-forest-deep text-[18px]">verified</span>
              <span>100% Mathematical Provenance</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-on-surface">
              <span className="material-symbols-outlined text-forest-deep text-[18px]">verified</span>
              <span>Zero PHI Cloud Telemetry Egress</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-on-surface">
              <span className="material-symbols-outlined text-forest-deep text-[18px]">verified</span>
              <span>Native FHIR R4 &amp; HL7 v2 Compatibility</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-on-surface">
              <span className="material-symbols-outlined text-forest-deep text-[18px]">verified</span>
              <span>Transparent &amp; Auditable Clinical AI</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
