export const DIRECT_REFERRER = "unknown/direct";

export const WAITLIST_PLACEMENTS = ["hero", "inline", "bottom", "join"] as const;

export type WaitlistPlacement = (typeof WAITLIST_PLACEMENTS)[number];

const MAX_PATH_LENGTH = 128;
const MAX_HOST_LENGTH = 253;

const LANDING_PATH_KEY = "synema_landing_path";
const REFERRER_HOST_KEY = "synema_referrer_host";

const OWN_HOSTS = new Set([
  "synemaapp.com",
  "www.synemaapp.com",
  "localhost",
  "127.0.0.1",
]);

export type SessionAttribution = {
  submissionPath: string;
  landingPath: string;
  referrerHost: string;
};

type AttributionStorage = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
};

export function cleanSubmissionPath(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const path = value.trim();
  if (path.length === 0 || path.length > MAX_PATH_LENGTH) return undefined;
  if (!path.startsWith("/")) return undefined;
  if (
    path.includes("?") ||
    path.includes("#") ||
    path.includes("\\") ||
    path.includes("%") ||
    path.includes("://") ||
    path.includes("//")
  ) {
    return undefined;
  }
  if (!/^\/(?:[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)*)?$/.test(path)) {
    return undefined;
  }
  return path;
}

export function cleanReferrerHost(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const host = value.trim().toLowerCase();
  if (host === DIRECT_REFERRER) return DIRECT_REFERRER;
  if (host.length === 0 || host.length > MAX_HOST_LENGTH) return undefined;
  if (/[/?:#@\\%]/.test(host)) return undefined;
  if (
    !/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(
      host,
    )
  ) {
    return undefined;
  }
  return host;
}

export function cleanPlacement(value: unknown): WaitlistPlacement | undefined {
  if (typeof value !== "string") return undefined;
  return WAITLIST_PLACEMENTS.find((placement) => placement === value);
}

export function referrerHostFromDocument(referrer: string, currentHost: string): string {
  if (!referrer.trim()) return DIRECT_REFERRER;
  let host = "";
  try {
    host = new URL(referrer).hostname.toLowerCase();
  } catch {
    return DIRECT_REFERRER;
  }
  if (!host || host === currentHost.toLowerCase() || OWN_HOSTS.has(host)) {
    return DIRECT_REFERRER;
  }
  return cleanReferrerHost(host) ?? DIRECT_REFERRER;
}

export function readSessionAttribution(
  storage: AttributionStorage,
  pathname: string,
  referrer: string,
  currentHost: string,
): SessionAttribution {
  const submissionPath = cleanSubmissionPath(pathname) ?? "/";
  const storedLanding = storage.getItem(LANDING_PATH_KEY);
  const storedReferrer = storage.getItem(REFERRER_HOST_KEY);

  const landingPath = storedLanding
    ? (cleanSubmissionPath(storedLanding) ?? submissionPath)
    : submissionPath;
  if (!storedLanding) {
    storage.setItem(LANDING_PATH_KEY, landingPath);
  }

  const referrerHost = storedReferrer
    ? (cleanReferrerHost(storedReferrer) ?? DIRECT_REFERRER)
    : referrerHostFromDocument(referrer, currentHost);
  if (!storedReferrer) {
    storage.setItem(REFERRER_HOST_KEY, referrerHost);
  }

  return { submissionPath, landingPath, referrerHost };
}

export function captureAttribution(): SessionAttribution {
  const pathname = window.location.pathname;
  const referrer = document.referrer;
  const host = window.location.hostname;
  try {
    return readSessionAttribution(window.sessionStorage, pathname, referrer, host);
  } catch {
    return {
      submissionPath: cleanSubmissionPath(pathname) ?? "/",
      landingPath: cleanSubmissionPath(pathname) ?? "/",
      referrerHost: referrerHostFromDocument(referrer, host),
    };
  }
}

export function shouldTrackWaitlistSubmit(state: {
  status: string;
  track?: boolean;
}): boolean {
  return state.status === "success" && state.track === true;
}

export function waitlistSubmitEvent(
  state: { status: string; track?: boolean },
  path: unknown,
  placement: unknown,
): { path: string; placement: WaitlistPlacement } | null {
  if (!shouldTrackWaitlistSubmit(state)) return null;
  const cleanPath = cleanSubmissionPath(path);
  const cleanPlace = cleanPlacement(placement);
  if (!cleanPath || !cleanPlace) return null;
  return { path: cleanPath, placement: cleanPlace };
}

export function mergeAttributionProperties(
  existing: { landingPath?: string | null; referrerHost?: string | null } | null,
  incoming: {
    submissionPath?: string;
    landingPath?: string;
    referrerHost?: string;
  },
): Record<string, string> {
  const properties: Record<string, string> = {};
  if (incoming.submissionPath) {
    properties.submissionPath = incoming.submissionPath;
  }
  const existingLanding = existing?.landingPath?.trim() ?? "";
  const existingReferrer = existing?.referrerHost?.trim() ?? "";
  if (!existingLanding && incoming.landingPath) {
    properties.landingPath = incoming.landingPath;
  }
  if (!existingReferrer && incoming.referrerHost) {
    properties.referrerHost = incoming.referrerHost;
  }
  return properties;
}

export function contactAttribution(
  contact: Record<string, unknown> | null,
): { landingPath?: string | null; referrerHost?: string | null } | null {
  if (!contact) return null;
  const landing = contact.landingPath;
  const referrer = contact.referrerHost;
  return {
    landingPath: typeof landing === "string" ? landing : null,
    referrerHost: typeof referrer === "string" ? referrer : null,
  };
}
