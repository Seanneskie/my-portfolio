"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <header className="relative z-50 border-b bg-gradient-to-r from-teal-600/15 to-transparent dark:from-teal-400/15 dark:to-transparent">
      <span className="pointer-events-none absolute inset-0 dot-pattern opacity-20 blur-sm" />
      <div className="relative container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold text-black dark:text-white hover:opacity-90"
        >
          Seanne Cañete
        </Link>

        <div className="flex items-center gap-2">
          {/* Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-black dark:text-white rounded-md
                     hover:bg-neutral-100 dark:hover:bg-neutral-800
                     focus-visible:ring-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/50
                     relative z-[70]" // ensure trigger sits above the overlay
                >
                  Menu
                </NavigationMenuTrigger>

                <NavigationMenuContent
                  className="relative z-[70] overflow-visible
                     rounded-md bg-white dark:bg-neutral-900
                     border border-neutral-200 dark:border-neutral-800 shadow-xl"
                >
                  <span className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />
                  <ul className="relative z-10 flex min-w-48 flex-col p-2">
                    {[
                      { href: "/", label: "Home" },
                      { href: "/projects", label: "Projects" },
                      { href: "/courses", label: "Courses" },
                      { href: "/certificates", label: "Certificates" },
                      { href: "/awards", label: "Awards" },
                      { href: "/work-experiences", label: "Work Experiences" },
                    ].map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={[
                              "block rounded-md px-3 py-2 transition-colors",
                              // enforce black/white text
                              "text-black dark:text-white",
                              // high-contrast hover state
                              "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                              // keep focus visible
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/50",
                            ].join(" ")}
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme toggle */}
          <ModeToggle className="text-black hover:opacity-90 dark:text-white" />
        </div>
      </div>
    </header>
  );
}
