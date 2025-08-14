"use client";

import { gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const COURSES = gql`
  query Courses {
    courses {
      code
      title
      institution
    }
  }
`;

export default function CoursesSection() {
  const { data, loading, error } = useQuery(COURSES);

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    return <p className="text-red-600 dark:text-red-400">Failed to load courses.</p>;

  interface Course {
    code: string;
    title: string;
    institution: string;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.courses.map((c: Course, i: number) => (
        <motion.div
          key={c.code}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
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
            <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200">
              {c.code}: {c.title}
            </h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
              {c.institution}
            </p>
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
