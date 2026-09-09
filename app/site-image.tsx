/* eslint-disable @next/next/no-img-element */
import type { ImgHTMLAttributes } from "react";
import assets from "./image-assets.json";

type Asset = { src: string; width: number; height: number; srcSet?: string };
const imageAssets: Record<string, Asset> = assets;

export function SiteImage({ src, alt, loading = "lazy", sizes, ...props }: ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) {
  const asset = imageAssets[src];
  return <img {...props} src={asset?.src ?? src} alt={alt} width={props.width ?? asset?.width} height={props.height ?? asset?.height} srcSet={asset?.srcSet} sizes={asset?.srcSet ? sizes ?? "(max-width: 760px) 100vw, 50vw" : undefined} loading={loading} decoding="async" />;
}
