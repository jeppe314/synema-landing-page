"use client";

import { useEffect, useRef } from "react";
import { trackLandingView } from "@/lib/track-launch";
import { useDetectedPlatform } from "./platform-provider";

export function LandingView() {
  const platform = useDetectedPlatform();
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    trackLandingView(platform);

    if (window.location.hash !== "#waitlist") return;
    const target = document.getElementById("android-waitlist");
    if (!target) return;
    target.scrollIntoView({ block: "start" });
    window.history.replaceState(null, "", "/#android-waitlist");
  }, [platform]);

  return null;
}
