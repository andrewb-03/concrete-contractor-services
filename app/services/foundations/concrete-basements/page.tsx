import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Concrete Basement Installation, Basement Waterproofing | San Jose, CA | Vazquez Millan Concrete",
  description:
    "A new basement can go a long way in creating the extra space you need for your residential or commercial property. Vazquez Millan Concrete can install your concrete basement!",
};

const benefits = [
  "Are fire-resistant",
  "Are stronger than block basements",
  "Provide ample space for storage or additional rooms",
];

export default function ConcreteBasementsPage() {
  return (
    <>
      <PageHero
        title="CONCRETE BASEMENTS"
        subtitle="Get the extra space you need — basement installation and repair in San Jose, CA."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-basement-in-luxury-home-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                GET THE EXTRA SPACE YOU NEED
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                WE INSTALL CONCRETE BASEMENTS IN SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                A new basement can go a long way in creating the extra space you
                need for your residential or commercial property. Vazquez Millan
                Concrete can install your concrete basement in San Jose, CA.
                We&apos;ll work efficiently to create a solid foundation and
                complete work in a timely manner. In addition to basement
                installations, we also handle basement repairs.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-8">
                Expand your property with a new basement — reach out to us for
                installation services today.
              </p>
              <Link href="/contact" className="btn-amber">
                Get a Free Estimate
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-basement-in-luxury-home-1920w.jpg"
                alt="Basement in luxury home"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-concrete-dark py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="h-1 w-12 bg-amber-brand mb-4" />
            <h2 className="font-display text-4xl text-concrete-offwhite tracking-wide">
              WONDERING IF YOU SHOULD INSTALL A BASEMENT?
            </h2>
          </div>
          <p className="text-concrete-gray leading-relaxed mb-6">
            If you&apos;re still in the planning stages of building your new
            home, you have a chance to build a spacious basement on your
            property. Concrete basements are a popular choice for many
            homeowners because they:
          </p>
          <ul className="space-y-3 mb-6">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-concrete-light text-sm">
                <span className="w-1.5 h-1.5 bg-amber-brand rounded-full flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <p className="text-concrete-gray leading-relaxed mb-8">
            A sturdy basement made from poured concrete provides a massive
            amount of usable space without the threat of a cave in. To schedule
            your basement installation, contact us now.
          </p>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="NEED MORE SPACE? LET'S TALK." />
    </>
  );
}
