import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden h-screen flex items-end bg-surface-porcelain">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-contain"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Corner gradient - white to transparent from bottom-left */}
      <div className="absolute inset-0 bg-gradient-to-tr from-surface-porcelain/90 via-surface-porcelain/40 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pb-16 lg:pb-24 max-w-8xl mx-auto">
        <h1 className="font-body text-headline-2xl text-forest-deep tracking-tight mb-6 font-extralight">
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

        <p className="font-body-sm text-sm text-white bg-forest-deep/90 backdrop-blur-sm rounded-lg px-4 py-3 max-w-xl">
          MedSpace AI is designed to support healthcare workflows and decision-making. It does not replace qualified healthcare professionals or emergency medical services.
        </p>
      </div>
    </section>
  );
}
