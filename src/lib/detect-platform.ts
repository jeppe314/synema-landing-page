export type DetectedPlatform = "ios" | "android" | "desktop";

const BOT_PATTERN =
  /googlebot|bingbot|applebot|duckduckbot|baiduspider|yandexbot|slurp|facebookexternalhit|twitterbot|linkedinbot|embedly|slackbot|telegrambot|semrushbot|ahrefsbot|petalbot|bytespider|gptbot|amazonbot|crawler|spider/i;

/**
 * Classify a visitor from the User-Agent.
 *
 * iPhone, iPad, and iPod get the iOS treatment. Android gets the Android
 * treatment. Everything else, including crawlers, gets the desktop treatment
 * so the App Store call to action stays visible when we aren't sure.
 *
 * iPadOS 13+ can send a desktop Macintosh user agent. Those visitors see the
 * desktop treatment, which still leads with the App Store.
 */
export function detectPlatform(userAgent: string | null | undefined): DetectedPlatform {
  const ua = userAgent?.trim() ?? "";
  if (!ua) return "desktop";

  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  if (BOT_PATTERN.test(ua)) return "desktop";
  if (/android/i.test(ua)) return "android";

  return "desktop";
}
