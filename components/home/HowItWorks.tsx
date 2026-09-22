const steps = [
  {
    num: "01",
    title: "Connect",
    icon: "sync_alt",
    description: "Ingest live EHR feeds, ambient audio, cellular devices, and clinical records via native FHIR R4 & HL7 v2 connectors.",
  },
  {
    num: "02",
    title: "Structure",
    icon: "account_tree",
    description: "Normalize free text, vitals, and documents into an authenticated topological clinical graph with ICD-10, SNOMED, and LOINC bindings.",
  },
  {
    num: "03",
    title: "Understand",
    icon: "psychology",
    description: "Traverse multi-hop relationships to detect drug interactions, chronic decompensation triggers, and verifiable evidence paths.",
  },
  {
    num: "04",
    title: "Act",
    icon: "task_alt",
    description: "Deliver signed clinical notes, RPM alerts, automated billing codes, and triage actions directly into clinician and patient workflows.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="how-it-works">
      <div className="max-w-3xl mb-12">
        <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
          Clinical Process
        </span>
        <h2 className="font-headline text-headline-xl text-forest-deep">
          From fragmented data to <span className="italic text-terracotta-accent">deterministic context.</span>
        </h2>
        <p className="font-body-md text-body-md text-text-muted mt-3">
          How raw patient data is ingested, normalized, verified, and translated into immediate clinical action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-surface-container-lowest p-7 rounded-3xl shadow-sm border border-border-tactile flex flex-col justify-between hover:shadow-md transition-shadow group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-code-badge text-headline-md font-bold text-terracotta-accent">
                  {step.num}
                </span>
                <span className="w-9 h-9 rounded-xl bg-surface-matcha/40 flex items-center justify-center text-forest-deep group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                </span>
              </div>
              <h3 className="font-headline text-headline-md text-forest-deep mb-2">
                {step.title}
              </h3>
              <p className="font-body-sm text-body-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border-tactile">
              <span className="font-code-badge text-[11px] text-forest-deep font-semibold uppercase tracking-wider">
                Step {step.num} &bull; VeritasGraph
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
