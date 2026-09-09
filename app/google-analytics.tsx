"use client";

import { useEffect, useState } from "react";
import { analyticsPageLocation, analyticsPreferenceKey, analyticsReferrer, contactEvent, googleAnalyticsId, isAnalyticsHost } from "./analytics-data";
import { sessions } from "./site-data";

type Choice = "accepted" | "rejected";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
} & Partial<Record<`ga-disable-${typeof googleAnalyticsId}`, boolean>>;
const preferencesEvent = "bee-smart:analytics-preferences";
let initialized = false;

function savedChoice(): Choice | null {
  try {
    const value = localStorage.getItem(analyticsPreferenceKey);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch { return null; }
}

function startAnalytics() {
  if (!isAnalyticsHost(window.location.hostname)) return;
  const analytics = window as AnalyticsWindow;
  analytics[`ga-disable-${googleAnalyticsId}`] = false;
  if (initialized) return;
  initialized = true;
  analytics.dataLayer = analytics.dataLayer || [];
  analytics.gtag = function () { analytics.dataLayer!.push(arguments); };
  analytics.gtag("consent", "default", {
    analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });
  analytics.gtag("js", new Date());
  // Native anchors reload each page. Google sends the initial page_view once.
  analytics.gtag("config", googleAnalyticsId, {
    page_location: analyticsPageLocation(window.location.href),
    page_referrer: analyticsReferrer(document.referrer),
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_flags: "SameSite=Lax;Secure",
  });
  const script = document.createElement("script");
  script.id = "bee-smart-google-tag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
  document.head.appendChild(script);
}

function removeAnalyticsCookies() {
  const names = document.cookie.split(";").map(value => value.trim().split("=")[0]).filter(name => name === "_ga" || name.startsWith("_ga_"));
  for (const name of names) {
    for (const domain of ["", window.location.hostname, ".bee-smart.ai"]) {
      document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ""} SameSite=Lax; Secure`;
    }
  }
}

export function AnalyticsPreferencesButton() {
  return <button type="button" className="analytics-preferences" onClick={() => window.dispatchEvent(new Event(preferencesEvent))}>Preferencias de privacidad</button>;
}

export function GoogleAnalytics() {
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);

  useEffect(() => {
    const reconcile = () => {
      const current = savedChoice();
      setChoice(current);
      setVisible(current === null);
      if (current === "accepted") startAnalytics();
      else {
        (window as AnalyticsWindow)[`ga-disable-${googleAnalyticsId}`] = true;
        removeAnalyticsCookies();
      }
    };
    reconcile();
    const storageChanged = (event: StorageEvent) => {
      if (event.key === analyticsPreferenceKey || event.key === null) reconcile();
    };
    const restored = (event: PageTransitionEvent) => { if (event.persisted) reconcile(); };
    const show = () => setVisible(true);
    window.addEventListener(preferencesEvent, show);
    window.addEventListener("storage", storageChanged);
    window.addEventListener("pageshow", restored);
    return () => {
      window.removeEventListener(preferencesEvent, show);
      window.removeEventListener("storage", storageChanged);
      window.removeEventListener("pageshow", restored);
    };
  }, []);

  useEffect(() => {
    if (choice !== "accepted" || !isAnalyticsHost(window.location.hostname)) return;
    const trackClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      const name = contactEvent(link.href, link.dataset.event);
      if (!name) return;
      const courseSession = sessions.find(session => session.id === link.dataset.sessionId)?.id;
      const location = link.closest("header") ? "header" : link.closest("footer") ? "footer" : link.classList.contains("whatsapp-float") ? "floating" : "content";
      (window as AnalyticsWindow).gtag?.("event", name, {
        cta_location: location,
        ...(courseSession ? { course_session: courseSession } : {}),
      });
    };
    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, [choice]);

  const choose = (next: Choice) => {
    let persisted = false;
    try { localStorage.setItem(analyticsPreferenceKey, next); persisted = true; } catch { /* Applies to this page if storage is unavailable. */ }
    setChoice(next);
    setVisible(false);
    if (next === "accepted") startAnalytics();
    else {
      (window as AnalyticsWindow)[`ga-disable-${googleAnalyticsId}`] = true;
      removeAnalyticsCookies();
      // Unload an already running Google tag after consent is withdrawn.
      if (initialized && persisted) window.location.reload();
    }
  };

  if (!visible) return null;
  return <section className="analytics-consent" aria-label="Preferencias de medición">
    <div><strong>¿Nos ayudas a mejorar el sitio?</strong><p>Con tu permiso, usamos Google Analytics y sus cookies para medir visitas y clics. Puedes cambiar tu decisión en el pie de página. <a href="/privacidad/#analytics">Más información</a>.</p></div>
    <div className="analytics-consent-actions"><button type="button" onClick={() => choose("accepted")}>Aceptar</button><button type="button" onClick={() => choose("rejected")}>Rechazar</button>{choice && <button type="button" onClick={() => setVisible(false)}>Cerrar</button>}</div>
  </section>;
}
