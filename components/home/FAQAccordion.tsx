const faqs = [
  {
    q: "What is MedSpace AI?",
    a: "MedSpace AI is a healthcare technology platform that connects clinical data, patient information, medical devices, and healthcare workflows through a governed clinical knowledge graph. Its five products support clinical documentation, remote patient monitoring, clinic operations, patient engagement, and enterprise clinical intelligence.",
  },
  {
    q: "What products does MedSpace AI offer?",
    a: "MedSpace AI offers five specialized clinical products: MedScribe Graph (ambient documentation), VitalGraph (remote patient monitoring), ClinicOps Graph (clinic operations & scheduling), PatientGraph Companion (patient engagement), and ClinicalKG Enterprise (governed enterprise intelligence).",
  },
  {
    q: "Can MedSpace AI run completely on-premise or air-gapped?",
    a: "Yes. MedSpace AI supports cloud, hybrid, and on-premise/air-gapped deployment models depending on organizational data requirements.",
  },
  {
    q: "Does MedSpace AI integrate with FHIR and HL7?",
    a: "Yes. MedSpace AI supports FHIR R4, HL7 v2, CSV, PDF, and REST API integrations for healthcare data exchange.",
  },
  {
    q: "How does MedSpace AI handle sensitive healthcare information?",
    a: "MedSpace AI implements data governance, role-based access control, audit trails, de-identification, and configurable deployment boundaries. Institutional data never leaves hospital servers in on-premise mode.",
  },
  {
    q: "What is a clinical knowledge graph?",
    a: "A clinical knowledge graph is a structured representation of healthcare information that maintains relationships between patients, clinicians, documents, devices, medications and clinical events. It enables contextual reasoning across disconnected healthcare data sources.",
  },
  {
    q: "Is MedSpace AI a medical diagnosis system?",
    a: "No. MedSpace AI is designed as a clinical intelligence and workflow acceleration platform to support clinician decision-making. It does not replace qualified healthcare professionals or emergency medical services.",
  },
];

export default function FAQAccordion() {
  return (
    <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="faq">
      <div className="max-w-3xl mb-12">
        <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
          Frequently Asked Questions
        </span>
        <h2 className="font-headline text-headline-xl text-forest-deep">
          Answers to common questions about <span className="italic text-terracotta-accent">MedSpace AI.</span>
        </h2>
        <p className="font-body-md text-body-md text-text-muted mt-3">
          Understand how our clinical graph architecture operates and connects to existing systems.
        </p>
      </div>

      <div className="max-w-4xl space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group bg-surface-container-lowest rounded-2xl p-6 border border-border-tactile shadow-sm transition-all open:shadow-md"
          >
            <summary className="font-headline text-headline-sm text-forest-deep cursor-pointer list-none flex items-center justify-between gap-4 select-none">
              <span className="group-hover:text-primary transition-colors">{faq.q}</span>
              <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-forest-deep flex-shrink-0 transition-transform duration-200 group-open:rotate-180">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </span>
            </summary>
            <div className="font-body-md text-body-md text-on-surface-variant mt-4 pt-4 border-t border-border-tactile leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
