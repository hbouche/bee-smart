import { SiteFooter, SiteHeader } from "../site-chrome";
import { bookingEmbedUrl, bookingUrl } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata(
  "Agenda una llamada | BEE SMART Panamá",
  "Reserva una llamada de diagnóstico de 30 minutos con BEE SMART para conversar sobre capacitación o implementación de inteligencia artificial.",
  "/agenda/",
);

export default function AgendaPage() {
  return (
    <main className="booking-page">
      <SiteHeader active="agenda" ctaHref="/agenda" ctaLabel="Agenda una llamada" />
      <section className="booking-intro">
        <div>
          <p className="eyebrow">EMPRESAS · PRIMERA CONVERSACIÓN</p>
          <h1>Agenda una llamada de diagnóstico.</h1>
          <p>Reserva 30 minutos con Humberto para ordenar el reto, identificar oportunidades y definir un siguiente paso realista para tu empresa.</p>
        </div>
        <div className="booking-facts" aria-label="Detalles de la llamada">
          <span><strong>30 MIN</strong>Duración</span>
          <span><strong>GOOGLE MEET</strong>Videollamada</span>
          <span><strong>LUN–VIE</strong>10:00 a. m.–12:00 p. m.</span>
          <span><strong>UTC−5</strong>Hora de Panamá</span>
        </div>
      </section>
      <section className="booking-calendar" aria-labelledby="booking-calendar-title">
        <div className="booking-calendar-head"><p className="eyebrow">DISPONIBILIDAD EN TIEMPO REAL</p><h2 id="booking-calendar-title">Escoge el momento que te convenga.</h2><p>Google Calendar mostrará únicamente los espacios disponibles. Recibirás la confirmación y el enlace de Google Meet por correo.</p></div>
        <div className="booking-frame-shell">
          <iframe src={bookingEmbedUrl} title="Disponibilidad para una llamada de diagnóstico BEE SMART" loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
        </div>
        <p className="booking-fallback">¿No ves el calendario? <a href={bookingUrl} target="_blank" rel="noreferrer" data-event="booking_click">Abrir la agenda en Google Calendar ↗</a></p>
      </section>
      <section className="booking-note"><strong>Una conversación, no un compromiso.</strong><p>La llamada sirve para entender el contexto y recomendar una ruta. No confirma una contratación ni requiere pago.</p><a href="/contacto/#empresas">Prefiero enviar el formulario empresarial →</a></section>
      <SiteFooter />
    </main>
  );
}
