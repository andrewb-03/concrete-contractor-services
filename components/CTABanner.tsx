import Link from "next/link";
import { Phone } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
}

export default function CTABanner({
  headline = "READY TO START YOUR PROJECT?",
  subheadline = "Get a free, no-obligation estimate from San Jose's trusted concrete experts.",
}: CTABannerProps) {
  return (
    <section className="relative bg-concrete-dark py-20 overflow-hidden">
      {/* Amber accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-brand" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-5xl sm:text-7xl text-concrete-offwhite tracking-wide leading-none mb-4">
          {headline}
        </h2>
        <p className="text-concrete-gray text-lg mb-10">{subheadline}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:4086908051" className="btn-amber flex items-center justify-center gap-2">
            <Phone size={18} />
            Call (408) 690-8051
          </a>
          <Link href="/contact" className="btn-outline">
            Contact Us Online
          </Link>
        </div>
      </div>
    </section>
  );
}
