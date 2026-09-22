import Link from "next/link";

const useCases = [
  {
    title: "Clinical Documentation",
    description: "Reduce administrative work by converting consultation info into structured documentation.",
    href: "/products/medscribe",
    anchor: "Explore MedScribe",
  },
  {
    title: "Remote Patient Monitoring",
    description: "Connect device data with clinical context for monitoring and clinician review.",
    href: "/products/vitalgraph",
    anchor: "Explore VitalGraph",
  },
  {
    title: "Clinic Scheduling & Operations",
    description: "Streamline scheduling, intake, reminders and clinic communication workflows.",
    href: "/products/clinicops",
    anchor: "Explore ClinicOps",
  },
  {
    title: "Patient Health Information",
    description: "Help patients understand health information, medications and follow-up instructions.",
    href: "/products/companion",
    anchor: "Explore PatientGraph",
  },
  {
    title: "Clinical Data Research",
    description: "Access governed clinical data for research, cohort analysis and population health.",
    href: "/products/enterprise",
    anchor: "Explore ClinicalKG",
  },
  {
    title: "Enterprise Healthcare Intelligence",
    description: "Connect enterprise data sources through a governed clinical knowledge graph.",
    href: "/products/enterprise",
    anchor: "Explore Enterprise",
  },
];

const personas = [
  { title: "Doctors", description: "Reduce documentation burden and focus on patient care.", href: "/for-doctors" },
  { title: "Clinics", description: "Streamline operations and improve patient throughput.", href: "/for-clinics" },
  { title: "Hospitals", description: "Coordinate care across departments and specialties.", href: "/for-hospitals" },
  { title: "Health Systems", description: "Connect data sources across your entire network.", href: "/for-health-systems" },
  { title: "Researchers", description: "Access governed clinical data for research and analysis.", href: "/for-researchers" },
  { title: "Healthcare Organizations", description: "Deploy enterprise-wide intelligence and compliance.", href: "/for-organizations" },
];

const industries = [
  { label: "Primary Care", href: "/industries/primary-care" },
  { label: "Specialty Clinics", href: "/industries/specialty-clinics" },
  { label: "Hospitals", href: "/industries/hospitals" },
  { label: "Health Systems", href: "/industries/health-systems" },
  { label: "Chronic Care", href: "/industries/chronic-care" },
  { label: "Remote Care", href: "/industries/remote-care" },
  { label: "Clinical Research", href: "/industries/clinical-research" },
  { label: "Healthcare Technology", href: "/industries/healthcare-technology" },
];

const integrationsSupported = [
  "FHIR",
  "HL7",
  "CSV",
  "PDF",
  "REST APIs",
  "Medical devices",
  "BLE",
  "WhatsApp",
  "Telegram",
  "Web",
];

const integrationsPlanned = [
  "DICOM",
  "X12",
  "CCDA",
];

const deployments = [
  {
    title: "Cloud",
    description: "Fully managed deployment with automatic updates and scaling.",
    href: "/security",
  },
  {
    title: "Hybrid",
    description: "Keep sensitive data on-premise while leveraging cloud-based intelligence.",
    href: "/platform",
  },
  {
    title: "On-premise / Air-gapped",
    description: "Deploy entirely within your infrastructure for maximum control.",
    href: "/security",
  },
];

export default function MiddleSections() {
  return (
    <>
      {/* HOW IT WORKS */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="how-it-works">
        <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">
          Process
        </span>
        <h2 className="font-headline text-headline-xl text-forest-deep mb-12">
          From healthcare data to usable clinical context.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="font-code-badge text-code-badge text-terracotta-accent font-bold">01</span>
            <h3 className="font-headline text-headline-md text-forest-deep mt-2 mb-2">Connect</h3>
            <p className="font-body-sm text-body-sm text-text-muted">
              Connect records, documents, devices, patient information and healthcare workflows.
            </p>
          </div>
          <div>
            <span className="font-code-badge text-code-badge text-terracotta-accent font-bold">02</span>
            <h3 className="font-headline text-headline-md text-forest-deep mt-2 mb-2">Structure</h3>
            <p className="font-body-sm text-body-sm text-text-muted">
              Normalize and connect information within a clinical knowledge graph.
            </p>
          </div>
          <div>
            <span className="font-code-badge text-code-badge text-terracotta-accent font-bold">03</span>
            <h3 className="font-headline text-headline-md text-forest-deep mt-2 mb-2">Understand</h3>
            <p className="font-body-sm text-body-sm text-text-muted">
              Use graph-based context and AI systems to identify relationships and relevant evidence.
            </p>
          </div>
          <div>
            <span className="font-code-badge text-code-badge text-terracotta-accent font-bold">04</span>
            <h3 className="font-headline text-headline-md text-forest-deep mt-2 mb-2">Act</h3>
            <p className="font-body-sm text-body-sm text-text-muted">
              Deliver information to clinicians, patients, administrators and healthcare organizations
              through the appropriate product workflow.
            </p>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto bg-surface-porcelain rounded-3xl" id="use-cases">
        <h2 className="font-headline text-headline-xl text-forest-deep mb-12">
          Built around real healthcare workflows.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {useCases.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block p-6 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors"
            >
              <h3 className="font-headline text-headline-sm text-forest-deep mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="font-body-sm text-body-sm text-text-muted mb-3">{item.description}</p>
              <span className="font-label-md text-label-md text-forest-deep group-hover:text-primary transition-colors inline-flex items-center gap-1">
                {item.anchor} <span>&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHO MEDSPACE IS FOR */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="who">
        <h2 className="font-headline text-headline-xl text-forest-deep mb-12">
          Designed for different healthcare environments.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block p-6 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors"
            >
              <h3 className="font-headline text-headline-sm text-forest-deep mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="font-body-sm text-body-sm text-text-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto bg-surface-porcelain rounded-3xl" id="industries">
        <h2 className="font-headline text-headline-xl text-forest-deep mb-8">
          Healthcare environments
        </h2>
        <div className="flex flex-wrap gap-4">
          {industries.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group font-body-sm text-body-sm text-forest-deep bg-surface-cream px-5 py-3 rounded-xl hover:bg-surface-matcha transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id="integrations">
        <h2 className="font-headline text-headline-xl text-forest-deep mb-12">
          Works with the healthcare systems you already use.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-4">
              Supported
            </span>
            <div className="flex flex-wrap gap-3">
              {integrationsSupported.map((item) => (
                <span
                  key={item}
                  className="font-body-sm text-body-sm text-forest-deep bg-surface-cream px-4 py-2 rounded-lg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-4">
              Planned
            </span>
            <div className="flex flex-wrap gap-3">
              {integrationsPlanned.map((item) => (
                <span
                  key={item}
                  className="font-body-sm text-body-sm text-sage-muted bg-surface-cream/60 px-4 py-2 rounded-lg border border-dashed border-sage-muted/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/integrations"
            className="font-label-md text-label-md text-forest-deep hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            View all integrations <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto bg-surface-porcelain rounded-3xl" id="deployment">
        <h2 className="font-headline text-headline-xl text-forest-deep mb-12">
          Deploy around your data requirements.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deployments.map((item) => (
            <div
              key={item.title}
              className="block p-6 rounded-2xl bg-surface-container-lowest"
            >
              <h3 className="font-headline text-headline-sm text-forest-deep mb-2">
                {item.title}
              </h3>
              <p className="font-body-sm text-body-sm text-text-muted mb-4">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="font-label-md text-label-md text-forest-deep hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                Learn more <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
