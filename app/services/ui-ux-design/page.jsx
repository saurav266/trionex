import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronRight,
  Compass,
  Gauge,
  Layers3,
  LayoutDashboard,
  MousePointer2,
  Palette,
  PenTool,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const accent = "indigo";

export default function UIUXDesignPage() {
  const principles = [
    [Target, "Clarity", "Every screen should make the next action obvious and reduce cognitive load."],
    [Users, "User intent", "We design around what people are trying to accomplish, not just what a screen contains."],
    [Layers3, "System thinking", "Components, states and patterns stay consistent as the product grows."],
    [Gauge, "Performance", "Visual quality is paired with responsive interactions and engineering reality."],
  ];

  const services = [
    ["01", "Product Discovery", "Goals, users, journeys, information architecture and feature priorities."],
    ["02", "UX Design", "Flows, wireframes, interaction models and responsive product experiences."],
    ["03", "UI Design", "Visual systems, components, typography, spacing and polished interfaces."],
    ["04", "Design Systems", "Reusable components and rules that keep product teams consistent."],
    ["05", "Prototype & Test", "Clickable prototypes that help validate important product decisions."],
    ["06", "Developer Handoff", "Implementation-ready screens, states, specifications and component guidance."],
  ];

  const journey = [
    ["01", "Discover", "Understand users, business goals, constraints and the product context."],
    ["02", "Structure", "Turn requirements into journeys, information architecture and clear flows."],
    ["03", "Design", "Create the visual language, components and responsive screen system."],
    ["04", "Prototype", "Connect key screens into realistic interactions and product journeys."],
    ["05", "Validate", "Review usability, hierarchy and edge cases before implementation."],
    ["06", "Handoff", "Give engineering a clear, reusable system to build from."],
  ];

  const screens = [
    [LayoutDashboard, "SaaS dashboards", "Dense information made scannable through hierarchy, tables, charts and reusable components."],
    [Smartphone, "Mobile products", "Touch-first experiences with responsive states, gestures and practical navigation."],
    [Workflow, "Business systems", "Complex multi-step operations simplified into understandable workflows."],
    [Compass, "Web experiences", "Brand, content and conversion working together without visual noise."],
  ];

  const systemItems = [
    ["Typography", "Scale • hierarchy • readability"],
    ["Color", "Roles • contrast • semantic states"],
    ["Components", "Buttons • inputs • cards • navigation"],
    ["Layout", "Grid • spacing • responsive rules"],
    ["States", "Loading • error • empty • success"],
    ["Patterns", "Forms • tables • search • workflows"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* HERO */}
      <section className="relative border-b border-slate-200 bg-[#fbfcff]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute left-[-180px] top-[360px] h-[420px] w-[420px] rounded-full bg-sky-100/40 blur-3xl" />
          <div className="absolute inset-0 opacity-[.035] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-28 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
              <Sparkles size={15} /> UI/UX Design Studio
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Design that makes
              <span className="block text-indigo-600">complex feel simple.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              We design digital products, websites and business platforms where
              strategy, interaction and visual craft work together from the first idea
              to developer handoff.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-indigo-600"
              >
                Start a design project
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-indigo-300 hover:text-indigo-600"
              >
                See selected work
              </Link>
            </div>

            <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2"><Check size={15} className="text-indigo-600" /> UX strategy</span>
              <span className="flex items-center gap-2"><Check size={15} className="text-indigo-600" /> UI systems</span>
              <span className="flex items-center gap-2"><Check size={15} className="text-indigo-600" /> Prototyping</span>
              <span className="flex items-center gap-2"><Check size={15} className="text-indigo-600" /> Design-to-code</span>
            </div>
          </div>

          {/* HIGH-END PRODUCT DESIGN MOCKUP */}
          <div className="relative min-h-[570px]">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-100" />
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-indigo-200" />

            {/* floating annotation */}
            <div className="absolute left-0 top-16 z-30 hidden w-40 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 sm:block">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <MousePointer2 size={14} className="text-indigo-600" />
                User flow
              </div>
              <div className="mt-3 space-y-2 text-[10px] text-slate-500">
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Discover</div>
                <div className="ml-1 h-2 border-l border-slate-200" />
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Evaluate</div>
                <div className="ml-1 h-2 border-l border-slate-200" />
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Convert</div>
              </div>
            </div>

            {/* main browser */}
            <div className="absolute right-0 top-8 z-20 w-[94%] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-2xl shadow-indigo-950/15 sm:w-[90%]">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </div>
                <div className="rounded-md bg-slate-50 px-4 py-1.5 text-[9px] text-slate-400">
                  product.trionex.design
                </div>
                <div className="w-10" />
              </div>

              <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[145px_1fr]">
                <aside className="border-r border-slate-200 bg-slate-50 p-3">
                  <div className="mb-5 text-[11px] font-bold">Workspace</div>
                  {["Overview", "Analytics", "Projects", "Team", "Settings"].map((item, i) => (
                    <div key={item} className={`mb-1.5 rounded-lg px-2.5 py-2 text-[9px] ${i === 0 ? "bg-indigo-100 font-semibold text-indigo-700" : "text-slate-500"}`}>
                      {item}
                    </div>
                  ))}
                  <div className="mt-8 rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-[8px] uppercase tracking-wider text-slate-400">Design tokens</p>
                    <div className="mt-3 flex gap-1.5">
                      <span className="h-5 w-5 rounded-md bg-indigo-500" />
                      <span className="h-5 w-5 rounded-md bg-slate-900" />
                      <span className="h-5 w-5 rounded-md bg-slate-200" />
                    </div>
                  </div>
                </aside>

                <div className="p-4 sm:p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] text-slate-400">Product workspace</p>
                      <h3 className="mt-1 text-base font-semibold sm:text-lg">Overview</h3>
                    </div>
                    <div className="rounded-lg bg-slate-950 px-3 py-2 text-[8px] font-semibold text-white">Create new</div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["Active projects", "24"],
                      ["In review", "08"],
                      ["Completed", "132"],
                    ].map(([a, b]) => (
                      <div key={a} className="rounded-xl border border-slate-200 p-3">
                        <p className="text-[8px] uppercase tracking-wider text-slate-400">{a}</p>
                        <p className="mt-2 text-base font-semibold">{b}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 grid gap-2 sm:grid-cols-[1.5fr_1fr]">
                    <div className="rounded-xl border border-slate-200 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-semibold">Project activity</span>
                        <span className="text-[8px] text-indigo-600">Last 30 days</span>
                      </div>
                      <div className="mt-5 flex h-24 items-end gap-1">
                        {[28, 35, 30, 48, 44, 62, 54, 70, 59, 75, 68, 82, 74, 90, 80, 94].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t bg-indigo-500/70" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-950 p-4 text-white">
                      <p className="text-[8px] uppercase tracking-wider text-slate-500">Experience score</p>
                      <p className="mt-3 text-3xl font-semibold">8.7</p>
                      <div className="mt-4 h-1.5 rounded-full bg-white/10">
                        <div className="h-full w-[87%] rounded-full bg-indigo-400" />
                      </div>
                      <p className="mt-2 text-[8px] text-slate-500">interaction quality</p>
                    </div>
                  </div>

                  <div className="mt-2 rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-semibold">Primary user journey</span>
                      <span className="text-[8px] text-slate-400">4 steps</span>
                    </div>
                    <div className="mt-4 flex items-center">
                      {["Discover", "Select", "Review", "Complete"].map((x, i) => (
                        <div key={x} className="flex min-w-0 flex-1 items-center">
                          <div className={`w-full rounded-md px-2 py-2 text-center text-[8px] font-medium ${i === 2 ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-500"}`}>
                            {x}
                          </div>
                          {i < 3 && <ArrowRight size={10} className="mx-1 shrink-0 text-slate-300" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating mobile card */}
            <div className="absolute bottom-5 left-6 z-30 w-[170px] rounded-[25px] border-[5px] border-slate-800 bg-white p-1.5 shadow-2xl shadow-slate-950/20 sm:left-14 sm:w-[190px]">
              <div className="rounded-[18px] bg-slate-50 p-3">
                <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-slate-200" />
                <div className="rounded-xl bg-slate-950 p-3 text-white">
                  <p className="text-[7px] text-slate-500">Good morning</p>
                  <p className="mt-1 text-sm font-semibold">Your workspace</p>
                  <div className="mt-4 h-1.5 rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-indigo-400" />
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="h-16 rounded-xl border border-slate-200 bg-white p-2"><div className="h-2 w-9 rounded bg-slate-200" /><div className="mt-4 h-5 w-5 rounded bg-indigo-50" /></div>
                  <div className="h-16 rounded-xl border border-slate-200 bg-white p-2"><div className="h-2 w-8 rounded bg-slate-200" /><div className="mt-4 h-5 w-5 rounded bg-slate-100" /></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-0 z-30 hidden w-40 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 sm:block">
              <div className="flex items-center gap-2">
                <Palette size={15} className="text-indigo-600" />
                <span className="text-xs font-semibold">Design system</span>
              </div>
              <p className="mt-3 text-[10px] leading-5 text-slate-500">Components stay consistent across product surfaces.</p>
              <div className="mt-3 flex gap-1.5">
                {[1, 2, 3, 4].map((x) => <span key={x} className="h-5 w-5 rounded-md border border-slate-200 bg-slate-50" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">Design philosophy</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
              The best interface is the one users do not have to fight.
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-9 text-slate-600">
              We combine research, information architecture, interaction design and
              visual craft to turn complicated requirements into calm, confident experiences.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-slate-900">
              <span className="h-px w-10 bg-indigo-500" /> Product thinking before pixels
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">01 / Principles</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Four decisions behind every screen.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">A premium interface is not decoration. It is a system of decisions that makes the product easier to use.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {principles.map(([Icon, title, text], i) => (
              <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-950/5">
                <span className="absolute right-5 top-5 font-mono text-xs text-slate-300">0{i + 1}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:scale-105"><Icon size={21} /></div>
                <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <div className="mt-7 h-1 w-8 rounded-full bg-indigo-500 transition-all group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN JOURNEY */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">02 / Experience architecture</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Design the journey, not just the screen.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              The interface is one moment inside a larger experience. We map what happens
              before, during and after every important interaction.
            </p>

            <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
              <div className="flex items-center gap-3">
                <MousePointer2 size={18} className="text-indigo-600" />
                <p className="text-sm font-semibold">Conversion moment</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">The next useful action should feel natural—not hidden behind visual noise.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-4">
              {[
                ["01", "Attract", "Message"],
                ["02", "Understand", "Content"],
                ["03", "Act", "Interaction"],
                ["04", "Return", "Experience"],
              ].map(([n, title, sub], i) => (
                <div key={title} className="relative rounded-2xl border border-slate-200 p-4">
                  <span className="font-mono text-xs text-indigo-500">{n}</span>
                  <h3 className="mt-5 text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-[10px] text-slate-400">{sub}</p>
                  {i < 3 && <ArrowRight size={14} className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-indigo-400 sm:block" />}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500">User journey</p>
                  <p className="mt-1 text-xl font-semibold">Less friction. More confidence.</p>
                </div>
                <div className="rounded-xl bg-indigo-500/15 p-3 text-indigo-300"><Zap size={20} /></div>
              </div>
              <div className="mt-7 grid grid-cols-5 gap-1">
                {[25, 42, 58, 76, 92].map((h, i) => <div key={i} className="h-16 flex-1 rounded-t bg-white/5 p-1"><div className="mt-auto h-full rounded-t bg-indigo-400/70" style={{ clipPath: `inset(${100 - h}% 0 0 0)` }} /></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DESIGN */}
      <section className="border-y border-slate-200 bg-[#fbfcff]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">03 / What we design</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Interfaces for real products.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-slate-500">From marketing websites to complex operational software, every surface gets the same attention to hierarchy and interaction.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {screens.map(([Icon, title, text], i) => (
              <div key={title} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-indigo-50 blur-3xl transition group-hover:bg-indigo-100" />
                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white"><Icon size={21} /></div>
                    <h3 className="mt-7 text-2xl font-semibold">{title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                  <ArrowDownRight size={20} className="text-slate-300 transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-indigo-500" />
                </div>
                <div className="relative mt-7 flex gap-2">
                  {["Structure", "Interaction", "Visual"].map((x) => <span key={x} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-500">{x}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK SERVICES */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-300">04 / Capabilities</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">From product strategy to handoff.</h2>
              <p className="mt-5 leading-7 text-slate-400">A connected design process means fewer gaps between what gets imagined, approved and built.</p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {services.map(([num, title, text]) => (
                <div key={title} className="group grid gap-4 py-7 md:grid-cols-[60px_220px_1fr] md:items-center">
                  <span className="font-mono text-sm text-indigo-300">{num}</span>
                  <h3 className="text-xl font-semibold transition group-hover:text-indigo-300">{title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">05 / Design system</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A system, not a collection of pages.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Reusable foundations make the product easier to extend and help engineering
              maintain visual consistency as new features arrive.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold">
              <span className="h-px w-10 bg-indigo-500" /> Designed for scale
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">System library</p>
                <p className="mt-1 text-lg font-semibold">Foundation / v2.4</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-medium text-emerald-700">Ready for build</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {systemItems.map(([a, b], i) => (
                <div key={a} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{a}</span>
                    <span className="font-mono text-[9px] text-slate-300">0{i + 1}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{b}</p>
                  <div className="mt-4 flex gap-1.5">
                    {[1, 2, 3].map((x) => <span key={x} className="h-6 flex-1 rounded-md border border-slate-100 bg-slate-50 transition group-hover:bg-indigo-50" />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">06 / Process</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Structured enough to move fast.</h2>
          </div>

          <div className="grid gap-3">
            {journey.map(([num, title, text]) => (
              <div key={num} className="group grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:shadow-xl sm:grid-cols-[55px_150px_1fr_auto] sm:items-center">
                <span className="font-mono text-sm text-indigo-500">{num}</span>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{text}</p>
                <ChevronRight size={18} className="hidden text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500 sm:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIVE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid lg:grid-cols-[1fr_.85fr]">
            <div className="p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">07 / Responsive by default</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">One product. Every important screen.</h2>
              <p className="mt-5 leading-7 text-slate-600">
                Responsive behavior is designed from the start. Navigation, content,
                touch targets, hierarchy and spacing adapt as the viewport changes.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Desktop & tablet", "Mobile-first interactions", "Responsive typography", "Adaptive navigation"].map((x) => (
                  <div key={x} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium">
                    <Check size={15} className="text-indigo-600" /> {x}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[420px] items-end justify-center overflow-hidden bg-slate-950 p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,.45),transparent_48%)]" />
              <div className="relative w-[270px] rounded-[34px] border-[7px] border-slate-700 bg-white p-2 shadow-2xl">
                <div className="rounded-[24px] bg-slate-50 p-4">
                  <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-slate-200" />
                  <div className="rounded-2xl bg-slate-950 p-4 text-white">
                    <p className="text-[9px] text-slate-500">Workspace</p>
                    <p className="mt-1 text-lg font-semibold">Today</p>
                    <div className="mt-5 flex gap-2">
                      <span className="h-2 flex-1 rounded bg-indigo-400" />
                      <span className="h-2 w-10 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="h-24 rounded-xl border border-slate-200 bg-white p-3"><div className="h-2 w-12 rounded bg-slate-200" /><div className="mt-5 h-7 w-7 rounded-lg bg-indigo-50" /></div>
                    <div className="h-24 rounded-xl border border-slate-200 bg-white p-3"><div className="h-2 w-10 rounded bg-slate-200" /><div className="mt-5 h-7 w-7 rounded-lg bg-slate-100" /></div>
                  </div>
                  <div className="mt-3 h-16 rounded-xl bg-indigo-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
            <PenTool size={27} />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-300">Let’s design the experience</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-6xl">
            Have a product that deserves a better interface?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Bring us the product, problem or rough idea. We will turn it into a clear
            experience and a design system ready for engineering.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-indigo-50">
              Start a design project
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-indigo-400 hover:bg-white/5">
              Explore work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
