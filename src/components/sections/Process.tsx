import { Section } from "@/components/site/Section";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";

const steps = [
  { n: "01", label: "相談", desc: "業務課題・実現したいことをお聞かせください。" },
  { n: "02", label: "業務整理", desc: "現状フローと課題を整理し、論点を可視化。" },
  { n: "03", label: "要件定義", desc: "実現方法・スコープ・優先順位を決定。" },
  { n: "04", label: "設計・開発", desc: "UI / データ / API を設計し実装。" },
  { n: "05", label: "テスト・納品", desc: "検証と受け入れテストを経て納品。" },
  { n: "06", label: "運用改善", desc: "運用データを見ながら継続的に改善。" },
];

export function Process() {
  return (
    <Section
      id="process"
      tone="dark"
      watermark="PROCESS"
      eyebrow="Process"
      title="開発の進め方"
      description="曖昧な相談から運用改善まで、一貫した流れでご支援します。"
    >
      <div className="relative">
        {/* connecting shimmer line (desktop) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 lg:block"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, oklch(0.7 0.14 250 / 0.5) 20%, oklch(0.85 0.12 250 / 0.9) 50%, oklch(0.7 0.14 250 / 0.5) 80%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "line-shimmer 6s ease-in-out infinite",
          }}
        />

        <RevealGroup
          as="ol"
          stagger={0.12}
          className="relative grid gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {steps.map((s, i) => (
            <RevealItem
              key={s.n}
              as="li"
              className="group relative rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
            >
              <div className="text-[10px] font-medium tracking-[0.24em] text-[color:oklch(0.78_0.08_250)]">
                STEP {s.n}
              </div>
              <div className="mt-3 text-base font-semibold tracking-tight text-primary-foreground">
                {s.label}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[color:oklch(0.82_0.02_250)]">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-[color:oklch(0.85_0.1_250)] lg:block"
                >
                  →
                </span>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
