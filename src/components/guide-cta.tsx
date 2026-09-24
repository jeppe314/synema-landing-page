"use client";

import { track } from "@vercel/analytics";
import { WaitlistForm } from "./waitlist-form";

type GuideCtaProps = {
  slug: string;
  position: "inline" | "bottom";
  body: string;
  kicker?: string;
  title?: string;
};

export function GuideCta({ slug, position, body, kicker, title }: GuideCtaProps) {
  const onCtaClick = () => {
    track("guide_cta_click", { guide_slug: slug, position });
  };

  if (position === "inline") {
    return (
      <aside
        aria-label="Try Synema"
        className="mt-10 rounded-2xl border border-border bg-card px-5 py-5 md:px-6"
      >
        <p className="text-base leading-7 text-text-secondary">{body}</p>
        <div className="mt-5">
          <WaitlistForm
            variant="compact"
            instanceId={`guide-${slug}-inline`}
            onCtaClick={onCtaClick}
          />
        </div>
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
      <div className="mt-6">
        <WaitlistForm
          variant="compact"
          instanceId={`guide-${slug}-bottom`}
          onCtaClick={onCtaClick}
        />
      </div>
    </section>
  );
}
