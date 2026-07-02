import { useEffect, useState } from "react";
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

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 backdrop-blur-xl transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/75 shadow-[0_1px_0_oklch(0.55_0.14_255/0.06),0_10px_30px_-24px_oklch(0.24_0.07_260/0.35)]"
          : "border-b border-white/10 bg-[oklch(0.16_0.05_262/0.4)]",
      )}
    >

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={(e) => handleAnchorClick(e, "#top")}
          className={cn(
            "flex items-center gap-2 transition-colors",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
        >
          <span className="inline-block h-6 w-6 rounded-sm bg-[image:var(--gradient-accent)] shadow-[0_0_20px_oklch(0.55_0.16_255/0.5)]" />
          <span className="text-base font-semibold tracking-tight">RuxelTech</span>
        </a>
        <nav
          className={cn(
            "hidden gap-8 text-sm lg:flex",
            scrolled ? "text-muted-foreground" : "text-[color:oklch(0.85_0.03_250)]",
          )}
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => handleAnchorClick(e, n.href)}
              className={cn(
                "relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[var(--accent-blue)] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                scrolled ? "hover:text-foreground" : "hover:text-white",
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={(e) => handleAnchorClick(e, "#contact")}
          className={cn(
            "hidden rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] md:inline-flex",
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-[var(--primary-deep)]"
              : "border border-white/25 bg-white/10 text-primary-foreground backdrop-blur hover:bg-white/20",
          )}
        >
          無料で相談する
        </a>
      </div>
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
