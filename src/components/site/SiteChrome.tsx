import { useEffect, useState, type SyntheticEvent } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type NavItem =
  | { label: string; to: string } // internal page (SPA navigation)
  | { label: string; hash: string }; // homepage section anchor

const nav: NavItem[] = [
  { label: "チーム紹介", to: "/team" },
  { label: "サービス", hash: "services" },
  { label: "実績", hash: "works" },
  { label: "お客様の声", hash: "voices" },
  { label: "進め方", hash: "process" },
  { label: "FAQ", hash: "faq" },
];

/**
 * Smooth-scroll to a homepage section when we are already on "/". On any other
 * page, let the browser follow the `/#hash` href (loads home, then the fragment
 * scrolls the section into view).
 */
function scrollToHashOnHome(
  e: React.MouseEvent<HTMLAnchorElement>,
  hash: string,
) {
  if (typeof window === "undefined" || window.location.pathname !== "/") return;
  const el = document.getElementById(hash);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${hash}`);
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

/**
 * Footer logo: show the dedicated wide footer SVG once it's saved at the path
 * referenced below. Until then, fall back to the existing horizontal logo so
 * the footer always shows the real RuxelTech mark — never a broken image or the
 * old placeholder square. Drop the SVG at the path and it takes over.
 */
function footerLogoFallback(e: SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  if (img.dataset.fallback) return;
  img.dataset.fallback = "1";
  img.src = "/images/logo/ruxeltech-logo.png";
}

const navLinkClass =
  "relative transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:rounded-full after:bg-[var(--brand)] after:transition-transform after:duration-300 hover:text-[var(--brand)] hover:after:origin-left hover:after:scale-x-100";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: on the homepage, mark the nav item whose section is in view.
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }
    const ids = nav.flatMap((n) => ("hash" in n ? [n.hash] : []));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.filter((e) => e.isIntersecting);
        if (inView.length > 0) {
          inView.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          setActiveSection(inView[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (n: NavItem) =>
    "to" in n ? pathname === n.to : pathname === "/" && activeSection === n.hash;

  const activeUnderline =
    "text-[var(--brand)] after:origin-left after:scale-x-100";

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
        {/* Logo -> home */}
        <Link to="/" className="flex items-center" aria-label="RuxelTech ホーム">
          <img
            src="/images/logo/ruxeltech-logo.png"
            onError={pngToSvg}
            alt="RuxelTech"
            className="h-7 w-auto lg:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--brand-ink)]/85 lg:flex">
          {nav.map((n) => {
            const active = isActive(n);
            const cls = cn(navLinkClass, active && activeUnderline);
            return "to" in n ? (
              <Link
                key={n.to}
                to={n.to}
                className={cls}
                aria-current={active ? "page" : undefined}
              >
                {n.label}
              </Link>
            ) : (
              <a
                key={n.hash}
                href={`/#${n.hash}`}
                onClick={(e) => scrollToHashOnHome(e, n.hash)}
                className={cls}
                aria-current={active ? "location" : undefined}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            onClick={(e) => scrollToHashOnHome(e, "contact")}
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
            {nav.map((n) => {
              const active = isActive(n);
              const mcls = cn(
                "border-b border-[var(--brand)]/5 py-3.5 text-sm font-medium transition-colors hover:text-[var(--brand)]",
                active
                  ? "font-semibold text-[var(--brand)]"
                  : "text-[var(--brand-ink)]",
              );
              return "to" in n ? (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={mcls}
                  aria-current={active ? "page" : undefined}
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.hash}
                  href={`/#${n.hash}`}
                  onClick={(e) => {
                    scrollToHashOnHome(e, n.hash);
                    setOpen(false);
                  }}
                  className={mcls}
                  aria-current={active ? "location" : undefined}
                >
                  {n.label}
                </a>
              );
            })}
            <a
              href="/#contact"
              onClick={(e) => {
                scrollToHashOnHome(e, "contact");
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
            {/* Footer logo — dedicated wide footer SVG (falls back to the
                existing horizontal logo until that file is saved). */}
            <img
              src="/images/logo/ruxeltech-logo-footer.svg"
              onError={footerLogoFallback}
              alt="RuxelTech"
              className="h-auto w-40 sm:w-44"
            />
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              業務を理解し、使われ続けるシステムをつくる。<br />
              日本企業のためのシステム開発チーム。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:gap-16">
            <div>
              <p className="mb-3 font-medium text-foreground">サイト</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/team" className="hover:text-foreground">チーム紹介</Link></li>
                <li><a href="/#services" className="hover:text-foreground">サービス</a></li>
                <li><a href="/#works" className="hover:text-foreground">実績</a></li>
                <li><a href="/#faq" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-medium text-foreground">お問い合わせ</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/#contact" className="hover:text-foreground">無料相談</a></li>
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
