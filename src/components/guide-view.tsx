"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

export function GuideView({ slug }: { slug: string }) {
  useEffect(() => {
    track("guide_view", { guide_slug: slug });
  }, [slug]);

  return null;
}
