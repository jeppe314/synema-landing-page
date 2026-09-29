"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

export function GuideView({
  slug,
  event = "guide_view",
}: {
  slug: string;
  event?: "guide_view" | "comparison_view";
}) {
  useEffect(() => {
    if (event === "comparison_view") {
      track(event, { comparison_slug: slug });
      return;
    }
    track(event, { guide_slug: slug });
  }, [slug, event]);

  return null;
}
