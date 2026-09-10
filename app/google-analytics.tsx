"use client";

import { useEffect, useState } from "react";
import { analyticsPageLocation, analyticsPreferenceKey, analyticsReferrer, contactEvent, googleAnalyticsId, isAnalyticsHost, metaPixelId } from "./analytics-data";
import { sessions } from "./site-data";

type Choice = "all" | "analytics" | "rejected";
type MeasurementWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  _fbq?: (...args: unknown[]) => void;
} & Partial<Record<`ga-disable-${typeof googleAnalyticsId}`, boolean>>;
type MetaQueue = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
  queue?: unknown[][];
};

const preferencesEvent = "bee-smart:analytics-preferences";
let analyticsInitialized = false;
let metaInitialized = false;

function savedChoice(): Choice | null {
  try {
    const value = localStorage.getItem(analyticsPreferenceKey);
    return value === "all" || value === "analytics" || value === "rejected" ? value : null;
  } catch { return null; }
}

function startAnalytics() {
  if (!isAnalyticsHost(window.location.hostname)) return;
  const measurement = window as MeasurementWindow;
  measurement[`ga-disable-${googleAnalyticsId}`] = false;
  if (analyticsInitialized) return;
  analyticsInitialized = true;
  measurement.dataLayer = measurement.dataLayer || [];
  measurement.gtag = function () { measurement.dataLayer!.push(arguments); };
  measurement.gtag("consent", "default", {
    analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });
  measurement.gtag("js", new Date());
  measurement.gtag("config", googleAnalyticsId, {
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

function startMetaPixel() {
  if (!isAnalyticsHost(window.location.hostname) || metaInitialized) return;
  metaInitialized = true;
  const measurement = window as MeasurementWindow;
  const fbq: MetaQueue = (...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else (fbq.queue ||= []).push(args);
  };
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  measurement.fbq = fbq;
  measurement._fbq = fbq;
  fbq("init", metaPixelId);
  fbq("track", "PageView");
  if (window.location.pathname.startsWith("/ai-para-todos")) fbq("track", "ViewContent", { content_name: "IA para Todos" });
  const script = document.createElement("script");
  script.id = "bee-smart-meta-pixel";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}

function removeCookies(names: string[]) {
  for (const name of names) {
    for (const domain of ["", window.location.hostname, ".bee-smart.ai"]) {
      document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ""} SameSite=Lax; Secure`;
    }
  }
}

function removeAnalyticsCookies() {
  removeCookies(document.cookie.split(";").map(value => value.trim().split("=")[0]).filter(name => name === "_ga" || name.startsWith("_ga_")));
}

function removeMetaCookies() {
  removeCookies(document.cookie.split(";").map(value => value.trim().split("=")[0]).filter(name => name === "_fbp" || name === "_fbc"));
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
      if (current === "all" || current === "analytics") startAnalytics();
      else {
        (window as MeasurementWindow)[`ga-disable-${googleAnalyticsId}`] = true;
        removeAnalyticsCookies();
      }
      if (current === "all") startMetaPixel();
      else removeMetaCookies();
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
    if ((choice !== "all" && choice !== "analytics") || !isAnalyticsHost(window.location.hostname)) return;
    const trackClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      const name = contactEvent(link.href, link.dataset.event);
      if (!name) return;
      const courseSession = sessions.find(session => session.id === link.dataset.sessionId)?.id;
      const location = link.closest("header") ? "header" : link.closest("footer") ? "footer" : link.classList.contains("whatsapp-float") ? "floating" : "content";
      (window as MeasurementWindow).gtag?.("event", name, {
        cta_location: location,
        ...(courseSession ? { course_session: courseSession } : {}),
      });
      if (choice === "all") {
        if (name === "booking_click") (window as MeasurementWindow).fbq?.("track", "Schedule", { cta_location: location });
        else {
          const contactType = name === "registration_click" ? "course_registration" : name === "business_form_click" ? "business_form" : name === "whatsapp_click" ? "whatsapp" : "email";
          (window as MeasurementWindow).fbq?.("track", "Contact", {
            contact_type: contactType,
            cta_location: location,
            ...(courseSession ? { course_session: courseSession } : {}),
          });
        }
      }
    };
    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, [choice]);

  const choose = (next: Choice) => {
    let persisted = false;
    try {
      localStorage.setItem(analyticsPreferenceKey, next);
      localStorage.removeItem("bee-smart.analytics.v1");
      persisted = true;
    } catch { /* Applies to this page if storage is unavailable. */ }
    setChoice(next);
    setVisible(false);
    if (next === "all" || next === "analytics") startAnalytics();
    else {
      (window as MeasurementWindow)[`ga-disable-${googleAnalyticsId}`] = true;
      removeAnalyticsCookies();
    }
    if (next === "all") startMetaPixel();
    else removeMetaCookies();
    if (persisted && ((analyticsInitialized && next === "rejected") || (metaInitialized && next !== "all"))) window.location.reload();
  };

  if (!visible) return null;
  return <section className="analytics-consent" aria-label="Preferencias de medición">
    <div><strong>¿Nos ayudas a mejorar el sitio?</strong><p>Con tu permiso, usamos Google Analytics para medir visitas y Meta Pixel para entender el rendimiento de nuestras campañas. Puedes cambiar tu decisión en el pie de página. <a href="/privacidad/#analytics">Más información</a>.</p></div>
    <div className="analytics-consent-actions"><button type="button" onClick={() => choose("all")}>Aceptar todo</button><button type="button" onClick={() => choose("analytics")}>Solo analítica</button><button type="button" onClick={() => choose("rejected")}>Rechazar</button>{choice && <button type="button" onClick={() => setVisible(false)}>Cerrar</button>}</div>
  </section>;
}
