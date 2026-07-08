import { Section } from "@/components/site/Section";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";

const mainStack = [
  { name: "TypeScript / JavaScript", years: "約7年", level: "設計・開発" },
  { name: "Python / FastAPI", years: "約7年", level: "設計・開発" },
  { name: "Next.js / React", years: "約5年", level: "設計・開発" },
  { name: "Node.js / NestJS", years: "約6年", level: "設計・開発" },
  { name: "Flutter", years: "約6年", level: "設計・開発" },
  { name: "生成AI・LLM（OpenAI）", years: "約6年", level: "設計・活用" },
  { name: "AWS / Firebase", years: "約6年", level: "構築・運用" },
  { name: "PostgreSQL / MySQL", years: "約6年", level: "構築・運用" },
];

const moreGroups = [
  { label: "言語", items: ["Java", "C#", "VB.NET", "PHP", "Dart", "C / C++", "COBOL", "SQL"] },
  { label: "FW・基盤", items: ["Express", "GAS", "LINE / Lステップ", "Git / GitHub"] },
  { label: "DB", items: ["Oracle", "SQL Server", "SQLite"] },
];

export function TeamSkills() {
  return (
    <Section
      id="skills"
      tone="muted"
      watermark="SKILL"
      eyebrow="Skill"
      title="スキル・技術スタック"
      description="レガシーからモダンまで幅広く対応。主要スタックは自ら設計・実装できる領域です。"
    >
      <div className="mx-auto max-w-5xl">
        {/* main stack — level + years */}
        <RevealGroup className="grid gap-3 sm:grid-cols-2">
          {mainStack.map((s) => (
            <RevealItem
              key={s.name}
              className="flex items-center justify-between gap-4 rounded-xl border border-[var(--brand)]/12 bg-white p-4 shadow-[0_2px_14px_-8px_oklch(0.3_0.09_260/0.15)]"
            >
              <div className="min-w-0">
                <p className="truncate font-bold text-[var(--brand-ink)]">
                  {s.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{s.years}</p>
              </div>
              <span className="inline-flex flex-none items-center rounded-full bg-[var(--brand-tint)] px-3 py-1 text-xs font-semibold text-[var(--brand)]">
                {s.level}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* breadth — category tags */}
        <div className="mt-10">
          <p className="text-sm font-semibold text-[var(--brand-ink)]">
            その他の対応技術
          </p>
          <div className="mt-4 space-y-3">
            {moreGroups.map((g) => (
              <div
                key={g.label}
                className="flex flex-col gap-2 sm:flex-row sm:items-start"
              >
                <span className="w-24 flex-none pt-1 text-xs font-semibold tracking-wide text-[var(--brand)]">
                  {g.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border border-[var(--brand)]/15 bg-white px-2.5 py-1 text-[0.72rem] font-medium text-[var(--brand-ink)]/75"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* certifications */}
        <div className="mt-8 rounded-2xl border border-[var(--brand)]/12 bg-white p-5">
          <p className="text-xs font-semibold tracking-[0.14em] text-[var(--brand)]">
            保有資格
          </p>
          <p className="mt-2 text-sm text-[var(--brand-ink)]/80">
            応用情報技術者　／　基本情報技術者　／　ORACLE MASTER Silver
          </p>
        </div>
      </div>
    </Section>
  );
}
