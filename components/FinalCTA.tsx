"use client";
import Link from "next/link";
import { ShaderBackground } from "@/components/ui/shader-r";

export default function FinalCTA() {
  return (
    <section className="w-full pb-24 px-6 lg:px-12 max-w-8xl mx-auto" id="demo">
      <div className="rounded-3xl p-8 lg:p-16 relative overflow-hidden shadow-sm border border-border-tactile">
        <div className="absolute inset-0">
          <ShaderBackground />
        </div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-25 pointer-events-none">
          <svg className="w-full h-full stroke-surface-porcelain fill-none" strokeWidth="1.2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="20" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="60" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="100" />
          </svg>
        </div>
        <div className="max-w-2xl relative z-10">
          <span className="font-code-badge text-code-badge text-terracotta-accent uppercase tracking-widest block mb-3 font-semibold">
            DISCUSS A HEALTHCARE AI WORKFLOW
          </span>
          <h2 className="font-headline text-headline-2xl text-surface-porcelain tracking-tight mb-6">
            Bring verifiable intelligence into <span className="italic font-headline text-terracotta-accent">patient care.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-surface-porcelain/90 mb-8">
            Tell us about the clinical, operational, or data workflow you are working to modernize. Join healthcare leaders reclaiming 2+ hours daily, eliminating billing leaks, and maintaining absolute data sovereignty.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-forest-deep text-on-primary font-label-lg text-label-lg hover:bg-primary transition-all shadow-md gap-2 group"
              href="/company/contact"
            >
              <span>Talk to MedSpace AI</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
            <Link
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-surface-porcelain/15 text-surface-porcelain font-label-lg text-label-lg hover:bg-surface-porcelain/25 transition-colors shadow-sm border border-surface-porcelain/40"
              href="/platform"
            >
              <span>Explore the Platform</span>
            </Link>
          </div>
          <div className="mb-8">
            <Link
              href="/technology"
              className="link-ember-underline text-surface-porcelain/90 hover:text-white font-body-sm text-sm font-medium inline-flex items-center gap-1.5"
            >
              <span>Review on-premise air-gapped deployment architecture</span>
              <span className="text-xs">&rarr;</span>
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-6 text-surface-porcelain/90 font-code-badge text-code-badge">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-terracotta-accent text-[18px]">verified</span>
              <span>HIPAA BAA Signed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-terracotta-accent text-[18px]">verified</span>
              <span>SOC-2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-terracotta-accent text-[18px]">verified</span>
              <span>FHIR R4 Agnostic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
