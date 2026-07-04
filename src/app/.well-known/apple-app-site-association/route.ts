import { NextResponse } from "next/server";

export async function GET() {
  const teamId = process.env.APPLE_TEAM_ID?.trim();
  if (!teamId) {
    return new NextResponse("APPLE_TEAM_ID is not configured", { status: 404 });
  }

  const body = {
    applinks: {
      apps: [],
      details: [
        {
          appID: `${teamId}.com.synema.synema`,
          paths: ["/join/*"],
        },
      ],
    },
  };

  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
