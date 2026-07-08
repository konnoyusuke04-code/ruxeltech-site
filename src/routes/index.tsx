import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome";
import { Hero } from "@/components/sections/Hero";
import { Challenges } from "@/components/sections/Challenges";
import { Reasons } from "@/components/sections/Reasons";
import { Services } from "@/components/sections/Services";
import { Works } from "@/components/sections/Works";
import { Voices } from "@/components/sections/Voices";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RuxelTech｜業務を理解し、使われ続けるシステムをつくる" },
      {
        name: "description",
        content:
          "RuxelTechは、業務システム・Webアプリ・生成AI連携・業務自動化を、要件整理から設計・開発・運用改善まで支援する日本のBtoBシステム開発チームです。",
      },
      {
        property: "og:title",
        content: "RuxelTech｜業務を理解し、使われ続けるシステムをつくる",
      },
      {
        property: "og:description",
        content:
          "業務システム・生成AI連携・業務自動化を、要件整理から運用改善まで一貫支援する日本のBtoBシステム開発チーム。",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Challenges />
        <Reasons />
        <Services />
        <Works />
        <Voices />
        <Process />
        <FAQ />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
