import Link from "next/link";
import type { Metadata } from "next";
import { ShaderBackground } from "@/components/ui/shader-r";

export const metadata: Metadata = {
  title: "The Clinical Knowledge Graph: Architecture of a Governed Healthcare Dataset | MedSpace AI",
  description:
    "How a clinical knowledge graph connects patients, encounters, notes, telemetry, and devices into one auditable, governed data layer.",
};

export default function ClinicalKnowledgeGraphArchitecturePost() {
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
          Clinical Knowledge Graph
        </span>
        <h1 className="font-headline text-headline-xl text-surface-porcelain tracking-tight">
          The Clinical Knowledge Graph: the Architecture of a Governed Healthcare Dataset
        </h1>
        <p className="font-body-md text-body-md text-surface-porcelain/70 mt-4">
          March 4, 2026 &middot; 8 min read
        </p>

        <article className="mt-10 space-y-6 font-body-md text-body-md text-surface-porcelain/90 leading-relaxed">
          <p>
            Healthcare runs on information that lives in many places: EHRs, HL7 feeds, ambient audio, cellular devices, billing, and clinical notes. The gap between these sources is not a storage problem — it is a <span className="font-semibold text-surface-porcelain">relationship problem</span>. No single record knows how a medication order, a lab result, and a patient&rsquo;s vitals relate to one another in time.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">What a clinical knowledge graph is</h2>
          <p>
            A clinical knowledge graph models healthcare entities — patients, encounters, practitioners, medications, diagnoses, devices, documents — as nodes, and the meaningful connections between them as edges. Unlike a document store or a flat table, the graph preserves <span className="font-semibold text-surface-porcelain">context and provenance</span>: every edge can point back at the exact record it was derived from.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Why governance matters more than scale</h2>
          <p>
            Graph structure alone is not enough. A governed graph enforces who can read, write, and traverse each edge, and it records why a connection exists. That is what turns a dataset into an auditable asset: when a clinician asks how a recommendation was formed, the answer can be traced node by node, source chunk by source chunk.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">From records to real-time telemetry</h2>
          <p>
            The same graph can hold high-frequency telemetry — heart rate, blood pressure, glucose — bound to patient and device nodes with timestamps. Continuous data becomes a first-class citizen of the record instead of a separate stream. Queries that once required joining databases across departments become single-hop traversals over one governed model.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">A foundation for verifiable AI</h2>
          <p>
            Retrieval systems built on a governed graph can cite where every fact came from. That changes the conversation around AI in clinical settings from &ldquo;trust the model&rdquo; to &ldquo;verify the path.&rdquo; When inference is supported by exact node and chunk citations, the output can be audited — and that auditability is the precondition for responsible deployment in healthcare.
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