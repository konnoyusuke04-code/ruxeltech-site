import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

/** Representative photo slot. Shows the image once it loads; otherwise a minimal
 *  placeholder. Drop the file at the path and it appears — no code change. */
function RepPhoto() {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);
  const src = "/images/team/takeda-kenji.png";
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-[var(--brand)]/12 bg-[linear-gradient(160deg,#eef3fb_0%,#dfe8f6_100%)] shadow-[0_24px_60px_-30px_oklch(0.3_0.09_260/0.35)] lg:mx-0">
      {!loaded && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center text-[0.7rem] leading-relaxed text-[var(--brand-ink)]/25">
          代表写真
          <br />
          takeda-kenji.png
        </span>
      )}
      <img
        ref={ref}
        src={src}
        alt="RuxelTech 代表 武田健治"
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

const facts = [
  { k: "SE歴", v: "約30年" },
  { k: "資格", v: "応用情報技術者 / ORACLE MASTER Silver" },
  { k: "対応範囲", v: "要件定義 〜 設計・開発・運用改善" },
];

const timeline = [
  {
    period: "1995 – 2006",
    org: "両備システムズ",
    desc: "自治体（住民記録・税・福祉）・医療の業務システム開発。要件定義から運用保守まで一貫担当し、リーダーも務める。",
  },
  {
    period: "2006 – 2013",
    org: "システムズナカシマ",
    desc: "建築設備CAD（自社ANDESシリーズ）・製造/建設業向け業務システムの開発・カスタマイズ・導入。",
  },
  {
    period: "2013 – 2019",
    org: "トスコ",
    desc: "上下水道・鉄道の監視制御システム（SCADA）。0.5秒周期のリアルタイム・高可用性案件をプロジェクトリーダーとして牽引。",
  },
  {
    period: "2019 – 現在",
    org: "独立（フリーランス）",
    desc: "AI・クラウド・モバイルの受託開発。要件定義から運用改善まで一貫して支援。",
  },
];

const projects = [
  {
    title: "DB連携型 AIエージェント基盤",
    desc: "生成AIと業務DBを安全に連携。Text to SQL・複数DB連携・MCP連携・権限管理・監査ログを設計。",
  },
  {
    title: "人材派遣向け AI業務自動化SaaS",
    desc: "面談音声の書き起こし・候補者要約・スキルシート自動生成・求人マッチングを自動化。",
  },
  {
    title: "再生医療ラボ向け 細胞培養管理SaaS",
    desc: "約90画面・110データモデルの大規模SaaS。実験管理・在庫トレーサビリティ・監査ログを統合。",
  },
  {
    title: "LINE × Lステップ 買取・販売一元管理",
    desc: "問い合わせ初動を自動化し、対応工数 約70%削減・成約率 15〜20%向上を実現。",
  },
];

export function Representative() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fd_100%)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* ---- identity hero ---- */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              Representative
            </p>
            <p className="mt-4 text-sm font-medium text-[var(--brand-ink)]/70">
              代表 ／ 業務システム・AI連携開発 担当
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[var(--brand-ink)] md:text-[2.6rem]">
              武田 健治
              <span className="ml-3 align-middle text-sm font-medium text-muted-foreground">
                Takeda Kenji
              </span>
            </h2>
            <p className="mt-5 rounded-2xl border border-[var(--brand)]/12 bg-[var(--brand-tint)]/50 p-5 text-sm font-medium leading-relaxed text-[var(--brand-ink)] md:text-[0.95rem]">
              ご相談から要件定義・設計・開発・運用改善まで、
              <span className="text-[var(--brand)]">業務システムとAI連携開発は代表の武田が自ら手を動かして担当</span>
              します。要件だけをお預かりして外注する体制ではありません。
            </p>
            <dl className="mt-6 space-y-3">
              {facts.map((f) => (
                <div key={f.k} className="flex gap-4 text-sm">
                  <dt className="w-20 flex-none font-semibold text-[var(--brand)]">
                    {f.k}
                  </dt>
                  <dd className="text-[var(--brand-ink)]/80">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1}>
            <RepPhoto />
          </Reveal>
        </div>

        {/* ---- message ---- */}
        <Reveal className="mx-auto mt-16 max-w-3xl md:mt-20">
          <div className="space-y-5 text-[0.95rem] leading-relaxed text-[var(--brand-ink)]/85">
            <p>
              1995年から約30年間、自治体・医療・製造・社会インフラといった幅広い業界で、業務システムから監視制御システムまで、要件定義から運用保守までを一貫して担当してきました。5〜30名規模のプロジェクトでリーダー／PMも数多く務めています。
            </p>
            <p>
              2019年に独立してからは、生成AIを活用したエンタープライズ向けAIエージェント基盤や、再生医療ラボ向けの大規模SaaS（約90画面）、AI業務自動化SaaS、Flutterアプリ、LINE／Lステップなどを、Next.js・Node.js・Python・AWS・生成AIといった最新スタックで開発しています。
            </p>
            <p>
              RuxelTechでは、業務システムとAI連携開発を私自身が直接担当します。ご相談の窓口から実装まで一貫して私が向き合うことで、認識のズレを抑え、スピードと品質を両立させます。「作って終わりではなく、運用・改善を重ねながら事業とともに成長させる」——それが私の開発の信条です。
            </p>
          </div>
          <p className="mt-6 text-right text-sm text-muted-foreground">
            RuxelTech 代表　武田 健治
          </p>
        </Reveal>

        {/* ---- career timeline ---- */}
        <div className="mx-auto mt-16 max-w-3xl md:mt-20">
          <h3 className="text-lg font-bold tracking-tight text-[var(--brand-ink)] md:text-xl">
            経歴
          </h3>
          <RevealGroup className="mt-6 space-y-0">
            {timeline.map((t) => (
              <RevealItem
                key={t.period}
                className="relative border-l-2 border-[var(--brand)]/15 pb-8 pl-6 last:pb-0"
              >
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-[var(--brand)] bg-white" />
                <p className="text-xs font-semibold tracking-wide text-[var(--brand)]">
                  {t.period}
                </p>
                <p className="mt-1 font-bold text-[var(--brand-ink)]">{t.org}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* ---- representative projects ---- */}
        <div className="mx-auto mt-16 max-w-4xl md:mt-20">
          <h3 className="text-lg font-bold tracking-tight text-[var(--brand-ink)] md:text-xl">
            代表的な実績（独立後）
          </h3>
          <RevealGroup className="mt-6 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <RevealItem
                key={p.title}
                className="rounded-2xl border border-[var(--brand)]/12 bg-white p-5 shadow-[0_2px_14px_-8px_oklch(0.3_0.09_260/0.15)]"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-none text-[var(--brand)]"
                    strokeWidth={2.4}
                  />
                  <div>
                    <p className="font-bold leading-snug text-[var(--brand-ink)]">
                      {p.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
