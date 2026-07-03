"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Rocket, ShieldCheck, Sparkles, Sprout } from "lucide-react";
import { CTAButton } from "@/components/site/CTAButton";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease } },
};

const badges = [
  { icon: ShieldCheck, label: "30年のIT経験を持つPM" },
  { icon: Sparkles, label: "AI連携 × 業務理解" },
  { icon: Rocket, label: "PoCから本番化まで対応" },
  { icon: Sprout, label: "納品後も育てる改善支援" },
];

export function Hero() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  // Very light parallax: image drifts down, copy drifts up as you scroll.
  const imgShift = useTransform(scrollY, [0, 700], [0, 44]);
  const copyShift = useTransform(scrollY, [0, 700], [0, -36]);
  const imgY = prefersReduced ? 0 : imgShift;
  const copyY = prefersReduced ? 0 : copyShift;

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden text-primary-foreground md:min-h-[88vh] md:justify-center"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      {/* ---- Hero portrait ----
           Mobile: full-bleed. Desktop: confined to a narrower right column so the
           image covers by HEIGHT (native size, not upscaled by width) and the figure
           reads smaller / more refined. The left edge is masked so it melts into the
           navy background. Shrink `md:w-*` further to make the person smaller. */}
      <motion.div
        aria-hidden
        style={{ y: imgY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden md:w-[58%] lg:w-[52%] xl:w-[48%]">
          <img
            src="/images/hero/hero-business-woman.png"
            alt="業務システムと生成AIを活用し、前を見据えるビジネスパーソン"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full scale-[1.08] object-cover object-[72%_18%] md:scale-100 md:object-[74%_center] md:[mask-image:linear-gradient(90deg,transparent_0%,#0006_12%,#000_32%)] md:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,#0006_12%,#000_32%)]"
          />
        </div>
      </motion.div>

      {/* ---- Readability scrims ---- */}
      {/* desktop: darken the left where the copy lives, fade out over the portrait */}
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(95deg, oklch(0.13 0.045 262 / 0.97) 0%, oklch(0.14 0.05 262 / 0.9) 30%, oklch(0.15 0.05 262 / 0.55) 48%, oklch(0.15 0.05 262 / 0) 68%)",
        }}
      />
      {/* mobile: keep the portrait bright up top, darken toward the copy below */}
      <div
        aria-hidden
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.13 0.045 262 / 0.32) 0%, oklch(0.13 0.045 262 / 0.2) 24%, oklch(0.14 0.05 262 / 0.78) 58%, oklch(0.12 0.045 262 / 0.97) 84%)",
        }}
      />
      {/* top scrim so the sticky header stays legible over the bright cards */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[oklch(0.12_0.05_262/0.4)] to-transparent"
      />

      {/* ---- Subtle system decorations (kept to the copy side) ---- */}
      <GlowOrb />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(90deg, black 0%, black 34%, transparent 62%)",
        }}
      />
      <FlowingLines />

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto mt-auto w-full max-w-6xl px-6 pb-24 pt-28 md:my-0 md:mt-0 md:py-28 lg:py-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          style={{ y: copyY }}
          className="max-w-xl lg:max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium tracking-wide text-[color:oklch(0.87_0.05_250)] shadow-[0_1px_0_oklch(1_0_0/0.05)_inset] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_10px_var(--accent-blue)]" />
            BtoBシステム開発チーム
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[2rem] font-bold leading-[1.2] tracking-tight break-keep sm:text-4xl md:text-5xl lg:text-[3.4rem]"
          >
            業務を理解し、
            <br />
            <span className="text-transparent [-webkit-background-clip:text] [background-clip:text] bg-[image:linear-gradient(100deg,oklch(0.99_0.01_250)_0%,oklch(0.86_0.08_250)_100%)]">
              使われ続ける
            </span>
            <wbr />
            システムをつくる。
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-[color:oklch(0.88_0.02_250)] md:text-lg"
          >
            RuxelTechは、業務システム・Webアプリ・生成AI連携・業務自動化を、
            要件整理から設計・開発・運用改善まで支援するシステム開発チームです。
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <CTAButton href="#contact">無料で相談する</CTAButton>
            <CTAButton href="#works" variant="ghost">
              開発実績を見る
            </CTAButton>
          </motion.div>

          {/* trust badges */}
          <motion.ul
            variants={fadeIn}
            className="mt-11 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap md:mt-14"
          >
            {badges.map((b) => (
              <motion.li
                key={b.label}
                variants={fadeUp}
                className="group inline-flex w-full min-w-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] py-2 pl-2.5 pr-3.5 text-xs font-medium leading-snug text-[color:oklch(0.9_0.02_250)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09] sm:w-auto md:text-[0.8rem]"
              >
                <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--accent-blue)]/15 text-[var(--accent-blue-soft)] ring-1 ring-inset ring-[var(--accent-blue)]/25">
                  <b.icon className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                {b.label}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* seam into the next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[oklch(0.14_0.05_262/0.5)]"
      />
    </section>
  );
}

/** Soft breathing accent orb sitting behind the copy column. */
function GlowOrb() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -left-24 top-1/4 h-[26rem] w-[26rem] rounded-full opacity-70 blur-3xl md:top-1/3"
      style={{
        background:
          "radial-gradient(circle, oklch(0.55 0.16 255 / 0.28), transparent 68%)",
        animation: "glow-breathe 9s ease-in-out infinite",
      }}
    />
  );
}

/** Slow horizontal flowing lines suggesting data connections, faded to the left. */
function FlowingLines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
      preserveAspectRatio="none"
      viewBox="0 0 1200 800"
      style={{
        maskImage: "linear-gradient(90deg, black 0%, black 38%, transparent 66%)",
      }}
    >
      <defs>
        <linearGradient id="fline" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.16 255 / 0)" />
          <stop offset="50%" stopColor="oklch(0.85 0.12 250 / 0.7)" />
          <stop offset="100%" stopColor="oklch(0.55 0.16 255 / 0)" />
        </linearGradient>
      </defs>
      {[210, 360, 520, 660].map((y, i) => (
        <path
          key={i}
          d={`M0 ${y} C 300 ${y - 40}, 900 ${y + 40}, 1200 ${y}`}
          stroke="url(#fline)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 10"
          style={{ animation: `dash-flow ${18 + i * 3}s linear infinite` }}
        />
      ))}
    </svg>
  );
}
