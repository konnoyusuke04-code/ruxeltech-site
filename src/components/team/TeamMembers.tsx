import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/site/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { Bot, Smartphone, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Member = {
  name: string;
  role: string;
  desc: string;
  icon: LucideIcon;
  /** Circular avatar photo. Drop the file at this path and it replaces the icon
   *  fallback — no other change needed. */
  avatar: string;
  featured?: boolean;
};

const members: Member[] = [
  {
    name: "武田 健治",
    role: "代表 ／ 業務システム・AI連携開発",
    desc: "要件定義から設計・実装・運用改善まで直接担当。クライアントの窓口も務め、認識のズレを抑えながら開発を進めます。",
    icon: Bot,
    avatar: "/images/team/avatar-takeda.png",
    featured: true,
  },
  {
    name: "スマホアプリ・CMS 開発",
    role: "メンバー",
    desc: "iOS / Android アプリや CMS の設計・開発を担当します。",
    icon: Smartphone,
    avatar: "/images/team/avatar-danggialam.png",
  },
  {
    name: "UI/UX デザイナー",
    role: "メンバー",
    desc: "情報設計・画面設計で、現場での使いやすさ・定着を支えます。",
    icon: Palette,
    avatar: "/images/team/avatar-sakura.png",
  },
];

/**
 * Circular member avatar. Shows the person's photo once it loads; until then
 * (or if the file is missing) it falls back to the role icon on the brand
 * circle, so the card never looks empty and the layout never shifts.
 */
function MemberAvatar({
  src,
  icon: Icon,
  featured,
}: {
  src: string;
  icon: LucideIcon;
  featured?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);
  return (
    <span
      className={cn(
        "relative inline-flex h-14 w-14 flex-none items-center justify-center overflow-hidden rounded-full ring-1 ring-inset",
        featured
          ? "bg-[image:var(--gradient-brand)] text-white ring-white/25"
          : "bg-[var(--brand-tint)] text-[var(--brand)] ring-[var(--brand)]/12",
      )}
    >
      {/* fallback: role icon on the brand circle */}
      <Icon className="h-6 w-6" strokeWidth={1.8} />
      {/* per-person avatar photo, circular (cover) */}
      <img
        ref={ref}
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </span>
  );
}

export function TeamMembers() {
  return (
    <Section
      id="members"
      watermark="MEMBER"
      eyebrow="Member"
      title="チーム構成"
      description="案件ごとに最適な少数精鋭で編成する、RuxelTech の開発チームです。"
    >
      <div className="mx-auto max-w-5xl">
        <RevealGroup className="grid gap-5 md:grid-cols-3">
          {members.map((m) => (
            <RevealItem
              key={m.name}
              className={
                m.featured
                  ? "flex h-full flex-col rounded-2xl border border-[var(--brand)]/25 bg-white p-6 shadow-[0_18px_44px_-24px_oklch(0.3_0.09_260/0.32)] md:col-span-1"
                  : "flex h-full flex-col rounded-2xl border border-[var(--brand)]/12 bg-white p-6 shadow-[0_2px_14px_-8px_oklch(0.3_0.09_260/0.15)]"
              }
            >
              <MemberAvatar src={m.avatar} icon={m.icon} featured={m.featured} />
              {m.featured && (
                <span className="mt-4 inline-flex w-fit items-center rounded-full bg-[var(--brand-tint)] px-3 py-1 text-xs font-semibold text-[var(--brand)]">
                  代表・開発担当
                </span>
              )}
              <h3 className="mt-3 text-lg font-bold tracking-tight text-[var(--brand-ink)]">
                {m.name}
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-wide text-[var(--brand)]">
                {m.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {m.desc}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[var(--brand)]/12 bg-[var(--brand-tint)]/40 p-5 text-center text-sm leading-relaxed text-[var(--brand-ink)]/85">
            要件定義だけを行い外注する体制ではなく、
            <span className="font-semibold text-[var(--brand)]">
              業務システム・AI連携開発は代表の武田が自ら手を動かして開発
            </span>
            します。だからこそ認識のズレが起きにくく、スピードと品質を両立できます。
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
