import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="w-full pb-24 px-6 lg:px-12 max-w-7xl mx-auto" id="demo">
      <div className="bg-surface-matcha/50 rounded-3xl p-8 lg:p-16 relative overflow-hidden shadow-sm border border-border-tactile">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-25 pointer-events-none">
          <svg className="w-full h-full stroke-forest-deep fill-none" strokeWidth="1.2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="20" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="60" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="100" />
          </svg>
        </div>
        <div className="max-w-2xl relative z-10">
          <span className="font-code-badge text-code-badge text-forest-deep uppercase tracking-widest block mb-3 font-semibold">
            DISCUSS A HEALTHCARE AI WORKFLOW
          </span>
          <h2 className="font-headline text-headline-2xl text-forest-deep tracking-tight mb-6">
            Bring verifiable intelligence into <span className="italic font-headline text-terracotta-accent">patient care.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Tell us about the clinical, operational, or data workflow you are working to modernize. Join healthcare leaders reclaiming 2+ hours daily, eliminating billing leaks, and maintaining absolute data sovereignty.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-forest-deep text-on-primary font-label-lg text-label-lg hover:bg-primary transition-all shadow-md gap-2 group"
              href="/company/contact"
            >
              <span>Talk to MedSpace AI</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
            <Link
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-surface-cream text-forest-deep font-label-lg text-label-lg hover:bg-surface-container transition-colors shadow-sm border border-border-tactile"
              href="/platform"
            >
              <span>Explore the Platform</span>
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-6 text-on-surface-variant font-code-badge text-code-badge">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-forest-deep text-[18px]">verified</span>
              <span>HIPAA BAA Signed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-forest-deep text-[18px]">verified</span>
              <span>SOC-2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-forest-deep text-[18px]">verified</span>
              <span>FHIR R4 Agnostic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
