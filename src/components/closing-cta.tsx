"use client";

import { SecondaryAction } from "@/components/launch-actions";
import { useDetectedPlatform } from "@/components/platform-provider";
import { StoreBadge } from "@/components/store-badge";
import { WaitlistForm } from "@/components/waitlist-form";
import { COPY, getLaunchActions, launchConfig } from "@/lib/launch";

export function ClosingCta() {
  const platform = useDetectedPlatform();
  const { primary, secondary } = getLaunchActions(platform);
  const androidWaitlist = launchConfig.android.status === "waitlist";

  return (
    <section className="border-t border-border px-5 py-16 md:px-12 md:py-[5.5rem] lg:px-20">
      <div className="mx-auto max-w-[560px] text-center">
        {primary.kind === "android-waitlist" ? (
          <>
            <h2 className="text-[28px] font-bold tracking-tight sm:text-[32px]">
              Synema is coming to Android.
            </h2>
            <div id="android-waitlist" className="mx-auto mt-6 max-w-md text-left">
              <WaitlistForm source="closing" showHeadline={false} />
            </div>
            {secondary ? (
              <div className="mt-4 flex justify-center">
                <SecondaryAction action={secondary} source="closing" />
              </div>
            ) : null}
          </>
        ) : (
          <>
            <h2 className="text-[28px] font-bold tracking-tight sm:text-[32px]">
              Stop scrolling. Start watching.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              {COPY.heroSupport}
            </p>
            <div className="mt-6 flex justify-center">
              <StoreBadge kind={primary.kind} href={primary.href} source="closing" />
            </div>
            {androidWaitlist ? (
              <div
                id="android-waitlist"
                className="mx-auto mt-12 max-w-md rounded-2xl border border-border bg-card/60 px-5 py-5 text-left md:px-6"
              >
                <WaitlistForm
                  source="closing"
                  headline="Synema is coming to Android."
                />
              </div>
            ) : secondary ? (
              <div className="mt-4 flex justify-center">
                <SecondaryAction action={secondary} source="closing" />
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
