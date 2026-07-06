// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender routes to static HTML so the site can be served from a plain
    // static host (XServer shared hosting — no Node runtime). crawlLinks follows
    // in-app links so every reachable route is emitted as HTML.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  // Output a fully static site to .output/public instead of the default
  // Cloudflare server bundle. This override only applies outside Lovable builds.
  nitro: {
    preset: "static",
  },
});
