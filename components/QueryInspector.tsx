"use client";

export default function QueryInspector() {
  return (
    <section className="w-full bg-surface-cream py-20 px-6 lg:px-12" id="graph-inspector">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-forest-deep font-code-badge text-code-badge mb-3">
            VERITASGRAPH&trade; ZERO-HALLUCINATION MOAT
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            Every Clinical Answer Backed by <span className="italic text-terracotta-accent">Span-Level Provenance</span>
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-3">
            Generic LLMs produce hallucinated assertions. MedSpace performs mathematical topological walks over authenticated patient nodes.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-10 shadow-md max-w-5xl mx-auto">
          <div className="bg-surface-container-low p-4 rounded-2xl flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-forest-deep text-[22px]">psychology</span>
            <div className="flex-1 font-headline text-headline-sm text-on-surface">
              &ldquo;Why was patient Amara Vance flagged for immediate clinical reassessment?&rdquo;
            </div>
            <span className="px-3 py-1 rounded-full bg-forest-deep text-on-primary font-code-badge text-[11px]">
              Inference: 14ms
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-forest-deep"></span>
                  <span className="font-label-md text-label-md text-forest-deep uppercase tracking-wider">Synthesized Clinical Answer</span>
                </div>
                <div className="font-body-lg text-body-lg text-on-surface leading-relaxed space-y-4">
                  <p>
                    The patient has demonstrated a combined hemodynamic and metabolic deterioration pattern. Systolic blood pressure exceeded safe target thresholds{" "}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-terracotta-accent/15 text-terracotta-accent font-code-badge text-[12px] font-bold cursor-pointer hover:bg-terracotta-accent/25 transition-colors">
                      [Stream#05: BP 162/94 mmHg &bull; 08:14 AM]
                    </span>, while continuous glucometry recorded consecutive fasting spikes over 190 mg/dL.
                  </p>
                  <p>
                    Crucially, this correlates with the clinician&apos;s recent adjustment notes where dizziness was reported under elevated dosage{" "}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container text-forest-deep font-code-badge text-[12px] font-bold cursor-pointer hover:bg-secondary-container/80 transition-colors">
                      [Doc#402: SOAP Note &bull; Dr. Chen 14-Sep]
                    </span>. Automated conflict detection identified a concurrent beta-blocker interaction.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-sage-subtle flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-forest-deep text-[24px]">verified</span>
                  <div>
                    <span className="font-headline text-headline-sm text-forest-deep block leading-tight">AUROC 0.95 Asserted</span>
                    <span className="font-code-badge text-[11px] text-text-muted">Sha256: e8c4...3b21 verified against local disk node</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container text-forest-deep font-code-badge text-code-badge font-semibold">
                  Zero Hallucination
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-cream rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-wider block mb-4">
                  Graph Traversal Walk (Depth: 3 hops)
                </span>
                <div className="space-y-4 relative">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-forest-deep text-on-primary flex items-center justify-center font-code-badge text-[11px] shrink-0 mt-0.5">1</div>
                    <div className="bg-surface-container-lowest p-3 rounded-xl flex-1 shadow-sm">
                      <span className="font-code-badge text-[10px] text-forest-deep font-bold uppercase">Root Node</span>
                      <p className="font-body-sm text-body-sm font-medium text-on-surface">Patient: Amara Vance (MRN 88301)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-terracotta-accent text-on-primary flex items-center justify-center font-code-badge text-[11px] shrink-0 mt-0.5">2</div>
                    <div className="bg-surface-container-lowest p-3 rounded-xl flex-1 shadow-sm">
                      <span className="font-code-badge text-[10px] text-terracotta-accent font-bold uppercase">Hardware Event</span>
                      <p className="font-body-sm text-body-sm font-medium text-on-surface">RPM Cellular Reading: BP 162/94</p>
                      <span className="font-code-badge text-[10px] text-text-muted">Edge Weight: 0.98</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-secondary text-on-primary flex items-center justify-center font-code-badge text-[11px] shrink-0 mt-0.5">3</div>
                    <div className="bg-surface-container-lowest p-3 rounded-xl flex-1 shadow-sm">
                      <span className="font-code-badge text-[10px] text-forest-deep font-bold uppercase">Clinical Note Assertion</span>
                      <p className="font-body-sm text-body-sm font-medium text-on-surface">SOAP Chunk #402: Symptom Match</p>
                      <span className="font-code-badge text-[10px] text-text-muted">Confidence: 99.4%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-low/60 rounded-xl p-3 flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-text-muted">Deterministic Path</span>
                <span className="font-code-badge text-code-badge text-forest-deep font-bold">100% EXPLAINABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
