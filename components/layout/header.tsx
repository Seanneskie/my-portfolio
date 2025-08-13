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
    <header className="border-b bg-gradient-to-r from-primary/20 via-secondary/20 to-background bg-size-200 animate-gradient-x">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">
          Seanne Cañete
        </Link>
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-clip-text text-transparent animate-gradient-x">
                  Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/" className="transition-colors duration-300 hover:text-accent">
                          Home
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#projects"
                          className="transition-colors duration-300 hover:text-accent"
                        >
                          Projects
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

