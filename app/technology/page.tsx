import Link from "next/link";
import GraphTopologyPanel from "@/components/GraphTopologyPanel";
import QueryInspector from "@/components/QueryInspector";

export const metadata = {
  title: "Technology | MedSpace AI",
  description:
    "How MedSpace AI works under the hood — VeritasGraph clinical knowledge graph engine, live topology, and span-level citation verification.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-surface-porcelain">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-forest-deep mb-8 transition-colors"
        >
          <span>&larr;</span>
          <span>Back to Home</span>
        </Link>

        <div className="max-w-3xl mb-16">
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-3">
            Powered by VeritasGraph
          </span>
          <h1 className="font-headline text-headline-2xl text-forest-deep tracking-tight">
            The technology behind{" "}
            <span className="italic text-terracotta-accent">MedSpace AI.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            Every answer is backed by a reasoning path through a governed clinical knowledge graph — no hallucinations,
            no black-box inference. Here&apos;s how it works.
          </p>
        </div>
      </div>

      {/* Live Graph Topology */}
      <GraphTopologyPanel />

      {/* Zero-Hallucination Citation Inspector */}
      <QueryInspector />
    </div>
  );
}
