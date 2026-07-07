import {
  Bot,
  Check,
  LayoutDashboard,
  Network,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/site/Reveal";

type Service = {
  name: string;
  desc: string;
  tags: string[];
  checks: string[];
  icon: LucideIcon;
  /** The one flagship service, rendered as the large top card. */
  featured?: boolean;
};

// Add new services here. `featured: true` renders as the big top card; every
// other entry flows into the 2-column grid below (add more and they simply
// continue the grid).
const services: Service[] = [
  {
    name: "Web・業務システム開発",
    desc: "受発注、在庫管理、予約管理、顧客管理、社内管理画面など、現場業務に合わせたWebシステムを設計・開発します。要件整理からDB設計、管理画面、API連携、運用改善まで一括で対応します。",
    tags: ["要件整理", "管理画面", "業務DB", "API連携", "運用改善"],
    checks: [
      "現場業務に合わせた要件整理",
      "管理画面・業務DB・権限設計まで対応",
      "納品後の改善・拡張を見据えた設計",
    ],
    icon: LayoutDashboard,
    featured: true,
  },
  {
    name: "生成AI・AIエージェント連携",
    desc: "ChatGPT APIやLLMを活用し、問い合わせ対応、文章生成、社内ナレッジ検索、業務データ連携などを実務に落とし込みます。",
    tags: ["LLM", "RAG", "AI Agent", "業務DB連携", "自動応答"],
    checks: [
      "業務フローに合わせたAI設計",
      "既存DB/APIとの連携",
      "PoCから本番化まで対応",
    ],
    icon: Bot,
  },
  {
    name: "業務自動化・データ連携",
    desc: "Excel・CSV・Google Sheets・Webデータ・外部APIなどを連携し、定型業務やデータ処理を自動化します。",
    tags: ["Python", "GAS", "CSV", "Sheets", "API", "定期実行"],
    checks: [
      "手作業の集計・転記を自動化",
      "外部サービスやAPIとの連携",
      "定期実行・ログ管理まで対応",
    ],
    icon: Workflow,
  },
  {
    name: "CRM・SaaS連携",
    desc: "Salesforce、kintone、HubSpotなどの業務ツールを既存業務や外部システムと連携し、営業・顧客管理・案件管理を効率化します。",
    tags: ["Salesforce", "kintone", "HubSpot", "CRM", "外部API"],
    checks: [
      "CRM/SaaSの業務フロー整理",
      "外部システム・フォーム・通知との連携",
      "営業・顧客管理・案件管理の効率化",
    ],
    icon: Network,
  },
  {
    name: "アプリ・LINE連携開発",
    desc: "スマホアプリ、LINE公式アカウント、Lステップ、予約導線、通知配信など、顧客接点を広げる仕組みを構築します。",
    tags: ["iOS", "Android", "LINE", "Lステップ", "予約", "通知"],
    checks: [
      "スマホアプリ・顧客向け画面の構築",
      "LINE公式/Lステップを活用した導線設計",
      "予約・通知・顧客管理との連携",
    ],
    icon: Smartphone,
  },
];

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--brand)]/15 bg-[var(--brand-tint)]/60 px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-[var(--brand)]">
      {children}
    </span>
  );
}

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2">
      <Check
        className="mt-[3px] h-3.5 w-3.5 flex-none text-[var(--brand)]"
        strokeWidth={3}
      />
      <span className="text-[0.8rem] leading-relaxed text-[var(--brand-ink)]/80 md:text-sm">
        {children}
      </span>
    </li>
  );
}

function FeaturedCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <RevealItem className="group md:col-span-2">
      <div className="h-full overflow-hidden rounded-3xl border border-[var(--brand)]/15 bg-white p-7 shadow-[0_4px_24px_-12px_oklch(0.3_0.09_260/0.2)] transition-all duration-300 hover:border-[var(--brand)]/25 hover:shadow-[0_24px_50px_-24px_oklch(0.3_0.09_260/0.32)] md:p-9">
        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-12">
          {/* left: identity + copy + tags */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[image:var(--gradient-brand)] text-white shadow-[0_14px_30px_-12px_oklch(0.4_0.13_255/0.65)]">
                <Icon className="h-7 w-7" strokeWidth={1.8} />
              </span>
              <span className="inline-flex items-center rounded-full bg-[var(--brand-tint)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--brand)]">
                中心サービス
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl">
              {service.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              {service.desc}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* right: what we cover */}
          <div className="rounded-2xl border border-[var(--brand)]/10 bg-[var(--brand-tint)]/45 p-5 md:p-6">
            <p className="text-xs font-semibold tracking-[0.14em] text-[var(--brand)]">
              主な対応内容
            </p>
            <ul className="mt-4 space-y-3">
              {service.checks.map((c) => (
                <CheckItem key={c}>{c}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevealItem>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <RevealItem className="group flex h-full flex-col rounded-2xl border border-[var(--brand)]/12 bg-white p-6 shadow-[0_2px_14px_-8px_oklch(0.3_0.09_260/0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)]/25 hover:shadow-[0_18px_40px_-20px_oklch(0.3_0.09_260/0.28)]">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-tint)] text-[var(--brand)] transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </span>
      <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-[var(--brand-ink)]">
        {service.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.desc}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <ul className="mt-4 space-y-2 border-t border-[var(--brand)]/10 pt-4">
        {service.checks.map((c) => (
          <CheckItem key={c}>{c}</CheckItem>
        ))}
      </ul>
    </RevealItem>
  );
}

export function Services() {
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fd_100%)] py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        {/* ---- centered header with a large faint SERVICE watermark ---- */}
        <div className="relative mx-auto max-w-2xl text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-5 select-none text-[4.25rem] font-black uppercase leading-none tracking-[0.14em] text-[var(--brand)]/[0.06] md:-top-12 md:text-[8.5rem]"
          >
            SERVICE
          </span>
          <p className="relative text-xs font-semibold tracking-[0.28em] text-[var(--brand)]">
            SERVICES
          </p>
          <h2 className="relative mt-3 text-3xl font-bold tracking-tight text-[var(--brand-ink)] md:text-[2.5rem]">
            支援領域
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            業務理解を起点に、必要な技術を横断的に組み合わせてご提案します。
          </p>
        </div>

        {/* ---- featured card (top) + 2×2 grid of the remaining services ---- */}
        <RevealGroup className="mx-auto mt-14 grid max-w-5xl gap-6 md:mt-16 md:grid-cols-2">
          {featured && <FeaturedCard service={featured} />}
          {rest.map((s) => (
            <ServiceCard key={s.name} service={s} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
