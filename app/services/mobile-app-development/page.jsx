"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  Globe2,
  Lock,
  Menu,
  MoreHorizontal,
  Play,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productScreens = [
  { id: "home", label: "Home", title: "A faster way to get things done" },
  { id: "orders", label: "Orders", title: "Everything in one place" },
  { id: "analytics", label: "Analytics", title: "Know what is happening" },
];

const appFeatures = [
  {
    number: "01",
    title: "Product experience",
    text: "Clear navigation, purposeful interactions and interfaces designed around the actions your users actually need.",
  },
  {
    number: "02",
    title: "Connected backend",
    text: "Secure APIs, authentication, business logic, databases and third-party integrations working behind the app.",
  },
  {
    number: "03",
    title: "Production engineering",
    text: "Release pipelines, monitoring, performance and infrastructure considered as part of the product lifecycle.",
  },
];

const useCases = [
  {
    title: "E-commerce",
    text: "Catalogs, search, carts, payments, orders and customer accounts.",
    metric: "Commerce",
  },
  {
    title: "Food & Delivery",
    text: "Ordering, live status, notifications, delivery workflows and operations.",
    metric: "Operations",
  },
  {
    title: "Healthcare",
    text: "Appointments, patient journeys, communication and secure access.",
    metric: "Care",
  },
  {
    title: "Business Platforms",
    text: "Field operations, approvals, dashboards and internal workflows.",
    metric: "Business",
  },
];

const architecture = [
  ["Mobile Experience", "React Native", Smartphone],
  ["API Layer", "Node.js · REST", Code2],
  ["Business Services", "Microservices", Server],
  ["Data Layer", "MongoDB · Redis", Database],
  ["Cloud", "AWS · Docker", Cloud],
];

const process = [
  ["01", "Discover", "Goals, users, requirements"],
  ["02", "Design", "Flows, screens, interactions"],
  ["03", "Engineer", "App, APIs, data, integrations"],
  ["04", "Validate", "Testing, security, performance"],
  ["05", "Release", "Production deployment"],
  ["06", "Evolve", "Analytics, improvements, scale"],
];

