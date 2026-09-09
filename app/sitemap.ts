import type { MetadataRoute } from "next";
import { siteOrigin } from "./site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/ai-para-todos/", "/empresas/", "/contacto/", "/privacidad/"].map((path) => ({ url: `${siteOrigin}${path}` }));
}
