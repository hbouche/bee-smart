import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "AI para Todos | BEE SMART",
  description: "Una experiencia en vivo para entender la inteligencia artificial, usar sus herramientas y comenzar a construir con criterio.",
};

const audiences = [
  ["01", "Vida diaria", "Aprende, organiza, compara opciones y convierte información en decisiones."],
  ["02", "Trabajo", "Investiga, analiza, redacta y produce mejor sin perder tu criterio."],
  ["03", "Contenido", "Pasa de una idea a texto, imagen, voz y video con un proceso claro."],
  ["04", "Proyectos", "Entiende cómo nacen automatizaciones, agentes, dashboards y aplicaciones."],
];

const modules = [
  ["01", "La revolución", "Qué cambió, por qué la AI se volvió accesible y dónde ya está transformando nuestra vida."],
  ["02", "Cómo funciona", "LLMs, tokens, parámetros, contexto, entrenamiento, multimodalidad y límites."],
  ["03", "El mapa de herramientas", "Modelos, aplicaciones, creación de contenido, automatización, agentes y coding."],
  ["04", "Cómo dirigirla", "Objetivo, contexto, referencias, iteración, verificación, privacidad y criterio humano."],
  ["05", "Qué puedes crear", "Texto, imágenes, video, voz, workflows, dashboards, aplicaciones y agentes."],
  ["06", "Del caso al resultado", "Una demostración práctica y una ruta personal para comenzar a aplicarla."],
];

const takeaways = [
  ["Mapa claro", "Distingues modelos, aplicaciones, agentes y herramientas sin perderte entre nombres."],
  ["Criterio", "Escoges según la tarea, la calidad, el costo, la velocidad, la privacidad y el control."],
  ["Método", "Sabes dar dirección, aportar contexto, iterar y verificar antes de utilizar un resultado."],
  ["Primeros casos", "Sales con oportunidades concretas para tu vida, profesión, contenido o negocio."],
];

const specialties = [
  ["AI Marketing", "/images/home-business-path-v1.png", "Estrategia · campañas · medición"],
  ["Content Generation", "/images/home-content-v1.png", "Texto · imagen · voz · video"],
  ["AI para Finanzas", "/images/ai-todos-demostracion-v1.png", "Análisis · escenarios · control"],
  ["AI Operaciones", "/images/home-implementation-v1.png", "Procesos · datos · automatización"],
  ["Construye con AI", "/images/home-coding-v1.png", "Apps · dashboards · micro-SaaS"],
  ["AI Agents", "/images/home-agents-v1.png", "Metas · herramientas · acciones"],
];

const toolGroups = [
  {
    n: "01", title: "Conversar e investigar",
    text: "Aprender, analizar, comparar y convertir información en trabajo útil.",
    image: "/images/models-hardware-v2.png",
    brands: [["/brands/openai.png", "ChatGPT"], ["/brands/anthropic.png", "Claude"], ["/brands/google.png", "Gemini"]],
  },
  {
    n: "02", title: "Crear contenido",
    text: "Texto, imagen, voz, video, edición, adaptación y publicación.",
    image: "/images/home-content-v1.png",
    brands: [["/brands/openai.png", "ChatGPT"], ["/brands/google.png", "Flow · Veo"], ["/brands/elevenlabs.svg", "ElevenLabs"], [null, "Higgsfield"], [null, "HeyGen"]],
  },
  {
    n: "03", title: "Construir",
    text: "Pasar de una necesidad a código, una aplicación o un servicio funcionando.",
    image: "/images/home-coding-v1.png",
    brands: [["/brands/openai.png", "Codex"], ["/brands/anthropic.png", "Claude Code"], ["/brands/google.png", "Antigravity"], ["/brands/github.png", "GitHub"]],
  },
  {
    n: "04", title: "Conectar y actuar",
    text: "Agentes que reciben una meta, utilizan herramientas y ejecutan con control.",
    image: "/images/home-agents-v1.png",
    brands: [["/brands/openclaw.png", "OpenClaw"], ["/brands/hermes.png", "Hermes"], ["/brands/openai.png", "Codex"], ["/brands/anthropic.png", "Claude Code"]],
  },
];

