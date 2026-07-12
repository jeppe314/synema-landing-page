"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Synema free?",
    a: "Yes! Synema is free to download and use. We may offer optional premium features in the future.",
  },
  {
    q: "How many people can join a room?",
    a: "You can invite as many friends as you like. Everyone swipes independently, and matches happen when everyone likes the same movie.",
  },
  {
    q: "Which streaming services are supported?",
    a: "Synema shows where movies are available to stream based on your country — Netflix, Disney+, Prime Video, Max, Apple TV+, and more.",
  },
  {
    q: "When is Synema available?",
    a: "Synema isn't live yet on iOS or Android. Join the waitlist and we'll email you as soon as it launches.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-5 py-14 sm:px-6 sm:py-20 md:px-12 lg:px-20">
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
