import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "./site-chrome";
import { HeroVideoPlayer } from "./hero-video-player";

export const metadata: Metadata = {
  title: "BEE SMART | Inteligencia Artificial para Todos",
  description: "Educación e implementación de inteligencia artificial para personas, profesionales y empresas en Panamá.",
  alternates: { canonical: "https://bee-smart.ai/" },
};

export default function HomePage() {
  return (
    <main className="content-wrapper">
      <SiteHeader active="home" ctaHref="/agenda/" ctaLabel="Agendar 30 min" />

      {/* Home Hero */}
      <section className="home-hero">
        <div className="hero-left">
          <div className="eyebrow">CAPACITACIÓN & IMPLEMENTACIÓN EN PANAMÁ</div>
          <h1 className="hero-title">
            Inteligencia artificial aplicada, <em>con criterio humano.</em>
          </h1>
          <p className="hero-desc">
            Aprende a dirigir modelos y agentes o construye capacidad técnica interna en tu empresa. Formación ejecutiva e implementación a la medida de tu operación.
          </p>
          <div className="hero-buttons">
            <a href="/empresas/" className="btn btn-gold">
              Explorar Empresas →
            </a>
            <a href="/ai-para-todos/" className="btn btn-glass">
              Curso IA para Todos ↗
            </a>
          </div>
        </div>

        <div className="hero-right">
          <HeroVideoPlayer />
        </div>
      </section>

      {/* Clients Bar */}
      <section className="clients-section" aria-label="Empresas asesoradas">
        <div className="clients-label">EMPRESAS Y PROYECTOS QUE HAN CONFIADO EN NUESTRA VISIÓN</div>
        <div className="clients-grid">
          <div className="client-badge">
            INGREDIENTA
            <small>Alimentos & Operaciones</small>
          </div>
          <div className="client-badge">
            CASA MAHANA
            <small>Hospitalidad</small>
          </div>
          <div className="client-badge">
            SURF SHACK
            <small>Turismo & Retail</small>
          </div>
          <div className="client-badge">
            SOLUCIONES EXPRESS
            <small>Servicios Corporativos</small>
          </div>
          <div className="client-badge">
            MAHANA TOURS
            <small>Turismo Receptivo</small>
          </div>
        </div>
      </section>

      {/* 4 Capabilities */}
      <section className="pillars-section" aria-label="Capacidades centrales">
        <div className="pillars-header">
          <div className="eyebrow eyebrow-cyan">CAPACIDADES CENTRALES</div>
          <h2 className="section-title">Lo que desbloqueamos en tu equipo</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Cuatro frentes de trabajo complementarios para transformar conocimiento disperso en ejecución sistemática.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-num">01 / ESTRATEGIA</div>
            <h3 className="pillar-heading">Aprender y organizar</h3>
            <p className="pillar-desc">
              Investigar, resumir fuentes complejas, planificar proyectos y convertir flujos de datos en decisiones ejecutivas precisas.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">02 / PRODUCCIÓN</div>
            <h3 className="pillar-heading">Crear contenido</h3>
            <p className="pillar-desc">
              Pasar de una idea a texto, imagen, voz, video y publicación multicanal manteniendo identidad de marca y tono editorial.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">03 / CONTROL</div>
            <h3 className="pillar-heading">Automatizar trabajo</h3>
            <p className="pillar-desc">
              Conectar herramientas existentes (ERP, CRM, correo, hojas) y ejecutar procesos repetitivos con reglas y validación humana.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">04 / INGENIERÍA</div>
            <h3 className="pillar-heading">Construir soluciones</h3>
            <p className="pillar-desc">
              Desarrollar paneles de control a medida, micro-aplicaciones internas, flujos de agentes y productos asistidos por IA.
            </p>
          </div>
        </div>
      </section>

      {/* 2 Main Tracks */}
      <section className="routes-section" aria-label="Rutas formativas y de implementación">
        <div className="routes-grid">
          {/* Track 1: Empresas */}
          <div className="route-card highlight">
            <div>
              <div className="eyebrow">PARA EMPRESAS & EQUIPOS</div>
              <h2 className="route-title">BEE SMART Empresas</h2>
              <p className="route-desc">
                Transformamos la operación de tu negocio mediante arquitectura ad hoc, compuertas de supervisión y formación del responsable interno.
              </p>
              <ul className="route-feature-list">
                <li>Diagnóstico operativo y levantamiento de flujos</li>
                <li>Orquestador Modular con supervisión humana</li>
                <li>Integración a sistemas de gestión existentes</li>
                <li>Acompañamiento directivo continuo</li>
              </ul>
            </div>
            <a href="/empresas/" className="btn btn-gold">
              Conoce la propuesta para empresas →
            </a>
          </div>

          {/* Track 2: IA para Todos */}
          <div className="route-card">
            <div>
              <div className="eyebrow eyebrow-cyan">CURSO FORMATIVO INTENSIVO</div>
              <h2 className="route-title">IA para Todos</h2>
              <p className="route-desc">
                Aprende a dirigir herramientas y modelos de inteligencia artificial desde cero en una sesión ejecutiva de 3 horas en vivo con Humberto Bouché.
              </p>
              <ul className="route-feature-list">
                <li>Modalidad online o presencial en Ciudad de Panamá</li>
                <li>Modelos de lenguaje, visión, agentes y automatización</li>
                <li>Ejemplos prácticos aplicados a tu día a día</li>
                <li>Sesiones reducidas con resolución de dudas</li>
              </ul>
            </div>
            <a href="/ai-para-todos/" className="btn btn-glass">
              Ver temario y fechas →
            </a>
          </div>
        </div>
      </section>

      {/* Convocatorias Section */}
      <section className="section" id="fechas" style={{ paddingTop: 0 }} aria-label="Convocatorias de formación">
        <div className="glass-card highlight" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "36px 28px" }}>
          <div className="eyebrow">CONVOCATORIA EN CIUDAD DE PANAMÁ</div>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "var(--text-pure)", marginBottom: "12px" }}>
            Próximas Fechas por Confirmar
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "20px" }}>
            Nuevas sesiones grupales y corporativas en coordinación. Consulta disponibilidad para sumarte a la lista de espera o coordinar un taller privado:
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", gap: "8px", background: "rgba(7, 21, 43, 0.7)", padding: "20px 30px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-gold)", marginBottom: "20px" }}>
            <span style={{ fontSize: "18px", fontWeight: 800, color: "var(--gold-champagne)" }}>Modalidad Virtual y Presencial</span>
            <span style={{ fontSize: "14px", color: "var(--text-high)" }}>San Francisco, Ciudad de Panamá</span>
            <span style={{ fontSize: "12.5px", color: "var(--text-dim)" }}>Referencia de edición previa: 3 de octubre de 2026 (Finalizada)</span>
          </div>
          <div>
            <a href="/ai-para-todos/#fechas" className="btn btn-gold">
              Consultar convocatoria e inscripción →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
