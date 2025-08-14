"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";
import { openMailTo } from "@/lib/profile";
import { toast } from "sonner";
import type { ProfileData } from "./types";

export default function BackgroundCard({ profile }: { profile: ProfileData }) {
  return (
    <Card id="background" className="relative overflow-hidden">
      {/* subtle backdrop accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-teal-600/10 via-teal-500/5 to-transparent dark:from-teal-400/10 dark:via-teal-400/5 dark:to-transparent"
      />

      <CardHeader className="relative z-10 pb-2">
        <CardTitle className="text-base font-semibold tracking-wide text-black dark:text-white">
          Background
        </CardTitle>
      </CardHeader>

      <div className="absolute inset-x-0 top-[52px] h-px bg-gradient-to-r from-teal-600/20 to-transparent dark:from-teal-400/20 dark:to-transparent" />

      <CardContent className="relative z-10 space-y-5">
        <p className="max-w-prose leading-relaxed text-black dark:text-white whitespace-pre-line">
          {profile.background}
        </p>

        <div className="flex flex-wrap gap-3">
          {/* Primary: animated gradient */}
          <Button
            onClick={() => openMailTo(profile.email)}
            className={[
              "group gap-2 text-white",
              "bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-500",
              "bg-[length:200%_200%] animate-gradient-x",
              "shadow-md hover:shadow-lg transition-[transform,box-shadow,background-position] duration-300",
              "hover:-translate-y-0.5",
              "focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none",
            ].join(" ")}
          >
            <Mail className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            Hire Me
          </Button>

          {/* Secondary: simple email with subject */}
          <Button
            asChild
            variant="secondary"
            className="gap-2 hover:translate-y-[-1px] transition"
          >
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(
                "Inquiry about collaboration / Hire"
              )}`}
              onClick={() => toast.info("Opening your email client…")}
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </Button>

          {/* Outline: subtle shimmer on hover */}
          {profile.links?.resume && (
            <Button
              asChild
              variant="outline"
              className={[
                "gap-2",
                "ring-1 ring-teal-600/30 dark:ring-teal-400/30",
                "hover:bg-teal-600/10 dark:hover:bg-teal-400/10",
                "bg-[length:200%_100%] hover:animate-shine",
                "transition-[background-position,transform] hover:-translate-y-0.5",
              ].join(" ")}
              onClick={() => toast.info("Opening resume…")}
            >
              <a href={profile.links.resume} target="_blank" rel="noreferrer">
                <FileText className="h-4 w-4" /> View Resume
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
