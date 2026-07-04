"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    caption: "Discover",
    gradient: "from-[#1a1f3a] via-[#2d1f4e] to-[#1a2f3a]",
    title: "Create your room",
    subtitle: "Pick streaming services, genres & filters",
  },
  {
    caption: "Swipe",
    gradient: "from-[#2d1f4e] via-[#1a2f3a] to-[#1a1f3a]",
    title: "Interstellar",
    subtitle: "2014 · 2h 49m · ★ 8.7",
  },
  {
    caption: "Match",
    gradient: "from-[#1a2f3a] via-[#2d1f4e] to-[#3d1f2e]",
    title: "It's a match!",
    subtitle: "Everyone liked Arrival",
  },
  {
    caption: "Choose",
    gradient: "from-[#2d1f4e] via-[#3d1f2e] to-[#1a1f3a]",
    title: "Top picks",
    subtitle: "Ranked by your group's excitement",
  },
  {
    caption: "Watch",
    gradient: "from-[#1a1f3a] via-[#3d1f2e] to-[#2d1f4e]",
    title: "Watch on Netflix",
    subtitle: "One tap to start movie night",
  },
];

export function Showcase() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex aspect-[16/9] flex-col items-center justify-center bg-gradient-to-br ${slides[current].gradient} p-8 md:p-16`}
            >
              <span className="mb-4 rounded-full border border-border bg-background/50 px-4 py-1 text-sm text-text-secondary">
                {slides[current].caption}
              </span>
              <h3 className="text-2xl font-bold md:text-4xl">{slides[current].title}</h3>
              <p className="mt-2 text-text-secondary">{slides[current].subtitle}</p>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-border bg-background/80 p-2 text-text-secondary transition-colors hover:text-text"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-border bg-background/80 p-2 text-text-secondary transition-colors hover:text-text"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-2 py-4">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-1.5 bg-white/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
