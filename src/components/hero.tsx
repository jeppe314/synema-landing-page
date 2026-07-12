"use client";

import { motion } from "framer-motion";
import { ScreenshotFrame } from "./screenshot-frame";
import { WaitlistForm } from "./waitlist-form";

export function Hero() {
  return (
    <section id="waitlist" className="bg-cinema px-5 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 md:px-12 md:pb-28 md:pt-20 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1"
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

          <div className="mt-6 sm:mt-8">
            <WaitlistForm variant="hero" platform="both" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-2 flex justify-center lg:justify-end"
        >
          <motion.div
            className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ScreenshotFrame
              src="/screenshots/swipe-movies.png"
              alt="Synema swipe screen showing The Dark Knight movie card"
              priority
            />
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
