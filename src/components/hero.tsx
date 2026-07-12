"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScreenshotFrame } from "./screenshot-frame";
import { WaitlistForm } from "./waitlist-form";

function DesktopPhoneMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[300px]"
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <ScreenshotFrame
        src="/screenshots/swipe-movies.png"
        alt="Synema swipe screen showing The Dark Knight movie card"
        className="max-w-[300px]"
      />
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-primary/20 blur-3xl" />
    </motion.div>
  );
}

function MobileAppPreview() {
  return (
    <div className="relative px-5 py-12 md:hidden">
      <p className="mb-6 text-center text-sm font-medium tracking-wide text-text-secondary">
        Swipe together. Match instantly.
      </p>
      <div className="relative mx-auto w-full max-w-[min(78vw,330px)]">
        <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-40 rounded-full bg-primary/20 blur-3xl" />
        <motion.div
          className="w-full origin-top motion-safe:[transform:rotate(-2deg)_perspective(900px)_rotateY(-4deg)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <ScreenshotFrame
            src="/screenshots/swipe-movies.png"
            alt="Synema swipe screen showing The Dark Knight movie card"
            priority
            className="max-w-[min(78vw,330px)]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-cinema">
      <div
        id="waitlist"
        className="mx-auto max-w-[1200px] px-5 pt-12 md:grid md:grid-cols-2 md:items-center md:gap-12 md:px-12 md:py-20 md:pt-20 lg:gap-16 lg:px-20 lg:pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[540px]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
            Movie night, solved.
          </p>
          <h1 className="mt-3 text-[clamp(2.625rem,9vw,3.25rem)] font-bold leading-[1.02] tracking-tight md:mt-0 md:text-[44px] md:leading-[1.08] lg:text-[64px]">
            Stop scrolling.
            <br />
            <span className="text-gradient">Start watching.</span>
          </h1>
          <p className="mt-4 text-lg leading-normal text-text-secondary md:mt-6 md:max-w-lg md:text-base md:leading-relaxed lg:text-lg">
            Swipe through movies with friends and find something everyone wants
            to watch.
          </p>

          <div className="mt-6 md:mt-8">
            <WaitlistForm variant="hero" platform="both" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex md:justify-end"
        >
          <DesktopPhoneMockup />
        </motion.div>
      </div>

      <MobileAppPreview />
    </section>
  );
}
