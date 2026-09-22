import Link from "next/link";

export default function HeroDefinition() {
  return (
    <>
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative w-full overflow-hidden bg-surface-porcelain">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28">
          {/* Eyebrow */}
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest">
            MEDSPACE AI
          </span>

          {/* H1 */}
          <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight mt-4 max-w-4xl">
            Clinical intelligence, connected.
          </h1>

          {/* Supporting paragraph - key SEO definition */}
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-3xl">
            MedSpace AI connects clinical data, patient context, medical devices
            and healthcare workflows through a governed clinical knowledge graph.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              href="/products"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-forest-deep text-on-primary font-label-lg text-label-lg hover:bg-primary shadow-sm transition-all gap-2 group"
            >
              <span>Explore Products</span>
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-surface-cream text-forest-deep font-label-lg text-label-lg hover:bg-surface-container transition-colors shadow-sm border border-border-tactile"
            >
              <span>Talk to MedSpace AI</span>
            </Link>
          </div>

          {/* Medical safety disclaimer */}
          <p className="font-body-sm text-body-sm text-text-muted mt-8 max-w-2xl border-l-2 border-sage-muted pl-4">
            MedSpace AI is designed to support healthcare workflows and decision-making. It does not replace qualified healthcare professionals or emergency medical services.
          </p>
        </div>
      </section>

      {/* ─── SECTION 2: HERO VISUAL - Architecture Diagram ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-3xl p-8 lg:p-12 overflow-hidden">
          <svg
            viewBox="0 0 1000 400"
            className="w-full h-auto"
            role="img"
            aria-label="MedSpace AI architecture diagram showing data flowing from clinical inputs through the clinical knowledge graph to actionable outputs"
          >
            {/* ── Left side: Inputs ── */}
            {/* Patients */}
            <line x1="180" y1="50" x2="420" y2="180" stroke="#526057" strokeWidth="1.5" opacity="0.5" />
            <circle cx="120" cy="50" r="6" fill="#526057" opacity="0.6" />
            <text x="136" y="55" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#526057">
              Patients
            </text>

            {/* Doctors */}
            <line x1="180" y1="90" x2="420" y2="195" stroke="#526057" strokeWidth="1.5" opacity="0.5" />
            <circle cx="120" cy="90" r="6" fill="#526057" opacity="0.6" />
            <text x="136" y="95" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#526057">
              Doctors
            </text>

            {/* Clinical Records */}
            <line x1="180" y1="130" x2="420" y2="210" stroke="#526057" strokeWidth="1.5" opacity="0.5" />
            <circle cx="120" cy="130" r="6" fill="#526057" opacity="0.6" />
            <text x="136" y="135" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#526057">
              Clinical Records
            </text>

            {/* Labs */}
            <line x1="180" y1="170" x2="420" y2="215" stroke="#526057" strokeWidth="1.5" opacity="0.5" />
            <circle cx="120" cy="170" r="6" fill="#526057" opacity="0.6" />
            <text x="136" y="175" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#526057">
              Labs
            </text>

            {/* Medications */}
            <line x1="180" y1="210" x2="420" y2="225" stroke="#526057" strokeWidth="1.5" opacity="0.5" />
            <circle cx="120" cy="210" r="6" fill="#526057" opacity="0.6" />
            <text x="136" y="215" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#526057">
              Medications
            </text>

            {/* Medical Devices */}
            <line x1="180" y1="250" x2="420" y2="235" stroke="#526057" strokeWidth="1.5" opacity="0.5" />
            <circle cx="120" cy="250" r="6" fill="#526057" opacity="0.6" />
            <text x="136" y="255" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#526057">
              Medical Devices
            </text>

            {/* Appointments */}
            <line x1="180" y1="290" x2="420" y2="245" stroke="#526057" strokeWidth="1.5" opacity="0.5" />
            <circle cx="120" cy="290" r="6" fill="#526057" opacity="0.6" />
            <text x="136" y="295" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#526057">
              Appointments
            </text>

            {/* Patient Communications */}
            <line x1="180" y1="330" x2="420" y2="255" stroke="#526057" strokeWidth="1.5" opacity="0.5" />
            <circle cx="120" cy="330" r="6" fill="#526057" opacity="0.6" />
            <text x="136" y="335" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#526057">
              Patient Communications
            </text>

            {/* ── Center: Clinical Knowledge Graph ── */}
            <rect
              x="420"
              y="160"
              width="220"
              height="120"
              rx="12"
              fill="#0F3E17"
              opacity="0.95"
            />
            <text
              x="530"
              y="210"
              fontFamily="Newsreader, serif"
              fontSize="15"
              fontWeight="600"
              fill="#FDFBF7"
              textAnchor="middle"
            >
              MEDSPACE
            </text>
            <text
              x="530"
              y="232"
              fontFamily="Newsreader, serif"
              fontSize="15"
              fontWeight="600"
              fill="#FDFBF7"
              textAnchor="middle"
            >
              CLINICAL
            </text>
            <text
              x="530"
              y="254"
              fontFamily="Newsreader, serif"
              fontSize="15"
              fontWeight="600"
              fill="#FDFBF7"
              textAnchor="middle"
            >
              KNOWLEDGE GRAPH
            </text>

            {/* ── Right side: Outputs ── */}
            {/* Evidence */}
            <line x1="640" y1="190" x2="780" y2="90" stroke="#E07A5F" strokeWidth="1.5" opacity="0.6" />
            <circle cx="800" cy="90" r="6" fill="#E07A5F" opacity="0.8" />
            <text x="816" y="95" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#E07A5F" fontWeight="500">
              Evidence
            </text>

            {/* Context */}
            <line x1="640" y1="210" x2="780" y2="170" stroke="#E07A5F" strokeWidth="1.5" opacity="0.6" />
            <circle cx="800" cy="170" r="6" fill="#E07A5F" opacity="0.8" />
            <text x="816" y="175" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#E07A5F" fontWeight="500">
              Context
            </text>

            {/* Reasoning */}
            <line x1="640" y1="230" x2="780" y2="250" stroke="#E07A5F" strokeWidth="1.5" opacity="0.6" />
            <circle cx="800" cy="250" r="6" fill="#E07A5F" opacity="0.8" />
            <text x="816" y="255" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#E07A5F" fontWeight="500">
              Reasoning
            </text>

            {/* Actions */}
            <line x1="640" y1="245" x2="780" y2="330" stroke="#E07A5F" strokeWidth="1.5" opacity="0.6" />
            <circle cx="800" cy="330" r="6" fill="#E07A5F" opacity="0.8" />
            <text x="816" y="335" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fill="#E07A5F" fontWeight="500">
              Actions
            </text>

            {/* Subtle input label */}
            <text x="120" y="15" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="#526057" opacity="0.6" letterSpacing="0.1em">
              INPUTS
            </text>

            {/* Subtle output label */}
            <text x="800" y="55" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="#E07A5F" opacity="0.6" textAnchor="middle" letterSpacing="0.1em">
              OUTPUTS
            </text>
          </svg>
        </div>
      </section>

      {/* ─── SECTION 3: DEFINITION - What is MedSpace AI? ─── */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="font-headline text-headline-xl text-forest-deep mb-6">
            What is MedSpace AI?
          </h2>
          <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4">
            <p>
              MedSpace AI is a healthcare technology platform that connects clinical
              records, patient data, medical devices and healthcare workflows through
              a governed clinical knowledge graph. Its product suite supports clinical
              documentation, remote patient monitoring, clinic operations, patient
              engagement and enterprise clinical intelligence.
            </p>
            <p>
              The platform organizes healthcare information into a structured knowledge
              layer that maintains relationships between patients, clinicians, documents,
              devices, medications and clinical events. Five products operate on this
              shared knowledge foundation, either independently or as an integrated
              suite.
            </p>
          </div>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 mt-6 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group"
          >
            <span>Explore the MedSpace Platform</span>
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
