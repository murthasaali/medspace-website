import Link from "next/link";

export default function ProductKnowledge() {
  return (
    <>
      {/* FIVE PRODUCTS */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="products">
        <div className="max-w-3xl mb-12">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">Product Suite</span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            Five products. One clinical knowledge layer.
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-4">
            Each product addresses a specific healthcare workflow. All products share a common clinical data and knowledge foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: MedScribe Graph */}
          <Link href="/products/medscribe" className="group bg-surface-container-lowest p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-wider mb-3">Clinical Documentation</span>
            <h3 className="font-headline text-headline-md text-forest-deep mb-2 group-hover:text-primary transition-colors">MedScribe Graph</h3>
            <p className="font-body-sm text-body-sm text-text-muted flex-1 mb-4">
              Ambient and dictated consultation workflows that convert clinical conversations into structured documentation and connected clinical data.
            </p>
            <span className="font-label-md text-label-md text-forest-deep group-hover:text-primary transition-colors inline-flex items-center gap-1">
              Explore MedScribe Graph <span>&rarr;</span>
            </span>
          </Link>

          {/* Card 2: VitalGraph */}
          <Link href="/products/vitalgraph" className="group bg-surface-container-lowest p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-wider mb-3">Remote Patient Monitoring</span>
            <h3 className="font-headline text-headline-md text-forest-deep mb-2 group-hover:text-primary transition-colors">VitalGraph</h3>
            <p className="font-body-sm text-body-sm text-text-muted flex-1 mb-4">
              Connect patient-generated and device data with clinical context to support monitoring, trends and clinician review.
            </p>
            <span className="font-label-md text-label-md text-forest-deep group-hover:text-primary transition-colors inline-flex items-center gap-1">
              Explore VitalGraph <span>&rarr;</span>
            </span>
          </Link>

          {/* Card 3: ClinicOps Graph */}
          <Link href="/products/clinicops" className="group bg-surface-container-lowest p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-wider mb-3">Clinic Operations</span>
            <h3 className="font-headline text-headline-md text-forest-deep mb-2 group-hover:text-primary transition-colors">ClinicOps Graph</h3>
            <p className="font-body-sm text-body-sm text-text-muted flex-1 mb-4">
              Scheduling, reminders, patient intake, AI-assisted communication and operational workflows for clinics.
            </p>
            <span className="font-label-md text-label-md text-forest-deep group-hover:text-primary transition-colors inline-flex items-center gap-1">
              Explore ClinicOps Graph <span>&rarr;</span>
            </span>
          </Link>

          {/* Card 4: PatientGraph Companion */}
          <Link href="/products/patientgraph" className="group bg-surface-container-lowest p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-wider mb-3">Patient Experience</span>
            <h3 className="font-headline text-headline-md text-forest-deep mb-2 group-hover:text-primary transition-colors">PatientGraph Companion</h3>
            <p className="font-body-sm text-body-sm text-text-muted flex-1 mb-4">
              A patient-facing health assistant for understanding health information, medication context and follow-up.
            </p>
            <span className="font-label-md text-label-md text-forest-deep group-hover:text-primary transition-colors inline-flex items-center gap-1">
              Explore PatientGraph Companion <span>&rarr;</span>
            </span>
          </Link>

          {/* Card 5: ClinicalKG Enterprise (wide) */}
          <Link href="/products/clinicalkg-enterprise" className="group md:col-span-2 bg-surface-matcha/40 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-wider mb-3">Enterprise Clinical Intelligence</span>
            <h3 className="font-headline text-headline-lg text-forest-deep mb-2 group-hover:text-primary transition-colors">ClinicalKG Enterprise</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-1 mb-4 max-w-2xl">
              A governed clinical knowledge graph platform for healthcare organizations, research and enterprise data workflows. Multi-hop queries, de-identification, and air-gapped deployment options.
            </p>
            <span className="font-label-md text-label-md text-forest-deep group-hover:text-primary transition-colors inline-flex items-center gap-1">
              Explore ClinicalKG Enterprise <span>&rarr;</span>
            </span>
          </Link>
        </div>
      </section>

      {/* SHARED KNOWLEDGE GRAPH VISUALIZATION */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="knowledge-graph">
        <div className="max-w-3xl mb-12">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">Architecture</span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            A shared clinical knowledge layer
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-4">
            The five products are connected through a common knowledge architecture. Healthcare data enters the graph, gets normalized, and flows to the appropriate product workflow.
          </p>
        </div>

        <div className="bg-surface-container-low rounded-3xl p-8 lg:p-12 overflow-hidden">
          <svg className="w-full h-auto" viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MedSpace architecture diagram showing healthcare data flowing through the clinical knowledge graph to product workflows">
            {/* Title */}
            <text x="450" y="30" textAnchor="middle" fill="#0F3E17" fontFamily="Space Mono, monospace" fontSize="11" fontWeight="700" letterSpacing="0.1em">ARCHITECTURE OVERVIEW</text>

            {/* Left column: Data Sources */}
            <text x="100" y="70" textAnchor="middle" fill="#526057" fontFamily="Space Mono, monospace" fontSize="10" letterSpacing="0.05em">DATA SOURCES</text>
            {["Patients", "Doctors", "Documents", "Labs", "Medications", "Devices", "Appointments", "Communications"].map((label, i) => (
              <g key={label}>
                <rect x="20" y={90 + i * 48} width="160" height="36" rx="8" fill="#FFFFFF" stroke="#E5ECE4" strokeWidth="1"/>
                <text x="100" y={113 + i * 48} textAnchor="middle" fill="#171D19" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13">{label}</text>
              </g>
            ))}

            {/* Lines from left to center */}
            {[0,1,2,3,4,5,6,7].map(i => (
              <line key={`l${i}`} x1="180" y1={108 + i * 48} x2="340" y2="260" stroke="#A3B18B" strokeWidth="1" opacity="0.5"/>
            ))}

            {/* Center: Knowledge Graph */}
            <rect x="340" y="180" width="220" height="160" rx="16" fill="#0F3E17"/>
            <text x="450" y="220" textAnchor="middle" fill="#BEECB9" fontFamily="Space Mono, monospace" fontSize="10" letterSpacing="0.1em">CLINICAL</text>
            <text x="450" y="240" textAnchor="middle" fill="#BEECB9" fontFamily="Space Mono, monospace" fontSize="10" letterSpacing="0.1em">KNOWLEDGE</text>
            <text x="450" y="260" textAnchor="middle" fill="#BEECB9" fontFamily="Space Mono, monospace" fontSize="10" letterSpacing="0.1em">GRAPH</text>
            <text x="450" y="290" textAnchor="middle" fill="#A3B18B" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11">Normalization</text>
            <text x="450" y="310" textAnchor="middle" fill="#A3B18B" fontFamily="Space Mono, monospace" fontSize="10">ICD-10 | SNOMED | RxNorm | LOINC</text>

            {/* Right column: Outputs */}
            <text x="780" y="70" textAnchor="middle" fill="#526057" fontFamily="Space Mono, monospace" fontSize="10" letterSpacing="0.05em">PRODUCT WORKFLOWS</text>
            {["MedScribe", "VitalGraph", "ClinicOps", "PatientGraph", "Enterprise"].map((label, i) => (
              <g key={label}>
                <rect x="680" y={90 + i * 56} width="200" height="40" rx="8" fill="#D9EBD7" stroke="#A3B18B" strokeWidth="1"/>
                <text x="780" y={115 + i * 56} textAnchor="middle" fill="#0F3E17" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="600">{label}</text>
              </g>
            ))}

            {/* Lines from center to right */}
            {[0,1,2,3,4].map(i => (
              <line key={`r${i}`} x1="560" y1="260" x2="680" y2={110 + i * 56} stroke="#A3B18B" strokeWidth="1" opacity="0.5"/>
            ))}

            {/* Bottom: Context outputs */}
            <text x="450" y="400" textAnchor="middle" fill="#526057" fontFamily="Space Mono, monospace" fontSize="10" letterSpacing="0.05em">OUTPUTS</text>
            {["Evidence", "Context", "Reasoning", "Actions"].map((label, i) => (
              <g key={label}>
                <rect x={260 + i * 110} y={415} width="100" height="32" rx="6" fill="#E07A5F" opacity="0.15" stroke="#E07A5F" strokeWidth="1"/>
                <text x={310 + i * 110} y={436} textAnchor="middle" fill="#E07A5F" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="500">{label}</text>
              </g>
            ))}
            <line x1="450" y1="340" x2="450" y2="415" stroke="#A3B18B" strokeWidth="1" opacity="0.5"/>
          </svg>
        </div>

        <div className="mt-6">
          <Link href="/platform/clinical-knowledge-graph" className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group">
            <span>How the clinical knowledge graph works</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
