interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export default function Banner({ title, subtitle, backgroundImage }: BannerProps) {
  return (
    <section className="relative flex h-[60vh] items-center justify-center overflow-hidden text-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/20" />
      <div className="relative z-10 max-w-3xl px-4 text-white">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

