"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  Code2,
  Palette,
  Sparkles,
} from "lucide-react";

const modules = [
  {
    id: "build",
    label: "BUILD",
    sub: "Products & Platforms",
    icon: Code2,
    color: "#6366f1",
    glow: "rgba(99,102,241,.22)",    left: "8%",
    top: "22%",
    details: ["WEB APPS", "MOBILE APPS", "AI SOLUTIONS"],
  },
  {
    id: "deploy",
    label: "DEPLOY",
    sub: "Cloud & DevOps",
    icon: Cloud,
    color: "#3b82f6",
    glow: "rgba(59,130,246,.22)",    right: "8%",
    top: "22%",
    details: ["CLOUD INFRASTRUCTURE", "CI/CD AUTOMATION", "MONITORING"],
  },
  {
    id: "design",
    label: "DESIGN",
    sub: "UI/UX & Branding",
    icon: Palette,
    color: "#8b5cf6",
    glow: "rgba(139,92,246,.22)",    left: "8%",
    top: "76%",
    details: ["UI/UX DESIGN", "BRAND IDENTITY", "LANDING PAGES"],
  },
  {
    id: "grow",
    label: "GROW",
    sub: "Marketing & Optimization",
    icon: BarChart3,
    color: "#06b6d4",
    glow: "rgba(6,182,212,.22)",    right: "8%",
    top: "76%",
    details: ["DIGITAL MARKETING", "SEO & CONTENT", "LEAD GENERATION"],
  },
];

