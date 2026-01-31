import type { ExpandableEntry } from "@/types/experience";

export const workExperience: ExpandableEntry[] = [
  {
    id: "inrix-backend-2025",
    title: "Backend Software Engineer",
    organization: "INRIX",
    timeframe: "Aug 2025 – Present",
    summary:
      "Delivering mobility data solutions across high-performance Python, Java, and AWS services. INRIX is a Seattle-area mobility data company powering traffic analytics and safety products for cities and automakers.",
    bullets: [
      "Develop & optimize high-performance APIs & software solutions using Python, Java, and AWS to deliver mobility data solutions",
      "Architect & integrate scalable data processing workflows to enable new customer-facing features while maintaining existing systems with focus on clean code & CI/CD best practices, while maintaining cost efficiency across cloud-native environments",
    ],
    tags: ["Python", "Java", "AWS", "APIs", "CI/CD"],
    media: [
      {
        src: "/images/INRIXlogo.png",
        alt: "INRIX logo",
        variant: "logo",
      },
    ],
    links: [
      {
        label: "Talk about my work at INRIX so far",
        href: "https://example.com/work/inrix-backend",
      },
    ],
  },
  {
    id: "inrix-intern-2024",
    title: "Backend Software Engineering Intern",
    organization: "INRIX",
    timeframe: "Jun 2024 – Sep 2024",
    location: "Kirkland, WA / Hybrid",
    summary:
      "Focused on SafetyView API efficiency and modernization across Python/Java services. INRIX builds transportation intelligence tools used by governments, OEMs, and mapping partners.",
    bullets: [
      "Enhanced efficiency of customer-facing API using Python, Java, & AWS technologies, cutting costs by 30%-90%",
      "Upgraded legacy code to modern versions to improve performance & maintainability while ensuring backward compatibility",
    ],
    tags: ["Java", "Python", "AWS", "Serverless", "Optimization"],
    media: [
      {
        src: "/images/INRIXlogo.png",
        alt: "INRIX brand artwork",
        variant: "logo",
      },
    ],
    links: [
      {
        label: "Talk about my time at INRIX (Summer 2024)",
        href: "mailto:shivjhalani@gmail.com?subject=SafetyView%20pipeline%20details",
      },
    ],
  },
  {
    id: "inrix-intern-2023",
    title: "Software Engineering Intern",
    organization: "INRIX",
    timeframe: "Jun 2023 – Sep 2023",
    summary:
      "Automated SafetyView data pipelines and rallied a global hackathon team during Innovation Week. INRIX is one of the longest-running traffic intelligence providers, ingesting global mobility data streams.",
    bullets: [
      "Implemented automated multithreaded data ingestion pipeline for an internal tool using Java, Python, & AWS technologies",
      "Mitigated error-prone data update process, improved efficiency by 20%, deployed code to production & tested in CI/CD pipeline",
      "Led 11-member team to final round of company-wide hackathon, through global cross-team collaboration & project management",
    ],
    tags: ["Java", "Python", "AWS", "Automation"],
    media: [
      {
        src: "/images/INRIXlogo.png",
        alt: "INRIX brand artwork",
        variant: "logo",
      },
    ],
    links: [
      {
        label: "Talk about my time at INRIX (Summer 2023)",
        href: "https://example.com/work/inrix-intern-2023",
      },
    ],
  },
  {
    id: "ey-data-science",
    title: "Data Science Intern",
    organization: "Ernst & Young",
    timeframe: "Jun 2022 – Aug 2022",
    location: "San Jose, CA",
    summary:
      "Designed a voice-enabled analytics dashboard that translates natural language into SQL queries so CXO teams can self-serve insights. EY is a Big Four consulting + audit firm where I worked inside their data & AI group.",
    bullets: [
      "Used spaCy, pandas, sent2vec, and matplotlib to interpret voice commands, generate SQL, and visualize dashboards automatically.",
      "Owned the project end-to-end: scoping requirements, prototyping NLP intents, and presenting the deliverable to leadership.",
      "Documented deployment + usage practices so other teams can build on the foundation for future analytics tools.",
    ],
    tags: ["Python", "spaCy", "pandas", "Data Viz", "NLP"],
    media: [
      {
        src: "/images/ey.png",
        alt: "EY dashboard concept artwork",
        variant: "logo",
      },
    ],
    links: [
      {
        label: "Talk about my time at EY",
        href: "mailto:shivjhalani@gmail.com?subject=EY%20dashboard",
      },
    ],
  },
  {
    id: "ntt-summer",
    title: "Summer Intern",
    organization: "NTT Data Services",
    timeframe: "Jun 2019 – Jun 2019",
    location: "Plano, TX",
    summary:
      "First exposure to professional data science: explored pandas/numpy/sklearn to understand how ML pipelines come together. NTT Data Services is a global IT services company that pairs enterprise clients with engineering teams.",
    bullets: [
      "Built small ML experiments that combined statistical analysis, feature engineering, and model evaluation.",
      "Learned how production teams review code, communicate blockers, and share knowledge — a catalyst for pursuing CS at SCU.",
    ],
    tags: ["Python", "pandas", "numpy", "sklearn"],
    media: [
      {
        src: "/images/ntt.png",
        alt: "NTT Data internship artwork",
        variant: "logo",
      },
    ],
    links: [
      {
        label: "Talk about my time at NTT Data",
        href: "mailto:shivjhalani@gmail.com?subject=NTT%20internship",
      },
    ],
  },
];
