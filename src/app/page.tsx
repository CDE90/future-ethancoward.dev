import Link from "next/link";
import { ProjectList, type Project } from "~/app/_components/ProjectList";

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto flex h-full max-w-7xl flex-col px-4">
        <div className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="max-w-7xl">
            <h1 className="mb-4 text-7xl font-bold text-gray-900 sm:text-9xl dark:text-gray-100">
              ETHAN COWARD
            </h1>

            <section className="mb-6">
              <h2 className="mb-2 text-2xl font-bold">ABOUT</h2>
              <p className="text-gray-800 sm:text-lg dark:text-gray-300">
                18-year-old CS student. UK-based. Tech enthusiast. Coder.
              </p>
            </section>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <section>
                  <h2 className="mb-2 text-2xl font-bold">EXPERIENCE</h2>
                  <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
                    <li>
                      <strong>Data analyst at Hive HR</strong> (Jun 2022 -
                      Present)
                      <ul className="list-inside list-disc pl-4">
                        <li>
                          Google Sheets automations, PowerPoint tools with
                          Python
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Developer of VC Roles discord bot</strong> (Apr
                      2021 - Present)
                      <ul className="list-inside list-disc pl-4">
                        <li>Voice channel-role linking, TTS tools, logging</li>
                      </ul>
                    </li>
                  </ul>
                </section>

                <section className="neo-brutalist-featured-project">
                  <h2 className="mb-2 text-2xl font-bold">FEATURED PROJECT</h2>
                  <div className="bg-yellow-300 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="mb-2 text-lg font-bold uppercase">
                      Coming Soon
                    </h3>
                    <p className="mb-3 text-sm">Coming soon...</p>
                    <Link
                      href="#"
                      className="inline-block bg-black px-4 py-2 text-sm font-bold text-white transition-transform hover:translate-x-1 hover:translate-y-1"
                    >
                      LEARN MORE →
                    </Link>
                  </div>
                </section>
              </div>

              <section>
                <h2 className="mb-2 text-2xl font-bold">SKILLS</h2>
                <div className="flex flex-col gap-4 text-sm text-gray-800 sm:grid sm:grid-cols-2 dark:text-gray-300">
                  <div>
                    <h3 className="font-semibold">Web Development</h3>
                    <ul className="list-inside list-disc pl-2">
                      <li>React, Next.js, Solidjs</li>
                      <li>API design & usage</li>
                      <li>Tailwind CSS, Node.js, Flask</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Data Analysis</h3>
                    <ul className="list-inside list-disc pl-2">
                      <li>Excel/Google Sheets</li>
                      <li>PowerPoint Automation</li>
                      <li>Pandas, NumPy, R</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Languages</h3>
                    <ul className="list-inside list-disc pl-2">
                      <li>Python</li>
                      <li>JavaScript/TypeScript</li>
                      <li>Rust</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Developer Tools</h3>
                    <ul className="list-inside list-disc pl-2">
                      <li>Git, VS Code, Docker</li>
                      <li>Databases (MySQL, PostgreSQL)</li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <h3 className="font-semibold">AI Tools</h3>
                    <ul className="list-inside list-disc pl-2">
                      <li>LLMs (ChatGPT, Claude), Hugging Face</li>
                      <li>NLP Tools (Spacy, flair, Bert)</li>
                      <li>
                        Code Generation (GitHub Copilot, supermaven, Cursor)
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <p className="mb-4 mt-6 text-gray-800 sm:text-lg dark:text-gray-300">
              <em>Site under construction. Full exploration coming soon.</em>
            </p>
          </div>
        </div>

        <div className="mb-6 w-full px-4 pt-8 sm:px-6 lg:px-8">
          <div className="">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
              PROJECTS
            </h2>
            <ProjectList projects={projects} />
          </div>
        </div>

        <div className="mb-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
              CONTACT
            </h2>
            <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
              Got ideas? Let&apos;s talk.
              <br />
              <strong className="text-[#e879f9] underline decoration-transparent transition-all hover:decoration-[#e879f9] dark:text-[#e879f9]">
                <a href="mailto:hello@ethancoward.dev">hello@ethancoward.dev</a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

const projects: Project[] = [
  {
    title: "VC Roles Discord Bot",
    description:
      "A Discord bot that adds much needed features to Discord Voice Channels.",
    image: "/images/vcroles-logo.png",
    link: "/p/vcroles-bot",
    imagePos: "left",
    bgColour: "#3d46cd",
  },
  {
    title: "VC Roles Website & Dashboard",
    description:
      "The website for the VC Roles Discord Bot with a dashboard for server management, documentation and more.",
    image: "/images/vcroles-logo.png",
    link: "/p/vcroles-website",
    imagePos: "right",
    bgColour: "#3d46cd",
  },
  {
    title: "ethancoward.dev Website",
    description:
      "You're here! My personal website to showcase my projects and other stuff.",
    image: "/android-chrome-512x512.png",
    link: "/p/ethancoward-dev",
    imagePos: "left",
    bgColour: "#fbfbfb",
  },
  {
    title: "Website Analytics Dashboard",
    description:
      "A custom analytics tool to track website traffic display in a dashboard.",
    image: "/images/litics-logo.svg",
    link: "/p/website-analytics",
    imagePos: "right",
    bgColour: "#fbfbfb",
  },
  {
    title: "Hangman Game",
    description: "A simple web-based hangman game. Give it a go!",
    image: "/images/hangman-logo.svg",
    link: "/p/hangman-game",
    imagePos: "left",
    bgColour: "#282828",
  },
];

export const metadata = {
  title: "Ethan Coward | Home",
  description:
    "Ethan Coward's portfolio: Web dev, data analysis, and projects.",
  keywords: "Ethan Coward, web development, data analysis, portfolio, projects",
};
