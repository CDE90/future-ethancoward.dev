"use client";

import Link from "next/link";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="h-full rounded-md border-2 border-black bg-[#A6FAFF] text-black hover:bg-[#79F7FF] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
        >
          <Link href={project.link}>
            <article className="grid-cols-auto-auto grid h-full w-full items-center divide-x-2 divide-black">
              {project.imagePos === "left" ? (
                <ProjectImage project={project} className="rounded-l-[4px]" />
              ) : null}
              <div className="h-full px-6 py-5 text-left">
                <h1 className="mb-4 text-3xl">{project.title}</h1>
                <p className="mb-4 line-clamp-4 text-xs">
                  {project.description}
                </p>
                <strong>Read More</strong>
              </div>
              {project.imagePos === "right" ? (
                <ProjectImage project={project} className="rounded-r-[4px]" />
              ) : null}
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
      className={`flex h-full p-2 ${className}`}
      style={{ backgroundColor: project.bgColour }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={project.title}
        width={196}
        height={196}
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
  imagePos: "left" | "right";
  bgColour?: string;
};
