import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";

const items = [
  {
    label: "Mission",
    title: (
      <>
        業務を理解し、現場で
        <br className="hidden sm:block" />
        使われ続けるシステムをつくる。
      </>
    ),
    body: "使う人の業務を深く理解し、定着して成果につながるシステムを届けます。",
  },
  {
    label: "Vision",
    title: (
      <>
        つくって終わらせない開発で、
        <br className="hidden sm:block" />
        企業の“やりたい”を実現し続ける。
      </>
    ),
    body: "運用・改善を重ね、事業の成長に伴走し続けるパートナーを目指します。",
  },
];

export function TeamMissionVision() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.66fr] lg:gap-16">
          <RevealGroup className="space-y-10 md:space-y-12">
            {items.map((it) => (
              <RevealItem key={it.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
                  {it.label}
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-snug tracking-tight text-[var(--brand-ink)] md:text-[2rem]">
                  {it.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {it.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* decorative brand panel with the RuxelTech symbol silhouette */}
          <Reveal
            delay={0.1}
            className="relative hidden aspect-square w-full overflow-hidden rounded-3xl bg-[image:var(--gradient-brand)] shadow-[0_30px_70px_-30px_oklch(0.3_0.09_260/0.45)] lg:block"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-[20%] bg-white/25"
              style={{
                WebkitMaskImage: "url(/images/logo/ruxeltech-symbol.png)",
                maskImage: "url(/images/logo/ruxeltech-symbol.png)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
