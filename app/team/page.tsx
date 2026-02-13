import { HeroTeam } from "@/components/sections/team/HeroTeam";
import { TeamIntro } from "@/components/sections/team/TeamIntro";
import { WorkingWay } from "@/components/sections/team/WorkingWay";
import { AwardTimeline } from "@/components/sections/team/AwardTimeline";
import { FinalCTATeam } from "@/components/sections/team/FinalCTATeam";

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <HeroTeam />
      <TeamIntro />
      <WorkingWay />
      <AwardTimeline />
      <FinalCTATeam />
    </main>
  );
}
