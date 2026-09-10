import { SiteImage } from "../site-image";
/* eslint-disable @next/next/no-img-element */
import { contact, SiteFooter, SiteHeader } from "../site-chrome";
import { businessFormUrl, registrationFormUrl } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("Contacto | BEE SMART Panamá", "Agenda una llamada con Humberto Bouche, reserva IA para Todos o cuéntanos qué necesita tu empresa.", "/contacto/", "/images/humberto-bouche-ai-para-todos-1600.webp");

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader active="contact" ctaHref="/agenda" ctaLabel="Agenda una llamada" />

      <section className="contact-hero">
        <div>
          <p className="eyebrow">HABLEMOS</p>
          <h1>La próxima conversación<br /><em>puede cambiar tu forma de trabajar.</em></h1>
          <p>Cuéntanos qué quieres aprender, qué proceso necesita mejorar o qué oportunidad estás viendo. Elegimos contigo el mejor primer paso.</p>
        </div>
        <div className="contact-direct-grid">
          <a href="/agenda"><span>01</span><strong>Agendar una llamada</strong><small>30 minutos · Google Meet</small><b>→</b></a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer"><span>02</span><strong>Conversar ahora</strong><small>WhatsApp · {contact.phoneDisplay}</small><b>↗</b></a>
          <a href={`mailto:${contact.email}`}><span>03</span><strong>Escribir por correo</strong><small>{contact.email}</small><b>↗</b></a>
        </div>
      </section>

      <section className="section contact-profile">
        <div className="contact-profile-media">
          <SiteImage src="/images/humberto-bouche-ai-para-todos.png" alt="Humberto Bouche presentando IA para Todos ante un equipo empresarial" />
        </div>
        <div className="contact-profile-copy">
          <p className="eyebrow">DETRÁS DE BEE SMART</p>
          <h2>Humberto Bouche</h2>
          <strong>Especialista en inteligencia artificial</strong>
          <p>Combina experiencia ejecutiva, emprendimiento y construcción de soluciones con inteligencia artificial para ayudar a personas y empresas a convertir la tecnología en capacidad útil, medible y propia.</p>
          <div className="profile-links"><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a><a href={`mailto:${contact.email}`}>{contact.email} <span>↗</span></a></div>
        </div>
      </section>

      <section className="section contact-forms">
        <div className="contact-form-card" id="ai-para-todos">
          <div className="contact-form-intro"><span>01</span><p className="eyebrow">IA PARA TODOS</p><h2>Quiero aprender IA.</h2><p>Para personas, profesionales, grupos privados y equipos que quieren comenzar con una base clara.</p></div>
          <div className="contact-form-redirect">
            <p>Para reservar una sesión abierta, completa el formulario de IA para Todos. Allí seleccionas tu fecha y adjuntas el comprobante. La reserva se confirma después de validar el pago.</p>
            <a className="button button-primary" href={registrationFormUrl} target="_blank" rel="noreferrer" data-event="registration_click">Abrir formulario de reserva ↗</a>
            <p><a href="/ai-para-todos/#fechas">Ver fechas, horario y programa</a>. ¿Solo tienes una pregunta? <a href={contact.whatsapp} target="_blank" rel="noreferrer">Conversemos por WhatsApp</a>.</p>
          </div>
        </div>

        <div className="contact-form-card business-form" id="empresas">
          <div className="contact-form-intro"><span>02</span><p className="eyebrow light">EMPRESAS</p><h2>Quiero transformar un proceso.</h2><p>Descríbenos el dolor o la oportunidad. La primera conversación sirve para ordenar el problema y recomendar una ruta realista.</p></div>
          <div className="contact-form-redirect">
            <p>Si quieres conversar de inmediato, escoge una hora disponible. Si prefieres explicar el contexto primero, completa la solicitud empresarial.</p>
            <div className="contact-options contact-form-actions"><a className="button button-primary" href="/agenda">Agendar llamada</a>{businessFormUrl ? <a className="button button-outline" href={businessFormUrl} target="_blank" rel="noreferrer" data-event="business_form_click">Enviar formulario ↗</a> : null}</div>
            <p>No requiere pago ni adjuntar documentos. Usaremos los datos para responder a tu solicitud. <a href="/privacidad/">Ver privacidad</a>.</p>
          </div>
        </div>
      </section>

      <section className="section contact-work" aria-labelledby="contact-work-title">
        <div className="contact-work-copy">
          <p className="eyebrow">NUESTRO ENFOQUE DE TRABAJO</p>
          <h2 id="contact-work-title">La capacidad interna se construye trabajando juntos.</h2>
          <p>Diseñamos la arquitectura, acompañamos la implementación y ayudamos al equipo a convertir la inteligencia artificial en una herramienta cotidiana.</p>
        </div>
        <div className="contact-work-gallery">
          <figure className="contact-work-main">
            <SiteImage src="/images/ingredienta-session.webp" alt="Sesión de trabajo de BEE SMART con el equipo de Ingredienta" />
            <figcaption>Arquitectura e implementación · recreación visual</figcaption>
          </figure>
          <figure className="contact-work-secondary">
            <SiteImage src="/images/capacidad-interna-session.webp" alt="Sesión de capacitación sobre capacidad interna con inteligencia artificial" />
            <figcaption>Capacitación de equipos · recreación visual</figcaption>
          </figure>
        </div>
      </section>

      <section className="section contact-close">
        <p className="eyebrow light">ELIGE TU MOMENTO</p><h2>¿Prefieres hablar?</h2><p>Reserva una llamada de 30 minutos o escríbele directamente a Humberto y cuéntale en una línea qué quieres resolver.</p><div className="contact-options"><a className="button button-primary" href="/agenda">Agendar llamada</a><a className="button button-outline" href={contact.whatsapp} target="_blank" rel="noreferrer">Abrir WhatsApp</a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
