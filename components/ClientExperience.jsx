"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Sparkles,
} from "lucide-react";

const commitments = [
  {
    icon: MessageCircle,
    title: "Clear communication",
    text: "You always know what is being worked on, what comes next and where decisions are needed.",
  },
  {
    icon: Target,
    title: "Business-first thinking",
    text: "Technology decisions are connected to your users, operations and business objectives.",
  },
  {
    icon: ShieldCheck,
    title: "Technical ownership",
    text: "We take responsibility for the engineering details instead of leaving you to coordinate every layer.",
  },
  {
    icon: Users,
    title: "Long-term partnership",
    text: "Launch is not the finish line. We can continue improving, scaling and automating the system with you.",
  },
];

const expectations = [
  "A clear scope and delivery plan",
  "Regular progress and practical updates",
  "Accessible technical communication",
  "Structured feedback and review points",
  "Production-ready engineering practices",
  "Support for the next stage of growth",
];

export default function ClientExperience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll("[data-client-reveal]");

    items.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("client-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-28 text-slate-950 md:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="pointer-events-none absolute right-[8%] top-20 h-80 w-80 rounded-full bg-indigo-100/70 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-[5%] h-72 w-72 rounded-full bg-blue-100/50 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div data-client-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
              <Sparkles size={15} />
              THE TRIONEX INDIA EXPERIENCE
            </div>

            <h2 className="mt-6 max-w-4xl text-5xl font-bold tracking-[-0.045em] md:text-6xl">
              A better way to
              <span className="block text-indigo-600">build together.</span>
            </h2>
          </div>

          <p
            data-client-reveal
            className="max-w-2xl text-lg leading-8 text-slate-600"
          >
            Great digital products need more than good code. They need a
            reliable partnership, clear decisions and a team that understands
            why the product exists.
          </p>
        </div>

        {/* Main experience panel */}
        <div
          data-client-reveal
          className="mt-16 overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,0.16)]"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Visual */}
            <div className="relative min-h-[460px] overflow-hidden p-8 md:p-12">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/15" />
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/20" />
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/30 shadow-[0_0_80px_rgba(99,102,241,0.25)]" />

              <div className="client-orbit absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-indigo-300/20" />

              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-indigo-300/40 bg-indigo-500/10 shadow-[0_0_80px_rgba(99,102,241,0.35)]">
                <div className="text-center">
                  <div className="text-xs font-bold tracking-[0.2em] text-indigo-300">
                    TRIONEX
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    INDIA
                  </div>
                </div>
              </div>

              {[
                ["01", "Strategy", "top-12 left-1/2 -translate-x-1/2"],
                ["02", "Design", "right-5 top-1/2 -translate-y-1/2"],
                ["03", "Engineering", "bottom-12 left-1/2 -translate-x-1/2"],
                ["04", "Growth", "left-5 top-1/2 -translate-y-1/2"],
              ].map(([number, title, position]) => (
                <div
                  key={number}
                  className={`absolute ${position} rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md`}
                >
                  <div className="text-[9px] font-bold tracking-[0.18em] text-indigo-300">
                    {number}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-200">
                    {title}
                  </div>
                </div>
              ))}
            </div>

            {/* Copy */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3">
                <Workflow size={20} className="text-indigo-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
                  One connected team
                </span>
              </div>

              <h3 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                You bring the vision.
                <span className="text-indigo-300">
                  {" "}
                  We help turn it into a working system.
                </span>
              </h3>

              <p className="mt-6 max-w-xl leading-7 text-slate-400">
                Instead of managing separate designers, developers and
                infrastructure teams, you get a coordinated technology partner
                across the product lifecycle.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {commitments.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-indigo-400/30 hover:bg-white/[0.07]"
                    >
                      <Icon size={19} className="text-indigo-300" />
                      <h4 className="mt-3 text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* What clients can expect */}
        <div className="mt-10 grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div
            data-client-reveal
            className="rounded-[30px] border border-slate-200 bg-slate-50 p-8 md:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <Check size={23} strokeWidth={2.5} />
            </div>

            <h3 className="mt-7 text-3xl font-bold tracking-tight text-slate-950">
              What you can expect.
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              A practical working relationship where progress is visible and
              important technical decisions are explained clearly.
            </p>

            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 font-semibold text-slate-950 hover:text-indigo-600"
            >
              Learn about Trionex India
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div
            data-client-reveal
            className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.06)] md:p-10"
          >
            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {expectations.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-slate-100 pb-5 last:border-0 sm:nth-last-2:border-0"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <div>
                    <span className="mr-2 text-xs font-bold text-slate-300">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          data-client-reveal
          className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row md:items-center"
        >
          <div>
            <p className="text-sm font-semibold text-indigo-600">
              Ready when you are.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Tell us what you want to build and we will map the next steps.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-indigo-600"
          >
            Start a Conversation
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <style>{`
        [data-client-reveal] {
          opacity: 1 !important;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: no-preference) {
          [data-client-reveal] {
            transform: translateY(20px);
            transition:
              transform 700ms ease,
              opacity 700ms ease;
          }

          [data-client-reveal].client-visible {
            transform: translateY(0);
          }

          .client-orbit {
            animation: clientOrbit 16s linear infinite;
          }

          @keyframes clientOrbit {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-client-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .client-orbit {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
