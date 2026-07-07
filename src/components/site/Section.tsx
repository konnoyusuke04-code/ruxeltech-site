import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  watermark,
  children,
  tone = "default",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Large faint background word behind the centered header (e.g. "WORKS"). */
  watermark?: string;
  children: ReactNode;
  tone?: "default" | "muted" | "dark";
  /** Extra classes on the <section> (e.g. padding overrides); merged last. */
  className?: string;
}) {
  const isDark = tone === "dark";
  const bg = isDark
    ? "bg-[var(--primary-deep)] text-primary-foreground"
    : tone === "muted"
      ? "bg-[var(--surface)]"
      : "bg-background";

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-24 md:py-32", bg, className)}
    >
      {/* subtle grid backdrop for light sections */}
      {!isDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.14 255 / 0.045) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.14 255 / 0.045) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at 50% 30%, black 20%, transparent 80%)",
          }}
        />
      )}
      {/* subtle top glow for dark sections */}
      {isDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, oklch(0.55 0.16 255 / 0.15), transparent 60%)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ---- centered header with a large faint watermark word ---- */}
        {(watermark || eyebrow || title || description) && (
          <Reveal className="relative mx-auto mb-16 max-w-2xl text-center md:mb-20">
            {watermark && (
              <span
                aria-hidden
                className={`pointer-events-none absolute left-1/2 -top-5 -translate-x-1/2 select-none whitespace-nowrap text-[4.25rem] font-black uppercase leading-none tracking-[0.14em] md:-top-12 md:text-[8.5rem] ${
                  isDark ? "text-white/[0.05]" : "text-[var(--brand)]/[0.06]"
                }`}
              >
                {watermark}
              </span>
            )}
            {eyebrow && (
              <p
                className={`relative text-xs font-semibold uppercase tracking-[0.28em] ${
                  isDark
                    ? "text-[color:oklch(0.78_0.08_250)]"
                    : "text-[var(--brand)]"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`relative mt-3 text-3xl font-bold tracking-tight md:text-[2.5rem] ${
                  isDark ? "text-primary-foreground" : "text-[var(--brand-ink)]"
                }`}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`relative mx-auto mt-4 max-w-xl text-base leading-relaxed ${
                  isDark
                    ? "text-[color:oklch(0.85_0.02_250)]"
                    : "text-muted-foreground"
                }`}
              >
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
