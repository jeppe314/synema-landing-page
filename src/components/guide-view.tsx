"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";
import { AnalyticsEvent } from "@/lib/analytics-events";

export function GuideView({ slug }: { slug: string }) {
  useEffect(() => {
    track(AnalyticsEvent.guideView, { guide_slug: slug });
  }, [slug]);

  return null;
}
