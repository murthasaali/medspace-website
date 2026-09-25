import Link from "next/link";
import type { Metadata } from "next";
import { ShaderBackground } from "@/components/ui/shader-r";

export const metadata: Metadata = {
  title: "Remote Patient Monitoring: Telemetry That Finds a Home in the Record | MedSpace AI",
  description:
    "How continuous telemetry ingestion, anomaly detection, and RPM billing work together on a governed clinical knowledge graph.",
};

export default function RemotePatientMonitoringPost() {
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
          Remote Patient Monitoring
        </span>
        <h1 className="font-headline text-headline-xl text-surface-porcelain tracking-tight">
          Remote Patient Monitoring: Telemetry That Finds a Home in the Record
        </h1>
        <p className="font-body-md text-body-md text-surface-porcelain/70 mt-4">
          February 26, 2026 &middot; 8 min read
        </p>

        <article className="mt-10 space-y-6 font-body-md text-body-md text-surface-porcelain/90 leading-relaxed">
          <p>
            Remote patient monitoring (RPM) generates data continuously: heart rate, oxygen saturation, blood pressure, glucose, weight. The clinical challenge is not collecting the telemetry — it is making it readable, actionable, and reimbursable within the existing record.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Continuous ingestion, structured storage</h2>
          <p>
            Medical devices stream readings at intervals that a chart note never could. On a governed knowledge graph, each reading attaches to device, patient, and time — a complete timeline that preserves context instead of a flat log that buries it.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Anomaly detection with an evidence path</h2>
          <p>
            An alert is only useful if its reasoning is inspectable. Detecting an abnormal trend is one step; connecting that trend to the patient&rsquo;s history, medications, and prior readings gives clinicians the &ldquo;why&rdquo; alongside the &ldquo;what.&rdquo; A graph retrieval layer can present the supporting context at the moment of the alert.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">&ldquo;Proactive billing&rdquo; done responsibly</h2>
          <p>
            RPM has specific billing codes with documented requirements: days of monitoring, time spent, and clinical documentation. A system that tracks those requirements as it collects data can surface what is needed — complete, citable records that support proper billing rather than inflated claims.
          </p>
          <h2 className="font-headline text-headline-lg text-surface-porcelain pt-4">Data boundaries still apply</h2>
          <p>
            Telemetry is PHI. Whether streams flow to cloud, hybrid, or on-premise infrastructure, the same governance rules should apply to the device data as to the chart: who can read it, where it is stored, and what is retained. Respecting those boundaries is what makes continuous monitoring sustainable for a health system.
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