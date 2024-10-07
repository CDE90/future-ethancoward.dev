"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t-2 border-black dark:border-white">
      <div className="mx-auto max-w-screen-sm px-6 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row items-center gap-8">
            <Link
              href="https://github.com/CDE90/ethancoward.dev"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </Link>
            <Link
              href="https://open.spotify.com/user/cdeyolo/"
              target="_blank"
              className="hover:underline"
            >
              Spotify
            </Link>
            <Link
              href="mailto:hello@ethancoward.dev"
              className="hover:underline"
            >
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/ethan-coward/"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </Link>
          </div>
          <p className="text-sm">© 2024 Ethan Coward</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
