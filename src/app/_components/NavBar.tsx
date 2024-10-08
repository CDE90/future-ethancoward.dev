"use client";

import Link from "next/link";
import { CgCode, CgDarkMode } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import { ButtonContainer } from "~/components/ButtonContainer";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";

export function NavBar() {
  return (
    <nav className="border-b-2 border-black font-sans dark:border-white">
      <div className="flex h-12 items-center justify-between divide-x-2 divide-black dark:divide-white">
        <div className="flex h-full w-full items-center text-left text-2xl font-bold">
          <ButtonContainer className="flex h-full w-full md:hidden">
            <Link href="/" className="h-full w-full overflow-hidden px-4 py-2">
              Ethan Coward
            </Link>
          </ButtonContainer>
          <span className="hidden px-4 py-2 text-2xl font-bold md:block">
            Ethan Coward
          </span>
        </div>

        <ButtonContainer className="ml-auto hidden h-full text-center text-xl font-bold md:flex">
          <Link href="/" className="h-full w-full px-4 py-2" aria-label="Home">
            Home
          </Link>
        </ButtonContainer>

        <ButtonContainer className="ml-auto h-full text-center text-xl font-bold md:ml-0">
          <Link href="/projects" aria-label="Projects">
            <span className="hidden h-full w-full px-4 py-2 md:block">
              Projects
            </span>
            <div className="p-2 md:hidden">
              <CgCode className="h-8 w-8" />
            </div>
          </Link>
        </ButtonContainer>

        <ButtonContainer className="flex h-full text-center text-xl font-bold">
          <ThemeSwitcher className="w-full p-2 text-center">
            <CgDarkMode className="h-8 w-8" />
          </ThemeSwitcher>
        </ButtonContainer>

        <ButtonContainer
          className="flex h-full text-center text-xl font-bold"
          colour="red"
        >
          <button
            className="h-full w-full p-2"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#app")?.classList.toggle("hidden");
              document.querySelector("#behind-app")?.classList.toggle("hidden");
            }}
            aria-label="Toggle menu"
          >
            <FiX className="h-8 w-8" />
          </button>
        </ButtonContainer>
      </div>
    </nav>
  );
}
