import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 text-sm text-muted-foreground">
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

