"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useDetectedPlatform } from "@/components/platform-provider";
import {
  getLaunchActions,
  type LaunchAction,
} from "@/lib/launch";
import {
  trackAndroidWaitlistStart,
  trackAppStoreClick,
  trackPlayStoreClick,
} from "@/lib/track-launch";
import { onWaitlistLinkClick } from "@/lib/waitlist-navigation";
import { StoreBadge } from "./store-badge";
import { WaitlistForm } from "./waitlist-form";

const secondaryClass =
  "inline-flex min-h-11 items-center text-sm font-medium text-text-secondary underline-offset-4 transition-colors hover:text-text hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";

const primaryButtonClass =
  "inline-flex min-h-12 max-w-full touch-manipulation items-center justify-center rounded-xl bg-gradient-primary px-5 text-center text-base font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const proseLinkClass =
  "font-medium text-primary underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";

type LaunchActionsProps = {
  source: string;
  align?: "start" | "center";
  showSecondary?: boolean;
  /** When the primary action is the Android waitlist, show the email form here. */
  embedWaitlist?: boolean;
  waitlistHeadline?: string;
  showWaitlistHeadline?: boolean;
  onAction?: () => void;
};

export function LaunchActions({
  source,
  align = "start",
  showSecondary = true,
  embedWaitlist = false,
  waitlistHeadline,
  showWaitlistHeadline = false,
  onAction,
}: LaunchActionsProps) {
  const platform = useDetectedPlatform();
  const { primary, secondary } = getLaunchActions(platform);
  const formEmbedded = embedWaitlist && primary.kind === "android-waitlist";

  const primaryNode =
    primary.kind === "android-waitlist" ? (
      formEmbedded ? (
        <WaitlistForm
          source={source}
          headline={waitlistHeadline}
          showHeadline={showWaitlistHeadline}
          onEngage={onAction}
        />
      ) : (
        <WaitlistLink source={source} className={primaryButtonClass} onNavigate={onAction}>
          {primary.label}
        </WaitlistLink>
      )
    ) : (
      <StoreBadge
        kind={primary.kind}
        href={primary.href}
        source={source}
        onAction={onAction}
      />
    );

  return (
    <div
      className={`flex w-full flex-col gap-3 ${
        align === "center" ? "items-center" : "items-start"
      }`}
    >
      {formEmbedded ? <div className="w-full max-w-md">{primaryNode}</div> : primaryNode}
      {showSecondary && secondary ? (
        <SecondaryAction action={secondary} source={source} />
      ) : null}
    </div>
  );
}

export function SecondaryAction({
  action,
  source,
  className = secondaryClass,
}: {
  action: LaunchAction;
  source: string;
  className?: string;
}) {
  if (action.kind === "android-waitlist") {
    return (
      <WaitlistLink source={source} className={className}>
        {action.label}
      </WaitlistLink>
    );
  }

  return (
    <StoreTextLink
      kind={action.kind}
      href={action.href}
      source={source}
      className={className}
    >
      {action.label}
    </StoreTextLink>
  );
}

export function WaitlistLink({
  source,
  className,
  children,
  onNavigate,
  ariaLabel,
}: {
  source: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  ariaLabel?: string;
}) {
  const platform = useDetectedPlatform();

  return (
    <Link
      href="/#android-waitlist"
      className={className}
      aria-label={ariaLabel}
      onClick={(event) => {
        trackAndroidWaitlistStart(source, platform);
        onNavigate?.();
        onWaitlistLinkClick(event);
      }}
    >
      {children}
    </Link>
  );
}

export function StoreTextLink({
  kind,
  href,
  source,
  className = proseLinkClass,
  children,
}: {
  kind: "app-store" | "play-store";
  href: string;
  source: string;
  className?: string;
  children: ReactNode;
}) {
  const platform = useDetectedPlatform();

  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        if (kind === "app-store") {
          trackAppStoreClick(source, platform);
        } else {
          trackPlayStoreClick(source, platform);
        }
      }}
    >
      {children}
    </a>
  );
}
