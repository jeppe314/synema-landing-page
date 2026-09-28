"use client";

import { useEffect } from "react";
import Link from "next/link";
import { LaunchActions, StoreTextLink, WaitlistLink } from "@/components/launch-actions";
import { useDetectedPlatform } from "@/components/platform-provider";
import { launchConfig } from "@/lib/launch";

interface JoinRoomClientProps {
  code: string;
}

export function JoinRoomClient({ code }: JoinRoomClientProps) {
  const platform = useDetectedPlatform();
  const appUrl = `synema://join/${encodeURIComponent(code)}`;
  const androidWaitlist = launchConfig.android.status === "waitlist";

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = appUrl;
    }, 250);
    return () => window.clearTimeout(timer);
  }, [appUrl]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 md:py-28">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
          Movie night invite
        </p>
        <h1 className="mt-4 text-[32px] font-bold tracking-tight">Join the room</h1>
        <p className="mt-3 text-text-secondary">
          Someone shared a Synema room with you. Open the app to jump in and start
          swiping together.
        </p>

        <div
          className="mt-8 rounded-2xl border border-border bg-background-secondary px-6 py-5"
          aria-label={`Room code ${code}`}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-text-secondary">
            Room code
          </p>
          <p className="mt-2 font-mono text-[28px] font-bold tracking-[0.35em] text-gradient">
            {code}
          </p>
        </div>

        <a
          href={appUrl}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          Open in Synema
        </a>

        <div className="mt-8 border-t border-border pt-6 text-left">
          {platform === "android" && androidWaitlist ? (
            <>
              <p className="text-center text-sm text-text-secondary">
                Synema is coming to Android.
              </p>
              <div className="mt-4">
                <LaunchActions source="join" embedWaitlist align="center" showSecondary={false} />
              </div>
              {launchConfig.ios.status === "available" ? (
                <p className="mt-4 text-center text-sm text-text-secondary">
                  <StoreTextLink
                    kind="app-store"
                    href={launchConfig.ios.storeUrl}
                    source="join"
                    className="font-medium text-text-secondary underline-offset-4 hover:text-text hover:underline"
                  >
                    Already available on iPhone →
                  </StoreTextLink>
                </p>
              ) : null}
            </>
          ) : platform === "android" && launchConfig.android.status === "available" ? (
            <p className="text-center text-sm leading-relaxed text-text-secondary">
              Don&apos;t have the app yet?{" "}
              <StoreTextLink
                kind="play-store"
                href={launchConfig.android.storeUrl}
                source="join"
                className="font-medium text-text underline-offset-4 hover:underline"
              >
                Get it on Google Play
              </StoreTextLink>
              .
            </p>
          ) : (
            <p className="text-center text-sm leading-relaxed text-text-secondary">
              Don&apos;t have the app yet?{" "}
              {launchConfig.ios.status === "available" ? (
                <StoreTextLink
                  kind="app-store"
                  href={launchConfig.ios.storeUrl}
                  source="join"
                  className="font-medium text-text underline-offset-4 hover:underline"
                >
                  Download on the App Store
                </StoreTextLink>
              ) : null}
              {launchConfig.android.status === "available" ? (
                <>
                  {" "}
                  or{" "}
                  <StoreTextLink
                    kind="play-store"
                    href={launchConfig.android.storeUrl}
                    source="join"
                    className="font-medium text-text underline-offset-4 hover:underline"
                  >
                    get it on Google Play
                  </StoreTextLink>
                </>
              ) : androidWaitlist ? (
                <>
                  {" "}
                  or{" "}
                  <WaitlistLink
                    source="join"
                    className="font-medium text-text underline-offset-4 hover:underline"
                  >
                    join the Android waitlist
                  </WaitlistLink>
                </>
              ) : null}
              .
            </p>
          )}
        </div>

        <Link
          href="/"
          className="mt-8 inline-block text-sm text-text-secondary transition-colors hover:text-text"
        >
          ← Back to synemaapp.com
        </Link>
      </div>
    </main>
  );
}
