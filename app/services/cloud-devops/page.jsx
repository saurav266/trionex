import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

export default function CloudDevOpsPage() {
  const platforms = [
    { icon: Cloud, title: "AWS Cloud", text: "Scalable cloud infrastructure, networking, IAM and managed services." },
    { icon: Container, title: "Containers", text: "Dockerized workloads with production-ready image and runtime practices." },
    { icon: Network, title: "Kubernetes", text: "Container orchestration, services, ingress, scaling and resilient deployments." },
    { icon: GitBranch, title: "CI/CD & GitOps", text: "Automated build, test, release and Git-driven deployment workflows." },
  ];

  const capabilities = [
    ["Cloud Architecture", "VPC, subnets, IAM, compute, storage, databases and production environments."],
    ["Kubernetes", "Deployments, services, ingress, config, secrets, health checks and autoscaling."],
    ["CI/CD Pipelines", "Build, test, security checks, image publishing and automated releases."],
    ["Infrastructure as Code", "Repeatable infrastructure using Terraform and environment-based configuration."],
    ["Observability", "Metrics, dashboards, logs, alerts and operational visibility."],
    ["Security & Reliability", "Least privilege, secrets, backups, health checks and failure-aware design."],
  ];

  const lifecycle = [
    ["01", "Plan", "Architecture, environments, networking and deployment strategy."],
    ["02", "Provision", "Infrastructure created consistently with automation and IaC."],
    ["03", "Build", "Applications packaged into reproducible container images."],
    ["04", "Deploy", "CI/CD and GitOps move tested changes into the right environment."],
    ["05", "Observe", "Metrics, logs and alerts expose what is happening in production."],
    ["06", "Improve", "Scale, optimize, harden and automate based on real operational signals."],
  ];

  const outcomes = [
    { icon: Zap, title: "Faster releases", text: "Reduce repetitive deployment work with automated delivery pipelines." },
    { icon: Gauge, title: "Operational visibility", text: "Know what is running, how it behaves and where failures begin." },
    { icon: ShieldCheck, title: "Safer changes", text: "Introduce validation, controlled releases and security checks into delivery." },
    { icon: Layers3, title: "Ready to scale", text: "Design infrastructure and workloads so growth does not require a rebuild." },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(79,70,229,.13),transparent_32%),radial-gradient(circle_at_15%_70%,rgba(14,165,233,.08),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[.035] bg-[linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <Cloud size={16} /> Cloud & DevOps Engineering
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Infrastructure that is built to{" "}
              <span className="text-indigo-600">ship.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              We design cloud infrastructure, automate delivery and build observable
              container platforms that help teams deploy with more confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-600">
                Discuss your infrastructure
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link href="/work" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3.5 font-semibold text-slate-800 transition hover:border-indigo-400 hover:text-indigo-600">
                Explore our work
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {["AWS", "Docker", "Kubernetes", "Terraform"].map((x) => (
                <div key={x} className="rounded-lg border border-slate-200 bg-white/80 px-3 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm">
                  {x}
                </div>
              ))}
            </div>
          </div>

          {/* REALISTIC INFRA DASHBOARD */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[40px] bg-indigo-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl shadow-indigo-950/10">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  production / healthy
                </div>
              </div>

              <div className="grid grid-cols-[160px_1fr]">
                <aside className="border-r border-white/10 p-4 text-xs text-slate-400">
                  <div className="mb-5 text-sm font-semibold text-white">ops.control</div>
                  {["Overview", "Clusters", "Deployments", "Pipelines", "Observability", "Alerts"].map((item, i) => (
                    <div key={item} className={`mb-2 rounded-lg px-3 py-2 ${i === 0 ? "bg-indigo-500/20 text-indigo-300" : ""}`}>
                      {item}
                    </div>
                  ))}
                </aside>

                <div className="p-5">
                  <div className="mb-5 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Production cluster</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">trionex-prod</h3>
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Operational</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      ["CPU", "42%", "↗ 6%"],
                      ["Memory", "61%", "↘ 2%"],
                      ["Pods", "28", "healthy"],
                    ].map(([a, b, c]) => (
                      <div key={a} className="rounded-xl border border-white/10 bg-white/[.035] p-3">
                        <p className="text-[10px] uppercase tracking-wider text-slate-500">{a}</p>
                        <p className="mt-2 text-lg font-semibold text-white">{b}</p>
                        <p className="text-[10px] text-slate-500">{c}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-xl border border-white/10 bg-white/[.035] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-300">Request / deployment activity</span>
                      <span className="text-[10px] text-indigo-300">last 60 min</span>
                    </div>
                    <div className="flex h-24 items-end gap-1">
                      {[28, 36, 31, 49, 44, 63, 56, 72, 58, 67, 76, 61, 84, 69, 78, 88, 74, 82, 91, 79, 86, 72, 81, 94].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t bg-indigo-400/60" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[.035] p-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400"><GitBranch size={14} /> Latest release</div>
                      <p className="mt-3 text-sm font-semibold text-white">release / v2.8.4</p>
                      <p className="mt-1 text-[10px] text-emerald-300">deployment succeeded</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[.035] p-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400"><ShieldCheck size={14} /> Security</div>
                      <p className="mt-3 text-sm font-semibold text-white">Policy checks</p>
                      <p className="mt-1 text-[10px] text-emerald-300">passing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT JOURNEY */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">The DevOps journey</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            From commit to production, designed as one system.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Good infrastructure is more than provisioning servers. It connects development,
            deployment, security and observability into a repeatable operating model.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {platforms.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-950/5">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600"><Icon size={21} /></div>
                <span className="text-xs text-slate-400">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">Business outcomes</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">Engineering that improves the delivery loop.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="text-indigo-600" size={22} />
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">What we build</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Cloud systems for real product teams.</h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {capabilities.map(([title, text], i) => (
            <div key={title} className="grid gap-4 py-7 md:grid-cols-[70px_250px_1fr] md:items-center">
              <span className="font-mono text-sm text-indigo-500">0{i + 1}</span>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="max-w-2xl text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-300">Reference architecture</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A delivery architecture that stays understandable.</h2>
            <p className="mt-5 leading-7 text-slate-400">
              The exact stack changes with the product. The principle stays the same:
              separate concerns, automate repeatable work and make production behavior visible.
            </p>
          </div>

          <div className="mt-14 overflow-x-auto pb-4">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-5 gap-3">
                {[
                  [Code2, "Source", "GitHub / GitLab"],
                  [Workflow, "CI/CD", "Build • Test • Scan"],
                  [Container, "Runtime", "Docker • Kubernetes"],
                  [Gauge, "Observe", "Prometheus • Grafana"],
                  [LockKeyhole, "Secure", "IAM • Secrets • Policies"],
                ].map(([Icon, title, sub], i) => (
                  <div key={title} className="relative rounded-2xl border border-white/10 bg-white/[.04] p-5">
                    <Icon className="text-indigo-300" size={22} />
                    <p className="mt-5 font-semibold">{title}</p>
                    <p className="mt-1 text-xs text-slate-500">{sub}</p>
                    {i < 4 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-indigo-300 md:block" size={18} />}
                  </div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  [Server, "Cloud", "AWS / managed services"],
                  [Database, "Data", "RDS / Redis / storage"],
                  [Terminal, "Automation", "Terraform / Ansible / GitOps"],
                ].map(([Icon, title, sub]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[.025] p-5">
                    <Icon className="text-sky-300" size={21} />
                    <p className="mt-4 font-semibold">{title}</p>
                    <p className="mt-1 text-xs text-slate-500">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">How we work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Infrastructure as a continuous lifecycle.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              We aim to leave teams with systems they can understand, operate and extend—
              not infrastructure that depends on one person.
            </p>
          </div>

          <div className="grid gap-3">
            {lifecycle.map(([num, title, text]) => (
              <div key={num} className="group grid gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5 sm:grid-cols-[55px_150px_1fr] sm:items-center">
                <span className="font-mono text-sm text-indigo-500">{num}</span>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">Technology</p>
              <h2 className="mt-3 text-3xl font-semibold">A practical modern stack.</h2>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-2">
              {["AWS", "EC2", "VPC", "S3", "RDS", "Docker", "Kubernetes", "Helm", "Terraform", "Ansible", "GitHub Actions", "Jenkins", "Argo CD", "Prometheus", "Grafana", "Nginx"].map((x) => (
                <span key={x} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">{x}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT FIT */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">Project fit</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">Bring us in where infrastructure becomes a bottleneck.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                From a new cloud environment to a Kubernetes deployment pipeline or an
                observability overhaul, we can work around the product and constraints you already have.
              </p>
            </div>
            <div className="grid gap-3">
              {["New cloud architecture", "Containerizing an existing application", "CI/CD modernization", "Kubernetes platform setup", "Infrastructure automation", "Monitoring & observability"].map((x) => (
                <div key={x} className="flex items-center gap-3 rounded-xl border border-indigo-100 bg-white px-4 py-3 text-sm font-medium">
                  <span className="rounded-full bg-indigo-50 p-1 text-indigo-600"><Check size={14} /></span>
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[.18em] text-indigo-600">FAQ</p>
        <h2 className="mt-4 text-center text-4xl font-semibold tracking-tight">Common questions.</h2>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {[
            ["Can you work with an existing AWS setup?", "Yes. We can review an existing environment, document it and improve the areas that matter instead of forcing a complete rebuild."],
            ["Do you only work with Kubernetes?", "No. Kubernetes is useful for many workloads, but the platform should match the product. We choose the simplest architecture that meets the requirements."],
            ["Can you build CI/CD from scratch?", "Yes. We can design the workflow from source control through testing, security checks, image publishing and deployment."],
            ["Can you add monitoring to an existing application?", "Yes. Metrics, dashboards, logs and alerting can be introduced incrementally around an existing application and infrastructure."],
          ].map(([q, a]) => (
            <details key={q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
                {q}
                <span className="text-2xl text-indigo-500 transition group-open:rotate-45">+</span>
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
            <Cloud size={28} />
          </div>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Ready to make your infrastructure a product advantage?</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Tell us what you are running today, what is slowing you down and where you want to go next.
          </p>
          <div className="mt-9 flex justify-center">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-indigo-50">
              Start a project
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
