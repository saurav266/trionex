"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  ExternalLink,
  Layers3,
  MousePointer2,
  Rocket,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Furniture Village",
    category: "E-Commerce",
    description:
      "A conversion-focused furniture commerce experience designed to make product discovery, comparison and purchase feel effortless.",
    services: ["Web Development", "UI/UX Design", "CRO"],
    tech: ["Next.js", "React", "Node.js"],
    metric: "Commerce Experience",
    icon: Layers3,
    featured: true,
  },
  {
    number: "02",
    title: "Cloud Operations Platform",
    category: "Cloud & DevOps",
    description:
      "A production-ready cloud foundation built around containerized services, automated delivery and resilient deployment workflows.",
    services: ["Cloud & DevOps", "CI/CD", "Infrastructure"],
    tech: ["AWS", "Docker", "Kubernetes"],
    metric: "Automated Delivery",
    icon: Cloud,
    featured: false,
  },
  {
    number: "03",
    title: "AI Workflow System",
    category: "AI & Automation",
    description:
      "An intelligent automation layer designed to connect repetitive business workflows with AI-powered agents and actions.",
    services: ["AI Agents", "Automation", "Integrations"],
    tech: ["AI", "APIs", "Automation"],
    metric: "Intelligent Workflows",
    icon: Sparkles,
    featured: false,
  },
  {
    number: "04",
    title: "Growth Landing System",
    category: "Web & Growth",
    description:
      "A high-performance landing experience structured around clear messaging, stronger calls-to-action and measurable acquisition.",
    services: ["Landing Pages", "SEO", "Performance"],
    tech: ["Next.js", "Analytics", "SEO"],
    metric: "Conversion Ready",
    icon: Target,
    featured: false,
  },
];

const filters = ["All", "Web", "Cloud", "AI", "Growth"];

const filterMap = {
  Web: ["E-Commerce", "Web & Growth"],
  Cloud: ["Cloud & DevOps"],
  AI: ["AI & Automation"],
  Growth: ["Web & Growth"],
};

const outcomes = [
  {
    icon: Code2,
    title: "Digital products",
    text: "Interfaces and applications designed around real users and real business workflows.",
  },
  {
    icon: Cloud,
    title: "Reliable infrastructure",
    text: "Cloud and deployment foundations that support faster, safer releases.",
  },
  {
    icon: Sparkles,
    title: "Intelligent automation",
    text: "AI-powered systems that reduce repetitive work and connect business processes.",
  },
  {
    icon: BarChart3,
    title: "Measurable growth",
    text: "Acquisition and conversion systems built around performance rather than vanity metrics.",
  },
];

