"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import skillsData from "@/data/skills.json";

interface SkillItem {
  icon: string;
  name: string;
}

interface SkillGroup {
  title: string;
  items: SkillItem[];
}

interface SkillCategory {
  id: string;
  label: string;
  groups: SkillGroup[];
}

export default function OtherSkills() {
  const otherCategories = (skillsData as SkillCategory[]).filter(
    (category) => category.id !== "Programming"
  );

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {otherCategories.map((category) => (
        <Card
          key={category.id}
          className="border border-teal-600/10 dark:border-teal-400/10"
        >
          <CardHeader>
            <CardTitle className="text-xl">{category.label}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {category.groups.map((group) => (
              <div key={group.title} className="space-y-2">
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item.name}
                      variant="secondary"
                      className="flex items-center gap-1 rounded-full"
                    >
                      <i className={item.icon} />
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

