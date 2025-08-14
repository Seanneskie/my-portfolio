import Profile from "@/components/profile";

export default function HomePage() {
  return (
    <main>
      <section className="relative flex h-[60vh] items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/static/bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-4xl font-bold md:text-5xl">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg md:text-xl">
            Exploring ideas and building solutions through code.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <Profile />
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-400">
          My Work
        </h1>
      </div>
    </main>
  );
}
