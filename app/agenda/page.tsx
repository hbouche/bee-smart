import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../site-chrome";
import { bookingEmbedUrl, bookingUrl } from "../site-data";

export const metadata: Metadata = {
  title: "Agenda una llamada de diagnóstico | BEE SMART",
  description: "Reserva 30 minutos por Google Meet con Humberto Bouché para diagnosticar el reto operativo de tu empresa y explorar soluciones con IA.",
  alternates: { canonical: "https://bee-smart.ai/agenda/" },
};

export default function AgendaPage() {
  return (
    <main className="content-wrapper">
      <SiteHeader active="agenda" ctaHref="/agenda/" ctaLabel="Agendar 30 min" />

      {/* Hero Agenda */}
      <section className="booking-intro">
        <div>
          <div className="eyebrow">EMPRESAS & PROFESIONALES · PRIMERA CONVERSACIÓN</div>
          <h1 className="booking-headline">
            Agenda una llamada de diagnóstico BEE SMART
          </h1>
          <p className="booking-subhead">
            Reserva 30 minutos con Humberto Bouché para ordenar el reto operativo de tu empresa, identificar oportunidades prioritarias y definir un siguiente paso realista.
          </p>
        </div>

        <div className="booking-specs-grid" aria-label="Especificaciones de la llamada">
          <div className="spec-card">
            <span className="spec-val">30 MIN</span>
            <span className="spec-lbl">Duración</span>
          </div>
          <div className="spec-card">
            <span className="spec-val">GOOGLE MEET</span>
            <span className="spec-lbl">Videollamada</span>
          </div>
          <div className="spec-card">
            <span className="spec-val">LUN–VIE</span>
            <span className="spec-lbl">Referencia histórica · Por confirmar</span>
          </div>
          <div className="spec-card">
            <span className="spec-val">UTC−5</span>
            <span className="spec-lbl">Hora oficial de Panamá</span>
          </div>
        </div>
      </section>

      {/* Embedded Google Calendar Appointment Scheduler */}
      <section className="calendar-mock-card" aria-label="Agenda de citas en Google Calendar">
        <div className="calendar-head">
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-pure)", marginBottom: "4px" }}>
              Agenda Oficial de Citas
            </h2>
            <p style={{ fontSize: "13.5px", color: "var(--text-muted)" }}>
              Selecciona día y hora directamente en el calendario oficial de Humberto Bouché.
            </p>
          </div>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--cyan-bright)", background: "rgba(0,229,255,0.12)", padding: "5px 12px", borderRadius: "20px", border: "1px solid rgba(0,229,255,0.25)" }}>
            Zona Horaria: América/Panamá (UTC-5)
          </span>
        </div>

        <div style={{ background: "#061122", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-card)", overflow: "hidden", minHeight: "680px", marginBottom: "24px" }}>
          <iframe
            src={bookingEmbedUrl}
            style={{ border: 0, width: "100%", height: "700px" }}
            title="Google Calendar Appointment Scheduling"
          />
        </div>

        <div style={{ textAlign: "center", paddingTop: "14px" }}>
          <p style={{ fontSize: "13px", color: "var(--text-dim)", marginBottom: "14px" }}>
            ¿Prefieres abrir la agenda directamente en una ventana independiente?
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="booking_click"
            className="btn btn-gold"
            style={{ fontSize: "14px", padding: "12px 24px" }}
          >
            Abrir calendario oficial en Google Calendar (calendar.app.google/tuj9wB9Ka2h1kbLE9) ↗
          </a>
        </div>
      </section>

      {/* Note Card */}
      <section className="note-card" aria-label="Preparación de la llamada">
        <div className="eyebrow eyebrow-cyan" style={{ marginBottom: "8px" }}>CÓMO PREPARAR LA SESIÓN</div>
        <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--text-pure)", marginBottom: "10px" }}>
          Aprovecha al máximo tus 30 minutos
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
          No necesitas preparar presentaciones ni diapositivas. Basta con tener claro el proceso de tu empresa que actualmente consume más horas manuales o genera más retrasos administrativos.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
