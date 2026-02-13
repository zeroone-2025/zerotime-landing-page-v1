import { Metadata } from "next";
import { HeroChinba } from "@/components/sections/chinba/HeroChinba";

export const metadata: Metadata = {
  title: "친해지길바래",
};
import { ProblemChinba } from "@/components/sections/chinba/ProblemChinba";
import { DemoChinba } from "@/components/sections/chinba/DemoChinba";
import { FeatureChinba } from "@/components/sections/chinba/FeatureChinba";
import { PreviewChinba } from "@/components/sections/chinba/PreviewChinba";
import { FinalChinba } from "@/components/sections/chinba/FinalChinba";

export default function ChinbaPage() {
  return (
    <main className="min-h-screen">
      <HeroChinba />
      <ProblemChinba />
      <FeatureChinba />
      <DemoChinba />
      <PreviewChinba />
      <FinalChinba />
    </main>
  );
}
