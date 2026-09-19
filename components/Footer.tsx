import Link from "next/link";

const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "MedScribe", href: "/products/medscribe" },
      { label: "VitalGraph RPM", href: "/products/vitalgraph" },
      { label: "ClinicOps", href: "/products/clinicops" },
      { label: "PatientGraph", href: "/products/patientgraph" },
      { label: "ClinicalKG Enterprise", href: "/products/clinicalkg-enterprise" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Clinical Documentation", href: "/solutions/clinical-documentation" },
      { label: "Remote Patient Monitoring", href: "/solutions/remote-patient-monitoring" },
      { label: "Clinic Operations", href: "/solutions/clinic-operations" },
      { label: "Patient Engagement", href: "/solutions/patient-engagement" },
      { label: "Clinical Research", href: "/solutions/clinical-research" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Clinical Knowledge Graph", href: "/platform/clinical-knowledge-graph" },
      { label: "GraphRAG", href: "/platform/graphrag" },
      { label: "AI Reasoning", href: "/platform/ai-reasoning" },
      { label: "Evidence & Citations", href: "/platform/evidence-citations" },
      { label: "APIs", href: "/platform/apis" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Team", href: "/company/team" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded bg-forest-deep text-on-primary flex items-center justify-center font-headline text-headline-sm">M</span>
              <span className="font-headline text-headline-md text-forest-deep">MedSpace AI</span>
            </Link>
            <p className="font-body-sm text-body-sm text-text-muted max-w-sm mb-6">
              Tactile clinical intelligence architecture built for ambient documentation, autonomous ICD-10 codification, and bedside inference without cloud telemetry exposure.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-badge text-code-badge">EHR Agnostic</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-badge text-code-badge">ONC Certified</span>
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-label-md text-label-md text-forest-deep uppercase tracking-wider mb-4">{col.title}</h3>
              <ul className="space-y-2.5 font-body-sm text-body-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-on-surface-variant hover:text-forest-deep transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border-tactile">
          <p className="font-body-sm text-body-sm text-text-muted mb-4 md:mb-0">&copy; 2026 MedSpace AI. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-badge text-code-badge">HIPAA-COMPLIANT</span>
            <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-badge text-code-badge">ISO-27001</span>
            <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-badge text-code-badge">SOC 2 TYPE II</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
