"use client";

import { StoreTextLink, WaitlistLink } from "@/components/launch-actions";
import { useDetectedPlatform } from "@/components/platform-provider";
import { getLaunchActions } from "@/lib/launch";

const linkClass =
  "text-sm font-medium text-text underline-offset-4 transition-colors hover:text-primary-light hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";

export function FooterLaunchLink() {
  const platform = useDetectedPlatform();
  const { primary } = getLaunchActions(platform);

  if (primary.kind === "android-waitlist") {
    return (
      <WaitlistLink source="footer" className={linkClass}>
        {primary.label}
      </WaitlistLink>
    );
  }

  return (
    <StoreTextLink
      kind={primary.kind}
      href={primary.href}
      source="footer"
      className={linkClass}
    >
      {primary.label}
    </StoreTextLink>
  );
}
