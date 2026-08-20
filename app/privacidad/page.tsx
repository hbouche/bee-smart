import type { Metadata } from "next";
import { contact, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = { title: "Privacidad | BEE SMART" };

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <SiteHeader />
      <article className="section privacy-copy"><p className="eyebrow">PRIVACIDAD</p><h1>Uso responsable de tus datos.</h1><p>Los datos enviados mediante los formularios de BEE SMART se utilizan únicamente para responder solicitudes de información, reservas, diagnósticos o conversaciones comerciales.</p><h2>Qué recibimos</h2><p>Nombre, información de contacto, empresa cuando aplique y los detalles que decidas compartir sobre tu interés o necesidad.</p><h2>Para qué los usamos</h2><p>Para responderte, coordinar una conversación y recomendar el servicio o siguiente paso adecuado. No vendemos tus datos.</p><h2>Contacto</h2><p>Si deseas corregir o eliminar tu información, escribe a <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p></article>
      <SiteFooter />
    </main>
  );
}
