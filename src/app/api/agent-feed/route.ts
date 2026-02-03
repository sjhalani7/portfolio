import { NextResponse } from "next/server";
import { buildAgentFeedPayload } from "@/lib/agentFeed";

export function GET() {
  const payload = buildAgentFeedPayload();

  const response = NextResponse.json(payload);
  response.headers.set(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );
  return response;
}
