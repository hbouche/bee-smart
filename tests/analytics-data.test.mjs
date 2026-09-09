import assert from "node:assert/strict";
import test from "node:test";
import { analyticsPageLocation, analyticsReferrer, contactEvent, isAnalyticsHost } from "../app/analytics-data.ts";

test("analytics keeps campaign attribution and strips personal URL parameters", () => {
  const location = analyticsPageLocation("https://bee-smart.ai/contacto/?email=person@example.com&phone=1234&utm_source=instagram&utm_campaign=ia_septiembre#private-info");
  assert.equal(location, "https://bee-smart.ai/contacto/?utm_source=instagram&utm_campaign=ia_septiembre");
  assert.equal(analyticsPageLocation("https://bee-smart.ai/?utm_campaign=person%40example.com"), "https://bee-smart.ai/");
  assert.equal(analyticsReferrer("https://example.com/private/profile?email=person@example.com"), "https://example.com/");
});

test("contact events are explicit clicks and do not expose destinations or form data", () => {
  assert.equal(contactEvent("https://wa.me/50764301378?text=private", undefined), "whatsapp_click");
  assert.equal(contactEvent("mailto:hb@bee-smart.ai?body=private", undefined), "email_click");
  assert.equal(contactEvent("https://docs.google.com/forms/d/e/example/viewform", "registration_click"), "registration_click");
  assert.equal(contactEvent("https://docs.google.com/forms/d/e/example/viewform", "business_form_click"), "business_form_click");
  assert.equal(contactEvent("https://elsewhere.example/", "registration_click"), null);
  assert.equal(contactEvent("https://wa.me/another-number", undefined), null);
  assert.equal(contactEvent("https://docs.google.com/forms/d/e/example/viewform", "purchase"), null);
});

test("analytics is limited to the public website", () => {
  assert.equal(isAnalyticsHost("bee-smart.ai"), true);
  assert.equal(isAnalyticsHost("www.bee-smart.ai"), true);
  for (const hostname of ["localhost", "terminal.local", "bee-smart-ai.onrender.com", "bee-smart.ai.example.com"]) assert.equal(isAnalyticsHost(hostname), false);
});
