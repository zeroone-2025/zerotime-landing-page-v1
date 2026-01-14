import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Mockup } from "@/components/sections/Mockup";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Mockup />
      <CTASection />
      <Footer />
    </main>
  );
}
