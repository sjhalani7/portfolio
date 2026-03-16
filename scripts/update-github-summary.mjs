#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const username = process.env.GITHUB_USERNAME || "sjhalani7";
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || process.env.GITHUB_ACTION_TOKEN;
const activityTimeZone = process.env.GITHUB_ACTIVITY_TIMEZONE || "America/Los_Angeles";
const activityTzLabel = process.env.GITHUB_ACTIVITY_TZ_LABEL || "PT";
const automationCommitPrefix = "Automated GitHub Action update:";

async function fetchFromGitHub(url) {
  const headers = {
    "User-Agent": "portfolio-github-summary-script",
    Accept: "application/vnd.github+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, { headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub request failed (${res.status}): ${text}`);
  }
  return res.json();
}

function formatHourLabel(hour) {
  const normalizedHour = ((hour % 24) + 24) % 24;
  const date = new Date(Date.UTC(1970, 0, 1, normalizedHour));
  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    hour12: true,
    timeZone: "UTC",
  }).format(date);
}

function formatHourRange(hour, timeZone, tzLabel) {
  const currentLabel = formatHourLabel(hour);
  const nextLabel = formatHourLabel((hour + 1) % 24);
  return `${currentLabel}–${nextLabel} ${tzLabel}`;
}

function isAutomationCommitMessage(message) {
  return typeof message === "string" && message.startsWith(automationCommitPrefix);
}

function isAutomationEvent(event) {
  const actorLogin = String(event?.actor?.login || "").toLowerCase();
  const pusherName = String(event?.payload?.pusher?.name || "").toLowerCase();
  const commitMessages = Array.isArray(event?.payload?.commits)
    ? event.payload.commits.map((commit) => commit?.message).filter(Boolean)
    : [];

  return (
    actorLogin.includes("github-actions") ||
    pusherName.includes("github-actions") ||
    commitMessages.some((message) => isAutomationCommitMessage(message))
  );
}

function getMostActiveHour(events, timeZone, tzLabel) {
  const meaningfulEvents = events.filter((event) => !isAutomationEvent(event));

  if (!meaningfulEvents.length) {
    return "No activity data yet";
  }

  const formatter = new Intl.DateTimeFormat("en", {
    hour: "numeric",
    hour12: false,
    hourCycle: "h23",
    timeZone,
  });

  const counts = Array.from({ length: 24 }, () => 0);
  for (const event of meaningfulEvents) {
    if (!event?.created_at) continue;
    const parsedHour = Number(formatter.format(new Date(event.created_at)));
    if (!Number.isNaN(parsedHour)) {
      const hour = ((parsedHour % 24) + 24) % 24;
      counts[hour] += 1;
    }
  }

  const topHour = counts.indexOf(Math.max(...counts));
  return formatHourRange(topHour, timeZone, tzLabel);
}

function getTopLanguages(repos, limit = 3) {
  const counts = new Map();
  for (const repo of repos) {
    const lang = repo.language;
    if (!lang) continue;
    counts.set(lang, (counts.get(lang) || 0) + 1);
  }
  const sorted = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([lang]) => lang);
  return sorted.length ? sorted.join(", ") : "Exploring new stacks";
}

function getFocus(events, limit = 2) {
  const meaningfulEvents = events.filter((event) => !isAutomationEvent(event));
  const counts = new Map();
  for (const event of meaningfulEvents) {
    const repoName = event?.repo?.name;
    if (!repoName) continue;
    counts.set(repoName, (counts.get(repoName) || 0) + 1);
  }
  const top = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name]) => name.split("/")[1] ?? name);
  return top.length ? `Shipping ${top.join(" + ")}` : "Shipping learning projects";
}

function getSiteMeta() {
  const commitRows = execSync("git log --date=short --pretty=%cd%x1f%s%x1f%ae -n 100")
    .toString()
    .trim()
    .split("\n")
    .map((row) => {
      const [date, message, authorEmail] = row.split("\u001f");
      return { date, message, authorEmail };
    });

  const latestManualCommit =
    commitRows.find(
      ({ message, authorEmail }) =>
        !isAutomationCommitMessage(message) &&
        !authorEmail.includes("github-actions[bot]"),
    ) ?? commitRows[0];

  const latestDate = latestManualCommit?.date || new Date().toISOString().slice(0, 10);
  const latestMessage = latestManualCommit?.message || "Recent repository update";
  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(latestDate));

  return {
    siteLastUpdated: formattedDate,
    siteLastChange: latestMessage,
  };
}

async function main() {
  console.log(`Fetching GitHub data for ${username}...`);
  const events = await fetchFromGitHub(
    `https://api.github.com/users/${username}/events/public?per_page=100`,
  );
  const repos = await fetchFromGitHub(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
  );

  const mostActiveHour = getMostActiveHour(events, activityTimeZone, activityTzLabel);
  const languages = getTopLanguages(repos);
  const focus = getFocus(events);
  const { siteLastUpdated, siteLastChange } = getSiteMeta();

  const summary = {
    mostActiveHour,
    languages,
    focus,
    siteLastUpdated,
    siteLastChange,
  };

  const outputPath = path.resolve(__dirname, "..", "src", "data", "githubSummary.json");
  await fs.writeFile(outputPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
  console.log("Updated", outputPath);
}

main().catch((error) => {
  console.error("Failed to update GitHub summary:", error);
  process.exit(1);
});
