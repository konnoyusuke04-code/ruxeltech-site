"use client";

import { motion, type Variants } from "framer-motion";
import { CTAButton } from "@/components/site/CTAButton";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease } },
};

const stats = [
  { k: "30年", v: "IT経験のPM" },
  { k: "AI × 業務", v: "両輪の開発力" },
  { k: "小さく始める", v: "PoC〜本番化" },
  { k: "運用改善", v: "納品して終わりにしない" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-primary-foreground"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      {/* grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 70% 30%, black 30%, transparent 75%)",
        }}
      />
      <Particles />
      <NetworkGraphic />
      <FlowingLines />

      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-44">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-[color:oklch(0.85_0.05_250)] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_10px_var(--accent-blue)]" />
            BtoB System Development Team
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl"
          >
            業務を理解し、
            <br className="hidden md:inline" />
            使われ続けるシステムをつくる。
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-base leading-relaxed text-[color:oklch(0.86_0.02_250)] md:text-lg"
          >
            RuxelTechは、業務システム・Webアプリ・生成AI連携・業務自動化を、
            要件整理から設計・開発・運用改善まで支援するシステム開発チームです。
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
            <CTAButton href="#contact">無料で相談する</CTAButton>
            <CTAButton href="#works" variant="ghost">
              開発実績を見る
            </CTAButton>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.k}
                variants={fadeUp}
                custom={i}
                className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="text-xl font-semibold tracking-tight md:text-2xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-[color:oklch(0.78_0.03_250)]">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/** Slow-drifting light particles. */
function Particles() {
  const dots = Array.from({ length: 32 }, (_, i) => {
    const seed = i * 137.508;
    return {
      left: (seed * 3.1) % 100,
      top: (seed * 7.3) % 100,
      size: 1 + ((i * 13) % 3),
      duration: 8 + ((i * 5) % 10),
      delay: (i * 0.4) % 6,
      opacity: 0.15 + ((i * 7) % 40) / 200,
    };
  });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[oklch(0.9_0.08_250)]"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            boxShadow: `0 0 ${4 + d.size * 2}px oklch(0.75 0.16 250 / 0.6)`,
            animation: `particle-drift ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/** Slow horizontal flowing lines suggesting data connections. */
function FlowingLines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      preserveAspectRatio="none"
      viewBox="0 0 1200 800"
    >
      <defs>
        <linearGradient id="fline" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.16 255 / 0)" />
          <stop offset="50%" stopColor="oklch(0.85 0.12 250 / 0.7)" />
          <stop offset="100%" stopColor="oklch(0.55 0.16 255 / 0)" />
        </linearGradient>
      </defs>
      {[180, 320, 480, 620, 740].map((y, i) => (
        <path
          key={i}
          d={`M0 ${y} C 300 ${y - 40}, 900 ${y + 40}, 1200 ${y}`}
          stroke="url(#fline)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 10"
          style={{
            animation: `dash-flow ${18 + i * 3}s linear infinite`,
          }}
        />
      ))}
    </svg>
  );
}

function NetworkGraphic() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 500"
      className="pointer-events-none absolute -right-24 top-10 hidden h-[520px] w-[620px] opacity-60 md:block"
    >
      <defs>
        <radialGradient id="node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.75 0.16 250)" />
          <stop offset="100%" stopColor="oklch(0.4 0.14 255 / 0)" />
        </radialGradient>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.75 0.16 250 / 0.6)" />
          <stop offset="100%" stopColor="oklch(0.55 0.14 255 / 0)" />
        </linearGradient>
      </defs>
      {[
        [80, 120, 300, 200],
        [300, 200, 500, 90],
        [300, 200, 480, 320],
        [300, 200, 180, 360],
        [180, 360, 420, 430],
        [500, 90, 480, 320],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="url(#line)"
          strokeWidth="1"
        />
      ))}
      {[
        [80, 120, 6],
        [300, 200, 10],
        [500, 90, 5],
        [480, 320, 7],
        [180, 360, 6],
        [420, 430, 5],
      ].map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r * 3} fill="url(#node)">
            <animate
              attributeName="r"
              values={`${r * 3};${r * 4};${r * 3}`}
              dur={`${4 + i}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={cx} cy={cy} r={r} fill="oklch(0.85 0.1 250)" />
        </g>
      ))}
    </svg>
  );
}
