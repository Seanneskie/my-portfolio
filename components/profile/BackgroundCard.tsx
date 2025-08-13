"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";
import { openMailTo } from "@/lib/profile";
import { toast } from "sonner";
import type { ProfileData } from "./types";

export default function BackgroundCard({ profile }: { profile: ProfileData }) {
  return (
    <Card id="background" className="relative">
      <CardHeader className="pb-3">
        <CardTitle>Background</CardTitle>
      </CardHeader>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <CardContent className="space-y-4">
        <p className="leading-relaxed text-foreground/90">{profile.background}</p>

        <div className="flex flex-wrap gap-3">
          <Button onClick={() => openMailTo(profile.email)} className="gap-2">
            <Mail size={16} /> Hire Me
          </Button>

          <Button asChild variant="secondary" className="gap-2">
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(
                "Inquiry about collaboration / Hire"
              )}`}
              onClick={() => toast.info("Opening your email client…")}
            >
              <Mail size={16} /> Email
            </a>
          </Button>

          {profile.links?.resume && (
            <Button
              asChild
              variant="outline"
              className="gap-2 transition-[background-position] bg-[linear-gradient(90deg,transparent,transparent,theme(colors.accent/20))] bg-[length:200%_100%] hover:animate-shine"
              onClick={() => toast.info("Opening resume…")}
            >
              <a href={profile.links.resume} target="_blank" rel="noreferrer">
                <FileText size={16} /> View Resume
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
