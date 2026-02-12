import { HeroMentor } from "@/components/sections/mentor/HeroMentor";
import { TeamZeroOne } from "@/components/sections/mentor/TeamZeroOne";
import { ServicesSection } from "@/components/sections/mentor/ServicesSection";
import { MessageSection } from "@/components/sections/mentor/MessageSection";
import { FinalCTA } from "@/components/sections/mentor/FinalCTA";

export default function MentorPage() {
  return (
    <main className="min-h-screen">
      <HeroMentor />
      <TeamZeroOne />
      <ServicesSection />
      <MessageSection />
      <FinalCTA />
    </main>
  );
}
