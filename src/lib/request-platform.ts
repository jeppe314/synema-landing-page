import { headers } from "next/headers";
import { detectPlatform, type DetectedPlatform } from "@/lib/detect-platform";

export async function getRequestPlatform(): Promise<DetectedPlatform> {
  const headerList = await headers();
  return detectPlatform(headerList.get("user-agent"));
}
