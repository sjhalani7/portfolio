import type { ExpandableEntry } from "@/types/experience";

export const workExperience: ExpandableEntry[] = [
  {
    id: "inrix-backend-2025",
    title: "Backend Software Engineer",
    organization: "INRIX",
    organizationNote:
      "INRIX is one of the longest-running traffic intelligence providers, ingesting global mobility data streams.",
    timeframe: "Aug 2025 – Present",
    summary:
      "Delivering production mobility data systems across Python, Java, AWS, geospatial data, and AI-native analytics workflows.",
    bullets: [
      "Reduced customer-facing data delivery lag by 57% by migrating critical data pipelines for Trips product",
      "Modernized 200+ production AWS Lambdas, upgrading legacy Python runtimes & standardizing deployments through CI/CD",
      "Designed database restructure to reduce monthly storage by 90%, saving space on over 100M+ rows by removing redundant data and preventing cartesian explosion, improving read/write efficiency by 25%, and saving over $20K in costs annually",
      "Automated provider eval workflow, cutting manual effort by 80%, saving 20+ developer hours/month, while improving reliability",
      "Proposed & led a geospatial ML initiative from idea to production, now [used across multiple customer-facing products](https://inrix.com/resources/inrix-truck-parking-analysis/)",
      "Authored & published a [blog post](https://inrix.com/blog/from-data-to-purpose-reimagining-commute-insights-at-inrix-innovation-week/) for INRIX's official blog series, highlighting the use of geospatial data in mobility solutions",
      "Designed & implemented multiple end-to-end backend pipelines for new mobility products using Python, Java & AWS Services",
      "Led 6-person AI-native backend effort with Athena and ClickHouse, enabling synchronous retrieval from over 10TB+ of data",
      "Led AI workshops and GenAI hackathons at Santa Clara University, engaging INRIX & AWS leadership with 300+ participants",
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
        href: "mailto:shivjhalani@gmail.com?subject=INRIX%20work%20so%20far",
      },
      {
        label: "INRIX Innovation Week Blog Post",
        href: "https://inrix.com/blog/from-data-to-purpose-reimagining-commute-insights-at-inrix-innovation-week/",
      },
      {
        label: "INRIX Truck Parking Analysis",
        href: "https://inrix.com/resources/inrix-truck-parking-analysis/",
      },
    ],
  },
  {
    id: "inrix-intern-2024",
    title: "Backend Software Engineering Intern",
    organization: "INRIX",
    organizationNote:
      "INRIX is one of the longest-running traffic intelligence providers, ingesting global mobility data streams.",
    timeframe: "Jun 2024 – Sep 2024",
    summary:
      "Focused on SafetyView API efficiency and modernization across Python/Java services.",
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
    organizationNote:
      "INRIX is one of the longest-running traffic intelligence providers, ingesting global mobility data streams.",
    timeframe: "Jun 2023 – Sep 2023",
    summary:
      "Automated SafetyView data pipelines and rallied a global hackathon team during Innovation Week.",
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
        href: "mailto:shivjhalani@gmail.com?subject=INRIX%20Summer%202023%20internship",
      },
    ],
  },
  {
    id: "ey-data-science",
    title: "Data Science Intern",
    organization: "Ernst & Young",
    organizationNote:
      "EY is a Big Four consulting and audit firm with a large data & AI practice.",
    timeframe: "Jun 2022 – Aug 2022",
    summary:
      "Designed a voice-enabled analytics dashboard that translates natural language into SQL queries so CXO teams can self-serve insights.",
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
    organizationNote:
      "NTT Data Services is a global IT services company pairing enterprise clients with engineering teams.",
    timeframe: "Jun 2019 – Jun 2019",
    summary:
      "First exposure to professional data science: explored pandas/numpy/sklearn to understand how ML pipelines come together.",
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
