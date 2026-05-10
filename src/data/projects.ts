import type { SectionedEntries } from "@/types/experience";

export const projectSections: SectionedEntries[] = [
  {
    id: "product-builds",
    title: "Product Builds",
    entries: [
      {
        id: "vaen-agentic-harness-container-builder",
        title: "VAEN — Agentic Harness Container Builder",
        summary:
          "Built an open-source Python CLI that packages instructions, skills, MCP server definitions, and client-specific configuration into a shareable `.agent` archive, replacing the manual process of zipping agent setups and porting files into the right places across repositories.",
        bullets: [
          "Designed & implemented end-to-end packaging architecture in Python to turn manifest-defined agent setups into portable `.agent` bundles for reuse across repositories and teams",
          "Engineered manifest-driven build system that validated agent configuration and serialized setups into a deterministic OCI image-layout archive with canonical structure and safety checks",
          "Built import workflow that materialized archived setups into client-specific layouts for OpenAI Codex, Anthropic Claude Code, and GitHub Copilot, automatically placing instructions, skills, and MCP configuration in the correct locations",
        ],
        tags: ["Python", "CLI", "YAML", "OCI", "Developer Tooling"],
        links: [
          {
            label: "Project Demo",
            href: "https://www.youtube.com/watch?v=qTPAzI8LVEw",
          },
          {
            label: "Website",
            href: "https://sjhalani7.github.io/vaen/",
          },
          {
            label: "GitHub",
            href: "https://github.com/sjhalani7/vaen",
          },
        ],
        media: [
          {
            src: "/images/projects/vaen-platform.svg",
            alt: "Illustration of VAEN's manifest-driven packaging, OCI archive generation, and client-specific import workflow",
          },
        ],
      },
      {
        id: "atr-agentic-tool-registry",
        title: "ATR — Agentic Tool Registry",
        summary:
          "Built an open-source Python CLI-backed metadata registry that helps coding agents discover external tools, APIs, MCP servers, and CLIs through structured metadata, so they can find the right tool first without loading full documentation into context up front.",
        bullets: [
          "Designed & implemented registry architecture in Python to organize agent-ready tools through compact discovery records, richer invocation specs, and verification metadata",
          "Engineered validation and bundling pipeline that enforced schema correctness, publisher and URL policies, duplicate detection, and versioned registry artifacts for trusted distribution",
          "Built progressive lookup workflow that returned lightweight discovery metadata first and resolved full tool usage details only for selected tools, reducing context load while preserving access to invocation details",
        ],
        tags: ["Python", "CLI", "JSONL", "Developer Tooling", "Agentic Systems"],
        links: [
          {
            label: "Project Demo",
            href: "https://www.youtube.com/watch?v=jMRM6Xz4Cl8",
          },
          {
            label: "GitHub",
            href: "https://github.com/sjhalani7/agentic-tool-registry",
          },
        ],
        media: [
          {
            src: "/images/projects/atr-registry.svg",
            alt: "Illustration of ATR's registry metadata, CLI cache, and progressive lookup workflow for coding agents",
          },
        ],
      },
      {
        id: "aid-agentic-advertising-platform",
        title: "AID — Agentic Advertising Platform",
        timeframe: "September 2025 - October 2025",
        summary:
          "Built a backend to explore how agentic commerce and advertising could work, turning merchant product catalogs into vector-searchable listings and serving hybrid recommendations to authenticated AI agents.",
        bullets: [
          "Designed & implemented backend architecture using FastAPI and OpenSearch to ingest structured merchant product catalogs and serve recommendations to authenticated AI agents",
          "Engineered product ingestion pipeline that normalized product metadata, generated contextual embeddings via OpenAI’s Embeddings API, and indexed listings as vector-plus-metadata documents for semantic retrieval",
          "Built hybrid recommendation system combining OpenSearch k-NN vector search with structured filters across price, brand, category, and attributes, then reranked results using weighted semantic similarity and product completeness scores",
          "Implemented JWT-based affiliate tracking, impression logging, click redirects, and idempotent conversion reporting to measure downstream recommendation performance",
        ],
        tags: ["Python", "FastAPI", "OpenSearch", "Vector Search", "JWT"],
        links: [
          {
            label: "Project Demo",
            href: "https://www.youtube.com/watch?v=40FzfjCIAJg",
          },
        ],
        media: [
          {
            src: "/images/projects/aid-platform.svg",
            alt: "Illustration of AID's merchant catalog ingestion, vector retrieval, and agent recommendation flow",
          },
        ],
      },
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
