"use client";

import { useActionState } from "react";
import Link from "next/link";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initialState: WaitlistState = { status: "idle" };

type WaitlistFormProps = {
  project?: string;
  appName?: string;
  platform?: "ios" | "android" | "both";
  variant?: "hero" | "cta" | "compact";
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
  platform = "ios",
  variant = "hero",
  headline,
}: WaitlistFormProps) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialState,
  );

  const resolvedHeadline =
    headline ?? `Be first to know when ${appName} launches on ${platformLabels[platform]}`;

  if (state.status === "success") {
    return (
      <div
        className={
          variant === "cta"
            ? "rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-left"
            : "rounded-2xl border border-border bg-card/60 px-5 py-4"
        }
        role="status"
      >
        <p
          className={
            variant === "cta"
              ? "text-sm font-medium text-white"
              : "text-sm font-medium text-text"
          }
        >
          You&apos;re on the list!
        </p>
        <p
          className={
            variant === "cta"
              ? "mt-1 text-sm text-white/75"
              : "mt-1 text-sm text-text-secondary"
          }
        >
          Check your inbox — we sent a confirmation email. We&apos;ll notify you
          when {appName} launches.
        </p>
      </div>
    );
  }

  const inputClassName =
    variant === "cta"
      ? "min-w-0 flex-1 rounded-full border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white/50 focus:outline-none"
      : "min-w-0 flex-1 rounded-full border border-border bg-background-secondary px-4 py-3 text-sm text-text placeholder:text-text-secondary focus:border-primary/50 focus:outline-none";

  const buttonClassName =
    variant === "cta"
      ? "inline-flex shrink-0 items-center justify-center rounded-full border border-white/30 bg-white px-5 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
      : "inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-text transition-transform hover:scale-[1.02] hover:border-white/20 disabled:cursor-not-allowed disabled:opacity-70";

  const helperClassName =
    variant === "cta"
      ? "text-xs text-white/70"
      : "text-xs text-text-secondary";

  return (
    <div className={variant === "compact" ? "w-full" : "w-full max-w-md"}>
      {variant !== "compact" ? (
        <p
          className={
            variant === "cta"
              ? "text-sm font-medium text-white/90"
              : "text-sm font-medium text-text"
          }
        >
          {resolvedHeadline}
        </p>
      ) : null}

      <form
        action={formAction}
        className={variant === "compact" ? "mt-0 space-y-3" : "mt-3 space-y-3"}
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

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
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
          <Link
            href="/privacy"
            className={
              variant === "cta"
                ? "underline underline-offset-2 hover:text-white"
                : "text-primary hover:underline"
            }
          >
            Privacy policy
          </Link>
        </p>
      </form>
    </div>
  );
}
