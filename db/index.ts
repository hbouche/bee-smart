/**
 * BEE SMART is deployed to Render as a fully static site, so it has no
 * server-side database runtime. Keep this guard for legacy imports without
 * pulling Cloudflare's virtual module into the build.
 */
export function getDb(): never {
  throw new Error("Database access is unavailable in the static Render build.");
}
