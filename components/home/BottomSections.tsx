import Link from "next/link";

export default function BottomSections() {
  return (
    <>
      {/* SECURITY & TRUST */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="security">
        <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">Trust</span>
        <h2 className="font-headline text-headline-xl text-forest-deep mb-12">Built for healthcare data.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Data Governance", "De-identification", "Role-Based Access", "Audit Trails", "Deployment Control", "Model Governance", "Evidence Attribution", "Data Boundaries"].map((topic) => (
            <Link key={topic} href="/security" className="group block p-5 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-forest-deep text-[24px] mb-2 block">security</span>
              <h3 className="font-label-md text-label-md text-forest-deep group-hover:text-primary transition-colors">{topic}</h3>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/security" className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group">
            <span>Security & compliance</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto bg-surface-cream" id="evidence">
        <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">Evidence</span>
        <h2 className="font-headline text-headline-xl text-forest-deep mb-6">Evidence and clinical AI research</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-12">
          MedSpace AI documents its underlying technology, research methodology and evaluation processes. We believe clinical AI systems should be transparent about their capabilities, limitations and the evidence supporting them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Research publications",
            "Benchmarks & evaluation",
            "Evaluation methodology",
            "Technical papers",
            "Clinical AI safety",
            "Knowledge graph methodology"
          ].map((topic) => (
            <Link key={topic} href="/evidence" className="group block p-6 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
              <h3 className="font-headline text-headline-sm text-forest-deep group-hover:text-primary transition-colors">{topic}</h3>
              <p className="font-body-sm text-body-sm text-text-muted mt-1">View documentation</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/evidence" className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group">
            <span>View all evidence</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* HEALTHCARE AI KNOWLEDGE */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="resources">
        <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">Resources</span>
        <h2 className="font-headline text-headline-xl text-forest-deep mb-12">Healthcare AI knowledge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "What is a Clinical Knowledge Graph?", href: "/resources/guides", category: "Guide" },
            { title: "How Clinical AI Documentation Works", href: "/resources/guides", category: "Guide" },
            { title: "FHIR and Healthcare Interoperability", href: "/resources/guides", category: "Guide" },
            { title: "Remote Patient Monitoring Explained", href: "/resources/guides", category: "Guide" },
            { title: "GraphRAG in Healthcare", href: "/resources/research", category: "Research" },
            { title: "AI Governance for Clinical Systems", href: "/resources/guides", category: "Guide" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="group block p-6 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex flex-col h-full">
              <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-wider mb-2">{item.category}</span>
              <h3 className="font-headline text-headline-sm text-forest-deep group-hover:text-primary transition-colors mb-2">{item.title}</h3>
              <span className="font-label-md text-label-md text-forest-deep group-hover:text-primary transition-colors inline-flex items-center gap-1 mt-auto">Read guide <span>&rarr;</span></span>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/resources" className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group">
            <span>All resources</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto bg-surface-cream" id="blog">
        <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">Blog</span>
        <h2 className="font-headline text-headline-xl text-forest-deep mb-12">From the MedSpace research desk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { category: "Research", title: "[Title pending publication]", summary: "Summary will be added when article is published.", author: "[Author name]", date: "2024" },
            { category: "Guide", title: "[Title pending publication]", summary: "Summary will be added when article is published.", author: "[Author name]", date: "2024" },
            { category: "Research", title: "[Title pending publication]", summary: "Summary will be added when article is published.", author: "[Author name]", date: "2024" },
          ].map((article, i) => (
            <article key={i} className="bg-surface-container-lowest p-6 rounded-2xl border border-border-tactile">
              <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-wider">{article.category}</span>
              <h3 className="font-headline text-headline-sm text-forest-deep mt-2 mb-2">{article.title}</h3>
              <p className="font-body-sm text-body-sm text-text-muted mb-3">{article.summary}</p>
              <div className="flex items-center justify-between text-xs text-text-muted mb-3">
                <span>{article.author}</span>
                <time dateTime={article.date}>{article.date}</time>
              </div>
              <Link href="/resources/blog" className="font-label-md text-label-md text-forest-deep hover:text-primary transition-colors inline-flex items-center gap-1">Read article <span>&rarr;</span></Link>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/resources/blog" className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group">
            <span>All articles</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="faq">
        <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">FAQ</span>
        <h2 className="font-headline text-headline-xl text-forest-deep mb-12">Frequently asked questions</h2>
        <div className="max-w-3xl space-y-4">
          {[
            { q: "What is MedSpace AI?", a: "MedSpace AI is a healthcare technology platform that connects clinical data, patient information, medical devices and healthcare workflows through a governed clinical knowledge graph. Its five products support clinical documentation, remote patient monitoring, clinic operations, patient engagement and enterprise clinical intelligence.", link: "/platform" },
            { q: "What is a clinical knowledge graph?", a: "A clinical knowledge graph is a structured representation of healthcare information that maintains relationships between patients, clinicians, documents, devices, medications and clinical events. It enables contextual reasoning across disconnected healthcare data sources.", link: "/platform/clinical-knowledge-graph" },
            { q: "What products does MedSpace AI offer?", a: "MedSpace AI offers five products: MedScribe Graph (clinical documentation), VitalGraph (remote patient monitoring), ClinicOps Graph (clinic operations), PatientGraph Companion (patient engagement) and ClinicalKG Enterprise (enterprise clinical intelligence).", link: "/products" },
            { q: "What is MedScribe Graph?", a: "MedScribe Graph converts clinical conversations into structured documentation and connected clinical data. It supports ambient and dictated consultation workflows with structured output and source attribution.", link: "/products/medscribe" },
            { q: "What is VitalGraph?", a: "VitalGraph connects patient-generated and device data with clinical context to support monitoring, trend analysis and clinician review.", link: "/products/vitalgraph" },
            { q: "What is ClinicOps Graph?", a: "ClinicOps Graph handles scheduling, reminders, patient intake, AI-assisted communication and operational workflows for clinics.", link: "/products/clinicops" },
            { q: "What is PatientGraph Companion?", a: "PatientGraph Companion is a patient-facing health assistant that helps individuals understand health information, medication context and follow-up instructions.", link: "/products/companion" },
            { q: "What is ClinicalKG Enterprise?", a: "ClinicalKG Enterprise is a governed clinical knowledge graph platform for healthcare organizations, research and enterprise data workflows with multi-hop queries and de-identification.", link: "/products/enterprise" },
            { q: "How does MedSpace AI connect healthcare data?", a: "MedSpace AI normalizes healthcare data using standard terminologies (ICD-10, SNOMED, RxNorm, LOINC) and connects it within a clinical knowledge graph that maintains relationships between all entities.", link: "/platform/data-normalization" },
            { q: "Does MedSpace AI integrate with FHIR and HL7?", a: "Yes. MedSpace AI supports FHIR R4, HL7 v2, CSV, PDF and REST API integrations for healthcare data exchange.", link: "/integrations" },
            { q: "Can MedSpace AI run on-premise?", a: "Yes. MedSpace AI supports cloud, hybrid and on-premise/air-gapped deployment models depending on organizational data requirements.", link: "/security" },
            { q: "How does MedSpace AI handle sensitive healthcare information?", a: "MedSpace AI implements data governance, role-based access control, audit trails, de-identification and configurable deployment boundaries. See the security section for details.", link: "/security" },
            { q: "Is MedSpace AI a medical diagnosis system?", a: "No. MedSpace AI is designed to support healthcare workflows and decision-making. It does not replace qualified healthcare professionals or emergency medical services.", link: "/evidence" },
          ].map((faq, i) => (
            <details key={i} className="group bg-surface-container-lowest rounded-xl p-5 border border-border-tactile">
              <summary className="font-headline text-headline-sm text-forest-deep cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="material-symbols-outlined text-forest-deep transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="font-body-md text-body-md text-on-surface-variant mt-3 pt-3 border-t border-border-tactile">
                <p>{faq.a}</p>
                <Link href={faq.link} className="inline-flex items-center gap-1 mt-2 font-label-md text-label-md text-forest-deep hover:text-primary transition-colors">
                  Learn more <span>&rarr;</span>
                </Link>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto bg-surface-cream" id="about">
        <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">Company</span>
        <h2 className="font-headline text-headline-xl text-forest-deep mb-6">About MedSpace AI</h2>
        <div className="max-w-3xl font-body-lg text-body-lg text-on-surface-variant space-y-4">
          <p>MedSpace AI builds healthcare technology that connects clinical data, patient information, medical devices and healthcare workflows through a governed clinical knowledge graph.</p>
          <p>Our platform serves clinicians, clinics, hospitals, health systems and researchers who need structured, connected healthcare data for documentation, monitoring, operations and patient engagement.</p>
          <p>We focus on clinical knowledge graphs, healthcare interoperability, evidence-based AI and deployment models that respect organizational data boundaries.</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/company/about" className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group">About us <span className="transition-transform group-hover:translate-x-1">&rarr;</span></Link>
          <Link href="/company/team" className="inline-flex items-center gap-2 font-label-lg text-label-lg text-forest-deep hover:text-primary transition-colors group">Our team <span className="transition-transform group-hover:translate-x-1">&rarr;</span></Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="contact">
        <h2 className="font-headline text-headline-xl text-forest-deep mb-4">Discuss a healthcare AI workflow</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">Tell us about the clinical, operational or data workflow you are working to improve.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/company/contact" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-forest-deep text-on-primary font-label-lg text-label-lg hover:bg-primary shadow-sm transition-all gap-2 group">
            <span>Talk to MedSpace AI</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
          <Link href="/platform" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-surface-cream text-forest-deep font-label-lg text-label-lg hover:bg-surface-container transition-colors shadow-sm border border-border-tactile">
            <span>Explore the platform</span>
          </Link>
        </div>
      </section>
    </>
  );
}
