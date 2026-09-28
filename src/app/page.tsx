import { Hero } from "@/components/hero";
import { FeatureCards } from "@/components/feature-cards";
import { HowItWorks } from "@/components/how-it-works";
import { StreamingServices } from "@/components/streaming-services";
import { WhySynema } from "@/components/why-synema";
import { MidPageCta } from "@/components/mid-page-cta";
import { FAQ } from "@/components/faq";
import { HomeGuides } from "@/components/home-guides";
import { ClosingCta } from "@/components/closing-cta";
import { LandingView } from "@/components/landing-view";

export default function Home() {
  return (
    <main>
      <LandingView />
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <StreamingServices />
      <WhySynema />
      <MidPageCta />
      <FAQ />
      <HomeGuides />
      <ClosingCta />
    </main>
  );
}
