// Regenerates the contributions section of README.md between
// <!-- CONTRIB:START --> and <!-- CONTRIB:END --> from the GitHub search API.
import { readFileSync, writeFileSync } from "node:fs";

const USER = process.env.GH_USER || "surlymochan";
const EXCLUDE_OWNERS = ["nibiru-labs", USER];
const README = process.env.README_PATH || "README.md";
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const START = "<!-- CONTRIB:START -->";
const END = "<!-- CONTRIB:END -->";

const PROJECT_NAMES = {
  "Fission-AI/OpenSpec": "OpenSpec",
  "obra/superpowers": "superpowers",
  "NousResearch/hermes-agent": "Hermes Agent",
  "garrytan/gstack": "gstack",
  "cursor/plugins": "Cursor plugins",
};

function projectOf(repo) {
  if (repo.startsWith("apache/skywalking")) return "Apache SkyWalking";
  if (repo.startsWith("apache/")) return "Apache " + repo.slice(7);
  return PROJECT_NAMES[repo] || repo;
}

async function search(q) {
  const items = [];
  for (let page = 1; page <= 10; page++) {
    const url = new URL("https://api.github.com/search/issues");
    url.searchParams.set("q", q);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", String(page));
    url.searchParams.set("sort", "updated");
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": `${USER}-profile-readme`,
        ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
      },
    });
    if (!res.ok) throw new Error(`search failed: ${res.status} ${await res.text()}`);
    const data = await res.json();
    items.push(...data.items);
    if (items.length >= data.total_count || data.items.length < 100) break;
  }
  return items.map((it) => ({
    repo: it.repository_url.replace("https://api.github.com/repos/", ""),
    number: it.number,
    title: it.title.replace(/[\[\]]/g, "").replace(/\|/g, "/").trim(),
    url: it.html_url,
    date: (it.pull_request?.merged_at || it.closed_at || it.created_at || "").slice(0, 10),
  }));
}

const excl = EXCLUDE_OWNERS.map((o) => `-user:${o}`).join(" ");
const merged = await search(`author:${USER} is:pr is:merged ${excl}`);
const open = await search(`author:${USER} is:pr is:open archived:false ${excl}`);

const groups = new Map();
for (const pr of merged) {
  const p = projectOf(pr.repo);
  if (!groups.has(p)) groups.set(p, []);
  groups.get(p).push(pr);
}
const ordered = [...groups.entries()].sort(
  (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])
);

const fmt = (pr) => {
  const short = pr.repo.split("/")[1];
  return `- [${short}#${pr.number}](${pr.url}) ${pr.title}`;
};

const lines = [];
lines.push(`Merged upstream pull requests: **${merged.length}** across **${new Set(merged.map((p) => p.repo)).size}** repositories.`);
lines.push("");
for (const [name, prs] of ordered) {
  prs.sort((a, b) => b.date.localeCompare(a.date) || b.number - a.number);
  lines.push(`**${name}**`);
  lines.push("");
  for (const pr of prs) lines.push(fmt(pr));
  lines.push("");
}
if (open.length) {
  open.sort((a, b) => a.repo.localeCompare(b.repo) || b.number - a.number);
  lines.push("<details>");
  lines.push(`<summary>In review (${open.length})</summary>`);
  lines.push("");
  for (const pr of open) lines.push(`- [${pr.repo}#${pr.number}](${pr.url}) ${pr.title}`);
  lines.push("");
  lines.push("</details>");
  lines.push("");
}
lines.push(`<sub>Generated from the GitHub search API by [a daily workflow](https://github.com/surlymochan/surlymochan/blob/main/.github/workflows/update-readme.yml).</sub>`);

const readme = readFileSync(README, "utf8");
const s = readme.indexOf(START);
const e = readme.indexOf(END);
if (s < 0 || e < s) throw new Error("contribution markers not found in README");
const next = readme.slice(0, s + START.length) + "\n" + lines.join("\n") + "\n" + readme.slice(e);
if (next !== readme) {
  writeFileSync(README, next);
  console.log(`README updated: ${merged.length} merged, ${open.length} open`);
} else {
  console.log("README unchanged");
}
