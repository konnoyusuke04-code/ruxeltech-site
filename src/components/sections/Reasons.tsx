import { Section } from "@/components/site/Section";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";

const reasons = [
  {
    title: "30年のIT経験を持つPMによる要件整理",
    body: "曖昧な相談段階から業務ヒアリングを行い、実現方法と優先順位を整理。要件が固まっていない案件こそ得意領域です。",
  },
  {
    title: "業務システムとAI連携の両方に対応",
    body: "基幹・管理系の業務システムから、生成AIを組み込んだ新しい業務フローまで、一つのチームで一貫して支援します。",
  },
  {
    title: "小さく始めて、育てる開発",
    body: "PoC・MVPで素早く検証し、現場のフィードバックを取り込みながら段階的に本格運用へ育てるアプローチをとります。",
  },
  {
    title: "現場で使いやすいUI/UX設計",
    body: "管理画面や業務ツールこそUIが定着を左右します。日々使う人の負荷を下げる情報設計と画面設計を重視します。",
  },
];

export function Reasons() {
  return (
    <Section
      id="reasons"
      eyebrow="Why RuxelTech"
      title="RuxelTechが選ばれる理由"
      description="つくって終わりではなく、業務に定着し、使われ続けるシステムを目指しています。"
    >
      <RevealGroup className="grid gap-6 md:grid-cols-2">
        {reasons.map((r, i) => (
          <RevealItem
            key={r.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent-blue)]/40 hover:shadow-[var(--shadow-elegant)]"
          >
            {/* subtle corner glow on hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
              style={{ background: "oklch(0.55 0.16 255 / 0.35)" }}
            />
            <div className="relative mb-5 flex items-center gap-3">
              <span className="text-xs font-medium tracking-[0.24em] text-[var(--accent-blue)]">
                0{i + 1}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h3 className="relative text-lg font-semibold tracking-tight md:text-xl">
              {r.title}
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              {r.body}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
