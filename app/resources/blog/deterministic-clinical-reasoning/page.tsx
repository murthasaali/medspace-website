import Link from "next/link";
import type { Metadata } from "next";
import { ShaderBackground } from "@/components/ui/shader-r";

export const metadata: Metadata = {
  title: "Deterministic Clinical Reasoning: Why Evidence Must Carry the Answer | MedSpace AI",
  description:
    "How retrievable evidence, patient context, and governed knowledge — not raw generation — keep clinical AI outputs auditable and defensible.",
};

export default function DeterministicClinicalReasoningPost() {
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
          GraphRAG &amp; Reasoning
        </span>
        <h1 className="font-headline text-headline-xl text-surface-porcelain tracking-tight">
          Deterministic Clinical Reasoning: Why Evidence Must Carry the Answer
        </h1>
        <p className="font-body-md text-body-md text-surface-porcelain/70 mt-4">
          February 14, 2026 &middot; 8 min read
        </p>

        <article className="mt-10 space-y-6 font-body-md text-body-md text-surface-porcelain/90 leading-relaxed">
          <p>
            A model that answers confidently is not the same as a model that answers correctly. In clinical settings the standard is higher than fluency: every output should be traceable to evidence a human can inspect. That is the idea behind deterministic clinical reasoning — grounding generation in a retrieval layer you audit, rather than trusting raw prediction.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Grounding generation in a governed dataset</h2>
          <p>
            Instead of asking a model to recall clinical facts from training, a grounded system retrieves candidates from a governed knowledge graph — institution-specific protocols, guidelines, and the patient&rsquo;s own history — and constrains the answer to that evidence. The model proposes; the evidence disposes.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Every claim points at a source</h2>
          <p>
            The defining feature of a defensible system is citation. Each claim binds to the exact source chunk and graph node it came from. A reviewer can open the evidence, verify the link, and short-circuit the &ldquo;hallucination&rdquo; failure mode — not by trusting the system, but by checking its work.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Context that changes the answer</h2>
          <p>
            Patients are not interchangeable. A recommendation that is right for one patient can be wrong for another because of a single medication, allergy, or comorbidity. A graph that carries patient-specific context lets the retrieval layer weigh what actually applies — and lets the clinician see exactly which facts influenced the output.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Humans remain the decision-makers</h2>
          <p>
            Deterministic reasoning is not a replacement for clinical judgment; it is the infrastructure that makes automation safe enough to be useful. When outputs are auditable, citable, and grounded, a human can adopt them with confidence — or overrule them with the full picture in hand. That is the difference between tooling and autonomy, and it is the line responsible deployment never crosses.
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