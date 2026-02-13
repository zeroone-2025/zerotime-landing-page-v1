import { Metadata } from "next";
import { HeroFlow } from "@/components/sections/flow/HeroFlow";

export const metadata: Metadata = {
  title: "플로우",
};
import { ProblemFlow } from "@/components/sections/flow/ProblemFlow";
import { FeaturesFlow } from "@/components/sections/flow/FeaturesFlow";
import { DemoFlow } from "@/components/sections/flow/DemoFlow";
import { ClosingFlow } from "@/components/sections/flow/ClosingFlow";

export default function FlowPage() {
  return (
    <main className="min-h-screen">
      <HeroFlow />
      <ProblemFlow />
      <FeaturesFlow />
      <DemoFlow />
      <ClosingFlow />
    </main>
  );
}
