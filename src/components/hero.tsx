"use client";

import { motion } from "framer-motion";
import { ScreenshotFrame } from "./screenshot-frame";
import { WaitlistForm } from "./waitlist-form";

function PhoneMockup({ priority = false }: { priority?: boolean }) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <ScreenshotFrame
        src="/screenshots/swipe-movies.png"
        alt="Synema swipe screen showing The Dark Knight movie card"
        priority={priority}
      />
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-primary/25 blur-3xl" />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="bg-cinema">
      {/* Mobile: full-viewport phone hero */}
      <div className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 pt-14 lg:hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(124,77,255,0.18),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full"
        >
          <PhoneMockup priority />
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      {/* Waitlist section — below phone on mobile, left column on desktop */}
      <div
        id="waitlist"
        className="border-t border-border/60 bg-cinema px-5 py-12 sm:px-6 sm:py-16 md:px-12 lg:border-t-0 lg:py-20 lg:pb-28 lg:pt-20 xl:px-20"
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[32px] font-bold leading-[1.08] tracking-tight sm:text-[44px] lg:text-[64px]">
              Stop scrolling.
              <br />
              <span className="text-gradient">Start watching.</span>
            </h1>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-text-secondary sm:mt-6 sm:text-base md:text-lg">
              Synema helps you and your friends find the perfect movie by swiping
              together in real time.
            </p>

            <div className="mt-8">
              <WaitlistForm variant="hero" platform="both" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden justify-center lg:flex lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
