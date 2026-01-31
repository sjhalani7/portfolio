import { Hero } from "@/components/home/Hero";
import { NowSection } from "@/components/home/NowSection";
import {
  getGithubSummary,
  getLearningItems,
  getReadingQueue,
} from "@/lib/dataSources";

export default async function HomePage() {
  const [learning, readingQueue, githubSummary] = await Promise.all([
    getLearningItems(),
    getReadingQueue(),
    getGithubSummary(),
  ]);

  return (
    <>
      <Hero />
      <NowSection
        learning={learning}
        readingQueue={readingQueue}
        github={githubSummary}
      />
    </>
  );
}
