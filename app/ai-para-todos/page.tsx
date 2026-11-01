import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../site-chrome";
import { registrationFormUrl } from "../site-data";

export const metadata: Metadata = {
  title: "IA para Todos | Curso de inteligencia artificial en Panamá",
  description: "Aprende IA desde cero con Humberto Bouché. Tres horas en vivo, online o presencial en San Francisco, Panamá. Sesiones y reserva por Google Forms.",
  alternates: { canonical: "https://bee-smart.ai/ai-para-todos/" },
};

export default function AiParaTodosPage() {
  return (
    <main className="content-wrapper">
      <SiteHeader active="learn" ctaHref="/agenda/" ctaLabel="Agendar 30 min" />

      {/* Hero IA para Todos */}
      <section className="hero-section">
        <div>
          <div className="eyebrow">CURSO FORMATIVO INTENSIVO · PANAMÁ</div>
          <h1>
            <span className="hero-title" style={{ display: "block" }}>
              IA para Todos. <em>En 3 horas en vivo.</em>
            </span>
          </h1>
          <p className="hero-desc">
            Sesión ejecutiva en vivo con Humberto Bouché. Diseñada para profesionales y directivos que quieren dominar las herramientas clave sin tecnicismos innecesarios.
          </p>

          <div className="hero-ctas">
            <a href="#fechas" className="btn btn-gold">
              Reservar plaza en lista →
            </a>
            <a href="#temario" className="btn btn-glass">
              Ver temario completo ↓
            </a>
          </div>
        </div>

        <div>
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--gold-champagne)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Modalidad Flexible
              </span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--cyan-bright)" }}>
                Panamá / Online
              </span>
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--text-pure)", marginBottom: "12px" }}>
              Sesión en Vivo con Acompañamiento
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
              Grupos reducidos para interactuar directamente, resolver casos de tu propia profesión y salir con herramientas configuradas.
            </p>
            <div style={{ background: "rgba(6, 17, 34, 0.7)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-sm)", padding: "12px 16px" }}>
              <span style={{ fontSize: "11px", color: "var(--gold-champagne)", fontWeight: 800, display: "block", marginBottom: "2px" }}>
                DISPONIBILIDAD:
              </span>
              <span style={{ fontSize: "13px", color: "var(--text-pure)", fontWeight: 700 }}>
                Modalidad bajo demanda / Fechas por confirmar
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Strip */}
      <section className="facts-strip" aria-label="Datos clave del curso">
        <div className="fact-item">
          <span className="fact-val">3 Horas</span>
          <span className="fact-lbl">Duración Intensiva</span>
        </div>
        <div className="fact-item">
          <span className="fact-val gold">$75</span>
          <span className="fact-lbl">Referencia histórica*</span>
        </div>
        <div className="fact-item">
          <span className="fact-val">6 Módulos</span>
          <span className="fact-lbl">Temario Práctico</span>
        </div>
        <div className="fact-item">
          <span className="fact-val">En Vivo</span>
          <span className="fact-lbl">Humberto Bouché</span>
        </div>
      </section>
      <p style={{ fontSize: "12px", color: "var(--text-dim)", textAlign: "center", marginTop: "-45px", marginBottom: "60px" }}>
        * Referencia histórica de edición previa ($75). Consulta precio y condiciones vigentes antes de inscribirte.
      </p>

      {/* Instructor Section */}
      <section className="instructor-card" aria-label="Instructor">
        <div className="instructor-avatar">
          <div className="instructor-initials">HB</div>
          <span className="instructor-tag">Instructor Principal</span>
        </div>
        <div>
          <div className="eyebrow eyebrow-cyan" style={{ marginBottom: "10px" }}>FACILITADOR DEL CURSO</div>
          <h2 style={{ fontSize: "28px", fontWeight: 900, color: "var(--text-pure)", marginBottom: "6px" }}>
            Humberto Bouché
          </h2>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--cyan-bright)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "16px" }}>
            Consultor de Estrategia e Implementación de IA en Panamá
          </span>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "16px" }}>
            Ayuda a empresas y ejecutivos a integrar herramientas de inteligencia artificial en sus operaciones diarias. Enfoque aplicado a productividad real, sin tecnicismos abstractos.
          </p>
          <a href="https://wa.me/50764301378" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ fontSize: "13px", padding: "8px 16px" }}>
            Escribir a Humberto por WhatsApp →
          </a>
        </div>
      </section>

      {/* 4 Audiences */}
      <section aria-label="A quién va dirigido">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px" }}>
          <div className="eyebrow">PERFIL DE PARTICIPANTES</div>
          <h2 className="section-title">¿Para quién es este curso?</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Diseñado para quienes buscan aprovechar la IA como una ventaja competitiva en su carrera o negocio.
          </p>
        </div>

        <div className="audience-grid">
          <div className="audience-card">
            <span className="audience-num">01 / EJECUTIVOS</span>
            <h3>Líderes y Directores</h3>
            <p>Comprende el impacto estratégico de la IA, evalúa herramientas con criterio y dirige a tus equipos hacia la adopción efectiva.</p>
          </div>

          <div className="audience-card">
            <span className="audience-num">02 / EMPRENDEDORES</span>
            <h3>Dueños de Negocios</h3>
            <p>Automatiza tareas repetitivas, genera propuestas comerciales y optimiza recursos sin necesidad de contratar agencias externas.</p>
          </div>

          <div className="audience-card">
            <span className="audience-num">03 / PROFESIONALES</span>
            <h3>Consultores y Especialistas</h3>
            <p>Multiplica tu velocidad de investigación, redacción de informes y análisis de datos manteniendo tu estándar de calidad.</p>
          </div>

          <div className="audience-card">
            <span className="audience-num">04 / CREADORES</span>
            <h3>Comunicadores y Ventas</h3>
            <p>Produce contenido multicanal (artículos, guiones, imágenes y correos) alineado a la identidad de tu marca.</p>
          </div>
        </div>
      </section>

      {/* 6 Curricular Modules */}
      <section id="temario" aria-label="Temario completo">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 50px" }}>
          <div className="eyebrow eyebrow-cyan">ESTRUCTURA ACADÉMICA</div>
          <h2 className="section-title">Los 6 Módulos del Programa</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            De los fundamentos a la práctica avanzada en una progresión lógica y accionable.
          </p>
        </div>

        <div className="modules-grid">
          <div className="module-card">
            <div>
              <div className="module-num">MÓDULO 01</div>
              <h3>La revolución de la inteligencia artificial</h3>
              <p>Qué cambió en el mundo laboral, qué es mito y qué es realidad productiva. Por qué la IA no sustituye al criterio profesional.</p>
            </div>
          </div>

          <div className="module-card">
            <div>
              <div className="module-num">MÓDULO 02</div>
              <h3>Cómo funciona realmente un LLM</h3>
              <p>Tokens, ventanas de contexto, sesgos y alucinaciones. Entiende la mecánica interna para predecir cuándo el modelo acertará y cuándo fallará.</p>
            </div>
          </div>

          <div className="module-card">
            <div>
              <div className="module-num">MÓDULO 03</div>
              <h3>El mapa de herramientas actual</h3>
              <p>Panorama comparativo entre Claude, GPT, Gemini, Perplexity, DeepSeek y herramientas especializadas. Cuándo usar cuál según el objetivo.</p>
            </div>
          </div>

          <div className="module-card">
            <div>
              <div className="module-num">MÓDULO 04</div>
              <h3>Cómo dirigir a la IA: prompting estructurado</h3>
              <p>Frameworks de instrucción profesional: rol, contexto, restricciones, ejemplos y formatos de salida para obtener resultados consistentes.</p>
            </div>
          </div>

          <div className="module-card">
            <div>
              <div className="module-num">MÓDULO 05</div>
              <h3>Qué puedes crear: texto, imagen, voz y video</h3>
              <p>Demostración práctica de generación multimedia: documentos analíticos, creativos gráficos, clonación de voz y videos asistidos.</p>
            </div>
          </div>

          <div className="module-card">
            <div>
              <div className="module-num">MÓDULO 06</div>
              <h3>Del caso al resultado: flujo de trabajo integral</h3>
              <p>Construcción en vivo de un proceso completo: desde la ingesta de un problema real hasta el entregable final listo para presentar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Tool Groups */}
      <section aria-label="Ecosistema de herramientas">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
          <div className="eyebrow">TECNOLOGÍAS QUE DOMINARÁS</div>
          <h2 className="section-title">El Ecosistema de Herramientas</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Aprenderás a operar las herramientas líderes del mercado con soltura y criterio.
          </p>
        </div>

        <div className="tools-grid">
          <div className="tool-group-card">
            <div className="tool-group-head">
              <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--gold-champagne)", background: "rgba(245,208,97,0.12)", padding: "4px 10px", borderRadius: "6px" }}>
                01. LENGUAJE
              </span>
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-pure)" }}>
                Modelos Fundacionales
              </h3>
            </div>
            <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.5 }}>
              Redacción, análisis de contratos, síntesis de informes y generación de código.
            </p>
            <div className="tool-pills-wrap">
              <span className="tool-pill">ChatGPT (GPT-4o)</span>
              <span className="tool-pill">Claude 3.5 Sonnet</span>
              <span className="tool-pill">Google Gemini</span>
              <span className="tool-pill">DeepSeek</span>
            </div>
          </div>

          <div className="tool-group-card">
            <div className="tool-group-head">
              <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--cyan-bright)", background: "rgba(0,229,255,0.12)", padding: "4px 10px", borderRadius: "6px" }}>
                02. MULTIMEDIA
              </span>
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-pure)" }}>
                Imagen, Voz y Video
              </h3>
            </div>
            <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.5 }}>
              Creación de activos visuales, locuciones corporativas y prototipos audiovisuales.
            </p>
            <div className="tool-pills-wrap">
              <span className="tool-pill">Midjourney</span>
              <span className="tool-pill">ElevenLabs</span>
              <span className="tool-pill">Runway Gen-3</span>
              <span className="tool-pill">Kling AI</span>
            </div>
          </div>

          <div className="tool-group-card">
            <div className="tool-group-head">
              <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--gold-champagne)", background: "rgba(245,208,97,0.12)", padding: "4px 10px", borderRadius: "6px" }}>
                03. BÚSQUEDA
              </span>
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-pure)" }}>
                Investigación y Síntesis
              </h3>
            </div>
            <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.5 }}>
              Exploración de fuentes bibliográficas, competidores y tendencias con citas verificadas.
            </p>
            <div className="tool-pills-wrap">
              <span className="tool-pill">Perplexity Pro</span>
              <span className="tool-pill">Genspark</span>
              <span className="tool-pill">NotebookLM</span>
            </div>
          </div>

          <div className="tool-group-card">
            <div className="tool-group-head">
              <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--cyan-bright)", background: "rgba(0,229,255,0.12)", padding: "4px 10px", borderRadius: "6px" }}>
                04. AUTOMATIZACIÓN
              </span>
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-pure)" }}>
                Agentes y Conectores
              </h3>
            </div>
            <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.5 }}>
              Flujos autónomos entre correo, hojas de cálculo, mensajería y bases de datos.
            </p>
            <div className="tool-pills-wrap">
              <span className="tool-pill">Make.com</span>
              <span className="tool-pill">n8n</span>
              <span className="tool-pill">Claude Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7 FAQs */}
      <section aria-label="Preguntas frecuentes">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px" }}>
          <div className="eyebrow">RESOLUCIÓN DE DUDAS</div>
          <h2 className="section-title">Preguntas Frecuentes</h2>
        </div>

        <div className="faq-list">
          <details className="faq-item">
            <summary>¿Necesito conocimientos previos de programación o matemáticas?</summary>
            <div className="faq-content">
              No, en lo absoluto. El curso está diseñado para usuarios no técnicos. La interacción con los modelos se realiza íntegramente mediante lenguaje natural en español.
            </div>
          </details>

          <details className="faq-item">
            <summary>¿Qué formato tiene la sesión y dónde se imparte?</summary>
            <div className="faq-content">
              Ofrecemos dos modalidades: sesión virtual interactiva por Google Meet o taller presencial en Ciudad de Panamá. Ambas modalidades son en vivo con Humberto Bouché.
            </div>
          </details>

          <details className="faq-item">
            <summary>¿Entregan grabación y material de apoyo?</summary>
            <div className="faq-content">
              Sí. Todos los participantes reciben la grabación íntegra de la sesión, la guía PDF de prompts ejecutivos y acceso a la lista de recursos recomendados.
            </div>
          </details>

          <details className="faq-item">
            <summary>¿Qué cuentas de herramientas necesito tener listas antes del curso?</summary>
            <div className="faq-content">
              Con una cuenta gratuita de ChatGPT y Google es suficiente para aprovechar el 100% de los ejercicios. Durante la sesión te mostraremos cuándo vale la pena pagar planes premium.
            </div>
          </details>

          <details className="faq-item">
            <summary>¿Puedo pagar con Yappy o transferencia local en Panamá?</summary>
            <div className="faq-content">
              Sí, aceptamos pagos locales vía Yappy Comercial y transferencia bancaria directa (ACH / Banco General). Las instrucciones de pago se coordinan al confirmar la cohorte.
            </div>
          </details>

          <details className="faq-item">
            <summary>¿Ofrecen capacitaciones privadas para empresas o comités ejecutivos?</summary>
            <div className="faq-content">
              Sí. Para grupos corporativos ofrecemos el programa in-company IA 101 adaptado a los procesos específicos de tu sector. Puedes ver más detalles en la sección de Empresas.
            </div>
          </details>

          <details className="faq-item">
            <summary>¿Cómo confirmo la fecha de la próxima sesión?</summary>
            <div className="faq-content">
              Las sesiones se abren bajo demanda en grupos reducidos. Regístrate en el formulario inferior o escribe por WhatsApp para unirte a la lista de la próxima fecha confirmada.
            </div>
          </details>
        </div>
      </section>

      {/* Inscription Form Section */}
      <section id="fechas" className="inscription-card" aria-label="Inscripción y convocatoria">
        <div id="inscribir" style={{ position: "relative", top: "-20px" }} />
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div className="eyebrow">LISTA DE ESPERA & CONVOCATORIAS</div>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "var(--text-pure)", marginBottom: "8px" }}>
            Reserva tu plaza en Google Forms
          </h2>
          <p style={{ fontSize: "14.5px", color: "var(--text-muted)" }}>
            La reserva de plaza se confirma formalmente después de validar el pago correspondiente.
          </p>
        </div>

        <div style={{ background: "rgba(7, 21, 43, 0.75)", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-gold)", marginBottom: "28px", textAlign: "center" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--gold-champagne)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
            PRÓXIMAS FECHAS POR CONFIRMAR
          </span>
          <strong style={{ fontSize: "22px", color: "var(--text-pure)", display: "block", marginBottom: "6px" }}>
            Consulta de Fechas · Próximas Convocatorias por Confirmar
          </strong>
          <span style={{ fontSize: "15px", color: "var(--text-high)", display: "block", marginBottom: "4px" }}>
            Modalidad Online y Presencial en San Francisco, Ciudad de Panamá
          </span>
          <span style={{ fontSize: "13px", color: "var(--text-dim)", display: "block", marginTop: "8px" }}>
            Referencia histórica de sesión previa: 3 de octubre de 2026 (Finalizada)
          </span>
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href={registrationFormUrl}
            target="_blank"
            rel="noreferrer"
            data-event="registration_click"
            className="btn btn-gold btn-block"
            style={{ fontSize: "15px", padding: "14px 24px" }}
          >
            Abrir formulario oficial de inscripción en Google Forms ↗
          </a>
          <p style={{ fontSize: "12px", color: "var(--text-dim)", marginTop: "14px" }}>
            El formulario oficial recopila nombre, correo, teléfono y comprobante para formalizar tu registro sin intermediarios.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
