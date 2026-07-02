import { Section } from "@/components/site/Section";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";

const services = [
  { name: "AI連携システム", desc: "生成AI・LLMを業務に組み込み、既存フローを高度化。" },
  { name: "業務システム", desc: "基幹・管理系・社内向けWebシステムの設計と開発。" },
  { name: "アプリ開発", desc: "iOS / Android / Web アプリを目的に応じて構築。" },
  { name: "Python業務自動化", desc: "定型業務・データ処理・スクレイピング等を自動化。" },
  { name: "LINE / Lステップ", desc: "顧客接点の自動化とマーケティング施策の実装支援。" },
];

export function Services() {
  return (
    <Section
      id="services"
      tone="muted"
      eyebrow="Services"
      title="支援領域"
      description="業務理解を起点に、必要な技術を横断的に組み合わせてご提案します。"
    >
      <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <RevealItem
            key={s.name}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent-blue)]/50 hover:shadow-[var(--shadow-elegant)]"
          >
            <div>
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[image:var(--gradient-accent)] text-primary-foreground shadow-[0_10px_24px_-10px_oklch(0.55_0.16_255/0.6)] transition-transform duration-500 group-hover:scale-110">
                <IconGrid />
              </div>
              <h3 className="text-base font-semibold tracking-tight md:text-lg">
                {s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

function IconGrid() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
