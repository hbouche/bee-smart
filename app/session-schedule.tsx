"use client";

import { useEffect, useState } from "react";
import { registrationFormUrl, sessions } from "./site-data";

export function SessionSchedule({ compact = false }: { compact?: boolean }) {
  // Keep hydration consistent, then hide elapsed dates in this visitor's browser.
  // This does not close options in Google Forms; those require separate maintenance.
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(timer);
  }, []);
  const upcoming = sessions.filter((session) => now === null || Date.parse(session.startsAt) > now);

  if (!upcoming.length) return <p className="schedule-empty">Estamos preparando las próximas sesiones. <a href="/contacto/">Conversemos sobre la siguiente fecha.</a></p>;

  if (compact) return <div className="upcoming-session-dates">{upcoming.map((session) => <span key={session.id} data-session={session.id}><b><time dateTime={session.startsAt}>{session.day} {session.month} · 2026</time></b>{session.modality} · {session.time}{session.modality === "Presencial" && <small>{session.place}</small>}</span>)}</div>;

  return <div className="session-grid">{upcoming.map((session) => (
    <article className={`session-card session-${sessions.findIndex(item => item.id === session.id) + 1}`} key={session.id} data-session={session.id}>
      <div className="session-card-top"><span>3 HORAS</span><strong>{session.modality}</strong></div>
      <time className="session-date" dateTime={session.startsAt} aria-label={session.dateLabel}><b>{session.day}</b><span>{session.month}<small>2026</small></span></time>
      <div className="session-details"><strong>{session.time}</strong><p>{session.place}</p><small>$75 · POR PERSONA · HORA DE PANAMÁ</small></div>
      <a className="button button-primary" href={registrationFormUrl} target="_blank" rel="noreferrer" data-event="registration_click" data-session-id={session.id} aria-label={`Reservar el ${session.dateLabel}, ${session.modality.toLowerCase()}`}>Reservar esta fecha</a>
      <p className="session-form-hint">Selecciona esta sesión en el formulario.</p>
    </article>
  ))}</div>;
}
