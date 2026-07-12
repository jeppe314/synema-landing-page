import { LoopsClient } from "loops";

export function getLoopsClient() {
  const apiKey = process.env.LOOPS_API_KEY;

  if (!apiKey) {
    throw new Error("LOOPS_API_KEY is not configured");
  }

  return new LoopsClient(apiKey);
}
