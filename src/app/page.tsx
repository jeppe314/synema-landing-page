import { Hero } from "@/components/hero";
import { FeatureCards } from "@/components/feature-cards";
import { HowItWorks } from "@/components/how-it-works";
import { Showcase } from "@/components/showcase";
import { WhySynema } from "@/components/why-synema";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <Showcase />
      <WhySynema />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
