import type { SectionedEntries } from "@/types/experience";

export const projectSections: SectionedEntries[] = [
  {
    id: "projects",
    title: "Projects & Hackathons",
    entries: [
      {
        id: "ai-lecture-note-assistant",
        title:
          "AI Lecture Note-Taking Assistant — NVIDIA GTC 2025 Golden Ticket Submission",
        timeframe: "January 2025",
        summary:
          "Backend for an AI-powered lecture companion that turns raw audio into structured Google Docs notes using speech-to-text + LLM pipelines.",
        bullets: [
          "Designed & implemented backend system that converts lecture audio into structured, comprehensive notes using LLM pipelines",
          "Engineered end-to-end workflow integrating speech-to-text, semantic summarization, and hierarchical note structuring synced with Google Docs",
          "Built scalable API-based architecture to process long-form lectures while preserving key concepts, examples, and context",
          "Positioned tool for dual-use by students and professors to improve accessibility, retention, and material distribution",
        ],
        tags: ["Python", "LLM", "Speech-to-Text", "APIs"],
        links: [
          { label: "Project Demo", href: "https://www.youtube.com/watch?v=ZSaw7HFSVjk" },
        ],
        media: [
          {
            src: "/images/projects/nvidia.png",
            alt: "Screenshot from NVIDIA AI lecture assistant demo",
          },
        ],
      },
      {
        id: "post-filtering-extension",
        title: "Post Filtering Extension — 1st Place Winner, xAI Hackathon (Replit Award)",
        timeframe: "October 2024",
        summary:
          "Chrome extension that filters engagement farmers, self-promoters, and bots on X using Grok 2 / xAI APIs.",
        bullets: [
          "Designed & implemented backend architecture of Chrome extension that filters out engagement farmers, self-promoters, & bots on X using Grok 2 LLM and xAI APIs, fostering relevant and meaningful conversations",
          "Integrated X APIs to retrieve and process posts in a streaming architecture, enabling incremental data delivery & reduced latency",
        ],
        tags: ["Python", "LLM", "xAI"],
        links: [
          {
            label: "xAI/Replit Feature & Demo",
            href: "https://x.com/replit/status/1847043212667670667?s=46&t=h62ESz3AaX2SW8S3sfnqcw",
          },
        ],
        media: [
          { src: "/images/projects/grok.png", alt: "Post filtering extension" },
        ],
      },
      {
        id: "academic-support-platform",
        title: "Academic Support Platform — Google Gemini API Developer Competition Submission",
        timeframe: "August 2024",
        summary:
          "Backend for a Gemini-powered academic assistant that simplifies registration and real-time support.",
        bullets: [
          "Engineered backend architecture of web application designed to enhance academic life by simplifying course registration & providing real-time academic support using Python, Flask, & effective prompt engineering for Google’s Gemini API",
          "Utilized Google’s Gemini API to develop AI-driven Virtual Tutor & Academic Advisor tools for personalized student assistance",
          "Integrated Firebase for secure data storage & efficient management of chat histories, ensuring reliable app performance",
        ],
        tags: ["Python", "Flask", "Gemini", "Firebase"],
        links: [
          {
            label: "Project Demo",
            href: "https://www.youtube.com/watch?v=BVtw-ZKlJEM",
          },
        ],
        media: [
          { src: "/images/projects/gemini.png", alt: "Academic support platform" },
        ],
      },
      {
        id: "career-fair-automation",
        title: "Career Fair Data Analysis Automation",
        timeframe: "April 2023",
        summary:
          "Automated the Santa Clara career center’s fair analytics workflow so peer advisors could see student + employer trends without spending a week inside Excel.",
        bullets: [
          "Developed Python program using pandas library to automate the data analysis process for career fairs, providing quick & accurate insights into student & employer trends based on demographics & feedback",
          "Reduced manual work & saved a week’s worth of time, increasing efficiency by 700% over 900+ rows of data",
        ],
        tags: ["Python", "Pandas", "Automation", "Analytics"],
        links: [
          {
            label: "Project Source Code",
            href: "https://github.com/sjhalani7/careerfairdata",
          },
        ],
        media: [
          { src: "/images/projects/career-fair.svg", alt: "Career fair data visualization" },
        ],
      },
      {
        id: "health-match",
        title: "Health Match — Hack4Humanity Submission",
        timeframe: "February 2023",
        summary:
          "Hack4Humanity build that pairs symptoms with AI-powered specialist recommendations using Flask + OpenAI’s DaVinci 3 API.",
        bullets: [
          "Designed & implemented backend architecture of Chrome extension that filters out engagement farmers, self-promoters, & bots on X using Grok 2 LLM and xAI APIs, fostering relevant and meaningful conversations",
          "Integrated X APIs to retrieve and process posts in a streaming architecture, enabling incremental data delivery & reduced latency",
        ],
        tags: ["Python", "Flask", "OpenAI", "Hackathon"],
        links: [
          {
            label: "View Hackathon Demo",
            href: "https://devpost.com/software/appointmentaide",
          },
        ],
        media: [
          { src: "/images/projects/health-match.svg", alt: "Health Match concept art" },
        ],
      },
      {
        id: "tripfolio",
        title: "Tripfol.io — 1st Place Winner, INRIX Hackathon @ Santa Clara University",
        timeframe: "November 2022",
        summary:
          "INRIX hackathon winner that builds optimized day-trip itineraries with a custom routing algorithm over INRIX APIs.",
        bullets: [
          "Designed & implemented application backend using Python, Flask, & INRIX Routing API to develop optimized routing algorithm for users that generate an itinerary based on hotspots in a geographic location",
          "Identified & implemented relevant graph theory to develop optimal routing algorithm in under 24 hours",
          "Implemented Flask API to return line strings of coordinates to enable front-end map routing on Google Maps plugin",
        ],
        tags: ["Python", "Flask", "INRIX APIs", "Graph Theory"],
        links: [
          {
            label: "View Hackathon Demo",
            href: "https://devpost.com/software/bay-trips",
          },
        ],
        media: [
          { src: "/images/projects/tripfolio.svg", alt: "Tripfol.io routing visualization" },
        ],
      },
      {
        id: "project-pineapple",
        title: "Project Pineapple — 2nd Place Winner, Hack4Humanity",
        timeframe: "February 2022",
        summary:
          "Safety-focused hack that schedules check-ins for nights out using a Python/Flask backend and SQLite storage.",
        bullets: [
          "Designed application backend using Python, Flask, & SQLite that uses scheduled check-ins & user verification to allow a safe night out to reduce the likelihood of sexual assaults",
          "Implemented an SQLite database using Python programming to store & maintain data of users effectively & systematically",
          "Developed an API using Flask to fetch data from database & link to the front-end software for an efficient full-stack software",
        ],
        tags: ["Python", "Flask", "SQLite", "Safety"],
        links: [
          {
            label: "View Hackathon Demo",
            href: "https://devpost.com/software/project-pineapple",
          },
        ],
        media: [
          { src: "/images/projects/project-pineapple.svg", alt: "Project Pineapple graphic" },
        ],
      },
    ],
  },
];
