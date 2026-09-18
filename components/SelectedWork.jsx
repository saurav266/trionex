"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  ExternalLink,
  Layers3,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Furniture Village",
    category: "E-Commerce",
    filter: "web",
    description:
      "A conversion-focused furniture commerce experience with product discovery, structured catalog flows and a premium visual system.",
    tags: ["Next.js", "E-Commerce", "UI/UX"],
    icon: ShoppingBag,
    metric: "Commerce",
    accent: "indigo",
  },
  {
    title: "Cloud Operations Platform",
    category: "Cloud & DevOps",
    filter: "cloud",
    description:
      "A cloud-native operations system designed around containerized workloads, automated delivery and infrastructure visibility.",
    tags: ["AWS", "Docker", "Kubernetes"],
    icon: Cloud,
    metric: "Cloud Native",
    accent: "blue",
  },
  {
    title: "AI Workflow System",
    category: "AI & Automation",
    filter: "ai",
    description:
      "An intelligent workflow layer connecting AI agents, APIs and business automation to reduce repetitive operational work.",
    tags: ["AI Agents", "LLM APIs", "Automation"],
    icon: Bot,
    metric: "Intelligent",
    accent: "violet",
  },
  {
    title: "Growth Landing System",
    category: "Web & Growth",
    filter: "growth",
    description:
      "A high-performance landing experience built around clear messaging, interaction design and conversion-focused journeys.",
    tags: ["React", "Motion", "CRO"],
    icon: Sparkles,
    metric: "Growth",
    accent: "indigo",
  },
  {
    title: "Business Automation Hub",
    category: "AI & Automation",
    filter: "ai",
    description:
      "A connected automation concept for lead handling, notifications, integrations and internal business workflows.",
    tags: ["Node.js", "APIs", "AI"],
    metric: "Automated",
    icon: Layers3,
    accent: "blue",
  },
  {
    title: "Digital Product Interface",
    category: "Web Application",
    filter: "web",
    description:
      "A responsive product interface combining structured information architecture with polished interactions and reusable components.",
    tags: ["Next.js", "React", "Tailwind"],
    metric: "Product",
    icon: Code2,
    accent: "violet",
  },
];

const filters = [
  { label: "All Work", value: "all" },
  { label: "Web & Apps", value: "web" },
  { label: "Cloud & DevOps", value: "cloud" },
  { label: "AI & Automation", value: "ai" },
  { label: "Growth", value: "growth" },
];

function ProjectVisual({ project, active }) {
  const Icon = project.icon;

  return (
    <div className="relative h-[260px] overflow-hidden rounded-[26px] border border-slate-200 bg-slate-50">
      <div
        className={`absolute -right-16 -top-20 h-56 w-56 rounded-full blur-3xl ${
          project.accent === "blue"
            ? "bg-blue-200/50"
            : project.accent === "violet"
              ? "bg-violet-200/50"
              : "bg-indigo-200/50"
        }`}
      />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.10) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Browser frame */}
      <div className="absolute left-5 right-5 top-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.10)] transition-transform duration-700 group-hover:-translate-y-2">
        <div className="flex h-9 items-center gap-1.5 border-b border-slate-100 px-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <div className="ml-3 h-4 flex-1 rounded-full bg-slate-50" />
        </div>

        <div className="grid grid-cols-[0.7fr_1.3fr] gap-3 p-4">
          <div className="space-y-2">
            <div className="h-4 w-3/4 rounded bg-slate-100" />
            <div className="h-3 w-full rounded bg-slate-100" />
            <div className="h-3 w-5/6 rounded bg-slate-100" />
            <div className="mt-4 h-16 rounded-xl bg-indigo-50" />
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <Icon size={17} />
              </div>
              <div className="h-3 w-20 rounded bg-slate-200" />
            </div>
            <div className="mt-4 h-12 rounded-lg bg-white" />
          </div>
        </div>
      </div>

      {/* Floating metric */}
      <div className="absolute bottom-5 right-5 z-10 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-500">
          System
        </div>
        <div className="mt-1 text-sm font-bold text-slate-950">
          {project.metric}
        </div>
      </div>

      {active && (
        <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-2 ring-indigo-200/70" />
      )}
    </div>
  );
}

export default function SelectedWork() {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll("[data-work-reveal]");

    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("work-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.filter === filter);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 px-6 py-28 text-slate-950 md:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div data-work-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
              <Sparkles size={15} />
              SELECTED WORK · TRIONEX INDIA
            </div>

            <h2 className="mt-6 max-w-4xl text-5xl font-bold tracking-[-0.045em] md:text-6xl">
              Digital products
              <span className="block text-indigo-600">built to move.</span>
            </h2>
          </div>

          <div data-work-reveal>
            <p className="text-lg leading-8 text-slate-600">
              From customer-facing applications to cloud infrastructure and
              AI-powered workflows, we build systems around the way businesses
              actually operate.
            </p>
          </div>
        </div>

        {/* Filter */}
        <div
          data-work-reveal
          className="mt-14 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"
        >
          {filters.map((item) => {
            const active = filter === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilter(item.value)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Projects */}
        <div className="mt-8 grid gap-7 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              data-work-reveal
              className="group rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_15px_55px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_30px_80px_rgba(79,70,229,0.13)]"
            >
              <ProjectVisual project={project} active={index === 0} />

              <div className="px-2 pb-3 pt-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                    <ArrowUpRight size={19} />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500 md:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="mt-8 rounded-[30px] border border-slate-200 bg-white p-12 text-center">
            <p className="text-slate-500">No projects in this category yet.</p>
          </div>
        )}

        {/* Capability strip */}
        <div
          data-work-reveal
          className="mt-10 overflow-hidden rounded-[34px] bg-slate-950 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.16)] md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-indigo-300">
                <Code2 size={20} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  From concept to production
                </span>
              </div>

              <h3 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                Your next project can be more than a website.
                <span className="text-indigo-300"> Build the system behind it.</span>
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Product engineering, cloud infrastructure, automation and
                growth capabilities can work together instead of becoming
                disconnected projects.
              </p>
            </div>

            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:bg-indigo-50"
            >
              Explore All Work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div
          data-work-reveal
          className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-7 md:flex-row md:items-center"
        >
          <p className="text-sm text-slate-500">
            Selected work represents the capabilities Trionex India can bring
            together for a project.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-indigo-600"
          >
            Build something similar
            <ExternalLink
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      <style>{`
        [data-work-reveal] {
          opacity: 1 !important;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: no-preference) {
          [data-work-reveal] {
            transform: translateY(20px);
            transition:
              transform 700ms ease,
              opacity 700ms ease;
          }

          [data-work-reveal].work-visible {
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-work-reveal] {
            transform: none !important;
            opacity: 1 !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
