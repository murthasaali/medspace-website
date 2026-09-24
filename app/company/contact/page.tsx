import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact | MedSpace AI",
  description:
    "Get in touch with the MedSpace AI team regarding clinical products, platform architecture, or partnerships.",
  alternates: { canonical: "/company/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-porcelain py-12 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-forest-deep mb-8 transition-colors group"
        >
          <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="font-code-badge text-code-badge text-terracotta-accent uppercase tracking-widest block mb-2 font-medium">
            Get In Touch
          </span>
          <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight leading-[1.08]">
            Contact <span className="italic font-headline text-terracotta-accent">MedSpace AI.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
            Have questions about our products, platform, or pilot evaluations? Send us a message and our team will get
            back to you shortly.
          </p>
        </div>

        {/* Clean Contact Form */}
        <ContactForm />

        {/* Direct Email Contacts */}
        <div className="mt-12 pt-8 border-t border-border-tactile grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <span className="font-code-badge text-xs uppercase tracking-wider text-text-muted block mb-1">
              General Inquiries
            </span>
            <a
              href="mailto:contact@medspace.ai"
              className="text-forest-deep font-medium hover:underline transition-colors"
            >
              contact@medspace.ai
            </a>
          </div>

          <div>
            <span className="font-code-badge text-xs uppercase tracking-wider text-text-muted block mb-1">
              Clinical Solutions
            </span>
            <a
              href="mailto:clinical@medspace.ai"
              className="text-forest-deep font-medium hover:underline transition-colors"
            >
              clinical@medspace.ai
            </a>
          </div>

          <div>
            <span className="font-code-badge text-xs uppercase tracking-wider text-text-muted block mb-1">
              Security &amp; Privacy
            </span>
            <a
              href="mailto:security@medspace.ai"
              className="text-forest-deep font-medium hover:underline transition-colors"
            >
              security@medspace.ai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
