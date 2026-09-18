"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Megaphone,
  Bot,
} from "lucide-react";

const previews = [
  {
    title: "WEBSITE / APP",
    subtitle: "PREVIEW",
    type: "website",
    icon: Code2,
  },
  {
    title: "MOBILE APP",
    subtitle: "EXPERIENCE",
    type: "mobile",
    icon: Smartphone,
  },
  {
    title: "CLOUD / DEVOPS",
    subtitle: "INFRASTRUCTURE",
    type: "cloud",
    icon: Cloud,
  },
  {
    title: "UI / UX",
    subtitle: "DESIGN",
    type: "design",
    icon: Palette,
  },
  {
    title: "DIGITAL",
    subtitle: "MARKETING",
    type: "marketing",
    icon: Megaphone,
  },
  {
    title: "AI AGENT",
    subtitle: "AUTOMATION",
    type: "ai",
    icon: Bot,
  },
]

const serviceRoutes = {
  "WEBSITE / APP": "/services/web-development",
  "MOBILE APP": "/services/mobile-app-development",
  "CLOUD / DEVOPS": "/services/cloud-devops",
  "UI / UX": "/services/ui-ux-design",
  "DIGITAL": "/services/digital-marketing",
  "AI AGENT": "/services/ai-agents",
};

function PreviewScreen({ item, clickable = false }) {
  const Icon = item.icon;
  const href = serviceRoutes[item.title] || "#services";

  const content = (
    <div className="showcase-screen h-full w-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_35px_100px_rgba(15,23,42,0.14)]">
      <div className="flex h-11 items-center gap-2 border-b border-slate-100 bg-slate-50 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <div className="mx-auto h-5 w-[44%] rounded-full bg-white shadow-sm" />
      </div>

      {item.type === "website" && (
        <div className="relative h-[calc(100%-44px)] overflow-hidden p-8">
          <div className="flex items-center justify-between">
            <div className="text-base font-black text-slate-900">
              TRIONEX<span className="text-blue-600">.</span>
            </div>
            <div className="hidden gap-6 text-[8px] font-bold text-slate-400 md:flex">
              <span>WORK</span>
              <span>SERVICES</span>
              <span>ABOUT</span>
              <span>CONTACT</span>
            </div>
            <div className="h-8 w-20 rounded-full bg-slate-900" />
          </div>

          <div className="mt-12">
            <div className="h-2 w-20 rounded-full bg-blue-100" />
            <h2 className="mt-5 text-[48px] font-black leading-[0.82] tracking-[-0.075em] text-slate-900">
              BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-slate-200">GREAT.</span>
            </h2>

            <div className="mt-7 flex gap-3">
              <div className="h-9 w-32 rounded-full bg-blue-600" />
              <div className="h-9 w-24 rounded-full border border-slate-200" />
            </div>
          </div>

          <div className="absolute bottom-[-60px] right-[-35px] h-52 w-52 rounded-full bg-blue-50" />
          <div className="absolute bottom-8 right-12 h-16 w-16 rounded-2xl bg-blue-600 shadow-xl shadow-blue-500/20" />
        </div>
      )}

      {item.type !== "website" && (
        <div className="relative h-[calc(100%-44px)] overflow-hidden p-8">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Icon size={23} strokeWidth={1.8} />
            </div>
            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-slate-400">
              TRIONEX
            </span>
          </div>

          <div className="mt-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600">
              Digital Product
            </p>
            <h2 className="mt-4 text-[48px] font-black leading-[0.84] tracking-[-0.075em] text-slate-900">
              {item.title}
              <br />
              <span className="text-slate-200">{item.subtitle}.</span>
            </h2>
          </div>

          <div className="absolute bottom-8 left-8 right-8 flex gap-3">
            <div className="h-11 flex-1 rounded-xl bg-slate-50" />
            <div className="h-11 w-28 rounded-xl bg-blue-600" />
          </div>
        </div>
      )}
    </div>
  );

  if (!clickable) return content;

  return (
    <a
      href={href}
      aria-label={`View ${item.title} service`}
      className="block h-full w-full"
    >
      {content}
    </a>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const screenRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const autoplayRef = useRef(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-kicker", { opacity: 0, y: 25, duration: 0.7 })
        .from(".hero-title", { opacity: 0, y: 65, duration: 1 }, "-=0.35")
        .from(".hero-description", { opacity: 0, y: 25, duration: 0.7 }, "-=0.55")
        .from(".hero-buttons", { opacity: 0, y: 20, duration: 0.6 }, "-=0.45")
        .from(".showcase-wrap", { opacity: 0, x: 50, scale: 0.96, duration: 1 }, "-=0.7")
        .from(".service-label", { opacity: 0, y: 12, duration: 0.5 }, "-=0.4");

      gsap.to(".showcase-wrap", {
        y: -7,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".showcase-glow", {
        scale: 1.12,
        opacity: 0.72,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".showcase-ring", {
        rotation: 360,
        duration: 45,
        repeat: -1,
        ease: "none",
      });
    }, heroRef);

    startAutoplay();
    return () => {
      clearInterval(autoplayRef.current);
      ctx.revert();
    };
  }, []);

  function changePreview(direction) {
    const nextIndex =
      (currentIndexRef.current + direction + previews.length) %
      previews.length;

    const screen = screenRef.current;
    if (!screen || isAnimating.current) return;

    isAnimating.current = true;

    gsap.to(screen, {
      opacity: 0,
      x: direction > 0 ? -22 : 22,
      duration: 0.28,
      ease: "power2.in",
      onComplete: () => {
        currentIndexRef.current = nextIndex;
        setCurrentIndex(nextIndex);

        gsap.fromTo(
          screen,
          { opacity: 0, x: direction > 0 ? 22 : -22 },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            ease: "power3.out",
            onComplete: () => {
              isAnimating.current = false;
            },
          }
        );
      },
    });
  }

  function startAutoplay() {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      changePreview(1);
    }, 3500);
  }

  const active = previews[currentIndex];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="showcase-glow absolute left-[67%] top-[43%] h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.09] blur-[125px]" />

        <div className="showcase-ring absolute left-[67%] top-[43%] h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/70" />

        <div className="absolute left-[67%] top-[43%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/80" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-24 pt-28 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="relative z-30">
          <div className="hero-kicker mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-blue-600" />
            </span>
            Digital Product Studio
          </div>

          <h1 className="hero-title max-w-3xl text-[clamp(3.5rem,6.5vw,7.2rem)] font-black leading-[0.83] tracking-[-0.075em] text-[#101828]">
            WE BUILD
            <br />
            <span className="text-blue-600">DIGITAL</span>
            <br />
            PRODUCTS
            <br />
            <span className="text-slate-300">THAT MATTER.</span>
          </h1>

          <p className="hero-description mt-8 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
            Websites, mobile applications, cloud infrastructure and growth
            systems engineered to turn ambitious ideas into powerful digital
            products.
          </p>

          <div className="hero-buttons mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-full bg-[#111827] px-7 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-blue-600"
            >
              Start a Project
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#services"
              className="rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-7 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            <span>100+ Projects</span>
            <span>50+ Clients</span>
            <span>4.8★ Rating</span>
          </div>
        </div>

        <div className="showcase-wrap relative mx-auto w-full max-w-[760px]">
          {/* Main showcase */}
          <div
            ref={screenRef}
            className="relative z-20 mx-auto h-[410px] w-[min(100%,620px)]"
            onMouseEnter={() => clearInterval(autoplayRef.current)}
            onMouseLeave={startAutoplay}
          >
            <PreviewScreen item={active} clickable />

            {/* Side preview peeks */}
            <div className="pointer-events-none absolute -left-[105px] top-[52px] hidden h-[290px] w-[155px] overflow-hidden rounded-2xl border border-slate-200/70 bg-white opacity-55 shadow-xl lg:block">
              <div className="h-full scale-[0.8]">
                <PreviewScreen
                  item={previews[(currentIndex - 1 + previews.length) % previews.length]}
                  clickable
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -right-[105px] top-[52px] hidden h-[290px] w-[155px] overflow-hidden rounded-2xl border border-slate-200/70 bg-white opacity-55 shadow-xl lg:block">
              <div className="h-full scale-[0.8]">
                <PreviewScreen
                  item={previews[(currentIndex + 1) % previews.length]}
                  clickable
                />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="service-label relative z-30 mt-7 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous preview"
                onClick={() => {
                  changePreview(-1);
                  startAutoplay();
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
              >
                ←
              </button>

              <div className="flex items-center gap-2 px-3">
                {previews.map((item, index) => (
                  <span
                    key={item.title}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? "w-7 bg-blue-600"
                        : "w-2 bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next preview"
                onClick={() => {
                  changePreview(1);
                  startAutoplay();
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
              >
                →
              </button>
            </div>

            <div className="mt-5 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">
                {active.title}
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-600">
                {active.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom service strip */}
      <div className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl">
        <div className="flex min-w-max animate-[marquee_28s_linear_infinite]">
          {[...previews, ...previews].map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={`${item.title}-${index}`}
                href={serviceRoutes[item.title] || "#services"}
                className="group flex h-24 w-[260px] shrink-0 items-center gap-4 border-r border-slate-100 px-8 transition-colors hover:bg-blue-50/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={21} />
                </div>
                <span className="text-sm font-bold text-slate-700 transition-colors group-hover:text-blue-600">
                  {item.title}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .showcase-wrap {
            margin-top: 20px;
          }

          .showcase-screen {
            border-radius: 18px;
          }
        }
      `}</style>
    </section>
  );
}
