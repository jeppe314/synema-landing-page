"use client";

import { motion } from "framer-motion";
import { Heart, Info, X } from "lucide-react";

export function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="rounded-[2.5rem] border border-border bg-card p-3 shadow-2xl shadow-primary/10">
        <div className="overflow-hidden rounded-[2rem] bg-background-secondary">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2 text-[10px] text-text-secondary">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="h-2 w-3 rounded-sm bg-text-secondary/40" />
              <div className="h-2 w-3 rounded-sm bg-text-secondary/40" />
              <div className="h-2 w-4 rounded-sm bg-text-secondary/60" />
            </div>
          </div>

          {/* Movie card */}
          <div className="relative mx-3 mb-3 overflow-hidden rounded-2xl">
            <div
              className="aspect-[2/3] w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(7,9,20,0.95) 0%, rgba(7,9,20,0.2) 50%, transparent 100%), linear-gradient(135deg, #1a1f3a 0%, #2d1f4e 50%, #1a2f3a 100%)",
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="font-serif text-lg font-bold leading-tight">
                  Interstellar
                </h3>
                <p className="mt-1 text-xs text-text-secondary">
                  2014 · 2h 49m · ★ 8.7
                </p>
                <div className="mt-2 flex gap-1.5">
                  {["N", "P", "A"].map((p) => (
                    <span
                      key={p}
                      className="flex h-5 w-5 items-center justify-center rounded bg-white/10 text-[8px] font-bold"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Swipe actions */}
          <div className="flex items-center justify-center gap-6 px-4 pb-4">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20 text-red-400"
              aria-hidden
            >
              <X size={22} />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-text-secondary"
              aria-hidden
            >
              <Info size={16} />
            </button>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-success/20 text-success"
              aria-hidden
            >
              <Heart size={22} />
            </button>
          </div>

          {/* Progress */}
          <div className="mx-4 mb-4">
            <div className="mb-1 flex justify-between text-[10px] text-text-secondary">
              <span>3 / 9 finished</span>
              <span>Swiping…</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/3 rounded-full bg-gradient-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />
    </motion.div>
  );
}
