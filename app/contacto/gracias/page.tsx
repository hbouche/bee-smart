/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { contact, SiteFooter, SiteHeader } from "../../site-chrome";

export const metadata: Metadata = { title: "Contacto | BEE SMART", robots: { index: false, follow: true } };

export default function ThanksPage() {
  return (
    <main className="thanks-page">
      <SiteHeader />
      <section className="thanks-card"><p className="eyebrow">SIGAMOS EN CONTACTO</p><h1>Gracias por dar<br />el primer paso.</h1><p>La confirmación del envío aparece directamente en Google Forms. Si tienes dudas sobre tu solicitud, escríbenos.</p><div className="contact-options"><a className="button button-primary" href="/contacto/">Ir a contacto</a><a className="button button-dark" href={contact.whatsapp} target="_blank" rel="noreferrer">Escribir por WhatsApp</a></div></section>
      <SiteFooter />
    </main>
  );
}
