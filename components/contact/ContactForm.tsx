"use client";

import { useState } from "react";

const PRODUCTS = [
  "General Consultation / Platform Overview",
  "MedScribe Graph (Ambient Clinical Documentation)",
  "VitalGraph (Remote Patient Monitoring & Telemetry)",
  "ClinicOps Graph (Operations & Triage)",
  "PatientGraph Companion (Patient Engagement)",
  "ClinicalKG Enterprise (Governed GraphRAG)",
  "100% On-Premise Air-Gapped Hardware",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    topic: PRODUCTS[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-canvas-white rounded-2xl p-8 lg:p-10 border border-mist shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-surface-matcha/50 flex items-center justify-center text-forest-deep shrink-0">
            <span className="material-symbols-outlined text-[24px]">verified</span>
          </div>
          <div>
            <span className="font-code-badge text-xs uppercase tracking-widest text-brass block">
              Inquiry Sent &bull; ID #MS-{Math.floor(100000 + Math.random() * 900000)}
            </span>
            <h3 className="font-headline text-headline-sm text-forest-deep font-medium">
              Thank you for reaching out
            </h3>
          </div>
        </div>

        <p className="font-body-md text-body-md text-steel mb-6 leading-relaxed">
          We&apos;ve received your note, <span className="font-semibold text-graphite">{formData.name || "there"}</span>.
          A clinical solutions director will review your inquiry regarding{" "}
          <span className="font-semibold text-graphite">{formData.topic}</span> and get back to you within 4 clinical
          business hours.
        </p>

        <div className="bg-fog p-4 rounded-xl border border-mist flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-code-badge text-steel mb-6">
          <span>Target Organization: <strong className="text-graphite">{formData.organization || "Direct"}</strong></span>
          <span className="text-forest-deep font-semibold">Response SLA: &lt; 4 hours</span>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              organization: "",
              topic: PRODUCTS[0],
              message: "",
            });
          }}
          className="inline-flex items-center gap-2 text-sm font-label-md text-forest-deep hover:text-primary transition-colors underline"
        >
          <span>&larr; Send another message</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-canvas-white rounded-2xl p-8 lg:p-10 border border-mist shadow-sm space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-label-md text-xs uppercase tracking-wider text-steel mb-1.5 font-semibold">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Dr. Sarah Chen"
            className="w-full px-4 py-2.5 rounded-lg border border-mist bg-fog focus:bg-canvas-white focus:border-forest-deep text-graphite text-sm outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block font-label-md text-xs uppercase tracking-wider text-steel mb-1.5 font-semibold">
            Work / Hospital Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="dr.chen@healthsystem.org"
            className="w-full px-4 py-2.5 rounded-lg border border-mist bg-fog focus:bg-canvas-white focus:border-forest-deep text-graphite text-sm outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-label-md text-xs uppercase tracking-wider text-steel mb-1.5 font-semibold">
            Organization / Health System *
          </label>
          <input
            type="text"
            required
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="e.g. Memorial Health System"
            className="w-full px-4 py-2.5 rounded-lg border border-mist bg-fog focus:bg-canvas-white focus:border-forest-deep text-graphite text-sm outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block font-label-md text-xs uppercase tracking-wider text-steel mb-1.5 font-semibold">
            Topic of Interest
          </label>
          <div className="relative">
            <select
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-mist bg-fog focus:bg-canvas-white focus:border-forest-deep text-graphite text-sm outline-none transition-colors appearance-none cursor-pointer pr-10"
            >
              {PRODUCTS.map((prod) => (
                <option key={prod} value={prod}>
                  {prod}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined text-[20px] text-slate absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
      </div>

      <div>
        <label className="block font-label-md text-xs uppercase tracking-wider text-steel mb-1.5 font-semibold">
          How can we help your clinical workflow?
        </label>
        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your EHR environment, clinical requirements, pilot timeline, or sovereign deployment questions..."
          className="w-full px-4 py-2.5 rounded-lg border border-mist bg-fog focus:bg-canvas-white focus:border-forest-deep text-graphite text-sm outline-none transition-colors resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-xs font-code-badge text-text-muted">
          <span className="material-symbols-outlined text-forest-deep text-[16px]">lock</span>
          <span>HIPAA Compliant &bull; Direct with Engineering</span>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-forest-deep text-on-primary font-label-lg text-label-lg hover:bg-primary transition-all shadow-sm gap-2 group cursor-pointer"
        >
          <span>Send Message</span>
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </button>
      </div>
    </form>
  );
}
