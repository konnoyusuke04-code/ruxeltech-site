"use client";

import type { ReactNode, SyntheticEvent } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { BrandButton } from "@/components/site/BrandButton";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease } },
};

const badges = [
  {
    src: "/images/badge/badge-30years-pm.png",
    alt: "30年のIT経験・PM直轄でプロジェクト推進",
  },
  {
    src: "/images/badge/badge-ai-integration.png",
    alt: "生成AI・業務活用のAI連携（設計・実装対応）",
  },
  {
    src: "/images/badge/badge-operation-support.png",
    alt: "運用改善まで支援（現場に寄り添い成果につなげる）",
  },
];

/** Marker-highlight for keywords (light brand-blue underline wash, no orange). */
function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="px-0.5 font-bold text-[var(--brand-ink)] [background:linear-gradient(transparent_55%,oklch(0.8_0.1_250/0.4)_0)]">
      {children}
    </span>
  );
}

/**
 * Use the lightweight PNG (~15KB) as the primary source and fall back to the
 * SVG only if the PNG is ever missing. The provided SVGs embed a full-res
 * raster (~940KB each), so the PNG is visually identical but far lighter.
 */
function pngToSvg(e: SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  if (img.dataset.fallback) return;
  img.dataset.fallback = "1";
  img.src = img.src.replace(/\.png(\?.*)?$/, ".svg");
}

