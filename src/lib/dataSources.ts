import { githubSummary } from "@/data/githubSummary";
import { learningItems } from "@/data/learning";
import { readingQueue } from "@/data/readingQueue";
import type {
  GithubSummary,
  LearningItem,
  ReadingQueueItem,
} from "@/types/content";

export async function getLearningItems(): Promise<LearningItem[]> {
  return learningItems;
}

export async function getReadingQueue(): Promise<ReadingQueueItem[]> {
  return readingQueue;
}

export async function getGithubSummary(): Promise<GithubSummary> {
  return githubSummary;
}
