import { Octokit } from "@octokit/core";
import type { Repo } from "~/app/projects/types";
import { RepoList } from "~/app/projects/ReposList";

export default async function Projects() {
  const octokit = new Octokit({
    userAgent: "CDE90/ethancoward.dev",
  });

  const repos = await octokit.request("GET /users/{username}/repos", {
    username: "CDE90",
  });
  const orgRepos = await octokit.request("GET /orgs/{org}/repos", {
    org: "vcroles",
  });

  // Map over orgRepos and set the org property to the name of the org
  orgRepos.data.forEach((repo) => {
    // @ts-expect-error This does work...
    repo.org = "vcroles";
  });

  const allRepos = [...repos.data, ...orgRepos.data];

  const reposData: Repo[] = allRepos.map((repo) => ({
    name: repo.name,
    // @ts-expect-error This does work...
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    org: repo?.org ?? null,
    description: repo.description,
    html_url: repo.html_url,
    stargazers_count: repo.stargazers_count ?? 0,
    watchers_count: repo.watchers_count ?? 0,
    language: repo.language,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
    fork: repo.fork,
    topics: repo.topics,
  }));

  // sort repos by updated date by default
  reposData.sort((a, b) =>
    a.updated_at && b.updated_at
      ? new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      : 0,
  );

  return <RepoList repos={reposData} />;
}

export const dynamic = "force-dynamic";
export const runtime = "edge";
