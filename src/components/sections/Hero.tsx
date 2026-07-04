"use client";

import type { ReactNode } from "react";
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
      className="relative z-10"
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
        {/* brand symbol as ONE flat light-grey background shape — the logo mark
            is used as a mask over a pale blue-grey fill, angled and bleeding off
            the right / top / bottom edges (no enclosing circle). */}
        <motion.div
          aria-hidden
          style={{
            y: symbolY,
            rotate: -12,
            WebkitMaskImage: "url(/images/logo/ruxeltech-symbol.png)",
            maskImage: "url(/images/logo/ruxeltech-symbol.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
          className="pointer-events-none absolute -right-[6%] top-[-24%] h-[150%] w-[62%] bg-[linear-gradient(150deg,#eaeff8_0%,#d6e0f1_100%)] md:w-[52%] lg:-right-[4%] lg:w-[46%]"
        />
        {/* small accent dots */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden md:block"
        >
          <span className="absolute right-[9%] top-[15%] h-3 w-3 rounded-full bg-[var(--brand)]/20" />
          <span className="absolute right-[40%] top-[9%] h-2 w-2 rounded-full bg-[var(--brand)]/15" />
          <span className="absolute right-[7%] bottom-[16%] h-2.5 w-2.5 rounded-full bg-[var(--brand)]/15" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-10 pt-12 md:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-2 lg:pb-10 lg:pt-10">
          {/* ---------- LEFT: copy ---------- */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="relative z-10 max-w-2xl min-w-0"
          >
            {/* speech-bubble label (navy pill with a downward tail) */}
            <motion.div
              variants={fadeUp}
              className="relative mb-6 inline-flex items-center gap-3 rounded-full bg-[var(--brand-ink)] px-9 py-4 text-base font-semibold text-white shadow-[0_16px_32px_-14px_oklch(0.3_0.09_260/0.6)] md:text-2xl"
            >
              業務システム・AI連携にお悩みの企業様へ
              <span
                aria-hidden
                className="absolute -bottom-2 left-12 h-6 w-6 rotate-45 rounded-[3px] bg-[var(--brand-ink)]"
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
            <motion.ul variants={fadeUp} className="mt-7 space-y-4">
              <li className="relative pl-8">
                <CheckCircle2
                  className="absolute left-0 top-[3px] h-6 w-6 text-[var(--brand)]"
                  strokeWidth={2.5}
                />
                <p className="text-base font-medium leading-relaxed text-[var(--brand-ink)] md:text-lg">
                  <Mark>30年PM直轄</Mark>で、要件整理から設計・開発まで
                  <Mark>一括支援</Mark>
                </p>
              </li>
              <li className="relative pl-8">
                <CheckCircle2
                  className="absolute left-0 top-[3px] h-6 w-6 text-[var(--brand)]"
                  strokeWidth={2.5}
                />
                <p className="text-base font-medium leading-relaxed text-[var(--brand-ink)] md:text-lg">
                  AI連携・業務システム・自動化を<Mark>現場で使える仕組み</Mark>へ
                </p>
              </li>
            </motion.ul>

            {/* trust badges — finished badge images, placed right under the copy
                (the single primary CTA lives in the bottom CTA box) */}
            <motion.ul
              variants={fadeIn}
              className="mt-7 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-8 sm:gap-4 sm:overflow-visible sm:pb-0"
            >
              {badges.map((b) => (
                <motion.li key={b.src} variants={fadeUp} className="flex-none">
                  <img
                    src={b.src}
                    alt={b.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-28 w-auto object-contain drop-shadow-[0_6px_12px_oklch(0.3_0.09_260/0.1)] sm:h-32 lg:h-40"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ---------- RIGHT: person + circular stat badge ---------- */}
          {/* The background symbol shape lives at the visual level above. */}
          <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[430px]">
            {/* person cutout (transparent, upper-body) */}
            <motion.img
              src="/images/hero/top-woman.png"
              alt="RuxelTechのシステム開発をご案内するビジネスパーソン"
              fetchPriority="high"
              decoding="async"
              style={{ y: personY }}
              className="absolute bottom-0 right-0 h-[300px] w-auto drop-shadow-[0_34px_55px_oklch(0.24_0.07_260/0.2)] sm:h-[360px] lg:right-0 lg:h-[450px]"
            />

            {/* floating credential card — presented by the person's open palm.
                Adjust placement/size/tilt with `left-* top-* w-* -rotate-*`. */}
            <img
              src="/images/hero/card.png"
              alt="30年のIT経験。PM直轄で要件整理から品質管理まで対応します。"
              decoding="async"
              className="pointer-events-none absolute left-0 top-4 z-10 w-40 -rotate-3 drop-shadow-[0_24px_45px_oklch(0.3_0.09_260/0.22)] sm:top-2 sm:w-48 lg:top-6 lg:w-60"
            />
          </div>
        </div>
      </div>

      {/* ===== Bottom CTA box (overlaps hero bottom into the next section) ===== */}
      <div className="relative z-20 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="-mt-6 -mb-14 flex flex-col items-center gap-5 rounded-3xl border border-[var(--brand)]/10 bg-white p-6 text-center shadow-[0_30px_70px_-30px_oklch(0.24_0.07_260/0.4)] md:flex-row md:justify-between md:gap-8 md:p-7 md:text-left lg:-mt-10 lg:-mb-24"
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
