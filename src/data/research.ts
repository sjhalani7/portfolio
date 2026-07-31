import type { ExpandableEntry } from "@/types/experience";

export const researchProjects: ExpandableEntry[] = [
  {
    id: "chatgpt-mental-health-sentiment-analysis",
    title: "ChatGPT Mental Health Support Sentiment Analysis",
    organization: "Santa Clara University On-Campus Research",
    timeframe: "Dec 2025",
    summary:
      "Co-authored ASONAM 2025 conference paper studying how people use ChatGPT for emotional and mental health support by mining social-network conversations with relevance classification and sentiment analysis.",
    bullets: [
      "Analyzed user-generated social-network content to quantify public sentiment toward ChatGPT in emotionally sensitive and therapeutic contexts",
      "Introduced SemReC, a supervised relevance classification method, and PASS, an unsupervised similarity-based approach, to identify posts suggesting therapeutic use of ChatGPT",
      "Modeled affective sentiment propagation in threaded conversations with HierSent and AggSent, tree-structured methods for multi-turn social discussions",
      "Co-authored Springer conference paper accepted to ASONAM 2025 and published in Lecture Notes in Social Networks; credited with equal contribution",
    ],
    tags: ["LLMs", "Sentiment Analysis", "Social Media Mining", "Research"],
    links: [
      {
        label: "ASONAM 2025 Springer paper",
        href: "https://link.springer.com/chapter/10.1007/978-3-032-13509-4_11",
      },
    ],
    media: [
      {
        src: "/images/research/chatgpt-mental-health.svg",
        alt: "ChatGPT mental health sentiment analysis visuals",
      },
    ],
  },
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
