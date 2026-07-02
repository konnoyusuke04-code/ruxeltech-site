import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "muted" | "dark";
}) {
  const bg =
    tone === "dark"
      ? "bg-[var(--primary-deep)] text-primary-foreground"
      : tone === "muted"
        ? "bg-[var(--surface)]"
        : "bg-background";

  return (
    <section id={id} className={`relative overflow-hidden ${bg} py-24 md:py-32`}>
      {/* subtle grid backdrop for light sections */}
      {tone !== "dark" && (
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
      {tone === "dark" && (
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
        {(eyebrow || title || description) && (
          <Reveal className="mb-16 max-w-2xl">
            {eyebrow && (
              <p
                className={`mb-4 text-xs font-medium uppercase tracking-[0.24em] ${
                  tone === "dark"
                    ? "text-[color:oklch(0.75_0.08_250)]"
                    : "text-[var(--accent-blue)]"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold leading-[1.2] tracking-tight md:text-[2.5rem]">
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-5 text-base leading-relaxed md:text-lg ${
                  tone === "dark"
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
