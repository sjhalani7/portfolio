import { NextResponse } from "next/server";
import { heroContent } from "@/data/hero";
import { personalityHighlights } from "@/data/personality";
import { projectSections } from "@/data/projects";
import { githubSummary } from "@/data/githubSummary";
import { learningItems } from "@/data/learning";
import { readingQueue } from "@/data/readingQueue";
import { researchProjects } from "@/data/research";
import { santaClaraLife } from "@/data/santaClara";
import { workExperience } from "@/data/work";

export function GET() {
  const payload = {
    generatedAt: new Date().toISOString(),
    site: {
      owner: heroContent.name,
      focusAreas: heroContent.pills,
      note: heroContent.note,
    },
    hero: {
      kicker: heroContent.kicker,
      name: heroContent.name,
      paragraphs: heroContent.paragraphs,
    },
    now: {
      learning: learningItems,
      readingQueue,
      githubSummary,
      personalityHighlights,
    },
    collections: {
      workExperience,
      projectSections,
      researchProjects,
      santaClaraLife,
    },
  };

  const response = NextResponse.json(payload);
  response.headers.set(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );
  return response;
}
