import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "./site-chrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://bee-smart.ai"),
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
      <body>{children}<WhatsAppButton /></body>
    </html>
  );
}
