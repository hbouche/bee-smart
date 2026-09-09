"use client";

import { useEffect, useRef, useState } from "react";

type Props = { active: string; ctaHref: string; ctaLabel: string; email: string; whatsapp: string; phone: string };

export function MobileNavigation({ active, ctaHref, ctaLabel, email, whatsapp, phone }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const close = () => dialog.current?.close();
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1001px)");
    const onChange = () => { if (desktop.matches) dialog.current?.close(); };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [open]);
  const items = [["home", "/", "Inicio"], ["learn", "/ai-para-todos/", "IA para Todos"], ["business", "/empresas/", "Empresas"], ["method", "/#metodo", "Cómo trabajamos"], ["contact", "/contacto/", "Contáctenos"]];
  return <div className="mobile-navigation">
    <button ref={trigger} className="mobile-navigation-trigger" aria-haspopup="dialog" aria-controls="navigation-dialog" aria-expanded={open} onClick={() => { dialog.current?.showModal(); setOpen(true); }}>Menú <span aria-hidden="true">☰</span></button>
    <dialog ref={dialog} id="navigation-dialog" className="mobile-nav-dialog" aria-labelledby="navigation-title" onClose={() => { setOpen(false); trigger.current?.focus(); }}>
      <div className="mobile-nav-dialog-head"><strong id="navigation-title">BEE SMART</strong><button type="button" autoFocus onClick={close} aria-label="Cerrar menú">Cerrar <span aria-hidden="true">×</span></button></div>
      <nav aria-label="Navegación móvil" className="mobile-dialog-links">{items.map(([key, href, title], index) => <a key={key} href={href} aria-current={key === active ? "page" : undefined} onClick={close}>{title}<span aria-hidden="true">0{index + 1}</span></a>)}</nav>
      <a className="button button-primary" href={ctaHref} onClick={close}>{ctaLabel}</a>
      <div className="mobile-dialog-contact"><a href={`mailto:${email}`}>{email}</a><a href={whatsapp} target="_blank" rel="noreferrer">{phone}</a></div>
    </dialog>
  </div>;
}
