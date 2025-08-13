import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-gradient-to-r from-teal-500 to-transparent bg-size-200 animate-gradient-x">
      <span className="pointer-events-none absolute inset-0 dot-pattern opacity-30 blur-sm animate-dots" />
      <div className="relative container mx-auto flex h-16 items-center justify-between px-4 text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Seanne Cañete</p>
        <div className="flex gap-4">
          <Link
            href="https://github.com"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}

