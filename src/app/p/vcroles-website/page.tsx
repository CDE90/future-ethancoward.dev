import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col items-center px-4">
      <div className="mb-4 space-y-6 px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-0 sm:space-x-6">
          <div className="relative h-32 w-32 flex-shrink-0">
            <Image
              src="/images/vcroles-logo.webp"
              alt="VC Roles Logo"
              height={128}
              width={128}
              className="rounded-lg"
            />
          </div>
          <h1 className="max-w-full text-2xl font-bold sm:text-4xl">
            VC Roles Website: Empowering Discord Server Management
          </h1>
        </div>

        <p className="text-lg">
          The VC Roles website serves as a powerful companion to the{" "}
          <Link
            href="/p/vcroles-bot"
            className="text-[#e879f9] hover:underline dark:text-[#e879f9]"
          >
            VC Roles Discord bot
          </Link>
          , providing an intuitive dashboard for server administrators to manage
          and configure the bot&apos;s features.
        </p>

        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="list-inside list-disc pl-4">
          <li>User-friendly dashboard for managing bot settings</li>
          <li>Seamless integration with Discord servers</li>
          <li>Real-time configuration updates</li>
          <li>Comprehensive documentation and guides</li>
        </ul>

        <h2 className="text-2xl font-semibold">Technical Stack</h2>
        <p>The VC Roles website is built on a modern, robust tech stack:</p>
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
          <li>
            <span className="font-bold">tRPC:</span> End-to-end typesafe API
            layer
          </li>
          <li>
            <span className="font-bold">Prisma:</span> Next-generation ORM for
            database access
          </li>
          <li>
            <span className="font-bold">Clerk:</span> Authentication and user
            management
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Architecture and Scalability</h2>
        <p>The VC Roles website is designed for performance and scalability:</p>
        <ul className="list-inside list-disc pl-4">
          <li>Serverless architecture using Vercel for automatic scaling</li>
          <li>Upstash for Redis caching to improve response times</li>
          <li>
            Shared PostgreSQL database with the Discord bot for real-time
            updates
          </li>
          <li>
            Clerk for handling authentication, reducing the load on our servers
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">User Experience</h2>
        <p>
          The website focuses on providing a seamless experience for Discord
          server administrators:
        </p>
        <ul className="list-inside list-disc pl-4">
          <li>
            Intuitive dashboard for managing linked channels and voice
            generators
          </li>
          <li>
            Easy-to-use interface for configuring TTS and audit logging settings
          </li>
          <li>Responsive design for both desktop and mobile users</li>
          <li>
            Dynamic OG image generation using Vercel OG for improved social
            sharing
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Development Journey</h2>
        <p>
          Creating the VC Roles website has been a significant learning
          experience:
        </p>
        <ul className="list-inside list-disc pl-4">
          <li>
            First major web project, mastering React, Next.js, and TypeScript
          </li>
          <li>Overcoming challenges in Discord API integration</li>
          <li>Implementing efficient state management and real-time updates</li>
          <li>Continuously improving UI/UX based on user feedback</li>
        </ul>

        <h2 className="text-2xl font-semibold">Future Plans</h2>
        <p>The VC Roles website is continuously evolving:</p>
        <ul className="list-inside list-disc pl-4">
          <li>
            Expanding dashboard functionality for voice generator management
          </li>
          <li>
            Implementing more advanced analytics and insights for server admins
          </li>
          <li>
            Exploring additional integrations with Discord&apos;s features
          </li>
          <li>
            Ongoing performance optimizations and user experience improvements
          </li>
        </ul>

        <p className="mt-6 text-lg">
          The VC Roles website stands as an example of modern web development
          practices, providing a powerful and user-friendly interface for
          Discord server management. It continues to evolve alongside the VC
          Roles bot, ensuring that Discord communities have access to
          cutting-edge voice channel management tools.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Ethan Coward | VC Roles Website",
  description:
    "The VC Roles website created by Ethan Coward, provides a powerful dashboard for server administrators to manage and configure the VC Roles Discord bot.",
  keywords:
    "Ethan Coward, VC Roles, Discord bot, dashboard, voice channels, text-to-speech, automatic role assignment, dynamic voice channel generation, comprehensive voice channel logging",
};