function PhoneMockup({ compact = false }) {
  return (
    <div
      className={`relative ${
        compact ? "h-[430px] w-[218px]" : "h-[570px] w-[288px]"
      }`}
    >
      <div className="absolute inset-0 rounded-[42px] border-[7px] border-slate-950 bg-slate-950 p-2 shadow-[0_35px_100px_rgba(15,23,42,.25)]">
        <div className="relative h-full overflow-hidden rounded-[32px] bg-[#f7f8fc]">
          <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-950" />

          <div className="px-5 pt-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-600">
                  TRIONEX
                </p>
                <p className="mt-1 text-[8px] text-slate-400">Good morning</p>
              </div>
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                <Bell className="h-4 w-4 text-slate-700" />
                <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[9px] font-medium text-slate-500">
                Welcome back
              </p>
              <h3 className="mt-1 text-[24px] font-semibold leading-7 tracking-tight text-slate-950">
                Your business,
                <br />
                <span className="text-indigo-600">in your pocket.</span>
              </h3>
            </div>

            <div className="mt-6 rounded-[22px] bg-slate-950 p-4 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[8px] text-slate-400">Today&apos;s activity</span>
                <MoreHorizontal className="h-4 w-4 text-slate-500" />
              </div>
              <div className="mt-5 text-[25px] font-semibold">₹84,260</div>
              <div className="mt-1 flex items-center gap-1 text-[8px] text-indigo-300">
                <Zap className="h-3 w-3" />
                +12.8% this week
              </div>
              <div className="mt-5 flex h-14 items-end gap-1">
                {[28, 45, 35, 58, 44, 72, 62, 85, 68, 94, 78, 100].map(
                  (height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-indigo-400/70"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-3 shadow-sm">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50">
                  <Smartphone className="h-3.5 w-3.5 text-indigo-600" />
                </div>
                <p className="mt-3 text-[9px] font-semibold">Customers</p>
                <p className="mt-1 text-[8px] text-slate-400">2,840 active</p>
              </div>
              <div className="rounded-2xl bg-white p-3 shadow-sm">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <p className="mt-3 text-[9px] font-semibold">Orders</p>
                <p className="mt-1 text-[8px] text-slate-400">184 today</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-white p-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold">Recent activity</span>
                <span className="text-[8px] text-indigo-600">View all</span>
              </div>
              {["New order received", "Payment completed", "Customer joined"].map(
                (item, i) => (
                  <div
                    key={item}
                    className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-2"
                  >
                    <div className="h-6 w-6 rounded-full bg-slate-100" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[8px] font-medium">{item}</p>
                      <p className="text-[7px] text-slate-400">
                        {i + 1} min ago
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-slate-200 bg-white/95 px-3 py-3 backdrop-blur">
            <div className="h-1 w-1 rounded-full bg-indigo-600" />
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="h-1 w-1 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileAppDevelopmentPage() {
  const pageRef = useRef(null);
  const [activeScreen, setActiveScreen] = useState("home");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-device", {
        y: 45,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 35,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.to(".float-ui", {
        y: -10,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });

      gsap.to(".orbit-line", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="overflow-hidden bg-white text-slate-950">
      {/* HERO */}
      <section className="relative min-h-[780px] overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.055) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-28 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-32">
          <div className="hero-copy">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/90 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Trionex India · Mobile Product Engineering
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[70px]">
              Your product,
              <br />
              <span className="text-indigo-600">inside every pocket.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              We build mobile applications that combine thoughtful product
              design, dependable engineering and the infrastructure required
              to operate after launch.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
              >
                Build Your App
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-indigo-300 hover:text-indigo-600"
              >
                View Work
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-5 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {["T", "I", "D"].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-bold text-slate-700"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span>Strategy · Design · Engineering · Cloud</span>
            </div>
          </div>

          <div className="hero-device relative flex min-h-[620px] items-center justify-center">
            <div className="orbit-line absolute h-[500px] w-[500px] rounded-full border border-dashed border-indigo-200/70" />
            <div className="absolute h-[390px] w-[390px] rounded-full border border-indigo-100" />

            <div className="float-ui absolute left-0 top-20 z-20 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                  <Wifi className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-bold">API Connected</p>
                  <p className="mt-1 text-[10px] text-slate-400">All systems normal</p>
                </div>
              </div>
            </div>

            <div className="float-ui absolute right-0 top-32 z-20 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold">Secure Session</p>
                  <p className="mt-1 text-[10px] text-slate-400">Protected</p>
                </div>
              </div>
            </div>

            <div className="float-ui absolute bottom-24 left-2 z-20 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Cloud className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold">Cloud Ready</p>
                  <p className="mt-1 text-[10px] text-slate-400">Production</p>
                </div>
              </div>
            </div>

            <div className="hero-phone relative z-10">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / POSITIONING */}
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
              Mobile is part of the system
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
              A great app is not just a collection of screens.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-7 text-center">
            {[
              ["UX", "Experience"],
              ["API", "Connected"],
              ["OPS", "Operated"],
            ].map(([number, label]) => (
              <div key={number}>
                <div className="text-2xl font-semibold">{number}</div>
                <div className="mt-1 text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Product Showcase
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            We design the experience before we scale the system.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Your users should know where they are, what they can do and what
            happens next. The interface is designed around those moments.
          </p>
        </div>

        <div className="reveal mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f8fc]">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-slate-200" />
            <span className="h-3 w-3 rounded-full bg-slate-200" />
            <span className="h-3 w-3 rounded-full bg-slate-200" />
            <span className="ml-3 text-xs text-slate-400">product-preview</span>
          </div>

          <div className="grid items-center gap-10 px-6 py-12 md:px-12 lg:grid-cols-[.7fr_1.3fr] lg:px-20 lg:py-16">
            <div>
              <div className="flex flex-wrap gap-2">
                {productScreens.map((screen) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveScreen(screen.id)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      activeScreen === screen.id
                        ? "bg-slate-950 text-white"
                        : "bg-white text-slate-500 hover:text-indigo-600"
                    }`}
                  >
                    {screen.label}
                  </button>
                ))}
              </div>

              <h3 className="mt-8 text-3xl font-semibold tracking-tight">
                {productScreens.find((s) => s.id === activeScreen)?.title}
              </h3>
              <p className="mt-4 max-w-md leading-7 text-slate-600">
                Real product interfaces are built around clear actions,
                feedback and context — not decorative complexity.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Clear navigation and hierarchy",
                  "Responsive interactions",
                  "Useful states and feedback",
                  "Connected data and workflows",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white">
                      <Check className="h-3 w-3" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[540px] items-center justify-center gap-[-20px]">
              <div className="absolute right-6 top-4 hidden rotate-6 md:block">
                <PhoneMockup compact />
              </div>
              <div className="relative z-10 -translate-x-16 -rotate-3 md:translate-x-0">
                <PhoneMockup compact />
              </div>
              <div className="absolute bottom-2 right-10 hidden -rotate-6 md:block">
                <PhoneMockup compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="reveal grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                What We Actually Build
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Product engineering from screen to cloud.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">
              We can take responsibility for the mobile experience and the
              technical systems that make it work — giving you one connected
              team instead of separate pieces.
            </p>
          </div>

          <div className="mt-14 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white">
            {appFeatures.map((item) => (
              <div
                key={item.number}
                className="reveal grid gap-6 p-7 md:grid-cols-[90px_260px_1fr] md:items-start md:p-9"
              >
                <span className="text-sm font-bold text-indigo-600">
                  {item.number}
                </span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Product Scenarios
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Built around how your business actually works.
            </h2>
          </div>
          <p className="max-w-md text-slate-600">
            Different products need different workflows. We start with the
            business problem, then design the technology around it.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {useCases.map((item, index) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40 sm:p-9"
            >
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-indigo-100/40 blur-3xl transition group-hover:bg-indigo-200/60" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-indigo-600">
                    0{index + 1}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    {item.metric}
                  </span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-lg leading-7 text-slate-600">
                  {item.text}
                </p>
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  Product strategy
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* DEVICE ECOSYSTEM */}
      <section className="bg-[#f8faff] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-10 rounded-full bg-indigo-100/40 blur-3xl" />
                <div className="relative rounded-[38px] border-[10px] border-slate-950 bg-white p-2 shadow-[0_30px_90px_rgba(15,23,42,.18)]">
                  <div className="overflow-hidden rounded-[27px] bg-[#f7f9fd]">
                    <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-slate-950" />
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[.16em] text-indigo-500">Today</p>
                          <p className="mt-1 text-lg font-extrabold text-slate-950">Your activity</p>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-indigo-100" />
                      </div>
                      <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                        <p className="text-[9px] text-slate-400">Weekly progress</p>
                        <p className="mt-2 text-3xl font-extrabold">84%</p>
                        <div className="mt-5 h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[84%] rounded-full bg-indigo-400" />
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {["Orders", "Messages", "Tasks", "Insights"].map((item) => (
                          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4">
                            <div className="h-7 w-7 rounded-lg bg-indigo-50" />
                            <p className="mt-3 text-[10px] font-bold text-slate-800">{item}</p>
                            <p className="mt-1 text-[8px] text-slate-400">View details</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 h-10 rounded-xl bg-indigo-500 text-center text-[10px] font-bold leading-10 text-white">
                        Continue
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 top-16 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-right-10">
                  <p className="text-[8px] font-bold uppercase tracking-[.16em] text-indigo-500">App status</p>
                  <div className="mt-2 flex items-center gap-2 text-[10px] font-bold text-slate-800">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    API Connected
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Device ecosystem</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-.055em] sm:text-5xl">
                Designed for the hand.
                <span className="block text-slate-400">Engineered for the system.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                The app interface is only one layer. Behind every tap can be
                authentication, APIs, notifications, databases, analytics and
                cloud infrastructure.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["iOS & Android", Smartphone],
                  ["Push & Notifications", Zap],
                  ["Secure APIs", ShieldCheck],
                  ["Cloud Backend", Cloud],
                ].map(([title, Icon]) => (
                  <div key={title} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500">
                      <Icon size={17} />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="reveal max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
              Behind The App
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              One experience. Multiple systems working together.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The mobile interface connects to services, data and cloud
              infrastructure through an architecture designed for the product.
            </p>
          </div>

          <div className="reveal mt-16">
            <div className="grid gap-3 lg:grid-cols-5">
              {architecture.map(([title, value, Icon], index) => (
                <div key={title} className="relative">
                  <div className="rounded-3xl border border-white/10 bg-white/[.045] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-7 text-xs text-slate-500">0{index + 1}</p>
                    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{value}</p>
                  </div>
                  {index < architecture.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden w-6 border-t border-indigo-400/40 lg:block" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                [Lock, "Security", "Authentication, authorization and secure data flows."],
                [ShieldCheck, "Reliability", "Monitoring and operational visibility around the product."],
                [Zap, "Performance", "Efficient interactions, requests and resource usage."],
              ].map(([Icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[.025] p-6"
                >
                  <Icon className="h-5 w-5 text-indigo-300" />
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="reveal grid gap-10 lg:grid-cols-[1fr_.7fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Technology
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Modern tools. Practical architecture.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              We choose technologies according to the product requirements,
              team capabilities and long-term operating needs.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-50 p-7">
            <div className="grid grid-cols-2 gap-3">
              {[
                "React Native",
                "Node.js",
                "MongoDB",
                "Redis",
                "AWS",
                "Docker",
                "REST APIs",
                "CI/CD",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="reveal max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Delivery
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A product lifecycle, not just a launch date.
            </h2>
          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([number, title, description]) => (
              <div
                key={number}
                className="reveal rounded-3xl border border-slate-200 bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-indigo-600">{number}</span>
                  <ChevronDown className="h-4 w-4 text-slate-300" />
                </div>
                <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY / QUALITY */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="reveal">
            <div className="relative mx-auto flex h-[390px] max-w-[390px] items-center justify-center rounded-[2rem] border border-slate-200 bg-slate-50">
              <div className="absolute inset-10 rounded-full border border-dashed border-indigo-200" />
              <div className="absolute inset-20 rounded-full border border-indigo-100" />
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-950 shadow-2xl shadow-indigo-200">
                <ShieldCheck className="h-14 w-14 text-indigo-300" />
              </div>
              {[
                [Fingerprint, "top-10 left-1/2 -translate-x-1/2"],
                [Lock, "right-10 top-1/2 -translate-y-1/2"],
                [Database, "bottom-10 left-1/2 -translate-x-1/2"],
                [Cloud, "left-10 top-1/2 -translate-y-1/2"],
              ].map(([Icon, position]) => (
                <div
                  key={position}
                  className={`absolute ${position} flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-indigo-600 shadow-lg`}
                >
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Built For Production
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Important details should not be an afterthought.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Mobile products operate in real conditions: different devices,
              networks, users, permissions and changing business requirements.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Authentication & authorization",
                "API validation",
                "Secure sessions",
                "Error handling",
                "Performance optimization",
                "Monitoring & logs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium"
                >
                  <Check className="h-4 w-4 text-indigo-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="reveal text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Questions
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Before we build.
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {[
              ["Can you build the backend too?", "Yes. The mobile app can be developed together with APIs, authentication, databases and required integrations."],
              ["Can you work with an existing backend?", "Yes. Existing APIs and services can be reviewed and connected when they fit the new product requirements."],
              ["Can the same app support Android and iOS?", "The project can be planned around cross-platform development, with platform-specific requirements handled where necessary."],
              ["Do you provide post-launch development?", "Yes. New features, optimization, maintenance and product improvements can continue after the initial release."],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="reveal group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">
                  {question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-indigo-600 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-7 py-16 text-white sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
                Trionex India · Mobile
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                Have an app idea?
                <br />
                Let&apos;s make it useful.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Bring the idea, business problem or existing product. We can
                help define the experience and build the system behind it.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-50"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/10">
                <div className="absolute inset-6 rounded-full border border-dashed border-indigo-400/30" />
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-slate-950">
                  <Smartphone className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-14 grid gap-3 border-t border-white/10 pt-7 text-sm text-slate-300 sm:grid-cols-3">
            {[
              "Product-first thinking",
              "Connected engineering",
              "Built for the long term",
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
