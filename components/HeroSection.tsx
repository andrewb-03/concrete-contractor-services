import Link from "next/link";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  imageUrl?: string;
  height?: "full" | "half";
}

export default function HeroSection({
  headline = "BUILT TO LAST.",
  subheadline = "Concrete & Asphalt Contractor Services — San Jose, CA",
  primaryCTA = { label: "Get a Free Estimate", href: "/contact" },
  secondaryCTA = { label: "View Our Work", href: "/gallery" },
  imageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  height = "full",
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        height === "full" ? "min-h-screen" : "min-h-[55vh]"
      }`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-concrete-black/75 z-10" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 z-10 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-8 max-w-5xl mx-auto pt-20">
        {/* Amber accent line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-amber-brand" />
          <span className="font-display text-amber-brand tracking-[0.3em] text-sm">
            SAN JOSE, CA
          </span>
          <div className="h-px w-16 bg-amber-brand" />
        </div>

        <h1 className="font-display text-7xl sm:text-9xl lg:text-[10rem] text-concrete-offwhite leading-none tracking-wider mb-6">
          {headline}
        </h1>

        <p className="font-body text-lg sm:text-xl text-concrete-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryCTA.href} className="btn-amber">
            {primaryCTA.label}
          </Link>
          <Link href={secondaryCTA.href} className="btn-outline">
            {secondaryCTA.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
