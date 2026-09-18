"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const systems = [
  {
    id: "build",
    label: "BUILD",
    eyebrow: "Product Engineering",
    title: "Build the digital product.",
    description:
      "Turn an idea, business workflow or legacy application into a reliable product foundation.",
    icon: Code2,
    color: "indigo",
    capabilities: [
      "Web & App Development",
      "Backend & APIs",
      "Microservices",
      "Database Architecture",
    ],
  },
  {
    id: "design",
    label: "DESIGN",
    eyebrow: "Experience Design",
    title: "Design the experience.",
    description:
      "Create interfaces and journeys that make complex products easier to understand and use.",
    icon: Palette,
    color: "violet",
    capabilities: [
      "UI/UX Design",
      "Design Systems",
      "Landing Experiences",
      "Conversion Journeys",
    ],
  },
  {
    id: "deploy",
    label: "DEPLOY",
    eyebrow: "Cloud & DevOps",
    title: "Deploy with confidence.",
    description:
      "Connect applications to scalable infrastructure, automated delivery and production visibility.",
    icon: Cloud,
    color: "blue",
    capabilities: [
      "AWS & Cloud Architecture",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Monitoring & Observability",
    ],
  },
  {
    id: "grow",
    label: "GROW",
    eyebrow: "AI & Growth",
    title: "Grow and automate.",
    description:
      "Use data, AI and automation to improve operations, customer journeys and business growth.",
    icon: Bot,
    color: "indigo",
    capabilities: [
      "AI Agents",
      "Business Automation",
      "SEO & Performance",
      "Lead & Growth Systems",
    ],
  },
];

const architecture = [
  { label: "Experience", icon: Layers3 },
  { label: "Applications", icon: Server },
  { label: "Data", icon: Database },
  { label: "Infrastructure", icon: Cloud },
  { label: "Intelligence", icon: BrainCircuit },
];

const metrics = [
  { value: "01", label: "Connected strategy" },
  { value: "04", label: "Core systems" },
  { value: "12", label: "Capabilities" },
  { value: "∞", label: "Ways to scale" },
];

