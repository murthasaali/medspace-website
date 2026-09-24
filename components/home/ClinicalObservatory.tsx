"use client";

import Link from "next/link";
import { useState } from "react";

export default function ClinicalObservatory() {
  const [activeTab, setActiveTab] = useState<"latency" | "fidelity">("latency");

  return (
    <section className="w-full bg-ash py-24 px-6 lg:px-12 border-t border-mist" id="observatory">
      <div className="max-w-8xl mx-auto">
        {/* Section Header — Editorial voice */}
        <div className="reveal-on-scroll max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-ember-orange animate-pulse" />
            <span className="font-code-badge text-code-badge text-brass uppercase tracking-widest font-semibold">
              Editorial Data Observatory &bull; Real-time Benchmarks
            </span>
          </div>
          <h2 className="font-headline text-headline-xl text-graphite tracking-tight leading-[1.12]">
            Deterministic precision, monitored across millions of{" "}
            <span className="italic text-forest-deep">clinical graph traversals.</span>
          </h2>
          <p className="font-body-md text-body-md text-steel mt-4 leading-relaxed">
            A continuous observational window into VeritasGraph accuracy, traversal latency, and strict citation
            grounding across active health system deployments.
          </p>
        </div>

        {/* Ventriloc Data Dashboard Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Multi-Hop Traversal Latency (White, 20px radius, ember orange & brass strokes) */}
          <div className="reveal-on-scroll lg:col-span-7 bg-canvas-white rounded-2xl p-8 border border-mist flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-mist">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline text-headline-sm text-graphite font-medium">
                      Multi-Hop Reasoning Latency
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-fog border border-mist text-[10px] font-code-badge text-slate uppercase">
                      Live P95
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-steel mt-1">
                    Graph walk latency across EHR, LOINC labs, RxNorm medications, and clinical notes
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fog border border-mist font-code-badge text-xs text-graphite">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-deep" />
                    Sub-200ms Target
                  </span>
                </div>
              </div>

              {/* Chart SVG with Ember Orange & Brass lines */}
              <div className="py-6">
                <div className="flex items-center justify-between text-xs font-code-badge text-slate mb-2">
                  <span>Hop 1: Ingestion</span>
                  <span>Hop 2: Entity Link</span>
                  <span>Hop 3: Drug Interaction</span>
                  <span>Hop 4: Provenance</span>
                </div>

                <div className="relative w-full h-44 bg-fog/60 rounded-xl p-4 border border-mist overflow-hidden flex items-end">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-40">
                    <div className="border-b border-dashed border-mist w-full" />
                    <div className="border-b border-dashed border-mist w-full" />
                    <div className="border-b border-dashed border-mist w-full" />
                  </div>

                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 130" preserveAspectRatio="none">
                    {/* Secondary baseline line (Brass #816729) */}
                    <path
                      d="M 10 95 C 100 90, 200 80, 300 85 C 400 75, 450 70, 490 65"
                      fill="none"
                      stroke="#816729"
                      strokeWidth="1.75"
                      strokeDasharray="4 4"
                      opacity="0.8"
                    />

                    {/* Primary active data line (Ember Orange #ff682c) */}
                    <path
                      d="M 10 110 C 80 100, 160 65, 250 50 C 350 35, 420 22, 490 18"
                      fill="none"
                      stroke="#ff682c"
                      strokeWidth="2.5"
                    />

                    {/* Data dots with Ember Orange fills */}
                    <circle cx="10" cy="110" r="4.5" fill="#ff682c" />
                    <circle cx="160" cy="65" r="4.5" fill="#ff682c" />
                    <circle cx="250" cy="50" r="4.5" fill="#ff682c" />
                    <circle cx="490" cy="18" r="5" fill="#ff682c" stroke="#ffffff" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[11px] font-code-badge text-steel mt-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-1 bg-ember-orange rounded-full" />
                      <span>VeritasGraph Engine (142ms)</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-1 bg-brass rounded-full" />
                      <span>Standard Vector RAG (310ms)</span>
                    </span>
                  </div>
                  <span className="text-slate font-medium">Sample: 450,000 queries</span>
                </div>
              </div>
            </div>

            {/* Readout stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-mist">
              <div>
                <span className="font-code-badge text-xs text-slate block mb-1 uppercase tracking-wider">
                  Median Traversal
                </span>
                <span className="font-code-badge text-headline-sm font-bold text-graphite">
                  142<span className="text-ember-orange text-sm font-normal"> ms</span>
                </span>
              </div>
              <div>
                <span className="font-code-badge text-xs text-slate block mb-1 uppercase tracking-wider">
                  Graph Depth
                </span>
                <span className="font-code-badge text-headline-sm font-bold text-graphite">
                  4.2<span className="text-brass text-sm font-normal"> hops</span>
                </span>
              </div>
              <div>
                <span className="font-code-badge text-xs text-slate block mb-1 uppercase tracking-wider">
                  Ungrounded Claims
                </span>
                <span className="font-code-badge text-headline-sm font-bold text-forest-deep">
                  0.00<span className="text-xs font-normal text-slate"> %</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 & 3 Col: Fidelity Ring + Asymmetric Radius Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Card 2: AUROC Diagnostic Ring Card */}
            <div className="reveal-on-scroll bg-canvas-white rounded-2xl p-7 border border-mist flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="font-code-badge text-xs text-brass uppercase tracking-widest font-semibold">
                  Diagnostic Accuracy Telemetry
                </span>
                <span className="px-2 py-0.5 rounded-full bg-fog border border-mist text-[10px] font-code-badge text-slate">
                  AUROC Metric
                </span>
              </div>

              <div className="flex items-center gap-6 my-2">
                {/* Gauge Ring with Ember Orange */}
                <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#efefef" strokeWidth="8" fill="none" />
                    <circle
                      cx="50" cy="50" r="40"
                      stroke="#ff682c"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="17.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-code-badge text-xl font-bold text-graphite">0.93</span>
                    <span className="text-[9px] font-code-badge text-slate uppercase">AUROC</span>
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <p className="font-headline text-headline-sm text-graphite font-medium">
                    Chronic Decompensation
                  </p>
                  <p className="font-body-sm text-body-sm text-steel leading-snug">
                    Evaluated against multi-organ risk trajectories in ICU and ambulatory patient cohorts.
                  </p>
                  <div className="pt-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-deep" />
                    <span className="font-code-badge text-[11px] text-forest-deep font-semibold">
                      +31% over legacy EHR alert thresholds
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Asymmetric Radius Card (Ventriloc signature 6px 0px 0px 0px on Ash/Ivory surface) */}
            <div className="reveal-on-scroll bg-canvas-white rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-none p-8 border border-mist border-t-2 border-t-graphite flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-fog border border-mist text-graphite font-code-badge text-[11px] uppercase tracking-wider font-semibold">
                    Signature Invariant
                  </span>
                  <span className="font-code-badge text-[11px] text-slate">
                    Constraint v2.4
                  </span>
                </div>

                <h3 className="font-headline text-headline-sm text-graphite font-medium mb-3">
                  The Zero-Hallucination Constraint
                </h3>

                <p className="font-body-sm text-body-sm text-steel leading-relaxed">
                  Unlike generative language models that invent plausible clinical text, VeritasGraph enforces an
                  uncompromising architectural boundary: every medical conclusion must trace an unbroken path to a
                  verifiable source chunk <code className="font-code-badge text-[11px] bg-fog px-1.5 py-0.5 rounded text-graphite">[doc#chunk]</code>.
                </p>
              </div>

              {/* Ventriloc signature: Link with Ember Orange underline */}
              <div className="pt-5 mt-4 border-t border-mist flex items-center justify-between">
                <Link
                  href="/technology"
                  className="link-ember-underline font-body-sm text-graphite font-medium inline-flex items-center gap-1.5"
                >
                  <span>Inspect verifiable provenance engine</span>
                  <span className="text-xs">&rarr;</span>
                </Link>
                <span className="font-code-badge text-[10px] text-slate uppercase tracking-wider">
                  Open Spec
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