export default function AnimatedDigitalSystem() {
  const rootRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Important: the elements are visible by default.
      // GSAP only enhances the entrance instead of hiding them first.
      gsap.from(".ads-frame", {
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".ads-node", {
        scale: 0.88,
        y: 18,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.5)",
      });

      gsap.from(".ads-line", {
        strokeDashoffset: 700,
        duration: 1.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.from(".ads-core", {
        scale: 0.75,
        rotation: -8,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Outer rings.
      gsap.to(".ads-ring-one", {
        rotation: 360,
        duration: 26,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".ads-ring-two", {
        rotation: -360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".ads-ring-three", {
        rotation: 360,
        duration: 38,
        repeat: -1,
        ease: "none",
      });

      // Core breathing.
      gsap.to(".ads-core-aura", {
        scale: 1.18,
        opacity: 0.72,
        duration: 1.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ads-core-icon", {
        y: -5,
        rotation: 4,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Animated energy travelling through each connector.
      gsap.to(".ads-flow", {
        strokeDashoffset: -120,
        duration: 2.2,
        repeat: -1,
        ease: "none",
        stagger: 0.35,
      });

      // Floating particles.
      gsap.utils.toArray(".ads-particle").forEach((particle, index) => {
        gsap.to(particle, {
          x: index % 2 === 0 ? 16 : -16,
          y: index % 3 === 0 ? -20 : 20,
          scale: index % 2 === 0 ? 1.35 : 0.75,
          opacity: 0.25,
          duration: 2 + (index % 4) * 0.45,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.12,
        });
      });

      // Small scanner moving through the system.
      gsap.to(".ads-scanner", {
        y: 510,
        duration: 4.5,
        repeat: -1,
        ease: "power1.inOut",
      });

      // Subtle mouse depth.
      const handleMove = (event) => {
        const rect = root.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(".ads-parallax", {
          x: x * 10,
          y: y * 8,
          duration: 0.7,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(".ads-core", {
          x: x * 5,
          y: y * 5,
          duration: 0.7,
          ease: "power3.out",
          overwrite: true,
        });
      };

      root.addEventListener("mousemove", handleMove);

      return () => root.removeEventListener("mousemove", handleMove);
    }, root);

    return () => ctx.revert();
  }, []);

  // Auto-activate a different module.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % modules.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  const activate = (index) => setActive(index);

  return (
    <div
      ref={rootRef}
      className="relative w-full"
      style={{ aspectRatio: "1.08 / 1" }}
    >
      <div className="ads-frame absolute inset-0 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#f8fafc] shadow-[0_35px_100px_rgba(15,23,42,.10)]">
        {/* Blueprint grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ambient light */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.055] blur-3xl" />

        {/* Scanner */}
        <div className="ads-scanner pointer-events-none absolute left-0 top-[-120px] z-[2] h-24 w-full bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent blur-md" />

        {/* Header */}
        <div className="absolute left-7 right-7 top-6 z-50 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[.24em] text-slate-400">
            TRIONEX / DIGITAL SYSTEM
          </span>

          <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 py-2 text-[9px] font-bold tracking-[.16em] text-slate-500 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,.8)]" />
            LIVE SYSTEM
          </span>
        </div>

        {/* Decorative labels */}
        <span className="absolute left-7 top-1/2 z-10 hidden -translate-y-1/2 -rotate-90 font-mono text-[8px] tracking-[.32em] text-slate-300 md:block">
          STRATEGY / TECHNOLOGY / GROWTH
        </span>

        <span className="absolute right-7 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 font-mono text-[8px] tracking-[.32em] text-slate-300 md:block">
          PEOPLE / PROCESS / IMPACT
        </span>

        {/* Main animated system */}
        <div className="ads-parallax absolute inset-0">
          {/* Rotating rings */}
          <div className="ads-ring-one absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-100" />

          <div className="ads-ring-two absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-200" />

          <div className="ads-ring-three absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-100/70" />

          {/* Orbit markers */}
          <span className="absolute left-[14%] top-[51%] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.8)]" />
          <span className="absolute left-[47%] top-[16%] h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_16px_rgba(99,102,241,.8)]" />
          <span className="absolute right-[14%] top-[42%] h-2 w-2 rounded-full bg-indigo-300" />
          <span className="absolute left-[28%] bottom-[12%] h-2 w-2 rounded-full bg-violet-400" />

          {/* Connector SVG */}
          <svg
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            viewBox="0 0 920 850"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="adsGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#94a3b8" stopOpacity=".2" />
                <stop offset=".5" stopColor="#6366f1" stopOpacity=".9" />
                <stop offset="1" stopColor="#06b6d4" stopOpacity=".25" />
              </linearGradient>
            </defs>

            {[
              "M205 195 C300 225 325 350 460 425",
              "M715 195 C620 225 595 350 460 425",
              "M205 640 C300 615 325 500 460 425",
              "M715 640 C620 615 595 500 460 425",
            ].map((path, index) => (
              <g key={index}>
                <path
                  d={path}
                  className="ads-line"
                  stroke="#dbe3ef"
                  strokeWidth="1.2"
                  strokeDasharray="5 12"
                />

                <path
                  d={path}
                  className="ads-flow"
                  stroke="url(#adsGradient)"
                  strokeWidth="2"
                  strokeDasharray="2 18"
                  strokeLinecap="round"
                  pathLength="1"
                />

                {/* Energy point */}
                <circle r="5" fill="#6366f1" opacity=".9">
                  <animateMotion
                    dur={`${3 + index * 0.35}s`}
                    begin={`${index * 0.45}s`}
                    repeatCount="indefinite"
                    path={path}
                  />
                </circle>
              </g>
            ))}
          </svg>

          {/* Nodes */}
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isActive = active === index;

            return (
              <button
                key={module.id}
                type="button"
                onMouseEnter={() => activate(index)}
                onFocus={() => activate(index)}
                onClick={() => activate(index)}
                aria-label={`Activate ${module.label} module`}
                className={`ads-node absolute z-30 w-[30%] min-w-0 text-left transition-transform duration-500 ${
                  isActive ? "scale-[1.035]" : ""
                }`}
                style={{
                  left: module.left,
                  right: module.right,
                  top: module.top,
                  width: "30%",
                }}
              >
                <div
                  className={`relative overflow-hidden rounded-[1.4rem] border bg-white/95 p-3.5 shadow-[0_18px_45px_rgba(15,23,42,.10)] backdrop-blur transition-all duration-500 ${
                    isActive
                      ? "border-indigo-200 shadow-[0_22px_60px_rgba(99,102,241,.16)]"
                      : "border-slate-200"
                  }`}
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-all duration-700"
                    style={{
                      background: module.glow,
                      transform: isActive ? "scale(1.5)" : "scale(1)",
                    }}
                  />

                  <div className="relative flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${
                        isActive
                          ? "border-indigo-100 bg-indigo-50"
                          : "border-slate-100 bg-slate-50"
                      }`}
                      style={{ color: module.color }}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] font-bold tracking-[.18em] text-slate-950">
                          {module.label}
                        </span>

                        {isActive && (
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
                        )}
                      </div>

                      <p className="mt-1 truncate text-[8px] text-slate-400">
                        {module.sub}
                      </p>
                    </div>

                    <span
                      className={`ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "border-indigo-200 bg-indigo-600 text-white"
                          : "border-slate-200 text-slate-400"
                      }`}
                    >
                      <ArrowRight
                        size={13}
                        className={isActive ? "translate-x-0.5" : ""}
                      />
                    </span>
                  </div>

                  {/* Active capability rail */}
                  <div
                    className={`mt-3 grid overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "max-h-24 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="grid gap-1 border-t border-slate-100 pt-3">
                      {module.details.map((detail) => (
                        <span
                          key={detail}
                          className="flex items-center gap-2 text-[7px] font-semibold tracking-[.14em] text-slate-400"
                        >
                          <span
                            className="h-1 w-1 rounded-full"
                            style={{ background: module.color }}
                          />
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}

          {/* Central core */}
          <div className="ads-core absolute left-1/2 top-1/2 z-40 flex h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="ads-core-aura absolute inset-[-30px] rounded-[3rem] bg-indigo-500/10 blur-2xl" />

            <div className="absolute inset-[-8px] rounded-[2.2rem] border border-indigo-300/20 bg-indigo-500/[0.05]" />

            <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] border border-white/10 bg-[#020617] shadow-[0_25px_75px_rgba(15,23,42,.36)]">
              <div className="absolute inset-2 rounded-[1.65rem] border border-indigo-300/15" />

              <div className="ads-core-icon relative">
                <div className="absolute inset-[-22px] rounded-full bg-indigo-500/15 blur-xl" />
                <Sparkles
                  size={44}
                  strokeWidth={1.25}
                  className="relative text-white drop-shadow-[0_0_14px_rgba(129,140,248,.95)]"
                />
              </div>
            </div>
          </div>

          {/* Floating particles */}
          {[
            ["25%", "32%"],
            ["34%", "17%"],
            ["66%", "18%"],
            ["75%", "34%"],
            ["25%", "61%"],
            ["35%", "82%"],
            ["65%", "81%"],
            ["76%", "62%"],
            ["50%", "11%"],
            ["50%", "89%"],
          ].map(([left, top], index) => (
            <span
              key={`${left}-${top}`}
              className="ads-particle absolute z-20 h-1.5 w-1.5 rounded-full bg-indigo-400/55"
              style={{ left, top }}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-slate-200 bg-white/80 px-7 py-4 backdrop-blur">
          <span className="font-mono text-[9px] tracking-[.24em] text-slate-400">
            SYSTEM / 12 MODULES
          </span>

          <div className="flex items-center gap-2">
            {modules.map((module, index) => (
              <button
                key={module.id}
                type="button"
                onClick={() => activate(index)}
                aria-label={`Show ${module.label}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active === index
                    ? "w-7 bg-indigo-600"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}

            <span className="ml-3 flex items-center gap-2 text-[9px] font-bold tracking-[.18em] text-indigo-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-600 shadow-[0_0_12px_rgba(99,102,241,.8)]" />
              ACTIVE
            </span>
          </div>
        </div>
      </div>
    </div>

  );
}
