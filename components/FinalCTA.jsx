"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Sparkles,
} from "lucide-react";

const promises = [
  "A clear conversation about your goals",
  "A practical scope and technical direction",
  "A team that can build and deploy",
];

export default function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll("[data-cta-reveal]");

    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cta-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white md:px-10 lg:px-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Top label */}
        <div className="flex items-center justify-between gap-6" data-cta-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-indigo-300 backdrop-blur">
            <Sparkles size={15} />
            TRIONEX INDIA
          </div>

          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
            Ready to build
          </div>
        </div>

        {/* Main */}
        <div className="mt-16 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div data-cta-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
              Your next digital system
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.055em] md:text-7xl lg:text-8xl">
              Have an idea
              <span className="block text-indigo-300">worth building?</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              Tell Trionex India what you are trying to create, improve or
              automate. We will help turn the idea into a clear technology
              roadmap and a practical next step.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-slate-950 transition-all duration-300 hover:bg-indigo-50"
              >
                Start a Project
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-bold text-white transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/[0.08]"
              >
                Explore Our Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* System visual */}
          <div
            data-cta-reveal
            className="relative flex min-h-[430px] items-center justify-center"
          >
            <div className="absolute h-[390px] w-[390px] rounded-full border border-white/10" />
            <div className="absolute h-[290px] w-[290px] rounded-full border border-indigo-400/20" />
            <div className="absolute h-[190px] w-[190px] rounded-full border border-indigo-300/20" />

            <div className="cta-orbit absolute h-[340px] w-[340px] rounded-full border border-dashed border-indigo-300/20">
              <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-indigo-400 shadow-[0_0_25px_rgba(129,140,248,0.9)]" />
            </div>

            <div className="cta-orbit-reverse absolute h-[250px] w-[250px] rounded-full border border-dashed border-white/10">
              <span className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
            </div>

            <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full border border-indigo-300/30 bg-white/[0.04] shadow-[0_0_100px_rgba(99,102,241,0.25)] backdrop-blur">
              <div className="text-sm font-bold tracking-[0.25em] text-indigo-300">
                TRIONEX
              </div>
              <div className="mt-1 text-xl font-bold tracking-[0.15em] text-white">
                INDIA
              </div>
              <div className="mt-3 h-px w-12 bg-indigo-400/50" />
              <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Digital Systems
              </div>
            </div>

            <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-300 backdrop-blur">
              Build
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-300 backdrop-blur">
              Deploy
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-300 backdrop-blur">
              Grow
            </div>

            <div className="absolute left-2 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-300 backdrop-blur">
              AI
            </div>
          </div>
        </div>

        {/* Bottom promise strip */}
        <div
          data-cta-reveal
          className="mt-14 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] md:grid-cols-3"
        >
          {promises.map((promise, index) => (
            <div
              key={promise}
              className={`flex items-center gap-3 p-5 md:p-6 ${
                index !== promises.length - 1
                  ? "border-b border-white/10 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <CheckCircle2
                size={19}
                className="shrink-0 text-indigo-300"
              />
              <span className="text-sm font-semibold text-slate-300">
                {promise}
              </span>
            </div>
          ))}
        </div>

        {/* Contact micro CTA */}
        <div
          data-cta-reveal
          className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center"
        >
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <Mail size={16} className="text-indigo-300" />
            Start with a conversation. No complicated process.
          </div>

          <Link
            href="/contact"
            className="text-sm font-bold text-white transition-colors hover:text-indigo-300"
          >
            Contact Trionex India →
          </Link>
        </div>
      </div>

      <style>{`
        [data-cta-reveal] {
          opacity: 1 !important;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: no-preference) {
          [data-cta-reveal] {
            transform: translateY(20px);
            transition:
              transform 750ms ease,
              opacity 750ms ease;
          }

          [data-cta-reveal].cta-visible {
            transform: translateY(0);
          }

          .cta-orbit {
            animation: ctaOrbit 18s linear infinite;
          }

          .cta-orbit-reverse {
            animation: ctaOrbitReverse 13s linear infinite;
          }

          @keyframes ctaOrbit {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes ctaOrbitReverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-cta-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .cta-orbit,
          .cta-orbit-reverse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
