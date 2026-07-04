import { NextResponse } from "next/server";

export async function GET() {
  const fingerprint = process.env.ANDROID_SHA256_FINGERPRINT?.trim();
  if (!fingerprint) {
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
        sha256_cert_fingerprints: [fingerprint],
      },
    },
  ];

  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
