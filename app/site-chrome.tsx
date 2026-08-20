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
      <details className="mobile-menu">
        <summary aria-label="Abrir menú de navegación">
          <span>MENÚ</span>
          <i aria-hidden="true" />
          <i aria-hidden="true" />
        </summary>
        <div className="mobile-menu-panel">
          <nav className="mobile-nav" aria-label="Navegación móvil">
            <a className={active === "home" ? "active" : ""} href="/">Inicio <b>01</b></a>
            <a className={active === "learn" ? "active" : ""} href="/ai-para-todos">AI para Todos <b>02</b></a>
            <a className={active === "business" ? "active" : ""} href="/empresas">Empresas <b>03</b></a>
            <a href="/#metodo">Cómo trabajamos <b>04</b></a>
            <a className={active === "contact" ? "active" : ""} href="/contacto">Contáctenos <b>05</b></a>
          </nav>
          <a className="button button-primary mobile-menu-cta" href={ctaHref}>{ctaLabel}</a>
          <div className="mobile-menu-contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">{contact.phoneDisplay}</a>
          </div>
        </div>
      </details>
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
