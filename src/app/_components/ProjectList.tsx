"use client";

import Link from "next/link";
import Image from "next/image";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="h-full border-2 border-black bg-[#A6FAFF] text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] dark:border-white dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_rgba(255,255,255,1)]"
        >
          <Link href={project.link}>
            <article
              className={`flex h-full w-full flex-col items-center divide-y-2 divide-black sm:grid sm:divide-x-2 sm:divide-y-0 dark:divide-white ${
                project.imagePos === "right"
                  ? "sm:grid-cols-[1fr_auto]"
                  : "sm:grid-cols-[auto_1fr]"
              }`}
            >
              {(project.imagePos === "left" || !project.imagePos) && (
                <ProjectImage project={project} className="w-full" />
              )}
              <div className="h-full max-w-full break-words px-6 py-5 text-left">
                <h1 className="mb-4 text-xl font-bold sm:text-3xl">
                  {project.title}
                </h1>
                <p className="mb-4 line-clamp-4">{project.description}</p>
                <strong className="inline-block border-2 border-black px-2 py-1 transition-all hover:bg-black hover:text-white">
                  Read More
                </strong>
              </div>
              {project.imagePos === "right" && (
                <ProjectImage project={project} className="w-full" />
              )}
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
}

function ProjectImage({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <figure
      className={`flex h-full items-center justify-center p-2 ${className}`}
      style={{ backgroundColor: project.bgColour }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={256}
        height={256}
        className="max-h-48 max-w-48"
      />
    </figure>
  );
}

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  imagePos?: "left" | "right";
  bgColour?: string;
};
