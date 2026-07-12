"use server";

import { getLoopsClient } from "@/lib/loops";

export type WaitlistState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PLATFORM_LABELS: Record<string, string> = {
  ios: "iOS",
  android: "Android",
  both: "iOS and Android",
};

function normalizeEmail(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().toLowerCase();
}

function getString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const honeypot = getString(formData.get("company"));
  if (honeypot) {
    return { status: "success" };
  }

  const email = normalizeEmail(formData.get("email"));
  const project = getString(formData.get("project")) || "synema";
  const platform = getString(formData.get("platform")) || "both";
  const appName = getString(formData.get("appName")) || "Synema";

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

    await loops.updateContact({
      email,
      properties: {
        project,
        platform,
        source: "waitlist",
      },
    });

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

    return { status: "success" };
  } catch (error) {
    console.error("Waitlist signup failed:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
