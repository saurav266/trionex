"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers3,
  LockKeyhole,
  Monitor,
  MousePointer2,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const productTabs = [
  {
    id: "commerce",
    label: "E-commerce",
    title: "Commerce experience",
    description: "Catalogs, checkout, customer accounts and operational workflows.",
    accent: "bg-indigo-500",
  },
  {
    id: "saas",
    label: "SaaS",
    title: "SaaS product",
    description: "Dashboards, subscriptions, permissions and data-rich workflows.",
    accent: "bg-blue-500",
  },
  {
    id: "business",
    label: "Business Platform",
    title: "Business platform",
    description: "Custom portals, internal tools, CRM and process automation.",
    accent: "bg-violet-500",
  },
];

const capabilities = [
  ["01", "Marketing Websites", "Premium company websites designed around positioning, trust, content and conversion."],
  ["02", "Web Applications", "Interactive products with authentication, dashboards, search, workflows and role-based access."],
  ["03", "Backend & APIs", "Reliable Node.js APIs, integrations, business logic and service-oriented architecture."],
  ["04", "Commerce", "Product catalogs, carts, checkout flows, customer accounts and commerce operations."],
  ["05", "Performance", "Responsive interfaces, optimized assets, clean rendering and performance-minded engineering."],
  ["06", "Cloud & Deployment", "Production deployment with CI/CD, containers, monitoring, domains and scalable infrastructure."],
];

const quality = [
  ["Security", "Authentication, authorization, validation and secure API patterns."],
  ["Performance", "Fast interfaces, optimized assets and responsive interactions."],
  ["Reliability", "Error states, monitoring, deployment discipline and recovery paths."],
  ["SEO", "Semantic structure, metadata, crawlable content and technical foundations."],
  ["Scalability", "Architecture designed to evolve as users, features and data grow."],
  ["Experience", "Consistent interaction patterns across desktop, tablet and mobile."],
];


const businessOutcomes = [
  ["More qualified leads", "Clear messaging, focused journeys and conversion-ready interfaces."],
  ["Better customer experience", "Fast, intuitive experiences that make important actions easier."],
  ["Stronger operations", "Connected dashboards, workflows and business systems behind the UI."],
  ["Room to scale", "A technical foundation that can grow with features, traffic and data."],
];

const webSolutions = [
  ["Corporate & Brand", "High-trust websites for companies, products, services and teams."],
  ["SaaS & Platforms", "Authenticated products with dashboards, subscriptions and role-based workflows."],
  ["E-commerce", "Commerce journeys from product discovery to checkout and post-purchase operations."],
  ["Portals & Dashboards", "Customer portals, admin panels, CRM-style tools and internal systems."],
  ["Landing Pages", "Focused pages built around a campaign, offer, product or acquisition goal."],
  ["Custom Web Systems", "Purpose-built applications for workflows that off-the-shelf software cannot solve."],
];

const deliverables = [
  "Discovery and technical planning",
  "UX flows and responsive interface design",
  "Next.js / React frontend development",
  "Node.js APIs and business logic",
  "Database and third-party integrations",
  "Authentication and role-based access",
  "Testing and production hardening",
  "Cloud deployment and CI/CD",
];

const faqs = [
  ["Do you build only company websites?", "No. Trionex India can build marketing websites, e-commerce platforms, dashboards, portals, SaaS products and custom business applications."],
  ["Can you build the backend too?", "Yes. Web projects can include APIs, authentication, databases, integrations, business logic and deployment."],
  ["Can an existing website be redesigned?", "Yes. We can work from an existing product and improve its interface, architecture, performance, content structure or conversion experience."],
  ["Which technologies do you use?", "The stack can include Next.js, React, Node.js, MongoDB, PostgreSQL, Docker, AWS and other tools selected around the project requirements."],
  ["Do you handle deployment?", "Yes. Deployment can include domains, SSL, containers, CI/CD, cloud infrastructure, monitoring and production configuration."],
  ["Can the product connect to third-party services?", "Yes. APIs and integrations can connect payment systems, CRMs, analytics, communication tools, maps and other business services."],
];

