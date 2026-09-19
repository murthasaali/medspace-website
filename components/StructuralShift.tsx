export default function StructuralShift() {
  return (
    <>
      <div className="max-w-3xl mb-12">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-forest-deep font-code-badge text-code-badge mb-3">
          THE STRUCTURAL SHIFT
        </span>
        <h2 className="font-headline text-headline-xl text-forest-deep tracking-tight">
          Instead of fragmented clinical silos, MedSpace provides one{" "}
          <span className="italic font-headline text-terracotta-accent">mathematically grounded</span> graph.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta-accent/5 rounded-bl-full pointer-events-none"></div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error-container text-on-error-container font-code-badge text-code-badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-alert"></span>
              FRAGMENTED STATUS QUO
            </div>
            <h3 className="font-headline text-headline-lg text-on-surface mb-3">The Multi-Silo Tax</h3>
            <p className="font-body-md text-body-md text-text-muted mb-6">
              Clinicians waste 12+ hours weekly context-switching between decoupled EHR notes, disconnected cellular
              RPM dashboards, faxed PDF lab panels, and isolated phone voice mails.
            </p>
            <div className="space-y-3 mb-6">
              <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface">Unstructured Ambient Audio</span>
                <span className="font-code-badge text-[11px] text-coral-alert">No Provenance</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface">Orphaned Cellular RPM Feeds</span>
                <span className="font-code-badge text-[11px] text-coral-alert">Isolated Telemetry</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface">Legacy Billing &amp; Coding Engine</span>
                <span className="font-code-badge text-[11px] text-coral-alert">15% Denial Leakage</span>
              </div>
            </div>
          </div>
          <div className="pt-4 bg-surface-container-low/50 -mx-8 -mb-8 p-6">
            <span className="font-body-sm text-body-sm text-coral-alert font-semibold block">Risk Profile:</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              High hallucination hazard when piping unanchored documents into generic LLMs without graph traversal.
            </p>
          </div>
        </div>

        <div className="bg-surface-matcha/30 p-8 rounded-3xl shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/30 rounded-bl-full pointer-events-none"></div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-forest-deep font-code-badge text-code-badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-deep"></span>
              VERITASGRAPH UNIFIED ARCHITECTURE
            </div>
            <h3 className="font-headline text-headline-lg text-forest-deep mb-3">Governed Intelligence Fabric</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              A unified multi-relational clinical graph that mathematically binds bedside conversations, hardware
              vitals, and billing codes with zero third-party cloud data egress.
            </p>
            <div className="space-y-3 mb-6">
              <div className="p-3 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
                <span className="font-body-sm text-body-sm font-medium text-forest-deep">Sub-second Cross Validation</span>
                <span className="font-code-badge text-[11px] text-forest-deep font-bold">100% Verified</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
                <span className="font-body-sm text-body-sm font-medium text-forest-deep">Automated CPT &amp; ICD-10 Crosswalk</span>
                <span className="font-code-badge text-[11px] text-forest-deep font-bold">Audit-Ready</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
                <span className="font-body-sm text-body-sm font-medium text-forest-deep">Air-Gapped Sovereign Node</span>
                <span className="font-code-badge text-[11px] text-terracotta-accent font-bold">Zero Telemetry Egress</span>
              </div>
            </div>
          </div>
          <div className="pt-4 bg-secondary-container/40 -mx-8 -mb-8 p-6">
            <span className="font-body-sm text-body-sm text-forest-deep font-bold block">Deterministic Safety:</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Every clinical answer is accompanied by an exact graph span vector and source chunk citation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
