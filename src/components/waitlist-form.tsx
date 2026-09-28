"use client";

import { useEffect, useRef, useActionState } from "react";
import Link from "next/link";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { COPY } from "@/lib/launch";
import { trackAndroidWaitlistComplete, trackAndroidWaitlistStart } from "@/lib/track-launch";
import { useDetectedPlatform } from "./platform-provider";

const initialState: WaitlistState = { status: "idle" };

type WaitlistFormProps = {
  source: string;
  headline?: string;
  showHeadline?: boolean;
  onEngage?: () => void;
};

export function WaitlistForm({
  source,
  headline = "Synema is coming to Android.",
  showHeadline = true,
  onEngage,
}: WaitlistFormProps) {
  const platform = useDetectedPlatform();
  const fieldId = `android-${source}`;
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);
  const completed = useRef(false);

  useEffect(() => {
    if (state.status !== "success" || completed.current) return;
    completed.current = true;
    trackAndroidWaitlistComplete(source, platform);
  }, [platform, source, state.status]);

  if (state.status === "success") {
    return (
      <div
        className="rounded-2xl border border-border bg-card/60 px-4 py-4 md:px-5"
        role="status"
      >
        <p className="text-sm font-medium text-text">You&apos;re on the Android waitlist.</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
          Check your inbox — we sent a confirmation email. We&apos;ll let you know
          when Synema launches on Android.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {showHeadline ? (
        <p className="text-sm font-medium text-text">{headline}</p>
      ) : null}

      <form
        action={formAction}
        aria-busy={pending}
        className={showHeadline ? "mt-4 space-y-2.5" : "space-y-2.5"}
        onSubmit={() => {
          trackAndroidWaitlistStart(source, platform);
          onEngage?.();
        }}
      >
        <input type="hidden" name="project" value="synema" />
        <input type="hidden" name="platform" value="android" />
        <input type="hidden" name="appName" value="Synema" />

        <div
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor={`company-${fieldId}`}>Company</label>
          <input
            id={`company-${fieldId}`}
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-2.5">
          <label htmlFor={`email-${fieldId}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${fieldId}`}
            type="email"
            name="email"
            required
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            placeholder="you@example.com"
            disabled={pending}
            onFocus={() => trackAndroidWaitlistStart(source, platform)}
            className="min-h-12 w-full rounded-xl border border-border bg-background-secondary px-4 text-base text-text placeholder:text-text-secondary focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-70"
          />
          <button
            type="submit"
            disabled={pending}
            className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-xl bg-gradient-primary px-5 text-base font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pending ? "Joining…" : COPY.androidWaitlist}
          </button>
        </div>

        <div className="min-h-5" aria-live="polite">
          {state.status === "error" ? (
            <p className="text-sm text-red-400" role="alert">
              {state.message}
            </p>
          ) : null}
        </div>

        <p className="text-xs leading-relaxed text-text-secondary">
          No spam — just a confirmation now and one email when Android launches.{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy policy
          </Link>
        </p>
      </form>
    </div>
  );
}
