"use client";

import { createContext, useContext } from "react";
import type { DetectedPlatform } from "@/lib/detect-platform";

const PlatformContext = createContext<DetectedPlatform>("desktop");

export function PlatformProvider({
  platform,
  children,
}: {
  platform: DetectedPlatform;
  children: React.ReactNode;
}) {
  return (
    <PlatformContext.Provider value={platform}>{children}</PlatformContext.Provider>
  );
}

export function useDetectedPlatform() {
  return useContext(PlatformContext);
}
