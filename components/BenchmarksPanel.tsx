export default function BenchmarksPanel() {
  return (
    <section className="w-full py-20 px-6 lg:px-12 max-w-8xl mx-auto">
      <div className="bg-forest-deep text-on-primary rounded-3xl p-8 lg:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="font-code-badge text-code-badge text-secondary-container tracking-wider uppercase block mb-2">SCIENTIFIC VALIDATION</span>
            <h3 className="font-headline text-headline-lg text-on-primary mb-3">
              Peer-Reviewed Performance Benchmarks
            </h3>
            <p className="font-body-md text-body-md text-surface-matcha">
              Our multi-relational topological models have been evaluated on standardized clinical benchmarks against standard medical LLM approaches.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-primary p-5 rounded-2xl">
              <span className="font-headline text-headline-xl text-secondary-container font-bold block">0.83</span>
              <span className="font-label-sm text-label-sm text-on-primary block mt-1">AUROC &bull; PhysioNet 2012</span>
              <span className="font-code-badge text-[11px] text-surface-matcha/80 mt-1 block">In-Hospital Mortality Prediction</span>
            </div>
            <div className="bg-primary p-5 rounded-2xl">
              <span className="font-headline text-headline-xl text-terracotta-accent font-bold block">0.93</span>
              <span className="font-label-sm text-label-sm text-on-primary block mt-1">AUROC &bull; EHR Longitudinal</span>
              <span className="font-code-badge text-[11px] text-surface-matcha/80 mt-1 block">Chronic Decompensation Triggers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
