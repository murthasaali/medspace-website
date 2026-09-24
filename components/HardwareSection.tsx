export default function HardwareSection() {
  return (
    <section className="w-full py-20 px-6 lg:px-12 max-w-8xl mx-auto" id="hardware">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span className="font-code-badge text-code-badge text-text-muted uppercase tracking-widest block mb-2">Physical Clinical Integration</span>
          <h2 className="font-headline text-headline-xl text-forest-deep">
            Pre-Configured Hardware. <span className="italic text-terracotta-accent">Bedside Simplicity.</span>
          </h2>
        </div>
        <p className="font-body-md text-body-md text-text-muted max-w-md">
          MedSpace hardware arrives pre-flashed with VeritasGraph credentials. Zero Wi-Fi headaches, instant cellular synchronization out of the box.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-surface-container-lowest rounded-3xl p-7 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
          <div>
            <div className="w-full h-52 rounded-2xl bg-surface-container-low mb-6 p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-full bg-surface-cream text-forest-deep font-code-badge text-code-badge font-semibold">Cellular 4G LTE-M</span>
                <span className="material-symbols-outlined text-forest-deep text-[20px]">sensors</span>
              </div>
              <div className="flex items-center justify-center py-2">
                <svg className="w-32 h-24 text-forest-deep" fill="none" stroke="currentColor" viewBox="0 0 120 90">
                  <rect className="fill-surface-cream" height="70" rx="8" strokeWidth="2" width="90" x="15" y="10" />
                  <rect className="fill-surface-matcha/40" height="30" rx="4" strokeWidth="1.5" width="70" x="25" y="22" />
                  <text fill="#0F3E17" fontFamily="Space Mono" fontSize="14" fontWeight="bold" x="35" y="42">120/80</text>
                  <circle cx="60" cy="65" fill="#E07A5F" r="4" />
                  <circle cx="75" cy="65" fill="#0F3E17" r="4" />
                </svg>
              </div>
              <div className="flex items-center justify-between text-xs text-text-muted z-10 font-code-badge">
                <span>FDA Class II Cleared</span>
                <span>Pre-Paired</span>
              </div>
            </div>
            <span className="font-code-badge text-code-badge text-terracotta-accent uppercase font-bold tracking-wider block mb-1">Direct-to-Patient</span>
            <h3 className="font-headline text-headline-md text-forest-deep mb-2">RPM Starter Kit</h3>
            <p className="font-body-sm text-body-sm text-text-muted mb-6">
              Includes cellular blood pressure cuff, continuous glucometer, and weight scale. Zero patient setup; syncs direct to VitalGraph RPM engine.
            </p>
          </div>
          <div className="pt-4 bg-surface-container-low/50 -mx-7 -mb-7 p-6 rounded-b-3xl flex items-center justify-between">
            <div>
              <span className="font-code-badge text-code-badge text-text-muted block">Reimbursement</span>
              <span className="font-headline text-headline-sm text-forest-deep">$120/mo / patient</span>
            </div>
            <span className="w-10 h-10 rounded-full bg-forest-deep text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </span>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl p-7 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
          <div>
            <div className="w-full h-52 rounded-2xl bg-surface-container-low mb-6 p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-full bg-surface-cream text-forest-deep font-code-badge text-code-badge font-semibold">NFC + Optical OCR</span>
                <span className="material-symbols-outlined text-forest-deep text-[20px]">tablet_mac</span>
              </div>
              <div className="flex items-center justify-center py-2">
                <svg className="w-32 h-24 text-forest-deep" fill="none" stroke="currentColor" viewBox="0 0 120 90">
                  <rect className="fill-surface-cream" height="80" rx="6" strokeWidth="2" width="70" x="25" y="5" />
                  <line strokeWidth="2" x1="35" x2="85" y1="20" y2="20" />
                  <line strokeDasharray="2 2" strokeWidth="1.5" x1="35" x2="70" y1="30" y2="30" />
                  <rect className="fill-surface-matcha/30" height="25" rx="3" strokeWidth="1" width="50" x="35" y="45" />
                  <circle cx="60" cy="78" fill="#0F3E17" r="3" />
                </svg>
              </div>
              <div className="flex items-center justify-between text-xs text-text-muted z-10 font-code-badge">
                <span>Anti-Glare Medical Display</span>
                <span>Fleet Managed</span>
              </div>
            </div>
            <span className="font-code-badge text-code-badge text-forest-deep uppercase font-bold tracking-wider block mb-1">Reception Automation</span>
            <h3 className="font-headline text-headline-md text-forest-deep mb-2">Clinic Check-in Kiosk</h3>
            <p className="font-body-sm text-body-sm text-text-muted mb-6">
              Autonomous insurance scan, copay collection, dynamic clinical intake questions, and direct EHR queue injection in 45 seconds.
            </p>
          </div>
          <div className="pt-4 bg-surface-container-low/50 -mx-7 -mb-7 p-6 rounded-b-3xl flex items-center justify-between">
            <div>
              <span className="font-code-badge text-code-badge text-text-muted block">Intake Speed</span>
              <span className="font-headline text-headline-sm text-forest-deep">&lt; 1 min Check-In</span>
            </div>
            <span className="w-10 h-10 rounded-full bg-forest-deep text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </span>
          </div>
        </div>

        <div className="bg-surface-matcha/30 rounded-3xl p-7 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
          <div>
            <div className="w-full h-52 rounded-2xl bg-surface-container-lowest mb-6 p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-full bg-forest-deep text-on-primary font-code-badge text-code-badge font-semibold">Air-Gapped Node</span>
                <span className="material-symbols-outlined text-forest-deep text-[20px]">developer_board</span>
              </div>
              <div className="flex items-center justify-center py-2">
                <svg className="w-32 h-24 text-forest-deep" fill="none" stroke="currentColor" viewBox="0 0 120 90">
                  <rect className="fill-forest-deep" height="50" rx="6" strokeWidth="2" width="80" x="20" y="20" />
                  <line stroke="#D9EBD7" strokeWidth="2" x1="30" x2="90" y1="35" y2="35" />
                  <line stroke="#D9EBD7" strokeWidth="2" x1="30" x2="70" y1="45" y2="45" />
                  <circle cx="85" cy="55" fill="#E07A5F" r="3" />
                  <circle cx="75" cy="55" fill="#D9EBD7" r="3" />
                </svg>
              </div>
              <div className="flex items-center justify-between text-xs text-text-muted z-10 font-code-badge">
                <span>Whisper-Quiet 22dB</span>
                <span>NVIDIA RTX Ada</span>
              </div>
            </div>
            <span className="font-code-badge text-code-badge text-forest-deep uppercase font-bold tracking-wider block mb-1">Edge Intelligence</span>
            <h3 className="font-headline text-headline-md text-forest-deep mb-2">Clinic AI Sovereign Node</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
              Whisper-quiet local micro-server running local Ollama inference models. 100% operational during internet outages with zero cloud exposure.
            </p>
          </div>
          <div className="pt-4 bg-surface-matcha/60 -mx-7 -mb-7 p-6 rounded-b-3xl flex items-center justify-between">
            <div>
              <span className="font-code-badge text-code-badge text-forest-deep block">Security Guarantee</span>
              <span className="font-headline text-headline-sm text-forest-deep">Zero Outbound Telemetry</span>
            </div>
            <span className="w-10 h-10 rounded-full bg-forest-deep text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
