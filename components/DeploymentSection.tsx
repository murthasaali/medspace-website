import Link from "next/link";

export default function DeploymentSection() {
  return (
    <section className="w-full py-20 px-6 lg:px-12 max-w-7xl mx-auto" id="deployment">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-headline text-headline-xl text-forest-deep">
          Deploy in Your Private Enclave. <span className="italic text-terracotta-accent">Zero Telemetry Leaks.</span>
        </h2>
        <p className="font-body-md text-body-md text-text-muted mt-3">
          Built from the ground up for strict healthcare governance. Tailored for hospitals, large group practices, and security-conscious health systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-border-tactile flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-headline-md text-forest-deep mb-2">Managed Sovereign Cloud</h3>
            <p className="font-body-sm text-body-sm text-text-muted mb-6">
              Dedicated single-tenant AWS GovCloud or Azure for Healthcare instance with customer-managed KMS encryption keys.
            </p>
            <ul className="space-y-2 text-sm text-on-surface-variant font-body-sm mb-6">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">check_circle</span>
                BAA fully signed under HIPAA
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">check_circle</span>
                Instant setup in under 48 hours
              </li>
            </ul>
          </div>
          <Link href="/security" className="inline-flex items-center gap-1.5 font-label-md text-label-md text-forest-deep hover:text-primary transition-colors font-semibold group pt-4 border-t border-border-tactile">
            <span>Cloud security specs</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-border-tactile flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-headline-md text-forest-deep mb-2">Local PHI + Cloud Reasoning</h3>
            <p className="font-body-sm text-body-sm text-text-muted mb-6">
              All PHI is scrubbed and de-identified locally before cryptographic embeddings are passed to private sovereign models.
            </p>
            <ul className="space-y-2 text-sm text-on-surface-variant font-body-sm mb-6">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">check_circle</span>
                Deterministic k-anonymity (k=25)
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">check_circle</span>
                No patient identifiers in transit
              </li>
            </ul>
          </div>
          <Link href="/platform" className="inline-flex items-center gap-1.5 font-label-md text-label-md text-forest-deep hover:text-primary transition-colors font-semibold group pt-4 border-t border-border-tactile">
            <span>Hybrid architecture overview</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="bg-surface-matcha/40 p-8 rounded-3xl shadow-sm border border-border-tactile flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-headline-md text-forest-deep mb-2">Air-Gapped Sovereign Node</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
              100% on-premise hardware appliances. Zero internet connection required for live ambient transcription and knowledge graph navigation.
            </p>
            <ul className="space-y-2 text-sm text-forest-deep font-body-sm font-medium mb-6">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">check_circle</span>
                Offline Ollama / GPU cluster
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-deep text-[18px]">check_circle</span>
                Absolute defense-grade isolation
              </li>
            </ul>
          </div>
          <Link href="/security" className="inline-flex items-center gap-1.5 font-label-md text-label-md text-forest-deep hover:text-primary transition-colors font-semibold group pt-4 border-t border-forest-deep/20">
            <span>Air-gapped verification</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
