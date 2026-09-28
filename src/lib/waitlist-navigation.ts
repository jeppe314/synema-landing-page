import type { MouseEvent } from "react";
import { ANDROID_WAITLIST_HREF } from "@/lib/launch";

const WAITLIST_ID = "android-waitlist";

export function onWaitlistLinkClick(event: MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById(WAITLIST_ID);
  if (!target) return;

  event.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });

  const email = target.querySelector<HTMLInputElement>("input[type='email']");
  window.setTimeout(
    () => email?.focus({ preventScroll: true }),
    reduceMotion ? 0 : 450,
  );

  if (`${window.location.pathname}${window.location.hash}` !== ANDROID_WAITLIST_HREF) {
    window.history.pushState(null, "", ANDROID_WAITLIST_HREF);
  }
}
