import Link from "next/link";

export const metadata = {
  title: "HL7 Integration | MedSpace AI",
  description: "HL7 v2 message processing.",
};

export default function HL7IntegrationPage() {
  return (
    <div className="min-h-screen bg-surface-porcelain">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-forest-deep mb-8 transition-colors">
          <span>&larr;</span>
          <span>Back to Home</span>
        </Link>
        <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight">
          HL7 Integration
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl">
          HL7 v2 message processing.
        </p>
      </div>
    </div>
  );
}
