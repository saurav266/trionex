"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".final-cta-reveal", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
      });

      gsap.to(".final-cta-orbit", {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".final-cta-core", {
        scale: 1.06,
        duration: 2.5,
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
      className="bg-white px-6 py-10 sm:py-12 lg:px-10 lg:py-16"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative grid items-center lg:grid-cols-[1.15fr_0.85fr]">
          {/* Content */}
          <div className="p-8 sm:p-12 lg:p-20">
            <div className="final-cta-reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">
              <Sparkles size={14} />
              Start a conversation
            </div>

            <h2 className="final-cta-reveal mt-7 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have an idea worth building?
            </h2>

            <p className="final-cta-reveal mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tell Trionex India what you are trying to build. We can help you
              think through the product, technology, approach and next steps.
            </p>

            <div className="final-cta-reveal mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
              >
                Start a Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Our Work
              </Link>
            </div>

            <div className="final-cta-reveal mt-10 flex items-center gap-3 text-sm text-slate-400">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Mail size={16} />
              </div>
              <span>Let's turn your idea into something real.</span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden min-h-[520px] items-center justify-center overflow-hidden lg:flex">
            <div className="final-cta-orbit absolute h-[390px] w-[390px] rounded-full border border-white/10" />
            <div className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-indigo-300/20" />
            <div className="absolute h-[190px] w-[190px] rounded-full border border-white/10" />

            <div className="absolute left-[24%] top-[27%] h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_25px_rgba(165,180,252,0.9)]" />
            <div className="absolute right-[23%] top-[42%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_25px_rgba(147,197,253,0.8)]" />
            <div className="absolute bottom-[28%] left-[34%] h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_25px_rgba(129,140,248,0.8)]" />

            <div className="final-cta-core relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-indigo-300/30 bg-white/[0.06] text-center shadow-[0_0_90px_rgba(99,102,241,0.2)] backdrop-blur">
              <div className="text-xl font-bold tracking-tight text-white">
                TRIONEX
              </div>
              <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-indigo-300">
                INDIA
              </div>
              <div className="mt-3 text-[8px] uppercase tracking-[0.2em] text-slate-500">
                Build · Deploy · Grow
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
