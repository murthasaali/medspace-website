"use client";

import { useState } from "react";

const navLinks = [
  { label: "Platform", href: "#", active: true },
  { label: "Products", href: "#products" },
  { label: "Hardware Kits", href: "#hardware" },
  { label: "ROI Calculator", href: "#roi-calc" },
  { label: "Evidence & Benchmarks", href: "#evidence" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-cream/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="w-full bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-9 flex items-center justify-between text-on-surface-variant">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-primary-fixed-variant font-code-badge text-code-badge font-medium">
              SOC-2 TYPE II
            </span>
            <span className="font-code-badge text-code-badge text-text-muted hidden sm:inline">
              Verified Clinical Knowledge Graph v2.4 &bull; HIPAA &amp; SOC-2 Ready &bull; Zero Cloud PHI Egress
            </span>
            <span className="font-code-badge text-code-badge text-text-muted sm:hidden">
              Clinical KG v2.4 &bull; Zero PHI Egress
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-accent"></span>
              Air-Gapped Node Online
            </span>
          </div>
        </div>
      </div>
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8 lg:gap-12">
          <a className="flex items-center gap-2.5 text-forest-deep focus:outline-none" href="#">
            <span className="w-7 h-7 rounded-lg bg-forest-deep text-on-primary flex items-center justify-center font-headline text-headline-sm">
              M
            </span>
            <div className="flex flex-col">
              <span className="font-headline text-headline-md leading-none tracking-tight text-forest-deep">
                MedSpace
              </span>
              <span className="font-code-badge text-code-badge text-sage-muted tracking-wider uppercase">
                Clinical AI
              </span>
            </div>
          </a>
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.active
                    ? "text-forest-deep font-semibold bg-surface-matcha/40 px-3 py-1.5 rounded-full transition-colors"
                    : "font-label-md text-label-md text-on-surface-variant hover:text-forest-deep transition-colors"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-full bg-surface-container text-forest-deep font-label-md text-label-md hover:bg-surface-container-high hover:text-on-surface transition-colors"
            href="#"
          >
            Interactive Demo
          </a>
          <a
            className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-forest-deep text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm gap-1.5"
            href="#demo"
          >
            <span>Book a Consultation</span>
            <span className="text-xs">&rarr;</span>
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1 shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
