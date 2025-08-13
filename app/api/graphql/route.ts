import { createSchema, createYoga } from "graphql-yoga";
import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs"; // allow fs access
export const dynamic = "force-dynamic"; // don’t cache, reflect file changes

async function loadJson<T>(file: string): Promise<T> {
  const p = path.join(process.cwd(), "data", file);
  return JSON.parse(await fs.readFile(p, "utf8")) as T;
}

interface Project {
  id: string;
  title: string;
  description?: string;
  tags: string[];
  url?: string;
  thumb?: string;
}

interface Profile {
  name: string;
  headline: string;
  bio?: string;
}

const typeDefs = /* GraphQL */ `
  type SkillItem {
    icon: String!
    name: String!
  }

  type SkillGroup {
    title: String!
    items: [SkillItem!]!
  }

  type SkillCategory {
    id: ID!
    label: String!
    groups: [SkillGroup!]!
  }

  type Project {
    title: String!
    image: String!
    alt: String!
    description: String
    collaborators: String
    tags: [String!]!
    github: String
    githubLabel: String
    details: String
    period: String
  }

  type Achievement {
    icon: String!
    title: String!
    description: String!
  }

  type Certificate {
    tags: [String!]!
    title: String!
    desc: String!
    link: String
    skills: [String!]!
  }

  type Course {
    title: String!
    code: String!
    institution: String!
  }

  type Testimonial {
    quote: String!
    author: String!
    role: String!
  }

  type WorkExperience {
    company: String!
    project: String!
    period: String!
    tech: [String!]!
    summary: String!
    highlights: [String!]!
  }

  type BlogPost {
    title: String!
    date: String!
    description: String!
    url: String!
  }

  type Profile {
    name: String!
    headline: String!
    bio: String
  }

  type Query {
    projects: [Project!]!
    skills: [SkillCategory!]!
    achievements: [Achievement!]!
    certificates: [Certificate!]!
    courses: [Course!]!
    testimonials: [Testimonial!]!
    workExperiences: [WorkExperience!]!
    blogPosts: [BlogPost!]!
    profile: Profile!
  }
`;

const resolvers = {
  Query: {
    projects: async () => (await loadJson<{ projects: Project[] }>("projects.json")).projects,
    project: async (_: unknown, { id }: { id: string }) => {
      const { projects } = await loadJson<{ projects: Project[] }>("projects.json");
      return projects.find((p) => p.id === id) ?? null;
    },
    skills: async () => (await loadJson<{ skills: string[] }>("skills.json")).skills,
    profile: async () => (await loadJson<{ profile: Profile }>("profile.json")).profile,    achievements: async () => await loadJson("achievements.json"),
    certificates: async () => await loadJson("certificates.json"),
    courses: async () => await loadJson("courses.json"),
    testimonials: async () => await loadJson("testimonials.json"),
    workExperiences: async () => await loadJson("work-experiences.json"),
    blogPosts: async () => await loadJson("blog-posts.json"),
  },
};

const schema = createSchema({ typeDefs, resolvers });
const yoga = createYoga({ schema, graphqlEndpoint: "/api/graphql" });

export { yoga as GET, yoga as POST };
