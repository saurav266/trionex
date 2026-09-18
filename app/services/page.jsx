"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Cloud,
  Code2,
  Megaphone,
  Palette,
  Search,
  Smartphone,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceGroups = [
  {
    id: "build",
    label: "BUILD",
    eyebrow: "Digital Products",
    title: "Web, apps & product experiences",
    description:
      "We design and engineer fast, scalable digital products that are built around real business goals.",
    icon: Code2,
    services: [
      {
        title: "Website & Web App Development",
        slug: "web-development",
        icon: Code2,
        description:
          "High-performance websites, SaaS products, dashboards and business web applications.",
        tags: ["Next.js", "React", "Node.js", "MongoDB"],
      },
      {
        title: "Mobile App Development",
        slug: "mobile-app-development",
        icon: Smartphone,
        description:
          "Modern mobile experiences for customer-facing products, internal tools and digital services.",
        tags: ["React Native", "APIs", "Authentication", "Cloud"],
      },
    ],
  },
  {
    id: "deploy",
    label: "DEPLOY",
    eyebrow: "Cloud & Engineering",
    title: "Infrastructure that scales with you",
    description:
      "From deployment pipelines to Kubernetes and cloud infrastructure, we make delivery reliable and repeatable.",
    icon: Cloud,
    services: [
      {
        title: "Cloud & DevOps",
        slug: "cloud-devops",
        icon: Cloud,
        description:
          "Cloud architecture, containers, CI/CD, Kubernetes, infrastructure automation and observability.",
        tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
      },
      {
        title: "AI Agents & Automation",
        slug: "ai-agents",
        icon: Bot,
        description:
          "AI-powered workflows and agents that connect tools, automate repetitive work and accelerate operations.",
        tags: ["AI Agents", "LLMs", "APIs", "Automation"],
      },
    ],
  },
  {
    id: "design",
    label: "DESIGN",
    eyebrow: "Experience Design",
    title: "Interfaces people understand",
    description:
      "We turn complex ideas into clear, polished experiences with strong visual systems and intuitive interactions.",
    icon: Palette,
    services: [
      {
        title: "UI/UX Design",
        slug: "ui-ux-design",
        icon: Palette,
        description:
          "Research-driven interface design, user flows, design systems and responsive product experiences.",
        tags: ["Figma", "Design Systems", "UX", "Prototyping"],
      },
      {
        title: "Landing Page Design",
        slug: "landing-page-design",
        icon: Zap,
        description:
          "Conversion-focused landing pages designed to communicate value quickly and turn attention into action.",
        tags: ["Conversion", "Motion", "Responsive", "A/B Ready"],
      },
    ],
  },
  {
    id: "grow",
    label: "GROW",
    eyebrow: "Growth & Marketing",
    title: "Systems that turn attention into growth",
    description:
      "We connect acquisition, content, performance marketing and conversion into one measurable growth system.",
    icon: Target,
    services: [
      {
        title: "Digital Marketing",
        slug: "digital-marketing",
        icon: Megaphone,
        description:
          "Digital campaigns and channel strategies designed around measurable business outcomes.",
        tags: ["Strategy", "Campaigns", "Analytics", "Growth"],
      },
      {
        title: "Lead Generation",
        slug: "lead-generation",
        icon: Target,
        description:
          "Landing funnels and lead systems that help businesses attract, qualify and convert prospects.",
        tags: ["Funnels", "CRM", "Automation", "Leads"],
      },
      {
        title: "Meta & Google Ads",
        slug: "performance-marketing",
        icon: BarChart3,
        description:
          "Performance campaigns built around targeting, creative testing, conversion tracking and optimization.",
        tags: ["Meta Ads", "Google Ads", "Tracking", "CRO"],
      },
      {
        title: "SEO & Content",
        slug: "seo-content",
        icon: Search,
        description:
          "Search-focused content and technical foundations that build discoverability and qualified organic traffic.",
        tags: ["SEO", "Content", "Technical SEO", "Analytics"],
      },
      {
        title: "Brand & Creative",
        slug: "brand-creative",
        icon: Sparkles,
        description:
          "Brand identity, creative direction and digital assets that make your business recognizable and consistent.",
        tags: ["Branding", "Creative", "Visual Identity", "Content"],
      },
      {
        title: "CRO & Automation",
        slug: "cro-automation",
        icon: Zap,
        description:
          "Conversion improvements and automated workflows that remove friction from the customer journey.",
        tags: ["CRO", "Workflows", "Automation", "Analytics"],
      },
    ],
  },
];

const allServices = serviceGroups.flatMap((group) =>
  group.services.map((service) => ({ ...service, group: group.label }))
);

