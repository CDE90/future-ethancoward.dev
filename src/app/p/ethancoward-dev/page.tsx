import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col items-center px-4">
      <div className="mb-4 space-y-6 px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-0 sm:space-x-6">
          <div className="relative h-32 w-32 flex-shrink-0">
            <Image
              src="/android-chrome-512x512.png"
              alt="Ethan Coward"
              height={256}
              width={256}
              className="w-32 rounded-lg"
            />
          </div>
          <h1 className="max-w-full text-2xl font-bold sm:text-4xl">
            Ethan Coward&apos;s Website
          </h1>
        </div>

        <p className="text-lg">
          This website is a showcase of me and my projects. This version of the
          site is made to follow a neo-brutalist style (It&apos;s my first
          attempt at anything like this!). I&apos;m still working on it, so
          it&apos;s definitely a work in progress.
        </p>

        <h2 className="text-2xl font-semibold">Technical Stack</h2>
        <p>This website is built on a modern, robust tech stack:</p>
        <ul className="list-inside list-disc pl-4">
          <li>
            <span className="font-bold">Next.js:</span> React framework for
            server-side rendering and routing
          </li>
          <li>
            <span className="font-bold">TypeScript:</span> For type-safe code
            and improved developer experience
          </li>
          <li>
            <span className="font-bold">Tailwind CSS:</span> Utility-first CSS
            framework for rapid UI development
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Development Journey</h2>
        <p>
          This website is actually the third iteration of my portfolio website.
          The first version was written using Solidjs and was a simple SPA with
          little content on. The second version was similar to the first, but
          using Next.js as well as adding more complex features such as Spotify
          and GitHub integration. Finally, this version is again written in
          Next.js, but with some fixes and a major style overhaul to follow the
          neo-brutalist style.
        </p>
        <ul className="list-inside list-disc pl-4">
          <li>First prototype using Solidjs</li>
          <li>Second prototype using Next.js, but with very similar content</li>
          <li>
            Third iteration using Next.js, with a major style overhaul and more
            content (like this page!)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Future Plans</h2>
        <p>This website will constantly evolve and change:</p>
        <ul className="list-inside list-disc pl-4">
          <li>Highlighting more of my personal projects</li>
          <li>Updating the style of the site</li>
          <li>Exploring extra integrations with different platforms</li>
          <li>General tweaks and feature additions</li>
        </ul>

        <p className="mt-6 text-lg">
          This site is (and probably always will) be a work in progress.
          I&apos;ll try and keep everything up-to-date, but no promises! Thanks
          for visiting, and feel free to reach out and contact me if you want a
          chat.
        </p>
        <p className="mt-6 text-lg">
          All the code for this site is available{" "}
          <Link
            href="https://github.com/CDE90/future-ethancoward.dev"
            className="text-[#e879f9] hover:underline dark:text-[#e879f9]"
          >
            on GitHub
          </Link>
          . Feel free to fork it and make your own version!
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Ethan Coward | Personal Website",
  description:
    "Technical details about Ethan Coward's personal website, showcasing projects, skills, and experiences in web development, data analysis, and systems security.",
  keywords:
    "Ethan Coward, web development, data analysis, systems security, portfolio, projects",
};
