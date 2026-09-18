"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Megaphone,
  Bot,
  Target,
  Search,
  LayoutTemplate,
  PenTool,
  BarChart3,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "Website & Web App",
    description: "High-performance websites and web applications.",
    href: "/services/web-development",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description: "Modern iOS and Android applications.",
    href: "/services/mobile-app-development",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable infrastructure, CI/CD and automation.",
    href: "/services/cloud-devops",
    icon: Cloud,
  },
  {
    title: "AI Agents & Automation",
    description: "AI agents and intelligent business workflows.",
    href: "/services/ai-agents",
    icon: Bot,
  },
  {
    title: "UI/UX Design",
    description: "User-focused interfaces and product experiences.",
    href: "/services/ui-ux-design",
    icon: Palette,
  },
  {
    title: "Landing Page Design",
    description: "Conversion-focused landing pages.",
    href: "/services/landing-page-design",
    icon: LayoutTemplate,
  },
  {
    title: "Digital Marketing",
    description: "Full-funnel digital growth strategies.",
    href: "/services/digital-marketing",
    icon: Megaphone,
  },
  {
    title: "Lead Generation",
    description: "Systems built to generate qualified leads.",
    href: "/services/lead-generation",
    icon: Target,
  },
  {
    title: "Meta & Google Ads",
    description: "Performance advertising and campaign optimization.",
    href: "/services/performance-marketing",
    icon: BarChart3,
  },
  {
    title: "SEO & Content",
    description: "Organic visibility, content and search growth.",
    href: "/services/seo-content",
    icon: Search,
  },
  {
    title: "Brand & Creative",
    description: "Brand identity, creative direction and visuals.",
    href: "/services/brand-creative",
    icon: PenTool,
  },
  {
    title: "CRO & Automation",
    description: "Conversion optimization and marketing automation.",
    href: "/services/cro-automation",
    icon: Workflow,
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div
        className={`mx-auto mt-4 w-[calc(100%-24px)] max-w-7xl rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "border-slate-200 bg-white/95 shadow-[0_15px_50px_rgba(15,23,42,0.09)] backdrop-blur-2xl"
            : "border-slate-200/70 bg-white/80 backdrop-blur-xl"
        }`}
      >
        <nav className="flex h-[72px] items-center justify-between px-5 lg:px-7">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenus}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111827] text-lg font-black text-white shadow-lg transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-600">
              T
            </span>

            <span className="text-[20px] font-black tracking-[-0.055em] text-slate-900">
              TRIONEX<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-5 py-3 text-sm font-semibold text-slate-600 transition-all duration-300 hover:bg-slate-50 hover:text-slate-950"
              >
                {link.label}
              </Link>
            ))}

            {/* All Services */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold text-slate-600 transition-all duration-300 hover:bg-slate-50 hover:text-slate-950"
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute right-[-180px] top-full w-[900px] pt-3 transition-all duration-300 ${
                  servicesOpen
                    ? "pointer-events-auto visible translate-y-0 opacity-100"
                    : "pointer-events-none invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.15)]">
                  <div className="mb-3 flex items-center justify-between border-b border-slate-100 px-3 pb-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                        What we do
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        Technology, design & growth
                      </p>
                    </div>

                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-1 text-xs font-bold text-slate-500 transition hover:text-blue-600"
                    >
                      All Services
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-1">
                    {services.map((service) => {
                      const Icon = service.icon;

                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="group relative flex gap-3 rounded-2xl p-4 transition-all duration-300 hover:bg-blue-50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
                            <Icon size={18} strokeWidth={1.8} />
                          </div>

                          <div className="min-w-0">
                            <p className="text-[12px] font-bold leading-4 text-slate-900 transition-colors group-hover:text-blue-600">
                              {service.title}
                            </p>
                            <p className="mt-1 text-[10px] leading-4 text-slate-400">
                              {service.description}
                            </p>
                          </div>

                          <ArrowUpRight
                            size={13}
                            className="absolute right-3 top-3 text-slate-300 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 group-hover:opacity-100"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group hidden shrink-0 items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-600 lg:flex"
          >
            Start a Project
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* Mobile */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 lg:hidden"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileOpen ? "max-h-[850px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-100 px-5 pb-5 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenus}
                className="block rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-semibold text-slate-700 hover:bg-slate-50"
            >
              All Services
              <ChevronDown
                size={17}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-[650px]" : "max-h-0"
              }`}
            >
              <div className="ml-2 border-l border-slate-200 pl-3">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={closeMenus}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Icon size={17} />
                      {service.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={closeMenus}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#111827] px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-600"
            >
              Start a Project
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
