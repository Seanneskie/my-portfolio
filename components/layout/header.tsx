"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/courses", label: "Courses" },
  { href: "/certificates", label: "Certificates" },
  { href: "/awards", label: "Awards" },
  { href: "/work-experiences", label: "Work Experiences" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <header className="relative z-50 border-b bg-gradient-to-r from-teal-600/15 to-transparent dark:from-teal-400/15 dark:to-transparent">
      <span className="pointer-events-none absolute inset-0 dot-pattern opacity-20 blur-sm" />
      <div className="relative container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold text-black dark:text-white hover:opacity-90"
        >
          Dev Portfolio
        </Link>

        <div className="flex items-center gap-3">
          {/* Links row */}
          <NavigationMenu>
            <NavigationMenuList
              // group + arbitrary selectors to affect siblings when the list is hovered
              className={[
                "group flex items-center gap-1 transition-[gap] duration-300",
                "group-hover:gap-3",
                // fade/scale non-hovered items when any item is hovered
                "[&>li]:transition [&>li]:duration-300",
                "group-hover:[&>li:not(:hover)]:opacity-60",
                "group-hover:[&>li:not(:hover)]:scale-95",
              ].join(" ")}
            >
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));
                const isHot = hovered === href || isActive;

                return (
                  <NavigationMenuItem
                    key={href}
                    onMouseEnter={() => setHovered(href)}
                    onMouseLeave={() => setHovered((prev) => (prev === href ? null : prev))}
                  >
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        className={[
                          "relative block rounded-md px-3 py-1.5 text-sm font-medium transition",
                          "text-black dark:text-white",
                          "hover:-translate-y-0.5 hover:shadow-sm",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/50",
                          // active page: teal text + subtle ring
                          "aria-[current=page]:text-teal-700 dark:aria-[current=page]:text-teal-300",
                          "aria-[current=page]:ring-1 aria-[current=page]:ring-teal-500/40 dark:aria-[current=page]:ring-teal-400/30",
                          // underline that grows in
                          "after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:scale-x-0",
                          "after:origin-left after:transition-transform after:duration-300",
                          "after:bg-teal-600/80 dark:after:bg-teal-400/80",
                          "hover:after:scale-x-100 aria-[current=page]:after:scale-x-100",
                        ].join(" ")}
                      >
                        {/* Animated pill highlight on hover/active */}
                        {isHot && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-md bg-teal-600/10 ring-1 ring-teal-600/25 dark:bg-teal-400/10 dark:ring-teal-400/25"
                            transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.3 }}
                          />
                        )}
                        {label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme toggle */}
          <ModeToggle className="text-black hover:opacity-90 dark:text-white" />
        </div>
      </div>
    </header>
  );
}
