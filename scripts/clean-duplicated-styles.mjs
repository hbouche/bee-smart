import assert from "node:assert/strict";
import fs from "node:fs";
import postcss from "postcss";

const path = new URL("../app/globals.css", import.meta.url);
const css = fs.readFileSync(path, "utf8");
const split = css.indexOf('@import "tailwindcss"', css.indexOf('@import "tailwindcss"') + 1);
if (split < 0) {
  console.log("No repeated base stylesheet found.");
} else {
  const signature = (node) => node.toString().replace(/\s+/g, " ").trim();
  const existing = new Set(postcss.parse(css.slice(0, split)).nodes.map(signature));
  const repeated = postcss.parse(css.slice(split)).nodes.filter((node) => node.type !== "comment");
  assert(repeated.every((node) => existing.has(signature(node))), "The trailing block contains new rules; inspect before changing it.");
  const cleaned = `${css.slice(0, split).trimEnd()}\n`;
  fs.writeFileSync(path, cleaned);
  console.log(JSON.stringify({ repeatedRulesRemoved: repeated.length, beforeBytes: Buffer.byteLength(css), afterBytes: Buffer.byteLength(cleaned) }));
}
