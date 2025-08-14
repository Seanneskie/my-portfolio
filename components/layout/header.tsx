"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
            <NavigationMenuList className="flex items-center gap-1 overflow-x-auto">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  pathname === href ||
                  (href !== "/" && pathname?.startsWith(href));

                return (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        className={[
                          "block rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                          "text-black dark:text-white",
                          "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/50",
                          isActive ? "bg-neutral-100 dark:bg-neutral-800" : "",
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}
                      >
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
