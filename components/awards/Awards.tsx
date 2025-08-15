"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
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
      <ul role="list" className="space-y-4">
        {data.map((award) => (
          <li key={award.title} role="listitem">
            <Card className="flex flex-col gap-4 p-4 sm:flex-row">
              {award.image && (
                <Image
                  src={award.image}
                  alt={award.title}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded object-cover"
                />
              )}
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-200">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {award.year}
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  {award.description}
                </p>
                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline dark:text-teal-400"
                  >
                    Learn more
                  </a>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
