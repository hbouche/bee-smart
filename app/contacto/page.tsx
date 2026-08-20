/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { contact, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Contacto | BEE SMART",
  description: "Conversemos sobre AI para Todos, capacitación corporativa, agentes e implementación de inteligencia artificial.",
};

const formAction = `https://formsubmit.co/${contact.email}`;

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader ctaHref={contact.whatsapp} ctaLabel="WhatsApp" />

      <section className="contact-hero">
        <div>
          <p className="eyebrow">HABLEMOS</p>
          <h1>La próxima conversación<br /><em>puede cambiar tu forma de trabajar.</em></h1>
          <p>Cuéntanos qué quieres aprender, qué proceso necesita mejorar o qué oportunidad estás viendo. Elegimos contigo el mejor primer paso.</p>
        </div>
        <div className="contact-direct-grid">
          <a href={contact.whatsapp} target="_blank" rel="noreferrer"><span>01</span><strong>Conversar ahora</strong><small>WhatsApp · {contact.phoneDisplay}</small><b>↗</b></a>
          <a href={`mailto:${contact.email}`}><span>02</span><strong>Escribir por correo</strong><small>{contact.email}</small><b>↗</b></a>
        </div>
      </section>

      <section className="section contact-profile">
        <div className="contact-profile-media">
          <img src="/images/humberto-bouche-contact.png" alt="Humberto Bouche guiando una sesión de trabajo sobre inteligencia artificial" />
        </div>
        <div className="contact-profile-copy">
          <p className="eyebrow">DETRÁS DE BEE SMART</p>
          <h2>Humberto Bouche</h2>
          <strong>AI Scientist</strong>
          <p>Combina experiencia ejecutiva, emprendimiento y construcción de soluciones con inteligencia artificial para ayudar a personas y empresas a convertir la tecnología en capacidad útil, medible y propia.</p>
          <div className="profile-links"><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a><a href={`mailto:${contact.email}`}>{contact.email} <span>↗</span></a></div>
        </div>
      </section>

      <section className="section contact-forms">
        <div className="contact-form-card" id="ai-para-todos">
          <div className="contact-form-intro"><span>01</span><p className="eyebrow">AI PARA TODOS</p><h2>Quiero aprender AI.</h2><p>Para personas, profesionales, grupos privados y equipos que quieren comenzar con una base clara.</p></div>
          <form action={formAction} method="POST">
            <input type="hidden" name="_subject" value="Nuevo interés · AI para Todos" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://bee-smart.ai/contacto/gracias/" />
            <input className="form-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
            <label>Nombre completo<input name="Nombre" type="text" autoComplete="name" required /></label>
            <div className="form-row"><label>Correo<input name="email" type="email" autoComplete="email" required /></label><label>WhatsApp<input name="WhatsApp" type="tel" autoComplete="tel" required /></label></div>
            <div className="form-row"><label>Modalidad<select name="Modalidad" required defaultValue=""><option value="" disabled>Selecciona</option><option>Online</option><option>Presencial</option><option>Quiero conocer ambas</option></select></label><label>Participación<select name="Participación" required defaultValue=""><option value="" disabled>Selecciona</option><option>Individual</option><option>Grupo privado</option><option>Equipo de una empresa</option></select></label></div>
            <label>¿Qué te gustaría aprender o lograr?<textarea name="Interés" rows={4} required /></label>
            <label className="privacy-check"><input type="checkbox" required /> <span>Acepto que BEE SMART use estos datos para responder a mi solicitud. <a href="/privacidad">Ver privacidad</a>.</span></label>
            <button className="button button-primary" type="submit">Enviar interés</button>
          </form>
        </div>

        <div className="contact-form-card business-form" id="empresas">
          <div className="contact-form-intro"><span>02</span><p className="eyebrow light">EMPRESAS</p><h2>Quiero transformar un proceso.</h2><p>Descríbenos el dolor o la oportunidad. La primera conversación sirve para ordenar el problema y recomendar una ruta realista.</p></div>
          <form action={formAction} method="POST">
            <input type="hidden" name="_subject" value="Nueva solicitud · Diagnóstico empresarial BEE SMART" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://bee-smart.ai/contacto/gracias/" />
            <input className="form-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
            <div className="form-row"><label>Nombre completo<input name="Nombre" type="text" autoComplete="name" required /></label><label>Empresa<input name="Empresa" type="text" autoComplete="organization" required /></label></div>
            <div className="form-row"><label>Cargo<input name="Cargo" type="text" autoComplete="organization-title" required /></label><label>WhatsApp<input name="WhatsApp" type="tel" autoComplete="tel" required /></label></div>
            <label>Correo corporativo<input name="email" type="email" autoComplete="email" required /></label>
            <label>¿Qué proceso, dolor u oportunidad quieres trabajar?<textarea name="Necesidad empresarial" rows={5} required /></label>
            <label>Primer paso que te interesa<select name="Primer paso" required defaultValue=""><option value="" disabled>Selecciona</option><option>Capacitación AI para Todos</option><option>Diagnóstico y arquitectura</option><option>AI Head para el equipo</option><option>Agente interno o automatización</option><option>No estoy seguro todavía</option></select></label>
            <label className="privacy-check"><input type="checkbox" required /> <span>Acepto que BEE SMART use estos datos para responder a mi solicitud. <a href="/privacidad">Ver privacidad</a>.</span></label>
            <button className="button button-primary" type="submit">Solicitar diagnóstico</button>
          </form>
        </div>
      </section>

      <section className="section contact-close">
        <p className="eyebrow light">SIN FORMULARIOS, SIN VUELTAS</p><h2>¿Prefieres hablar ahora?</h2><p>Escríbele directamente a Humberto y cuéntale en una línea qué quieres resolver.</p><a className="button button-primary" href={contact.whatsapp} target="_blank" rel="noreferrer">Abrir WhatsApp</a>
      </section>
      <SiteFooter />
    </main>
  );
}