function SystemNode({ system, active, onClick, position }) {
  const Icon = system.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute ${position} group w-[145px] text-left sm:w-[175px]`}
      aria-pressed={active}
    >
      <div
        className={`relative rounded-[22px] border p-4 backdrop-blur-xl transition-all duration-500 ${
          active
            ? "border-indigo-300 bg-white shadow-[0_20px_55px_rgba(79,70,229,0.16)]"
            : "border-slate-200 bg-white/85 shadow-[0_12px_35px_rgba(15,23,42,0.07)] hover:-translate-y-1 hover:border-indigo-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
              active
                ? "bg-indigo-600 text-white"
                : "bg-indigo-50 text-indigo-600"
            }`}
          >
            <Icon size={19} />
          </div>

          <span className="text-[9px] font-bold tracking-[0.16em] text-slate-300">
            {system.label}
          </span>
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-indigo-600">
          {system.eyebrow}
        </p>
        <p className="mt-1 text-sm font-bold leading-5 text-slate-950">
          {system.title}
        </p>

        {active && (
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
        )}
      </div>
    </button>
  );
}

export default function DigitalSystem() {
  const sectionRef = useRef(null);
  const [activeId, setActiveId] = useState("build");
  const [autoPlay, setAutoPlay] = useState(true);

  const activeSystem = useMemo(
    () => systems.find((system) => system.id === activeId) || systems[0],
    [activeId]
  );

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setActiveId((current) => {
        const index = systems.findIndex((system) => system.id === current);
        return systems[(index + 1) % systems.length].id;
      });
    }, 4200);

    return () => clearInterval(timer);
  }, [autoPlay]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll("[data-system-reveal]");

    items.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("system-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-28 text-slate-950 md:px-10 lg:px-16"
    >
      {/* Blueprint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-100/50 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          data-system-reveal
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            <Workflow size={15} />
            THE TRIONEX INDIA DIGITAL SYSTEM
          </div>

          <h2 className="mt-6 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            One connected system.
            <span className="block text-indigo-600">
              Built around your business.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Instead of treating development, infrastructure, design, AI and
            growth as separate services, Trionex India connects them into one
            digital operating system.
          </p>
        </div>

        {/* Main system */}
        <div
          data-system-reveal
          className="mt-20 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center"
        >
          {/* Interactive architecture */}
          <div className="relative min-h-[620px] overflow-hidden rounded-[38px] border border-slate-200 bg-slate-50 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(99,102,241,0.10) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Connection SVG */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 800 620"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="systemGradient" x1="0" x2="1">
                  <stop offset="0%" stopColor="#c7d2fe" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#bfdbfe" />
                </linearGradient>
              </defs>

              <path
                d="M175 135 C275 170 310 235 400 310"
                fill="none"
                stroke="url(#systemGradient)"
                strokeWidth="2"
                strokeDasharray="7 8"
              />
              <path
                d="M625 135 C525 170 490 235 400 310"
                fill="none"
                stroke="url(#systemGradient)"
                strokeWidth="2"
                strokeDasharray="7 8"
              />
              <path
                d="M175 485 C275 450 310 385 400 310"
                fill="none"
                stroke="url(#systemGradient)"
                strokeWidth="2"
                strokeDasharray="7 8"
              />
              <path
                d="M625 485 C525 450 490 385 400 310"
                fill="none"
                stroke="url(#systemGradient)"
                strokeWidth="2"
                strokeDasharray="7 8"
              />

              <circle cx="400" cy="310" r="7" fill="#6366f1" />
              <circle cx="400" cy="310" r="15" fill="none" stroke="#818cf8" strokeOpacity=".35" />
              <circle cx="400" cy="310" r="28" fill="none" stroke="#818cf8" strokeOpacity=".15" />
            </svg>

            {/* Rotating rings */}
            <div className="system-ring-one absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-200/60" />
            <div className="system-ring-two absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-indigo-300/50" />
            <div className="system-ring-three absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/70" />

            {/* Core */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-indigo-200 bg-white shadow-[0_0_70px_rgba(99,102,241,0.20)]">
              <div className="text-[11px] font-bold tracking-[0.22em] text-indigo-600">
                TRIONEX
              </div>
              <div className="mt-1 text-xl font-bold tracking-[0.12em] text-slate-950">
                INDIA
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                <Activity size={12} className="text-indigo-500" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Digital Core
                </span>
              </div>
            </div>

            {/* Nodes */}
            <SystemNode
              system={systems[0]}
              active={activeId === systems[0].id}
              onClick={() => {
                setActiveId(systems[0].id);
                setAutoPlay(false);
              }}
              position="left-[5%] top-[8%]"
            />

            <SystemNode
              system={systems[1]}
              active={activeId === systems[1].id}
              onClick={() => {
                setActiveId(systems[1].id);
                setAutoPlay(false);
              }}
              position="right-[5%] top-[8%]"
            />

            <SystemNode
              system={systems[2]}
              active={activeId === systems[2].id}
              onClick={() => {
                setActiveId(systems[2].id);
                setAutoPlay(false);
              }}
              position="left-[5%] bottom-[8%]"
            />

            <SystemNode
              system={systems[3]}
              active={activeId === systems[3].id}
              onClick={() => {
                setActiveId(systems[3].id);
                setAutoPlay(false);
              }}
              position="right-[5%] bottom-[8%]"
            />

            {/* Floating status */}
            <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
              {autoPlay ? "System orchestration active" : "Explore the system"}
            </div>
          </div>

          {/* Active module */}
          <div className="space-y-5">
            <div
              data-system-reveal
              className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_18px_55px_rgba(15,23,42,0.07)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-indigo-600">
                  Active capability
                </span>

                <span className="text-xs font-bold tracking-[0.18em] text-slate-300">
                  {activeSystem.label}
                </span>
              </div>

              <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                <activeSystem.icon size={25} />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">
                {activeSystem.eyebrow}
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                {activeSystem.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {activeSystem.description}
              </p>

              <div className="mt-7 space-y-3">
                {activeSystem.capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <Check size={16} className="text-indigo-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {systems.map((system) => (
                  <button
                    key={system.id}
                    type="button"
                    onClick={() => {
                      setActiveId(system.id);
                      setAutoPlay(false);
                    }}
                    className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
                      activeId === system.id
                        ? "bg-slate-950 text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                  >
                    {system.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              data-system-reveal
              className="rounded-[30px] bg-slate-950 p-7 text-white shadow-[0_22px_65px_rgba(15,23,42,0.14)]"
            >
              <div className="flex items-center gap-3">
                <Rocket size={19} className="text-indigo-300" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">
                  Why connected?
                </span>
              </div>

              <p className="mt-5 text-xl font-bold leading-8">
                Every layer can communicate with the next.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Product decisions inform engineering. Engineering connects to
                infrastructure. Infrastructure enables reliable delivery. AI
                and automation improve what happens after launch.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture layers */}
        <div data-system-reveal className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                System architecture
              </p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Every layer has a purpose.
              </h3>
            </div>

            <span className="hidden text-sm text-slate-400 md:block">
              Designed to work together
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            {architecture.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-5 font-bold text-slate-900">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Metrics */}
        <div
          data-system-reveal
          className="mt-8 grid overflow-hidden rounded-[28px] border border-slate-200 bg-white md:grid-cols-4"
        >
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`p-6 ${
                index !== metrics.length - 1
                  ? "border-b border-slate-200 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="text-3xl font-bold tracking-tight text-indigo-600">
                {metric.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          data-system-reveal
          className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[30px] border border-indigo-100 bg-indigo-50/70 p-7 md:flex-row md:items-center md:p-8"
        >
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
              <Zap size={16} />
              Build the right system
            </div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Have a product, platform or workflow to build?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Start with the business problem. We will map the technology.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-indigo-600"
          >
            Start a Project
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <style>{`
        [data-system-reveal] {
          opacity: 1 !important;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: no-preference) {
          [data-system-reveal] {
            transform: translateY(20px);
            transition:
              transform 750ms ease,
              opacity 750ms ease;
          }

          [data-system-reveal].system-visible {
            transform: translateY(0);
          }

          .system-ring-one {
            animation: systemSpin 24s linear infinite;
          }

          .system-ring-two {
            animation: systemSpinReverse 17s linear infinite;
          }

          .system-ring-three {
            animation: systemPulse 4s ease-in-out infinite;
          }

          @keyframes systemSpin {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes systemSpinReverse {
            from {
              transform: translate(-50%, -50%) rotate(360deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(0deg);
            }
          }

          @keyframes systemPulse {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: .65;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.06);
              opacity: 1;
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-system-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .system-ring-one,
          .system-ring-two,
          .system-ring-three {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
