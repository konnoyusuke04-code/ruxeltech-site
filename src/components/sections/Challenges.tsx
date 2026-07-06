import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/site/Section";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const challenges = [
  {
    no: "01",
    label: "業務整理",
    title: "Excelや手作業が多く、業務が属人化している",
    desc: "入力・集計・共有が人頼みになり、ミスや引き継ぎ負担が増えている",
    img: "/images/challenges/challenge-01-excel-manual.png",
  },
  {
    no: "02",
    label: "既存改修",
    title: "既存システムが古く、改修しづらい",
    desc: "仕様が整理されておらず、変更や追加開発のたびに時間がかかっている",
    img: "/images/challenges/challenge-02-legacy-system.png",
  },
  {
    no: "03",
    label: "AI導入",
    title: "AIを業務に使いたいが、何から始めるべきか分からない",
    desc: "ChatGPTや生成AIを導入したいが、実務への落とし込み方が見えていない",
    img: "/images/challenges/challenge-03-ai-start.png",
  },
  {
    no: "04",
    label: "UI定着",
    title: "管理画面が使いにくく、現場に定着しない",
    desc: "入力しづらい、探しづらい、分かりにくい画面が業務効率を下げている",
    img: "/images/challenges/challenge-04-ui-adoption.png",
  },
  {
    no: "05",
    label: "PoC検証",
    title: "小さく試してから本格開発したい",
    desc: "いきなり大規模開発ではなく、まずはMVPやPoCで効果を確認したい",
    img: "/images/challenges/challenge-05-poc-mvp.png",
  },
  {
    no: "06",
    label: "要件整理",
    title: "外注先にうまく要件を伝えられるか不安",
    desc: "やりたいことはあるが、仕様・優先順位・開発範囲を整理できていない",
    img: "/images/challenges/challenge-06-requirements.png",
  },
];

/**
 * Image slot for a challenge card. Renders a styled placeholder frame until a
 * real image at `src` finishes loading. The <img> stays transparent
 * (opacity-0) until it has actually loaded, so a missing file never flashes a
 * broken-image icon — drop the PNG/WebP at the path and it appears as-is.
 */
function ChallengeImage({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Handle images already cached/complete before hydration.
    const img = ref.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  const file = src.split("/").pop();

  return (
    // Image area: keeps a fixed 4:3 slot (so the layout never shifts, image or
    // not), but no frame / no fill — it blends into the white card. The image
    // fills ~90% of the slot via object-contain, leaving only a light margin.
    <div className="relative aspect-[4/3] w-full">
      {!loaded && (
        // Minimal, very faint hint while the file is absent. No border, no
        // background, no big padding. Drop the PNG/WebP at the path and it
        // simply appears — no other changes needed.
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-2 text-center text-[0.56rem] text-[var(--brand-ink)]/20">
          {file}
        </span>
      )}
      <img
        ref={ref}
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={cn(
          "absolute inset-0 m-auto h-[90%] w-[90%] object-contain transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

export function Challenges() {
  return (
    <Section
      id="challenges"
      tone="muted"
      eyebrow="Common Challenges"
      title="こんな業務課題はありませんか？"
      description="現場でよく耳にする課題を、業務理解と適切な技術選定で解きほぐします。"
    >
      <RevealGroup className="grid gap-5 lg:grid-cols-2">
        {challenges.map((c) => (
          <RevealItem
            key={c.no}
            className="group h-full rounded-2xl border border-[var(--brand)]/12 bg-white p-5 shadow-[0_2px_14px_-8px_oklch(0.3_0.09_260/0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)]/25 hover:shadow-[0_18px_40px_-20px_oklch(0.3_0.09_260/0.28)] md:p-6"
          >
            <div className="flex h-full flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
              {/* left: number + label, title, description */}
              <div className="lg:w-[58%]">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[var(--brand-tint)] text-[0.8rem] font-bold text-[var(--brand)]">
                    {c.no}
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-[var(--brand)] md:text-[0.8rem]">
                    {c.label}
                  </span>
                </div>
                <h3 className="mt-3 text-[0.98rem] font-bold leading-snug text-[var(--brand-ink)] md:text-[1.05rem]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </div>

              {/* right (desktop) / bottom (mobile): image slot */}
              <div className="mx-auto w-full max-w-[480px] lg:mx-0 lg:w-[42%] lg:max-w-none">
                <ChallengeImage src={c.img} />
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
