"use client";

import { useData } from "@/lib/use-data";

interface WorkExperience {
  company: string;
  project: string;
  period: string;
  tech: string[];
  summary: string;
  highlights: string[];
}

export default function WorkExperiences() {
  const { data, loading, error } = useData<WorkExperience[]>("work-experiences.json");

  if (loading) {
    return (
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-400">Work Experiences</h1>
        <div className="grid gap-6 sm:grid-cols-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-xl border border-teal-600/10 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-teal-400/10 dark:bg-teal-900/20"
            />
          ))}
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <p className="text-red-600 dark:text-red-400">Failed to load work experiences.</p>
    );
  }

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-400">Work Experiences</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {data.map((exp) => (
          <div
            key={`${exp.company}-${exp.project}`}
            className="relative rounded-xl border border-teal-600/10 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md dark:border-teal-400/10 dark:bg-teal-900/20"
          >
            <span aria-hidden className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-teal-500" />
            <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-200">
              {exp.company}
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {exp.project}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{exp.period}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{exp.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="rounded bg-teal-50 px-2 py-1 text-xs text-teal-800 ring-1 ring-teal-200 dark:bg-teal-900/30 dark:text-teal-200 dark:ring-teal-800"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-200">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
