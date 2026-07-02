import { Section } from "@/components/site/Section";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";

const voices = [
  {
    quote:
      "要件が曖昧な段階から業務を整理していただき、現場で使いやすい形に落とし込んでもらえました。",
    author: "製造業 / 業務改善ご担当者様",
  },
  {
    quote:
      "AI連携や自動化の使いどころを具体的に提案していただき、PoCから本番化まで安心して進められました。",
    author: "SaaS事業会社 / プロダクト責任者様",
  },
  {
    quote:
      "古い管理システムの改修を、業務を止めずに段階的に進めていただき助かりました。",
    author: "卸売業 / 情報システム部門様",
  },
];

export function Voices() {
  return (
    <Section
      id="voices"
      eyebrow="Client Voices"
      title="お客様の声"
      description="業務改善・新規開発の両面で、伴走型の支援にご評価をいただいています。"
    >
      <RevealGroup className="grid gap-6 md:grid-cols-3">
        {voices.map((v) => (
          <RevealItem
            key={v.author}
            as="figure"
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent-blue)]/40 hover:shadow-[var(--shadow-elegant)]"
          >
            <svg
              aria-hidden
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="mb-4 text-[var(--accent-blue)]"
            >
              <path
                d="M7 7h4v4H7c0 3 1 4 3 5v2c-4-1-6-3-6-7V7zm10 0h4v4h-4c0 3 1 4 3 5v2c-4-1-6-3-6-7V7z"
                fill="currentColor"
              />
            </svg>
            <blockquote className="text-sm leading-relaxed text-foreground md:text-[0.95rem]">
              「{v.quote}」
            </blockquote>
            <figcaption className="mt-6 text-xs text-muted-foreground">
              — {v.author}
            </figcaption>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
