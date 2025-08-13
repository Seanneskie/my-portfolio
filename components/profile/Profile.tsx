"use client";

import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  FileText,
  Code,
  Mail,
  MapPin,
  Copy,
} from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";


const PROFILE = {
  name: "Seanne Cañete",
  email: "seannecanete32@gmail.com",
  address: "General Santos City, Philippines",
  image: "/static/profile.jpg",
  background:
    "Hello! I'm Seanne Cañete, an Information Technology graduate at Mindanao State University – General Santos City with a passion for full-stack development, data engineering, and clean UI/UX.",
  education: [
    { level: "Tertiary", institution: "Mindanao State University", year: "A.Y 2021 - 2025" },
    { level: "Senior High School", institution: "Mindanao State University", year: "A.Y 2019 - 2021" },
    { level: "Junior High School", institution: "GSC SPED Integrated School", year: "A.Y 2015 - 2019" },
    { level: "Elementary", institution: "The Heritage Academy of the Philippines", year: "A.Y 2009 - 2015" },
  ],
  links: {
    facebook: "https://www.facebook.com/seanne.canete.7/",
    twitter: "https://x.com/Seanneskie",
    linkedin: "https://www.linkedin.com/in/seanne-ca%C3%B1ete-8b09322a1/",
    github: "https://github.com/Seanneskie",
    leetcode: "https://leetcode.com/u/seanneskie32/",
    resume: "/static/canete_resume.pdf",
  },
} as const;


// Assumes PROFILE is available in scope (as in your snippet).
// If you'd rather pass it as a prop, switch to: function Profile({ PROFILE }: { PROFILE: Profile })
export default function Profile() {
  const initials = (name?: string) =>
    (name ?? "SC")
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  const openMailTo = () => {
    toast.info("Opening your email client…");
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      "Inquiry about collaboration / Hire"
    )}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy email");
    }
  };

  return (
    <TooltipProvider delayDuration={100}>
      <section id="profile" className="space-y-6">
        {/* Profile */}
        <Card className="overflow-hidden relative">
          {/* animated header gradient */}
          <CardHeader className="p-0">
            <div className="relative">
              <div className="h-14 w-full bg-gradient-to-r from-primary/15 via-accent/15 to-secondary/15 animate-gradient-x" />
              {/* 1px gradient hairline */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_80%_at_20%_0%,#000_10%,transparent_60%)]" />
              <div className="absolute inset-0 backdrop-blur-[1px]" />
              <div className="relative px-6 py-3 flex items-center justify-between">
                <CardTitle className="text-2xl">Profile</CardTitle>

                {PROFILE.links?.resume && (
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => toast.info("Opening resume…")}
                  >
                    <a
                      href={PROFILE.links.resume}
                      target="_blank"
                      rel="noreferrer"
                    >
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
                  <Avatar className="h-24 w-24 ring-2 ring-primary/30 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                    <AvatarImage src={PROFILE.image} alt={PROFILE.name} />
                    <AvatarFallback className="font-semibold">
                      {initials(PROFILE.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate max-w-[16rem]">
                    {PROFILE.address}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                    onClick={copyEmail}
                  >
                    <Copy size={16} />
                    Copy Email
                  </Button>
                  <Button size="sm" className="gap-2" onClick={openMailTo}>
                    <Mail size={16} />
                    Hire Me
                  </Button>
                </div>
              </div>

              {/* Right: details */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{PROFILE.name}</p>
                  <Separator className="my-2" />

                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium break-all">{PROFILE.email}</p>
                  <Separator className="my-2" />

                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">{PROFILE.address}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Education</p>
                  <ul className="space-y-2 text-sm">
                    {PROFILE.education.map((e) => (
                      <li
                        key={e.level}
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="font-medium">{e.level}</span>
                        <span className="text-muted-foreground">
                          {e.institution} — {e.year}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* optional compact badges for most recent item */}
                  {PROFILE.education?.[0] && (
                    <div className="pt-1">
                      <Badge variant="secondary" className="mr-2">
                        {PROFILE.education[0].level}
                      </Badge>
                      <Badge variant="outline">{PROFILE.education[0].year}</Badge>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <Separator className="my-6" />

            {/* Socials */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <SocialIcon href={PROFILE.links.facebook} label="Facebook">
                <Facebook size={18} />
              </SocialIcon>
              <SocialIcon href={PROFILE.links.twitter} label="Twitter / X">
                <Twitter size={18} />
              </SocialIcon>
              <SocialIcon href={PROFILE.links.linkedin} label="LinkedIn">
                <Linkedin size={18} />
              </SocialIcon>
              <SocialIcon href={PROFILE.links.github} label="GitHub">
                <Github size={18} />
              </SocialIcon>
              <SocialIcon href={PROFILE.links.leetcode} label="LeetCode">
                <Code size={18} />
              </SocialIcon>
              <SocialIcon href={PROFILE.links.resume} label="Download Resume">
                <FileText size={18} />
              </SocialIcon>
            </div>
          </CardContent>
        </Card>

        {/* Background */}
        <Card id="background" className="relative">
          <CardHeader className="pb-3">
            <CardTitle>Background</CardTitle>
          </CardHeader>
          {/* header hairline */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <CardContent className="space-y-4">
            <p className="leading-relaxed text-foreground/90">
              {PROFILE.background}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button onClick={openMailTo} className="gap-2">
                <Mail size={16} /> Hire Me
              </Button>

              <Button asChild variant="secondary" className="gap-2">
                <a
                  href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                    "Inquiry about collaboration / Hire"
                  )}`}
                  onClick={() => toast.info("Opening your email client…")}
                >
                  <Mail size={16} /> Email
                </a>
              </Button>

              {PROFILE.links?.resume && (
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 transition-[background-position] bg-[linear-gradient(90deg,transparent,transparent,theme(colors.accent/20))] bg-[length:200%_100%] hover:animate-shine"
                  onClick={() => toast.info("Opening resume…")}
                >
                  <a
                    href={PROFILE.links.resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileText size={16} /> View Resume
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </section>
    </TooltipProvider>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) return null;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur-sm shadow-sm ring-1 ring-inset ring-white/5 transition hover:scale-[1.05] hover:bg-accent/40 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {children}
          <span className="sr-only">{label}</span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="bottom">{label}</TooltipContent>
    </Tooltip>
  );
}
