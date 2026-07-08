/**
 * Page header band for the Team page.
 *
 * Background = a Tokyo night-skyline photo held behind a deep-navy overlay, so
 * the photo supports the mood without overpowering the title. The photo is a
 * CSS background LAYER (not an <img>), so until the file exists at the fixed
 * path below, the brand navy gradient simply shows through — no broken image.
 * Drop the image at the path and it appears; no other change needed.
 *
 * Expected asset: 2400×900 (~8:3), dark blue-toned Tokyo night skyline.
 */
const BANNER_IMAGE = "/images/team/team-banner-tokyo-night-blue.png";

export function TeamBanner() {
  return (
    <section
      className="relative flex min-h-[200px] items-center overflow-hidden text-primary-foreground md:min-h-[253px]"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      {/* Tokyo night skyline, full-bleed cover. Slightly dimmed so it never
          competes with the copy. Missing file -> brand gradient shows through. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BANNER_IMAGE})`,
          filter: "brightness(0.9) saturate(1.05)",
        }}
      />
      {/* Deep-navy overlay — subdues the photo and guarantees text contrast.
          ~0.60–0.76 alpha (a touch deeper top & bottom for readability). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,18,45,0.72) 0%, rgba(4,18,45,0.60) 48%, rgba(6,20,48,0.76) 100%)",
        }}
      />
      {/* faint blueprint grid (brand texture, kept subtle over the photo) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 30%, transparent 78%)",
        }}
      />
      {/* soft glow from the base */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, oklch(0.55 0.16 255 / 0.35), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-10 text-center md:py-14">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[4.5rem] font-black uppercase leading-none tracking-[0.14em] text-white/[0.06] md:text-[9rem]"
        >
          TEAM
        </span>
        <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-[color:oklch(0.82_0.07_250)] [text-shadow:0_1px_10px_rgba(2,10,30,0.5)]">
          Team
        </p>
        <h1 className="relative mt-3 text-3xl font-bold tracking-tight md:text-5xl [text-shadow:0_2px_18px_rgba(2,10,30,0.55)]">
          チーム紹介
        </h1>
        <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[color:oklch(0.9_0.02_250)] md:text-base [text-shadow:0_1px_12px_rgba(2,10,30,0.5)]">
          業務理解から実装・運用まで、少数精鋭で一貫して担う開発チームです。
        </p>
      </div>
    </section>
  );
}
