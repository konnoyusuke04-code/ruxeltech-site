import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome";
import { TeamBanner } from "@/components/team/TeamBanner";
import { Representative } from "@/components/team/Representative";
import { TeamSkills } from "@/components/team/TeamSkills";
import { TeamMissionVision } from "@/components/team/TeamMissionVision";
import { TeamMembers } from "@/components/team/TeamMembers";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "チーム紹介｜RuxelTech" },
      {
        name: "description",
        content:
          "RuxelTech 代表 武田健治のプロフィール・経歴・スキルと、チームのミッション・ビジョン・構成。業務システムとAI連携開発は代表が直接担当します。",
      },
      { property: "og:title", content: "チーム紹介｜RuxelTech" },
      {
        property: "og:description",
        content:
          "RuxelTech 代表 武田健治のプロフィール・経歴・スキルと、チームのミッション・ビジョン・構成。",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <TeamBanner />
        <Representative />
        <TeamSkills />
        <TeamMissionVision />
        <TeamMembers />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
