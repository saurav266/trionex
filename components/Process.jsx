"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Compass,
  Code2,
  Rocket,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    short: "Understand the business.",
    description:
      "We start with your goals, users, workflows and technical requirements so the solution is connected to the real business problem.",
    icon: Search,
    points: [
      "Business & product goals",
      "User and workflow discovery",
      "Technical requirements",
    ],
  },
  {
    number: "02",
    title: "Design",
    short: "Turn ideas into a clear system.",
    description:
      "We shape the user experience, product architecture and delivery plan before development begins.",
    icon: Compass,
    points: [
      "UX & interface direction",
      "System architecture",
      "Technical roadmap",
    ],
  },
  {
    number: "03",
    title: "Build",
    short: "Engineer the product.",
    description:
      "Our team develops the product with modern frontend, backend, database and engineering practices designed for maintainability.",
    icon: Code2,
    points: [
      "Frontend & backend development",
      "APIs and integrations",
      "Testing & quality checks",
    ],
  },
  {
    number: "04",
    title: "Deploy",
    short: "Move from code to production.",
    description:
      "We containerize, configure infrastructure and establish reliable delivery pipelines for production environments.",
    icon: Rocket,
    points: [
      "Cloud infrastructure",
      "CI/CD automation",
      "Production deployment",
    ],
  },
  {
    number: "05",
    title: "Optimize",
    short: "Keep improving.",
    description:
      "After launch, we use performance, reliability and business feedback to continuously improve the digital system.",
    icon: Zap,
    points: [
      "Monitoring & observability",
      "Performance improvements",
      "Automation & iteration",
    ],
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll("[data-process-reveal]");

    elements.forEach((el, index) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transitionDelay = `${index * 60}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("process-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-28 text-slate-950 md:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.09) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="pointer-events-none absolute left-[15%] top-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-[10%] h-80 w-80 rounded-full bg-blue-100/50 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-process-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
              <Sparkles size={15} />
              HOW WE WORK
            </div>

            <h2 className="mt-6 text-5xl font-bold tracking-[-0.045em] md:text-6xl">
              From first idea
              <span className="block text-indigo-600">to real impact.</span>
            </h2>
          </div>

          <div data-process-reveal className="lg:pb-2">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Trionex India follows a structured process that keeps business
              goals, product experience and engineering execution connected
              from the first conversation through continuous improvement.
            </p>
          </div>
        </div>

        {/* Process timeline */}
        <div className="relative mt-20">
          {/* Desktop line */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-9 hidden h-px bg-slate-200 lg:block">
            <div className="process-line h-full origin-left bg-indigo-500" />
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  data-process-reveal
                  className="process-step group relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_24px_65px_rgba(79,70,229,0.13)]"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-600 transition-all duration-500 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-bold tracking-[0.2em] text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold tracking-tight text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-indigo-600">
                    {step.short}
                  </p>

                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-300 lg:hidden">
                      <span className="h-px flex-1 bg-slate-200" />
                      Next
                      <ArrowRight size={13} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Delivery philosophy */}
        <div
          data-process-reveal
          className="mt-10 overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 shadow-[0_25px_80px_rgba(15,23,42,0.15)]"
        >
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <Zap size={19} />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-300">
                  Trionex India Delivery System
                </span>
              </div>

              <h3 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                Clear communication.
                <span className="text-indigo-300"> Strong engineering.</span>
                <br />
                Measurable progress.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Every stage has a clear objective, deliverable and feedback
                loop. That keeps projects moving without losing sight of the
                product or the people using it.
              </p>
            </div>

            <div className="p-8 pt-0 md:p-12 md:pt-0 lg:pt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:bg-indigo-50"
              >
                Start a Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        [data-process-reveal] {
          opacity: 1 !important;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: no-preference) {
          [data-process-reveal] {
            transform: translateY(22px);
            transition: transform 700ms ease, opacity 700ms ease;
          }

          [data-process-reveal].process-visible {
            transform: translateY(0);
          }

          .process-line {
            animation: processLine 2s ease-out 400ms both;
          }

          @keyframes processLine {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }

          .process-step:nth-child(1) { transition-delay: 0ms; }
          .process-step:nth-child(2) { transition-delay: 100ms; }
          .process-step:nth-child(3) { transition-delay: 200ms; }
          .process-step:nth-child(4) { transition-delay: 300ms; }
          .process-step:nth-child(5) { transition-delay: 400ms; }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-process-reveal] {
            transform: none !important;
            opacity: 1 !important;
            transition: none !important;
          }

          .process-line {
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
