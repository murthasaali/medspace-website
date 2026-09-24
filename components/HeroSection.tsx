import Link from "next/link";
import { ShaderBackground } from "@/components/ui/shader-r";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden h-screen flex items-end bg-surface-porcelain">
      <ShaderBackground className="absolute inset-0 h-full w-full" />

      <div className="absolute inset-0 bg-forest-deep/35 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pb-16 lg:pb-24 max-w-7xl mx-auto">
        <h1 className="font-body text-headline-2xl text-white tracking-tight mb-6 font-extralight">
          Where clinical data becomes<br />
          <span className="font-body font-light text-terracotta-accent">clinical action.</span>
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Link
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-forest-deep text-on-primary font-label-lg text-label-lg hover:bg-primary shadow-md transition-all gap-2 group"
            href="#products"
          >
            <span>Explore Products</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
          <Link
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white/80 backdrop-blur-sm text-forest-deep font-label-lg text-label-lg hover:bg-white transition-colors shadow-md border border-border-tactile"
            href="/company/contact"
          >
            <span>Talk to MedSpace AI</span>
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-lg max-w-2xl">
          <div className="absolute inset-0">
            <ShaderBackground />
          </div>
          <p className="relative z-10 font-body-md text-lg text-white px-4 py-3">
            MedSpace AI is designed to support healthcare workflows and decision-making. It does not replace qualified healthcare professionals or emergency medical services.
          </p>
        </div>
      </div>
    </section>
  );
}