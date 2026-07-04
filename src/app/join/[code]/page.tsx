import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JoinRoomClient } from "./join-room-client";

interface JoinPageProps {
  params: Promise<{ code: string }>;
}

function normalizeCode(raw: string): string | null {
  const code = raw.trim().toUpperCase();
  if (!/^[A-Z0-9]{3,12}$/.test(code)) return null;
  return code;
}

export async function generateMetadata({ params }: JoinPageProps): Promise<Metadata> {
  const { code: raw } = await params;
  const code = normalizeCode(raw);
  return {
    title: code ? `Join room ${code} – Synema` : "Join room – Synema",
    description: "Open this movie-night invite in Synema.",
    robots: { index: false, follow: false },
  };
}

export default async function JoinPage({ params }: JoinPageProps) {
  const { code: raw } = await params;
  const code = normalizeCode(raw);
  if (!code) notFound();

  return <JoinRoomClient code={code} />;
}
