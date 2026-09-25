import Link from "next/link";
import { ShaderBackground } from "@/components/ui/shader-r";

export const metadata = {
  title: "Blog | MedSpace AI",
  description:
    "Insights on clinical knowledge graphs, ambient documentation, remote monitoring, data sovereignty, and deterministic reasoning in healthcare AI.",
};

const posts = [
  {
    slug: "clinical-knowledge-graph-architecture",
    category: "Clinical Knowledge Graph",
    title: "The Clinical Knowledge Graph: the Architecture of a Governed Healthcare Dataset",
    excerpt:
      "How a clinical knowledge graph connects patients, encounters, notes, telemetry, and devices into one auditable, governed data layer.",
    date: "March 4, 2026",
    readTime: "8 min",
  },
  {
    slug: "ambient-clinical-documentation",
    category: "Clinical Documentation",
    title: "Ambient Clinical Documentation in Practice",
    excerpt:
      "Capturing the clinical conversation and structuring it into coded, citable data without adding to the clinician's workload.",
    date: "March 2, 2026",
    readTime: "7 min",
  },
  {
    slug: "remote-patient-monitoring-telemetry",
    category: "Remote Patient Monitoring",
    title: "Remote Patient Monitoring: Telemetry That Finds a Home in the Record",
    excerpt:
      "How continuous telemetry ingestion, anomaly detection, and RPM billing work together on a governed clinical knowledge graph.",
    date: "February 26, 2026",
    readTime: "8 min",
  },
  {
    slug: "healthcare-data-sovereignty",
    category: "Sovereignty & Deployment",
    title: "Data Sovereignty: Why Healthcare AI Must Respect Your Boundaries",
    excerpt:
      "Cloud, hybrid, and on-premise deployment — what data sovereignty means for healthcare AI and where your PHI actually lives.",
    date: "February 20, 2026",
    readTime: "7 min",
  },
  {
    slug: "deterministic-clinical-reasoning",
    category: "GraphRAG & Reasoning",
    title: "Deterministic Clinical Reasoning: Why Evidence Must Carry the Answer",
    excerpt:
      "How retrievable evidence, patient context, and governed knowledge — not raw generation — keep clinical AI outputs auditable and defensible.",
    date: "February 14, 2026",
    readTime: "8 min",
  },
];

export default function BlogPage() {
  return (
<div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <ShaderBackground />
      </div>
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-surface-porcelain/70 hover:text-terracotta-accent mb-8 transition-colors">
          <span>&larr;</span>
          <span>Back to Home</span>
        </Link>
        <span className="font-code-badge text-code-badge text-terracotta-accent uppercase tracking-widest block mb-3 font-semibold">
          Insights &amp; Research
        </span>
        <h1 className="font-headline text-headline-2xl text-surface-porcelain tracking-tight">
          Blog
        </h1>
        <p className="font-body-lg text-body-lg text-surface-porcelain/80 mt-4 max-w-2xl">
          Insights on how governed knowledge graphs, ambient documentation, remote monitoring, and grounded reasoning reshape healthcare workflows without giving up control.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-3xl bg-surface-container-lowest p-7 ring-1 ring-inset ring-forest-deep/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_4px_12px_rgba(15,62,23,0.28),inset_0_-6px_16px_rgba(15,62,23,0.18)] border border-border-tactile transition-shadow hover:shadow-md"
            >
              <div>
                <span className="font-code-badge text-code-badge text-terracotta-accent uppercase tracking-widest block mb-3 font-semibold">
                  {post.category}
                </span>
                <h2 className="font-headline text-headline-md text-forest-deep tracking-tight">
                  {post.title}
                </h2>
                <p className="font-body-sm text-body-sm text-text-muted mt-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border-tactile">
                <span className="font-body-sm text-body-sm text-text-muted">
                  {post.date} &middot; {post.readTime} read
                </span>
                <span className="font-code-badge text-code-badge text-forest-deep group-hover:text-terracotta-accent transition-colors">
                  Read &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}