"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What does Trionex India build?",
    answer:
      "Trionex India builds websites, web applications, mobile experiences, cloud and DevOps systems, AI agents and business automation workflows. We can work on a focused product or connect multiple capabilities into one digital system.",
  },
  {
    question: "Can you build a complete product from scratch?",
    answer:
      "Yes. We can support the journey from discovery and UI/UX through frontend, backend, databases, integrations, deployment and ongoing optimization. The exact scope depends on the product and business requirements.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Our stack includes technologies such as Next.js, React, JavaScript, Node.js, Express, MongoDB, SQL, Redis, AWS, Docker, Kubernetes, Nginx, GitHub Actions, Jenkins, Argo CD and AI/LLM integrations.",
  },
  {
    question: "Can you work with an existing application?",
    answer:
      "Yes. An existing codebase can be reviewed and extended, redesigned, optimized, containerized or moved toward a more scalable architecture. We first understand the current system before recommending changes.",
  },
  {
    question: "Do you provide cloud and DevOps services?",
    answer:
      "Yes. Cloud architecture, containerization, CI/CD, Kubernetes, deployment automation, monitoring and infrastructure workflows are part of our engineering capabilities.",
  },
  {
    question: "Can Trionex India integrate AI into an existing business?",
    answer:
      "Yes. AI can be introduced through agents, LLM APIs, workflow automation, internal tools, customer-facing features and integrations. The implementation should be based on a practical business use case rather than adding AI only for appearance.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "We begin with a conversation about the business goal, users, current situation, desired outcome and technical requirements. From there, we can define scope, priorities, delivery stages and the appropriate technology approach.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Post-launch work can include maintenance, monitoring, performance improvements, new features, infrastructure changes and automation. The support model can be defined according to the project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll("[data-faq-reveal]");

    items.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("faq-visible");
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
      className="relative overflow-hidden bg-slate-50 px-6 py-28 text-slate-950 md:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-faq-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
            <Sparkles size={15} />
            FAQ · TRIONEX INDIA
          </div>

          <h2 className="mt-6 text-5xl font-bold tracking-[-0.045em] md:text-6xl">
            Questions before
            <span className="block text-indigo-600">we build?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A few answers to help you understand how Trionex India works,
            what we build and how we can approach your next project.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          {/* FAQ accordion */}
          <div className="space-y-3" data-faq-reveal>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-indigo-200 shadow-[0_15px_45px_rgba(79,70,229,0.08)]"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 text-xs font-bold tracking-[0.15em] text-indigo-400">
                        0{index + 1}
                      </span>
                      <span className="text-base font-bold text-slate-900 md:text-lg">
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-50 text-slate-500"
                      }`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t border-slate-100 px-6 pb-6 pt-5 pl-[4.4rem] md:px-7 md:pl-[4.9rem]">
                        <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact card */}
          <aside
            data-faq-reveal
            className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-950 p-7 shadow-[0_25px_70px_rgba(15,23,42,0.14)] lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
                  <MessageCircle size={22} />
                </div>

                <h3 className="mt-7 text-2xl font-bold tracking-tight text-white">
                  Still have a question?
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Every project is different. Tell us what you are trying to
                  build and we can discuss the right approach.
                </p>

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center gap-3">
                    <Mail size={17} className="text-indigo-300" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Start with a conversation
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Project discovery
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:bg-indigo-50"
                >
                  Talk to Trionex India
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <div
          data-faq-reveal
          className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-7 md:flex-row md:items-center"
        >
          <p className="text-sm text-slate-500">
            Have a specific requirement? We can discuss the scope directly.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition-colors hover:text-indigo-600"
          >
            Tell us about your project
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <style>{`
        [data-faq-reveal] {
          opacity: 1 !important;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: no-preference) {
          [data-faq-reveal] {
            transform: translateY(20px);
            transition:
              transform 700ms ease,
              opacity 700ms ease;
          }

          [data-faq-reveal].faq-visible {
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-faq-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
