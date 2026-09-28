"use client";

import { LaunchActions } from "@/components/launch-actions";
import { useDetectedPlatform } from "@/components/platform-provider";
import { getAvailabilityLine } from "@/lib/launch";

export function MidPageCta() {
  const platform = useDetectedPlatform();

  return (
    <section aria-label="Get Synema" className="px-5 pb-16 md:px-12 md:pb-24 lg:px-20">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
        <p className="text-sm text-text-secondary">{getAvailabilityLine(platform)}</p>
        <LaunchActions source="story" align="center" showSecondary={false} />
      </div>
    </section>
  );
}