export function Hero() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const personRaw = useTransform(scrollY, [0, 600], [0, -26]);
  const symbolRaw = useTransform(scrollY, [0, 600], [0, 46]);
  const personY = prefersReduced ? 0 : personRaw;
  const symbolY = prefersReduced ? 0 : symbolRaw;

  return (
    <section
      id="top"
      className="relative isolate overflow-x-hidden"
      style={{ background: "var(--hero-surface)" }}
    >
      {/* ===== Hero visual area (clips the person / watermark bleed) ===== */}
      <div className="relative overflow-hidden">
        {/* faint blueprint grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.45 0.16 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(0.45 0.16 255 / 0.05) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(ellipse at 65% 40%, black 30%, transparent 78%)",
          }}
        />
        {/* soft brand glow behind the person */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-[-10%] h-[70%] w-[60%] rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--brand-tint), transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-12 pt-16 md:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-6 lg:pb-14 lg:pt-16">
          {/* ---------- LEFT: copy ---------- */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="relative z-10 max-w-xl min-w-0"
          >
            {/* speech-bubble label (navy pill with a downward tail) */}
            <motion.div
              variants={fadeUp}
              className="relative mb-7 inline-flex items-center gap-2 rounded-full bg-[var(--brand-ink)] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_12px_28px_-14px_oklch(0.3_0.09_260/0.6)] md:text-[0.82rem]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-bright)]" />
              業務システム・AI連携にお悩みの企業様へ
              <span
                aria-hidden
                className="absolute -bottom-1.5 left-9 h-3.5 w-3.5 rotate-45 rounded-[2px] bg-[var(--brand-ink)]"
              />
            </motion.div>

            {/* main copy */}
            <motion.h1
              variants={fadeUp}
              className="text-[1.9rem] font-bold leading-[1.2] tracking-tight text-[var(--brand-ink)] sm:text-4xl md:text-[2.9rem] lg:text-5xl"
            >
              業務を理解し、
              <br className="hidden sm:block" />
              <span className="text-[var(--brand)]">使われ続ける</span>
              <span className="whitespace-nowrap">
                <span className="text-[var(--brand)]">システム</span>をつくる。
              </span>
            </motion.h1>

            {/* emphasis copy — check-circle bullets with highlighted keywords.
                Icon is absolutely positioned so the text is a normal block that
                wraps reliably on narrow screens (avoids flex min-width quirks). */}
            <motion.ul variants={fadeUp} className="mt-6 space-y-3">
              <li className="relative pl-7">
                <CheckCircle2
                  className="absolute left-0 top-[3px] h-5 w-5 text-[var(--brand)]"
                  strokeWidth={2.5}
                />
                <p className="text-[0.95rem] font-medium leading-relaxed text-[var(--brand-ink)] md:text-base">
                  <Mark>30年PM直轄</Mark>で、要件整理から設計・開発まで
                  <Mark>一括支援</Mark>
                </p>
              </li>
              <li className="relative pl-7">
                <CheckCircle2
                  className="absolute left-0 top-[3px] h-5 w-5 text-[var(--brand)]"
                  strokeWidth={2.5}
                />
                <p className="text-[0.95rem] font-medium leading-relaxed text-[var(--brand-ink)] md:text-base">
                  AI連携・業務システム・自動化を<Mark>現場で使える仕組み</Mark>へ
                </p>
              </li>
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <BrandButton href="#contact">無料で相談する</BrandButton>
              <BrandButton href="#works" variant="outline">
                開発実績を見る
              </BrandButton>
            </motion.div>

            {/* trust badges — finished badge images (object-contain, transparent) */}
            <motion.ul
              variants={fadeIn}
              className="mt-6 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-7 sm:gap-4 sm:overflow-visible sm:pb-0"
            >
              {badges.map((b) => (
                <motion.li key={b.src} variants={fadeUp} className="flex-none">
                  <img
                    src={b.src}
                    alt={b.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-24 w-auto object-contain drop-shadow-[0_6px_12px_oklch(0.3_0.09_260/0.1)] sm:h-28 lg:h-32"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ---------- RIGHT: person + diagonal symbol motif ---------- */}
          {/* Adjust person size/position with the `h-*`, `right-*` utilities;
              adjust the background motif with `w-*`, `-right-*`, `rotate`. */}
          <div className="relative min-h-[340px] sm:min-h-[400px] lg:min-h-[500px]">
            {/* soft background panel for depth */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-[-6%] top-[4%] h-[88%] w-[94%] rounded-[46%_54%_48%_52%/56%_44%_56%_44%] bg-[linear-gradient(145deg,#eef3fb_0%,#e2ebf7_100%)]"
            />
            {/* giant brand symbol as a diagonal background motif (pale blue-grey) */}
            <motion.img
              aria-hidden
              src="/images/logo/ruxeltech-symbol.png"
              onError={pngToSvg}
              style={{
                y: symbolY,
                rotate: -12,
                filter: "saturate(0.4) brightness(1.22)",
              }}
              className="pointer-events-none absolute -top-[8%] -right-[16%] w-[150%] max-w-none opacity-[0.08] lg:-right-[14%] lg:w-[128%]"
            />

            {/* person cutout (transparent) */}
            <motion.img
              src="/images/hero/hero-person-transparent.png"
              alt="RuxelTechのシステム開発を案内するビジネスパーソン"
              fetchPriority="high"
              decoding="async"
              style={{ y: personY }}
              className="absolute bottom-0 right-0 h-[340px] w-auto drop-shadow-[0_34px_55px_oklch(0.24_0.07_260/0.2)] sm:h-[400px] lg:right-2 lg:h-[520px]"
            />

            {/* circular stat badge (speech bubble) near the person */}
            <div className="absolute left-0 top-6 z-10 flex h-[5.6rem] w-[5.6rem] flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_16px_38px_-14px_oklch(0.3_0.09_260/0.55)] ring-1 ring-[var(--brand)]/15 sm:top-2 lg:left-4 lg:h-[6.6rem] lg:w-[6.6rem]">
              <span
                aria-hidden
                className="absolute inset-1.5 rounded-full border border-dashed border-[var(--brand)]/25"
              />
              <span className="relative text-[0.58rem] font-semibold text-[var(--brand-ink)] lg:text-[0.64rem]">
                IT経験
              </span>
              <span className="relative flex items-end font-bold leading-none text-[var(--brand)]">
                <span className="text-[1.5rem] lg:text-[1.8rem]">30</span>
                <span className="mb-0.5 text-[0.85rem] lg:text-[0.95rem]">年</span>
              </span>
              <span className="relative text-[0.56rem] font-semibold text-[var(--brand-ink)] lg:text-[0.62rem]">
                PM直轄
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 right-7 h-3.5 w-3.5 rotate-45 rounded-[2px] bg-white shadow-[3px_3px_6px_-3px_oklch(0.3_0.09_260/0.4)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom CTA box (overlaps hero bottom into the next section) ===== */}
      <div className="relative z-20 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="-mt-6 -mb-12 flex flex-col items-center gap-5 rounded-3xl border border-[var(--brand)]/10 bg-white p-6 text-center shadow-[0_30px_70px_-30px_oklch(0.24_0.07_260/0.4)] md:flex-row md:justify-between md:gap-8 md:p-7 md:text-left lg:-mt-12 lg:-mb-20"
        >
          <div>
            <p className="text-lg font-bold tracking-tight text-[var(--brand-ink)] md:text-xl">
              まずは業務課題の整理からご相談ください
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              要件が固まっていない段階でも、現状の課題からご一緒に整理します。
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:w-auto md:flex-none">
            <BrandButton href="#contact" className="justify-center">
              無料で相談する
            </BrandButton>
            <BrandButton
              href="#works"
              variant="outline"
              className="justify-center"
            >
              開発実績を見る
            </BrandButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
