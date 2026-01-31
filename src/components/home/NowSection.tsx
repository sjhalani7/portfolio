import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PanelCard } from "@/components/ui/PanelCard";
import { Pill } from "@/components/ui/Pill";
import { formatUpdatedDate } from "@/lib/dates";
import { personalityHighlights } from "@/data/personality";
import type {
  GithubSummary,
  LearningItem,
  ReadingQueueItem,
} from "@/types/content";
import styles from "./NowSection.module.css";

interface NowSectionProps {
  learning: LearningItem[];
  readingQueue: ReadingQueueItem[];
  github: GithubSummary;
}

const STATUS_LABELS: Record<ReadingQueueItem["status"], string> = {
  queued: "Queued",
  in_progress: "In progress",
  finished: "Finished",
};

function formatStatus(status: ReadingQueueItem["status"]) {
  return STATUS_LABELS[status] ?? status;
}

export function NowSection({ learning, readingQueue, github }: NowSectionProps) {
  const learningItems = learning.slice(0, 6);
  const readingItems = readingQueue.slice(0, 8);

  const githubCards = [
    {
      title: "Coding Patterns",
      fields: [
        { label: "Most active hour", value: github.mostActiveHour },
        { label: "Languages lately", value: github.languages },
        { label: "Focus", value: github.focus },
      ],
    },
    {
      title: "This Site",
      fields: [
        { label: "Last updated", value: github.siteLastUpdated },
        { label: "Last major change", value: github.siteLastChange },
      ],
    },
  ];

  return (
    <Section id="now" className={styles.section} variant="tight">
      <Container>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div>
              <div className={styles.sectionTitleRow}>
                <p className={styles.sectionTitle}>What I’m Learning</p>
                <span className={styles.sectionNote}>
                  * Shiv edits a JSON file whenever new focus areas rotate in.
                </span>
              </div>
              <div className={styles.learningGrid}>
                {learningItems.map((item) => (
                  <PanelCard key={item.id}>
                    <div className={styles.learningCardTitle}>{item.title}</div>
                    <p className={styles.learningSummary}>{item.summary}</p>
                    {item.note ? (
                      <p className={styles.learningNote}>{item.note}</p>
                    ) : null}
                    <div className={styles.learningMeta}>
                      <Pill dense className={styles.tagPill}>
                        {item.tag}
                      </Pill>
                      <span>Updated {formatUpdatedDate(item.updatedAtISO)}</span>
                    </div>
                  </PanelCard>
                ))}
              </div>
            </div>
            <div>
              <div className={styles.sectionTitleRow}>
                <p className={styles.sectionTitle}>Reading / Watching</p>
                <span className={styles.sectionNote}>
                  * Shiv edits a simple list whenever the queue changes.
                </span>
              </div>
              <ul className={styles.readingList}>
                {readingItems.map((item) => (
                  <li key={item.id} className={styles.readingItem}>
                    <span className={styles.readingBullet}>•</span>
                    <div>
                      <div>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noreferrer noopener">
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </div>
                      <div className={styles.readingMeta}>
                        <span>{item.kind}</span>
                        {item.authorOrSource ? (
                          <span> · {item.authorOrSource}</span>
                        ) : null}
                        <span>
                          {" "}· {formatStatus(item.status)}
                        </span>
                      </div>
                      {item.note ? (
                        <div className={styles.readingNote}>{item.note}</div>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.sectionTitleRow}>
              <p className={styles.sectionTitle}>GitHub Snapshot</p>
              <span className={styles.sectionNote}>
                * Auto-refreshed daily by a GitHub Action that runs <code>npm run update:github-summary</code>.
              </span>
            </div>
            {githubCards.map((card) => (
              <PanelCard key={card.title}>
                <div className={styles.githubCardTitle}>{card.title}</div>
                {card.fields.map((field) => (
                  <div key={field.label} className={styles.githubField}>
                    <span className={styles.githubLabel}>{field.label}</span>
                    <span className={styles.githubValue}>{field.value}</span>
                  </div>
                ))}
              </PanelCard>
            ))}
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.personalitySection}>
          <p className={styles.sectionTitle}>Beyond the Screen</p>
          <div className={styles.personalityGrid}>
            {personalityHighlights.map((item) => (
              <PanelCard key={item.id} className={styles.personalityCard}>
                <div className={styles.personalityMedia}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={600}
                    height={400}
                    className={styles.personalityImage}
                    sizes="(max-width: 900px) 100vw, 320px"
                  />
                </div>
                <div>
                  <p className={styles.personalityTitle}>{item.title}</p>
                  <p className={styles.personalityDescription}>{item.description}</p>
                  <p className={styles.personalityDetails}>{item.details}</p>
                </div>
              </PanelCard>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
