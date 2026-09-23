import Link from "next/link";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Products: [
    { label: "MedScribe Graph", href: "/products/medscribe" },
    { label: "VitalGraph", href: "/products/vitalgraph" },
    { label: "ClinicOps Graph", href: "/products/clinicops" },
    { label: "PatientGraph Companion", href: "/products/patientgraph" },
    { label: "ClinicalKG Enterprise", href: "/products/clinicalkg-enterprise" },
  ],
  Platform: [
    { label: "Clinical Knowledge Graph", href: "/platform/clinical-knowledge-graph" },
    { label: "GraphRAG", href: "/platform/graphrag" },
    { label: "Integrations", href: "/integrations/fhir" },
    { label: "Security", href: "/security" },
    { label: "Deployment", href: "/platform/ai-reasoning" },
    { label: "Evidence", href: "/evidence" },
  ],
  Resources: [
    { label: "Blog", href: "/resources/blog" },
    { label: "Research", href: "/resources/research" },
    { label: "Guides", href: "/resources/guides" },
    { label: "Documentation", href: "/resources/documentation" },
    { label: "Case Studies", href: "/resources/case-studies" },
  ],
  Company: [
    { label: "About", href: "/company/about" },
    { label: "Team", href: "/company/team" },
    { label: "Careers", href: "/company/careers" },
    { label: "Contact", href: "/company/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-surface-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <span className="w-6 h-6 rounded bg-forest-deep text-on-primary flex items-center justify-center font-headline text-headline-sm">
                M
              </span>
              <span className="font-headline text-headline-md text-forest-deep group-hover:text-primary transition-colors">
                MedSpace AI
              </span>
            </Link>
            <p className="font-body-sm text-body-sm text-text-muted max-w-sm mb-6">
              A healthcare technology platform that connects clinical data, patient information, medical devices and
              healthcare workflows through a governed clinical knowledge graph.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-badge text-code-badge">
                EHR Agnostic
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-badge text-code-badge">
                ONC Certified
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-label-md text-label-md text-forest-deep uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5 font-body-sm text-body-sm">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-on-surface-variant hover:text-forest-deep transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border-tactile">
          <p className="font-body-sm text-body-sm text-text-muted mb-4 md:mb-0">
            &copy; 2026 MedSpace AI. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-badge text-code-badge">
              HIPAA-COMPLIANT
            </span>
            <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-badge text-code-badge">
              ISO-27001
            </span>
            <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-badge text-code-badge">
              SOC 2 TYPE II
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
