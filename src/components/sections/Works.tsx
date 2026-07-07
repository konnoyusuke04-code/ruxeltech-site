import { Section } from "@/components/site/Section";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";
import { AbstractSystemVisual } from "@/components/site/AbstractSystemVisual";

type Variant = "network" | "dashboard" | "grid" | "diagram" | "flow";

const works: {
  category: string;
  title: string;
  desc: string;
  href: string;
  visual: Variant;
  /** Optional looping cover video; falls back to the static visual when unset. */
  video?: string;
}[] = [
  {
    category: "AI Agent",
    title: "AIエージェント / 生成AI連携",
    desc: "業務データを踏まえた対話・自動処理エージェントの構築事例。",
    href: "/works/ai-agent",
    visual: "network",
    video: "/videos/ai-agent.mp4",
  },
  {
    category: "Business System",
    title: "業務システム",
    desc: "受発注・在庫・案件管理など、現場に定着する管理画面の開発。",
    href: "/works/business-system",
    visual: "dashboard",
    video: "/videos/business-system.mp4",
  },
  {
    category: "Mobile App",
    title: "アプリ開発",
    desc: "スマートフォンアプリの企画・設計・実装事例。",
    href: "/works/mobile-app",
    visual: "diagram",
    video: "/videos/mobile-app.mp4",
  },
  {
    category: "Automation",
    title: "Python業務自動化",
    desc: "定型業務・データ処理を自動化して工数を削減した事例。",
    href: "/works/python-automation",
    visual: "grid",
    video: "/videos/automation.mp4",
  },
  {
    category: "LINE / Lステップ",
    title: "LINE / Lステップ活用",
    desc: "LINE公式アカウント連携やLステップを用いた顧客接点の自動化。",
    href: "/works/line-step",
    visual: "flow",
    video: "/videos/line.mp4",
  },
];

export function Works() {
  return (
    <Section
      id="works"
      watermark="WORKS"
      eyebrow="Case Studies"
      title="開発実績"
      description="カテゴリごとに、これまでの支援事例をご覧いただけます。"
    >
      <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {works.map((w) => (
          <RevealItem key={w.href}>
            <a
              href={w.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--accent-blue)]/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
                  {w.video ? (
                    <video
                      src={w.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <AbstractSystemVisual variant={w.visual} />
                  )}
                </div>
                <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-primary-foreground backdrop-blur">
                  {w.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold tracking-tight md:text-lg">
                  {w.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {w.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-blue)]">
                  詳しく見る
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </span>
              </div>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
