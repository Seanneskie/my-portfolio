"use client";

import Image from "next/image";
import { useData } from "@/lib/use-data";

interface Award {
  title: string;
  year: number | string;
  description: string;
  image?: string;
  link?: string;
}

export default function Awards() {
  const { data, loading, error } = useData<Award[]>("awards.json");

  if (loading) {
    return (
      <p className="text-black dark:text-white">Loading awards...</p>
    );
  }

  if (error || !data) {
    return (
      <p className="text-red-600 dark:text-red-400">Failed to load awards.</p>
    );
  }

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-400">
        Awards
      </h1>
      <ol
        role="list"
        className="relative border-l border-gray-200 dark:border-gray-700"
      >
        {data.map((award) => (
          <li key={award.title} className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 ring-8 ring-white dark:ring-gray-900" />
            <time className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500">
              {award.year}
            </time>
            <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200">
              {award.title}
            </h3>
            {award.image && (
              <Image
                src={award.image}
                alt={award.title}
                width={80}
                height={80}
                className="my-2 h-20 w-20 rounded object-cover"
              />
            )}
            <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
              {award.description}
            </p>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
              >
                Learn more
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
