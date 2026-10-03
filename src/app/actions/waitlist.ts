"use server";

import { APIError } from "loops";
import { getLoopsClient } from "@/lib/loops";
import {
  cleanReferrerHost,
  cleanSubmissionPath,
  contactAttribution,
  mergeAttributionProperties,
} from "@/lib/waitlist-attribution";

export type WaitlistState =
  | { status: "idle" }
  | { status: "success"; track: false }
  | { status: "success"; track: true; submissionId: string }
  | { status: "error"; message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PLATFORM_LABELS: Record<string, string> = {
  ios: "iOS",
  android: "Android",
  both: "iOS and Android",
};

const ATTRIBUTION_KEYS = ["submissionPath", "landingPath", "referrerHost"] as const;

function normalizeEmail(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().toLowerCase();
}

function getString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function missingAttributionProperty(error: unknown) {
  if (!(error instanceof APIError)) return false;
  const message = error.message.toLowerCase();
  return ATTRIBUTION_KEYS.some((key) => message.includes(key.toLowerCase()));
}

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const honeypot = getString(formData.get("company"));
  if (honeypot) {
    return { status: "success", track: false };
  }

  const email = normalizeEmail(formData.get("email"));
  const project = getString(formData.get("project")) || "synema";
  const platform = getString(formData.get("platform")) || "both";
  const appName = getString(formData.get("appName")) || "Synema";
  const submissionPath = cleanSubmissionPath(formData.get("submissionPath"));
  const landingPath = cleanSubmissionPath(formData.get("landingPath"));
  const referrerHost = cleanReferrerHost(formData.get("referrerHost"));

  if (!email || !EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const confirmationId = process.env.LOOPS_WAITLIST_CONFIRMATION_ID;

  if (!process.env.LOOPS_API_KEY) {
    console.error("Waitlist signup failed: LOOPS_API_KEY is missing");
    return {
      status: "error",
      message: "Waitlist is not configured yet. Please try again later.",
    };
  }

  if (!confirmationId) {
    console.error(
      "Waitlist signup failed: LOOPS_WAITLIST_CONFIRMATION_ID is missing",
    );
    return {
      status: "error",
      message: "Waitlist is not configured yet. Please try again later.",
    };
  }

  try {
    const loops = getLoopsClient();
    const baseProperties = {
      project,
      platform,
      source: "waitlist",
    };

    let existing: { landingPath?: string | null; referrerHost?: string | null } | null =
      null;
    let preserveFirstTouch = false;
    try {
      const contacts = await loops.findContact({ email });
      existing = contactAttribution(contacts[0] ?? null);
    } catch (error) {
      console.error("Waitlist attribution lookup failed:", error);
      preserveFirstTouch = true;
    }

    const attribution = mergeAttributionProperties(existing, {
      submissionPath,
      landingPath: preserveFirstTouch ? undefined : landingPath,
      referrerHost: preserveFirstTouch ? undefined : referrerHost,
    });

    try {
      await loops.updateContact({
        email,
        properties: {
          ...baseProperties,
          ...attribution,
        },
      });
    } catch (error) {
      if (!missingAttributionProperty(error)) throw error;
      console.error(
        "Loops is missing custom contact properties: submissionPath, landingPath, referrerHost. Signup continued without them.",
      );
      await loops.updateContact({
        email,
        properties: baseProperties,
      });
    }

    const emailResponse = await loops.sendTransactionalEmail({
      transactionalId: confirmationId,
      email,
      dataVariables: {
        appName,
        platform: PLATFORM_LABELS[platform] ?? platform,
      },
    });

    if (!emailResponse.success) {
      console.error("Waitlist confirmation email failed:", emailResponse);
      return {
        status: "error",
        message: "Something went wrong. Please try again.",
      };
    }

    return { status: "success", track: true, submissionId: crypto.randomUUID() };
  } catch (error) {
    console.error("Waitlist signup failed:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
