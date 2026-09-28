"use client";

import { useDetectedPlatform } from "@/components/platform-provider";
import {
  trackAppStoreClick,
  trackPlayStoreClick,
} from "@/lib/track-launch";

type StoreBadgeProps = {
  kind: "app-store" | "play-store";
  href: string;
  source: string;
  onAction?: () => void;
};

const focusClass =
  "inline-flex rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function StoreBadge({ kind, href, source, onAction }: StoreBadgeProps) {
  const platform = useDetectedPlatform();

  if (kind === "app-store") {
    return (
      <a
        href={href}
        aria-label="Download on the App Store"
        className={`${focusClass} transition-opacity hover:opacity-90`}
        onClick={() => {
          trackAppStoreClick(source, platform);
          onAction?.();
        }}
      >
        {/* Official Apple badge SVG. Keep it unoptimized so the artwork is unchanged. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/badges/app-store.svg"
          alt=""
          width={132}
          height={44}
          draggable={false}
          className="h-11 w-[132px]"
        />
      </a>
    );
  }

  return (
    <a
      href={href}
      aria-label="Get it on Google Play"
      className={`${focusClass} h-11 items-center gap-2 bg-white px-3 text-black transition-opacity hover:opacity-90`}
      onClick={() => {
        trackPlayStoreClick(source, platform);
        onAction?.();
      }}
    >
      <PlayIcon />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[9px] font-medium tracking-wide">GET IT ON</span>
        <span className="mt-0.5 text-[15px] font-semibold tracking-tight">
          Google Play
        </span>
      </span>
    </a>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M4.5 3.8v16.4c0 .7.8 1.1 1.4.7l13.2-8.2c.6-.4.6-1.2 0-1.6L5.9 3.1c-.6-.4-1.4 0-1.4.7z" />
    </svg>
  );
}
