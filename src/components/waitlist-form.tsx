"use client";

import { useActionState } from "react";
import Link from "next/link";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { PlatformBadges } from "./platform-badges";

const initialState: WaitlistState = { status: "idle" };

type WaitlistFormProps = {
  project?: string;
  appName?: string;
  platform?: "ios" | "android" | "both";
  variant?: "hero" | "compact";
  headline?: string;
};

const platformLabels = {
  ios: "iOS",
  android: "Android",
  both: "iOS and Android",
} as const;

export function WaitlistForm({
  project = "synema",
  appName = "Synema",
  platform = "both",
  variant = "hero",
  headline,
}: WaitlistFormProps) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialState,
  );

  const resolvedHeadline =
    headline ??
    (platform === "both"
      ? `Be first to know when ${appName} launches`
      : `Be first to know when ${appName} launches on ${platformLabels[platform]}`);

  if (state.status === "success") {
    return (
      <div
        className="rounded-2xl border border-border bg-card/60 px-4 py-4 sm:px-5"
        role="status"
      >
        <p className="text-sm font-medium text-text">You&apos;re on the list!</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
          Check your inbox — we sent a confirmation email. We&apos;ll notify you
          when {appName} launches.
        </p>
      </div>
    );
  }

  const inputClassName =
    "min-w-0 w-full rounded-xl border border-border bg-background-secondary px-4 py-3.5 text-base text-text placeholder:text-text-secondary focus:border-primary/50 focus:outline-none sm:rounded-full sm:py-3 sm:text-sm";

  const buttonClassName =
    "inline-flex w-full shrink-0 touch-manipulation items-center justify-center rounded-xl bg-gradient-primary px-5 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:rounded-full sm:py-3 sm:text-sm";

  const helperClassName = "text-xs leading-relaxed text-text-secondary";

  const containerClassName =
    variant === "hero"
      ? "w-full sm:max-w-md"
      : variant === "compact"
        ? "w-full"
        : "w-full max-w-md";

  return (
    <div className={containerClassName}>
      {variant === "compact" && platform === "both" ? (
        <PlatformBadges className="mb-3" />
      ) : null}

      {variant !== "compact" ? (
        <div className="space-y-3">
          <p className="text-[15px] font-medium leading-snug text-text sm:text-sm">
            {resolvedHeadline}
          </p>
          {platform === "both" ? <PlatformBadges /> : null}
        </div>
      ) : null}

      <form
        action={formAction}
        className={variant === "compact" ? "mt-0 space-y-3" : "mt-5 space-y-3 sm:mt-4"}
      >
        <input type="hidden" name="project" value={project} />
        <input type="hidden" name="platform" value={platform} />
        <input type="hidden" name="appName" value={appName} />

        <div
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor={`company-${project}-${variant}`}>Company</label>
          <input
            id={`company-${project}-${variant}`}
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <label htmlFor={`email-${project}-${variant}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${project}-${variant}`}
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClassName}
            disabled={pending}
          />
          <button type="submit" className={buttonClassName} disabled={pending}>
            {pending ? "Joining..." : "Notify me"}
          </button>
        </div>

        {state.status === "error" ? (
          <p className="text-sm text-red-400" role="alert">
            {state.message}
          </p>
        ) : null}

        <p className={helperClassName}>
          No spam — just a confirmation now and one email when we launch.{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy policy
          </Link>
        </p>
      </form>
    </div>
  );
}
