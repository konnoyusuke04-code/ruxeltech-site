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
          ? "border-b border-border/60 bg-background/85 shadow-[0_1px_0_oklch(0.55_0.14_255/0.06),0_12px_34px_-24px_oklch(0.24_0.07_260/0.4)]"
          : "border-b border-border/40 bg-background/70",
      )}
    >

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo — swap this mark + wordmark for the official logo (e.g. an <img>) without touching the header layout */}
        <a
          href="#top"
          onClick={(e) => handleAnchorClick(e, "#top")}
          className="flex items-center gap-2 text-foreground transition-colors"
        >
          <span className="relative inline-block h-6 w-6 overflow-hidden rounded-md bg-[image:var(--gradient-accent)] shadow-[0_0_18px_oklch(0.55_0.16_255/0.45)] ring-1 ring-inset ring-black/5">
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, oklch(1 0 0 / 0.45), transparent 60%)",
              }}
            />
          </span>
          <span className="text-base font-semibold tracking-tight">RuxelTech</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => handleAnchorClick(e, n.href)}
              className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[var(--accent-blue)] after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={(e) => handleAnchorClick(e, "#contact")}
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-deep)] hover:shadow-[0_14px_30px_-14px_oklch(0.55_0.16_255/0.6)] md:inline-flex"
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
