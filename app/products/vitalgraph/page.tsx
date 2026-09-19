import Link from "next/link";

export const metadata = {
  title: "VitalGraph RPM | MedSpace AI",
  description: "Continuous remote patient monitoring with predictive deterioration triggers.",
};

export default function VitalGraphRPMPage() {
  return (
    <div className="min-h-screen bg-surface-porcelain">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-forest-deep mb-8 transition-colors">
          <span>&larr;</span>
          <span>Back to Home</span>
        </Link>
        <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight">
          VitalGraph RPM
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl">
          Continuous remote patient monitoring with predictive deterioration triggers.
        </p>
      </div>
    </div>
  );
}
