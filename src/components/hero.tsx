"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "./phone-mockup";

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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
