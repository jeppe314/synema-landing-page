"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WaitlistLink } from "@/components/launch-actions";
import { useDetectedPlatform } from "@/components/platform-provider";
import { COPY, getLaunchActions } from "@/lib/launch";
import { trackAppStoreClick, trackPlayStoreClick } from "@/lib/track-launch";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
];

const compactClass =
  "hidden min-h-11 items-center rounded-full bg-gradient-primary px-3.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-[370px]:inline-flex md:hidden";

const desktopClass =
  "hidden min-h-11 items-center rounded-full bg-gradient-primary px-5 text-sm font-medium text-white transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex";

const menuClass =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-primary px-5 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70";

function HeaderLaunchCta({
  appearance,
  onNavigate,
}: {
  appearance: "compact" | "desktop" | "menu";
  onNavigate?: () => void;
}) {
  const platform = useDetectedPlatform();
  const { primary } = getLaunchActions(platform);
  const className =
    appearance === "compact" ? compactClass : appearance === "desktop" ? desktopClass : menuClass;

  const label =
    primary.kind === "android-waitlist"
      ? appearance === "compact"
        ? "Android waitlist"
        : COPY.androidWaitlist
      : primary.kind === "app-store"
        ? appearance === "menu"
          ? COPY.appStore
          : "App Store"
        : appearance === "menu"
          ? COPY.playStore
          : "Google Play";

  const ariaLabel =
    primary.kind === "android-waitlist"
      ? COPY.androidWaitlist
      : primary.kind === "app-store"
        ? COPY.appStore
        : COPY.playStore;

  if (primary.kind === "android-waitlist") {
    return (
      <WaitlistLink
        source="header"
        className={className}
        ariaLabel={ariaLabel}
        onNavigate={onNavigate}
      >
        {label}
      </WaitlistLink>
    );
  }

  return (
    <a
      href={primary.href}
      aria-label={ariaLabel}
      className={className}
      onClick={() => {
        onNavigate?.();
        if (primary.kind === "app-store") trackAppStoreClick("header", platform);
        else trackPlayStoreClick("header", platform);
      }}
    >
      {label}
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[border-color,background-color,backdrop-filter] duration-200 ${
        scrolled
          ? "border-border bg-background/75 backdrop-blur-md md:bg-background/80"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-3 px-5 md:h-16 md:px-12 lg:px-20">
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tight">
          Synema
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
          <HeaderLaunchCta appearance="compact" />
          <HeaderLaunchCta appearance="desktop" />
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-text-secondary hover:text-text md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background-secondary/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <HeaderLaunchCta appearance="menu" onNavigate={() => setOpen(false)} />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
