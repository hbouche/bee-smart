import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
const out = new URL("../out/", import.meta.url).pathname;
const routes = ["", "ai-para-todos", "empresas", "contacto", "privacidad"];
const read = route => readFileSync(join(out, route, "index.html"), "utf8");
const markup = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
for (const route of routes) {
  test(`/${route}: contenido, SEO, navegación y recursos`, () => {
    const html = read(route);
    const body = markup(html);
    assert.equal((body.match(/<h1\b/g) || []).length, 1);
    assert.match(html, /<html[^>]+lang="es"/);
    assert.ok(body.includes(`rel="canonical" href="https://bee-smart.ai/${route ? route + "/" : ""}"`));
    assert.match(body, /property="og:title"/);
    assert.match(body, /name="description"/);
    assert.match(body, /rel="icon"[^>]+favicon.svg/);
    assert.match(body, /<dialog[^>]+navigation-dialog/);
    assert.doesNotMatch(html, /formsubmit\.co|codex-preview|30 de septiembre|30 SEP/);
    for (const match of body.matchAll(/(?:src|href)="(\/(?:images|brands|_next)\/[^"?]+)"/g)) assert.ok(existsSync(join(out, match[1])), `Falta recurso ${match[1]}`);
    for (const match of body.matchAll(/<img\b[^>]*>/g)) {
      assert.match(match[0], /alt=/);
      assert.match(match[0], /loading="(?:eager|lazy)"/);
    }
  });
}
test("calendario coherente y reserva sujeta a validación", () => {
  for (const route of ["", "ai-para-todos"]) {
    const html = read(route);
    assert.match(html, /2026-10-03/);
    assert.match(html, /10:00 a/);
    assert.match(html, /San Francisco/);
  }
  assert.match(read("ai-para-todos"), /después de validar el pago/);
  assert.match(markup(read("ai-para-todos")), /<h1>[\s\S]*?IA[\s\S]*?Todos\.[\s\S]*?<\/h1>/);
});
test("captación personal y empresarial con Google Forms", () => {
  const html = markup(read("contacto"));
  assert.doesNotMatch(html, /<form\b|formsubmit/);
  assert.match(html, /data-event="business_form_click"/);
  assert.match(html, /docs.google.com\/forms/);
});
test("indexación y artefactos de producción", () => {
  const robots = readFileSync(join(out, "robots.txt"), "utf8");
  const sitemap = readFileSync(join(out, "sitemap.xml"), "utf8");
  assert.match(robots, /Sitemap: https:\/\/bee-smart.ai\/sitemap.xml/);
  for (const route of routes) assert.ok(sitemap.includes(`https://bee-smart.ai/${route ? route + "/" : ""}`));
  assert.doesNotMatch(sitemap, /gracias/);
  assert.match(read("contacto/gracias"), /noindex/);
  assert.equal(existsSync(join(out, "__qa-mobile.html")), false);
});

