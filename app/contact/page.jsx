"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const projectTypes = [
  "Website / Web App",
  "Mobile App",
  "Cloud & DevOps",
  "AI Agents & Automation",
  "UI/UX Design",
  "Digital Growth",
  "Something else",
];

const budgetOptions = [
  "₹50K – ₹1L",
  "₹1L – ₹3L",
  "₹3L – ₹5L",
  "₹5L+",
  "Not sure yet",
];

export default function ContactPage() {
  const pageRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const elements = page.querySelectorAll("[data-contact-reveal]");

    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-white text-slate-950"
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-28 md:px-10 md:pt-36 lg:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-100/60 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div data-contact-reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
                <Sparkles size={15} />
                CONTACT · TRIONEX INDIA
              </div>

              <h1 className="mt-7 max-w-5xl text-5xl font-bold tracking-[-0.055em] md:text-7xl lg:text-8xl">
                Let&apos;s build
                <span className="block text-indigo-600">what&apos;s next.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Tell us what you want to build, improve or automate. We&apos;ll
                turn the conversation into a clear technical direction and
                practical next steps.
              </p>
            </div>

            <div
              data-contact-reveal
              className="rounded-[30px] border border-slate-200 bg-slate-50 p-7 md:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                    Start here
                  </p>
                  <p className="mt-1 font-bold text-slate-950">
                    Share your project idea
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {[
                  "Understand your goals",
                  "Define the right scope",
                  "Map the technology",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form + information */}
      <section className="relative px-6 pb-28 md:px-10 lg:px-16">
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form */}
          <div
            data-contact-reveal
            className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_20px_65px_rgba(15,23,42,0.08)] md:p-10"
          >
            {!submitted ? (
              <>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                    Project enquiry
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                    Tell us about your project.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    A few details are enough to start the conversation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700">
                        Your name
                      </span>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700">
                        Email address
                      </span>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                      />
                    </label>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700">
                        Company
                      </span>
                      <input
                        name="company"
                        type="text"
                        placeholder="Company name"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700">
                        Project type
                      </span>
                      <select
                        required
                        name="projectType"
                        defaultValue=""
                        className="mt-2 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {projectTypes.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-slate-700">
                      Approximate budget
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {budgetOptions.map((item) => (
                        <label key={item} className="cursor-pointer">
                          <input
                            required
                            type="radio"
                            name="budget"
                            value={item}
                            className="peer sr-only"
                          />
                          <span className="block rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-500 transition peer-checked:border-indigo-600 peer-checked:bg-indigo-600 peer-checked:text-white hover:border-indigo-200">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700">
                      Tell us about the project
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder="What are you trying to build, improve or automate?"
                      className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                    />
                  </label>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-6 py-4 font-bold text-white transition-all duration-300 hover:bg-indigo-600"
                  >
                    Send Project Enquiry
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    This form currently provides the front-end experience. Connect
                    it to your email/API endpoint to receive submissions.
                  </p>
                </form>
              </>
            ) : (
              <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <Check size={38} strokeWidth={2.2} />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Enquiry ready
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-950">
                  Your project details are captured.
                </h2>

                <p className="mt-4 max-w-md leading-7 text-slate-500">
                  Connect this form to your preferred email or backend endpoint
                  to send the enquiry to the Trionex India team.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-indigo-200 hover:text-indigo-600"
                >
                  Submit another enquiry
                </button>
              </div>
            )}
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div
              data-contact-reveal
              className="rounded-[32px] bg-slate-950 p-8 text-white shadow-[0_25px_75px_rgba(15,23,42,0.15)] md:p-9"
            >
              <div className="flex items-center gap-3">
                <Sparkles size={19} className="text-indigo-300" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">
                  Trionex India
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-bold tracking-tight">
                Let&apos;s make the next step clear.
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Whether you have a detailed specification or only an early
                idea, the conversation can start with the problem you want to
                solve.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:hello@trionexindia.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
                >
                  <Mail size={19} className="text-indigo-300" />
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="mt-1 text-sm font-semibold">
                      hello@trionexindia.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <MapPin size={19} className="text-indigo-300" />
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="mt-1 text-sm font-semibold">
                      India · Remote
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Clock3 size={19} className="text-indigo-300" />
                  <div>
                    <p className="text-xs text-slate-500">Availability</p>
                    <p className="mt-1 text-sm font-semibold">
                      Project discussions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-contact-reveal
              className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:p-9"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                What happens next?
              </p>

              <div className="mt-6 space-y-5">
                {[
                  ["01", "We review your requirement"],
                  ["02", "We discuss goals and scope"],
                  ["03", "We map the right solution"],
                ].map(([number, text]) => (
                  <div key={number} className="flex gap-4">
                    <span className="text-xs font-bold tracking-[0.15em] text-indigo-400">
                      {number}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/work"
              data-contact-reveal
              className="group flex items-center justify-between rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">
                  Before you contact us
                </p>
                <p className="mt-2 font-bold text-slate-950">
                  Explore our selected work
                </p>
              </div>
              <ArrowRight
                size={20}
                className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-indigo-600 px-6 py-20 md:px-10 lg:px-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />

        <div
          data-contact-reveal
          className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-100">
              Trionex India
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 max-w-xl text-indigo-100">
              Start the conversation and let&apos;s define the next step.
            </p>
          </div>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Back to Trionex India
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <style>{`
        [data-contact-reveal] {
          opacity: 1 !important;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: no-preference) {
          [data-contact-reveal] {
            transform: translateY(20px);
            transition:
              transform 700ms ease,
              opacity 700ms ease;
          }

          [data-contact-reveal].contact-visible {
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-contact-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
