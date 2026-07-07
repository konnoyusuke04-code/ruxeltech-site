import { useEffect, useRef, useState } from "react";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const reasons = [
  {
    no: "01",
    title: "30年のIT経験を持つPMによる要件整理",
    body: "曖昧な相談段階から業務をヒアリングし、実現方法と優先順位を整理。要件が固まっていない案件こそ得意領域です。",
    img: "/images/reasons/reason-01-pm-requirements.png",
  },
  {
    no: "02",
    title: "業務システムとAI連携の両方に対応",
    body: "基幹・管理系の業務システムから、生成AIを組み込んだ新しい業務フローまで、一つのチームで一貫して支援します。",
    img: "/images/reasons/reason-02-ai-system.png",
  },
  {
    no: "03",
    title: "小さく始めて、育てる開発",
    body: "PoC・MVPで素早く検証し、現場のフィードバックを取り込みながら段階的に本格運用へ育てるアプローチをとります。",
    img: "/images/reasons/reason-03-grow-development.png",
  },
  {
    no: "04",
    title: "現場で使いやすいUI/UX設計",
    body: "管理画面や業務ツールこそUIが定着を左右します。日々使う人の負荷を下げる情報設計と画面設計を重視します。",
    img: "/images/reasons/reason-04-uiux-design.png",
  },
];

/**
 * Illustration slot for a reason block. Shows the image once it loads, otherwise
 * a minimal, faint filename hint (no frame / no fill). The <img> stays
 * transparent until it has actually loaded, so a missing file never shows a
 * broken-image icon. Drop the PNG/WebP at the path and it appears — no other
 * changes needed. Keeps a fixed 4:3 slot so the layout never shifts.
 */
function ReasonImage({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);
  const file = src.split("/").pop();
  return (
    <div className="relative aspect-[4/3] w-full">
      {!loaded && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-2 text-center text-[0.62rem] text-[var(--brand-ink)]/20">
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
          "absolute inset-0 h-full w-full object-contain transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

export function Reasons() {
  return (
    <section
      id="reasons"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fc_100%)] py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        {/* ---- centered header with a large faint REASON watermark ---- */}
        <div className="relative mx-auto max-w-2xl text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-5 select-none text-[4.25rem] font-black uppercase leading-none tracking-[0.14em] text-[var(--brand)]/[0.06] md:-top-12 md:text-[8.5rem]"
          >
            REASON
          </span>
          <p className="relative text-xs font-semibold tracking-[0.28em] text-[var(--brand)]">
            WHY RUXELTECH
          </p>
          <h2 className="relative mt-3 text-3xl font-bold tracking-tight text-[var(--brand-ink)] md:text-[2.5rem]">
            RuxelTechが選ばれる理由
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            つくって終わりではなく、業務に定着し、使われ続けるシステムを目指しています。
          </p>
        </div>

        {/* ---- reason blocks: open, whitespace-driven (no strong card frame) ---- */}
        <RevealGroup className="mx-auto mt-16 grid max-w-5xl gap-x-14 gap-y-16 md:mt-20 md:grid-cols-2 md:gap-x-20">
          {reasons.map((r) => (
            <RevealItem key={r.no} className="group">
              {/* large outlined number as a visual accent */}
              <span className="block text-[2.75rem] font-black leading-none tracking-tight text-transparent [-webkit-text-stroke:1.6px_#a6b8d8] md:text-[3.25rem]">
                {r.no}
              </span>
              <h3 className="mt-3 text-lg font-bold leading-snug text-[var(--brand-ink)] md:text-xl">
                {r.title}
              </h3>
              {/* illustration (centre of the block) */}
              <div className="mt-6 w-full">
                <ReasonImage src={r.img} />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                {r.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