export default function ServicesPage() {
  const pageRef = useRef(null);
  const [activeGroup, setActiveGroup] = useState("ALL");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-hero-item", {
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray(".service-reveal").forEach((element) => {
        gsap.from(element, {
          y: 45,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.to(".hero-orbit", {
        rotate: 360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-pulse", {
        scale: 1.08,
        opacity: 0.55,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const visibleServices =
    activeGroup === "ALL"
      ? allServices
      : allServices.filter((service) => service.group === activeGroup);

  return (
    <main ref={pageRef} className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* HERO */}
      <section className="relative isolate border-b border-slate-200 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.07) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute left-1/2 top-20 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-28 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pb-32 lg:pt-36">
          <div>
            <div className="services-hero-item mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Trionex India · Digital Capabilities
            </div>

            <h1 className="services-hero-item max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              Everything you need to{" "}
              <span className="text-indigo-600">build, deploy & grow.</span>
            </h1>

            <p className="services-hero-item mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Trionex India brings product engineering, cloud infrastructure,
              AI automation, design and growth capabilities together under one
              connected system.
            </p>

            <div className="services-hero-item mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-indigo-300 hover:text-indigo-600"
              >
                Explore Our Work
              </Link>
            </div>

            <div className="services-hero-item mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
              <span>12 connected capabilities</span>
              <span>•</span>
              <span>Web to cloud</span>
              <span>•</span>
              <span>AI to growth</span>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[500px]">
            <div className="absolute inset-8 rounded-full border border-indigo-200/80" />
            <div className="hero-orbit absolute inset-14 rounded-full border border-dashed border-indigo-300/70" />
            <div className="absolute inset-24 rounded-full border border-slate-200" />

            {[
              ["BUILD", "left-2 top-20"],
              ["DEPLOY", "right-0 top-24"],
              ["DESIGN", "left-3 bottom-20"],
              ["GROW", "right-1 bottom-20"],
            ].map(([label, position]) => (
              <div
                key={label}
                className={`absolute ${position} rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 text-xs font-bold tracking-[0.18em] text-slate-700 shadow-lg shadow-indigo-100/50`}
              >
                {label}
              </div>
            ))}

            <div className="hero-pulse absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-indigo-200 bg-white shadow-[0_0_80px_rgba(99,102,241,.22)]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-950 text-center text-white">
                <div>
                  <div className="text-lg font-bold">TRIONEX</div>
                  <div className="text-[9px] tracking-[0.3em] text-indigo-300">
                    INDIA
                  </div>
                </div>
              </div>
            </div>

            {Array.from({ length: 8 }).map((_, index) => (
              <span
                key={index}
                className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-indigo-500"
                style={{
                  transform: `rotate(${index * 45}deg) translateY(-${165 + (index % 2) * 22}px)`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 lg:px-8">
          {["ALL", "BUILD", "DEPLOY", "DESIGN", "GROW"].map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold tracking-[0.15em] transition ${
                activeGroup === group
                  ? "bg-slate-950 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      </section>

      {/* ALL SERVICE CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="service-reveal mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Our Services
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            One partner across the entire digital journey.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Choose one capability or combine multiple services into a complete
            digital system.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-reveal group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/60"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-indigo-100/40 blur-3xl transition duration-500 group-hover:bg-indigo-200/60" />

                <div className="relative">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.18em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-4 min-h-[76px] leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-indigo-600">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SYSTEM GROUPS */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="service-reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              The Trionex India System
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Four capabilities. One connected workflow.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our services are organized around the stages businesses need to
              move from idea to reliable digital growth.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {serviceGroups.map((group, index) => {
              const GroupIcon = group.icon;

              return (
                <div
                  key={group.id}
                  className="service-reveal overflow-hidden rounded-[2rem] border border-slate-200 bg-white"
                >
                  <div className="grid lg:grid-cols-[.8fr_1.2fr]">
                    <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-10">
                      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold tracking-[0.25em] text-indigo-300">
                            0{index + 1} · {group.label}
                          </span>
                          <GroupIcon className="h-6 w-6 text-indigo-300" />
                        </div>
                        <p className="mt-16 text-sm font-medium text-slate-400">
                          {group.eyebrow}
                        </p>
                        <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                          {group.title}
                        </h3>
                        <p className="mt-5 leading-7 text-slate-300">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 p-6 sm:p-8 md:grid-cols-2">
                      {group.services.map((service) => {
                        const Icon = service.icon;

                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50/40"
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-indigo-600 group-hover:text-white">
                              <Icon className="h-5 w-5" />
                            </div>
                            <h4 className="mt-5 text-lg font-semibold">
                              {service.title}
                            </h4>
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                              {service.description}
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                              View service
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="service-reveal max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            How We Combine It
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            From first conversation to continuous improvement.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            ["01", "Discover", "Understand goals, users, constraints and opportunities."],
            ["02", "Design", "Shape the experience, architecture and delivery plan."],
            ["03", "Build", "Engineer the product, integrations and infrastructure."],
            ["04", "Optimize", "Measure, improve, automate and scale what works."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="service-reveal rounded-3xl border border-slate-200 bg-white p-7"
            >
              <span className="text-sm font-bold text-indigo-600">{number}</span>
              <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="service-reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-16 text-white sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
                Trionex India
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Need more than one service?
                <br />
                Let&apos;s build the whole system.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Tell us what you are building, what needs to improve, or where
                you want to go next. We&apos;ll shape the right combination of
                capabilities.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative mt-12 grid gap-3 border-t border-white/10 pt-7 text-sm text-slate-300 sm:grid-cols-3">
            {[
              "Strategy before execution",
              "Engineering ownership",
              "Built for long-term growth",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-indigo-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
