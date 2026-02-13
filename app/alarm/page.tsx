import { Metadata } from "next";
import { HeroHybrid } from "@/components/sections/alarm/HeroHybrid";

export const metadata: Metadata = {
  title: "알리미",
};
import { FeaturesHybrid } from "@/components/sections/alarm/FeaturesHybrid";
import { MockupHybrid } from "@/components/sections/alarm/MockupHybrid";
import { ReviewsHybrid } from "@/components/sections/alarm/ReviewsHybrid";
import { CTASectionHybrid } from "@/components/sections/alarm/CTASectionHybrid";

export default function AlarmPage() {
  return (
    <main className="min-h-screen">
      <HeroHybrid />
      <FeaturesHybrid />
      <MockupHybrid />
      <ReviewsHybrid />
      <CTASectionHybrid />
    </main>
  );
}
