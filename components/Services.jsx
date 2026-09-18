"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Megaphone,
  Users,
  BarChart3,
  PanelsTopLeft,
  PenTool,
  Search,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website & Web App",
    description:
      "High-performance websites and web applications built for speed, SEO and conversion.",
    icon: Code2,
    primary: true,
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "React Native and Flutter applications with scalable architecture and native polish.",
    icon: Smartphone,
    primary: true,
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "AWS, Docker, Kubernetes, CI/CD, GitOps, monitoring and production automation.",
    icon: Cloud,
    primary: true,
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Research-driven interfaces and digital experiences designed around real users.",
    icon: Palette,
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "Performance campaigns engineered around CAC, LTV and contribution margin.",
    icon: Megaphone,
  },
  {
    number: "06",
    title: "Lead Generation",
    description:
      "High-intent leads designed to become real customers and qualified opportunities.",
    icon: Users,
  },
  {
    number: "07",
    title: "Meta & Google Ads",
    description:
      "Full-funnel campaigns with creative testing and advanced tracking.",
    icon: BarChart3,
  },
  {
    number: "08",
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages designed for measurable performance.",
    icon: PanelsTopLeft,
  },
  {
    number: "09",
    title: "Brand & Creative",
    description:
      "Visual systems and creative campaigns that strengthen brand perception.",
    icon: PenTool,
  },
  {
    number: "10",
    title: "SEO & Content",
    description:
      "Technical SEO, topical authority and content for modern search.",
    icon: Search,
  },
  {
    number: "11",
    title: "CRO & Automation",
    description:
      "CRM, WhatsApp and workflow automation designed to compound growth.",
    icon: Workflow,
  },
];

export default function Services() {
  const orbitRef = useRef(null);
  const rotationRef = useRef(null);

  useEffect(() => {
    const orbit = orbitRef.current;

    if (!orbit) return;

    rotationRef.current = gsap.to(orbit, {
      rotation: 360,
      duration: 38,
      repeat: -1,
      ease: "none",
    });

    return () => {
      rotationRef.current?.kill();
    };
  }, []);

  const pauseOrbit = () => {
    rotationRef.current?.pause();
  };

  const resumeOrbit = () => {
    rotationRef.current?.resume();
  };

  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-white py-28"
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Main glow */}
        <div className="services-main-glow absolute left-1/2 top-[55%] h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[130px]" />

        {/* Decorative glow */}
        <div className="absolute left-[-150px] top-[35%] h-[350px] w-[350px] rounded-full bg-indigo-400/[0.05] blur-[100px]" />

      </div>

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>

            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-blue-600" />

              </span>

              What we build

            </div>

            <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.82] tracking-[-0.075em] text-[#101828]">

              DIGITAL

              <br />

              <span className="text-slate-300">
                PRODUCTS
              </span>

              <br />

              THAT SCALE.

            </h2>

          </div>

          <p className="max-w-md text-base leading-7 text-slate-500 md:text-lg">

            Websites, applications, cloud infrastructure and growth
            systems — engineered together to create complete digital
            products.

          </p>

        </div>

      </div>

      {/* ================================================= */}
      {/* ORBIT AREA */}
      {/* ================================================= */}

      <div className="relative mx-auto mt-10 flex h-[720px] max-w-[1200px] items-center justify-center overflow-hidden">

        {/* ================================================= */}
        {/* ORBIT RINGS */}
        {/* ================================================= */}

        <div className="absolute h-[680px] w-[680px] rounded-full border border-slate-200" />

        <div className="absolute h-[540px] w-[540px] rounded-full border border-blue-100" />

        <div className="absolute h-[390px] w-[390px] rounded-full border border-slate-100" />

        {/* Rotating decorative ring */}

        <div className="absolute h-[620px] w-[620px] animate-[spin_35s_linear_infinite] rounded-full border border-dashed border-blue-100" />

        {/* ================================================= */}
        {/* ORBIT DOTS */}
        {/* ================================================= */}

        <div className="absolute left-[50%] top-[18px] h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.5)]" />

        <div className="absolute bottom-[70px] right-[17%] h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]" />

        <div className="absolute bottom-[150px] left-[17%] h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]" />

        {/* ================================================= */}
        {/* ORBIT */}
        {/* ================================================= */}

        <div
          ref={orbitRef}
          className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2"
        >

          {services.map((service, index) => {

            const angle =
              (index / services.length) * 360;

            return (
              <OrbitCard
                key={service.number}
                service={service}
                angle={angle}
                pauseOrbit={pauseOrbit}
                resumeOrbit={resumeOrbit}
              />
            );
          })}

        </div>

        {/* ================================================= */}
        {/* CENTER */}
        {/* ================================================= */}

        <div className="services-center absolute z-30 flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_30px_100px_rgba(37,99,235,0.12)]">

          {/* Pulse */}

          <div className="absolute inset-[-15px] animate-ping rounded-full border border-blue-100 opacity-30" />

          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111827] text-2xl font-black text-white shadow-xl">

            T

          </div>

          <p className="mt-4 text-xl font-black tracking-[-0.04em] text-slate-900">

            TRIONEX<span className="text-blue-600">.</span>

          </p>

          <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">

            Digital Product Studio

          </p>

          <div className="mt-4 flex items-center gap-2">

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />

            <span className="text-[8px] font-semibold uppercase tracking-widest text-slate-400">

              Building

            </span>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 md:flex-row md:items-center lg:px-8">

        <div className="flex items-center gap-3">

          <span className="text-xs font-bold text-slate-300">
            01
          </span>

          <div className="h-px w-16 bg-slate-200" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            11 Capabilities
          </span>

        </div>

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Hover a service to pause
        </p>

      </div>

    </section>
  );
}


/* ================================================= */
/* ORBIT CARD */
/* ================================================= */

function OrbitCard({
  service,
  angle,
  pauseOrbit,
  resumeOrbit,
}) {

  const Icon = service.icon;

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `rotate(${angle}deg) translateY(-340px)`,
      }}
    >

      {/* Counter rotation */}

      <div
        className="orbit-counter"
        onMouseEnter={pauseOrbit}
        onMouseLeave={resumeOrbit}
      >

        {/* Initial counter rotation */}

        <div
          style={{
            transform: `rotate(-${angle}deg)`,
          }}
        >

          {/* Card */}

          <div
            className={`service-orbit-card group relative w-[190px] cursor-pointer rounded-[24px] border bg-white p-5 text-left transition-all duration-500 hover:-translate-y-4 ${
              service.primary
                ? "border-blue-200 shadow-[0_25px_70px_rgba(37,99,235,0.13)]"
                : "border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.07)]"
            }`}
          >

            {/* Number */}

            <span className="absolute right-4 top-4 text-[9px] font-bold tracking-widest text-slate-300">

              {service.number}

            </span>

            {/* Icon */}

            <div
              className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                service.primary
                  ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                  : "bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
              }`}
            >

              <Icon size={21} strokeWidth={1.7} />

            </div>

            {/* Title */}

            <h3 className="max-w-[150px] text-[17px] font-black leading-[1] tracking-[-0.04em] text-slate-900">

              {service.title}

            </h3>

            {/* Description */}

            <p className="mt-3 text-[10px] leading-4 text-slate-400">

              {service.description}

            </p>

            {/* Link */}

            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

              <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600">

                Explore

              </span>

              <ArrowUpRight
                size={15}
                className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
              />

            </div>

            {/* Hover glow */}

            <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-blue-500/[0.08] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          </div>

        </div>

      </div>

    </div>
  );
}