"use client";

import {
  Code2,
  Database,
  LineChart,
  Layout,
  Brain,
  MapPinned,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StorySkills from "./StorySkills";

export default function MyStory() {
  const whatIDo = [
    { icon: <Code2 className="h-5 w-5" />, title: "Full-stack Apps", blurb: "Build responsive, production-ready web apps with Next.js/React, Django/Laravel, and Supabase." },
    { icon: <Database className="h-5 w-5" />, title: "Database Design", blurb: "Model schemas, write efficient SQL, and optimize MySQL/PostgreSQL/MongoDB." },
    { icon: <LineChart className="h-5 w-5" />, title: "Data Analysis", blurb: "Clean, analyze, and visualize data with Python (Pandas, Sklearn) and Chart.js/Tableau." },
    { icon: <Layout className="h-5 w-5" />, title: "UX-first UIs", blurb: "Craft clean interfaces with Tailwind + Shadcn components and accessible patterns." },
    { icon: <Brain className="h-5 w-5" />, title: "AI Integration", blurb: "Prototype ML features and AI-assisted flows using TensorFlow and LangChain." },
    { icon: <MapPinned className="h-5 w-5" />, title: "Maps & GIS", blurb: "Add location-aware features with Leaflet and basic GIS workflows." },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Secure by Default", blurb: "Apply secure coding habits and basic cybersecurity practices." },
    { icon: <FileText className="h-5 w-5" />, title: "Docs & Handover", blurb: "Write clear documentation, diagrams, and setup guides." }
  ];

  return (
    <section className="space-y-8">
      <Card className="border border-teal-600/10 dark:border-teal-400/10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-400">
            My Story
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-black/90 dark:text-white/90 leading-relaxed">
          <p>
            It started with games. I wanted to understand how worlds were built—so I tinkered with game engines,
            learned basic scripting, and shipped tiny prototypes. That curiosity pulled me toward software and
            web development, where I could create tools people actually use.
          </p>
          <p>
            I explored a bit of cybersecurity along the way, then doubled down on what clicked: databases and data
            analysis. Designing schemas, writing fast queries, and turning raw data into decisions felt like a
            superpower. From there I kept leveling up—adopting modern frameworks, building full-stack apps, and
            integrating data workflows with clean, reliable UIs.
          </p>
          <p>
            Today I focus on shipping practical, well-designed systems: full-stack apps with solid data models,
            clear dashboards, and interfaces that stay out of the way. I move fast but document clearly, so teams
            can build on top with confidence.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border border-teal-600/10 dark:border-teal-400/10">
          <CardHeader>
            <CardTitle className="text-xl">What I Do</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {whatIDo.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-0.5 text-teal-700 dark:text-teal-400">{item.icon}</div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.blurb}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <StorySkills />
      </div>
    </section>
  );
}
