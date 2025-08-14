"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { openMailTo } from "@/lib/profile";
import { toast } from "sonner";
import type { ProfileData } from "./types";

export default function BackgroundCard({ profile }: { profile: ProfileData }) {
  const autoplay = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false })
  );

  const slides = [
    // 1 — role & focus
    "I’m a dedicated Django Web App Developer with hands-on full-stack experience. I build seamless, user-friendly systems that turn real-world problems into simple, reliable workflows.",
    // 2 — differentiator
    "What sets me apart is bridging technical depth and business needs—leveraging Next.js 15, React, and Django. I’ve designed impactful systems like a vessel inventory management platform and a government information system.",
    // 3 — outcomes & recognition
    "Recent projects improved operational efficiency by 70%+ and streamlined data workflows by 50%+. I’ve earned Cum Laude honors and won multiple national competitions—evidence of drive and adaptability.",
    // 4 — goals
    "I’m excited to grow further in full-stack development and welcome intros to opportunities or advice. I aim to contribute my expertise to innovative, collaborative teams."
  ];

  return (
    <Card id="background" className="relative overflow-hidden">
      {/* subtle card backdrop */}
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

      <CardContent className="relative z-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[35%_65%] items-stretch">
          {/* LEFT: portrait image fills column */}
          <div className="relative h-64 md:h-auto overflow-hidden rounded-xl ring-1 ring-teal-600/20 dark:ring-teal-400/20 shadow-sm">
            <img
              src="/static/image_1.jpg"
              alt="Profile portrait"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20" />
          </div>

          {/* RIGHT: text carousel + CTAs */}
          <div className="flex min-h-64 flex-col justify-between gap-4">
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={[autoplay.current]}
              className="w-full"
            >
              <CarouselContent>
                {slides.map((text, i) => (
                  <CarouselItem key={i} className="px-1">
                    <p className="leading-relaxed text-black dark:text-white">
                      {text}
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-3 flex items-center gap-2">
                <CarouselPrevious className="h-8 w-8" />
                <CarouselNext className="h-8 w-8" />
              </div>
            </Carousel>

            <div className="mt-2 flex flex-wrap gap-3">
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

              {/* Secondary: email with subject */}
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

              {/* Outline: resume (shimmer) */}
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
