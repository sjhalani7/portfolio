export interface LearningItem {
  id: string;
  title: string;
  summary: string;
  tag: string;
  updatedAtISO: string;
  link?: string;
  note?: string;
}

export interface ReadingQueueItem {
  id: string;
  title: string;
  kind: "book" | "paper" | "video" | "article" | "course" | "podcast";
  authorOrSource?: string;
  status: "queued" | "in_progress" | "finished";
  link?: string;
  note?: string;
}

export interface GithubSummary {
  mostActiveHour: string;
  languages: string;
  focus: string;
  siteLastUpdated: string;
  siteLastChange: string;
}