function ProductMockup({ tab }) {
  return (
    <div className="relative">
      <div className="absolute -inset-10 rounded-[4rem] bg-indigo-200/30 blur-3xl" />

      <div className="relative rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_35px_100px_rgba(15,23,42,.14)]">
        <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-[#f7f9fd]">
          <div className="flex h-11 items-center gap-2 border-b border-slate-200 bg-white px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <div className="ml-4 h-6 flex-1 rounded-lg bg-slate-50" />
            <div className="hidden h-6 w-20 rounded-lg bg-slate-50 sm:block" />
          </div>

          <div className="grid min-h-[420px] grid-cols-[54px_1fr]">
            <div className="bg-slate-950 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-xs font-black text-white">T</div>
              <div className="mt-7 space-y-4">
                {[Monitor, Layers3, Database, Cloud, LockKeyhole].map((Icon, i) => (
                  <div key={i} className={`flex h-8 w-8 items-center justify-center rounded-lg ${i === 0 ? "bg-white/10 text-indigo-300" : "text-slate-500"}`}>
                    <Icon size={15} />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.2em] text-indigo-500">
                    {tab.title}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                    Everything in one place.
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-5 text-slate-400">
                    {tab.description}
                  </p>
                </div>
                <div className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-[9px] font-bold text-slate-500 sm:block">
                  Production UI
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["12.4k", "Users"],
                  ["₹84.2L", "Revenue"],
                  ["1,024", "Orders"],
                  ["98.4%", "Uptime"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-[9px] text-slate-400">{label}</p>
                    <p className="mt-1 text-sm font-extrabold text-slate-900">{value}</p>
                    <p className="mt-1 text-[9px] font-semibold text-indigo-500">Live</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-[1.35fr_.65fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">Product activity</span>
                    <span className="rounded-full bg-indigo-50 px-2 py-1 text-[8px] font-bold text-indigo-500">Analytics</span>
                  </div>
                  <div className="relative mt-5 h-32 overflow-hidden">
                    <div className="absolute inset-x-0 top-1/4 border-t border-dashed border-slate-100" />
                    <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-slate-100" />
                    <div className="absolute inset-x-0 top-3/4 border-t border-dashed border-slate-100" />
                    <svg viewBox="0 0 420 140" className="absolute inset-0 h-full w-full">
                      <path d="M0 112 C45 106 52 80 88 91 S135 98 160 64 S208 78 240 52 S282 63 315 35 S362 46 420 10" fill="none" stroke="rgb(99 102 241)" strokeWidth="4" strokeLinecap="round" />
                      <path d="M0 112 C45 106 52 80 88 91 S135 98 160 64 S208 78 240 52 S282 63 315 35 S362 46 420 10 V140 H0Z" fill="rgb(99 102 241 / .07)" />
                    </svg>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <span className="text-xs font-bold text-slate-800">Workflow</span>
                  <div className="mt-4 space-y-3">
                    {["User request", "API", "Business logic", "Database"].map((item, i) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 text-[8px] font-bold text-indigo-600">{i + 1}</span>
                        <span className="text-[9px] font-semibold text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-12 left-[8%] hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
            <ShieldCheck size={16} />
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-900">Secure by design</p>
            <p className="mt-0.5 text-[8px] text-slate-400">Authentication · APIs · Data</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 bottom-3 hidden rounded-2xl border border-slate-200 bg-slate-950 px-4 py-3 shadow-2xl lg:block">
        <p className="text-[8px] font-bold uppercase tracking-[.16em] text-indigo-300">Connected</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-semibold text-white">API + Cloud</span>
        </div>
      </div>
    </div>
  );
}

export default function WebDevelopmentPage() {
  const [activeTab, setActiveTab] = useState(productTabs[0]);
  const [openFaq, setOpenFaq] = useState(0);
  const revealRef = useRef(null);

  useEffect(() => {
    const items = document.querySelectorAll(".web-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.animate(
            [
              { opacity: 0, transform: "translateY(28px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 750,
              delay: Number(entry.target.dataset.delay || 0),
              easing: "cubic-bezier(.22,1,.36,1)",
              fill: "both",
            }
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el, i) => {
      el.style.opacity = "0";
      el.dataset.delay = String((i % 3) * 80);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={revealRef} className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f9faff]">
        <div className="absolute left-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute right-[-8%] top-0 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 pt-20 lg:grid-cols-[.85fr_1.15fr] lg:px-8 lg:pb-36 lg:pt-28">
          <div className="web-reveal relative z-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Web Development
            </Link>

            <h1 className="mt-7 max-w-2xl text-5xl font-extrabold leading-[.98] tracking-[-.065em] sm:text-6xl lg:text-[68px]">
              Websites that look good.
              <span className="mt-2 block text-slate-400">Products that work.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              We design and engineer modern web experiences that connect
              beautiful interfaces with real business systems, APIs and data.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-indigo-600">
                Build Your Website <ArrowRight className="ml-1 inline" size={16} />
              </Link>
              <Link href="/work" className="rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-600">
                See Our Work
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-500">
              {["Responsive", "API-ready", "SEO foundations", "Cloud deployable"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-indigo-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="web-reveal relative z-10">
            <ProductMockup tab={activeTab} />
          </div>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className="border-y border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-6 lg:px-8">
          <span className="mr-2 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">We build</span>
          {productTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                activeTab.id === tab.id
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-500 hover:border-indigo-200 hover:text-indigo-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>


      {/* BUSINESS OUTCOMES */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div className="web-reveal">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Why it matters</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-.055em] sm:text-5xl">
                Build for the business,
                <span className="block text-slate-400">not just the browser.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                The goal of a web project is not simply to ship screens. It is
                to create a digital system that helps people discover, decide,
                transact, operate and grow.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {businessOutcomes.map(([title, text], i) => (
                <div
                  key={title}
                  className="group rounded-[22px] border border-slate-200 bg-[#f8faff] p-6 transition duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-indigo-500">0{i + 1}</span>
                    <ArrowUpRight size={16} className="text-slate-300 transition group-hover:text-indigo-500" />
                  </div>
                  <h3 className="mt-8 text-base font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="web-reveal">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Real Product Thinking</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-.055em] sm:text-5xl">
              The website is only the visible part.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              A serious web product needs more than a polished homepage.
              Users need clear journeys, fast interactions, reliable data and
              systems that continue working after launch.
            </p>
          </div>

          <div className="web-reveal grid gap-4 sm:grid-cols-2">
            {[
              [MousePointer2, "Experience", "Interfaces built around what users need to do next."],
              [Code2, "Engineering", "Clean frontend and backend architecture that can evolve."],
              [Database, "Data", "Business data modeled around real workflows and operations."],
              [Cloud, "Infrastructure", "Deployment and environments designed for production."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="group rounded-[22px] border border-slate-200 bg-[#f8faff] p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-indigo-500 shadow-sm ring-1 ring-slate-100 group-hover:bg-indigo-500 group-hover:text-white">
                  <Icon size={20} />
                </div>
                <h3 className="mt-7 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.62fr_1.38fr]">
          <div className="web-reveal">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">What we build</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-.055em] sm:text-5xl">
              Different products.
              <span className="block text-slate-400">One engineering mindset.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Whether you need a high-converting website or a full operational
              platform, the same principles guide the build: clarity,
              performance, maintainability and measurable business value.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {webSolutions.map(([title, text], i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_25px_60px_rgba(79,70,229,.10)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-100/50 opacity-0 blur-3xl transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-xs font-extrabold text-indigo-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold">{title}</h3>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#f8faff] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl web-reveal">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Capabilities</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
              Everything required to build a serious web product.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([number, title, text]) => (
              <div key={number} className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-7 transition duration-400 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_25px_60px_rgba(79,70,229,.09)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-indigo-500">{number}</span>
                  <ArrowUpRight size={16} className="text-slate-300 transition group-hover:text-indigo-500" />
                </div>
                <h3 className="mt-12 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
                <div className="mt-7 h-px w-10 bg-slate-200 transition-all duration-500 group-hover:w-20 group-hover:bg-indigo-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div className="web-reveal">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Architecture</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-.055em] sm:text-5xl">
              A polished interface connected to a real system.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              We structure projects so the frontend, APIs, services, data and
              infrastructure have clear responsibilities.
            </p>
          </div>

          <div className="web-reveal rounded-[28px] bg-slate-950 p-5 shadow-2xl sm:p-8">
            <div className="grid gap-3 sm:grid-cols-5">
              {[
                [Globe2, "Interface"],
                [Code2, "API"],
                [Layers3, "Services"],
                [Database, "Data"],
                [Cloud, "Cloud"],
              ].map(([Icon, label], i) => (
                <div key={label} className="relative">
                  <div className="rounded-2xl border border-white/10 bg-white/[.05] p-5 text-center">
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                      <Icon size={20} />
                    </div>
                    <p className="mt-4 text-xs font-bold text-white">{label}</p>
                  </div>
                  {i < 4 && (
                    <div className="absolute right-[-10px] top-1/2 hidden h-px w-5 bg-indigo-400/40 sm:block" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Authentication", "Business Logic", "Observability"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 px-4 py-3 text-center text-[10px] font-semibold text-slate-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* DELIVERABLES */}
      <section className="border-y border-slate-200 bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div className="rounded-[28px] bg-[#f8faff] p-7 ring-1 ring-slate-200 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500 text-white">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.16em] text-indigo-500">Project output</p>
                  <h3 className="mt-1 font-bold">A complete web delivery</h3>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-3">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-indigo-500" />
                    <span className="text-xs font-medium leading-5 text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">End-to-end delivery</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-.055em] sm:text-5xl">
                One team from first wireframe to production.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                You do not have to coordinate a separate designer, frontend
                developer, backend developer and deployment team. We can take
                responsibility for the connected product experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["UX", "Frontend", "Backend", "Database", "Integrations", "Cloud", "Analytics"].map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="border-y border-slate-200 bg-[#f8faff] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Technology</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
                Modern tools. Practical engineering.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              The stack is selected around product requirements rather than
              forcing every project into the same template.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [Code2, "Frontend", "Next.js · React · JavaScript · Tailwind"],
              [Server, "Backend", "Node.js · Express · APIs"],
              [Database, "Data", "MongoDB · PostgreSQL · Redis"],
              [Cloud, "Infrastructure", "AWS · Docker · CI/CD"],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="text-indigo-500" size={22} />
                <h3 className="mt-7 font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Production Quality</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-.055em] sm:text-5xl">
            Built for launch — and what comes after.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {quality.map(([title, text]) => (
            <div key={title} className="border-b border-slate-200 pb-7">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
                  <Check size={15} />
                </div>
                <h3 className="font-bold">{title}</h3>
              </div>
              <p className="mt-3 pl-11 text-sm leading-6 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-950 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-300">Our Process</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-.055em] sm:text-5xl">
              From idea to production without losing the thread.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Discover", "Goals, users, scope and business requirements."],
              ["02", "Design", "Wireframes, visual system and interaction direction."],
              ["03", "Build", "Frontend, backend, APIs and integrations."],
              ["04", "Deploy", "Testing, CI/CD, infrastructure and production setup."],
              ["05", "Optimize", "Analytics, improvements, maintenance and iteration."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-[22px] border border-white/10 bg-white/[.04] p-6">
                <span className="text-xs font-bold text-indigo-300">{number}</span>
                <h3 className="mt-10 font-bold">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">FAQ</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
            Questions clients usually ask.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 rounded-[24px] border border-slate-200 bg-white">
          {faqs.map(([question, answer], i) => (
            <div key={question} className="px-5 sm:px-7">
              <button
                className="flex w-full items-center justify-between gap-5 py-6 text-left"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <span className="text-sm font-bold sm:text-base">{question}</span>
                <ChevronDown className={`shrink-0 transition ${openFaq === i ? "rotate-180 text-indigo-500" : "text-slate-400"}`} size={18} />
              </button>
              {openFaq === i && (
                <div className="pb-6 pr-8 text-sm leading-7 text-slate-500">{answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* PROJECT FIT */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="rounded-[28px] border border-slate-200 bg-[#f8faff] p-7 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-indigo-600">Good fit for</p>
              <div className="mt-4 flex max-w-3xl flex-wrap gap-2">
                {[
                  "New digital products",
                  "Website redesigns",
                  "E-commerce builds",
                  "SaaS MVPs",
                  "Business portals",
                  "Internal tools",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-indigo-600">
              Discuss Your Project <ArrowRight className="ml-2" size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950 px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute right-[-8%] top-[-60%] h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-indigo-300">Start with the product</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-.055em] text-white sm:text-5xl">
                Let&apos;s build a web experience your business can grow on.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                Share your idea, existing product or business requirement.
                We&apos;ll turn it into a practical web roadmap.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-indigo-50">
              Start a Project <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
