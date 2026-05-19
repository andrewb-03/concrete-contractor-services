interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

export default function PageHero({
  title,
  subtitle,
  imageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-end min-h-[45vh] pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-concrete-black/80 z-10" />
      {/* Diagonal bottom cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-concrete-black z-20"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="h-1 w-16 bg-amber-brand mb-4" />
        <h1 className="font-display text-6xl sm:text-8xl text-concrete-offwhite tracking-wide leading-none">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-concrete-gray text-lg max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
