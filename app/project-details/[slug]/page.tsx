import { promises as fs } from "fs";
import path from "path";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const filePath = path.join(process.cwd(), "public", "project-details", `${params.slug}.html`);
  let html = "";

  try {
    html = await fs.readFile(filePath, "utf8");
  } catch {
    return (
      <main className="container mx-auto max-w-5xl px-4 py-12">
        <p>Project details not found.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
