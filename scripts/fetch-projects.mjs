// Build step: reads every project.json in the Thomas-s_portfolio GitHub repo and
// writes src/data/projects.generated.json for the Projects section.
// If GitHub can't be reached, the committed snapshot is kept so the build still succeeds.
import { mkdir, readFile, writeFile } from "node:fs/promises";

const OWNER = "QuangMinhV";
const REPO = "Thomas-s_portfolio";
const BRANCH = "main";
const OUT = new URL("../src/data/projects.generated.json", import.meta.url);

const headers = { "User-Agent": "thomas-vu-portfolio-build", Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const enc = (path) => path.split("/").map(encodeURIComponent).join("/");
const raw = (sha, path) => `https://raw.githubusercontent.com/${OWNER}/${REPO}/${sha}/${enc(path)}`;
// Covers are downloaded into public/ so the site serves them itself (fast, and SVGs get the right type).
const COVERS = new URL("../public/projects/gh/", import.meta.url);
const slug = (dir) => dir.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "root";
async function saveCover(sha, dir, cover) {
  const path = dir ? `${dir}/${cover}` : cover;
  const r = await fetch(raw(sha, path), { headers: { "User-Agent": headers["User-Agent"] } });
  if (!r.ok) throw new Error(`Could not download cover ${path}: ${r.status}`);
  const ext = (cover.match(/\.(jpe?g|png|webp|svg|gif)$/i)?.[1] ?? "jpg").toLowerCase();
  const name = `${slug(dir)}.${ext}`;
  await mkdir(COVERS, { recursive: true });
  await writeFile(new URL(name, COVERS), Buffer.from(await r.arrayBuffer()));
  return `/projects/gh/${name}`;
}
const page = (dir) => `https://github.com/${OWNER}/${REPO}/tree/${BRANCH}/${enc(dir)}`;
// "09/2026" -> 202609, for newest-first sorting
const sortKey = (date = "") => {
  const [m, y] = date.split("/").map(Number);
  return (y || 0) * 100 + (m || 0);
};

/** Fetch projects from GitHub; on any failure keep the committed snapshot. */
export async function fetchProjects() {
  try {
    await run();
  } catch (err) {
    const snapshot = JSON.parse(await readFile(OUT, "utf8").catch(() => "[]"));
    console.warn(`[projects] ${err.message}. Using the committed snapshot (${snapshot.length} projects).`);
  }
}

async function run() {
  const head = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/commits/${BRANCH}`, { headers });
  if (!head.ok) throw new Error(`GitHub commit request failed: ${head.status}`);
  const { sha } = await head.json();
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${sha}?recursive=1`, { headers });
  if (!res.ok) throw new Error(`GitHub tree request failed: ${res.status}`);
  const { tree } = await res.json();
  const files = tree.filter((t) => t.type === "blob" && /(^|\/)project\.json$/.test(t.path));

  const projects = [];
  for (const f of files) {
    const dir = f.path.replace(/\/?project\.json$/, "");
    const r = await fetch(raw(sha, f.path), { headers: { "User-Agent": headers["User-Agent"] } });
    if (!r.ok) throw new Error(`Could not read ${f.path}: ${r.status}`);
    let p;
    try {
      p = JSON.parse(await r.text());
    } catch {
      console.warn(`[projects] Skipping ${f.path}: not valid JSON`);
      continue;
    }
    if (!p.title || !p.description) {
      console.warn(`[projects] Skipping ${f.path}: needs at least "title" and "description"`);
      continue;
    }
    projects.push({
      title: p.title,
      desc: p.description,
      tools: Array.isArray(p.tools) ? p.tools : [],
      categories: Array.isArray(p.categories) && p.categories.length ? p.categories : ["Other"],
      kind: p.kind ?? "Personal",
      date: p.date ?? "",
      image: p.cover ? await saveCover(sha, dir, p.cover).catch((e) => (console.warn(`[projects] ${e.message}`), "")) : "",
      href: page(dir),
    });
  }
  projects.sort((a, b) => sortKey(b.date) - sortKey(a.date) || a.title.localeCompare(b.title));
  await writeFile(OUT, JSON.stringify(projects, null, 2) + "\n");
  console.log(`[projects] ${projects.length} projects from ${OWNER}/${REPO}`);
}

// Allow `node scripts/fetch-projects.mjs` (npm run projects) as well as the Vite plugin.
if (import.meta.url === `file://${process.argv[1]}`) await fetchProjects();
