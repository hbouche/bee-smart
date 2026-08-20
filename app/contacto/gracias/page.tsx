/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { contact, SiteFooter, SiteHeader } from "../../site-chrome";

export const metadata: Metadata = { title: "Solicitud recibida | BEE SMART" };

export default function ThanksPage() {
  return (
    <main className="thanks-page">
      <SiteHeader />
      <section className="thanks-card"><p className="eyebrow">MENSAJE RECIBIDO</p><h1>Gracias por dar<br />el primer paso.</h1><p>Tu información fue enviada. Humberto se pondrá en contacto contigo para continuar la conversación.</p><div className="contact-options"><a className="button button-primary" href="/">Volver al inicio</a><a className="button button-dark" href={contact.whatsapp} target="_blank" rel="noreferrer">Escribir por WhatsApp</a></div></section>
      <SiteFooter />
    </main>
  );
}
