import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../site-chrome";

export const metadata: Metadata = {
  title: "Verificación de Solicitud | BEE SMART Panamá",
  description: "Instrucciones de consulta y verificación de formularios oficiales de BEE SMART.",
  robots: { index: false, follow: true },
};

export default function GraciasPage() {
  return (
    <main className="content-wrapper">
      <SiteHeader active="contact" ctaHref="/agenda/" ctaLabel="Agendar 30 min" />

      <section className="thanks-section" aria-label="Verificación de solicitud">
        <div className="thanks-card">
          <div className="thanks-icon">ℹ</div>
          <div className="eyebrow">ESTADO DE ENVÍO · REVISIÓN DE CONFIRMACIÓN</div>
          <h1 className="thanks-title">
            Verificación de Solicitud. <em>Instrucciones de consulta.</em>
          </h1>
          <p className="thanks-desc">
            Si completaste un formulario oficial externo (Google Forms o Google Calendar), por favor consulta en tu bandeja de correo la confirmación o recibo emitido directamente por el proveedor para constatar la recepción de tu consulta.
          </p>

          <div className="honest-box">
            <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--gold-champagne)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
              Estado de Registro y Canales Directos
            </span>
            <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.55, margin: 0 }}>
              Para garantizar transparencia, esta vista no confirma registros ni pagos automáticamente. Los horarios y cupos históricos se presentan como referencia pendiente de confirmación sin disponibilidad inmediata garantizada. Para consultas urgentes, puedes contactar directamente a Humberto Bouché por correo o WhatsApp.
            </p>
          </div>

          <div className="action-row">
            <a href="/" className="btn btn-gold">
              Volver al Inicio →
            </a>
            <a href="/empresas/" className="btn btn-glass">
              Conoce BEE SMART Empresas
            </a>
            <a href="https://wa.me/50764301378" target="_blank" rel="noopener noreferrer" className="btn btn-glass">
              WhatsApp Directo ↗
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
