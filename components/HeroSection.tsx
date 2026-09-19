import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden px-6 lg:px-12 pt-8 pb-20 max-w-7xl mx-auto">
      <div className="absolute inset-0 pointer-events-none opacity-40 -z-10 flex items-center justify-center">
        <svg className="w-full h-full" fill="none" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 C300 280, 500 100, 900 260 C1100 340, 1300 180, 1400 220" fill="none" stroke="#386641" strokeDasharray="4 4" strokeWidth="1.2" />
          <path d="M-100 260 C260 330, 540 180, 880 320 C1080 400, 1260 250, 1400 300" fill="none" stroke="#386641" strokeWidth="1.2" />
          <path d="M-100 320 C240 400, 600 240, 850 400 C1050 480, 1220 320, 1400 380" fill="none" stroke="#A3B18B" strokeWidth="1" />
          <path d="M-100 380 C200 480, 650 310, 830 480 C1010 560, 1180 410, 1400 460" fill="none" opacity="0.6" stroke="#E07A5F" strokeDasharray="3 3" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="flex flex-col items-start gap-4 mb-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container text-forest-deep shadow-sm">
          <span className="w-2 h-2 rounded-full bg-terracotta-accent animate-pulse"></span>
          <span className="font-code-badge text-code-badge font-medium">Clinical Knowledge Graph Layer &bull; 100% On-Premise Sovereign</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-md bg-surface-matcha/30 p-0.5 shadow-sm flex items-center justify-center">
            <span className="font-headline text-headline-sm text-forest-deep font-semibold">M</span>
          </span>
          <span className="font-code-badge text-code-badge uppercase tracking-widest text-text-muted">VeritasGraph&trade; Architecture</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
        <div className="lg:col-span-8">
          <span className="font-code-badge text-code-badge text-terracotta-accent uppercase tracking-widest font-semibold block mb-3">
            Clinical Intelligence, Connected
          </span>
          <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight">
            One Knowledge Graph.<br />
            Five Healthcare <span className="italic font-headline text-terracotta-accent">Superpowers.</span>
          </h1>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-end">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-6">
            MedSpace AI connects clinical data, patient context, medical devices, and healthcare records into one governed intelligence layer &mdash; with every AI decision backed by <span className="italic text-forest-deep">mathematically verifiable</span> evidence paths.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-forest-deep text-on-primary font-label-lg text-label-lg hover:bg-primary shadow-sm transition-all gap-2 group"
              href="#products"
            >
              <span>Explore Products</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
            <Link
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-surface-cream text-forest-deep font-label-lg text-label-lg hover:bg-surface-container transition-colors shadow-sm border border-border-tactile"
              href="/company/contact"
            >
              <span>Talk to MedSpace AI</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 px-5 rounded-2xl bg-surface-sage-subtle mb-14 shadow-sm">
        <div className="flex items-center gap-2 text-on-surface">
          <span className="material-symbols-outlined text-forest-deep text-[20px]">shield_locked</span>
          <span className="font-label-sm text-label-sm font-semibold">Zero PHI Egress (Local GPU)</span>
        </div>
        <div className="flex items-center gap-2 text-on-surface">
          <span className="material-symbols-outlined text-forest-deep text-[20px]">memory</span>
          <span className="font-label-sm text-label-sm font-semibold">100% Air-Gapped Ready</span>
        </div>
        <div className="flex items-center gap-2 text-on-surface">
          <span className="material-symbols-outlined text-terracotta-accent text-[20px]">verified</span>
          <span className="font-label-sm text-label-sm font-semibold">Verifiable Citations [doc#chunk]</span>
        </div>
        <div className="flex items-center gap-2 text-on-surface">
          <span className="material-symbols-outlined text-forest-deep text-[20px]">sync_alt</span>
          <span className="font-label-sm text-label-sm font-semibold">FHIR R4 &amp; HL7 v2 Native</span>
        </div>
      </div>
    </section>
  );
}
