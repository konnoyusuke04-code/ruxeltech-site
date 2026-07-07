/** Page header band for the Team page — dark brand gradient with a faint TEAM
 *  watermark, matching the site's watermark-header language. */
export function TeamBanner() {
  return (
    <section
      className="relative overflow-hidden text-primary-foreground"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      {/* faint blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 30%, transparent 78%)",
        }}
      />
      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, oklch(0.55 0.16 255 / 0.35), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[4.5rem] font-black uppercase leading-none tracking-[0.14em] text-white/[0.05] md:text-[9rem]"
        >
          TEAM
        </span>
        <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-[color:oklch(0.8_0.06_250)]">
          Team
        </p>
        <h1 className="relative mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          チーム紹介
        </h1>
        <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[color:oklch(0.86_0.02_250)] md:text-base">
          業務理解から実装・運用まで、少数精鋭で一貫して担う開発チームです。
        </p>
      </div>
    </section>
  );
}
