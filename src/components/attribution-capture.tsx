"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/waitlist-attribution";

export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
