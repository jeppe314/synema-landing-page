"use client";

import { motion } from "framer-motion";
import { ScreenshotFrame } from "./screenshot-frame";

const heroScreenshots = [
  {
    src: "/screenshots/create-room.png",
    alt: "Synema create room screen showing With friends and Just me options",
    className:
      "absolute left-0 top-8 hidden -rotate-6 scale-[0.88] opacity-90 md:block",
  },
  {
    src: "/screenshots/swipe-movies.png",
    alt: "Synema swipe screen showing The Dark Knight movie card",
    className: "relative z-10 mx-auto",
    priority: true,
  },
  {
    src: "/screenshots/match.png",
    alt: "Synema swipe screen with a WATCH stamp showing a group match moment",
    className:
      "absolute right-0 top-8 hidden rotate-6 scale-[0.88] opacity-90 md:block",
  },
];

export function Hero() {
  return (
    <section className="bg-cinema px-6 pb-20 pt-12 md:px-12 md:pb-28 md:pt-20 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight sm:text-[44px] lg:text-[64px]">
            Stop scrolling.
            <br />
            <span className="text-gradient">Start watching.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-text-secondary md:text-lg">
            Synema helps you and your friends find the perfect movie by swiping
            together in real time.
          </p>

          <div className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.004 1.004 0 01-.61-.92V2.734a1.004 1.004 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Get it on Google Play
              </a>
              <a
                href="mailto:hello@synemaapp.com?subject=iOS%20Waitlist"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-medium text-text transition-transform hover:scale-[1.02] hover:border-white/20"
              >
                Notify me for iOS
              </a>
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              Android beta available now • iOS coming soon
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] md:max-w-[480px] lg:max-w-[520px]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {heroScreenshots.map((screenshot) => (
              <ScreenshotFrame
                key={screenshot.src}
                src={screenshot.src}
                alt={screenshot.alt}
                priority={screenshot.priority}
                className={screenshot.className}
              />
            ))}
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
