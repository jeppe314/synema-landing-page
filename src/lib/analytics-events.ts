/**
 * Vercel Web Analytics custom event names.
 * Keep every tracked name here so call sites don't invent their own strings.
 */
export const AnalyticsEvent = {
  landingView: "landing_view",
  appStoreClick: "app_store_click",
  playStoreClick: "play_store_click",
  androidWaitlistStart: "android_waitlist_start",
  androidWaitlistComplete: "android_waitlist_complete",
  guideView: "guide_view",
  guideCtaClick: "guide_cta_click",
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];
