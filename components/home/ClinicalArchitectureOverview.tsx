import Link from "next/link";

export default function ClinicalArchitectureOverview() {
  return (
    <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="architecture">
      {/* Eyebrow & Headline */}
      <div className="max-w-3xl mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-forest-deep font-code-badge text-code-badge mb-3">
          <span className="w-2 h-2 rounded-full bg-terracotta-accent"></span>
          CENTRAL ARCHITECTURAL FOUNDATION
        </span>
        <h2 className="font-headline text-headline-xl text-forest-deep tracking-tight">
          How MedSpace AI <span className="italic font-headline text-terracotta-accent">Unifies Healthcare.</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
          Healthcare data is fractured across EHRs, cellular devices, and manual notes. MedSpace organizes it into a single governed clinical knowledge layer that maintains active relationships between clinicians, patients, documents, and real-time telemetry.
        </p>
      </div>

      {/* Visual Architecture Diagram */}
      <div className="bg-surface-container-low rounded-3xl p-8 lg:p-12 shadow-sm border border-border-tactile mb-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-surface-matcha/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="flex items-center justify-between pb-6 mb-6 border-b border-border-tactile">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-forest-deep"></span>
            <span className="font-code-badge text-code-badge font-bold text-forest-deep tracking-wider uppercase">
              End-to-End Clinical Data Flow
            </span>
          </div>
          <span className="font-code-badge text-[11px] px-3 py-1 rounded-full bg-surface-cream text-text-muted">
            ICD-10 &bull; SNOMED &bull; RxNorm &bull; LOINC
          </span>
        </div>

        <svg
          viewBox="0 0 1000 420"
          className="w-full h-auto"
          role="img"
          aria-label="MedSpace AI architecture diagram showing data flowing from clinical inputs through the clinical knowledge graph to actionable outputs"
        >
          <defs>
            <linearGradient id="kgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F3E17" />
              <stop offset="100%" stopColor="#1B4D24" />
            </linearGradient>
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" />
            </filter>
          </defs>

          {/* Column 1: INPUTS */}
          <text x="100" y="32" fontFamily="Space Mono, monospace" fontSize="11" fontWeight="700" fill="#526057" letterSpacing="0.1em" textAnchor="middle">
            INPUT SOURCES
          </text>

          {[
            { label: "Patients & Cohorts", y: 52 },
            { label: "Doctors & Clinicians", y: 96 },
            { label: "Clinical Records (EHR)", y: 140 },
            { label: "Diagnostic Labs (LOINC)", y: 184 },
            { label: "Medications (RxNorm)", y: 228 },
            { label: "Medical Devices (RPM)", y: 272 },
            { label: "Appointments & Intake", y: 316 },
            { label: "Patient Communications", y: 360 },
          ].map((item, idx) => (
            <g key={item.label} className="transition-transform">
              <rect x="20" y={item.y} width="170" height="34" rx="8" fill="#FFFFFF" stroke="#E5ECE4" strokeWidth="1" filter="url(#shadow)" />
              <circle cx="36" cy={item.y + 17} r="3.5" fill="#386641" />
              <text x="48" y={item.y + 22} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="500" fill="#171D19">
                {item.label}
              </text>
              {/* Connector line to graph */}
              <line
                x1="190"
                y1={item.y + 17}
                x2="380"
                y2="210"
                stroke="#A3B18B"
                strokeWidth="1.2"
                strokeDasharray={idx % 2 === 0 ? "none" : "3 3"}
                opacity="0.65"
              />
            </g>
          ))}

          {/* Column 2: CENTRAL KNOWLEDGE GRAPH */}
          <g transform="translate(380, 100)" filter="url(#shadow)">
            <rect width="240" height="220" rx="20" fill="url(#kgGlow)" stroke="#BEECB9" strokeWidth="1.5" />
            <circle cx="120" cy="50" r="24" fill="#BEECB9" opacity="0.15" />
            <circle cx="120" cy="50" r="14" fill="#BEECB9" opacity="0.3" />
            <circle cx="120" cy="50" r="6" fill="#BEECB9" />

            <text x="120" y="100" fontFamily="Space Mono, monospace" fontSize="10" fontWeight="700" fill="#BEECB9" textAnchor="middle" letterSpacing="0.12em">
              MEDSPACE CORE
            </text>
            <text x="120" y="125" fontFamily="Newsreader, serif" fontSize="20" fontWeight="600" fill="#FDFBF7" textAnchor="middle">
              Clinical Knowledge
            </text>
            <text x="120" y="148" fontFamily="Newsreader, serif" fontSize="20" fontWeight="600" fill="#FDFBF7" textAnchor="middle">
              Graph Layer
            </text>

            <rect x="25" y="170" width="190" height="30" rx="6" fill="#002708" opacity="0.7" />
            <text x="120" y="189" fontFamily="Space Mono, monospace" fontSize="10" fill="#A0D39D" textAnchor="middle">
              Continuous Semantic Normalization
            </text>
          </g>

          {/* Column 3: OUTPUT CAPABILITIES */}
          <text x="870" y="32" fontFamily="Space Mono, monospace" fontSize="11" fontWeight="700" fill="#E07A5F" letterSpacing="0.1em" textAnchor="middle">
            OUTPUT CAPABILITIES
          </text>

          {[
            { label: "Verifiable Evidence Paths", sub: "[doc#chunk citations]", y: 64, color: "#E07A5F" },
            { label: "Longitudinal Clinical Context", sub: "360-degree patient timeline", y: 136, color: "#0F3E17" },
            { label: "Topological AI Reasoning", sub: "Multi-hop graph inference", y: 208, color: "#0F3E17" },
            { label: "Automated Clinical Actions", sub: "Nurse triage & coding alerts", y: 280, color: "#E07A5F" },
            { label: "Sovereign Audit Trails", sub: "100% mathematical provenance", y: 352, color: "#0F3E17" },
          ].map((out) => (
            <g key={out.label}>
              <line x1="620" y1="210" x2="770" y2={out.y + 24} stroke="#E07A5F" strokeWidth="1.2" opacity="0.6" />
              <rect x="770" y={out.y} width="210" height="48" rx="10" fill="#FFFFFF" stroke="#E5ECE4" strokeWidth="1" filter="url(#shadow)" />
              <circle cx="788" cy={out.y + 24} r="4" fill={out.color} />
              <text x="800" y={out.y + 21} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="600" fill="#171D19">
                {out.label}
              </text>
              <text x="800" y={out.y + 37} fontFamily="Space Mono, monospace" fontSize="10" fill="#526057">
                {out.sub}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* DEFINITION SECTION: What is MedSpace AI? */}
      <div className="bg-surface-cream rounded-3xl p-8 lg:p-12 border border-border-tactile grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block">
            Platform Definition
          </span>
          <h3 className="font-headline text-headline-xl text-forest-deep">
            What is <span className="italic text-terracotta-accent">MedSpace AI?</span>
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            MedSpace AI is a sovereign healthcare technology platform that connects clinical records, patient data, medical devices, and operational workflows through a governed clinical knowledge graph.
          </p>
          <p className="font-body-md text-body-md text-text-muted leading-relaxed">
            Rather than feeding sensitive records to generic large language models, MedSpace organizes healthcare information into an authenticated topological knowledge layer. Five modular products operate seamlessly on this foundation—either independently or as a unified enterprise suite.
          </p>
          <div className="pt-2">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group font-semibold"
            >
              <span>Explore the full MedSpace Platform</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-border-tactile">
            <span className="font-code-badge text-[11px] text-terracotta-accent font-bold uppercase block mb-1">
              01 &bull; Unified Graph
            </span>
            <p className="font-headline text-headline-sm text-forest-deep mb-1">Relational Fabric</p>
            <p className="font-body-sm text-body-sm text-text-muted">
              Connects patients, encounters, notes, and telemetry in one auditable graph.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-border-tactile">
            <span className="font-code-badge text-[11px] text-forest-deep font-bold uppercase block mb-1">
              02 &bull; Deterministic
            </span>
            <p className="font-headline text-headline-sm text-forest-deep mb-1">Source Attribution</p>
            <p className="font-body-sm text-body-sm text-text-muted">
              Every inference backed by exact node and source chunk citations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-border-tactile">
            <span className="font-code-badge text-[11px] text-forest-deep font-bold uppercase block mb-1">
              03 &bull; Modular
            </span>
            <p className="font-headline text-headline-sm text-forest-deep mb-1">Five Products</p>
            <p className="font-body-sm text-body-sm text-text-muted">
              Documentation, RPM, clinic operations, patient companion, and enterprise.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-border-tactile">
            <span className="font-code-badge text-[11px] text-terracotta-accent font-bold uppercase block mb-1">
              04 &bull; Sovereign
            </span>
            <p className="font-headline text-headline-sm text-forest-deep mb-1">Air-Gapped Ready</p>
            <p className="font-body-sm text-body-sm text-text-muted">
              Runs 100% on-premise or in private enclaves with zero cloud data egress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
