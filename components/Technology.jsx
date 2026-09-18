"use client";

import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

const stacks = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "Interfaces & experiences",
    icon: Code2,
    items: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    subtitle: "APIs & application logic",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs", "Microservices"],
  },
  {
    number: "03",
    title: "Database",
    subtitle: "Data & caching",
    icon: Database,
    items: ["MongoDB", "SQL", "Redis", "Mongoose"],
  },
  {
    number: "04",
    title: "Cloud",
    subtitle: "Infrastructure & deployment",
    icon: Cloud,
    items: ["AWS", "Docker", "Kubernetes", "Nginx"],
  },
  {
    number: "05",
    title: "DevOps",
    subtitle: "Delivery & operations",
    icon: GitBranch,
    items: ["GitHub Actions", "Jenkins", "Argo CD", "Monitoring"],
  },
  {
    number: "06",
    title: "AI & Automation",
    subtitle: "Intelligent workflows",
    icon: Bot,
    items: ["AI Agents", "LLM APIs", "Automation", "Integrations"],
  },
];

function TechCard({ stack, index }) {
  const Icon = stack.icon;

  return (
    <article
      className="tech-card group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_25px_70px_rgba(79,70,229,0.14)]"
      data-index={index}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-indigo-100/40 blur-3xl transition-all duration-700 group-hover:bg-indigo-200/60" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-600">
          <Icon size={25} strokeWidth={1.8} />
        </div>

        <span className="text-sm font-semibold tracking-[0.2em] text-slate-300">
          {stack.number}
        </span>
      </div>

      <div className="relative mt-8">
        <h3 className="text-3xl font-bold tracking-tight text-slate-950">
          {stack.title}
        </h3>
        <p className="mt-2 text-base text-slate-500">{stack.subtitle}</p>
      </div>

      <div className="relative mt-7 grid grid-cols-2 gap-3">
        {stack.items.map((item) => (
          <div
            key={item}
            className="flex min-h-[54px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-3 text-center text-sm font-semibold text-slate-700 transition-all duration-300 group-hover:border-indigo-100 group-hover:bg-indigo-50/60"
          >
            {item}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Technology() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".tech-card");

    // Important: cards start fully visible.
    // We animate transform only, so a failed animation can never make
    // the technology content disappear.
    cards.forEach((card, index) => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transitionDelay = `${index * 70}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tech-card-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 px-6 py-28 md:px-10 lg:px-16"
    >
      {/* Blueprint background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.10) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            TRIONEX INDIA · TECHNOLOGY
          </div>

          <h2 className="text-5xl font-bold tracking-[-0.04em] text-slate-950 md:text-6xl">
            The technology behind
            <span className="block text-indigo-600">what we build.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Modern technologies selected to build fast, scalable, secure and
            maintainable digital products — from frontend experience to cloud,
            DevOps and AI automation.
          </p>
        </div>

        {/* Technology cards */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {stacks.map((stack, index) => (
            <TechCard key={stack.title} stack={stack} index={index} />
          ))}
        </div>

        {/* Full-stack system */}
        <div className="mt-8 overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-12">
              <div className="inline-flex rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                Full-stack capability
              </div>

              <h3 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                One engineering system.
                <span className="text-indigo-600"> Multiple layers.</span>
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Trionex India connects product design, application engineering,
                infrastructure, delivery and intelligent automation into one
                coordinated workflow.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Product Engineering",
                  "Cloud Architecture",
                  "CI/CD",
                  "Observability",
                  "AI Automation",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[340px] overflow-hidden bg-slate-950 p-8 md:p-12">
              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
                    backgroundSize: "34px 34px",
                  }}
                />
              </div>

              <div className="relative flex h-full min-h-[280px] items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full border border-indigo-400/20" />
                <div className="absolute h-44 w-44 rounded-full border border-indigo-400/30" />

                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-indigo-300/40 bg-indigo-500/10 shadow-[0_0_70px_rgba(99,102,241,0.35)]">
                  <div className="text-center">
                    <div className="text-xs font-bold tracking-[0.22em] text-indigo-300">
                      TRIONEX
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      INDIA
                    </div>
                  </div>
                </div>

                {["WEB", "API", "CLOUD", "AI"].map((item, index) => {
                  const positions = [
                    "left-1/2 top-0 -translate-x-1/2",
                    "right-0 top-1/2 -translate-y-1/2",
                    "bottom-0 left-1/2 -translate-x-1/2",
                    "left-0 top-1/2 -translate-y-1/2",
                  ];

                  return (
                    <div
                      key={item}
                      className={`absolute ${positions[index]} rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.15em] text-slate-300 backdrop-blur`}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            Built for performance, scale and long-term maintainability.
          </p>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 font-semibold text-slate-950 transition-colors hover:text-indigo-600"
          >
            Discuss your technology stack
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      <style>{`
        .tech-card {
          opacity: 1 !important;
          transform: translateY(0);
        }

        .tech-card-visible {
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: no-preference) {
          .tech-card {
            transform: translateY(18px);
            transition-property: transform, opacity, box-shadow, border-color;
          }

          .tech-card-visible {
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-card {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
