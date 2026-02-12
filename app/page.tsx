import { HeroMain } from "@/components/sections/main/HeroMain";
import { ProblemSection } from "@/components/sections/main/ProblemSection";
import { SolutionSection } from "@/components/sections/main/SolutionSection";
import { ServicesMain } from "@/components/sections/main/ServicesMain";
import { SummaryTeamSection } from "@/components/sections/main/SummaryTeamSection";
import { FinalCTAMain } from "@/components/sections/main/FinalCTAMain";

export default function Home() {
  return (
    <>
      <HeroMain />
      <ProblemSection />
      <SolutionSection />
      <ServicesMain />
      <SummaryTeamSection />
      <FinalCTAMain />
    </>
  );
}
