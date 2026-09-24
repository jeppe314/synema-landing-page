import { Hero } from "@/components/hero";
import { FeatureCards } from "@/components/feature-cards";
import { HowItWorks } from "@/components/how-it-works";
import { StreamingServices } from "@/components/streaming-services";
import { WhySynema } from "@/components/why-synema";
import { FAQ } from "@/components/faq";
import { HomeGuides } from "@/components/home-guides";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <StreamingServices />
      <WhySynema />
      <FAQ />
      <HomeGuides />
    </main>
  );
}
