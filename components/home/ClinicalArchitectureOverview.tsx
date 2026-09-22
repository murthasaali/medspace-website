import Link from "next/link";

export default function ClinicalArchitectureOverview() {
  return (
    <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="architecture">
      {/* Eyebrow & Headline */}
      <div className="max-w-3xl mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-forest-deep font-code-badge text-code-badge mb-3">
          <span className="w-2 h-2 rounded-full bg-terracotta-accent"></span>
          PLATFORM FOUNDATION
        </span>
        <h2 className="font-headline text-headline-xl text-forest-deep tracking-tight">
          What is <span className="italic font-headline text-terracotta-accent">MedSpace AI?</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
          Healthcare data is fractured across EHRs, devices, and manual notes. MedSpace AI organizes it into a single governed clinical knowledge layer — maintaining active relationships between clinicians, patients, documents, and real-time telemetry.
        </p>
      </div>

      {/* Definition panel + 4 attribute cards */}
      <div className="bg-surface-cream rounded-3xl p-8 lg:p-12 border border-border-tactile grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            MedSpace AI is a sovereign healthcare technology platform that connects clinical records, patient data, medical devices, and operational workflows through a governed clinical knowledge graph.
          </p>
          <p className="font-body-md text-body-md text-text-muted leading-relaxed">
            Rather than feeding sensitive records to generic large language models, MedSpace organizes healthcare information into an authenticated topological knowledge layer. Five modular products operate seamlessly on this foundation — either independently or as a unified enterprise suite.
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
