"use client";

import Link from "next/link";
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState,
  useRef,
} from "react";
import { CgChevronDown, CgGitFork } from "react-icons/cg";
import { FaRegStar as StarIcon } from "react-icons/fa";
import type { Repo, SortOption } from "~/app/projects/types";

const sortRepos = (
  sortType: SortOption,
  setSortedRepos: Dispatch<SetStateAction<Repo[]>>,
) => {
  if (sortType === "name") {
    setSortedRepos((prev) =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name)),
    );
  } else if (sortType === "stars") {
    setSortedRepos((prev) =>
      [...prev].sort((a, b) => b.stargazers_count - a.stargazers_count),
    );
  } else if (sortType === "created") {
    setSortedRepos((prev) =>
      [...prev].sort((a, b) =>
        a.created_at && b.created_at
          ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          : 0,
      ),
    );
  } else if (sortType === "updated") {
    setSortedRepos((prev) =>
      [...prev].sort((a, b) =>
        a.updated_at && b.updated_at
          ? new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          : 0,
      ),
    );
  } else {
    setSortedRepos((prev) =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name)),
    );
  }
};

export function RepoList({ repos }: { repos: Repo[] }) {
  const [sort, setSort] = useState<SortOption>("updated");
  const [sortedRepos, setSortedRepos] = useState<Repo[]>(repos);
  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sortRepos(sort, setSortedRepos);
  }, [sort]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setSelectOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mx-auto mb-4 mt-8 flex max-w-7xl flex-col items-center px-4">
      <div className="relative ml-auto inline-block text-left" ref={selectRef}>
        <div className="flex items-center">
          <span className="mr-2 font-bold text-black dark:text-white">
            Sort Order:
          </span>
          <button
            type="button"
            className="inline-flex w-72 justify-between border-2 border-black bg-[#B8FF9F] px-4 py-3 text-lg font-bold capitalize text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:outline-none dark:border-white dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_rgba(255,255,255,1)]"
            onClick={() => setSelectOpen(!selectOpen)}
          >
            {sort}
            <CgChevronDown className="h-6 w-6" />
          </button>
        </div>

        {selectOpen && (
          <div className="absolute right-0 z-10 mt-2 w-72 origin-top-right border-2 border-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-[#1A1A1A] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)]">
            {["stars", "name", "created", "updated"].map((option) => (
              <button
                key={option}
                className="block w-full border-b-2 border-black px-4 py-3 text-left text-lg font-bold uppercase text-black hover:bg-[#B8FF9F] dark:border-white dark:text-white dark:hover:bg-[#2B4B2F]"
                onClick={() => {
                  setSort(option as SortOption);
                  setSelectOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 grid w-full gap-8 md:grid-cols-2 xl:grid-cols-3">
        {sortedRepos.map((repo) => (
          <Link
            href={repo.html_url}
            className="group flex flex-col border-2 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-[#1A1A1A] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_rgba(255,255,255,1)]"
            target="_blank"
            key={repo.name}
          >
            <h2 className="mb-2 text-2xl font-black uppercase text-black dark:text-white">
              {repo.org ? `${repo.org} / ` : ""}
              {repo.name}
            </h2>
            <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
              {repo.description}
            </p>
            <div className="mb-2 flex flex-wrap gap-2">
              {repo.topics?.map((topic) => (
                <span
                  key={topic}
                  className="rounded-none border-2 border-black bg-[#A6FAFF] px-2 py-1 text-sm font-bold uppercase text-black dark:border-white dark:bg-[#1E3A3C] dark:text-white"
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="mt-auto flex w-full items-center justify-between text-lg font-bold text-black dark:text-white">
              <div className="flex items-center gap-2">
                <StarIcon className="h-5 w-5" />
                {repo.stargazers_count}
              </div>
              {repo.fork && (
                <div className="flex items-center gap-2">
                  <CgGitFork className="h-5 w-5" />
                  Fork
                </div>
              )}
              {repo.language && <span>{repo.language}</span>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ProjectListGlimmer() {
  return (
    <div className="mx-auto mb-4 mt-8 flex max-w-7xl flex-col items-center px-4">
      <div className="ml-auto flex items-center">
        <div className="mr-2 h-8 w-32 animate-pulse bg-black dark:bg-white" />
        <div className="h-14 w-72 animate-pulse border-2 border-black bg-gray-200 dark:border-white dark:bg-gray-700" />
      </div>

      <div className="mt-8 grid w-full gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="border-2 border-black bg-white p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-[#1A1A1A] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)]"
          >
            <div className="mb-2 h-8 w-3/4 animate-pulse bg-black dark:bg-white" />
            <div className="mb-4 h-16 w-full animate-pulse bg-gray-200 dark:bg-gray-700" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map((topic) => (
                <div
                  key={topic}
                  className="h-8 w-20 animate-pulse border-2 border-black bg-[#A6FAFF] dark:border-white dark:bg-[#1E3A3C]"
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="h-6 w-16 animate-pulse bg-black dark:bg-white" />
              <div className="h-6 w-16 animate-pulse bg-black dark:bg-white" />
              <div className="h-6 w-24 animate-pulse bg-black dark:bg-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
