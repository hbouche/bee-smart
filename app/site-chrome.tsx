/* eslint-disable @next/next/no-html-link-for-pages */
import type { ReactNode } from "react";

type HeaderProps = {
  active?: "home" | "learn" | "business";
  ctaHref?: string;
  ctaLabel?: string;
};

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="/" aria-label="BEE SMART, inicio">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>BEE SMART</span>
    </a>
  );
}

export function SiteHeader({ active = "home", ctaHref = "#contacto", ctaLabel = "Hablemos" }: HeaderProps) {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Navegación principal">
        <a className={active === "learn" ? "active" : ""} href="/ai-para-todos">AI para Todos</a>
        <a className={active === "business" ? "active" : ""} href="/empresas">Empresas</a>
        <a href="/#metodo">Cómo trabajamos</a>
      </nav>
      <a className="button button-small button-dark" href={ctaHref}>{ctaLabel}</a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Brand footer />
      <p>Inteligencia artificial para la vida, el trabajo y los negocios.</p>
      <div className="footer-links"><a href="/ai-para-todos">AI para Todos</a><a href="/empresas">Empresas</a><span>Panamá · 2026</span></div>
    </footer>
  );
}

export function VisualLabel({ children }: { children: ReactNode }) {
  return <span className="visual-label">ESPACIO VISUAL · {children}</span>;
}
