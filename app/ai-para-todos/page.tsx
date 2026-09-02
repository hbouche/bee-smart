import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

const registrationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdcJrolmjXe4thTcWSdB0weAgMqS1qknes9tA8mRw3HmPxFKg/viewform?usp=publish-editor";

const sessions = [
  { day: "10", month: "SEP", modality: "Online", time: "7:30 p. m.", place: "En vivo por videollamada" },
  { day: "24", month: "SEP", modality: "Online", time: "7:30 p. m.", place: "En vivo por videollamada" },
  { day: "30", month: "SEP", modality: "Presencial", time: "7:00 p. m.", place: "Ciudad de Panamá · lugar por definir" },
];

export const metadata: Metadata = {
  title: "IA para Todos | BEE SMART",
  description: "Una experiencia en vivo para entender la inteligencia artificial, usar sus herramientas y comenzar a construir con criterio.",
};

const audiences = [
  ["01", "Vida diaria", "Aprende, organiza, compara opciones y convierte información en decisiones."],
  ["02", "Trabajo", "Investiga, analiza, redacta y produce mejor sin perder tu criterio."],
  ["03", "Contenido", "Pasa de una idea a texto, imagen, voz y video con un proceso claro."],
  ["04", "Proyectos", "Entiende cómo nacen automatizaciones, agentes, dashboards y aplicaciones."],
];

