import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Retaining Wall Installation | San Jose, CA | Vazquez Millan Concrete",
  description:
    "Does your yard have a large slope? Vazquez Millan Concrete can help with our retaining wall installation services in San Jose, CA.",
};

const benefits = [
  "Preventing sinkholes",
  "Reducing the risk of flooding",
  "Lowering yard maintenance requirements",
  "Keeping soil in place and preventing erosion",
];

export default function RetainingWallsPage() {
  return (
    <>
      <PageHero
        title="RETAINING WALLS"
        subtitle="Beautify your yard while solving real drainage and erosion challenges."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-walls2-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                BEAUTIFY YOUR YARD
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                SCHEDULE A RETAINING WALL INSTALLATION WITH VAZQUEZ MILLAN
                CONCRETE IN SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                Does your yard have a large slope? Or maybe it seems a little
                plain. Either way, Vazquez Millan Concrete can help with our
                retaining wall installation services in San Jose, CA.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-8">
                We install and repair both interior and exterior retaining walls.
                Trust us to build a strong, attractive retaining wall that will
                beautify your home for years to come. Reach out to us right away
                to get a free in-person or over-the-phone estimate.
              </p>
              <Link href="/contact" className="btn-amber">
                Get a Free Estimate
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-walls2-1920w.jpg"
                alt="Retaining walls in a garden"
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
              TOP BENEFITS OF RETAINING WALLS
            </h2>
          </div>
          <p className="text-concrete-gray leading-relaxed mb-6">
            Retaining walls do so much more than boost your curb appeal. They
            also have several practical benefits, such as:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {benefits.map((b) => (
              <div key={b} className="bg-concrete-black border-l-4 border-amber-brand p-4">
                <p className="text-concrete-light text-sm">{b}</p>
              </div>
            ))}
          </div>
          <p className="text-concrete-gray leading-relaxed mb-8">
            Ready to enjoy all of the above benefits and more? Set up an
            appointment for a retaining wall installation today.
          </p>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="READY TO TRANSFORM YOUR YARD?" />
    </>
  );
}
