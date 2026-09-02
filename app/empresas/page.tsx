import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "BEE SMART Empresas | Capacidad interna de IA",
  description: "Capacitación, arquitectura, AI Head y módulos de inteligencia artificial diseñados alrededor de la operación real de cada empresa.",
};

const opportunities = [
  ["01", "Compras e importaciones", "Precosto, comparación de proveedores, documentos y aprobaciones."],
  ["02", "Inventario y operaciones", "Alertas, consultas, clasificación, proyección y control diario."],
  ["03", "Finanzas y contabilidad", "Reportes, presupuestos, conciliación, análisis y trazabilidad."],
  ["04", "Ventas y marketing", "Prospección, propuestas, CRM, campañas y producción de contenido."],
  ["05", "Servicio al cliente", "Clasificación de solicitudes, respuestas, seguimiento y escalamiento."],
  ["06", "Talento y administración", "Recruiting, onboarding, manuales, agenda y conocimiento interno."],
];

const route = [
  ["01", "IA 101 corporativo", "Un lenguaje común para entender capacidades, límites y oportunidades."],
  ["02", "Levantamiento abierto", "El equipo comparte dolores, procesos, datos y prioridades reales."],
  ["03", "Arquitectura ad hoc", "Definimos herramientas, accesos, infraestructura, seguridad y costos."],
  ["04", "Formación del AI Head", "Entrenamos a un responsable interno para dirigir y dar continuidad."],
  ["05", "Primer módulo", "Construimos una solución pequeña, funcional, controlada y medible."],
  ["06", "Expansión", "Sumamos módulos según impacto, aprendizaje y capacidad del equipo."],
];

const roadmap = [
  ["DÍA 30", "Comprende", "Mapea procesos, datos, riesgos y herramientas. Aprende a conversar, evaluar y documentar."],
  ["DÍA 60", "Construye", "Prototipa automatizaciones y aplicaciones pequeñas con un caso real del negocio."],
  ["DÍA 90", "Dirige", "Prioriza oportunidades, coordina proveedores y sostiene la operación con autonomía."],
];

const architectureGroups = [
  { label: "MODELOS Y TRABAJO", copy: "El modelo correcto para cada tarea, con acceso y costo visibles.", brands: [["openai.png", "ChatGPT"], ["google.png", "Gemini"], ["anthropic.png", "Claude"]] },
  { label: "CONSTRUCCIÓN", copy: "Herramientas para convertir necesidades en código y aplicaciones.", brands: [["openai.png", "Codex"], ["anthropic.png", "Claude Code"], ["google.png", "Antigravity"]] },
  { label: "AGENTES", copy: "Sistemas que consultan, deciden una ruta y usan herramientas con control.", brands: [["hermes.png", "Hermes"], ["openclaw.png", "OpenClaw"], ["openai.png", "OpenAI"]] },
  { label: "ORQUESTACIÓN", copy: "Modelos locales, múltiples proveedores y consumo administrado.", brands: [["ollama.png", "Ollama"], ["openrouter.png", "OpenRouter"], ["google.png", "Google Cloud"]] },
  { label: "CÓDIGO Y DESPLIEGUE", copy: "El código, su historia y el servicio que utiliza el equipo.", brands: [["github.png", "GitHub"], ["vercel.png", "Vercel"], ["render.png", "Render"]] },
];

const modules = [
  ["01", "Precosto + Compras", "Documentos, costos, proveedores, escenarios y aprobación."],
  ["02", "Inventario", "Consultas, movimientos, alertas y proyección de necesidades."],
  ["03", "Finanzas", "Reportes, presupuestos, conciliación y análisis asistido."],
  ["04", "Ventas + CRM", "Prospección, propuestas, seguimiento y próxima acción."],
  ["05", "Marketing + Contenido", "Estrategia, producción, adaptación, publicación y medición."],
  ["06", "Servicio", "Clasificación, respuesta, escalamiento y memoria del cliente."],
  ["07", "Reportes ejecutivos", "Indicadores, explicaciones, alertas y tableros accionables."],
  ["08", "Automatizaciones", "Rutas repetibles, integraciones, permisos y trazabilidad."],
];

