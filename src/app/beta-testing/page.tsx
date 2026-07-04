import type { Metadata } from "next";
import { BetaTestingContent } from "@/components/beta-testing-content";

export const metadata: Metadata = {
  title: "Synema Beta Testing",
  description:
    "Join the Synema beta and help test a new movie night app for friends and couples.",
};

export default function BetaTestingPage() {
  return <BetaTestingContent />;
}
