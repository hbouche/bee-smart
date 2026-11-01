"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  active: string;
  ctaHref: string;
  ctaLabel: string;
  email: string;
  whatsapp: string;
  phone: string;
};

export function MobileNavigation({ active, ctaHref, ctaLabel, email, whatsapp, phone }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const close = () => {
    dialog.current?.close();
    setOpen(false);
  };

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const onChange = () => {
      if (desktop.matches) close();
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const items = [
    ["home", "/", "Inicio", "/"],
    ["business", "/empresas/", "Empresas", "/empresas/"],
    ["learn", "/ai-para-todos/", "IA para Todos", "/ai-para-todos/"],
    ["agenda", "/agenda/", "Agenda una llamada", "/agenda/"],
    ["contact", "/contacto/", "Contacto Directo", "/contacto/"],
    ["privacy", "/privacidad/", "Política de Privacidad", "/privacidad/"]
  ];

  return (
    <div className="mobile-navigation">
      <button
        ref={trigger}
        className="mobile-toggle mobile-navigation-trigger"
        type="button"
        aria-haspopup="dialog"
        aria-controls="navigation-dialog"
        aria-expanded={open}
        aria-label="Abrir menú de navegación"
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
      >
        <span />
        <span />
        <span />
      </button>

      <dialog
        ref={dialog}
        id="navigation-dialog"
        className="mobile-drawer mobile-nav-dialog"
        aria-labelledby="navigation-title"
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
      >
        <div className="mobile-nav-dialog-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <strong id="navigation-title" style={{ fontSize: "16px", letterSpacing: "0.08em", color: "var(--text-pure)" }}>BEE SMART</strong>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar menú"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid var(--border-card)", borderRadius: "4px", color: "var(--text-high)", padding: "6px 12px", cursor: "pointer", fontSize: "14px" }}
          >
            Cerrar &times;
          </button>
        </div>

        <nav aria-label="Navegación móvil" className="mobile-nav-list mobile-dialog-links">
          {items.map(([key, href, title, slug]) => (
            <a
              key={key}
              href={href}
              className={key === active ? "active" : ""}
              aria-current={key === active ? "page" : undefined}
              onClick={close}
            >
              {title} <span>{slug}</span>
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer" style={{ marginTop: "auto", paddingTop: "24px" }}>
          <a href={ctaHref} className="btn btn-gold btn-block" onClick={close}>
            {ctaLabel}
          </a>
          <p style={{ fontSize: "12px", color: "var(--text-dim)", textAlign: "center", marginTop: "14px" }}>
            Panamá · Humberto Bouché · <a href={`mailto:${email}`} style={{ color: "var(--cyan-bright)", textDecoration: "none" }}>{email}</a>
          </p>
        </div>
      </dialog>
    </div>
  );
}
