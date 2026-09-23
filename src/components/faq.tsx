"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Is Synema free?",
    a: "Downloading Synema is free, and joining a friend's room is free. Hosting a group room needs Synema Pro. You can also swipe on your own without a subscription.",
  },
  {
    q: "How many people can join a room?",
    a: "A room holds up to 5 people. Everyone swipes on their own, and a movie counts when more than half the room likes it. If everyone likes the same one, you get a match right away.",
  },
  {
    q: "Which streaming services are supported?",
    a: "Synema shows where movies are available to stream based on your country — Netflix, Disney+, Prime Video, Max, Apple TV+, and more.",
  },
  {
    q: "When is Synema available?",
    a: (
      <>
        Synema isn&apos;t on the App Store or Google Play yet. Join the waitlist
        and we&apos;ll email you at launch. An invite-only{" "}
        <Link href="/beta-testing" className="font-medium text-primary hover:underline">
          Android beta
        </Link>{" "}
        is open if you want to test early.
      </>
    ),
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-5 py-16 md:px-12 md:py-[5.5rem] lg:px-20">
      <div className="mx-auto max-w-[720px]">
        <h2 className="mb-8 text-center text-[28px] font-bold tracking-tight sm:mb-10 sm:text-[32px]">
          FAQ
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-medium"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-text-secondary transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="border-t border-border px-5 py-4 text-[15px] text-text-secondary">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
