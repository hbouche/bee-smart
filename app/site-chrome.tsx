/* eslint-disable @next/next/no-html-link-for-pages */
import type { ReactNode } from "react";

type HeaderProps = {
  active?: "home" | "learn" | "business" | "contact";
  ctaHref?: string;
  ctaLabel?: string;
};

export const contact = {
  email: "hb@bee-smart.ai",
  phoneDisplay: "+507 6430-1378",
  phone: "50764301378",
  whatsapp: "https://wa.me/50764301378?text=Hola%20Humberto%2C%20vi%20BEE%20SMART%20y%20quiero%20conversar.",
};

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="/" aria-label="BEE SMART, inicio">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>BEE SMART</span>
    </a>
  );
}

export function SiteHeader({ active = "home", ctaHref = "/contacto", ctaLabel = "Hablemos" }: HeaderProps) {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Navegación principal">
        <a className={active === "learn" ? "active" : ""} href="/ai-para-todos">AI para Todos</a>
        <a className={active === "business" ? "active" : ""} href="/empresas">Empresas</a>
        <a href="/#metodo">Cómo trabajamos</a>
        <a className={active === "contact" ? "active" : ""} href="/contacto">Contáctenos</a>
      </nav>
      <a className="button button-small button-dark" href={ctaHref}>{ctaLabel}</a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Brand footer />
      <div className="footer-contact">
        <strong>Humberto Bouche · AI Scientist</strong>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer">{contact.phoneDisplay}</a>
      </div>
      <div className="footer-links"><a href="/ai-para-todos">AI para Todos</a><a href="/empresas">Empresas</a><a href="/contacto">Contacto</a><a href="/privacidad">Privacidad</a><span>Panamá · 2026</span></div>
    </footer>
  );
}

export function WhatsAppButton() {
  return <a className="whatsapp-float" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar con Humberto por WhatsApp"><span aria-hidden="true">↗</span> WhatsApp</a>;
}

export function VisualLabel({ children }: { children: ReactNode }) {
  return <span className="visual-label">ESPACIO VISUAL · {children}</span>;
}