const investments = [
  ["IA 101 corporativo", "Una sesión de 2½ horas o dos sesiones de 75 minutos.", "DESDE USD 500"],
  ["Arquitectura ad hoc", "Levantamiento, diseño técnico, seguridad y ruta de implementación.", "SEGÚN ALCANCE"],
  ["AI Head + primer módulo", "Entrenamiento del responsable y construcción acompañada.", "SEGÚN ALCANCE"],
  ["Módulos adicionales", "Una capacidad nueva, entregable, documentada y medible.", "SEGÚN ALCANCE"],
];

export default function EmpresasPage() {
  return (
    <main className="enterprise-page">
      <SiteHeader active="business" ctaHref="/contacto#empresas" ctaLabel="Solicitar diagnóstico" />

      <section className="enterprise-hero" id="inicio">
        <div className="enterprise-hero-copy">
          <p className="eyebrow light">BEE SMART PARA EMPRESAS</p>
          <h1>Convierte la IA en una <em>capacidad interna.</em></h1>
          <p className="enterprise-lead">Alineamos a tu equipo, diseñamos la arquitectura y construimos soluciones alrededor de la operación real de tu empresa.</p>
          <div className="hero-actions"><a className="button button-primary" href="/contacto#empresas">Solicitar diagnóstico</a><a className="text-link light-link" href="#ruta">Conocer la ruta <span>↓</span></a></div>
          <div className="enterprise-hero-proof"><span>CAPACITACIÓN</span><span>ARQUITECTURA</span><span>IMPLEMENTACIÓN</span></div>
        </div>
        <div className="enterprise-hero-media">
          <img src="/images/bee-smart-empresas-hero-v1.png" alt="Equipo empresarial trabajando sobre un proceso operativo" />
          <div className="enterprise-hero-shade" />
          <div className="enterprise-hero-card"><span>RESULTADO</span><strong>Autonomía para crear, operar y escalar.</strong></div>
        </div>
      </section>

      <section className="enterprise-manifesto"><p>CAPACIDAD INTERNA, CONECTADA Y SOSTENIBLE</p><strong>La tecnología se conecta con el negocio. El conocimiento se queda en el equipo.</strong><span>↘</span></section>

      <section className="section enterprise-opportunities">
        <div className="section-intro"><div><p className="eyebrow">DÓNDE EMPEZAR</p><h2>Cada área tiene<br />un primer caso útil.</h2></div><p>Partimos de un proceso con fricción, información disponible y un resultado que pueda medirse.</p></div>
        <div className="opportunity-grid">{opportunities.map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p><i /></article>)}</div>
      </section>

      <section className="section enterprise-route" id="ruta">
        <div className="route-heading"><p className="eyebrow light">RUTA EMPRESARIAL</p><h2>De entender IA<br />a operarla.</h2><p>Una secuencia clara para que las ideas del equipo se conviertan en capacidades sostenibles.</p></div>
        <div className="enterprise-route-list">{route.map(([n, title, copy]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div><b>→</b></article>)}</div>
      </section>

      <section className="section corporate-training">
        <div className="training-number">101</div>
        <div className="training-copy"><p className="eyebrow">LA PUERTA DE ENTRADA</p><h2>IA 101 corporativo.</h2><p>Una experiencia ejecutiva y educativa para que todo el equipo vea el mismo universo: modelos, contenido, agentes, coding, costos, privacidad y aplicaciones reales.</p><div className="training-facts"><span>2½ HORAS</span><span>ONLINE O PRESENCIAL</span><span>OPEN MIC INCLUIDO</span></div><a className="text-link" href="/ai-para-todos">Conocer el programa completo <span>↗</span></a></div>
        <div className="training-agenda">{["Entender el mapa de IA", "Ver herramientas y casos", "Identificar dolores del equipo", "Definir oportunidades iniciales"].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div>
      </section>

      <section className="section enterprise-aihead">
        <div className="aihead-lead"><p className="eyebrow light">MODELO AI HEAD</p><h2>Autonomía con<br />un responsable interno.</h2><p>Formamos a una persona que entiende el negocio y puede detectar oportunidades, dirigir herramientas, documentar decisiones y coordinar nuevas implementaciones.</p><div className="aihead-pillars"><span>NEGOCIO</span><span>DATOS</span><span>HERRAMIENTAS</span><span>CONTROL</span></div></div>
        <div className="aihead-roadmap">{roadmap.map(([time, title, copy]) => <article key={time}><span>{time}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="enterprise-architecture" id="arquitectura">
        <div className="architecture-photo"><img src="/images/bee-smart-empresas-architecture-v1.png" alt="Infraestructura tecnológica empresarial administrada por un especialista" /><div /><p><span>ARQUITECTURA AD HOC</span><strong>Cada pieza cumple una función.</strong></p></div>
        <div className="section architecture-content">
          <div className="architecture-intro"><h2>Herramientas, datos y control en una sola arquitectura.</h2><p>La combinación cambia según la tarea, la sensibilidad de la información, el presupuesto y la capacidad del equipo. La elección responde a la necesidad real.</p></div>
          <div className="architecture-groups">{architectureGroups.map(group => <article key={group.label}><div><span>{group.label}</span><p>{group.copy}</p></div><div className="architecture-brands">{group.brands.map(([src, name]) => <span key={`${group.label}-${name}`}><img src={`/brands/${src}`} alt="" /><b>{name}</b></span>)}</div></article>)}</div>
          <div className="architecture-locations"><span>NUBE</span><i>→</i><span>VPS</span><i>→</i><span>SERVIDOR PRIVADO</span><i>→</i><span>DISPOSITIVO LOCAL</span></div>
        </div>
      </section>

      <section className="section enterprise-modules" id="modulos">
        <div className="section-intro"><div><p className="eyebrow">MÓDULOS DE IMPLEMENTACIÓN</p><h2>Una necesidad.<br />Una capacidad nueva.</h2></div><p>Cada módulo se define por el resultado que entrega, los datos que necesita, sus responsables, controles y una métrica de adopción.</p></div>
        <div className="enterprise-module-grid">{modules.map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>)}</div>
      </section>

      <section className="section purchase-case" id="caso-practico">
        <div className="purchase-case-media"><img src="/images/bee-smart-empresas-precosto-v1.png" alt="Equipo revisando documentos, costos y proveedores en un proceso de compras" /><div /><span>CASO PRÁCTICO · PRECOSTO + COMPRAS</span></div>
        <div className="purchase-case-copy"><p className="eyebrow">DEL DOLOR AL MÓDULO</p><h2>Decidir antes,<br />con mejor información.</h2><p>Un primer módulo puede reunir cotizaciones, costos de importación, proveedores y reglas del negocio para comparar escenarios antes de aprobar una compra.</p><div className="case-flow">{["RECIBE", "EXTRAE", "CALCULA", "COMPARA", "APRUEBA"].map((item, i) => <span key={item}><b>0{i + 1}</b>{item}</span>)}</div><div className="case-result"><span>RESULTADO MEDIBLE</span><strong>Menos trabajo manual, decisiones trazables y conocimiento reutilizable.</strong></div></div>
      </section>

      <section className="section enterprise-investment">
        <div className="section-intro"><div><p className="eyebrow">INVERSIÓN DE REFERENCIA</p><h2>Comenzar pequeño.<br />Construir con dirección.</h2></div><p>La propuesta separa con claridad el servicio profesional, la implementación y el costo tecnológico recurrente.</p></div>
        <div className="enterprise-investment-list">{investments.map(([name, detail, price], i) => <article key={name}><span>0{i + 1}</span><div><h3>{name}</h3><p>{detail}</p></div><strong>{price}</strong></article>)}</div>
        <div className="cost-model">
          <article><span>01</span><h3>Servicios profesionales</h3><p>Diagnóstico, diseño, entrenamiento, documentación y acompañamiento.</p></article>
          <article><span>02</span><h3>Implementación</h3><p>Construcción, pruebas, integración, despliegue y transferencia.</p></article>
          <article><span>03</span><h3>Operación mensual</h3><p>Acompañamiento, mantenimiento, mejoras y soporte acordado.</p></article>
          <article><span>04</span><h3>Tecnología</h3><p>Licencias, modelos, APIs, VPS, servidores y almacenamiento pagados directamente.</p></article>
        </div>
      </section>

      <section className="section enterprise-final" id="diagnostico">
        <p className="eyebrow light">TU PRIMERA CONVERSACIÓN</p><h2>Trae el dolor.<br />Diseñamos la ruta.</h2><p>Una sesión inicial para entender el contexto, identificar oportunidades y recomendar un primer paso realista de capacitación o implementación.</p><div className="contact-options"><a className="button button-primary" href="/contacto#empresas">Solicitar diagnóstico</a><a className="button button-outline" href="/ai-para-todos">Ver IA para Todos corporativo</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
