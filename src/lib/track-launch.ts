"use client";

import { track } from "@vercel/analytics";
import { AnalyticsEvent } from "@/lib/analytics-events";
import type { DetectedPlatform } from "@/lib/detect-platform";

let waitlistStartTracked = false;

export function trackLandingView(platform: DetectedPlatform) {
  track(AnalyticsEvent.landingView, { detected_platform: platform });
}

export function trackAppStoreClick(source: string, platform: DetectedPlatform) {
  track(AnalyticsEvent.appStoreClick, {
    source,
    detected_platform: platform,
  });
}

export function trackPlayStoreClick(source: string, platform: DetectedPlatform) {
  track(AnalyticsEvent.playStoreClick, {
    source,
    detected_platform: platform,
  });
}

export function trackAndroidWaitlistStart(
  source: string,
  platform: DetectedPlatform,
) {
  if (waitlistStartTracked) return;
  waitlistStartTracked = true;
  track(AnalyticsEvent.androidWaitlistStart, {
    source,
    detected_platform: platform,
  });
}

export function trackAndroidWaitlistComplete(
  source: string,
  platform: DetectedPlatform,
) {
  track(AnalyticsEvent.androidWaitlistComplete, {
    source,
    detected_platform: platform,
  });
}
