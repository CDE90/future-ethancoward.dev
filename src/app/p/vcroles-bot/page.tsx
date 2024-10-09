import Link from "next/link";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col items-center px-4">
      <div className="mb-4 w-full max-w-full space-y-6 break-words px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-0 sm:space-x-6">
          <div className="relative h-32 w-32 flex-shrink-0">
            <Image
              src="/images/vcroles-logo.png"
              alt="VC Roles Logo"
              height={256}
              width={256}
              className="w-32 rounded-lg"
            />
          </div>
          <h1 className="max-w-full text-2xl font-bold sm:text-4xl">
            VC Roles: Revolutionizing Discord Voice Channels
          </h1>
        </div>
        <p className="text-lg">
          As the sole developer of VC Roles, I&apos;ve spent over three years
          crafting a Discord bot that transforms how servers utilize voice
          channels. This project has been a journey of continuous learning and
          improvement, resulting in a powerful tool used by over 16,000 servers
          and impacting more than 15 million Discord members.
        </p>
        <p className="text-lg">
          Interested in learning more about VC Roles? Check out this page about
          the{" "}
          <Link
            href="/p/vcroles-website"
            className="text-[#e879f9] hover:underline dark:text-[#e879f9]"
          >
            VC Roles website and dashboard
          </Link>
          .
        </p>
        <h2 className="text-2xl font-semibold">What is VC Roles?</h2>
        <p>
          VC Roles is a Discord bot that enhances voice channels with features
          like:
        </p>
        <ul className="list-inside list-disc pl-4">
          <li>Automatic role assignment when users join specific channels</li>
          <li>Text-to-speech commands for mic-less communication</li>
          <li>Dynamic voice channel generation</li>
          <li>Comprehensive voice channel logging</li>
        </ul>
        <h2 className="text-2xl font-semibold">Technical Deep Dive</h2>
        <p>
          Developing VC Roles has been a journey of continuous learning and
          improvement. Here are some key technical aspects:
        </p>
        <h3 className="text-xl font-medium">Core Technologies</h3>
        <ul className="list-inside list-disc pl-4">
          <li>
            <span className="font-bold">Python:</span> The primary language used
            for development
          </li>
          <li>
            <span className="font-bold">discord.py:</span> The library used to
            interact with the Discord API
          </li>
          <li>
            <span className="font-bold">PostgreSQL:</span> For robust data
            storage and retrieval
          </li>
          <li>
            <span className="font-bold">Redis:</span> Implemented for caching to
            improve performance
          </li>
        </ul>
        <h3 className="text-xl font-medium">Architecture and Scalability</h3>
        <p>
          To ensure VC Roles can handle its growing user base, I implemented
          several key features:
        </p>
        <ul className="list-inside list-disc pl-4">
          <li>
            Utilization of discord.py&apos;s AutoShardedBot for multiple gateway
            connections
          </li>
          <li>
            Migration from JSON file storage to PostgreSQL for improved data
            management
          </li>
          <li>Implementation of Redis for caching to reduce database load</li>
          <li>
            Python in-memory cache for all database queries to reduce load
          </li>
          <li>
            Transition from local hosting to a dedicated VM for increased
            reliability
          </li>
        </ul>
        <h3 className="text-xl font-medium">Custom gTTS Fork</h3>
        <p>
          To improve the bot&apos;s responsiveness, I created a{" "}
          <Link
            href="https://github.com/vcroles/gTTS"
            className="text-[#e879f9] hover:underline dark:text-[#e879f9]"
          >
            custom fork
          </Link>{" "}
          of the python gTTS library. This fork adds async support using asyncio
          and aiohttp, allowing TTS generation to be non-blocking and
          significantly improving the bot&apos;s overall performance.
        </p>
        <h3 className="text-xl font-medium">Privacy and Data Handling</h3>
        <p>
          Privacy is a top priority for VC Roles. The bot only stores necessary
          data, such as user IDs for voice generator ownership, and guild, role,
          and channel IDs for functionality. All data is automatically removed
          when the bot is removed from a server.
        </p>
        <h2 className="text-2xl font-semibold">Challenges and Learning</h2>
        <p>
          Developing VC Roles has been a significant learning experience. As my
          first major programming project, it required me to:
        </p>
        <ul className="list-inside list-disc pl-4">
          <li>Master Python and understand efficient code structuring</li>
          <li>Learn database management and migration techniques</li>
          <li>Implement scalable solutions for growing user demands</li>
          <li>Continuously refactor and improve the codebase</li>
        </ul>
        <h2 className="text-2xl font-semibold">Impact and Future</h2>
        <p>
          VC Roles has made a significant impact on the Discord community, with:
        </p>
        <ul className="list-inside list-disc pl-4">
          <li>Over 16,000 servers trusting and using the bot</li>
          <li>More than 15 million members benefiting from its features</li>
          <li>237 million roles changed, streamlining server management</li>
        </ul>
        <p>
          As VC Roles continues to grow, I&apos;m committed to further enhancing
          its features, improving performance, and ensuring it remains a
          valuable tool for Discord communities of all sizes.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Ethan Coward | VC Roles",
  description:
    "VC Roles is a Discord bot created by Ethan Coward that enhances voice channels with features like automatic role assignment, text-to-speech commands, dynamic voice channel generation, and comprehensive voice channel logging.",
  keywords:
    "Ethan Coward, VC Roles, Discord bot, voice channels, text-to-speech, automatic role assignment, dynamic voice channel generation, comprehensive voice channel logging",
};
