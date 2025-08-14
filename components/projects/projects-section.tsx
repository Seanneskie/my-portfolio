"use client";

import { gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const PROJECTS = gql`
  query Projects {
    projects {
      title
      image
      alt
      description
      tags
      github
      githubLabel
      details
    }
  }
`;

export default function ProjectsSection() {
  const { data, loading, error } = useQuery(PROJECTS);

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <Card
            key={i}
            className="h-56 animate-pulse rounded-2xl border border-teal-200/60 bg-white/70 dark:border-teal-800/60 dark:bg-gray-950/50"
          />
        ))}
      </div>
    );
  }
  if (error) return <p className="text-red-600 dark:text-red-400">Failed to load projects.</p>;

  interface Project {
    title: string;
    image: string;
    alt: string;
    description?: string;
    tags: string[];
    github?: string | null;
    githubLabel?: string | null;
    details?: string | null;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {data.projects.map((p: Project, i: number) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.35 }}
        >
          <Card
            className={[
              "group relative overflow-hidden rounded-2xl p-4",
              // border + surface tuned for light/dark
              "border border-teal-200/70 bg-white/85 backdrop-blur",
              "dark:border-teal-800/70 dark:bg-gray-950/60",
              // hover elevation + ring
              "transition-shadow hover:shadow-lg hover:shadow-teal-300/30 dark:hover:shadow-teal-900/20",
              "focus-within:ring-1 focus-within:ring-teal-500/60",
            ].join(" ")}
          >
            {/* Image with soft teal overlay */}
            {p.image ? (
              <div className="relative mb-3 aspect-video overflow-hidden rounded-xl">
                <Image src={p.image} alt={p.alt} fill className="object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-900/25 to-transparent dark:from-teal-950/35" />
              </div>
            ) : null}

            <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200">
              {p.title}
            </h3>

            {p.description ? (
              <p className="mt-1 line-clamp-3 text-sm text-gray-700 dark:text-gray-200">
                {p.description}
              </p>
            ) : null}

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t: string) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="rounded-full bg-teal-50 text-teal-800 ring-1 ring-inset ring-teal-200 dark:bg-teal-900/30 dark:text-teal-200 dark:ring-teal-800"
                >
                  {t}
                </Badge>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.details ? (
                <Link
                  href={`/project-details/${p.details
                    .replace(/^project-details\//, "")
                    .replace(/\.html$/, "")}`}
                  className="inline-flex items-center text-teal-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-teal-300"
                >
                  Project details →
                </Link>
              ) : null}

              {p.github ? (
                <Button
                  asChild
                  variant="outline"
                  className="border-teal-300 text-teal-700 hover:bg-teal-50 hover:text-teal-800 dark:border-teal-800 dark:text-teal-200 dark:hover:bg-teal-900/30"
                >
                  <Link href={p.github}>{p.githubLabel ?? "View project"}</Link>
                </Button>
              ) : null}
            </div>

            {/* Decorative corner glow on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal-400/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-teal-500/15"
            />
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
