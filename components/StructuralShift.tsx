export default function StructuralShift() {
  return (
    <>
      <div className="max-w-3xl mb-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-forest-deep font-code-badge text-code-badge mb-3">
          THE STRUCTURAL SHIFT
        </span>
        <h2 className="font-headline text-headline-xl text-forest-deep tracking-tight">
          Instead of fragmented clinical silos, MedSpace provides one{" "}
          <span className="italic font-headline text-terracotta-accent">mathematically grounded</span> graph.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before */}
        <div className="p-6 rounded-xl bg-surface-container-lowest border border-border-tactile">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error-container/50 text-coral-alert font-code-badge text-code-badge mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-coral-alert"></span>
            FRAGMENTED
          </div>
          <ul className="space-y-3 text-text-muted font-body-sm">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-coral-alert flex-shrink-0"></span>EHR notes decoupled from RPM dashboards</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-coral-alert flex-shrink-0"></span>Faxed PDFs, voice mails, manual entry</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-coral-alert flex-shrink-0"></span>12+ hrs/week lost to context-switching</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-coral-alert flex-shrink-0"></span>Unanchored LLM = hallucination risk</li>
          </ul>
        </div>

        {/* After */}
        <div className="p-6 rounded-xl bg-surface-container-lowest border border-terracotta-accent/20 bg-terracotta-accent/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-accent/20 text-terracotta-accent font-code-badge text-code-badge mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-accent"></span>
            VERITASGRAPH
          </div>
          <ul className="space-y-3 text-forest-deep font-body-sm">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forest-deep flex-shrink-0"></span>One graph: notes, vitals, billing, patients</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forest-deep flex-shrink-0"></span>Every answer has exact source citation</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forest-deep flex-shrink-0"></span>Sub-second cross-validation</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forest-deep flex-shrink-0"></span>Air-gapped ready, zero cloud egress</li>
          </ul>
        </div>
      </div>
    </>
  );
}