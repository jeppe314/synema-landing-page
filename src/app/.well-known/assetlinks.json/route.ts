import { NextResponse } from "next/server";

export async function GET() {
  // Comma-separated so both the upload key and the Play App Signing key can be
  // listed — Play re-signs the app, so the two differ and both must verify.
  const fingerprints =
    process.env.ANDROID_SHA256_FINGERPRINT?.split(",")
      .map((f) => f.trim())
      .filter(Boolean) ?? [];

  if (fingerprints.length === 0) {
    return new NextResponse("ANDROID_SHA256_FINGERPRINT is not configured", {
      status: 404,
    });
  }

  const body = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.synema.app",
        sha256_cert_fingerprints: fingerprints,
      },
    },
  ];

  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
