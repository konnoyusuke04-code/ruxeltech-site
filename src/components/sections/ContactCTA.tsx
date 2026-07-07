import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="relative text-primary-foreground"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
          }}
        />
        {/* soft radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, oklch(0.55 0.16 255 / 0.35), transparent 60%)",
          }}
        />
        <Reveal
          as="div"
          className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36"
        >
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 -top-6 -translate-x-1/2 select-none whitespace-nowrap text-white/[0.06] text-[4.25rem] font-black uppercase leading-none tracking-[0.14em] md:-top-14 md:text-[8.5rem]"
            >
              CONTACT
            </span>
            <p className="relative mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[color:oklch(0.8_0.06_250)]">
              Contact
            </p>
            <h2 className="relative text-3xl font-bold leading-[1.2] tracking-tight md:text-5xl">
              まだ要件が固まっていなくても大丈夫です。
            </h2>
            <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:oklch(0.86_0.02_250)] md:text-lg">
              業務内容や課題を整理しながら、実現方法・開発範囲・進め方をご提案します。
              まずはお気軽にご相談ください。
            </p>
            <div className="relative mt-10 flex justify-center">
              <CTAButton href="#contact" className="px-8 py-4 md:text-base">
                無料で相談する
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
