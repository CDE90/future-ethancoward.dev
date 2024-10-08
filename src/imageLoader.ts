import { type ImageLoaderProps } from "next/image";

function normalizeSrc(src: string) {
  if (src.startsWith("/")) {
    return `${process.env.CF_PAGES_URL}${src}`;
  }
  return src;
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (process.env.NODE_ENV === "development") {
    return src;
  }

  const params = ["format=auto", `width=${width}`];

  if (quality) {
    params.push(`quality=${quality}`);
  }

  const paramsString = params.join(",");

  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
