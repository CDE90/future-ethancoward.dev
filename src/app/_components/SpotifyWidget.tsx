"use client";

import { FaSpotify } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import type { NowPlaying } from "~/lib/spotify";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

async function getNowPlaying() {
  const res = await fetch("/api/now-playing", { method: "POST" });
  return (await res.json()) as NowPlaying;
}

export function SpotifyWidget() {
  const [show, setShow] = useState(true);

  const { data: nowPlaying, isLoading } = useQuery({
    queryKey: ["now-playing"],
    queryFn: getNowPlaying,
    refetchInterval: 30000,
  });

  if (isLoading || !nowPlaying?.isPlaying)
    return (
      <div className="fixed bottom-0 right-0 z-50 pb-6 pr-6 md:pb-8 md:pr-8">
        <div className="isolate border-2 border-black bg-[#B8FF9F] text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#9dfc7c]">
          <Link
            className="flex h-full w-full flex-col p-2 sm:p-3 md:p-4"
            href="https://open.spotify.com/user/cdeyolo/"
            target="_blank"
            aria-label="Spotify profile"
          >
            <FaSpotify className="h-8 w-8" />
          </Link>
        </div>
      </div>
    );

  return (
    <>
      <div className="fixed bottom-0 right-0 z-50 pb-6 pr-6 md:pb-8 md:pr-8">
        <div
          className={`isolate border-2 border-black bg-[#B8FF9F] p-2 text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:p-3 md:p-4 ${show ? "block" : "hidden"}`}
        >
          <div className="flex flex-row">
            <Link href={nowPlaying.songUrl ?? ""} target="_blank">
              <Image
                src={nowPlaying.albumArt ?? ""}
                alt="album art"
                width={128}
                height={128}
                className="h-16 w-16 border-2 border-black hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:h-24 sm:w-24 md:h-32 md:w-32"
              />
            </Link>
            <div className="ml-2 mt-auto flex h-full w-24 flex-col sm:ml-3 sm:w-28 md:ml-4 md:w-32">
              <button
                className="absolute right-7 top-1 p-1 hover:bg-red-400 sm:right-7 md:right-9"
                onClick={() => setShow(false)}
                aria-label="Hide spotify widget"
              >
                <FiX className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              </button>

              <Link
                className="flex flex-col"
                href={nowPlaying.songUrl ?? ""}
                target="_blank"
              >
                <div className="text-xs font-bold underline decoration-transparent hover:decoration-black sm:text-sm">
                  <span>{nowPlaying.songName}</span>
                </div>
                <div className="text-xs text-gray-800 underline decoration-transparent hover:decoration-gray-800 sm:text-sm">
                  <span>{nowPlaying.artist}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 z-50 pb-6 pr-6 md:pb-8 md:pr-8">
        <button
          className={`isolate border-2 border-black bg-[#B8FF9F] p-2 text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#9dfc7c] sm:p-3 md:p-4 ${show ? "hidden" : "block"}`}
          onClick={() => setShow(true)}
          aria-label="Show spotify widget"
        >
          <div className="mt-auto flex h-full flex-col p-1">
            <FaSpotify className="h-8 w-8" />
          </div>
        </button>
      </div>
    </>
  );
}

export default SpotifyWidget;
