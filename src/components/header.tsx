"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
];

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
      className={`sticky top-0 z-50 bg-background/75 backdrop-blur-md transition-[border-color,background-color] duration-200 md:bg-background/80 ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
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
          <a
            href="#waitlist"
            className="hidden min-h-[44px] items-center rounded-full bg-gradient-primary px-3.5 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99] min-[370px]:inline-flex md:hidden"
          >
            Join waitlist
          </a>
          <a
            href="#waitlist"
            className="hidden min-h-[44px] items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Join waitlist
          </a>
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
            <a
              href="#waitlist"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-primary px-5 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Join waitlist
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
