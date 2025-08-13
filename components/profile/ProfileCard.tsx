"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Copy, Mail, FileText } from "lucide-react";
import { toast } from "sonner";

import SocialLinks from "./SocialLinks";
import { getInitials, openMailTo, copyEmail } from "@/lib/profile";
import type { ProfileData } from "./types";

export default function ProfileCard({ profile }: { profile: ProfileData }) {
  return (
    <Card className="overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative">
          <div className="h-14 w-full bg-gradient-to-r from-teal-600/20 via-teal-500/15 to-transparent dark:from-teal-400/20 dark:via-teal-400/10 dark:to-transparent animate-gradient-x" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-teal-600/20 to-transparent dark:from-teal-400/20 dark:to-transparent" />
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_80%_at_20%_0%,black_10%,transparent_60%)]" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
          <div className="relative px-6 py-3 flex items-center justify-between">
            <CardTitle className="text-2xl text-teal-700 dark:text-teal-400">Profile</CardTitle>

            {profile.links?.resume && (
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="gap-2"
                onClick={() => toast.info("Opening resume…")}
              >
                <a href={profile.links.resume} target="_blank" rel="noreferrer">
                  <FileText size={16} />
                  View Resume
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-[auto,1fr]"
        >
          {/* Left: Avatar + quick facts */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative">
              <Avatar className="h-24 w-24 ring-2 ring-blue-900/30 dark:ring-blue-500/30 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                <AvatarImage src={profile.image} alt={profile.name} />
                <AvatarFallback className="font-semibold">
                  {getInitials(profile.name)}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex items-center gap-2 text-sm text-black dark:text-white">
              <MapPin className="h-4 w-4" />
              <span className="truncate max-w-[16rem]">{profile.address}</span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="gap-2"
                onClick={() => copyEmail(profile.email)}
              >
                <Copy size={16} />
                Copy Email
              </Button>
              <Button size="sm" className="gap-2" onClick={() => openMailTo(profile.email)}>
                <Mail size={16} />
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right: details */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="text-sm text-black dark:text-white">Name</p>
              <p className="font-medium">{profile.name}</p>
              <Separator className="my-2" />

              <p className="text-sm text-black dark:text-white">Email</p>
              <p className="font-medium break-all">{profile.email}</p>
              <Separator className="my-2" />

              <p className="text-sm text-black dark:text-white">Address</p>
              <p className="font-medium">{profile.address}</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-black dark:text-white">Education</p>
              <ul className="space-y-2 text-sm">
                {profile.education.map((e) => (
                  <li key={e.level} className="flex items-center justify-between gap-3">
                    <span className="font-medium">{e.level}</span>
                    <span className="text-black dark:text-white">
                      {e.institution} — {e.year}
                    </span>
                  </li>
                ))}
              </ul>

              {/* optional compact badges for most recent item */}
              {profile.education?.[0] && (
                <div className="pt-1">
                  <Badge variant="secondary" className="mr-2">
                    {profile.education[0].level}
                  </Badge>
                  <Badge variant="outline">{profile.education[0].year}</Badge>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <Separator className="my-6" />

        <SocialLinks links={profile.links} />
      </CardContent>
    </Card>
  );
}
