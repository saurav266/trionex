"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const serviceColumns = [
  {
    title: "Build",
    links: [
      ["Website & Web App", "/services/web-development"],
      ["Mobile App Development", "/services/mobile-app-development"],
      ["Cloud & DevOps", "/services/cloud-devops"],
      ["AI Agents & Automation", "/services/ai-agents"],
    ],
  },
  {
    title: "Design",
    links: [
      ["UI/UX Design", "/services/ui-ux-design"],
      ["Landing Page Design", "/services/landing-page-design"],
      ["Brand & Creative", "/services/brand-creative"],
    ],
  },
  {
    title: "Growth",
    links: [
      ["Digital Marketing", "/services/digital-marketing"],
      ["Lead Generation", "/services/lead-generation"],
      ["Meta & Google Ads", "/services/performance-marketing"],
      ["SEO & Content", "/services/seo-content"],
      ["CRO & Automation", "/services/cro-automation"],
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    mark: "in",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    mark: "ig",
  },
  {
    label: "X",
    href: "https://x.com/",
    mark: "𝕏",
  },
];

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.to(".footer-orbit", {
        rotation: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".footer-orbit-inner", {
        rotation: -360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".footer-glow", {
        scale: 1.12,
        opacity: 0.8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.8) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        <div className="footer-glow absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.08] blur-[100px]" />
        <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/[0.07] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =====================================================
            BIG CTA
        ====================================================== */}
        <section className="footer-reveal relative border-b border-slate-200 py-24 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-indigo-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
                  Start something exceptional
                </span>
              </div>

              <h2 className="max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[82px]">
                Let's build
                <span className="block text-slate-300">what's next.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
                Have an idea, product or growth challenge? Bring us the
                problem. We'll bring the right digital system around it.
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-4 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50"
              >
                Start a project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            </div>

            {/* System mark */}
            <div className="relative mx-auto hidden h-[280px] w-[280px] lg:block">
              <div className="footer-orbit absolute inset-0 rounded-full border border-slate-200">
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(129,140,248,.9)]" />
              </div>

              <div className="footer-orbit-inner absolute inset-[38px] rounded-full border border-dashed border-slate-200">
                <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.8)]" />
              </div>

              <div className="absolute inset-[82px] flex items-center justify-center rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_20px_70px_rgba(0,0,0,.35)] backdrop-blur">
                <div className="flex h-20 w-20 items-center justify-center rounded-[1.4rem] bg-slate-950 text-white shadow-[0_15px_45px_rgba(0,0,0,.25)]">
                  <Sparkles size={30} strokeWidth={1.4} />
                </div>
              </div>

              <span className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}
        <section className="footer-reveal grid gap-14 border-b border-slate-200 py-16 md:grid-cols-[1.1fr_1.9fr] md:py-20">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-950 text-white shadow-lg transition-transform duration-300 group-hover:rotate-6">
                <Sparkles size={19} strokeWidth={1.5} />
              </span>

              <span className="text-xl font-bold tracking-[-0.04em]">
                trionex<span className="text-indigo-400">.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-500">
              Digital products, infrastructure, design and growth systems for
              ambitious businesses.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:hello@trionexindia.com"
                className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-white"
              >
                <Mail
                  size={15}
                  className="text-indigo-400"
                />
                <span>hello@trionexindia.com</span>
                <ArrowUpRight
                  size={13}
                  className="opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={15} className="text-indigo-400" />
                India
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 flex gap-2">
              {socials.map(({ label, href, mark }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[11px] font-bold text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {mark}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Explore
              </p>

              <nav className="space-y-3">
                {[
                  ["Home", "/"],
                  ["Work", "/work"],
                  ["About", "/about"],
                  ["Services", "/services"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="group flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {serviceColumns.map((column) => (
              <div key={column.title}>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {column.title}
                </p>

                <nav className="space-y-3">
                  {column.links.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="block text-sm leading-5 text-slate-500 transition-colors hover:text-indigo-600"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <section className="footer-reveal flex flex-col gap-5 py-6 text-[10px] uppercase tracking-[0.16em] text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Trionex India. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white/60"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white/60"
            >
              Terms
            </Link>

            <span className="flex items-center gap-2">
              Built with precision
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
}
