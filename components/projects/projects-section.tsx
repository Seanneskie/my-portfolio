"use client";

import { gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const PROJECTS = gql`
  query Projects {
    projects {
      id
      title
      description
      tags
      url
      thumb
    }
  }
`;

export default function ProjectsSection() {
  interface Project {
    id: string;
    title: string;
    description?: string;
    tags: string[];
    url?: string;
    thumb?: string;
  }

  const { data, loading, error } = useQuery<{ projects: Project[] }>(PROJECTS);

  if (loading) return <p>Loading projects…</p>;
  if (error) return <p>Failed to load projects.</p>;
  if (!data) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
        {data.projects.map((p: Project, i: number) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.35 }}
        >
          <Card className="p-4 hover:shadow-lg transition">
            {p.thumb ? (
              <div className="relative mb-3 aspect-video overflow-hidden rounded-lg">
                <Image src={p.thumb} alt={p.title} fill className="object-cover" />
              </div>
            ) : null}

            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t: string) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>

            {p.url ? (
              <Link href={p.url} className="inline-block mt-4 underline">
                View project →
              </Link>
            ) : null}
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
