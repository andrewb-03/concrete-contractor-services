import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Concrete Piers | San Jose, CA | Vazquez Millan Concrete",
  description:
    "To get a free estimate for a foundation of pier blocks, contact us today. We can deliver your estimate over the phone or in person. Call (408) 690-8051 to schedule services.",
};

const pierProcess = [
  "Predrilling",
  "Casting",
  "Putting in rebars",
  "Pouring concrete",
];

export default function PiersPage() {
  return (
    <>
      <PageHero
        title="CONCRETE PIERS"
        subtitle="Building in a flood zone? Vazquez Millan Concrete can install concrete piers in San Jose, CA."
        imageUrl="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-piers-1920w.jpg"
      />

      <section className="bg-concrete-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="h-1 w-12 bg-amber-brand mb-4" />
              <h2 className="font-display text-5xl text-concrete-offwhite tracking-wide leading-none mb-3">
                BUILDING IN A FLOOD ZONE?
              </h2>
              <h3 className="font-display text-xl text-amber-brand tracking-wide mb-6">
                VAZQUEZ MILLAN CONCRETE CAN INSTALL CONCRETE PIERS FOR YOUR
                HOME OR PROPERTY IN SAN JOSE, CA
              </h3>
              <p className="text-concrete-light leading-relaxed mb-4">
                Did you recently find the perfect location to build your home or
                commercial property? If that spot is in a flood zone, turn to
                Vazquez Millan Concrete. We can install concrete piers in San
                Jose, CA.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-8">
                This will give your property a sturdy structure while elevating
                it to protect it against flooding. To get a free estimate for a
                foundation of pier blocks, contact us today. We can deliver your
                estimate over the phone or in person.
              </p>
              <Link href="/contact" className="btn-amber">
                Get a Free Estimate
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://lirp.cdn-website.com/d2b3b74f/dms3rep/multi/opt/vazquezmillanconcrete-piers-1920w.jpg"
                alt="Piers for commercial buildings"
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
              LET US HANDLE THE ENTIRE PIER FOUNDATION INSTALLATION PROCESS
            </h2>
          </div>
          <p className="text-concrete-gray leading-relaxed mb-6">
            Installing concrete piers takes a lot of hard work and precision.
            Thankfully, we have extensive experience handling the entire
            installation process, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {pierProcess.map((step) => (
              <div key={step} className="bg-concrete-black border-l-4 border-amber-brand p-4 text-center">
                <p className="text-concrete-light text-sm font-body">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-concrete-gray leading-relaxed mb-8">
            Let us handle your foundation installation from beginning to end.
            Get in touch with us today to learn more about the process to
            install pier blocks.
          </p>
          <Link href="/contact" className="btn-amber">
            Learn More
          </Link>
        </div>
      </section>

      <CTABanner headline="NEED PIER BLOCKS INSTALLED?" />
    </>
  );
}
