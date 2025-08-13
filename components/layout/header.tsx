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
    <header className="relative overflow-hidden border-b bg-gradient-to-r from-teal-500 to-transparent bg-size-200 animate-gradient-x">
      <span className="pointer-events-none absolute inset-0 dot-pattern opacity-30 blur-sm animate-dots" />
      <div className="relative container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold text-teal-600 hover:text-teal-700">
          Seanne Cañete
        </Link>
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-gradient-to-r from-teal-500 to-transparent bg-size-200 bg-clip-text text-transparent animate-gradient-x">
                  Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent className="relative overflow-hidden rounded-md bg-gradient-to-r from-teal-500 to-transparent bg-size-200 animate-gradient-x">
                  <span className="pointer-events-none absolute inset-0 dot-pattern opacity-30 blur-sm animate-dots" />
                  <ul className="relative z-10 flex flex-col p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/" className="transition-colors duration-300 hover:text-teal-500">
                          Home
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/projects" className="transition-colors duration-300 hover:text-teal-500">
                          Projects
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/courses" className="transition-colors duration-300 hover:text-teal-500">
                          Courses
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/certificates" className="transition-colors duration-300 hover:text-teal-500">
                          Certificates
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/awards" className="transition-colors duration-300 hover:text-teal-500">
                          Awards
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/work-experiences"
                          className="transition-colors duration-300 hover:text-teal-500"
                        >
                          Work Experiences
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300" />
        </div>
      </div>
    </header>
  );
}

