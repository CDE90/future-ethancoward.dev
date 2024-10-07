import { getNowPlaying } from "~/lib/spotify";

async function handler() {
  const nowPlaying = await getNowPlaying();

  return Response.json(nowPlaying);
}

export { handler as GET, handler as POST };

export const dynamic = "force-dynamic";
export const runtime = "edge";
