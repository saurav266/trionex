"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Cloud,
  Bot,
  Palette,
  LayoutTemplate,
  Megaphone,
  Target,
  Search,
  PenTool,
  BarChart3,
  Workflow,
  Check,
} from "lucide-react";

import AnimatedDigitalSystem from "@/components/AnimatedDigitalSystem";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Website & Web App",
    short: "Build digital products",
    description:
      "High-performance websites and scalable web applications built for modern businesses.",
    href: "/services/web-development",
    icon: Code2,
    tags: ["Next.js", "React", "APIs"],
    group: "build",
  },
  {
    number: "02",
    title: "Mobile App Development",
    short: "Create mobile experiences",
    description:
      "Fast, intuitive mobile experiences designed to turn ideas into reliable products.",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    tags: ["iOS", "Android", "Cross-platform"],
    group: "build",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    short: "Engineer infrastructure",
    description:
      "Cloud infrastructure, CI/CD and automation engineered for reliability and scale.",
    href: "/services/cloud-devops",
    icon: Cloud,
    tags: ["AWS", "Kubernetes", "CI/CD"],
    group: "infra",
  },
  {
    number: "04",
    title: "AI Agents & Automation",
    short: "Automate intelligent work",
    description:
      "AI-powered agents and workflows that automate repetitive work and improve operations.",
    href: "/services/ai-agents",
    icon: Bot,
    tags: ["AI Agents", "LLMs", "Automation"],
    group: "infra",
  },
  {
    number: "05",
    title: "UI/UX Design",
    short: "Design better experiences",
    description:
      "Clean, conversion-focused interfaces that make complex digital products simple to use.",
    href: "/services/ui-ux-design",
    icon: Palette,
    tags: ["UX Research", "UI", "Prototyping"],
    group: "design",
  },
  {
    number: "06",
    title: "Landing Page Design",
    short: "Turn visits into action",
    description:
      "Focused landing pages built to communicate value clearly and convert visitors.",
    href: "/services/landing-page-design",
    icon: LayoutTemplate,
    tags: ["Design", "CRO", "A/B Testing"],
    group: "design",
  },
  {
    number: "07",
    title: "Digital Marketing",
    short: "Create demand",
    description:
      "Data-driven digital campaigns designed to create awareness, demand and measurable growth.",
    href: "/services/digital-marketing",
    icon: Megaphone,
    tags: ["Strategy", "Campaigns", "Analytics"],
    group: "growth",
  },
  {
    number: "08",
    title: "Lead Generation",
    short: "Build acquisition systems",
    description:
      "Acquisition systems that consistently turn the right audience into qualified opportunities.",
    href: "/services/lead-generation",
    icon: Target,
    tags: ["Funnels", "Leads", "Acquisition"],
    group: "growth",
  },
  {
    number: "09",
    title: "Meta & Google Ads",
    short: "Scale paid acquisition",
    description:
      "Performance advertising across major platforms with a focus on efficient acquisition.",
    href: "/services/performance-marketing",
    icon: BarChart3,
    tags: ["Meta Ads", "Google Ads", "ROAS"],
    group: "growth",
  },
  {
    number: "10",
    title: "SEO & Content",
    short: "Own organic visibility",
    description:
      "Search-focused content and technical foundations that build sustainable organic visibility.",
    href: "/services/seo-content",
    icon: Search,
    tags: ["SEO", "Content", "Technical SEO"],
    group: "growth",
  },
  {
    number: "11",
    title: "Brand & Creative",
    short: "Build brand identity",
    description:
      "Distinctive visual systems that help brands look credible, consistent and memorable.",
    href: "/services/brand-creative",
    icon: PenTool,
    tags: ["Branding", "Creative", "Identity"],
    group: "design",
  },
  {
    number: "12",
    title: "CRO & Automation",
    short: "Optimize every step",
    description:
      "Conversion optimization and automated workflows that remove friction from the customer journey.",
    href: "/services/cro-automation",
    icon: Workflow,
    tags: ["CRO", "Workflows", "Automation"],
    group: "growth",
  },
];

const groups = [
  {
    id: "build",
    number: "01",
    title: "Build",
    text: "Products people use.",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    text: "Experiences people remember.",
  },
  {
    id: "infra",
    number: "03",
    title: "Deploy",
    text: "Systems that stay reliable.",
  },
  {
    id: "growth",
    number: "04",
    title: "Grow",
    text: "Acquisition that compounds.",
  },
];

