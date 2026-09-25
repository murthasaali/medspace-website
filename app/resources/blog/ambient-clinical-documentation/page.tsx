import Link from "next/link";
import type { Metadata } from "next";
import { ShaderBackground } from "@/components/ui/shader-r";

export const metadata: Metadata = {
  title: "Ambient Clinical Documentation in Practice | MedSpace AI",
  description:
    "How ambient documentation captures the clinical conversation and structures it into coded, citable data without adding to the clinician's workload.",
};

export default function AmbientClinicalDocumentationPost() {
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
          Clinical Documentation
        </span>
        <h1 className="font-headline text-headline-xl text-surface-porcelain tracking-tight">
          Ambient Clinical Documentation in Practice
        </h1>
        <p className="font-body-md text-body-md text-surface-porcelain/70 mt-4">
          March 2, 2026 &middot; 7 min read
        </p>

        <article className="mt-10 space-y-6 font-body-md text-body-md text-surface-porcelain/90 leading-relaxed">
          <p>
            Documentation is where clinician time goes. Between charting, coding, and follow-up notes, a significant share of the day is spent restating what was already said aloud. Ambient documentation shifts that work toward the point of care: it captures the conversation, then structures it — with the clinician in control of what is written down.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">From spoken encounter to structured record</h2>
          <p>
            Ambient documentation listens to the clinical conversation and produces a structured note: chief complaint, history, assessment, and plan. Because the source is the real audio, the output stays grounded in what was actually said — not a paraphrase produced from memory after the visit.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Coding as a byproduct, not a chore</h2>
          <p>
            The same structured note can be mapped to diagnostic and procedure codes at the time of writing. When codes are derived from the documented conversation and linked back to the source, billing claims carry their own evidence trail — and that traceability reduces the risk of both under-coding and over-coding.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">The clinician stays in the loop</h2>
          <p>
            Automation does not mean autonomy. A well-designed ambient workflow presents a draft note for review, edits are attributed, and nothing is committed to the chart silently. The human signs the note; the machine does the transcription and structuring.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">What to look for in a documentation tool</h2>
          <p>
            Evaluate how the output is structured into coded data, whether citations point at the exact source, how edits are tracked, and how the audio is handled under your data-governance rules. The strongest systems keep PHI on infrastructure you control.
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