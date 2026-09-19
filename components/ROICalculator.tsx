"use client";

import { useState, useCallback } from "react";

export default function ROICalculator() {
  const [clinicians, setClinicians] = useState(5);
  const [visits, setVisits] = useState(20);
  const [noShowRate, setNoShowRate] = useState(18);

  const calculate = useCallback(() => {
    const hoursSaved = Math.round(clinicians * 1.5 * 240);
    const revenue =
      Math.round(
        clinicians * visits * 240 * (noShowRate / 100) * 0.45 * 120 +
          clinicians * 18 * 120 * 12
      );
    const noShowReduction = Math.round(noShowRate * 2.5);
    return { hoursSaved, revenue, noShowReduction };
  }, [clinicians, visits, noShowRate]);

  const results = calculate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7 bg-surface-container-lowest p-8 rounded-3xl shadow-sm space-y-8">
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="font-label-lg text-label-lg text-on-surface" htmlFor="doctor-count">
              Number of Active Clinicians
            </label>
            <span className="font-headline text-headline-md text-forest-deep font-semibold">
              {clinicians} {clinicians === 1 ? "MD" : "MDs"}
            </span>
          </div>
          <input
            className="w-full accent-forest-deep cursor-pointer h-2 bg-surface-container rounded-lg"
            id="doctor-count"
            max="25"
            min="1"
            type="range"
            value={clinicians}
            onChange={(e) => setClinicians(parseInt(e.target.value, 10))}
          />
          <div className="flex justify-between text-xs text-text-muted mt-1.5 font-code-badge">
            <span>1 Doctor</span>
            <span>12</span>
            <span>25+ Physicians</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="font-label-lg text-label-lg text-on-surface" htmlFor="visits-count">
              Daily Consultations (per Doctor)
            </label>
            <span className="font-headline text-headline-md text-forest-deep font-semibold">
              {visits} Visits
            </span>
          </div>
          <input
            className="w-full accent-forest-deep cursor-pointer h-2 bg-surface-container rounded-lg"
            id="visits-count"
            max="40"
            min="10"
            type="range"
            value={visits}
            onChange={(e) => setVisits(parseInt(e.target.value, 10))}
          />
          <div className="flex justify-between text-xs text-text-muted mt-1.5 font-code-badge">
            <span>10 Patients</span>
            <span>25</span>
            <span>40 Patients</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="font-label-lg text-label-lg text-on-surface" htmlFor="noshow-rate">
              Current No-Show Rate
            </label>
            <span className="font-headline text-headline-md text-terracotta-accent font-semibold">
              {noShowRate}%
            </span>
          </div>
          <input
            className="w-full accent-terracotta-accent cursor-pointer h-2 bg-surface-container rounded-lg"
            id="noshow-rate"
            max="35"
            min="5"
            type="range"
            value={noShowRate}
            onChange={(e) => setNoShowRate(parseInt(e.target.value, 10))}
          />
          <div className="flex justify-between text-xs text-text-muted mt-1.5 font-code-badge">
            <span>5%</span>
            <span>20%</span>
            <span>35% (High Churn)</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 bg-surface-matcha/40 p-8 lg:p-10 rounded-3xl shadow-md flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-cream text-forest-deep font-code-badge text-code-badge mb-6">
            <span className="w-2 h-2 rounded-full bg-forest-deep"></span>
            PROJECTED ANNUAL IMPACT
          </div>

          <div className="mb-6">
            <span className="font-code-badge text-code-badge text-text-muted uppercase">
              Clinician Time Returned
            </span>
            <p className="font-headline text-headline-xl text-forest-deep font-bold mt-1">
              +{results.hoursSaved.toLocaleString()} hrs
            </p>
            <p className="font-body-sm text-body-sm text-text-muted mt-0.5">
              ~360 hours saved per doctor annually in charting
            </p>
          </div>

          <div className="mb-6">
            <span className="font-code-badge text-code-badge text-text-muted uppercase">
              Net Revenue &amp; RPM Recovery
            </span>
            <p className="font-headline text-headline-xl text-terracotta-accent font-bold mt-1">
              ${results.revenue.toLocaleString()}
            </p>
            <p className="font-body-sm text-body-sm text-text-muted mt-0.5">
              From CPT 99453/54 codes and rescued appointments
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm mb-6">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-forest-deep">Autonomous No-Show Drop</span>
              <span className="font-code-badge text-code-badge font-bold text-terracotta-accent">
                -{results.noShowReduction}% Reduction
              </span>
            </div>
          </div>
        </div>

        <a
          className="inline-flex items-center justify-center w-full h-12 rounded-full bg-forest-deep text-on-primary font-label-lg text-label-lg hover:bg-primary transition-colors shadow-sm"
          href="#demo"
        >
          <span>Get Customized Practice Model</span>
          <span className="ml-2">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
