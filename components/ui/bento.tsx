"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export default function FUIBentoGridDark() {
  return (
    <div className="container mx-auto bg-gray-950/10 flex flex-col p-10">
      <h1 className="font-body tracking-tight text-3xl md:text-5xl text-forest-deep">
        Platform
      </h1>
      <p className="max-w-3xl text-2xl/8 font-medium tracking-tight mt-2 bg-gradient-to-br from-forest-deep/90 to-forest-deep/80 bg-clip-text text-transparent">
        Five products. One clinical knowledge layer.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Clinical Documentation"
          title="MedScribe Graph"
          description="Ambient and dictated consultation workflows that convert clinical conversations into structured documentation and connected clinical data."
          graphic={
            <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80)] object-cover" />
          }
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Remote Patient Monitoring"
          title="VitalGraph"
          description="Connect patient-generated and device data with clinical context to support monitoring, trends and clinician review."
          graphic={
            <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80)] object-cover" />
          }
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Clinic Operations"
          title="ClinicOps Graph"
          description="Scheduling, reminders, patient intake, AI-assisted communication and operational workflows for clinics."
          graphic={
            <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80)] object-cover"
            />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Patient Experience"
          title="PatientGraph Companion"
          description="A patient-facing health assistant for understanding health information, medication context and follow-up."
          graphic={
            <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80)] object-cover" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Enterprise Intelligence"
          title="ClinicalKG Enterprise"
          description="A governed clinical knowledge graph platform for healthcare organizations, research and enterprise data workflows."
          graphic={
            <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)] object-cover" />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </div>
  );
}

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-black dark:bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] bg-black shadow-sm ring-1 ring-white/10",
        "data-[dark]:bg-gray-800 data-[dark]:ring-white/15"
      )}
    >
      <div className="relative h-[29rem] shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%] opacity-25" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%] opacity-25" />
        )}
      </div>
      <div className="relative p-10 z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl text-white">
        <h1>{eyebrow}</h1>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-gray-150 group-data-[dark]:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-100 dark:text-gray-300 group-data-[dark]:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