export default function AiParaTodosPage() {
  return (
    <main className="learn-page">
      <SiteHeader active="learn" ctaHref="#reserva" ctaLabel="Reservar" />

      <section className="product-hero learn-hero-v2" id="inicio">
        <div className="product-hero-copy">
          <p className="eyebrow">BEE SMART · ENTRENAMIENTO ESENCIAL</p>
          <p className="display-kicker">AI</p>
          <h1>para<br /><em>Todos.</em></h1>
          <p>Entiende la revolución. Aprende a usar sus herramientas. Empieza a construir con criterio.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#reserva">Quiero tomar el entrenamiento</a>
            <a className="text-link" href="#programa">Ver el programa <span>↓</span></a>
          </div>
        </div>
        <div className="learn-hero-photo" aria-label="Una persona aprendiendo y trabajando con inteligencia artificial en Ciudad de Panamá">
          <img src="/images/home-learning-path-v1.png" alt="Persona trabajando con una computadora en Ciudad de Panamá" />
          <div className="learn-hero-shade" aria-hidden="true" />
          <div className="learn-hero-badge"><span>UNA EXPERIENCIA EN VIVO</span><strong>ENTENDER<br />USAR<br />CREAR<br />ACTUAR</strong></div>
          <div className="learn-hero-note"><span>SIN EXPERIENCIA PREVIA</span><b>Conceptos + herramientas + demostración</b></div>
        </div>
      </section>

      <section className="product-facts"><span>2.5 HORAS</span><span>ONLINE O PRESENCIAL</span><span>EN VIVO</span><span>DEMOSTRACIÓN INCLUIDA</span></section>

      <section className="section audience-section">
        <div className="section-intro"><p className="eyebrow">PARA QUIÉN ES</p><h2>Una entrada útil,<br />vengas de donde vengas.</h2><p>No necesitas saber programar. Comenzamos con los conceptos esenciales y llegamos hasta lo que ya puedes hacer hoy.</p></div>
        <div className="learn-audience-grid">{audiences.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true" /></article>)}</div>
      </section>

      <section className="section program-section" id="programa">
        <div className="program-title"><p className="eyebrow light">EL RECORRIDO</p><h2>Del panorama completo<br />a tu primer resultado.</h2><p>Una experiencia amplia y práctica: profundidad suficiente para entender la tecnología y claridad suficiente para comenzar a utilizarla.</p></div>
        <div className="program-visual">
          <img src="/images/ai-todos-programa-taller-v1.png" alt="Grupo de adultos participando en un taller práctico de inteligencia artificial" />
          <div className="program-visual-shade" aria-hidden="true" />
          <div className="program-visual-copy"><span>RECORRIDO COMPLETO</span><strong>Del universo de la AI<br />a una acción que puedes repetir.</strong></div>
          <div className="program-visual-track" aria-label="Etapas del entrenamiento"><span>ENTENDER</span><i>→</i><span>USAR</span><i>→</i><span>CREAR</span><i>→</i><span>ACTUAR</span></div>
        </div>
        <div className="module-grid">{modules.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section learn-tools-section">
        <div className="section-intro compact"><p className="eyebrow">HERRAMIENTAS REALES</p><h2>Vas a entender<br />quién hace qué.</h2><p>No es una lista de marcas ni un ranking. Es un mapa para reconocer qué herramienta puede ayudarte según lo que quieres lograr.</p></div>
        <div className="learn-tool-grid">
          {toolGroups.map((group) => <article className={`learn-tool-card tool-card-${group.n}`} key={group.n}>
            <div className="learn-tool-visual"><img src={group.image} alt="" /><div aria-hidden="true" /><span>{group.n}</span></div>
            <div className="learn-tool-body"><div className="learn-tool-head"><h3>{group.title}</h3></div>
              <p>{group.text}</p>
              <div className="learn-brand-cloud">{group.brands.map(([src, name]) => <span key={name}>{src && <img src={src} alt="" />}<b>{name}</b></span>)}</div>
            </div>
          </article>)}
        </div>
        <p className="learn-tools-note">Las herramientas evolucionan. El objetivo del entrenamiento es que entiendas el sistema y puedas seguir aprendiendo.</p>
      </section>

      <section className="section learn-experience">
        <div className="learn-experience-copy"><p className="eyebrow light">APRENDER HACIENDO</p><h2>La teoría aterriza<br />en una demostración.</h2><p>Verás cómo una necesidad se convierte en un resultado tangible: desde organizar información o crear contenido hasta construir un pequeño dashboard o una herramienta.</p></div>
        <div className="experience-visual">
          <img src="/images/ai-todos-demostracion-v1.png" alt="Demostración práctica que transforma datos dispersos en un dashboard" />
          <div className="experience-visual-shade" aria-hidden="true" />
          <div><span>EN VIVO</span><strong>Necesidad → contexto → construcción → validación</strong></div>
        </div>
        <div className="experience-process" aria-label="Proceso de la demostración práctica">
          {[["01", "Necesidad", "Definimos qué debe resolverse."], ["02", "Dirección", "Damos contexto y criterios."], ["03", "Construcción", "La AI produce y conecta."], ["04", "Validación", "Revisamos antes de usar."]].map(([n,title,text]) => <article key={n}><span>{n}</span><strong>{title}</strong><small>{text}</small></article>)}
        </div>
      </section>

      <section className="section takeaways-section">
        <div className="section-intro compact"><p className="eyebrow">SALES CON</p><h2>Claridad para<br />seguir avanzando.</h2><p>El objetivo es que reconozcas oportunidades, escojas herramientas y comiences a aplicar AI con confianza y criterio.</p></div>
        <div className="takeaway-grid">{takeaways.map(([title,text],index)=><article key={title}><span>0{index+1}</span><div className={`takeaway-symbol symbol-${index+1}`} aria-hidden="true"><i /><i /><i /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section school-teaser">
        <div className="section-intro"><p className="eyebrow">BEE SMART SCHOOL</p><h2>AI para Todos<br />es el comienzo.</h2><p>Después puedes profundizar en el área que más se conecta con tu trabajo, tu negocio o lo que quieres construir.</p></div>
        <div className="specialty-track">{specialties.map(([title,image,caption],index)=><article key={title}><div className="specialty-visual"><img src={image} alt="" /><i aria-hidden="true" /><span>0{index+1}</span></div><div className="specialty-copy"><strong>{title}</strong><p>{caption}</p><small>PRÓXIMAMENTE</small></div></article>)}</div>
      </section>

      <section className="section format-section" id="formatos">
        <div><p className="eyebrow">FORMATO FLEXIBLE</p><h2>El mismo recorrido.<br />Dos maneras de vivirlo.</h2><p className="format-lead">Disponible para personas, grupos privados y equipos que quieren comenzar con una base común.</p></div>
        <div className="format-options"><article><span>01</span><h3>Una sesión</h3><strong>2 horas y 30 minutos</strong><p>Recorrido completo, demostración y preguntas en una sola experiencia.</p></article><article><span>02</span><h3>Dos sesiones</h3><strong>75 minutos cada una</strong><p>Más espacio entre bloques para practicar, procesar y regresar con preguntas.</p></article></div>
      </section>

      <section className="section faq-section">
        <div><p className="eyebrow">PREGUNTAS FRECUENTES</p><h2>Antes de<br />comenzar.</h2></div>
        <div className="faq-list">
          <details open><summary>¿Necesito experiencia previa?</summary><p>No. La sesión comienza desde los fundamentos y avanza con ejemplos claros.</p></details>
          <details><summary>¿Tengo que saber programar?</summary><p>No. También verás cómo la AI permite construir sin partir de conocimientos técnicos avanzados.</p></details>
          <details><summary>¿Es para uso personal o profesional?</summary><p>Para ambos. Los casos cubren vida diaria, trabajo, contenido, emprendimiento y negocios.</p></details>
          <details><summary>¿Puede tomarse en grupo?</summary><p>Sí. Existe un formato para grupos privados y una versión corporativa para equipos.</p></details>
          <details><summary>¿Qué necesito para participar?</summary><p>Una computadora, conexión a internet y curiosidad. Antes de la sesión recibirás una guía sencilla de preparación.</p></details>
        </div>
      </section>

      <section className="section final-cta learn-final" id="reserva">
        <p className="eyebrow light">TU SIGUIENTE PASO</p><h2>Entra al mundo de la AI<br />con un mapa claro.</h2><p>Disponible online, presencial y para grupos privados. Próximamente incorporaremos las fechas, el precio y el canal directo de reserva.</p><div className="contact-options"><a className="button button-primary" href="#formatos">Ver formatos</a><a className="button button-outline" href="/empresas">Busco la versión empresarial</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
