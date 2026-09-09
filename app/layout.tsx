import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "./site-chrome";
import { GoogleAnalytics } from "./google-analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://bee-smart.ai"),
  verification: {
    google: "009Ef9qmTCHp2g1xC9dwR4uyoMgZulDKNBTHAzqIONE",
    other: { "facebook-domain-verification": "i3tcb8vgly118g6jqf1kfx24eaxraz" },
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  title: "BEE SMART | Inteligencia Artificial para Todos",
  description: "Educación e implementación de inteligencia artificial para personas, profesionales y empresas.",
  openGraph: {
    title: "BEE SMART | Inteligencia Artificial para Todos",
    description: "Educación e implementación de inteligencia artificial para personas, profesionales y empresas.",
    url: "https://bee-smart.ai",
    siteName: "BEE SMART",
    locale: "es_PA",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 864, alt: "BEE SMART · Inteligencia artificial para todos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEE SMART | Inteligencia Artificial para Todos",
    description: "Educación e implementación de inteligencia artificial para personas, profesionales y empresas.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", "@id": "https://bee-smart.ai/#organization", name: "BEE SMART", url: "https://bee-smart.ai/", email: "hb@bee-smart.ai", telephone: "+50764301378", areaServed: "Panamá" }) }} />{children}<WhatsAppButton /><GoogleAnalytics /></body>
    </html>
  );
}
