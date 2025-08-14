"use client";

import { gql, useQuery } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Certificate {
  tags: string[];
  title: string;
  desc: string;
  link?: string;
  skills: string[];
}

const CERTIFICATES = gql`
  query Certificates($search: String, $tag: String) {
    certificates(search: $search, tag: $tag) {
      tags
      title
      desc
      link
      skills
    }
  }
`;

export default function CertificatesSection() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");

  const { data: allData } = useQuery<{ certificates: Certificate[] }>(
    CERTIFICATES
  );
  const { data, loading, error } = useQuery<{ certificates: Certificate[] }>(
    CERTIFICATES,
    {
      variables: {
        search: search || undefined,
        tag: tag || undefined,
      },
    }
  );

  const certificates = useMemo(() => data?.certificates ?? [], [data]);

  const tags = useMemo<string[]>(() => {
    const all = allData?.certificates ?? [];
    return Array.from(new Set(all.flatMap((c) => c.tags))).sort();
  }, [allData]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card
            key={i}
            className="h-32 animate-pulse rounded-2xl border border-teal-200/60 bg-white/70 dark:border-teal-800/60 dark:bg-gray-950/50"
          />
        ))}
      </div>
    );
  }

  if (error)
    return (
      <p className="text-red-600 dark:text-red-400">
        Failed to load certificates.
      </p>
    );

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Input
          placeholder="Search certificates"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:max-w-xs"
        />
        <Select value={tag} onValueChange={setTag}>
          <SelectTrigger className="sm:w-56">
            <SelectValue placeholder="All tags" />
          </SelectTrigger>
          <SelectContent>
            {tags.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          onClick={() => {
            setSearch("");
            setTag("");
          }}
          disabled={!search && !tag}
        >
          Clear filters
        </Button>
      </div>
      {certificates.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-200">
          No certificates match your search.
        </p>
      ) : (
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {certificates.map((c: Certificate, i: number) => (
              <motion.li
                key={c.title + i}
                role="listitem"
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <Card
                  className={[
                    "group relative overflow-hidden rounded-2xl p-4",
                    "border border-teal-200/70 bg-white/85 backdrop-blur",
                    "dark:border-teal-800/70 dark:bg-gray-950/60",
                    "transition-shadow hover:shadow-lg hover:shadow-teal-300/30 dark:hover:shadow-teal-900/20",
                    "focus-within:ring-1 focus-within:ring-teal-500/60",
                  ].join(" ")}
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details">
                      <AccordionTrigger
                        aria-label={`Toggle details for ${c.title}`}
                        className="p-0 text-left"
                      >
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200">
                            {c.title}
                          </h3>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {c.tags.map((t) => (
                              <Badge
                                key={t}
                                variant="secondary"
                                className="rounded-full bg-teal-50 text-teal-800 ring-1 ring-inset ring-teal-200 dark:bg-teal-900/30 dark:text-teal-200 dark:ring-teal-800"
                              >
                                {t}
                              </Badge>
                            ))}
                            {c.skills.map((s) => (
                              <Badge
                                key={s}
                                variant="secondary"
                                className="rounded-full bg-teal-50 text-teal-800 ring-1 ring-inset ring-teal-200 dark:bg-teal-900/30 dark:text-teal-200 dark:ring-teal-800"
                              >
                                {s}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2">
                        <p className="text-sm text-gray-700 dark:text-gray-200">
                          {c.desc}
                        </p>
                        {c.link && (
                          <Button asChild size="sm" className="mt-4">
                            <a
                              href={c.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View certificate
                            </a>
                          </Button>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal-400/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-teal-500/15"
                  />
                </Card>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
}

