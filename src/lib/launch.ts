import type { DetectedPlatform } from "@/lib/detect-platform";

export type PlatformLaunch =
  | { status: "available"; storeUrl: string }
  | { status: "waitlist"; storeUrl: null };

/**
 * Paste the live App Store listing URL here before merging this branch.
 *
 * Example: https://apps.apple.com/app/id1234567890
 *
 * The placeholder is not a real listing. App Store clicks will not open
 * Synema until this value is replaced.
 */
export const IOS_APP_STORE_URL = "https://apps.apple.com/app/id0000000000";

/**
 * Single source of truth for which stores are live.
 *
 * When Android launches, this is the only edit required:
 *   android.status = "available"
 *   android.storeUrl = "https://play.google.com/store/apps/details?id=com.synema.app"
 */
export const launchConfig: {
  ios: PlatformLaunch;
  android: PlatformLaunch;
} = {
  ios: {
    status: "available",
    storeUrl: IOS_APP_STORE_URL,
  },
  android: {
    status: "waitlist",
    storeUrl: null,
  },
};

export const ANDROID_WAITLIST_HREF = "/#android-waitlist";

export const COPY = {
  appStore: "Download on the App Store",
  playStore: "Get it on Google Play",
  androidWaitlist: "Join the Android waitlist",
  iosSecondaryWaitlist: "On Android? Join the waitlist",
  desktopSecondaryWaitlist: "Android coming soon — Join the waitlist",
  alreadyOnIphone: "Already available on iPhone →",
  alsoOnPlay: "Also on Google Play",
  availableOnIphone: "Available on iPhone.",
  availableOnAndroid: "Available on Android.",
  comingSoonAndroid: "Coming soon to Android.",
  heroSupport: "Find movies you'll actually agree on — alone or together.",
} as const;

export type LaunchAction =
  | { kind: "app-store"; href: string; label: string }
  | { kind: "play-store"; href: string; label: string }
  | { kind: "android-waitlist"; href: typeof ANDROID_WAITLIST_HREF; label: string };

function appStoreAction(label: string = COPY.appStore): LaunchAction | null {
  if (launchConfig.ios.status !== "available") return null;
  return { kind: "app-store", href: launchConfig.ios.storeUrl, label };
}

function playStoreAction(label: string = COPY.playStore): LaunchAction | null {
  if (launchConfig.android.status !== "available") return null;
  return { kind: "play-store", href: launchConfig.android.storeUrl, label };
}

function waitlistAction(label: string): LaunchAction {
  return {
    kind: "android-waitlist",
    href: ANDROID_WAITLIST_HREF,
    label,
  };
}

export function getLaunchActions(platform: DetectedPlatform): {
  primary: LaunchAction;
  secondary: LaunchAction | null;
} {
  const appStore = appStoreAction();
  const playStore = playStoreAction();

  if (platform === "android") {
    if (playStore) {
      return {
        primary: playStore,
        secondary: appStore ? { ...appStore, label: COPY.alreadyOnIphone } : null,
      };
    }

    return {
      primary: waitlistAction(COPY.androidWaitlist),
      secondary: appStore ? { ...appStore, label: COPY.alreadyOnIphone } : null,
    };
  }

  const primary = appStore ?? waitlistAction(COPY.androidWaitlist);
  const secondary = playStore
    ? { ...playStore, label: COPY.alsoOnPlay }
    : launchConfig.android.status === "waitlist"
      ? waitlistAction(
          platform === "ios"
            ? COPY.iosSecondaryWaitlist
            : COPY.desktopSecondaryWaitlist,
        )
      : null;

  return { primary, secondary };
}

export function getAvailabilityLine(platform: DetectedPlatform): string {
  if (platform === "android") {
    return launchConfig.android.status === "available"
      ? COPY.availableOnAndroid
      : COPY.comingSoonAndroid;
  }

  return launchConfig.ios.status === "available"
    ? COPY.availableOnIphone
    : COPY.comingSoonAndroid;
}

/** Returns a real numeric Apple ID, ignoring the launch-prep placeholder. */
export function getAppleAppId(storeUrl: string): string | null {
  const match = storeUrl.match(/\/id(\d{6,})(?:\b|$)/);
  if (!match) return null;
  if (/^0+$/.test(match[1])) return null;
  return match[1];
}