export default function ServicesPage() {
  const pageRef = useRef(null);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.11,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".section-heading",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".architecture-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".process-row",
        { opacity: 0, x: -25 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".process-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".cta-panel",
        { opacity: 0, y: 45, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-panel",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="relative overflow-hidden bg-white text-slate-950"
    >
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[780px] overflow-hidden border-b border-slate-200">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
          }}
        />

        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-indigo-500/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-blue-500/[0.08] blur-3xl" />

        <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-8">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="hero-reveal mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
                Trionex / Digital Systems
              </span>
            </div>

            <h1 className="hero-reveal max-w-4xl text-5xl font-bold leading-[0.91] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[78px]">
              12 capabilities.
              <span className="block text-slate-300">One system.</span>
            </h1>

            <p className="hero-reveal mt-8 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
              We build, design, deploy and grow digital products through one
              connected system — combining technology, creative and
              performance.
            </p>

            <div className="hero-reveal mt-9 flex flex-wrap gap-3">
              <Link
                href="#all-services"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600"
              >
                Explore the system
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50"
              >
                Start a project
              </Link>
            </div>

            <div className="hero-reveal mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-slate-200 pt-6 sm:grid-cols-4">
              {groups.map((group) => (
                <div key={group.id} className="flex items-start gap-2.5">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-indigo-500">
                    {group.number}
                  </span>

                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                      {group.title}
                    </div>
                    <div className="mt-1 text-[10px] leading-4 text-slate-400">
                      {group.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — REAL ANIMATED SYSTEM */}
          <div className="hero-reveal relative z-10 mx-auto w-full max-w-[680px]">
            <AnimatedDigitalSystem />
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE
      ========================================================== */}
      <section className="architecture-section border-b border-slate-200 bg-slate-50 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="section-heading mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-indigo-600" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600">
                  Digital architecture
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-[-0.055em] md:text-6xl">
                Every capability
                <span className="block text-slate-300">has a role.</span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-500 lg:justify-self-end">
              Instead of treating services as isolated deliverables, we connect
              them into a system where product, infrastructure, design and
              growth reinforce each other.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.05)] md:grid-cols-4">
            {groups.map((group) => {
              const items = services.filter(
                (service) => service.group === group.id
              );

              return (
                <div
                  key={group.id}
                  className="relative border-b border-slate-200 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-indigo-500">
                      {group.number}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
                      {items.length} modules
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-bold tracking-tight">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {group.text}
                  </p>

                  <div className="mt-8 space-y-3">
                    {items.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="group flex items-center gap-3 rounded-xl border border-transparent px-2 py-2 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/60"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-indigo-600" />

                        <span className="text-xs font-medium text-slate-600 group-hover:text-slate-950">
                          {service.title}
                        </span>

                        <ArrowUpRight
                          size={13}
                          className="ml-auto text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ALL SERVICES
      ========================================================== */}
      <section id="all-services" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-indigo-600" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600">
                  12 modules
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-[-0.055em] md:text-6xl">
                Choose your
                <span className="text-slate-300"> capability.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Hover to inspect a module. Click to open its dedicated service
              experience.
            </p>
          </div>

          <div className="services-grid grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_30px_90px_rgba(15,23,42,0.07)] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.number;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  onMouseEnter={() => setActiveService(service.number)}
                  onMouseLeave={() => setActiveService(null)}
                  className={`service-card group relative min-h-[355px] overflow-hidden border-b border-r border-slate-200 bg-white p-7 transition-all duration-500 sm:p-8 ${
                    isActive
                      ? "z-10 -translate-y-1 shadow-[0_25px_80px_rgba(79,70,229,0.13)]"
                      : ""
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/[0.08] blur-3xl transition-all duration-700 ${
                      isActive ? "scale-125 opacity-100" : "opacity-60"
                    }`}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? "border-indigo-200 bg-indigo-50 text-indigo-600"
                            : "border-slate-200 bg-slate-50 text-slate-900"
                        }`}
                      >
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-300">
                        {service.number}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <div className="mb-5 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
                        {service.short}
                      </div>

                      <h3 className="max-w-[320px] text-2xl font-bold tracking-[-0.04em]">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-[330px] text-sm leading-6 text-slate-500">
                        {service.description}
                      </p>

                      <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                        <span
                          className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                            isActive ? "text-indigo-600" : "text-slate-400"
                          }`}
                        >
                          Open module
                        </span>

                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                            isActive
                              ? "border-indigo-200 bg-indigo-600 text-white"
                              : "border-slate-200 text-slate-500"
                          }`}
                        >
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-indigo-600 transition-all duration-700 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section className="process-section border-y border-slate-200 bg-slate-50 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-indigo-600" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600">
                  The operating model
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-[-0.055em] md:text-5xl">
                From idea
                <span className="block text-slate-300">to impact.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-500">
                A connected workflow keeps strategy, technology and growth
                moving in the same direction.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {[
                [
                  "01",
                  "Discover",
                  "Understand the business, audience and opportunity.",
                ],
                [
                  "02",
                  "Build",
                  "Design and develop the right digital solution.",
                ],
                [
                  "03",
                  "Deploy",
                  "Launch reliable infrastructure and workflows.",
                ],
                [
                  "04",
                  "Optimize",
                  "Measure performance and continuously improve.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="process-row grid gap-5 py-7 md:grid-cols-[70px_180px_1fr] md:items-center"
                >
                  <span className="font-mono text-xs tracking-[0.18em] text-indigo-600">
                    {number}
                  </span>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="px-6 py-24 md:py-32 lg:px-8">
        <div className="cta-panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-16 text-white shadow-[0_35px_100px_rgba(15,23,42,0.2)] md:px-14 md:py-20">
          <div className="pointer-events-none absolute -right-28 -top-32 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-indigo-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-300">
                Start the system
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Have a project
              <span className="block text-white/30">in mind?</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/50 md:text-lg">
              Tell us what you're building, what needs to improve, or where
              you're stuck. We'll assemble the right capabilities around your
              goal.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50"
            >
              Start a project

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="absolute right-8 top-8 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.8)]" />
            Digital partner / 01
          </div>

          <div className="absolute bottom-8 right-8 hidden text-right md:block">
            {["Strategy", "Design", "Technology"].map((item) => (
              <div
                key={item}
                className="mt-2 flex items-center justify-end gap-2 text-xs text-white/40 first:mt-0"
              >
                <Check size={14} className="text-indigo-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .service-card:nth-child(3n) {
          border-right-width: 0;
        }

        @media (max-width: 1023px) {
          .service-card:nth-child(3n) {
            border-right-width: 1px;
          }

          .service-card:nth-child(2n) {
            border-right-width: 0;
          }
        }

        @media (max-width: 639px) {
          .service-card {
            border-right-width: 0 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
