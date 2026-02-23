import { Metadata } from "next";
import { HeroMentor } from "@/components/sections/mentor/HeroMentor";
import { LaunchAnnounce } from "@/components/sections/mentor/LaunchAnnounce";
import { StatsSection } from "@/components/sections/mentor/StatsSection";
import { FlowFeatures } from "@/components/sections/mentor/FlowFeatures";
import { MentorBenefits } from "@/components/sections/mentor/MentorBenefits";
import { ScreenPreview } from "@/components/sections/mentor/ScreenPreview";
import { ClosingMessage } from "@/components/sections/mentor/ClosingMessage";
import { FinalCTA } from "@/components/sections/mentor/FinalCTA";

export const metadata: Metadata = {
  title: "선배가 되어주세요",
};

export default function MentorPage() {
  return (
    <main className="min-h-screen">
      <HeroMentor />
      <LaunchAnnounce />
      <ClosingMessage />
      <StatsSection />
      <FlowFeatures />
      <MentorBenefits />
      <ScreenPreview />
      <FinalCTA />
    </main>
  );
}
