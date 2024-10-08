import { type ImageLoaderProps } from "next/image";

function normalizeSrc(src: string) {
  if (src.startsWith("/")) {
    return `https://beta.ethancoward.dev${src}`;
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

  return `https://ecwrd.com/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
