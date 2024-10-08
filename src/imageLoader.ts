import { type ImageLoaderProps } from "next/image";

function normalizeSrc(src: string) {
  if (src.startsWith("/")) {
    return `https://beta.ethancoward.dev${src}`;
  }
  return src;
}

interface ImageLoaderOptions {
  width?: number;
  quality?: number;
  format?: string;
  image: string;
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  const options: ImageLoaderOptions = {
    format: "auto",
    image: encodeURIComponent(normalizeSrc(src)),
  };
  if (width) {
    options.width = width;
  }
  if (quality) {
    options.quality = quality;
  }

  // Convert options to a query string
  const queryString = Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `https://img.ecwrd.com/?${queryString}`;
}
