import { SiteFooter, SiteHeader } from "./site-chrome";

const capabilities = [
  ["Aprender y organizar", "Investigar, resumir, planificar y convertir información en decisiones."],
  ["Crear contenido", "Pasar de una idea a texto, imagen, voz, video y publicación."],
  ["Automatizar trabajo", "Conectar herramientas y ejecutar procesos con reglas y control."],
  ["Construir soluciones", "Crear dashboards, aplicaciones, agentes y micro-SaaS."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader active="home" />

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">INTELIGENCIA ARTIFICIAL · EDUCACIÓN + IMPLEMENTACIÓN</p>
          <h1>La revolución de la inteligencia artificial es <em>para todos.</em></h1>
          <p className="hero-lead">Aprende a usarla en tu vida y profesión, o conviértela en una capacidad real dentro de tu empresa.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/ai-para-todos">Quiero aprender AI</a>
            <a className="button button-quiet" href="/empresas">Soy empresa <span>↗</span></a>
          </div>
        </div>

        <div className="hero-system" aria-label="Mapa visual de capacidades de inteligencia artificial">
          <div className="system-title"><span>UN UNIVERSO DE CAPACIDADES</span><strong>Una sola puerta de entrada.</strong></div>
          <div className="capability-grid">
            <article className="capability large models-card">
              <img className="models-bg" src="/images/models-hardware-v2.png" alt="" />
              <div className="models-shade" aria-hidden="true" />
              <div className="models-heading"><span>01</span><strong>Modelos</strong></div>
              <div className="model-logo-cloud" aria-label="Principales familias y laboratorios de modelos de inteligencia artificial">
                <span className="model-brand brand-openai"><img src="/brands/openai.png" alt="OpenAI" /></span>
                <span className="model-brand"><img src="/brands/google.png" alt="Google Gemini" /><b>GEMINI</b></span>
                <span className="model-brand"><img src="/brands/anthropic.png" alt="Anthropic Claude" /><b>CLAUDE</b></span>
                <span className="model-brand"><img src="/brands/meta.png" alt="Meta Llama" /><b>LLAMA</b></span>
                <span className="model-brand"><img src="/brands/deepseek.png" alt="DeepSeek" /><b>DEEPSEEK</b></span>
                <span className="model-brand"><img src="/brands/alibabacloud.png" alt="Alibaba Cloud Qwen" /><b>QWEN</b></span>
                <span className="model-brand"><img src="/brands/x.png" alt="xAI Grok" /><b>GROK</b></span>
              </div>
              <small className="models-caption">Lenguaje · razonamiento · multimodalidad</small>
            </article>
            <article className="capability photo-capability micro-card content-card">
              <img className="capability-photo" src="/images/home-content-v1.png" alt="" />
              <div className="capability-shade" aria-hidden="true" />
              <div className="capability-heading"><span>02</span><strong>Contenido</strong></div>
              <div className="compact-brand-grid content-brands" aria-label="Ejemplos de herramientas para crear y distribuir contenido">
                <span><img src="/brands/openai.png" alt="OpenAI" /><b>CHATGPT</b></span>
                <span><img src="/brands/google.png" alt="Google" /><b>FLOW · VEO</b></span>
                <span><img src="/brands/elevenlabs.svg" alt="ElevenLabs" /><b>ELEVENLABS</b></span>
                <span className="word-chip"><b>HIGGSFIELD</b></span>
                <span className="word-chip"><b>HEYGEN</b></span>
                <span><img src="/brands/youtube.svg" alt="YouTube" /><b>YOUTUBE</b></span>
              </div>
              <small className="capability-caption">Texto · imagen · voz · video</small>
            </article>
            <article className="capability photo-capability micro-card agents-card">
              <img className="capability-photo" src="/images/home-agents-v1.png" alt="" />
              <div className="capability-shade" aria-hidden="true" />
              <div className="capability-heading"><span>03</span><strong>Agentes</strong></div>
              <div className="compact-brand-grid agent-brands" aria-label="Ejemplos de plataformas y agentes de inteligencia artificial">
                <span><img src="/brands/openclaw.png" alt="OpenClaw" /><b>OPENCLAW</b></span>
                <span><img src="/brands/hermes.png" alt="Hermes" /><b>HERMES</b></span>
                <span><img src="/brands/openai.png" alt="OpenAI Codex" /><b>CODEX</b></span>
                <span><img src="/brands/anthropic.png" alt="Anthropic Claude Code" /><b>CLAUDE CODE</b></span>
                <span><img src="/brands/google.png" alt="Google Antigravity" /><b>ANTIGRAVITY</b></span>
              </div>
              <small className="capability-caption">Herramientas · acciones · autonomía</small>
            </article>
            <article className="capability photo-capability chart-card result-card" aria-hidden="true">
              <img className="capability-photo" src="/images/ai-todos-demostracion-v1.png" alt="" />
              <div className="capability-shade" />
              <div className="build-chain"><span>IDEA</span><i>→</i><span>APP</span></div>
              <small>DE LA INTENCIÓN AL RESULTADO</small>
            </article>
            <article className="capability photo-capability micro-card coding-card">
              <img className="capability-photo" src="/images/home-coding-v1.png" alt="" />
              <div className="capability-shade" aria-hidden="true" />
              <div className="capability-heading"><span>04</span><strong>Coding</strong></div>
              <div className="compact-brand-grid coding-brands" aria-label="Ejemplos de herramientas para construir software con inteligencia artificial">
                <span><img src="/brands/openai.png" alt="OpenAI Codex" /><b>CODEX</b></span>
                <span><img src="/brands/anthropic.png" alt="Anthropic Claude Code" /><b>CLAUDE CODE</b></span>
                <span><img src="/brands/google.png" alt="Google Antigravity" /><b>ANTIGRAVITY</b></span>
                <span><img src="/brands/github.png" alt="GitHub" /><b>GITHUB</b></span>
              </div>
              <small className="capability-caption">Apps · dashboards · SaaS</small>
            </article>
            <article className="capability wide photo-capability implementation-card">
              <img className="capability-photo" src="/images/home-implementation-v1.png" alt="" />
              <div className="capability-shade implementation-shade" aria-hidden="true" />
              <div className="implementation-copy"><span>05</span><strong>Implementación</strong><small>Datos → proceso → herramienta → resultado</small></div>
              <div className="implementation-stack" aria-label="Ejemplos de herramientas de infraestructura e implementación">
                <span><img src="/brands/ollama.png" alt="Ollama" /><b>OLLAMA</b></span>
                <span><img src="/brands/openrouter.png" alt="OpenRouter" /><b>OPENROUTER</b></span>
                <span><img src="/brands/github.png" alt="GitHub" /><b>GITHUB</b></span>
                <span><img src="/brands/vercel.png" alt="Vercel" /><b>VERCEL</b></span>
                <span><img src="/brands/render.png" alt="Render" /><b>RENDER</b></span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="proof-strip"><p>UNA NUEVA FORMA DE APRENDER Y TRABAJAR.</p><strong>Desarrolla capacidades que ya puedes utilizar.</strong><span>↓</span></section>

      <section className="section paths visual-paths" id="rutas">
        <div className="section-intro">
          <p className="eyebrow">DOS FORMAS DE COMENZAR</p>
          <h2>Elige tu puerta<br />de entrada.</h2>
          <p>El aprendizaje comienza con una pregunta sencilla: ¿quieres transformar tu forma de trabajar o la capacidad de toda una organización?</p>
        </div>

        <div className="path-grid">
          <a className="path-card visual-path-card path-1" href="/ai-para-todos">
            <div className="path-art photo-path-art learn-photo-art" aria-hidden="true"><img src="/images/home-learning-path-v1.png" alt="" /><div className="path-photo-shade" /><span className="visual-label">PERSONA / APRENDIZAJE</span><strong className="path-photo-note">APRENDE · USA · CONSTRUYE</strong></div>
            <div className="path-content"><p className="eyebrow">PERSONAS Y PROFESIONALES</p><h3>AI para Todos</h3><p>Entiende la revolución. Aprende a usarla. Empieza a construir.</p><span className="card-action">Conocer el entrenamiento <b>→</b></span></div>
          </a>
          <a className="path-card visual-path-card path-2" href="/empresas">
            <div className="path-art photo-path-art company-photo-art" aria-hidden="true"><img src="/images/home-business-path-v1.png" alt="" /><div className="path-photo-shade" /><span className="visual-label">EMPRESA / CAPACIDAD</span><strong className="path-photo-note">CAPACITA · INTEGRA · ESCALA</strong></div>
            <div className="path-content"><p className="eyebrow">EMPRESAS Y EQUIPOS</p><h3>BEE SMART Empresas</h3><p>Capacitación, arquitectura, agentes y herramientas alrededor de tu negocio.</p><span className="card-action">Explorar soluciones <b>→</b></span></div>
          </a>
        </div>
      </section>

      <section className="section capability-section">
        <div className="section-intro compact"><p className="eyebrow">QUÉ PUEDES HACER HOY</p><h2>De la curiosidad<br />a la utilidad.</h2><p>La inteligencia artificial ya puede acompañar procesos completos, desde una primera idea hasta una acción en el mundo real.</p></div>
        <div className="capability-list">
          {capabilities.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div className={`mini-graphic mg-${index + 1}`} aria-hidden="true"><i /><i /><i /></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section agent-statement">
        <div className="agent-copy"><p className="eyebrow light">LA ERA DE LOS AGENTES</p><h2>Una AI que entiende,<br /><em>conecta y actúa.</em></h2><p>Diseñamos capacidad interna para que personas y equipos puedan construir, automatizar y mejorar procesos con autonomía, seguridad y control.</p><a className="text-link light-link" href="/empresas">Descubre cómo funciona <span>→</span></a><div className="agent-platforms" aria-label="Ecosistema actual de agentes"><span><img src="/brands/openclaw.png" alt="OpenClaw" /><b>OPENCLAW</b></span><span><img src="/brands/hermes.png" alt="Hermes" /><b>HERMES</b></span><span><img src="/brands/openai.png" alt="OpenAI Codex" /><b>CODEX</b></span><span><img src="/brands/anthropic.png" alt="Anthropic Claude Code" /><b>CLAUDE CODE</b></span><span><img src="/brands/google.png" alt="Google Antigravity" /><b>ANTIGRAVITY</b></span></div></div>
        <div className="agent-map" aria-label="Representación gráfica de un agente conectado con herramientas"><span className="visual-label">ANATOMÍA DE UN AGENTE</span><div className="agent-core">AGENTE<span>Meta + contexto</span></div>{["DATOS","CORREO","WEB","SISTEMAS"].map((item,i)=><div className={`agent-tool tool-${i+1}`} key={item}>{item}</div>)}</div>
      </section>

      <section className="section method" id="metodo">
        <div className="section-intro compact"><p className="eyebrow">MÉTODO BEE SMART</p><h2>Del problema<br />al resultado.</h2><p>La tecnología se selecciona después de comprender qué debe mejorar y cómo vamos a medirlo.</p></div>
        <div className="method-visual"><img src="/images/home-method-v1.png" alt="" /><div className="method-visual-shade" aria-hidden="true" /><div><span>PROCESO APLICADO</span><strong>Evidencia → decisión → piloto → resultado</strong></div></div>
        <div className="method-flow">
          {[["01","Escuchar","Dolor y contexto"],["02","Diseñar","Proceso y control"],["03","Probar","Piloto funcional"],["04","Medir","Resultado y aprendizaje"],["05","Escalar","Autonomía y módulos"]].map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section final-cta" id="contacto">
        <p className="eyebrow light">TU SIGUIENTE PASO</p><h2>Aprende a usarla.<br />Ponla a trabajar.</h2><p>Escoge la ruta que corresponde a tu momento y comienza con una experiencia diseñada para producir claridad y resultados.</p>
        <div className="contact-options"><a className="button button-primary" href="/contacto#ai-para-todos">Quiero aprender AI</a><a className="button button-outline" href="/contacto#empresas">Quiero transformar mi empresa</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
import { SiteFooter, SiteHeader } from "./site-chrome";

const capabilities = [
  ["Aprender y organizar", "Investigar, resumir, planificar y convertir información en decisiones."],
  ["Crear contenido", "Pasar de una idea a texto, imagen, voz, video y publicación."],
  ["Automatizar trabajo", "Conectar herramientas y ejecutar procesos con reglas y control."],
  ["Construir soluciones", "Crear dashboards, aplicaciones, agentes y micro-SaaS."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader active="home" />

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">INTELIGENCIA ARTIFICIAL · EDUCACIÓN + IMPLEMENTACIÓN</p>
          <h1>La revolución de la inteligencia artificial es <em>para todos.</em></h1>
          <p className="hero-lead">Aprende a usarla en tu vida y profesión, o conviértela en una capacidad real dentro de tu empresa.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/ai-para-todos">Quiero aprender AI</a>
            <a className="button button-quiet" href="/empresas">Soy empresa <span>↗</span></a>
          </div>
        </div>

        <div className="hero-system" aria-label="Mapa visual de capacidades de inteligencia artificial">
          <div className="system-title"><span>UN UNIVERSO DE CAPACIDADES</span><strong>Una sola puerta de entrada.</strong></div>
          <div className="capability-grid">
            <article className="capability large models-card">
              <img className="models-bg" src="/images/models-hardware-v2.png" alt="" />
              <div className="models-shade" aria-hidden="true" />
              <div className="models-heading"><span>01</span><strong>Modelos</strong></div>
              <div className="model-logo-cloud" aria-label="Principales familias y laboratorios de modelos de inteligencia artificial">
                <span className="model-brand brand-openai"><img src="/brands/openai.png" alt="OpenAI" /></span>
                <span className="model-brand"><img src="/brands/google.png" alt="Google Gemini" /><b>GEMINI</b></span>
                <span className="model-brand"><img src="/brands/anthropic.png" alt="Anthropic Claude" /><b>CLAUDE</b></span>
                <span className="model-brand"><img src="/brands/meta.png" alt="Meta Llama" /><b>LLAMA</b></span>
                <span className="model-brand"><img src="/brands/deepseek.png" alt="DeepSeek" /><b>DEEPSEEK</b></span>
                <span className="model-brand"><img src="/brands/alibabacloud.png" alt="Alibaba Cloud Qwen" /><b>QWEN</b></span>
                <span className="model-brand"><img src="/brands/x.png" alt="xAI Grok" /><b>GROK</b></span>
              </div>
              <small className="models-caption">Lenguaje · razonamiento · multimodalidad</small>
            </article>
            <article className="capability photo-capability micro-card content-card">
              <img className="capability-photo" src="/images/home-content-v1.png" alt="" />
              <div className="capability-shade" aria-hidden="true" />
              <div className="capability-heading"><span>02</span><strong>Contenido</strong></div>
              <div className="compact-brand-grid content-brands" aria-label="Ejemplos de herramientas para crear y distribuir contenido">
                <span><img src="/brands/openai.png" alt="OpenAI" /><b>CHATGPT</b></span>
                <span><img src="/brands/google.png" alt="Google" /><b>FLOW · VEO</b></span>
                <span><img src="/brands/elevenlabs.svg" alt="ElevenLabs" /><b>ELEVENLABS</b></span>
                <span className="word-chip"><b>HIGGSFIELD</b></span>
                <span className="word-chip"><b>HEYGEN</b></span>
                <span><img src="/brands/youtube.svg" alt="YouTube" /><b>YOUTUBE</b></span>
              </div>
              <small className="capability-caption">Texto · imagen · voz · video</small>
            </article>
            <article className="capability photo-capability micro-card agents-card">
              <img className="capability-photo" src="/images/home-agents-v1.png" alt="" />
              <div className="capability-shade" aria-hidden="true" />
              <div className="capability-heading"><span>03</span><strong>Agentes</strong></div>
              <div className="compact-brand-grid agent-brands" aria-label="Ejemplos de plataformas y agentes de inteligencia artificial">
                <span><img src="/brands/openclaw.png" alt="OpenClaw" /><b>OPENCLAW</b></span>
                <span><img src="/brands/hermes.png" alt="Hermes" /><b>HERMES</b></span>
                <span><img src="/brands/openai.png" alt="OpenAI Codex" /><b>CODEX</b></span>
                <span><img src="/brands/anthropic.png" alt="Anthropic Claude Code" /><b>CLAUDE CODE</b></span>
                <span><img src="/brands/google.png" alt="Google Antigravity" /><b>ANTIGRAVITY</b></span>
              </div>
              <small className="capability-caption">Herramientas · acciones · autonomía</small>
            </article>
            <article className="capability cream chart-card" aria-hidden="true"><div className="build-chain"><span>IDEA</span><i>→</i><span>APP</span></div><small>DE LA INTENCIÓN AL RESULTADO</small></article>
            <article className="capability photo-capability micro-card coding-card">
              <img className="capability-photo" src="/images/home-coding-v1.png" alt="" />
              <div className="capability-shade" aria-hidden="true" />
              <div className="capability-heading"><span>04</span><strong>Coding</strong></div>
              <div className="compact-brand-grid coding-brands" aria-label="Ejemplos de herramientas para construir software con inteligencia artificial">
                <span><img src="/brands/openai.png" alt="OpenAI Codex" /><b>CODEX</b></span>
                <span><img src="/brands/anthropic.png" alt="Anthropic Claude Code" /><b>CLAUDE CODE</b></span>
                <span><img src="/brands/google.png" alt="Google Antigravity" /><b>ANTIGRAVITY</b></span>
                <span><img src="/brands/github.png" alt="GitHub" /><b>GITHUB</b></span>
              </div>
              <small className="capability-caption">Apps · dashboards · SaaS</small>
            </article>
            <article className="capability wide photo-capability implementation-card">
              <img className="capability-photo" src="/images/home-implementation-v1.png" alt="" />
              <div className="capability-shade implementation-shade" aria-hidden="true" />
              <div className="implementation-copy"><span>05</span><strong>Implementación</strong><small>Datos → proceso → herramienta → resultado</small></div>
              <div className="implementation-stack" aria-label="Ejemplos de herramientas de infraestructura e implementación">
                <span><img src="/brands/ollama.png" alt="Ollama" /><b>OLLAMA</b></span>
                <span><img src="/brands/openrouter.png" alt="OpenRouter" /><b>OPENROUTER</b></span>
                <span><img src="/brands/github.png" alt="GitHub" /><b>GITHUB</b></span>
                <span><img src="/brands/vercel.png" alt="Vercel" /><b>VERCEL</b></span>
                <span><img src="/brands/render.png" alt="Render" /><b>RENDER</b></span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="proof-strip"><p>UNA NUEVA FORMA DE APRENDER Y TRABAJAR.</p><strong>Desarrolla capacidades que ya puedes utilizar.</strong><span>↓</span></section>

      <section className="section paths visual-paths" id="rutas">
        <div className="section-intro">
          <p className="eyebrow">DOS FORMAS DE COMENZAR</p>
          <h2>Elige tu puerta<br />de entrada.</h2>
          <p>El aprendizaje comienza con una pregunta sencilla: ¿quieres transformar tu forma de trabajar o la capacidad de toda una organización?</p>
        </div>

        <div className="path-grid">
          <a className="path-card visual-path-card path-1" href="/ai-para-todos">
            <div className="path-art photo-path-art learn-photo-art" aria-hidden="true"><img src="/images/home-learning-path-v1.png" alt="" /><div className="path-photo-shade" /><span className="visual-label">PERSONA / APRENDIZAJE</span><strong className="path-photo-note">APRENDE · USA · CONSTRUYE</strong></div>
            <div className="path-content"><p className="eyebrow">PERSONAS Y PROFESIONALES</p><h3>AI para Todos</h3><p>Entiende la revolución. Aprende a usarla. Empieza a construir.</p><span className="card-action">Conocer el entrenamiento <b>→</b></span></div>
          </a>
          <a className="path-card visual-path-card path-2" href="/empresas">
            <div className="path-art photo-path-art company-photo-art" aria-hidden="true"><img src="/images/home-business-path-v1.png" alt="" /><div className="path-photo-shade" /><span className="visual-label">EMPRESA / CAPACIDAD</span><strong className="path-photo-note">CAPACITA · INTEGRA · ESCALA</strong></div>
            <div className="path-content"><p className="eyebrow">EMPRESAS Y EQUIPOS</p><h3>BEE SMART Empresas</h3><p>Capacitación, arquitectura, agentes y herramientas alrededor de tu negocio.</p><span className="card-action">Explorar soluciones <b>→</b></span></div>
          </a>
        </div>
      </section>

      <section className="section capability-section">
        <div className="section-intro compact"><p className="eyebrow">QUÉ PUEDES HACER HOY</p><h2>De la curiosidad<br />a la utilidad.</h2><p>La inteligencia artificial ya puede acompañar procesos completos, desde una primera idea hasta una acción en el mundo real.</p></div>
        <div className="capability-list">
          {capabilities.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div className={`mini-graphic mg-${index + 1}`} aria-hidden="true"><i /><i /><i /></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section agent-statement">
        <div className="agent-copy"><p className="eyebrow light">LA ERA DE LOS AGENTES</p><h2>Una AI que entiende,<br /><em>conecta y actúa.</em></h2><p>Diseñamos capacidad interna para que personas y equipos puedan construir, automatizar y mejorar procesos con autonomía, seguridad y control.</p><a className="text-link light-link" href="/empresas">Descubre cómo funciona <span>→</span></a><div className="agent-platforms" aria-label="Ecosistema actual de agentes"><span><img src="/brands/openclaw.png" alt="OpenClaw" /><b>OPENCLAW</b></span><span><img src="/brands/hermes.png" alt="Hermes" /><b>HERMES</b></span><span><img src="/brands/openai.png" alt="OpenAI Codex" /><b>CODEX</b></span><span><img src="/brands/anthropic.png" alt="Anthropic Claude Code" /><b>CLAUDE CODE</b></span><span><img src="/brands/google.png" alt="Google Antigravity" /><b>ANTIGRAVITY</b></span></div></div>
        <div className="agent-map" aria-label="Representación gráfica de un agente conectado con herramientas"><span className="visual-label">ANATOMÍA DE UN AGENTE</span><div className="agent-core">AGENTE<span>Meta + contexto</span></div>{["DATOS","CORREO","WEB","SISTEMAS"].map((item,i)=><div className={`agent-tool tool-${i+1}`} key={item}>{item}</div>)}</div>
      </section>

      <section className="section method" id="metodo">
        <div className="section-intro compact"><p className="eyebrow">MÉTODO BEE SMART</p><h2>Del problema<br />al resultado.</h2><p>La tecnología se selecciona después de comprender qué debe mejorar y cómo vamos a medirlo.</p></div>
        <div className="method-visual"><img src="/images/home-method-v1.png" alt="" /><div className="method-visual-shade" aria-hidden="true" /><div><span>PROCESO APLICADO</span><strong>Evidencia → decisión → piloto → resultado</strong></div></div>
        <div className="method-flow">
          {[["01","Escuchar","Dolor y contexto"],["02","Diseñar","Proceso y control"],["03","Probar","Piloto funcional"],["04","Medir","Resultado y aprendizaje"],["05","Escalar","Autonomía y módulos"]].map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section final-cta" id="contacto">
        <p className="eyebrow light">TU SIGUIENTE PASO</p><h2>Aprende a usarla.<br />Ponla a trabajar.</h2><p>Escoge la ruta que corresponde a tu momento y comienza con una experiencia diseñada para producir claridad y resultados.</p>
        <div className="contact-options"><a className="button button-primary" href="/contacto#ai-para-todos">Quiero aprender AI</a><a className="button button-outline" href="/contacto#empresas">Quiero transformar mi empresa</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
