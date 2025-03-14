import { ProjectList, type Project } from "~/app/_components/ProjectList";

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto flex h-full max-w-7xl flex-col px-4">
        <div className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="max-w-7xl">
            <h1 className="mb-4 text-6xl font-bold text-gray-900 sm:text-8xl dark:text-gray-100">
              Ethan Coward
            </h1>

            <section className="mb-6">
              <h2 className="mb-2 text-2xl font-bold">About</h2>
              <p className="text-gray-800 sm:text-lg dark:text-gray-300">
                19-year-old Comp Sci student. UK-based. Tech enthusiast. Coder.
              </p>
            </section>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <section>
                  <h2 className="mb-2 text-2xl font-bold">Experience</h2>
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

                <section>
                  <h2 className="mb-2 text-2xl font-bold">Education</h2>
                  <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
                    <li>
                      <strong>Computer Science at University of Bath</strong>{" "}
                      (Sep 2024 - Present)
                      <ul className="list-inside list-disc pl-4">
                        <li>BSc(Hons) Computer Science</li>
                      </ul>
                    </li>
                    <li>
                      <strong>The King Edward VI School, Morpeth</strong> (Sep
                      2019 - Aug 2024)
                      <ul className="list-inside list-disc pl-4">
                        <li>
                          A levels - A*A*A*A* in Computer Science, Maths,
                          Further Maths, Physics
                        </li>
                        <li>
                          GCSEs - 9x Grade 9, 2x Grade 8 (11x A* equivalent)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </section>
              </div>

              <section>
                <h2 className="mb-2 text-2xl font-bold">Skills</h2>
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
              Projects
            </h2>
            <ProjectList projects={projects} />
          </div>
        </div>

        <div className="mb-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-gray-100">
              Contact
            </h2>
            <p className="mb-4 text-gray-800 sm:text-lg dark:text-gray-300">
              Got ideas? Let&apos;s talk.
              <br />
              <strong className="text-purple-700 underline decoration-transparent transition-all hover:text-purple-800 hover:decoration-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
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
