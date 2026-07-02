import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Primary CTA anchor with a subtle animated light-sweep gradient.
 * Uses only Tailwind + a keyframe declared in styles.css (`cta-sheen`).
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
          "inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-primary-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10",
          className,
        )}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      {...rest}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-18px_oklch(0.55_0.16_255/0.55)]",
        className,
      )}
      style={{ backgroundImage: "var(--gradient-accent)" }}
    >
      {/* soft ambient glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, oklch(1 0 0 / 0.25), transparent 60%)",
        }}
      />
      {/* moving sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-y-1 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/20 blur-md animate-[cta-sheen_3.6s_ease-in-out_infinite]"
      />
      <span className="relative">{children}</span>
    </a>
  );
}
