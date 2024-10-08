import "~/styles/globals.css";

import { IBM_Plex_Mono } from "next/font/google";
import { type Metadata } from "next";
import { NavBar } from "~/components/NavBar";
import { Footer } from "~/components/Footer";
import { BehindApp } from "~/components/BehindApp";
import SpotifyWidget from "~/components/SpotifyWidget";
import Providers from "~/app/providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const fontStyle = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fontStyle.className} min-h-screen bg-fuchsia-400 p-4 md:p-6`}
    >
      <Providers>
        <body>
          <div
            className="min-h-full border-2 border-black bg-white text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:text-white dark:shadow-[8px_8px_0px_rgba(255,255,255,1)]"
            id="app"
          >
            <NavBar />
            <div className="p-2">{children}</div>
            <Footer />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    function getInitialTheme() {
                        const storedTheme = localStorage.getItem('theme');
                        if (storedTheme) {
                            return storedTheme;
                        }
                        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    const theme = getInitialTheme();
                    document.documentElement.classList.add(theme);
                })();
                `,
              }}
            />
          </div>
          <SpotifyWidget />
          <BehindApp />
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </Providers>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Ethan Coward | Personal Website & Portfolio",
  description:
    "Ethan Coward's personal website showcasing projects, skills, and experiences in web development, data analysis, and systems security.",
  keywords:
    "Ethan Coward, web development, data analysis, systems security, portfolio, projects",
  robots: "index, follow",
  icons: [
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ethancoward.dev",
    siteName: "Ethan Coward",
    title: "Ethan Coward | Personal Website & Portfolio",
    description:
      "Ethan Coward's personal website showcasing projects, skills, and experiences in web development, data analysis, and systems security.",
    images: [
      {
        url: "https://ethancoward.dev/og-image.png",
        width: 1000,
        height: 1216,
        alt: "Ethan Coward",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ethancoward_",
    creator: "@ethancoward_",
  },
};
