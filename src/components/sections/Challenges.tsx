import { Section } from "@/components/site/Section";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";

const challenges = [
  "Excelや手作業が多く、業務が属人化している",
  "既存システムが古く、改修しづらい",
  "AIを業務に使いたいが、何から始めるべきか分からない",
  "管理画面が使いにくく、現場に定着しない",
  "小さく試してから本格開発したい",
  "外注先にうまく要件を伝えられるか不安",
];

export function Challenges() {
  return (
    <Section
      id="challenges"
      tone="muted"
      eyebrow="Common Challenges"
      title="こんな業務課題はありませんか？"
      description="現場でよく耳にする課題を、業務理解と適切な技術選定で解きほぐします。"
    >
      <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((c, i) => (
          <RevealItem
            key={c}
            className="group relative rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent-blue)]/50 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-md bg-[var(--accent-blue-soft)] text-sm font-semibold text-[var(--accent-blue)] transition-colors group-hover:bg-[var(--accent-blue)] group-hover:text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-foreground md:text-base">
                {c}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