export default function WorkPage() {
  const pageRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-hero-item", {
        y: 42,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray(".work-reveal").forEach((element) => {
        gsap.from(element, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
        });
      });

      gsap.to(".work-orbit", {
        rotate: 360,
        duration: 26,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".work-orbit-reverse", {
        rotate: -360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          filterMap[activeFilter]?.includes(project.category)
        );

  return (
    <main ref={pageRef} className="overflow-hidden bg-white text-slate-950">
      {/* HERO */}
      <section className="relative isolate min-h-[700px] overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="absolute left-1/2 top-10 -z-10 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
          <div>
            <div className="work-hero-item inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <Sparkles className="h-4 w-4" />
              Selected work · Trionex India
            </div>

            <h1 className="work-hero-item mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Work that moves{" "}
              <span className="text-indigo-600">businesses forward.</span>
            </h1>

            <p className="work-hero-item mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              We build digital products, cloud systems, intelligent
              automation and growth experiences that solve real business
              problems.
            </p>

            <div className="work-hero-item mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-medium text-white transition hover:bg-indigo-600"
              >
                Explore our work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-medium transition hover:border-indigo-300 hover:text-indigo-600"
              >
                Start a project
              </Link>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto aspect-square w-full max-w-[500px]">
            <div className="absolute inset-[12%] rounded-full border border-indigo-200 bg-white/70 shadow-[0_30px_100px_rgba(79,70,229,0.12)] backdrop-blur-xl" />
            <div className="work-orbit absolute inset-[8%] rounded-full border border-dashed border-indigo-300/70" />
            <div className="work-orbit-reverse absolute inset-[22%] rounded-full border border-slate-200" />

            <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_20px_80px_rgba(15,23,42,0.25)]">
              <div className="text-xl font-semibold tracking-tight">
                TRIONEX
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-indigo-300">
                India
              </div>
            </div>

            {[
              { icon: Code2, label: "BUILD", pos: "left-[2%] top-[17%]" },
              { icon: Cloud, label: "DEPLOY", pos: "right-[2%] top-[17%]" },
              { icon: Sparkles, label: "AI", pos: "left-[4%] bottom-[18%]" },
              { icon: BarChart3, label: "GROW", pos: "right-[3%] bottom-[18%]" },
            ].map(({ icon: Icon, label, pos }) => (
              <div
                key={label}
                className={`absolute ${pos} flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-xs font-semibold tracking-wide shadow-lg backdrop-blur`}
              >
                <Icon className="h-4 w-4 text-indigo-600" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="work-reveal mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Our approach
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Every project starts with a problem worth solving.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            We don't build for the sake of adding technology. We connect
            strategy, design, engineering, infrastructure and growth around a
            clear outcome.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="work-reveal flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
                Selected work
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Built to be useful.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {visibleProjects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className={`work-reveal group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_80px_rgba(79,70,229,0.11)] ${
                    project.featured ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`grid ${
                      project.featured
                        ? "lg:grid-cols-[1.1fr_.9fr]"
                        : "lg:grid-cols-1"
                    }`}
                  >
                    {/* PROJECT PREVIEW */}
                    <div className="relative min-h-[330px] overflow-hidden bg-slate-100 p-7">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:36px_36px] opacity-45" />
                      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-400/15 blur-3xl transition duration-700 group-hover:scale-125" />

                      <div className="relative h-full min-h-[280px] rounded-3xl border border-slate-200 bg-white p-5 shadow-xl transition duration-500 group-hover:scale-[1.015]">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                          </div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                            {project.category}
                          </span>
                        </div>

                        <div className="grid h-[220px] place-items-center">
                          <div className="relative flex h-32 w-32 items-center justify-center rounded-[2rem] border border-indigo-200 bg-indigo-50 text-indigo-600">
                            <Icon className="h-12 w-12" />
                            <span className="absolute -right-5 -top-5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold shadow-sm">
                              {project.metric}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PROJECT INFO */}
                    <div className="flex flex-col justify-between p-8 lg:p-10">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-indigo-600">
                            {project.number}
                          </span>
                          <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-indigo-600" />
                        </div>

                        <h3 className="mt-7 text-3xl font-semibold tracking-tight">
                          {project.title}
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                          {project.description}
                        </p>

                        <div className="mt-7 flex flex-wrap gap-2">
                          {project.services.map((service) => (
                            <span
                              key={service}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-slate-100 pt-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-medium text-slate-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-950 transition group-hover:text-indigo-600">
                          View case study
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {visibleProjects.length === 0 && (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-14 text-center">
              <p className="font-medium">More work is coming soon.</p>
              <p className="mt-2 text-sm text-slate-500">
                We are preparing the next case studies.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="work-reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
            What we deliver
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            More than a finished screen.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Strong digital work connects the experience people see with the
            systems that make the business run.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="border-y border-slate-200 bg-white">
        <div className="work-reveal mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
                  From brief to launch
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Discover → Design → Build → Deploy → Grow
                </h2>
              </div>

              <Link
                href="/services"
                className="group inline-flex shrink-0 items-center gap-2 font-semibold text-slate-950 transition hover:text-indigo-600"
              >
                See our capabilities
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <div className="work-reveal">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-indigo-300">
              <Rocket className="h-6 w-6" />
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Have a project worth building?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Bring us the idea, the problem or the next stage of your
              business. Trionex India can help shape the system behind it.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-slate-950 transition hover:bg-indigo-500 hover:text-white"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
