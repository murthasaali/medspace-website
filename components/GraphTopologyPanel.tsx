export default function GraphTopologyPanel() {
  return (
    <section className="relative w-full px-6 lg:px-12 max-w-8xl mx-auto">
      <div className="relative w-full rounded-3xl bg-surface-container-low p-6 md:p-10 shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-surface-matcha/20 via-transparent to-surface-container/50 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 bg-surface-cream/80 px-4 py-2.5 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-forest-deep"></span>
              <span className="font-code-badge text-code-badge text-forest-deep font-semibold">GRAPH TOPOLOGY ACTIVE</span>
              <span className="text-text-muted">&bull;</span>
              <span className="font-code-badge text-code-badge text-text-muted">UUID: 0x8F9A-MED-2490</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-forest-deep font-code-badge text-code-badge font-bold">AUROC: 0.93 Decomp</span>
              <span className="px-2.5 py-0.5 rounded-full bg-terracotta-accent/15 text-terracotta-accent font-code-badge text-code-badge font-bold">AUROC: 0.83 PhysioNet</span>
            </div>
          </div>

          <div className="relative min-h-[380px] w-full flex flex-col justify-between py-4">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <line className="opacity-40 animate-pulse" stroke="#0F3E17" strokeDasharray="6 4" strokeWidth="2" x1="20%" x2="50%" y1="25%" y2="50%" />
              <line className="opacity-70" stroke="#E07A5F" strokeWidth="2.5" x1="80%" x2="50%" y1="25%" y2="50%" />
              <line className="opacity-50" stroke="#0F3E17" strokeWidth="2" x1="50%" x2="25%" y1="50%" y2="80%" />
              <line className="opacity-50" stroke="#406840" strokeWidth="2" x1="50%" x2="75%" y1="50%" y2="80%" />
            </svg>

            <div className="flex items-center justify-between z-10 px-4 md:px-12">
              <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm max-w-xs transition-transform hover:-translate-y-1 duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-code-badge text-code-badge text-forest-deep uppercase font-bold">PatientGraph 360</span>
                  <span className="w-2 h-2 rounded-full bg-forest-deep"></span>
                </div>
                <p className="font-headline text-headline-sm text-on-surface">Amara Vance, 68y</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-text-muted font-code-badge text-[10px]">ICD-10 I10</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-text-muted font-code-badge text-[10px]">HbA1c 7.9%</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm max-w-xs transition-transform hover:-translate-y-1 duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-code-badge text-code-badge text-terracotta-accent uppercase font-bold">VitalGraph RPM</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-terracotta-accent/20 text-terracotta-accent font-code-badge text-[10px] font-bold">STREAMING</span>
                </div>
                <p className="font-headline text-headline-sm text-on-surface">BP: 162/94 mmHg</p>
                <p className="font-body-sm text-body-sm text-text-muted mt-1">Cellular Cuff &bull; 4 min ago &bull; Pulse 88 bpm</p>
              </div>
            </div>

            <div className="self-center z-20 my-6">
              <div className="bg-forest-deep text-on-primary px-8 py-5 rounded-3xl shadow-xl flex flex-col items-center text-center transform scale-105">
                <span className="font-code-badge text-code-badge text-secondary-container tracking-wider uppercase mb-1">SOVEREIGN CORE</span>
                <h3 className="font-headline text-headline-md text-on-primary">VeritasGraph Engine</h3>
                <p className="font-body-sm text-body-sm text-surface-matcha mt-1 max-w-xs">
                  Deterministic Path Traversals &bull; Local Quantized Embedding &bull; Zero Hallucination
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary text-secondary-container font-code-badge text-code-badge">Lat: 18ms</span>
                  <span className="px-3 py-1 rounded-full bg-primary text-on-primary-fixed-variant font-code-badge text-code-badge">GPU: RTX 4090 Air-gapped</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between z-10 px-4 md:px-12">
              <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm max-w-xs transition-transform hover:-translate-y-1 duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-code-badge text-code-badge text-forest-deep uppercase font-bold">MedScribe Ambient</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary-container text-forest-deep">Signed</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface line-clamp-2">
                  &ldquo;Patient notes mild dizziness after morning Losartan dosage... titrate upward.&rdquo;
                </p>
                <span className="font-code-badge text-[11px] text-terracotta-accent block mt-1.5">[Doc#402: Exam 09/14]</span>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm max-w-xs transition-transform hover:-translate-y-1 duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-code-badge text-code-badge text-forest-deep uppercase font-bold">ClinicOps Action</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-surface-container text-text-muted">Auto-Queued</span>
                </div>
                <p className="font-headline text-headline-sm text-on-surface">Urgent Nurse Triage</p>
                <p className="font-body-sm text-body-sm text-text-muted mt-1">
                  Trigger: Combined SBP elevation + reported symptom correlation.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 bg-surface-cream/90 px-4 py-3 rounded-2xl">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-forest-deep text-[18px]">verified_user</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Mathematical provenance assert: All 4 edges corroborated by EHR timeline.</span>
            </div>
            <span className="font-code-badge text-code-badge text-forest-deep font-semibold">100% TRACEABLE AUDIT TRAIL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
