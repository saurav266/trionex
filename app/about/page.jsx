"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Cloud,
  Cpu,
  Layers3,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Code2,
    title: "Build",
    text: "Websites, web apps and mobile experiences engineered around real business goals.",
    items: ["Web & Web Apps", "Mobile Apps", "Landing Pages"],
  },
  {
    icon: Cloud,
    title: "Deploy",
    text: "Cloud and DevOps foundations designed for reliable releases and scalable growth.",
    items: ["Cloud & DevOps", "CI/CD", "Infrastructure"],
  },
  {
    icon: Sparkles,
    title: "Design",
    text: "Interfaces and brand experiences that make complex products feel simple.",
    items: ["UI/UX Design", "Brand & Creative", "Product Experience"],
  },
  {
    icon: Target,
    title: "Grow",
    text: "Performance marketing, SEO, lead generation and automation connected to outcomes.",
    items: ["SEO & Content", "Lead Generation", "Performance Marketing"],
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Clarity first",
    text: "We simplify the problem before adding technology. Every project starts with a clear objective and a practical path forward.",
  },
  {
    icon: Zap,
    title: "Move with purpose",
    text: "We value momentum without sacrificing engineering quality. Small, useful releases create better products than endless planning.",
  },
  {
    icon: Layers3,
    title: "Think in systems",
    text: "Design, development, infrastructure and growth should work together—not become disconnected pieces of a project.",
  },
  {
    icon: Users,
    title: "Build together",
    text: "We work closely with clients, communicate openly and treat feedback as part of the build process.",
  },
];

const process = [
  ["01", "Discover", "Understand the business, audience, constraints and opportunity."],
  ["02", "Design", "Shape the experience, architecture and execution plan."],
  ["03", "Build", "Turn the plan into a fast, polished and maintainable product."],
  ["04", "Deploy", "Launch with reliable infrastructure and a production-ready workflow."],
  ["05", "Optimize", "Use feedback and performance data to continuously improve."],
];

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top 78%",
        },
      });

      gsap.utils.toArray(".about-section-reveal").forEach((el) => {
        gsap.from(el, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
          },
        });
      });

      gsap.to(".about-orbit", {
        rotate: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".about-float", {
        y: -12,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="overflow-hidden bg-white text-slate-950">
      {/* HERO */}
      <section className="about-hero relative isolate min-h-[760px] overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="absolute left-1/2 top-24 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="mx-auto grid min-h-[760px] w-full max-w-7xl items-center gap-14 px-6 py-28 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div>
            <div className="about-reveal mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <Sparkles className="h-4 w-4" />
              About Trionex India
            </div>

            <h1 className="about-reveal max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              We build digital systems that{" "}
              <span className="text-indigo-600">move businesses forward.</span>
            </h1>

            <p className="about-reveal mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Trionex India brings technology, design, cloud and growth together
              to turn ambitious ideas into useful digital products and
              scalable business systems.
            </p>

            <div className="about-reveal mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-medium text-white transition hover:bg-indigo-600"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-medium transition hover:border-indigo-300 hover:text-indigo-600"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* SYSTEM VISUAL */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[12%] rounded-full border border-indigo-200 bg-white/70 shadow-[0_30px_100px_rgba(79,70,229,0.12)] backdrop-blur-xl" />
            <div className="about-orbit absolute inset-[8%] rounded-full border border-dashed border-indigo-300/70" />
            <div className="absolute inset-[22%] rounded-full border border-slate-200" />

            <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950 text-center text-white shadow-[0_20px_80px_rgba(15,23,42,0.25)]">
              <div>
                <div className="text-xl font-semibold tracking-tight">TRIONEX</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-indigo-300">
                  Digital Systems
                </div>
              </div>
            </div>

            {[
              { icon: Code2, label: "BUILD", pos: "left-[3%] top-[18%]" },
              { icon: Cloud, label: "DEPLOY", pos: "right-[3%] top-[18%]" },
              { icon: Sparkles, label: "DESIGN", pos: "left-[3%] bottom-[18%]" },
              { icon: Target, label: "GROW", pos: "right-[3%] bottom-[18%]" },
            ].map(({ icon: Icon, label, pos }, i) => (
              <div
                key={label}
                className={`about-float absolute ${pos} flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-xs font-semibold tracking-wide shadow-lg backdrop-blur`}
              >
                <Icon className="h-4 w-4 text-indigo-600" />
                {label}
              </div>
            ))}

            <div className="about-float absolute left-1/2 top-[8%] -translate-x-1/2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
              Strategy
            </div>
            <div className="about-float absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
              Growth
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-section-reveal mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Who we are
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              One team. Connected execution.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              We are a digital technology and growth partner focused on
              building products that are clear, fast and built to last.
            </p>
            <p>
              Instead of treating development, design, infrastructure and
              marketing as separate projects, we connect them into one
              operating system for digital growth.
            </p>
            <p>
              Whether you are validating a new idea, modernizing an existing
              business or scaling a digital product, our job is to make the
              next step simpler—and then execute it well.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="about-section-reveal mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
              What drives us
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Principles behind the work.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-white p-8 sm:p-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="about-section-reveal mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Our system
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              From first idea to long-term growth.
            </h2>
          </div>
          <p className="max-w-md text-slate-600">
            Four connected capabilities let us solve the full digital problem,
            not just one part of it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, text, items }, i) => (
            <article
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_25px_70px_rgba(79,70,229,0.10)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-slate-400">
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 max-w-lg leading-7 text-slate-600">{text}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="about-section-reveal mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
                How we work
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Structured enough to scale. Flexible enough to create.
              </h2>
              <p className="mt-6 max-w-lg leading-7 text-slate-400">
                Our process keeps strategy and execution connected from the
                first conversation through launch and optimization.
              </p>
            </div>

            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03]">
              {process.map(([number, title, text]) => (
                <div
                  key={number}
                  className="grid gap-4 p-6 sm:grid-cols-[70px_150px_1fr] sm:items-start sm:p-7"
                >
                  <span className="text-sm font-semibold text-indigo-300">
                    {number}
                  </span>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="about-section-reveal mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
                <Cpu className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight">
                Modern technology. Practical engineering.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                We choose tools based on the product and business problem—not
                because a technology is fashionable. The result is a stack
                that stays maintainable as the business grows.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                "Next.js",
                "React",
                "Node.js",
                "AWS",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "AI & Automation",
                "Modern UI",
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex min-h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRIONEX */}
      <section className="about-section-reveal mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="grid gap-10 rounded-[2rem] border border-indigo-100 bg-indigo-50/60 p-8 sm:p-12 lg:grid-cols-[1fr_.8fr] lg:p-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Why Trionex
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              The partner behind the product.
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-slate-600">
              We combine strategic thinking with hands-on execution. You get a
              team that can move from idea to interface, code to cloud, and
              launch to growth without losing the bigger picture.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "Business-first technical decisions",
              "Design and engineering working together",
              "Scalable cloud and deployment foundations",
              "Transparent, collaborative execution",
              "Long-term optimization after launch",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-indigo-100 bg-white px-5 py-4 text-sm font-medium"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <Check className="h-4 w-4" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-white">
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <div className="about-section-reveal">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Rocket className="h-6 w-6" />
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
              Have something worth building?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Tell us what you are working on. We will help turn the idea into
              a clear, practical digital roadmap.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-medium text-white transition hover:bg-indigo-600"
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
