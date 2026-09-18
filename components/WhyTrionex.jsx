"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    number: "01",
    icon: Target,
    title: "Business First",
    text: "We understand your business goals, users and challenges before deciding what to build.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Engineering Mindset",
    text: "We build with performance, scalability, maintainability and a strong technical foundation in mind.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Connected Capabilities",
    text: "Design, development, cloud, AI and growth work together instead of becoming disconnected services.",
  },
  {
    number: "04",
    icon: Users,
    title: "Long-Term Partnership",
    text: "We think beyond launch and build digital products that can evolve with your business.",
  },
];

export default function WhyTrionexIndia() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-trionex-reveal", {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.to(".why-trionex-glow", {
        y: -18,
        x: 12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-10 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="why-trionex-glow absolute -right-32 top-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="why-trionex-reveal max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
            <CheckCircle2 size={14} />
            Why Trionex India
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            More than a development company.
            <span className="block text-indigo-600">
              A technology partner for your next stage.
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Trionex India brings product thinking, engineering, cloud,
            automation and digital growth together to create systems that
            support real business goals.
          </p>
        </div>

        {/* Main trust panel */}
        <div className="why-trionex-reveal mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.07)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <div className="relative p-8 sm:p-10 lg:p-14">
              <div className="absolute right-8 top-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                TRIONEX INDIA
              </div>

              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
                  One connected team
                </p>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Your idea deserves more than disconnected execution.
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  A digital product is rarely just a website or an app. It
                  needs the right experience, reliable engineering,
                  infrastructure, automation and a path to growth.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Strategy & discovery",
                    "Product design",
                    "Web & app engineering",
                    "Cloud & DevOps",
                    "AI & automation",
                    "Growth systems",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-indigo-600"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative min-h-[360px] overflow-hidden bg-slate-950 p-8 sm:p-10 lg:min-h-full lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_58%)]" />

              <div className="relative flex h-full min-h-[320px] items-center justify-center">
                <div className="absolute h-[270px] w-[270px] rounded-full border border-white/10" />
                <div className="absolute h-[210px] w-[210px] rounded-full border border-dashed border-indigo-300/25" />
                <div className="absolute h-[150px] w-[150px] rounded-full border border-white/10" />

                <div className="absolute h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_25px_rgba(165,180,252,0.9)]" />
                <div className="absolute left-[22%] top-[28%] h-2 w-2 rounded-full bg-blue-300" />
                <div className="absolute right-[22%] bottom-[28%] h-2 w-2 rounded-full bg-indigo-300" />

                <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-indigo-300/30 bg-white/[0.06] text-center shadow-[0_0_70px_rgba(99,102,241,0.2)] backdrop-blur">
                  <div className="text-xl font-bold tracking-tight text-white">
                    TRIONEX
                  </div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-indigo-300">
                    INDIA
                  </div>
                </div>

                <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur">
                  BUILD
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur">
                  DEPLOY
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur">
                  GROW
                </div>

                <div className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur">
                  AI
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="why-trionex-reveal group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition duration-500 group-hover:rotate-6 group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom positioning statement */}
        <div className="why-trionex-reveal mt-10 flex flex-col justify-between gap-6 rounded-3xl border border-indigo-100 bg-indigo-50/60 p-7 sm:p-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xl font-semibold text-slate-950">
              Think bigger than a website.
            </p>
            <p className="mt-1 text-slate-600">
              Build the digital foundation your business can grow on.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
          >
            Discover Trionex India
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
