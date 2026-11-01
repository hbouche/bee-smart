import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../site-chrome";
import { businessFormUrl, registrationFormUrl } from "../site-data";

export const metadata: Metadata = {
  title: "Contacto | BEE SMART Panamá",
  description: "Canales directos de contacto con Humberto Bouché. WhatsApp corporativo, correo y formularios oficiales de requerimiento.",
  alternates: { canonical: "https://bee-smart.ai/contacto/" },
};

export default function ContactoPage() {
  return (
    <main className="content-wrapper">
      <SiteHeader active="contact" ctaHref="/agenda/" ctaLabel="Agendar 30 min" />

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="eyebrow">CANALES DE ATENCIÓN DIRECTA</div>
        <h1 className="contact-title">
          Hablemos de tus proyectos con inteligencia artificial.
        </h1>
        <p className="contact-desc">
          Elige el canal que mejor se adapte a tu necesidad: videollamada de 30 minutos, mensaje por WhatsApp o envío de requerimiento empresarial por formulario oficial.
        </p>
      </section>

      {/* 3 Direct Channels */}
      <section className="channels-grid" aria-label="Canales directos">
        <a href="/agenda/" className="channel-card">
          <div>
            <span className="channel-tag">AGENDA 30 MIN</span>
            <h2 className="channel-title">Google Meet</h2>
            <p className="channel-desc">
              Sesión uno a uno de diagnóstico con Humberto Bouché. Ideal para proyectos corporativos y comités ejecutivos.
            </p>
          </div>
          <span className="channel-action">Reservar espacio en calendario →</span>
        </a>

        <a href="https://wa.me/50764301378" target="_blank" rel="noopener noreferrer" className="channel-card">
          <div>
            <span className="channel-tag" style={{ color: "#10B981", background: "rgba(16,185,129,0.12)" }}>
              CANAL DIRECTO
            </span>
            <h2 className="channel-title">WhatsApp Corporativo</h2>
            <p className="channel-desc">
              Consultas directas sobre fechas de cursos, modalidades in-company o presupuestos de referencia.
            </p>
          </div>
          <span className="channel-action">+507 6430-1378 ↗</span>
        </a>

        <a href="mailto:hb@bee-smart.ai" className="channel-card">
          <div>
            <span className="channel-tag" style={{ color: "var(--gold-champagne)", background: "rgba(245,208,97,0.12)" }}>
              CORREO DIRECTO
            </span>
            <h2 className="channel-title">hb@bee-smart.ai</h2>
            <p className="channel-desc">
              Para compartir pliegos técnicos, acuerdos de confidencialidad o invitaciones a propuestas formales.
            </p>
          </div>
          <span className="channel-action">Enviar correo electrónico ↗</span>
        </a>
      </section>

      {/* Profile Section */}
      <section className="profile-card" aria-label="Perfil del director">
        <div className="profile-avatar">
          <span style={{ fontSize: "54px", fontWeight: 900, color: "var(--gold-champagne)" }}>HB</span>
          <span style={{ fontSize: "10px", fontWeight: 800, color: "var(--cyan-bright)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            PANAMÁ
          </span>
        </div>
        <div>
          <div className="eyebrow eyebrow-cyan" style={{ marginBottom: "8px" }}>DIRECCIÓN EJECUTIVA</div>
          <h2 style={{ fontSize: "28px", fontWeight: 900, color: "var(--text-pure)", marginBottom: "4px" }}>
            Humberto Bouché
          </h2>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--cyan-bright)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "14px" }}>
            Estrategia e Implementación de Inteligencia Artificial
          </span>
          <p style={{ fontSize: "14.5px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "18px" }}>
            Ingeniero y consultor enfocado en transformar procesos empresariales en flujos ágiles y supervisados. Todas las solicitudes son evaluadas personalmente antes de agendar.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/agenda/" className="btn btn-gold" style={{ fontSize: "13px", padding: "8px 16px" }}>
              Agendar 30 min
            </a>
            <a href="https://wa.me/50764301378" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ fontSize: "13px", padding: "8px 16px" }}>
              Escribir a WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Dual Forms Section (Official Links, No Simulation) */}
      <section aria-label="Formularios oficiales de contacto">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 36px" }}>
          <div className="eyebrow">ENVÍO POR FORMULARIO OFICIAL</div>
          <h2 className="section-title">Escríbenos según tu requerimiento</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Canal formal para compartir los requerimientos de tu equipo a través de nuestros formularios oficiales en Google Forms.
          </p>
        </div>

        <div className="forms-grid">
          {/* Form Card 1: Empresas */}
          <div className="form-card highlight">
            <div className="eyebrow" style={{ marginBottom: "10px" }}>BEE SMART EMPRESAS</div>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-pure)", marginBottom: "8px" }}>
              Requerimiento Corporativo
            </h3>
            <p style={{ fontSize: "13.5px", color: "var(--text-muted)", marginBottom: "24px" }}>
              Para proyectos de automatización, diagnóstico operativo o talleres privados in-company adaptados a tu sector.
            </p>
            <a
              href={businessFormUrl}
              target="_blank"
              rel="noreferrer"
              data-event="business_form_click"
              className="btn btn-gold btn-block"
              style={{ fontSize: "14px", padding: "14px 20px" }}
            >
              Abrir formulario corporativo en Google Forms (docs.google.com/forms) ↗
            </a>
          </div>

          {/* Form Card 2: IA para Todos */}
          <div className="form-card">
            <div className="eyebrow eyebrow-cyan" style={{ marginBottom: "10px" }}>CURSO FORMATIVO</div>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-pure)", marginBottom: "8px" }}>
              Inscripción en IA para Todos
            </h3>
            <p style={{ fontSize: "13.5px", color: "var(--text-muted)", marginBottom: "24px" }}>
              Para unirte a la lista de espera de las próximas cohortes presenciales u online con Humberto Bouché.
            </p>
            <a
              href={registrationFormUrl}
              target="_blank"
              rel="noreferrer"
              data-event="registration_click"
              className="btn btn-glass btn-block"
              style={{ fontSize: "14px", padding: "14px 20px" }}
            >
              Abrir formulario de inscripción en Google Forms ↗
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
