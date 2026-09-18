"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 5,
    prefix: "₹",
    suffix: "L+",
    label: "Ad Spend Managed",
    detail: "Across performance campaigns",
  },
  {
    value: 8,
    prefix: "",
    suffix: "+",
    label: "Brands Served",
    detail: "Across multiple industries",
  },
  {
    value: 1,
    prefix: "",
    suffix: "+",
    label: "Years Active",
    detail: "Building digital systems",
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Founder-Led",
    detail: "Direct strategy & execution",
  },
];

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".stats-header > *",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      // Cards reveal
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 55, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      // Counters
      document.querySelectorAll(".stat-number").forEach((element) => {
        const target = Number(element.dataset.value);
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 2,
          delay: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = Math.floor(counter.value);
          },
        });
      });

      // Card hover micro-animation
      document.querySelectorAll(".stat-card").forEach((card) => {
        const glow = card.querySelector(".stat-glow");
        const number = card.querySelector(".stat-number-wrap");

        const enter = () => {
          gsap.to(glow, {
            scale: 1.35,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          });

          gsap.to(number, {
            y: -5,
            duration: 0.35,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(glow, {
            scale: 1,
            opacity: 0.6,
            duration: 0.6,
            ease: "power2.out",
          });

          gsap.to(number, {
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        card._statsEnter = enter;
        card._statsLeave = leave;
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-slate-200 bg-white py-24 text-slate-950 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-1/4 h-72 w-72 rounded-full bg-indigo-500/[0.06] blur-3xl" />
        <div className="absolute right-[5%] bottom-0 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="stats-header mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-indigo-600" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600">
                Numbers that matter
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
              Built around
              <span className="block text-slate-300">measurable growth.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
              Every campaign, product and acquisition system is designed
              around metrics that connect digital execution with real
              business outcomes.
            </p>
          </div>

          <div className="hidden shrink-0 text-right lg:block">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
              TRIONEX / PERFORMANCE
            </div>
            <div className="mt-2 text-sm text-slate-500">
              Data-led. Founder-led. Built to scale.
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.07)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card group relative min-h-[290px] overflow-hidden border-b border-slate-200 p-7 transition-colors duration-500 last:border-b-0 sm:p-8 sm:nth-[2n]:border-r-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              {/* Card number */}
              <div className="absolute right-7 top-7 font-mono text-[11px] font-medium tracking-[0.2em] text-slate-300">
                0{index + 1}
              </div>

              {/* Animated glow */}
              <div className="stat-glow pointer-events-none absolute -bottom-28 -right-28 h-64 w-64 scale-100 rounded-full bg-indigo-500/[0.10] opacity-60 blur-3xl" />

              {/* Top indicator */}
              <div className="relative mb-16 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-600 shadow-[0_0_18px_rgba(79,70,229,0.45)]" />
                <span className="h-px w-8 bg-slate-200 transition-all duration-500 group-hover:w-14 group-hover:bg-indigo-200" />
              </div>

              <div className="relative z-10">
                <div className="stat-number-wrap flex items-baseline whitespace-nowrap">
                  <span className="text-2xl font-semibold text-indigo-600 md:text-3xl">
                    {stat.prefix}
                  </span>

                  <span
                    className="stat-number text-5xl font-bold tracking-[-0.07em] text-slate-950 md:text-6xl"
                    data-value={stat.value}
                  >
                    0
                  </span>

                  <span className="ml-1 text-2xl font-semibold text-slate-400 md:text-3xl">
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                  {stat.label}
                </h3>

                <p className="mt-2 max-w-[190px] text-sm leading-6 text-slate-500">
                  {stat.detail}
                </p>
              </div>

              {/* Bottom progress line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-100">
                <div className="h-full w-0 bg-indigo-600 transition-all duration-700 ease-out group-hover:w-full" />
              </div>

              {/* Hover border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-500 group-hover:border-indigo-100" />
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Small team. Senior execution. Clear accountability.</p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
            Measure → Learn → Improve → Scale
          </p>
        </div>
      </div>
    </section>
  );
}
