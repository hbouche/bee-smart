import { SiteHeader, SiteFooter } from "./site-chrome";

export default function NotFound() {
  return (
    <main className="content-wrapper not-found-section">
      <SiteHeader active="home" ctaHref="/agenda/" ctaLabel="Agendar 30 min" />

      <div className="not-found-card">
        <div className="not-found-code">404</div>
        <div className="eyebrow">RUTA NO ENCONTRADA</div>
        <h1 style={{ fontSize: "26px", fontWeight: 800, color: "var(--text-pure)", margin: "12px 0 16px" }}>
          La página solicitada no está disponible.
        </h1>
        <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "28px" }}>
          La dirección ingresada no coincide con ninguna de las rutas canónicas del sitio. Puedes volver al inicio o explorar las secciones principales:
        </p>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/" className="btn btn-gold">
            Ir al Inicio →
          </a>
          <a href="/empresas/" className="btn btn-glass">
            Empresas
          </a>
          <a href="/ai-para-todos/" className="btn btn-glass">
            IA para Todos
          </a>
          <a href="/contacto/" className="btn btn-glass">
            Contacto
          </a>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
