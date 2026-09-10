export const googleAnalyticsId = "G-XDFE688HHQ";
export const metaPixelId = "1353476229901137";
export const analyticsPreferenceKey = "bee-smart.measurement.v2";

export function isAnalyticsHost(hostname: string) {
  return hostname === "bee-smart.ai" || hostname === "www.bee-smart.ai";
}

// Keep campaign attribution, but never forward arbitrary URL parameters or fragments.
export function analyticsPageLocation(href: string) {
  const source = new URL(href);
  const clean = new URL(source.origin + source.pathname);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const value = source.searchParams.get(key);
    if (value && /^[a-zA-Z0-9 _.-]{1,100}$/.test(value)) clean.searchParams.set(key, value);
  }
  return clean.href;
}

export function analyticsReferrer(referrer: string) {
  try { return new URL(referrer).origin + "/"; } catch { return ""; }
}

export function contactEvent(href: string, hook: string | undefined) {
  let url: URL;
  try { url = new URL(href); } catch { return null; }
  if (url.hostname === "docs.google.com" && url.pathname.startsWith("/forms/")) {
    if (hook === "registration_click" || hook === "business_form_click") return hook;
  }
  if ((url.hostname === "bee-smart.ai" || url.hostname === "www.bee-smart.ai") && url.pathname.replace(/\/$/, "") === "/agenda") return "booking_click";
  if (url.hostname === "calendar.app.google" && hook === "booking_click") return "booking_click";
  if (url.hostname === "wa.me" && url.pathname === "/50764301378") return "whatsapp_click";
  if (url.protocol === "mailto:" && url.pathname.toLowerCase() === "hb@bee-smart.ai") return "email_click";
  return null;
}
