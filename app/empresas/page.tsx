import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../site-chrome";
import { EmpresasCanvas } from "./empresas-canvas";
import { businessFormUrl, bookingUrl } from "../site-data";

export const metadata: Metadata = {
  title: "BEE SMART Empresas | Soluciones de Inteligencia Artificial para Negocios",
  description: "Arquitectura e implementación de IA para empresas en Panamá. Automatización de procesos, consultoría estratégica y desarrollo a medida con supervisión humana.",
  alternates: { canonical: "https://bee-smart.ai/empresas/" },
};

export default function EmpresasPage() {
  return (
    <main className="content-wrapper">
      <SiteHeader active="business" ctaHref="/agenda/" ctaLabel="Agendar 30 min" />

      {/* Section 1: Hero Empresas */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="eyebrow">BEE SMART EMPRESAS · PANAMÁ</div>
          <h1 className="hero-headline">
            Arquitectura de IA con supervisión humana para <em>operaciones críticas.</em>
          </h1>
          <p className="hero-subhead">
            Diseñamos e implementamos sistemas de agentes y flujos de inteligencia artificial con compuertas de validación por tu equipo, integrados de forma gradual a tus herramientas y bases de datos actuales.
          </p>

          <div className="hero-ctas">
            <a
              href={businessFormUrl}
              target="_blank"
              rel="noreferrer"
              data-event="business_form_click"
              className="btn btn-gold"
            >
              Solicitar propuesta en Google Forms ↗
            </a>
            <a href="#mecanismo" className="btn btn-glass">
              Ver cómo funciona ↓
            </a>
          </div>

          <div className="hero-facts-bar">
            <div className="fact-item">
              <span className="fact-number" style={{ fontSize: "18px" }}>Control</span>
              <span className="fact-label">Supervisión Humana Activa</span>
            </div>
            <div className="fact-item">
              <span className="fact-number" style={{ fontSize: "18px" }}>Gradual</span>
              <span className="fact-label">Integración Sobre Tus Herramientas</span>
            </div>
            <div className="fact-item">
              <span className="fact-number" style={{ fontSize: "18px" }}>Panamá</span>
              <span className="fact-label">Sede & Acompañamiento</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-card">
            <div className="visual-card-badge">
              <span>Orquestador Modular</span>
              <span><span className="pulse-dot" /> Operación Asistida</span>
            </div>

            <div className="pipeline-preview">
              <div className="pipeline-step">
                <div className="step-icon">01</div>
                <div className="step-body">
                  <div className="step-title">Ingesta y Normalización</div>
                  <div className="step-desc">Facturas, correos, inventario y solicitudes</div>
                </div>
                <span className="step-badge">Flujo Activo</span>
              </div>

              <div className="pipeline-step active-gate">
                <div className="step-icon">⚡</div>
                <div className="step-body">
                  <div className="step-title">Compuerta de Supervisión Humana</div>
                  <div className="step-desc">Aprobación obligatoria antes de ejecutar</div>
                </div>
                <span className="step-badge">Control Crítico</span>
              </div>

              <div className="pipeline-step">
                <div className="step-icon">03</div>
                <div className="step-body">
                  <div className="step-title">Despacho hacia Sistemas Centrales</div>
                  <div className="step-desc">ERP, CRM, contabilidad y mensajería</div>
                </div>
                <span className="step-badge">Salida Guiada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 6 Operational Opportunities */}
      <section className="section-container" style={{ padding: "70px 0" }}>
        <div className="section-header" style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 50px" }}>
          <div className="eyebrow eyebrow-cyan">OPORTUNIDADES DE IMPACTO</div>
          <h2 className="section-title">6 áreas donde la IA genera resultados tangibles</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            No reemplazamos a tu personal: eliminamos la fricción administrativa para que tu equipo se concentre en decisiones estratégicas.
          </p>
        </div>

        <div className="opportunities-grid">
          <div className="opp-card">
            <div className="opp-num">01 / ATENCIÓN & TRIAJE</div>
            <h3 className="opp-title">Atención al cliente 24/7</h3>
            <p className="opp-text">
              Agentes que responden consultas frecuentes, recopilan datos de clientes y escalan casos sensibles a supervisores humanos con historial completo.
            </p>
          </div>

          <div className="opp-card">
            <div className="opp-num">02 / COTIZACIONES</div>
            <h3 className="opp-title">Cotizaciones y propuestas</h3>
            <p className="opp-text">
              Generación automática de presupuestos basados en listas de precios, inventario en tiempo real y reglas de margen preaprobadas por gerencia.
            </p>
          </div>

          <div className="opp-card">
            <div className="opp-num">03 / DOCUMENTOS</div>
            <h3 className="opp-title">Procesamiento de facturas</h3>
            <p className="opp-text">
              Lectura, extracción y conciliación de documentos de compra y venta contra órdenes existentes sin captura manual de datos.
            </p>
          </div>

          <div className="opp-card">
            <div className="opp-num">04 / COMPRAS & STOCK</div>
            <h3 className="opp-title">Gestión de inventario</h3>
            <p className="opp-text">
              Predicción de reposición según estacionalidad y generación de borradores de órdenes de compra con umbrales de seguridad.
            </p>
          </div>

          <div className="opp-card">
            <div className="opp-num">05 / EQUIPO</div>
            <h3 className="opp-title">Onboarding y capacitación</h3>
            <p className="opp-text">
              Sistemas de consulta interna entrenados exclusivamente sobre los manuales, políticas y procedimientos operativos de tu negocio.
            </p>
          </div>

          <div className="opp-card">
            <div className="opp-num">06 / CONTROL</div>
            <h3 className="opp-title">Auditoría y cumplimiento</h3>
            <p className="opp-text">
              Supervisión continua de transacciones para detectar desviaciones, anomalías o incumplimiento de directivas internas en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Anatomy Canvas */}
      <section className="anatomy-section" id="mecanismo" aria-label="Mecanismo de supervisión">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
          <div className="eyebrow">EL MECANISMO DE CONTROL</div>
          <h2 className="section-title">Anatomía del Orquestador Modular</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Ejemplo conceptual de puntos de aprobación humana antes de acciones críticas.
          </p>
        </div>

        <EmpresasCanvas />

        <div className="anatomy-callouts-grid">
          <div className="callout-box">
            <div className="callout-header">01. INGESTA</div>
            <h4 className="callout-heading">Datos y Documentos</h4>
            <p className="callout-desc">
              Captura estructurada desde correo, WhatsApp, formularios y archivos sin alterar tus repositorios.
            </p>
          </div>

          <div className="callout-box gate-box">
            <div className="callout-header">02. COMPUERTA HUMANA</div>
            <h4 className="callout-heading">Validación por Supervisor</h4>
            <p className="callout-desc">
              La IA formula la recomendación, pero la confirmación final requiere autorización humana explícita.
            </p>
          </div>

          <div className="callout-box">
            <div className="callout-header">03. DESPACHO</div>
            <h4 className="callout-heading">Sistemas Centrales</h4>
            <p className="callout-desc">
              Actualización segura en ERP, CRM o pasarelas mediante conectores controlados y auditables.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 3-Step Methodology */}
      <section className="section-container" style={{ padding: "70px 0" }}>
        <div className="section-header" style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 50px" }}>
          <div className="eyebrow">METODOLOGÍA DE ADOPCIÓN</div>
          <h2 className="section-title">La ruta en 3 etapas hacia la madurez en IA</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Un camino estructurado para minimizar riesgos y orientar la tecnología hacia el ahorro efectivo de horas de trabajo.
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-badge-large">01</div>
            <h3 className="step-card-title">Diagnóstico y Prueba de Concepto</h3>
            <p className="step-card-text">
              Revisamos tus flujos de trabajo actuales para priorizar un prototipo y acordar alcance y plazos según el diagnóstico de tu operación, sin garantías preestablecidas.
            </p>
          </div>

          <div className="step-card">
            <div className="step-badge-large">02</div>
            <h3 className="step-card-title">Implementación con Supervisión</h3>
            <p className="step-card-text">
              Conectamos los modelos con tus herramientas cotidianas y capacitamos a tu equipo en la dirección de agentes y control de compuertas de supervisión.
            </p>
          </div>

          <div className="step-card">
            <div className="step-badge-large">03</div>
            <h3 className="step-card-title">Autonomía Guiada y Escalamiento</h3>
            <p className="step-card-text">
              Tu empresa asume la operación interna asistida. Dejamos documentación técnica completa, métricas de desempeño y protocolos de mantenimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: IA 101 Corp Card */}
      <section className="corp-training-card" aria-label="Capacitación corporativa">
        <div>
          <div className="eyebrow eyebrow-cyan">CAPACITACIÓN EJECUTIVA IN-COMPANY</div>
          <h2 style={{ fontSize: "28px", fontWeight: 900, color: "var(--text-pure)", marginBottom: "14px" }}>
            Taller Corporativo IA 101
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
            Sesión intensiva privada para comités ejecutivos y mandos medios. Alineamos a tu liderazgo sobre capacidades reales, riesgos, gobernanza y aplicaciones prioritarias en tu sector.
          </p>
          <span className="price-historical-tag">
            Referencia histórica: desde USD 500 (servicio IA 101 corporativo). Consulta precio y condiciones vigentes antes de coordinar.
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center" }}>
          <a href="/agenda/" className="btn btn-gold btn-block">
            Agendar llamada de diagnóstico
          </a>
          <a href="https://wa.me/50764301378" target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-block">
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
