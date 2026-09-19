"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "MedScribe", href: "/products/medscribe" },
      { label: "VitalGraph", href: "/products/vitalgraph" },
      { label: "ClinicOps", href: "/products/clinicops" },
      { label: "PatientGraph", href: "/products/patientgraph" },
      { label: "ClinicalKG Enterprise", href: "/products/enterprise" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Clinical Documentation", href: "/solutions/clinical-documentation" },
      { label: "Remote Patient Monitoring", href: "/solutions/rpm" },
      { label: "Clinic Operations", href: "/solutions/clinic-operations" },
      { label: "Patient Engagement", href: "/solutions/patient-engagement" },
      { label: "Clinical Research", href: "/solutions/clinical-research" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Clinics", href: "/industries/clinics" },
      { label: "Hospitals", href: "/industries/hospitals" },
      { label: "Health Systems", href: "/industries/health-systems" },
      { label: "Research", href: "/industries/research" },
      { label: "Healthcare Organizations", href: "/industries/healthcare-organizations" },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Clinical Knowledge Graph", href: "/platform/clinical-knowledge-graph" },
      { label: "GraphRAG", href: "/platform/graphrag" },
      { label: "AI Reasoning", href: "/platform/ai-reasoning" },
      { label: "Evidence & Citations", href: "/platform/evidence-citations" },
      { label: "Data Normalization", href: "/platform/data-normalization" },
      { label: "APIs", href: "/platform/apis" },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
    children: [
      { label: "FHIR", href: "/integrations/fhir" },
      { label: "HL7", href: "/integrations/hl7" },
      { label: "EHR", href: "/integrations/ehr" },
      { label: "Medical Devices", href: "/integrations/medical-devices" },
      { label: "Communication", href: "/integrations/communication" },
    ],
  },
  { label: "Security", href: "/security" },
  { label: "Evidence", href: "/evidence" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Research", href: "/resources/research" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Documentation", href: "/resources/documentation" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About", href: "/company/about" },
      { label: "Team", href: "/company/team" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-forest-deep text-on-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between text-xs font-code-badge">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
              SOC-2 TYPE II
            </span>
            <span className="hidden sm:inline text-on-primary/80">
              Powered by Clinical Knowledge Graph
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-emerald-300 text-[11px]">Air-Gapped Node Online</span>
          </div>
        </div>
      </div>

      <nav
        className={`bg-surface-cream/95 backdrop-blur-md transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-deep text-on-primary font-headline text-xl font-bold">
              M
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline text-xl font-bold text-forest-deep tracking-tight">
                MedSpace
              </span>
              <span className="text-[10px] font-code-badge uppercase tracking-widest text-forest-deep/60">
                AI Platform
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-body font-medium rounded-md transition-colors ${
                    activeDropdown === item.label
                      ? "text-forest-deep bg-forest-deep/5"
                      : "text-forest-deep/70 hover:text-forest-deep hover:bg-forest-deep/5"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  )}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-forest-deep/10 p-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm font-body text-forest-deep/70 hover:text-forest-deep hover:bg-surface-cream rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-1.5 rounded-lg bg-forest-deep px-4 py-2.5 text-sm font-body font-semibold text-on-primary transition-colors hover:bg-forest-deep/90"
            >
              <span className="material-symbols-outlined text-[18px]">play_arrow</span>
              Request Demo
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-forest-deep hover:bg-forest-deep/5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(theme(spacing.9)+theme(spacing.20))] z-40 bg-surface-cream overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            <div className="pt-4 border-t border-forest-deep/10 mt-4">
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-forest-deep px-4 py-3 text-sm font-body font-semibold text-on-primary"
              >
                <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block px-3 py-2.5 text-base font-body font-medium text-forest-deep/80 hover:text-forest-deep hover:bg-forest-deep/5 rounded-lg"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2.5 text-base font-body font-medium text-forest-deep/80 hover:text-forest-deep hover:bg-forest-deep/5 rounded-lg"
      >
        {item.label}
        <span className="material-symbols-outlined text-[20px] transition-transform duration-200">
          {open ? "expand_less" : "expand_more"}
        </span>
      </button>
      {open && (
        <div className="pl-4 pb-1">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onClose}
              className="block px-3 py-2 text-sm font-body text-forest-deep/60 hover:text-forest-deep hover:bg-forest-deep/5 rounded-lg"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
