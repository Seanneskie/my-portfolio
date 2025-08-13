import { createSchema, createYoga } from "graphql-yoga";
import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";          // allow fs access
export const dynamic = "force-dynamic";   // don’t cache, reflect file changes

async function loadJson<T = any>(file: string): Promise<T> {
  const p = path.join(process.cwd(), "data", file);
  return JSON.parse(await fs.readFile(p, "utf8"));
}

const typeDefs = /* GraphQL */ `
  type Project {
    id: ID!
    title: String!
    description: String
    tags: [String!]!
    url: String
    thumb: String
  }

  type Profile {
    name: String!
    headline: String!
    bio: String
  }

  type Query {
    projects: [Project!]!
    project(id: ID!): Project
    skills: [String!]!
    profile: Profile!
  }
`;

const resolvers = {
  Query: {
    projects: async () => (await loadJson<{projects:any[]}>("projects.json")).projects,
    project: async (_: any, { id }: { id: string }) => {
      const { projects } = await loadJson<{projects:any[]}>("projects.json");
      return projects.find(p => p.id === id) ?? null;
    },
    skills: async () => (await loadJson<{skills:string[]}>("skills.json")).skills,
    profile: async () => (await loadJson<{profile:any}>("profile.json")).profile,
  },
};

const schema = createSchema({ typeDefs, resolvers });
const yoga = createYoga({ schema, graphqlEndpoint: "/api/graphql" });

export { yoga as GET, yoga as POST };
