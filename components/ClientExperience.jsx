"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Handshake,
  MessageSquare,
  ShieldCheck,
  Target,
} from "lucide-react";
import Link from "next/link";

const experienceItems = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Clear Communication",
    text: "Know what is being built, why it matters and what comes next.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Transparent Process",
    text: "Clear milestones, defined deliverables and visible project progress.",
  },
  {
    icon: Target,
    number: "03",
    title: "Technical Ownership",
    text: "We think through architecture, implementation and deployment as one connected responsibility.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Long-Term Partnership",
    text: "Launch is not the finish line. Your digital product can continue to evolve with your business.",
  },
];

const commitments = [
  "Understand the business problem",
  "Define the right technical approach",
  "Build with quality and clarity",
  "Keep communication straightforward",
  "Prepare the product for growth",
];

export default function ClientExperience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".client-experience-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.to(".client-experience-orbit", {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-10 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-200/25 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="client-experience-reveal max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
            <CheckCircle2 size={14} />
            The Trionex India Experience
          </div>

          <h2 className="text-4xl font-semibold leading-[1.06] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Great technology is only half the{" "}
            <span className="text-indigo-600">partnership.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Working with Trionex India should feel clear from the first
            conversation to launch. We combine technical execution with a
            structured, collaborative process.
          </p>
        </div>

        {/* Main panel */}
        <div className="client-experience-reveal mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.07)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Visual side */}
            <div className="relative min-h-[440px] overflow-hidden bg-slate-950 p-8 sm:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_60%)]" />

              <div className="relative flex h-full min-h-[360px] items-center justify-center">
                <div className="client-experience-orbit absolute h-[330px] w-[330px] rounded-full border border-white/10" />
                <div className="absolute h-[250px] w-[250px] rounded-full border border-dashed border-indigo-300/20" />
                <div className="absolute h-[170px] w-[170px] rounded-full border border-white/10" />

                <div className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_20px_rgba(165,180,252,0.9)]" />
                <div className="absolute right-[18%] top-[42%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(147,197,253,0.8)]" />
                <div className="absolute bottom-[22%] left-[32%] h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.8)]" />

                <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-indigo-300/30 bg-white/[0.06] text-center shadow-[0_0_80px_rgba(99,102,241,0.2)] backdrop-blur">
                  <div className="text-xl font-bold tracking-tight text-white">
                    TRIONEX
                  </div>
                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-indigo-300">
                    INDIA
                  </div>
                  <div className="mt-3 text-[8px] uppercase tracking-[0.2em] text-slate-500">
                    Client Partner
                  </div>
                </div>

                <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300 backdrop-blur">
                  Understand
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300 backdrop-blur">
                  Build
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300 backdrop-blur">
                  Grow
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300 backdrop-blur">
                  Support
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
                What you can expect
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A partner that stays involved in the thinking.
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                We believe a strong project is built through good decisions,
                honest communication and consistent execution—not just lines
                of code.
              </p>

              <div className="mt-8 space-y-4">
                {commitments.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                      <Check size={14} />
                    </div>
                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-2 font-semibold text-indigo-600 transition hover:gap-3"
              >
                Learn about Trionex India
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        {/* Experience cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {experienceItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="client-experience-reveal group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition duration-500 group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="client-experience-reveal mt-10 rounded-3xl border border-indigo-100 bg-indigo-50/70 p-7 text-center sm:p-8">
          <p className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
            Clear communication. Thoughtful engineering.{" "}
            <span className="text-indigo-600">Better digital outcomes.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
