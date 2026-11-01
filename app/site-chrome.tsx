import type { ReactNode } from "react";
import { MobileNavigation } from "./mobile-navigation";
import { AnalyticsPreferencesButton } from "./google-analytics";

type HeaderProps = {
  active?: "home" | "learn" | "business" | "contact" | "agenda" | "privacy";
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
    <a className={`brand${footer ? " brand-footer" : ""}`} href="/" aria-label="BEE SMART - Inicio">
      <svg className="brand-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 19.2727C22 20.779 20.779 22 19.2727 22H14.7273C13.221 22 12 20.779 12 19.2727V12H19.2727C20.779 12 22 13.221 22 14.7273V19.2727Z" fill="#68C4FF"/>
        <path d="M20 2C21.1046 2 22 2.89543 22 4V7C22 8.10457 21.1046 9 20 9H17C15.8954 9 15 8.10457 15 7V4C15 2.89543 15.8954 2 17 2H20Z" fill="#0C79D8"/>
        <path d="M7 15C8.10457 15 9 15.8954 9 17V20C9 21.1046 8.10457 22 7 22H4C2.89543 22 2 21.1046 2 20V17C2 15.8954 2.89543 15 4 15H7Z" fill="#0C79D8"/>
        <path d="M12 12H4.72727C3.22104 12 2 10.779 2 9.27273V4.72727C2 3.22104 3.22104 2 4.72727 2H9.27273C10.779 2 12 3.22104 12 4.72727V12Z" fill="#2E9EFF"/>
      </svg>
      <span>BEE SMART</span>
    </a>
  );
}

export function SiteHeader({ active = "home", ctaHref = "/agenda/", ctaLabel = "Agendar 30 min" }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="content-wrapper header-container">
        <Brand />
        <nav className="header-nav desktop-nav" aria-label="Navegación principal">
          <a className={active === "home" ? "active" : ""} href="/" aria-current={active === "home" ? "page" : undefined}>Inicio</a>
          <a className={active === "business" ? "active" : ""} href="/empresas/" aria-current={active === "business" ? "page" : undefined}>Empresas</a>
          <a className={active === "learn" ? "active" : ""} href="/ai-para-todos/" aria-current={active === "learn" ? "page" : undefined}>IA para Todos</a>
          <a className={active === "agenda" ? "active" : ""} href="/agenda/" aria-current={active === "agenda" ? "page" : undefined}>Agenda</a>
          <a className={active === "contact" ? "active" : ""} href="/contacto/" aria-current={active === "contact" ? "page" : undefined}>Contacto</a>
        </nav>
        <div className="header-actions">
          <a className="btn btn-gold btn-header-cta" href={ctaHref}>{ctaLabel}</a>
          <MobileNavigation active={active} ctaHref={ctaHref} ctaLabel={ctaLabel} email={contact.email} whatsapp={contact.whatsapp} phone={contact.phoneDisplay} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-wrapper">
        <div className="footer-grid">
          <div>
            <Brand footer />
            <p className="footer-tagline">
              Educación e implementación de inteligencia artificial para profesionales y organizaciones en Panamá.
            </p>
            <span className="footer-copyright">
              &copy; 2026 BEE SMART · Ciudad de Panamá · Todos los derechos reservados.
            </span>
          </div>

          <div>
            <div className="footer-col-title">Rutas Principales</div>
            <ul className="footer-links-list">
              <li><a href="/">Inicio</a></li>
              <li><a href="/empresas/">BEE SMART Empresas</a></li>
              <li><a href="/ai-para-todos/">Curso IA para Todos</a></li>
              <li><a href="/agenda/">Agenda llamada Meet</a></li>
              <li><a href="/contacto/">Canales de Contacto</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Canales y Contacto</div>
            <ul className="footer-links-list">
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><a href={contact.whatsapp} target="_blank" rel="noreferrer">{contact.phoneDisplay}</a></li>
              <li><a href="/privacidad/">Política de Privacidad</a></li>
              <li><AnalyticsPreferencesButton /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar con Humberto por WhatsApp">
      <span aria-hidden="true">↗</span> WhatsApp
    </a>
  );
}

export function VisualLabel({ children }: { children: ReactNode }) {
  return <span className="visual-label">ESPACIO VISUAL · {children}</span>;
}
