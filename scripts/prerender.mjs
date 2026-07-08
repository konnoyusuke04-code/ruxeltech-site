// Manual prerender for XServer static hosting.
//
// Why this exists: `npm run build` emits all client assets + public files into
// .output/public/, but the nitro v3 beta prerenderer crashes before it writes
// the HTML. This script picks up where it fails: it imports the freshly built
// SSR entry and renders each route to a static HTML file.
//
// Usage (from the project root, AFTER `npm run build`):
//   node scripts/prerender.mjs
//
// Output: .output/public/index.html and .output/public/team/index.html
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve, dirname } from "node:path";

const SITE_ORIGIN = "https://ruxeltech.com";

// Every route that must be emitted as static HTML. `out` is relative to
// .output/public. Add a new entry here when a new page/route is added.
const ROUTES = [
  { path: "/", out: "index.html" },
  { path: "/team", out: "team/index.html" },
];

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

for (const route of ROUTES) {
  const res = await app.fetch(new Request(`${SITE_ORIGIN}${route.path}`));
  const html = await res.text();

  if (res.status !== 200) {
    console.error(
      `SSR returned HTTP ${res.status} for ${route.path}. First 500 chars:\n${html.slice(0, 500)}`,
    );
    process.exit(1);
  }
  if (!html.toLowerCase().includes("<!doctype html")) {
    console.error(
      `SSR output for ${route.path} does not look like a full HTML document — aborting.`,
    );
    console.error(html.slice(0, 500));
    process.exit(1);
  }

  const outFile = resolve(outDir, route.out);
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  console.log(
    `Wrote ${outFile} (${html.length} bytes, HTTP ${res.status}) for ${route.path}`,
  );
}
