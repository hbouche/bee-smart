import type { Metadata } from "next";
import { siteOrigin } from "./site-data";

export function pageMetadata(title: string, description: string, path: string, image = "/og.png"): Metadata {
  const url = `${siteOrigin}${path}`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "BEE SMART", locale: "es_PA", type: "website", images: [{ url: image, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
