import { useEffect, useState, type SyntheticEvent } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#works" },
  { label: "チーム", href: "#team" },
  { label: "お客様の声", href: "#voices" },
  { label: "進め方", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith("#")) return;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", href);
}

/**
 * Use the lightweight PNG logo (~11KB) as the primary source; fall back to the
 * SVG only if the PNG is missing. The supplied SVG embeds a ~940KB raster, so
 * the PNG is identical in appearance but far better for header/LCP performance.
 */
function pngToSvg(e: SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  if (img.dataset.fallback) return;
  img.dataset.fallback = "1";
  img.src = img.src.replace(/\.png(\?.*)?$/, ".svg");
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white/85 backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "border-b border-[var(--brand)]/10 shadow-[0_8px_28px_-22px_oklch(0.3_0.09_260/0.55)]"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-20">
        {/* Logo (official horizontal logo; swap the src to change it) */}
        <a
          href="#top"
          onClick={(e) => handleAnchorClick(e, "#top")}
          className="flex items-center"
          aria-label="RuxelTech ホーム"
        >
          <img
            src="/images/logo/ruxeltech-logo.png"
            onError={pngToSvg}
            alt="RuxelTech"
            className="h-7 w-auto lg:h-8"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--brand-ink)]/85 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => handleAnchorClick(e, n.href)}
              className="relative transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:rounded-full after:bg-[var(--brand)] after:transition-transform after:duration-300 hover:text-[var(--brand)] hover:after:origin-left hover:after:scale-x-100"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_26px_-14px_oklch(0.45_0.16_255/0.6)] ring-1 ring-inset ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-16px_oklch(0.45_0.16_255/0.65)] sm:inline-flex"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            無料で相談する
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--brand-ink)] transition-colors hover:bg-[var(--brand-tint)] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--brand)]/10 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => {
                  handleAnchorClick(e, n.href);
                  setOpen(false);
                }}
                className="border-b border-[var(--brand)]/5 py-3.5 text-sm font-medium text-[var(--brand-ink)] transition-colors hover:text-[var(--brand)]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                handleAnchorClick(e, "#contact");
                setOpen(false);
              }}
              className="mt-4 mb-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_-14px_oklch(0.45_0.16_255/0.6)]"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              無料で相談する
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded-sm bg-[image:var(--gradient-accent)]" />
              <span className="text-base font-semibold tracking-tight">RuxelTech</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              業務を理解し、使われ続けるシステムをつくる。<br />
              日本企業のためのシステム開発チーム。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:gap-16">
            <div>
              <p className="mb-3 font-medium text-foreground">サイト</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground">サービス</a></li>
                <li><a href="#works" className="hover:text-foreground">実績</a></li>
                <li><a href="#team" className="hover:text-foreground">チーム</a></li>
                <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-medium text-foreground">お問い合わせ</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#contact" className="hover:text-foreground">無料相談</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} RuxelTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
