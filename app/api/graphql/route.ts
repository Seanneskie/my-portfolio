import { createSchema, createYoga } from "graphql-yoga";
import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";          // allow fs access
export const dynamic = "force-dynamic";   // don’t cache, reflect file changes

async function loadJson<T = unknown>(file: string): Promise<T> {
  const p = path.join(process.cwd(), "data", file);
  return JSON.parse(await fs.readFile(p, "utf8"));
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface BlogPost {
  title: string;
  date: string;
  description: string;
  url: string;
}

interface Certificate {
  tags: string[];
  title: string;
  desc: string;
  link?: string;
  skills: string[];
}

interface Course {
  title: string;
  code: string;
  institution: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface WorkExperience {
  company: string;
  project: string;
  period: string;
  tech: string[];
  summary: string;
  highlights: string[];
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

  type Achievement {
    icon: String!
    title: String!
    description: String!
  }

  type BlogPost {
    title: String!
    date: String!
    description: String!
    url: String!
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

  type Query {
    projects: [Project!]!
    project(id: ID!): Project
    skills: [String!]!
    profile: Profile!
    achievements: [Achievement!]!
    blogPosts: [BlogPost!]!
    certificates: [Certificate!]!
    courses: [Course!]!
    testimonials: [Testimonial!]!
    workExperiences: [WorkExperience!]!
  }
`;

const resolvers = {
  Query: {
    projects: async () => (await loadJson<{projects:Project[]}>("projects.json")).projects,
    project: async (_: unknown, { id }: { id: string }) => {
      const { projects } = await loadJson<{projects:Project[]}>("projects.json");
      return projects.find(p => p.id === id) ?? null;
    },
    skills: async () => (await loadJson<{skills:string[]}>("skills.json")).skills,
    profile: async () => (await loadJson<{profile:Profile}>("profile.json")).profile,
    achievements: async () => await loadJson<Achievement[]>("achievements.json"),
    blogPosts: async () => await loadJson<BlogPost[]>("blog-posts.json"),
    certificates: async () => await loadJson<Certificate[]>("certificates.json"),
    courses: async () => await loadJson<Course[]>("courses.json"),
    testimonials: async () => await loadJson<Testimonial[]>("testimonials.json"),
    workExperiences: async () => await loadJson<WorkExperience[]>("work-experiences.json"),
  },
};

const schema = createSchema({ typeDefs, resolvers });
const yoga = createYoga({ schema, graphqlEndpoint: "/api/graphql" });

export { yoga as GET, yoga as POST };
