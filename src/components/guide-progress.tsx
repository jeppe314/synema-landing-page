"use client";

import { useEffect, useRef } from "react";

export function GuideProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = article.getBoundingClientRect();
        const start = rect.top + window.scrollY;
        const end = start + rect.height - window.innerHeight;
        const progress =
          end <= start
            ? 1
            : Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));

        if (fillRef.current) {
          fillRef.current.style.transform = `scaleX(${progress})`;
        }
        barRef.current?.setAttribute(
          "aria-valuenow",
          String(Math.round(progress * 100)),
        );
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="pointer-events-none fixed inset-x-0 z-40 h-[3px] bg-white/10"
      style={{ top: "var(--header-height)" }}
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
    >
      <div
        ref={fillRef}
        className="h-full w-full origin-left bg-gradient-primary"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
