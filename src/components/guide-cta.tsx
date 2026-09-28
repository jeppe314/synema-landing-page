"use client";

import { track } from "@vercel/analytics";
import { AnalyticsEvent } from "@/lib/analytics-events";
import { LaunchActions } from "./launch-actions";

type GuideCtaProps = {
  slug: string;
  position: "inline" | "bottom";
  body: string;
  kicker?: string;
  title?: string;
};

export function GuideCta({ slug, position, body, kicker, title }: GuideCtaProps) {
  const onAction = () => {
    track(AnalyticsEvent.guideCtaClick, { guide_slug: slug, position });
  };

  const actions = (
    <LaunchActions
      source={position === "inline" ? "guide-inline" : "guide-bottom"}
      embedWaitlist
      showWaitlistHeadline
      waitlistHeadline="Synema is coming to Android."
      onAction={onAction}
    />
  );

  if (position === "inline") {
    return (
      <aside
        aria-label="Get Synema"
        className="mt-10 rounded-2xl border border-border bg-card px-5 py-5 md:px-6"
      >
        <p className="text-base leading-7 text-text-secondary">{body}</p>
        <div className="mt-5">{actions}</div>
      </aside>
    );
  }

  return (
    <section
      aria-labelledby={`guide-cta-${slug}`}
      className="mt-14 rounded-2xl border border-border bg-background-secondary px-5 py-8 md:px-8"
    >
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
          {kicker}
        </p>
      ) : null}
      {title ? (
        <h2
          id={`guide-cta-${slug}`}
          className="mt-3 text-2xl font-bold tracking-tight text-pretty"
        >
          {title}
        </h2>
      ) : null}
      <p className="mt-3 text-base leading-7 text-text-secondary">{body}</p>
      <div className="mt-6">{actions}</div>
    </section>
  );
}
