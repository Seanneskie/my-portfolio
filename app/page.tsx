import Profile, { MyStory } from "@/components/profile";
import Banner from "@/components/banner";

export default function HomePage() {
  return (
    <main>
      <Banner
        title="Build. Ship. Iterate."
        subtitle="Full-stack apps with Django & Next.js. Data visualization with Python, SQL, and Charting."
        backgroundImage="/static/bg_2.jpg" // swap to an existing asset
        imageAlt="Clean developer workspace with code and charts"
        align="left"
        height="lg"
        parallax
        actions={
          <>
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl px-5 py-2.5 bg-white/90 text-gray-900 hover:bg-white transition shadow"
            >
              View Projects
            </a>
            <a
              href="mailto:seannecanete32@gmail.com"
              className="inline-flex items-center rounded-xl px-5 py-2.5 bg-teal-500/90 text-white hover:bg-teal-500 transition shadow"
            >
              Contact Me
            </a>
          </>
        }
      />
      <div className="container mx-auto max-w-7xl space-y-16 px-4 py-12">
        <MyStory />
        <Profile />
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-400">
          My Work
        </h1>
      </div>
    </main>
  );
}
