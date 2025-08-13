import ProfileSection from "@/components/profile/ProfileSection";
import ProjectsSection from "@/components/projects/projects-section";

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      <ProfileSection />


      <h1 className="text-3xl font-bold tracking-tight mb-6">My Work</h1>
    </main>
  );
}