const modules = [
  ["01", "La revolución", "Qué cambió, por qué la IA se volvió accesible y dónde ya está transformando nuestra vida."],
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
  ["IA para Marketing", "/images/home-business-path-v1.png", "Estrategia · campañas · medición"],
  ["Content Generation", "/images/home-content-v1.png", "Texto · imagen · voz · video"],
  ["IA para Finanzas", "/images/ai-todos-demostracion-v1.png", "Análisis · escenarios · control"],
  ["IA para Operaciones", "/images/home-implementation-v1.png", "Procesos · datos · automatización"],
  ["Construye con IA", "/images/home-coding-v1.png", "Apps · dashboards · micro-SaaS"],
  ["Agentes de IA", "/images/home-agents-v1.png", "Metas · herramientas · acciones"],
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
      <SiteHeader active="learn" ctaHref="#fechas" ctaLabel="Reservar" />

      <section className="product-hero learn-hero-v2" id="inicio">
        <div className="product-hero-copy">
          <p className="eyebrow">BEE SMART · ENTRENAMIENTO ESENCIAL</p>
          <p className="display-kicker">IA</p>
          <h1>para<br /><em>Todos.</em></h1>
          <p>Entiende la revolución. Aprende a usar sus herramientas. Empieza a construir con criterio.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#fechas">Ver fechas y reservar</a>
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

      <section className="product-facts"><span>3 HORAS</span><span>ONLINE O PRESENCIAL</span><span>EN VIVO</span><span>PRECIO DE LANZAMIENTO · $75</span></section>

      <section className="section sessions-section" id="fechas">
        <div className="sessions-heading">
          <div><p className="eyebrow">PRÓXIMAS SESIONES</p><h2>Escoge tu fecha.<br />Reserva tu cupo.</h2></div>
          <p>Tres horas para entender la IA, aprender a utilizar sus herramientas y comenzar a construir con criterio. No necesitas periencia previa.</p>
        </div>
        <div className="session-grid">
          {sessions.map((session, index) => (
            <article className={`session-card session-${index + 1}`} key={session.day}>
              <div className="session-card-top"><span>0{index + 1}</span><strong>{session.modality}</strong></div>
              <div className="session-date"><b>{session.day}</b><span>{session.month}</span></div>
              <div className="session-details"><strong>{session.time}</strong><p>{session.place}</p><small>3 HORAS · $75 · CUPOS LIMITADOS</small></div>
              <a className="button button-primary" href={registrationFormUrl} target="_blank" rel="noreferrer">Reservar esta fecha</a>
            </article>
          ))}
        </div>
        <p className="sessions-payment-note">Tu cupo queda garantizado cuando completes el formulario y adjuntes el comprobante de pago.</p>
      </section>

      <section className="section audience-section">
        <div className="section-intro"><p className="eyebrow">PARA QUIÉN ES</p><h2>Una entrada útil,<br />vengas de donde vengas.</h2><p>No necesitas saber programar. Comenzamos con los conceptos esenciales y llegamos hasta lo que ya puedes hacer hoy.</p></div>
        <div className="learn-audience-grid">{audiences.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true" /></article>)}</div>
      </section>

      <section className="section program-section" id="programa">
        <div className="program-title"><p className="eyebrow light">EL RECORRIDO</p><h2>Del panorama completo<br />a tu primer resultado.</h2><p>Una experiencia amplia y práctica: profundidad suficiente para entender la tecnología y claridad suficiente para comenzar a utilizarla.</p></div>
        <div className="program-visual">
          <img src="/images/ai-todos-programa-taller-v1.png" alt="Grupo de adultos participando en un taller práctico de inteligencia artificial" />
          <div className="program-visual-shade" aria-hidden="true" />
          <div className="program-visual-copy"><span>RECORRIDO COMPLETO</span><strong>Del universo de la IA<br />a una acción que puedes repetir.</strong></div>
          <div className="program-visual-track" aria-label="Etapas del entrenamiento"><span>ENTENDER</span><i>→</i><span>USAR</span><i>→</i><span>CREAR</span><i>→</i><span>ACTUAP������𽑥��(��������𽑥��(���������؁�����9���􉵽�ձ���ɥ�������ձ�̹�����m���ѥѱ���ѕ��t�������ѥ�������������������������������ѥѱ���������ѕ��������ѥ������𽑥��(�������͕�ѥ���((�������͕�ѥ��������9����͕�ѥ������ɸ�ѽ��̵͕�ѥ����(���������؁�����9����͕�ѥ������ɼ�������Ј���������9����啉ɽ܈�!II5%9QL�I1L������Y�́����ѕ�����Ȁ���է������������������9���́չ�����ф������ɍ�́���ո�Ʌ�������́ո��������Ʉ�ɕ������ȁ�������Ʌ����ф��Օ�����Ց��є�͕�鸁����Ք��ե�ɕ́���Ʌȸ���𽑥��(���������؁�����9���􉱕�ɸ�ѽ����ɥ���(�����������ѽ��ɽ��̹������ɽ���������ѥ���������9����큱��ɸ�ѽ�����ɐ�ѽ�����ɐ���ɽ������􁭕���ɽ������(�������������؁�����9���􉱕�ɸ�ѽ���٥�Յ���񥵜��Ɍ��ɽ��������􁅱�􈈀���؁�ɥ�����������Ք�����������ɽ�����������𽑥��(�������������؁�����9���􉱕�ɸ�ѽ���������؁�����9���􉱕�ɸ�ѽ�������������ɽ���ѥѱ�����𽑥��(������������������ɽ���ѕ������(���������������؁�����9���􉱕�ɸ��Ʌ������Ր���ɽ����Ʌ��̹�����m�Ɍ������t������������������������Ɍ����񥵜��Ɍ���ɍ􁅱�􈈀���������������������𽑥��(������������𽑥��(������������ѥ������(��������𽑥��(����������������9���􉱕�ɸ�ѽ��̵��є��1�́���Ʌ����х́�ٽ�Ս�������������ѥټ��������ɕ������Ѽ��́�Ք���ѥ����́���ͥ�ѕ�����Օ��͕́�եȁ��ɕ�����������(�������͕�ѥ���((�������͕�ѥ��������9����͕�ѥ������ɸ�����ɥ������(���������؁�����9���􉱕�ɸ�����ɥ������������������9����啉ɽ܁����Ј�AI9H�!
%9<������1��ѕ������ѕ�ɥ��Ȁ�����չ��������Ʌ��͸�������Y���́�͵��չ������ͥ����͔����٥��є����ո�ɕ�ձх���х������聑�͑���ɝ����ȁ����ɵ���͸����ɕ�ȁ���ѕ��������ф�������եȁո����՗ż���͡���ɐ���չ�����Ʌ����ф����𽑥��(���������؁�����9�������ɥ�����٥�Յ���(����������񥵜��Ɍ􈽥����̽���ѽ��̵������Ʌ������Ĺ��������������Ʌ��͸�����ѥ����Ք��Ʌ�͙�ɵ����ѽ́������ͽ́���ո���͡���ɐ����(�����������؁�����9�������ɥ�����٥�Յ��͡������ɥ�����������Ք����(�������������������8�Y%Y<���������ɽ���9���ͥ�����H����ѕ�Ѽ��H�������Ս��͸��H�م������͸���ɽ���𽑥��(��������𽑥��(���������؁�����9�������ɥ������ɽ���̈��ɥ��������Aɽ��ͼ�������������Ʌ��͸�����ѥ����(�����������ml��Ĉ���9���ͥ��������������́���������ɕͽ�ٕ�͔��t��l��Ȉ����ɕ���͸�������́���ѕ�Ѽ�䁍ɥѕɥ�̸�t��l��̈���
�����Ս��͸����1��%��ɽ�Ս��䁍����ф��t��l��Ј���Y�������͸����I�٥ͅ��́��ѕ́����ͅȸ�ut������m��ѥѱ��ѕ��t�������ѥ������������������������������ɽ����ѥѱ�����ɽ����͵�����ѕ����͵������ѥ������(��������𽑥��(�������͕�ѥ���((�������͕�ѥ��������9����͕�ѥ���х���݅�̵͕�ѥ����(���������؁�����9����͕�ѥ������ɼ�������Ј���������9����啉ɽ܈�M1L�
=8������
��ɥ������Ʉ�Ȁ��͕�եȁ�م�酹���������������ѥټ��́�Ք�ɕ����鍅́�����չ�����̰��͍���́���Ʌ����х́䁍�������́��������ȁ%������������鄁䁍ɥѕɥ�����𽑥��(���������؁�����9����х���݅䵝ɥ����х���݅�̹�����mѥѱ��ѕ��t����������ѥ���������ѥѱ�������������������������؁�����9�����х���݅��嵉����嵉��������������ɥ�����������Ք��񤀼�񤀼�񤀼�𽑥������ѥѱ���������ѕ��������ѥ������𽑥��(�������͕�ѥ���((�������͕�ѥ��������9����͕�ѥ���͍�����ѕ�͕Ȉ�(���������؁�����9����͕�ѥ������ɼ����������9����啉ɽ܈�	�M5IP�M
!==0������%���Ʉ�Q�����Ȁ���́���������鼸�����������́�Օ��́�ɽ�չ���ȁ�������ɕ���Ք���͔́������ф������ԁ�Ʌ�������ԁ��������������Ք��ե�ɕ́������եȸ���𽑥��(���������؁�����9��������������Ʌ������������ѥ�̹�����mѥѱ�����������ѥ��t����������ѥ���������ѥѱ����؁�����9�������������٥�Յ���񥵜��Ɍ�������􁅱�􈈀��񤁅ɥ�����������Ք�������������������������𽑥���؁�����9������������䵍�������ɽ����ѥѱ�����ɽ������퍅�ѥ�������͵����AKMa%559Q�͵����𽑥����ѥ������𽑥��(�������͕�ѥ���((�������͕�ѥ��������9����͕�ѥ�����ɵ�е͕�ѥ������􉙽ɵ�ѽ̈�(�������������������9����啉ɽ܈�=I5Q<�1a%	1����������͵��ɕ���ɥ����Ȁ���́����Ʌ́���٥٥ɱ�������������9���􉙽ɵ�е������������������Ʉ����ͽ��̰������́�ɥم��́䁕�ե��́�Ք��ե�ɕ��������ȁ����չ����͔����鸸���𽑥��(���������؁�����9���􉙽ɵ�е��ѥ��̈���ѥ���������������������=�����������ɽ���́��Ʌ́���٥ټ���ɽ������
����хє���͑������������̸�%����唁������ѽ̰�������Ʌ��͸������ѥ����ե������ɕ�չх̸�����ѥ������ѥ���������������������Aɕ͕�����������ɽ���́��Ʌ́���
�Ց������A��������ɽ������U�������ɥ��������ɍ���������ѥ�����Ʉ���ɕ���Ȱ��ɽ��ȁ���Ʌ����х́�ɕͽ�ٕȁ�Ց�́�����������Ѽ������ѥ����𽑥��(�������͕�ѥ���((�������͕�ѥ��������9����͕�ѥ�����ĵ͕�ѥ����(�������������������9����啉ɽ܈�AIU9QL�I
U9QL�������ѕ́���Ȁ��������ȸ���𽑥��(���������؁�����9���􉙅ĵ���Ј�(�����������х��́�������յ�����
�9���ͥѼ�����ɥ�������ɕ٥����յ��������9���1��͕ͧ͸�������鄁��͑����́�չ�����ѽ́䁅م�鄁�����������́���ɽ̸���𽑕х����(�����������х������յ�����
�Q������Ք�ͅ��ȁ�ɽ�Ʌ������յ��������9���Q�������ٕ��́�͵�����%���ɵ�є�������եȁͥ�����ѥȁ�������������ѽ́�������́�م�酑�̸���𽑕х����(�����������х������յ�����
�́��Ʉ��ͼ����ͽ�������ɽ��ͥ�������յ��������A�Ʉ�����̸�1�́��ͽ́�Չɕ��٥������ɥ����Ʌ���������ѕ���������ɕ�������Ѽ�䁹������̸���𽑕х����(�����������х������յ�����
�AՕ���ѽ���͔������������յ��������O�����є�ո���ɵ�Ѽ���Ʉ������́�ɥم��́�չ��ٕ�ͧ͸������Ʌѥل���Ʉ���ե��̸���𽑕х����(�����������х������յ�����
�E�������ͥѼ���Ʉ����ѥ��������յ��������U��������х��Ʉ�������͸�����ѕɹ�Ё䁍�ɥ�ͥ������ѕ́������͕ͧ͸�ɕ������́չ�������͕�����������ɕ��Ʌ��͸����𽑕х����(�����������х������յ�����
�͵����Ʌ�ѥ鼁����������յ��������
�����ф������ɵձ�ɥ����������ȁe���䁼��Ʌ�͙�ɕ����������ɥ��䁅��չф��ԁ����ɽ���є��Q�������ɵ�ɕ��́���ɕ͕�ل�������́���م����ȁ�����������𽑕х����(��������𽑥��(�������͕�ѥ���((�������͕�ѥ��������9����͕�ѥ����������ф����ɸ�����������ɕ͕�ل��(����������������9����啉ɽ܁����Ј�QT�M%U%9Q�AM<������e��ѕ����́�����̸�Ȁ��͍���������儸������Qɕ͕́ͥ���́�����ɵ���́���͕�ѥ���ɔ�����������ɕ͕�������
�����ф������ɵձ�ɥ���ɕ���鄁��������䁅��չф��ԁ����ɽ���є���Ʉ���Ʌ�ѥ�ȁ������������؁�����9���􉍽�х�е��ѥ��̈�񄁍����9������ѽ�����ѽ���ɥ���䈁�ɕ���ɕ����Ʌѥ���ɵUɱ�хɝ���}�������ɕ�􉹽ɕ���ɕȈ�I�͕�مȁ���������񄁍����9������ѽ�����ѽ����ѱ������ɕ�􈽍��х�Ѽ����ɕ̈ͅ�	�͍�����ٕ�ͧ͸����ɕͅɥ����𽑥��(�������͕�ѥ���((�������M�ѕ��ѕȀ��(����𽵅���(����)�
