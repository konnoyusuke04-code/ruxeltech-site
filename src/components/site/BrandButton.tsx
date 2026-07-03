import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * CTA button for LIGHT backgrounds (white LP hero + bottom CTA box).
 * - primary : RuxelTech-blue gradient, moving sheen, hover lift + glow
 * - outline : white fill, brand/navy border, hover tint + lift
 * Kept separate from the dark-section `CTAButton` so the navy ContactCTA is untouched.
 *
 * Rounded, generously sized — never a plain template rectangle.
 */
export function BrandButton({
  children,
  className,
  variant = "primary",
  ...rest
}: {
  children: ReactNode;
  variant?: "primary" | "outline";
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (variant === "outline") {
    return (
      <a
        {...rest}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--brand)]/30 bg-white px-7 py-3.5 text-sm font-semibold text-[var(--brand)] shadow-[0_1px_2px_oklch(0.24_0.07_260/0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--brand-tint)] hover:shadow-[0_16px_34px_-18px_oklch(0.45_0.16_255/0.45)] md:text-[0.95rem]",
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
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_oklch(0.45_0.16_255/0.55)] ring-1 ring-inset ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_-14px_oklch(0.45_0.16_255/0.6)] md:text-[0.95rem]",
        className,
      )}
      style={{ backgroundImage: "var(--gradient-brand)" }}
    >
      {/* ambient glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, oklch(1 0 0 / 0.3), transparent 60%)",
        }}
      />
      {/* moving sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-y-1 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/25 blur-md animate-[cta-sheen_3.6s_ease-in-out_infinite]"
      />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
