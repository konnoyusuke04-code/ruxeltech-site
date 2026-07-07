import { Section } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "要件がまだ固まっていなくても相談できますか？",
    a: "はい。むしろ要件整理から入るご相談を得意としています。業務ヒアリングを通じて、実現方法や優先順位を一緒に整理します。",
  },
  {
    q: "小さな改修やPoCだけでも依頼できますか？",
    a: "可能です。小さく始めて検証しながら育てる進め方を推奨しており、PoC・MVPからのご支援も歓迎します。",
  },
  {
    q: "既存システムの引き継ぎ・改修は可能ですか？",
    a: "対応可能です。現行仕様の整理や技術負債の可視化から入り、業務を止めずに段階的に改修する進め方をご提案します。",
  },
  {
    q: "AI連携だけの相談もできますか？",
    a: "はい。生成AIをどこに、どう組み込むかの設計から、既存業務システムとの連携までご支援します。",
  },
  {
    q: "開発後の保守・改善も依頼できますか？",
    a: "運用フェーズの改善までを前提としたご支援を行っています。納品して終わりではなく、使われ続ける状態を目指します。",
  },
  {
    q: "打ち合わせは必須ですか？",
    a: "オンライン会議を基本としています。テキストでの相談から始めていただき、必要に応じて打ち合わせを実施します。",
  },
];

export function FAQ() {
  return (
    <Section
      id="faq"
      watermark="FAQ"
      eyebrow="FAQ"
      title="よくあるご質問"
      description="ご相談の前に、多くいただく質問への回答をまとめました。"
    >
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
