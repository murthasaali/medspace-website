"use client";
import ModelViewer from "@/components/ModelViewer";
import { GradientOrb } from "@/components/ui/gradient-orb";
import { ShaderBackground } from "@/components/ui/shader-r";

export default function FoundationShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-porcelain py-20 px-6 lg:px-12" id="foundation">
      <div className="absolute inset-0 opacity-25">
        <ShaderBackground />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-forest-deep font-code-badge text-code-badge mb-4">
            <span className="w-2 h-2 rounded-full bg-terracotta-accent"></span>
            INFRASTRUCTURE
          </span>
          <h2 className="font-headline text-headline-xl text-forest-deep tracking-tight">
            Built for the modern{" "}
            <span className="italic text-terracotta-accent">healthcare institution.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-lg">
            From community clinics to enterprise health systems, MedSpace AI deploys inside your walls — one governed
            clinical knowledge graph that connects every record, device, and person.
          </p>
        </div>

        {/* 3D Model stacked over transparent GradientOrb */}
        <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <GradientOrb
              config={{
                background: "transparent",
                hue: 140,
                rotationSpeed: 0.3,
                noiseScale: 0.65,
                innerRadius: 0.15,
              }}
            />
          </div>
          <div className="absolute inset-0">
            <ModelViewer src="/hospital.glb" alt="MedSpace AI hospital infrastructure model" exposure="1.1" rotate="45deg 75deg auto" />
          </div>
        </div>
      </div>
    </section>
  );
}