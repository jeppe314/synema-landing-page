"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import {
  PlatformSelector,
  type PlatformChoice,
} from "./platform-selector";

const initialState: WaitlistState = { status: "idle" };

type WaitlistFormProps = {
  project?: string;
  appName?: string;
  platform?: PlatformChoice;
  variant?: "hero" | "compact";
  headline?: string;
};

export function WaitlistForm({
  project = "synema",
  appName = "Synema",
  platform: defaultPlatform = "both",
  variant = "hero",
  headline,
}: WaitlistFormProps) {
  const [platform, setPlatform] = useState<PlatformChoice>(defaultPlatform);
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialState,
  );

  const resolvedHeadline =
    headline ?? `Be first to know when ${appName} launches`;

  if (state.status === "success") {
    return (
      <div
        className="rounded-2xl border border-border bg-card/60 px-4 py-4 md:px-5"
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

  const showHeading = variant !== "compact";

  return (
    <div className={variant === "hero" ? "w-full md:max-w-md" : "w-full"}>
      {showHeading ? (
        <p className="text-sm font-medium text-text">{resolvedHeadline}</p>
      ) : null}

      <form
        action={formAction}
        className={showHeading ? "mt-4 space-y-3 md:mt-5" : "space-y-3"}
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

        <PlatformSelector
          id={`${project}-${variant}`}
          value={platform}
          onChange={setPlatform}
        />

        <div className="space-y-3 md:flex md:flex-row md:items-center md:gap-2.5 md:space-y-0">
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
            disabled={pending}
            className="min-h-[56px] w-full min-w-0 rounded-xl border border-border bg-background-secondary px-4 text-base text-text placeholder:text-text-secondary focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-70 md:min-h-0 md:flex-1 md:rounded-full md:py-3 md:text-sm"
          />
          <button
            type="submit"
            disabled={pending}
            className="inline-flex min-h-[56px] w-full touch-manipulation items-center justify-center rounded-xl bg-gradient-primary px-5 text-base font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 md:min-h-0 md:w-auto md:shrink-0 md:rounded-full md:py-3 md:text-sm"
          >
            {pending ? "Joining..." : "Notify me"}
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
          No spam — just a confirmation now and one email when we launch.{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy policy
          </Link>
        </p>
      </form>
    </div>
  );
}
