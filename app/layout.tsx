import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEE SMART | Inteligencia Artificial para Todos",
  description: "Educación e implementación de inteligencia artificial para personas, profesionales y empresas.",
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
