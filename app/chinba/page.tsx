import { HeroChinba } from "@/components/sections/chinba/HeroChinba";
import { ProblemChinba } from "@/components/sections/chinba/ProblemChinba";
import { FeatureChinba } from "@/components/sections/chinba/FeatureChinba";
import { PreviewChinba } from "@/components/sections/chinba/PreviewChinba";
import { FinalChinba } from "@/components/sections/chinba/FinalChinba";

export default function ChinbaPage() {
  return (
    <main className="min-h-screen">
      <HeroChinba />
      <ProblemChinba />
      <FeatureChinba />
      <PreviewChinba />
      <FinalChinba />
    </main>
  );
}
