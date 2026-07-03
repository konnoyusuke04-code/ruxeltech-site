import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Primary CTA anchor with a subtle animated light-sweep gradient.
 * Uses only Tailwind + keyframes declared in styles.css (`cta-sheen`).
 * Pill-shaped for a premium BtoB feel; the primary variant carries a
 * gently nudging arrow on hover.
 */
export function CTAButton({
  children,
  className,
  variant = "primary",
  ...rest
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (variant === "ghost") {
    return (
      <a
        {...rest}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-sm font-medium text-primary-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.12]",
          className,
        )}
      >
        <span className="relative">{children}</span>
        <ArrowRight className="h-4 w-4 -translate-x-0.5 opacity-70 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </a>
    );
  }
  return (
    <a
      {...rest}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground ring-1 ring-inset ring-white/15 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_60px_-18px_oklch(0.55_0.16_255/0.6)]",
        className,
      )}
      style={{ backgroundImage: "var(--gradient-accent)" }}
    >
      {/* soft ambient glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, oklch(1 0 0 / 0.28), transparent 60%)",
        }}
      />
      {/* moving sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-y-1 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/25 blur-md animate-[cta-sheen_3.6s_ease-in-out_infinite]"
      />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-[arrow-nudge_0.9s_ease-in-out_infinite]" />
    </a>
  );
}
