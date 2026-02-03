import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { buildAgentFeedPayload } from "../src/lib/agentFeed";

async function main() {
  const payload = buildAgentFeedPayload();
  const outputDir = path.resolve(process.cwd(), "public", "api");
  await mkdir(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, "agent-feed.json");
  await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Wrote agent feed JSON to ${outputPath}`);
}

main().catch((error) => {
  console.error("Failed to generate agent feed JSON:", error);
  process.exit(1);
});
