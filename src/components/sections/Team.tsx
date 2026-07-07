import { Section } from "@/components/site/Section";

export function Team() {
  return (
    <Section
      id="team"
      tone="muted"
      watermark="TEAM"
      eyebrow="Team"
      title="チーム紹介"
      description="案件ごとに最適な専門メンバーで編成する、少数精鋭の開発チームです。"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {/* PM card */}
        <div className="md:col-span-1">
          <div
            aria-label="PM 写真プレースホルダー"
            className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border"
            style={{ background: "var(--gradient-panel)" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-primary-foreground/70">
              <span className="text-xs tracking-[0.2em]">PM PHOTO</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-blue)]">
            Project Manager
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            30年のIT経験を持つPM
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            要件整理・設計・品質管理を担当。曖昧な相談段階からお客様の業務を深く理解し、
            実現可能な形へと落とし込みます。案件内容に応じて、Webエンジニア、アプリエンジニア、
            UI/UXデザイナーと連携して開発を進めます。
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { label: "要件整理・PM", detail: "業務理解 / 要件定義" },
              { label: "Webエンジニア", detail: "業務システム / API" },
              { label: "アプリエンジニア", detail: "iOS / Android / Web" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg border border-border bg-card p-4">
                <p className="text-sm font-medium">{m.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{m.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            ※ 今後、他メンバーの写真・担当領域・キャリアを順次掲載予定です。
          </p>
        </div>
      </div>
    </Section>
  );
}
