import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  CirclePlay,
  Code2,
  Database,
  GitBranch,
  MessageSquare,
  Network,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

export default function AIAgentsPage() {
  const agents = [
    {
      icon: MessageSquare,
      title: "Support Agent",
      text: "Answers customer questions, understands context and routes complex conversations to people.",
    },
    {
      icon: Workflow,
      title: "Operations Agent",
      text: "Connects internal tools and executes repeatable business workflows with controlled actions.",
    },
    {
      icon: Database,
      title: "Knowledge Agent",
      text: "Retrieves relevant information from approved business knowledge before generating a response.",
    },
    {
      icon: Terminal,
      title: "DevOps Agent",
      text: "Analyzes operational signals and recommends or performs approved infrastructure actions.",
    },
  ];

  const workflow = [
    ["01", "Understand", "Receive a request, event or operational signal."],
    ["02", "Retrieve", "Find relevant context from connected systems and approved knowledge."],
    ["03", "Reason", "Choose the next step using rules, tools and model reasoning."],
    ["04", "Act", "Call approved APIs, tools or workflows with controlled permissions."],
    ["05", "Verify", "Check the result instead of assuming the action succeeded."],
    ["06", "Escalate", "Hand off to a human when confidence, permissions or risk require it."],
  ];

  const build = [
    ["AI Agent Architecture", "Single agents, multi-agent workflows and tool-using systems."],
    ["Knowledge & RAG", "Connect models to structured and unstructured business knowledge."],
    ["Tool Calling", "Let agents interact with APIs, databases and business systems."],
    ["Workflow Automation", "Turn repetitive processes into observable, approval-aware flows."],
    ["Guardrails", "Define permissions, validation, fallbacks and human approval points."],
    ["AI Observability", "Track executions, latency, errors, tool calls and operational behavior."],
  ];

  const technologies = [
    "Node.js",
    "Next.js",
    "OpenAI APIs",
    "LLM workflows",
    "RAG",
    "Vector databases",
    "REST APIs",
    "Webhooks",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(99,102,241,.15),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,.08),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[.035] bg-[linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-28 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <Sparkles size={16} /> AI Agents & Automation
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              AI that can{" "}
              <span className="text-indigo-600">do the work.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              We build AI agents and automation systems that connect models to your
              data, tools and workflows—so AI can move from answering questions to
              completing useful tasks.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-600"
              >
                Build an AI system
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3.5 font-semibold text-slate-800 transition hover:border-indigo-400 hover:text-indigo-600"
              >
                Explore our work
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Agents", "RAG", "Automation", "Tool Calling", "Guardrails"].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          {/* REALISTIC AI CONTROL CENTER */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-[50px] bg-indigo-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl shadow-indigo-950/15">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  agent runtime / ready
                </div>
              </div>

              <div className="grid grid-cols-[145px_1fr]">
                <aside className="border-r border-white/10 p-4 text-xs text-slate-400">
                  <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-white">
                    <Bot size={17} className="text-indigo-300" />
                    agent.ops
                  </div>
                  {["Overview", "Agents", "Runs", "Knowledge", "Tools", "Guardrails"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`mb-2 rounded-lg px-3 py-2 ${
                          i === 0 ? "bg-indigo-500/20 text-indigo-300" : ""
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </aside>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-slate-500">Active workflow</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">
                        Customer Resolution Agent
                      </h3>
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-300">
                      Running
                    </span>
                  </div>

                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[.035] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-300">
                        Current task
                      </span>
                      <span className="text-[10px] text-indigo-300">run #2481</span>
                    </div>

                    <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-3">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500">
                        Incoming request
                      </p>
                      <p className="mt-2 text-xs leading-5 text-slate-300">
                        “Customer wants to know why their order has not arrived.”
                      </p>
                    </div>

                    <div className="my-3 flex justify-center">
                      <ChevronRight className="rotate-90 text-slate-600" size={16} />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        ["Retrieve", "Order DB"],
                        ["Reason", "LLM"],
                        ["Action", "Support API"],
                      ].map(([a, b]) => (
                        <div
                          key={a}
                          className="rounded-lg border border-white/10 bg-white/[.03] p-3"
                        >
                          <p className="text-[10px] text-slate-500">{a}</p>
                          <p className="mt-1 text-xs font-semibold text-white">{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      ["Knowledge", "Connected"],
                      ["Tools", "4 available"],
                      ["Guardrails", "Passing"],
                    ].map(([a, b]) => (
                      <div
                        key={a}
                        className="rounded-xl border border-white/10 bg-white/[.035] p-3"
                      >
                        <p className="text-[10px] text-slate-500">{a}</p>
                        <p className="mt-2 text-xs font-medium text-emerald-300">{b}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-indigo-400/20 bg-indigo-500/[.08] p-3">
                    <CirclePlay size={17} className="text-indigo-300" />
                    <div>
                      <p className="text-xs font-medium text-white">Action approved</p>
                      <p className="text-[10px] text-slate-500">
                        Response will be sent after verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE IDEA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">
              Beyond chat
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              An AI agent is useful when it can understand, decide and act.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [BrainCircuit, "Understand", "Interpret requests and combine them with relevant business context."],
              [Network, "Connect", "Use approved tools, APIs, databases and knowledge sources."],
              [Zap, "Act", "Execute workflows, verify results and escalate when needed."],
            ].map(([Icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-indigo-950/5"
              >
                <Icon size={23} className="text-indigo-600" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENTS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">
              What we build
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              AI systems designed around a real workflow.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              We start with the task, the data and the systems involved—not with a
              model chosen in isolation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {agents.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                    <Icon size={21} />
                  </div>
                  <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">
              Agent workflow
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Reasoning with boundaries.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Production AI needs more than a prompt. We design explicit tool access,
              validation, fallback paths and human approval where the workflow needs it.
            </p>
          </div>

          <div className="grid gap-3">
            {workflow.map(([num, title, text]) => (
              <div
                key={num}
                className="group grid gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5 sm:grid-cols-[55px_140px_1fr] sm:items-center"
              >
                <span className="font-mono text-sm text-indigo-500">{num}</span>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-300">
              AI architecture
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Model + context + tools + control.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              The model is one component. The surrounding system determines what the
              agent knows, what it can do and how safely it can operate.
            </p>
          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-5">
            {[
              [Database, "Knowledge", "Documents • DB • RAG"],
              [BrainCircuit, "Model", "Reasoning • Generation"],
              [Network, "Tools", "APIs • Functions"],
              [Workflow, "Orchestrator", "State • Routing"],
              [Check, "Guardrails", "Policy • Approval"],
            ].map(([Icon, title, sub], i) => (
              <div
                key={title}
                className="relative rounded-2xl border border-white/10 bg-white/[.04] p-5"
              >
                <Icon size={22} className="text-indigo-300" />
                <h3 className="mt-5 font-semibold">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">{sub}</p>
                {i < 4 && (
                  <ArrowRight
                    size={17}
                    className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-indigo-300 md:block"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.025] p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Human-in-the-loop</p>
                <p className="mt-1 text-sm text-slate-500">
                  Approval can be required before sensitive or irreversible actions.
                </p>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-300">
                Controlled execution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">
            Capabilities
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for useful automation, not demos.
          </h2>
        </div>

        <div className="mt-12 grid gap-0 border-y border-slate-200 sm:grid-cols-2">
          {build.map(([title, text], i) => (
            <div
              key={title}
              className={`p-7 ${
                i % 2 === 0 ? "sm:border-r sm:border-slate-200" : ""
              } ${i < 4 ? "border-b border-slate-200" : ""}`}
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm text-indigo-500">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">
                Where AI fits
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Start with a process worth improving.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                The strongest automation opportunities are usually repetitive,
                information-heavy workflows with clear inputs, decisions and outcomes.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Customer support & ticket routing",
                "Lead qualification & CRM updates",
                "Internal knowledge assistants",
                "Document extraction & processing",
                "Operations & approval workflows",
                "DevOps incident assistance",
                "Sales research & enrichment",
                "Reporting & business intelligence",
              ].map((x) => (
                <div
                  key={x}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium shadow-sm"
                >
                  <span className="rounded-full bg-indigo-50 p-1.5 text-indigo-600">
                    <Check size={14} />
                  </span>
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">
              Technology
            </p>
            <h2 className="mt-3 text-3xl font-semibold">A flexible AI engineering stack.</h2>
          </div>

          <div className="flex max-w-3xl flex-wrap justify-end gap-2">
            {technologies.map((x) => (
              <span
                key={x}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">
          FAQ
        </p>
        <h2 className="mt-4 text-center text-4xl font-semibold tracking-tight">
          Common questions.
        </h2>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {[
            [
              "Do you build AI agents from scratch?",
              "Yes. We can design the application layer around the model, including prompts, retrieval, tools, workflow state, APIs, guardrails and the user interface.",
            ],
            [
              "Can an AI agent use our existing software?",
              "Yes, when the system exposes suitable APIs, webhooks or other supported integration points. We design tool access around the permissions and actions the workflow requires.",
            ],
            [
              "Can a human approve an agent action?",
              "Yes. Approval steps can be built into workflows where an action is sensitive, irreversible or needs business validation.",
            ],
            [
              "Do you build only chatbots?",
              "No. Chat is one interface. We also build background agents, workflow automation, knowledge systems, internal copilots and tool-using operational agents.",
            ],
          ].map(([q, a]) => (
            <details key={q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
                {q}
                <span className="text-2xl text-indigo-500 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl pr-10 text-sm leading-7 text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
            <Bot size={28} />
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Have a workflow AI could take over?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Tell us what your team does manually today. We can map the workflow,
            identify the right automation boundary and design the system around it.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-indigo-50"
            >
              Start an AI project
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
