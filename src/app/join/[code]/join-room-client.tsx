"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface JoinRoomClientProps {
  code: string;
}

export function JoinRoomClient({ code }: JoinRoomClientProps) {
  const [triedOpen, setTriedOpen] = useState(false);
  const appUrl = `synema://join/${encodeURIComponent(code)}`;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = appUrl;
      setTriedOpen(true);
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

        {triedOpen ? (
          <p className="mt-4 text-sm text-text-secondary">
            App didn&apos;t open? Tap the button above or install Synema below.
          </p>
        ) : null}

        <div className="mt-8 flex flex-col gap-3">
          <a
            href="/#download"
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-medium text-text transition-colors hover:border-white/20"
          >
            Get Synema on Google Play
          </a>
          <a
            href="mailto:hello@synemaapp.com?subject=iOS%20Waitlist"
            className="text-sm text-text-secondary transition-colors hover:text-text"
          >
            Notify me for iOS
          </a>
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
