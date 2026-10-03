import assert from "node:assert/strict";
import test from "node:test";
import {
  DIRECT_REFERRER,
  cleanPlacement,
  cleanReferrerHost,
  cleanSubmissionPath,
  isMissingAttributionPropertyError,
  mergeAttributionProperties,
  readSessionAttribution,
  referrerHostFromDocument,
  shouldTrackWaitlistSubmit,
  waitlistSubmitEvent,
} from "./waitlist-attribution.ts";

test("paths stay pathnames", () => {
  assert.equal(cleanSubmissionPath("/guides/movie-picker-for-couples"), "/guides/movie-picker-for-couples");
  assert.equal(cleanSubmissionPath("/join/AB12"), "/join/AB12");
  assert.equal(cleanSubmissionPath("/"), "/");
  assert.equal(cleanSubmissionPath("/guides/movie-picker-for-couples?utm=1"), undefined);
  assert.equal(cleanSubmissionPath("https://synemaapp.com/guides"), undefined);
  assert.equal(cleanSubmissionPath("/guides/../secret"), undefined);
  assert.equal(cleanSubmissionPath(`/${"a".repeat(200)}`), undefined);
});

test("referrers are hostnames or unknown/direct", () => {
  assert.equal(cleanReferrerHost("Google.com"), "google.com");
  assert.equal(cleanReferrerHost(DIRECT_REFERRER), DIRECT_REFERRER);
  assert.equal(cleanReferrerHost("https://google.com/search?q=movies"), undefined);
  assert.equal(cleanReferrerHost("google.com/search"), undefined);
  assert.equal(
    referrerHostFromDocument("https://www.google.com/search?q=movie+picker", "synemaapp.com"),
    "www.google.com",
  );
  assert.equal(referrerHostFromDocument("", "synemaapp.com"), DIRECT_REFERRER);
  assert.equal(
    referrerHostFromDocument("https://synemaapp.com/guides", "www.synemaapp.com"),
    DIRECT_REFERRER,
  );
  assert.equal(
    referrerHostFromDocument("https://www.synemaapp.com/guides?x=1", "synemaapp.com"),
    DIRECT_REFERRER,
  );
});

test("session attribution keeps the first landing path and referrer", () => {
  const stored = new Map<string, string>();
  const storage = {
    getItem: (key: string) => stored.get(key) ?? null,
    setItem: (key: string, value: string) => stored.set(key, value),
  };
  const first = readSessionAttribution(
    storage,
    "/guides/movie-picker-for-couples",
    "https://www.google.com/search?q=couples",
    "synemaapp.com",
  );
  const second = readSessionAttribution(
    storage,
    "/guides/what-to-watch-tonight",
    "https://news.ycombinator.com/item?id=1",
    "synemaapp.com",
  );
  assert.equal(first.landingPath, "/guides/movie-picker-for-couples");
  assert.equal(first.referrerHost, "www.google.com");
  assert.equal(second.submissionPath, "/guides/what-to-watch-tonight");
  assert.equal(second.landingPath, "/guides/movie-picker-for-couples");
  assert.equal(second.referrerHost, "www.google.com");
});

test("missing referrers are labeled unknown/direct and kept", () => {
  const stored = new Map<string, string>();
  const storage = {
    getItem: (key: string) => stored.get(key) ?? null,
    setItem: (key: string, value: string) => stored.set(key, value),
  };
  const first = readSessionAttribution(storage, "/", "", "synemaapp.com");
  const second = readSessionAttribution(
    storage,
    "/guides",
    "https://www.google.com/search?q=later",
    "synemaapp.com",
  );
  assert.equal(first.referrerHost, DIRECT_REFERRER);
  assert.equal(second.referrerHost, DIRECT_REFERRER);
  assert.equal(second.landingPath, "/");
});

test("first-touch Loops fields are not overwritten", () => {
  const repeat = mergeAttributionProperties(
    { landingPath: "/guides/movie-picker-for-couples", referrerHost: "www.google.com" },
    {
      submissionPath: "/",
      landingPath: "/guides/what-to-watch-tonight",
      referrerHost: "news.ycombinator.com",
    },
  );
  assert.deepEqual(repeat, { submissionPath: "/" });

  const first = mergeAttributionProperties(null, {
    submissionPath: "/guides/movie-picker-for-couples",
    landingPath: "/guides/movie-picker-for-couples",
    referrerHost: DIRECT_REFERRER,
  });
  assert.equal(first.landingPath, "/guides/movie-picker-for-couples");
  assert.equal(first.referrerHost, DIRECT_REFERRER);
});

test("waitlist_submit follows a confirmed success only", () => {
  assert.equal(shouldTrackWaitlistSubmit({ status: "idle" }), false);
  assert.equal(shouldTrackWaitlistSubmit({ status: "error" }), false);
  assert.equal(shouldTrackWaitlistSubmit({ status: "success", track: false }), false);
  assert.equal(shouldTrackWaitlistSubmit({ status: "success", track: true }), true);
  assert.equal(
    waitlistSubmitEvent(
      { status: "error" },
      "/guides/movie-picker-for-couples",
      "inline",
    ),
    null,
  );
  assert.equal(
    waitlistSubmitEvent(
      { status: "success", track: false },
      "/",
      "hero",
    ),
    null,
  );
  assert.deepEqual(
    waitlistSubmitEvent(
      { status: "success", track: true },
      "/guides/movie-picker-for-couples",
      "bottom",
    ),
    { path: "/guides/movie-picker-for-couples", placement: "bottom" },
  );
  assert.equal(
    waitlistSubmitEvent(
      { status: "success", track: true },
      "/guides?utm=newsletter",
      "inline",
    ),
    null,
  );
  assert.equal(cleanPlacement("hero"), "hero");
  assert.equal(cleanPlacement("popup"), undefined);
});

test("Loops retry matches only a missing attribution property", () => {
  for (const name of ["submissionPath", "landingPath", "referrerHost"]) {
    assert.equal(
      isMissingAttributionPropertyError({
        statusCode: 400,
        json: { success: false, message: `The property '${name}' does not exist.` },
      }),
      true,
    );
  }

  assert.equal(
    isMissingAttributionPropertyError({
      statusCode: 400,
      json: { success: false, message: "Invalid email address." },
    }),
    false,
  );
  assert.equal(
    isMissingAttributionPropertyError({
      statusCode: 400,
      json: { success: false, message: "Invalid value for submissionPath." },
    }),
    false,
  );
  assert.equal(
    isMissingAttributionPropertyError({
      statusCode: 500,
      json: {
        success: false,
        message: "The property 'submissionPath' does not exist.",
      },
    }),
    false,
  );
  assert.equal(
    isMissingAttributionPropertyError({
      statusCode: 400,
      message: "400 - The property 'landingPath' does not exist.",
      json: { success: false, message: "Rate limit exceeded for landingPath." },
    }),
    false,
  );
  assert.equal(isMissingAttributionPropertyError(new Error("network down")), false);
});
