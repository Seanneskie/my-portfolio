"use client";

import React from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter, Facebook, FileText, Code, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

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

function openMailTo() {
  const subject = encodeURIComponent("Inquiry about collaboration / Hire");
  const body = encodeURIComponent(`Hi Seanne,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity.%0D%0A%0D%0AThanks,%0D%0A`);
  toast.success("Opening your email client to contact Seanne…");
  window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
}

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a href={href} target="_blank" rel="noreferrer" className="rounded-full p-2 transition-colors hover:bg-primary/10 hover:text-primary" aria-label={label}>
          {children}
        </a>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function ProfileSection() {
  return (
    <section id="profile" className="space-y-6">
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
          <CardTitle className="text-2xl">Profile</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto,1fr]">
            <div className="flex items-start gap-4">
              <Avatar className="h-24 w-24 ring-2 ring-primary/30">
                <AvatarImage src={PROFILE.image} alt={PROFILE.name} />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </div>

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
                <ul className="space-y-1 text-sm">
                  {PROFILE.education.map((e) => (
                    <li key={e.level} className="flex items-center justify-between gap-3">
                      <span className="font-medium">{e.level}</span>
                      <span className="text-muted-foreground">{e.institution} — {e.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-wrap items-center justify-center gap-4">
            <SocialIcon href={PROFILE.links.facebook} label="Facebook"><Facebook size={20} /></SocialIcon>
            <SocialIcon href={PROFILE.links.twitter} label="Twitter / X"><Twitter size={20} /></SocialIcon>
            <SocialIcon href={PROFILE.links.linkedin} label="LinkedIn"><Linkedin size={20} /></SocialIcon>
            <SocialIcon href={PROFILE.links.github} label="GitHub"><Github size={20} /></SocialIcon>
            <SocialIcon href={PROFILE.links.leetcode} label="LeetCode"><Code size={20} /></SocialIcon>
            <SocialIcon href={PROFILE.links.resume} label="Download Resume"><FileText size={20} /></SocialIcon>
          </div>
        </CardContent>
      </Card>

      <Card id="background">
        <CardHeader>
          <CardTitle>Background</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/90 leading-relaxed">{PROFILE.background}</p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={openMailTo} className="gap-2"><Mail size={16} /> Hire Me</Button>
            <Button asChild variant="secondary" className="gap-2">
              <a href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Inquiry about collaboration / Hire")}`} onClick={() => toast.info("Opening your email client…")}>
                <Mail size={16} /> Email
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href={PROFILE.links.resume} target="_blank" rel="noreferrer">
                <FileText size={16} /> View Resume
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
