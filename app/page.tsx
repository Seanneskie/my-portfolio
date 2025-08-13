import ProfileSection from "@/components/Profile";
import ProjectsSection from "@/components/projects/projects-section";

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      <ProfileSection
        name="Seanne Cañete"
        email="seannecanete32@gmail.com"
        address="General Santos City, Philippines"
        profileImage="/static/profile.jpg"
        education={[
          {
            level: "Tertiary",
            institution: "Mindanao State University",
            year: "A.Y 2021 - 2025",
          },
          {
            level: "Senior High School",
            institution: "Mindanao State University",
            year: "A.Y 2019 - 2021",
          },
          {
            level: "Junior High School",
            institution: "GSC SPED Integrated School",
            year: "A.Y 2015 - 2019",
          },
          {
            level: "Elementary",
            institution: "The Heritage Academy of the Philippines",
            year: "A.Y 2009 - 2015",
          },
        ]}
        socialLinks={{
          facebook: "https://www.facebook.com/seanne.canete.7/",
          twitter: "https://x.com/Seanneskie",
          linkedin: "https://www.linkedin.com/in/seanne-ca%C3%B1ete-8b09322a1/",
          github: "https://github.com/Seanneskie",
          leetcode: "https://leetcode.com/u/seanneskie32/",
          resume: "/static/canete_resume.pdf",
        }}
        background="Hello! I'm Seanne Cañete, an Information Technology graduate at Mindanao State University – General Santos City with a passion for full-stack development..."
        onHireMe={() => window.open("mailto:seannecanete32@gmail.com")}
      />

      <h1 className="text-3xl font-bold tracking-tight mb-6">My Work</h1>
      <ProjectsSection />
    </main>
  );
}
