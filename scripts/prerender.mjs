// Manual prerender for XServer static hosting.
//
// Why this exists: `npm run build` emits all client assets + public files into
// .output/public/, but the nitro v3 beta prerenderer crashes before it writes
// index.html. This script picks up where it fails: it imports the freshly built
// SSR entry and renders "/" to a static index.html.
//
// Usage (from the project root, AFTER `npm run build`):
//   node scripts/prerender.mjs
//
// Output: .output/public/index.html
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const SITE_ORIGIN = "https://ruxeltech.com";
const ssrEntry = resolve("node_modules/.nitro/vite/services/ssr/index.js");
const outDir = resolve(".output/public");

if (!existsSync(ssrEntry)) {
  console.error(
    `SSR entry not found at ${ssrEntry}\nRun \`npm run build\` first (the SSR bundle is generated during the build).`,
  );
  process.exit(1);
}

const mod = await import(pathToFileURL(ssrEntry).href);
const app = mod.default;
if (!app?.fetch) {
  console.error("SSR entry has no default.fetch export — build output shape changed.");
  process.exit(1);
}

const res = await app.fetch(new Request(`${SITE_ORIGIN}/`));
const html = await res.text();

if (res.status !== 200) {
  console.error(`SSR returned HTTP ${res.status}. First 500 chars:\n${html.slice(0, 500)}`);
  process.exit(1);
}
if (!html.includes("<div id=\"root\"") && !html.toLowerCase().includes("<!doctype html")) {
  console.error("SSR output does not look like a full HTML document — aborting.");
  console.error(html.slice(0, 500));
  process.exit(1);
}

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const outFile = resolve(outDir, "index.html");
writeFileSync(outFile, html);
console.log(`Wrote ${outFile} (${html.length} bytes, HTTP ${res.status}).`);
