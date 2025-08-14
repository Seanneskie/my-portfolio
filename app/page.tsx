import Profile, { MyStory } from "@/components/profile";
import Banner from "@/components/banner";

export default function HomePage() {
  return (
    <main>
      <Banner
        title="Welcome to My Portfolio"
        subtitle="Exploring ideas and building solutions through code."
        backgroundImage="/static/bg_2.jpg"
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

