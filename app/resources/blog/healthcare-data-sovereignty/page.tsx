import Link from "next/link";
import type { Metadata } from "next";
import { ShaderBackground } from "@/components/ui/shader-r";

export const metadata: Metadata = {
  title: "Data Sovereignty: Why Healthcare AI Must Respect Your Boundaries | MedSpace AI",
  description:
    "Cloud, hybrid, and on-premise deployment — what data sovereignty means for healthcare AI and how to evaluate where your PHI actually lives.",
};

export default function HealthcareDataSovereigntyPost() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <ShaderBackground />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 py-20">
        <Link href="/resources/blog" className="inline-flex items-center gap-2 text-sm text-surface-porcelain/70 hover:text-terracotta-accent mb-8 transition-colors">
          <span>&larr;</span>
          <span>All posts</span>
        </Link>
        <span className="font-code-badge text-code-badge text-terracotta-accent uppercase tracking-widest block mb-3 font-semibold">
          Sovereignty &amp; Deployment
        </span>
        <h1 className="font-headline text-headline-xl text-surface-porcelain tracking-tight">
          Data Sovereignty: Why Healthcare AI Must Respect Your Boundaries
        </h1>
        <p className="font-body-md text-body-md text-surface-porcelain/70 mt-4">
          February 20, 2026 &middot; 7 min read
        </p>

        <article className="mt-10 space-y-6 font-body-md text-body-md text-surface-porcelain/90 leading-relaxed">
          <p>
            &ldquo;Your data is your asset&rdquo; is easy to say and hard to verify. In healthcare, the question is concrete: does protected health information leave your walls when an AI tool processes it? Data sovereignty is the answer to that question — and it is a deployment decision, not a slogan.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Three deployment models, one governed model</h2>
          <p>
            <span className="font-semibold text-surface-porcelain">Cloud</span> offers scale and managed operations. <span className="font-semibold text-surface-porcelain">Hybrid</span> keeps sensitive workloads close while routing the rest flexibly. <span className="font-semibold text-surface-porcelain">On-premise</span> keeps everything inside your own infrastructure. The right choice depends on your regulatory obligations, network topology, and operational capacity — not on what is most marketable.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Sovereignty is a property of the data path</h2>
          <p>
            Sovereignty is not defined by where a vendor&rsquo;s home office is. It is defined by the data path: where PHI is stored, where it is processed, who provisions the infrastructure, and what leaves the boundary for any reason. Map the full pipeline — ingestion, storage, inference, retrieval — before trusting a claim about your data.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Audit trails make sovereignty verifiable</h2>
          <p>
            The strongest guarantee is an auditable one. A governed knowledge layer can record every read, write, and traversal against the clinical data — giving you the evidence that data stayed inside the boundary, and the tooling to prove it in an audit.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Questions to ask any vendor</h2>
          <p>
            Where does processing happen? Can the system run fully inside our network? Who holds the encryption keys? What leaves our environment during training, inference, or support? What does the audit trail capture? If a vendor answers these vaguely, the sovereignty promise is vague too.
          </p>
        </article>

        <div className="mt-10 pt-6 border-t border-surface-porcelain/15">
          <p className="font-body-sm text-body-sm text-surface-porcelain/60">
            MedSpace AI is designed to support healthcare workflows and decision-making. It does not replace qualified healthcare professionals or emergency medical services.
          </p>
        </div>
      </div>
    </div>
  );
}