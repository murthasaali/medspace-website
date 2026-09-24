"use client";

const partners = [
  { name: "Epic Systems", note: "Native FHIR R4 Connector" },
  { name: "Oracle Health (Cerner)", note: "HL7 v2 & Millenium Feed" },
  { name: "Athenahealth", note: "API & Ambulatory Sync" },
  { name: "Mayo Clinic Network", note: "Clinical Research Pilot" },
  { name: "Cleveland Clinic", note: "Cardiovascular RPM Trial" },
  { name: "Johns Hopkins Medicine", note: "Oncology Care Pathway" },
  { name: "Mass General Brigham", note: "Ambient Scribe Evaluation" },
  { name: "Stanford Health Care", note: "Topological KG Benchmark" },
];

export default function PartnerTrustStrip() {
  return (
    <section className="w-full bg-canvas-white border-y border-mist py-10 px-6 lg:px-12">
      <div className="max-w-8xl mx-auto">
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-ember-orange" />
            <span className="font-code-badge text-[12px] uppercase tracking-widest text-brass font-medium">
              Interoperability &bull; Trusted across 80+ health systems &amp; EHR endpoints
            </span>
          </div>
          <span className="font-code-badge text-[11px] text-slate uppercase tracking-wider">
            SOC 2 Type II &bull; HIPAA Compliant &bull; 100% On-Premise Sovereign
          </span>
        </div>

        {/* Logos strip in Ventriloc monochrome Graphite */}
        <div className="reveal-on-scroll grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group p-3.5 rounded-md border border-transparent hover:border-mist hover:bg-fog transition-all duration-200 flex flex-col justify-center min-h-[64px]"
            >
              <span className="font-headline text-[15px] font-medium text-graphite/85 group-hover:text-graphite transition-colors tracking-tight leading-tight">
                {partner.name}
              </span>
              <span className="font-code-badge text-[9.5px] text-slate/80 group-hover:text-steel transition-colors tracking-tight mt-1 line-clamp-1">
                {partner.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
