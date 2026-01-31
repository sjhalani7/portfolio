import type { ExpandableEntry } from "@/types/experience";

export const researchProjects: ExpandableEntry[] = [
  {
    id: "clickbait-detection",
    title: "Clickbait Detection on Social Platforms",
    organization: "Santa Clara University On-Campus Research",
    timeframe: "Jan 2024 – Jun 2025",
    summary:
      "Research assistantship exploring multi-modal topic modeling (LDA/LSA/BERTopic) and OpenAI embeddings to flag engagement-bait across two social platforms.",
    bullets: [
      "Collaborated with team of 2 to detect clickbait on social media through OpenAI APIs & topic modeling algorithms like LDA",
      "Utilized OpenAI APIs to summarize text columns, transform into vectors using sentenceTransformers library & employ cosine similarity to quantify correlation between the title & transcripts on two different datasets of a total of over 7700 rows",
      "Co-authored research paper detailing significant findings, presented & published at the 2024 IISA conference",
    ],
    tags: ["OpenAI", "LDA", "NLP", "Research"],
    links: [
      {
        label: "IISA 2024 publication",
        href: "https://ieeexplore.ieee.org/document/10786672",
      },
    ],
        media: [
          { src: "/images/research/clickbait.svg", alt: "Clickbait detection visuals" },
        ],
  },
  {
    id: "hate-speech-pagerank",
    title: "Online Hate Speech Spreader Detection",
    organization: "Santa Clara University On-Campus Research",
    timeframe: "Oct 2021 – Jan 2024",
    summary:
      "Led a modified PageRank study that flags high-influence hate speech accounts on social networks.",
    bullets: [
      "Led team of 3 to detect & flag hate speech spreaders on online social networks using Python & libraries like sklearn",
      "Modified Google’s PageRank algorithm to implement graph-based model using adjacency matrices to calculate user influence & measure hate speech spread within user networks, enabling data & network analysis on pre-trained machine learning models",
      "Co-authored research paper detailing significant findings, presented & published at the 2023 International DSML conference",
    ],
    tags: ["Python", "Graph ML", "Sklearn", "Research"],
    links: [
      {
        label: "DSML 2023 paper",
        href: "https://aircconline.com/csit/abstract/v13n19/csit131916.html",
      },
    ],
        media: [
          { src: "/images/research/hate-speech.svg", alt: "Hate speech research" },
        ],
  },
];
